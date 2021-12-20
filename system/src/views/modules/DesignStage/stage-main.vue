<template>
  <section class="stage-main-root">
    <div id="scene">
    </div>
  </section>
</template>
<script>
import * as Three from '@/utils/three/three.module';
import { OrbitControls } from '@/utils/three/controls/OrbitControls';
import { TransformControls } from '@/utils/three/controls/TransformControls';
import { PointerLockControls } from '@/utils/three/controls/PointerLockControls';
import { FBXLoader } from '@/utils/three/loaders/FBXLoader';
/*roamTest相关 start*/
let pointerControl;
let velocity = new Three.Vector3();
let rate = 0.1;
/*roamTest相关 end*/
/*SceneCon start*/
let operationData = [];//记录所有操作数据
//记录当前是第几步操作，changeData里则存了前n-1步操作，从0开始为第一步
let operationSteps = 0;
let fromPosition = new Three.Vector3(),
    fromRotation = new Three.Vector3(),
    fromScale    = new Three.Vector3();
/*SceneCon end*/
/*Operate start*/
let selectedGroup = null;
let rightArgs;
/*Operate end*/
/*basicArgs start*/
let lengthRange = document.getElementById('lengthRange');
let lengthNumber = document.getElementById('lengthNumber');
let widthRange = document.getElementById('widthRange');
let widthNumber = document.getElementById('widthNumber');
let heightRange = document.getElementById('heightRange');
let heightNumber = document.getElementById('heightNumber');
let altitudeRange = document.getElementById('altitudeRange');
let altitudeNumber = document.getElementById('altitudeNumber');
let uniformScale = document.getElementById('uniformScale');
let typeArr = ['length', 'width', 'height', 'altitude'];
let isSave = true;
/*basicArgs end*/
let managerClass,
    IndoorControl;
//当前移动的模型
let currentDodel,
    currentGroup,
    currentObjecs;
export default {
  name       : 'stage-main',
  components : {},
  props      : {},
  data(){
    return {
      show : false,
    };
  },
  computed : {},
  created(){
    // this.loadProductFile();
  },
  mounted(){
    this.$nextTick(() => {
      this.show = true;
      // rightArgs = document.getElementsByClassName('right-menu-bottom-args');
      this.manager(this);
      this.IndoorControl();
      managerClass.init();
      managerClass.animate();
      // document.getElementById('scene').addEventListener('pointermove', this.selectObject);
    });
  },
  methods : {
    //读取项目
    loadProductFile(){
      let query = this.$route.query;
      if (query && query.path) {
        this.loadJson(query.path);
      }
    },
    manager(vm){
      let _this = vm;
      class Manager {
        constructor(){
          this.container = document.getElementById('scene');
          this.renderer = new Three.WebGLRenderer({antialias : true});
          this.raycaster = new Three.Raycaster();
          this.keyStates = {};
          this.sceneClass = null;
          //json读取的数据,存json对象
          this.allModelsData = [];
          this.allScenesData = [];
          //roam mode
          this.mode = 'standard';
        }
        init(){
          const scope = this;
          let initScene = {
            'name'           : 'init',
            'cameraProperty' : {
              'fov'      : 50,
              'near'     : 1,
              'far'      : 5000,
              'position' : {
                'x' : 7.54,
                'y' : 103.53,
                'z' : -165.54,
              },
              'rotation' : {
                'x' : -2.62,
                'y' : 0.03,
                'z' : 3.12,
              },
            },
          };
          this.sceneClass = _this.SceneClass(initScene);
          IndoorControl.sceneCamera = this.sceneClass.camera;
          //需要在sceneClass初始化trans后绑定
          // bindInput();
          // _this.roam();
          //渲染初始化
          this.renderer.setPixelRatio(window.devicePixelRatio);
          this.renderer.setSize(this.container.offsetWidth, this.container.offsetHeight);
          this.renderer.shadowMap.enabled = true;
          this.container.appendChild(this.renderer.domElement);
          window.addEventListener('resize', () => this.onWindowResize(scope), false);
          Three.Cache.enabled = true;
          /*this.readAllSceneJson();
          this.readAllModelJson();*/
        }
        readAllModelJson(){
          const scope = this;
          const loader = new Three.FileLoader();
          loader.load('src/data.json',
              data => scope.allModelsData = JSON.parse(data),
          );
        }
        readAllSceneJson(){
          const scope = this;
          const loader = new Three.FileLoader();
          loader.load('src/scene.json',
              data => scope.allScenesData = JSON.parse(data));
        }
        onWindowResize(manager){
          console.log(manager.sceneClass.camera.aspect);
          manager.sceneClass.camera.aspect = manager.container.offsetWidth / manager.container.offsetHeight;
          console.log(manager.sceneClass.camera.aspect);
          manager.sceneClass.camera.updateProjectionMatrix();
          manager.renderer.setSize(manager.container.offsetWidth, manager.container.offsetHeight);
        }
        animate(){
          requestAnimationFrame(managerClass.animate);
          // _this.roamUpdate();
          managerClass.sceneClass.camera.updateProjectionMatrix();
          managerClass.renderer.render(managerClass.sceneClass.scene, managerClass.sceneClass.camera);
        }
        render(){
          this.renderer.render(managerClass.sceneClass.scene, managerClass.sceneClass.camera);
        }
      }
      // return new Manager();
      managerClass = new Manager();
    },
    SceneClass(sceneData){
      let _this = this;
      class SceneClass {
        constructor(sceneData){
          //暂时未用
          this.uuid = (sceneData && sceneData.uuid) ? sceneData.uuid : Three.MathUtils.generateUUID();
          //场景名称
          this.name = sceneData.name ? sceneData.name : null;
          console.log(managerClass);
          this.camera = new Three.PerspectiveCamera(sceneData.cameraProperty.fov,
              managerClass.container.offsetWidth / managerClass.container.offsetHeight,
              sceneData.cameraProperty.near,
              sceneData.cameraProperty.far);
          this.camera.position.copy(sceneData.cameraProperty.position);
          this.camera.rotation.setFromVector3(sceneData.cameraProperty.rotation);
          this.init();
          //场景模型\
          // console.log(sceneData.sceneModel);
          this.sceneModel = sceneData.sceneModel ? _this.getModel(sceneData.sceneModel) : null;
          if (this.sceneModel) this.sceneModel.loadFBX(true).then(() => {
            //主场景的models
            this.models = [];
          });
          //主场景的models
          this.models = [];
        }
        init(){
          const scope = this;
          this.scene = new Three.Scene();
          this.scene.background = new Three.Color(0xF2F2F2);
          IndoorControl.sceneCamera = this.camera;
          let ambientLight = new Three.AmbientLight(0x222222);
          this.scene.add(ambientLight);
          let light = new Three.HemisphereLight(0xffffff, 0xffffff);
          light.position.set(0, 50, 0);
          this.scene.add(light);
          const gridLength = 500;
          let planeGeometry = new Three.PlaneGeometry(gridLength, gridLength);
          let plane = new Three.Mesh(planeGeometry, new Three.MeshPhongMaterial({color : 0xBDBDBD, depthWrite : true}));
          plane.rotation.x = -Math.PI * 0.5;
          plane.receiveShadow = true;
          plane.castShadow = true;
          this.scene.add(plane);
          this.plane = plane;
          this.orbitControl = new OrbitControls(scope.camera, managerClass.renderer.domElement);
          this.boxhelper = new Three.BoxHelper(undefined, 0xF4F4A5);
          this.boxhelper.visible = false;
          this.scene.add(this.boxhelper);
          this.transformControls = new TransformControls(scope.camera, managerClass.renderer.domElement);
          this.scene.add(this.transformControls);
          this.transformControls.addEventListener('dragging-changed',
              event => {
                this.boxhelper.update();
                scope.orbitControl.enabled = !event.value;
                if (event.value === true) {
                  _this.saveOperation(scope.transformControls.mode, scope.transformControls.object, true);
                } else {
                  _this.saveOperation(scope.transformControls.mode, scope.transformControls.object, false);
                }
              });
          //放缩模型时，实时更新参数数据
          this.transformControls.addEventListener('change', () => {
            if (this.transformControls.mode === 'scale') {
              console.log(this.transformControls.object);
            }
          });
          this.scene.add(this.transformControls);
          // document.getElementById('scene').addEventListener('pointerdown', _this.clickObject);
          document.addEventListener('keypress', () => this.keyListener());
          // document.addEventListener('dblclick', enterObject);
          // document.addEventListener('dblclick', _this.dblclickObject);
        }
        //绑定trans按键模式
        keyListener(){
          const scope = this;
          if (managerClass.keyStates['KeyQ']) {
            scope.transformControls.setSpace(scope.transformControls.space === 'local' ? 'world' : 'local');
          } else if (managerClass.keyStates['KeyW']) {
            scope.transformControls.setMode('translate');
          } else if (managerClass.keyStates['KeyE']) {
            scope.transformControls.setMode('rotate');
          } else if (managerClass.keyStates['KeyR']) {
            scope.transformControls.setMode('scale');
          } else if (managerClass.keyStates['KeyX']) {
            scope.transformControls.showX = !scope.transformControls.showX;
          } else if (managerClass.keyStates['KeyY']) {
            scope.transformControls.showY = !scope.transformControls.showY;
          } else if (managerClass.keyStates['KeyZ']) {
            scope.transformControls.showZ = !scope.transformControls.showZ;
          }
        }
        //获取models对应的groups
        getGroups(){
          let groups = [];
          this.models.forEach(model => groups.push(model.group));
          return groups;
        }
      }
      return new SceneClass(sceneData);
    },
    IndoorControl(){
      let _this = this;
      class indoorControl {
        constructor(){
          const scope = this;
          this.fatherModel = null;
          this.sceneCamera = null;
          this.indoorCamera = new Three.PerspectiveCamera(75, managerClass.container.offsetWidth / managerClass.container.offsetHeight, 0.1, 1000);
        }
        cameraChange(model){
          document.getElementById('returnScene').disabled = false;
          this.fatherModel = model;
          let mPosition = model.group.position;
          let rPosition = model.relativePosition;
          let mRotation = model.group.rotation.toVector3();
          let rRotation = model.relativeRotation;
          this.indoorCamera.position.copy(new Three.Vector3().addVectors(mPosition, rPosition));
          this.indoorCamera.rotation.setFromVector3(new Three.Vector3().addVectors(mRotation, rRotation));
          this.sceneCamera = managerClass.sceneClass.camera;
          managerClass.sceneClass.camera = this.indoorCamera;
          managerClass.sceneClass.orbitControl.object = this.indoorCamera;
          managerClass.sceneClass.orbitControl.target = this.fatherModel.group.position;
          managerClass.sceneClass.orbitControl.panSpeed = 0.5;
          managerClass.sceneClass.orbitControl.rotateSpeed = 0.5;
          managerClass.sceneClass.transformControls.camera = this.indoorCamera;
        }
        backScene(){
          document.getElementById('returnScene').disabled = true;
          managerClass.sceneClass.transformControls.detach();
          managerClass.sceneClass.camera = this.sceneCamera;
          managerClass.sceneClass.orbitControl.object = this.sceneCamera;
          managerClass.sceneClass.orbitControl.target = new Three.Vector3();
          managerClass.sceneClass.orbitControl.panSpeed = 1;
          managerClass.sceneClass.orbitControl.rotateSpeed = 1;
          managerClass.sceneClass.transformControls.camera = this.sceneCamera;
          document.addEventListener('dblclick', _this.dblclickObject);
        }
        bindFatherModel(childModel){
          this.fatherModel.group.attach(childModel.group);
        }
        isMainScene(){
          return managerClass.sceneClass.camera === this.sceneCamera;
        }
      }
      // return new indoorControl();
      IndoorControl = new indoorControl();
    },
    /*roamTest相关 start*/
    roam(){
      let _this = this;
      pointerControl = new PointerLockControls(managerClass.sceneClass.camera, managerClass.container);
      let roamBtn = document.getElementById('roam');
      roamBtn.addEventListener('click', () => {
        managerClass.sceneClass.transformControls.detach();
        pointerControl = new PointerLockControls(managerClass.sceneClass.camera, managerClass.container);
        pointerControl.lock();
      });
      pointerControl.addEventListener('lock', () => {
        roamBtn.disabled = true;
        document.addEventListener('keydown', this.onKeyDown(), false);
        document.addEventListener('keyup', this.onKeyUp(), false);
        document.addEventListener('wheel', this.onWheel(), {passive : false});
      });
      pointerControl.addEventListener('unlock', () => {
        roamBtn.disabled = false;
        document.removeEventListener('keydown', this.onKeyDown(), false);
        document.removeEventListener('keyup', this.onKeyUp(), false);
        document.removeEventListener('wheel', this.onWheel());
      });
    },
    roamUpdate(){
      if (pointerControl.isLocked === true) {
        pointerControl.moveRight(velocity.x);
        pointerControl.moveForward(velocity.z);
      }
    },
    onKeyDown(event){
      event.preventDefault();
      switch (event.key) {
        case 'w':
          velocity.z = rate;
          break;
        case 'a':
          velocity.x = -rate;
          break;
        case 's':
          velocity.z = -rate;
          break;
        case 'd':
          velocity.x = rate;
          break;
      }
    },
    onKeyUp(event){
      event.preventDefault();
      switch (event.key) {
        case 'w':
        case 's':
          velocity.z = 0;
          break;
        case 'a':
        case 'd':
          velocity.x = 0;
          break;
      }
    },
    onWheel(event){
      event.preventDefault();
      if (event.deltaY > 0 && rate > 0.04) rate -= 0.01;
      if (event.deltaY < 0 && rate < 0.5) rate += 0.01;
    },
    /*roamTest相关 end*/
    /*Model start*/
    getModel(modelData){
      class Model {
        constructor(modelData){
          //可用区分
          this.uuid = new Three.MathUtils.generateUUID();
          this.name = modelData.name;
          this.url = modelData.url;
          this.position = modelData.position ? modelData.position : new Three.Vector3();
          this.rotation = modelData.rotation ? modelData.rotation : new Three.Vector3();
          this.scale = modelData.scale ? modelData.scale : new Three.Vector3(1, 1, 1);
          //模型内部相机的相对位置，相对角度
          this.relativePosition = modelData.relativePosition ? modelData.relativePosition : new Three.Vector3();
          this.relativeRotation = modelData.relativeRotation ? modelData.relativeRotation : new Three.Vector3();
          //内部模型还是外部模型
          this.isOuterModel = true;
          this.group = null;
        }
        /**
         * 加载模型,可以同步加载
         * @param {boolean} isSceneModel 是否为场景模型
         * @return {Promise}
         */
        loadFBX(isSceneModel = false){
          const scope = this;
          const loader = new FBXLoader();
          // loader.setPath('/Model/');
          loader.setResourcePath('Model/texture/');
          // loader.setPath('http://remote.mofang723.cn:81/test-demo/Model/');
          // loader.setResourcePath('http://remote.mofang723.cn:81/test-demo/Model/texture/');
          loader.setCrossOrigin('Anonymous');
          return new Promise((resolve, reject) => {
                loader.load(
                    scope.url,
                    function(fbxGroup){
                      fbxGroup.castShadow = true;
                      fbxGroup.receiveShadow = true;
                      scope.group = fbxGroup;
                      scope.group.model = scope;
                      fbxGroup.name = scope.name;
                      /*fbxGroup.children = fbxGroup.children.map((item)=>{
                        return scope._ChangeMaterialEmissive(item)
                      })*/
                      console.log(fbxGroup);
                      if (!isSceneModel) {
                        managerClass.sceneClass.models.push(scope);
                        fbxGroup.position.copy(scope.position);
                        fbxGroup.rotation.setFromVector3(scope.rotation);
                        fbxGroup.scale.copy(scope.scale);
                      }
                      console.log(fbxGroup);
                      managerClass.sceneClass.scene.add(fbxGroup);
                      resolve();
                      console.log(managerClass.sceneClass.scene);
                    },
                    xhr => console.log(xhr.loaded / xhr.total * 100 + '%'),
                    error => reject(error),
                );
              },
          );
        }
        _ChangeMaterialEmissive(parent){
          parent.traverse(function(obj){
            if (obj instanceof Three.Mesh) {
              obj.material.emissive = new Three.Color(1, 1, 1);
              obj.material.emissiveIntensity = 1;
              obj.material.emissiveMap = obj.material.map;
            }
          });
        }
      }
      return new Model(modelData);
    },
    /*Model end*/
    /*SceneCon start*/
    saveOperation(type, group, isPrevious = false){
      let _this = this;
      if (isPrevious) {
        switch (type) {
          case 'translate':
            fromPosition = group.position.clone();
            break;
          case 'rotate':
            fromRotation = group.rotation.clone();
            break;
          case 'scale':
            fromScale = group.scale.clone();
            break;
        }
      } else {
        //如果撤销后移动则重新记录步骤
        if (operationSteps !== operationData.length) operationData.splice(operationSteps);
        //当非拖拽变化的时候
        switch (type) {
          case 'translate':
            //如果初始和结束一样，那么返回
            if (fromPosition.equals(group.position.clone())) return;
            operationData[operationSteps] = {
              type         : 'translate',
              group        : group,
              fromPosition : fromPosition,
              toPosition   : group.position.clone(),
            };
            break;
          case 'rotate':
            if (fromRotation.equals(group.rotation.clone())) return;
            operationData[operationSteps] = {
              type         : 'rotate',
              group        : group,
              fromRotation : fromRotation,
              toRotation   : group.rotation.clone(),
            };
            break;
          case 'scale':
            if (fromScale.equals(group.scale.clone())) return;
            operationData[operationSteps] = {
              type      : 'scale',
              group     : group,
              fromScale : fromScale,
              toScale   : group.scale.clone(),
            };
            break;
          case 'add':
            operationData[operationSteps] = {
              type       : 'add',
              sceneClass : managerClass.sceneClass,
              group      : group,
            };
            break;
          case 'delete':
            operationData[operationSteps] = {
              type       : 'delete',
              sceneClass : managerClass.sceneClass,
              group      : group,
            };
            break;
        }
        operationSteps++;
        //button显示控制
        _this.buttonDisabled();
      }
    },
    buttonDisabled(){
      document.getElementById('undo').disabled = operationSteps === 0;
      document.getElementById('redo').disabled = operationSteps === operationData.length;
    },
    /*SceneCon end*/
    /*Operate start*/
    //指针聚焦物体时，显示box
    selectObject(event){
      //在主场景只能选择主场景模型，在模型内部只能选择内部模型
      let intersect = this.getIntersects(event, this.getGroup());
      console.log(intersect);
      if (intersect) {
        //主场景只检测外部模型，内场景只检测外部模型
        if (IndoorControl.isMainScene()) {
          intersect.object.traverseAncestors(elem => {
            if (elem.parent instanceof Scene) {
              selectedGroup = elem;
            }
          });
        } else {
          selectedGroup = intersect.object.parent ? intersect.object.parent : intersect.object;
        }
        //box套在group外
        managerClass.sceneClass.boxhelper.setFromObject(selectedGroup);
        managerClass.sceneClass.boxhelper.visible = true;
      } else {
        selectedGroup = null;
        managerClass.sceneClass.boxhelper.visible = false;
      }
    },
    //鼠标点击模型
    clickObject(event){
      let _this = this;
      switch (event.buttons) {
        case 1://对物体单击左键或者拖动轴，显示轴；单击非物体，解除轴
          if (managerClass.sceneClass.transformControls.dragging) return;
          if (selectedGroup) {
            managerClass.sceneClass.transformControls.attach(selectedGroup);
            /*rightArgs[0].style.display = 'block';
            _this.bindArgs(selectedGroup);*/
          } else {
            // rightArgs[0].style.display = 'none';
            if (!managerClass.sceneClass.transformControls.dragging) {
              managerClass.sceneClass.transformControls.detach();
            }
          }
          break;
        case 2://对物体单击右键，删除物体
          if (selectedGroup) {
            // rightArgs[0].style.display = 'none';
            _this.saveOperation('delete', selectedGroup, false);
            _this.deleteGroup(selectedGroup);
            break;
          }
      }
    },
    //删除模型及其子模型
    deleteGroup(group){
      let _this = this;
      let sceneClass = managerClass.sceneClass;
      sceneClass.boxhelper.visible = false;
      sceneClass.transformControls.detach();
      //主场景中移除group和model，模型内部移除group
      if (IndoorControl.isMainScene()) {
        let modelIndex = _this.getGroup().findIndex(gro => gro === group);
        if (modelIndex > -1) {
          sceneClass.models.splice(modelIndex, 1);
        }
        sceneClass.scene.remove(group);
      } else {
        IndoorControl.fatherGroup.remove(group);
      }
    },
    //获得主场景或内场景的groups
    getGroup(){
      let _this = this;
      if (IndoorControl.isMainScene()) {
        return managerClass.sceneClass.getGroups();
      } else {
        return IndoorControl.fatherGroup.children.filter(child =>
            (child instanceof new Three.Group) && (child.model.isOuterModel === false),
        );
      }
    },
    dblclickObject(){
      let _this = this;
      // rightArgs[0].style.display = 'none';
      if (selectedGroup) {
        //隐藏trans
        managerClass.sceneClass.transformControls.detach();
        //获取点击建筑的模型
        let model = selectedGroup.model;
        IndoorControl.cameraChange(model);
        document.removeEventListener('dblclick', this.dblclickObject);
      }
    },
    /*Operate end*/
    /*basicArgs start*/
    bindArgs(group){
      let _this = this;
      //获取物体尺寸
      if (!group) return;
      let size = _this.getBoxSize(group);
      size = size.multiply(group.scale);
      //input的值为模型的数据 可以精简!!!
      //调整前端控件的值
      lengthRange.value = size.x * 1000;
      lengthNumber.value = lengthRange.value;
      widthRange.value = size.z * 1000;
      widthNumber.value = widthRange.value;
      heightRange.value = size.y * 1000;
      heightNumber.value = heightRange.value;
      altitudeRange.value = group.position.y * 1000;
      altitudeNumber.value = altitudeRange.value;
    },
    //获取group的box尺寸
    getBoxSize(group){
      //获取boundingBox的值,调用时保证group非空
      let bufferGeometry;
      if (group.children.length > 0) bufferGeometry = group.children[0].geometry;
      if (!bufferGeometry) return;
      let box3 = bufferGeometry.boundingBox;
      let size = new Three.Vector3();
      box3.getSize(size);
      return size;
    },
    /*basicArgs end*/
    /*加载菜单的场景及模型*/
    menuLoadModle(is_scene, model){
      if (is_scene) {
        managerClass.sceneClass = this.SceneClass(model);
      } else {
        this.dragModelInScene(model);
      }
    },
    /*载入及移动模型相关*/
    dragModelInScene(modelData){
      this.cancelPutModel();
      if (!modelData) return;
      currentDodel = this.getModel(modelData);
      currentObjecs = [managerClass.sceneClass.plane];
      if (managerClass.sceneClass.sceneModel) currentObjecs.push(managerClass.sceneClass.sceneModel.group);
      currentObjecs = currentObjecs.concat(managerClass.sceneClass.getGroups());
      managerClass.sceneClass.orbitControl.enabled = false;
      //加载模型完毕再添加监听器,添加box提示当前添加模型
      currentDodel.loadFBX(IndoorControl.isMainScene())
          .then(() => {
            currentGroup = currentDodel.group;
            currentDodel.isOuterModel = IndoorControl.isMainScene();
            //内场景放置模型以该场景为中心
            if (!currentDodel.isOuterModel) currentGroup.position.copy(IndoorControl.fatherGroup.position);
            managerClass.sceneClass.boxhelper.setFromObject(currentDodel.group);
            managerClass.sceneClass.boxhelper.visible = true;
            document.getElementById('scene').addEventListener('mousemove', this.onMouseMove);
            document.getElementById('scene').addEventListener('pointerdown', this.onMouseDown);
          })
          .catch(reason => console.error(reason));
    },
    onMouseMove(mouseEvent){
      //检测对象为除了内部模型外的其他物体
      let intersect = this.getIntersects(mouseEvent, currentObjecs);
      if (intersect && currentDodel.group) {
        currentDodel.group.position.copy(intersect.point);
      }
    },
    onMouseDown(mouseEvent){
      //左击放置
      if (mouseEvent.buttons === 1) {
        //点击放置才保存
        this.saveOperation('add', currentDodel.group, false);
        if (!IndoorControl.isMainScene()) {
          IndoorControl.fatherGroup.attach(currentDodel.group);
        }
        document.getElementById('scene').removeEventListener('mousemove', this.onMouseMove);
        document.getElementById('scene').removeEventListener('pointerdown', this.onMouseDown);
      }
      //右击取消放置
      if (mouseEvent.buttons === 2) {
        this.cancelPutModel();
      }
      currentGroup = null;
      managerClass.sceneClass.orbitControl.enabled = true;
    },
    //取消放置，则移除前一模型及其监听器
    cancelPutModel(){
      if (currentGroup) {
        managerClass.sceneClass.boxhelper.visible = false;
        if (IndoorControl.isMainScene()) {
          managerClass.sceneClass.models.pop();
        }
        managerClass.sceneClass.scene.remove(currentGroup);
        document.getElementById('scene').removeEventListener('mousemove', this.onMouseMove);
        document.getElementById('scene').removeEventListener('pointerdown', this.onMouseDown);
      }
    },
    /**
     * 检测射线和3d对象数组的相交对象
     * @param {MouseEvent}mouseEvent 鼠标事件
     * @param {Object3D[]}objects 用于检测交点的groups
     * @return {intersect|null} 相交对象|空
     */
    getIntersects(mouseEvent, objects){
      if (!objects) return null;
      const mouse = new Three.Vector2();
      mouse.x = ((mouseEvent.clientX - managerClass.container.offsetLeft) / managerClass.container.offsetWidth) * 2 - 1;
      mouse.y = -((mouseEvent.clientY - managerClass.container.offsetTop) / managerClass.container.offsetHeight) * 2 + 1;
      managerClass.raycaster.setFromCamera(mouse, managerClass.sceneClass.camera);
      let intersects = managerClass.raycaster.intersectObjects(objects, true);
      //返回可视相交对象
      for (let intersect of intersects) {
        if (intersect.object.visible) return intersect;
      }
      return null;
    },
    //加载场景json
    loadJson(name){
      let loader = new Three.FileLoader();
      loader.load(name, function(data){
        let dataJson = JSON.parse(data);
        console.log(dataJson);
        managerClass.sceneClass = new SceneClass({
          'name'       : 'dimian',
          'sceneModel' : {
            'name'     : 'dimian',
            'url'      : '/Model/dimian/CK-dimian01-JZ.FBX',
            'position' : {
              'x' : 0,
              'y' : 0.01,
              'z' : 0,
            },
          },
        });
        this.loadModels(dataJson.models);
      });
    },
    loadModels(modelsData){
      modelsData.forEach(outModelData => {
        let outerModel = outModelData.map((modelJson) => {
          return new Three.Model(modelJson);
        });
        outerModel.loadFBX(true)
            .then(() => {
              if (outModelData.innerModels.length > 0) {
                outModelData.innerModels.forEach(inModelData => {
                  let inModel = createModel(inModelData);
                  inModel.loadFBX(false)
                      .then(() => {
                        inModel.isOuterModel = false;
                        outerModel.group.attach(inModel.group);
                        inModel.group.position.copy(inModelData.position);
                        inModel.group.rotation.setFromVector3(inModelData.rotation);
                        inModel.group.scale.copy(inModelData.scale);
                      });
                });
              }
            });
      });
    },
  },
};
</script>
<style scoped lang="scss">
.stage-main-root{
  width: calc(100% - 592px);
  position: relative;
  #scene{
    position: absolute;left: 0;top: 0;
    width: 100%;
    height: 100%;
  }
  #scene > img{
    margin-left: 2px;
    margin-top: 60px;
    width: 100%;
    height: 80%;
  }
}
</style>
