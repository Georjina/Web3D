<template>
  <section
      class="stage-test-root"
      v-loading="loadingScene"
      :element-loading-text="loadText"
      element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <div id="scene" ref="canvas" tabindex="1" @keyup="keyListener"></div>
  </section>
</template>
<script>
/* three插件 */
import * as Three from '../../../utils/three/three.module';
import { OrbitControls } from '../../../utils/three/controls/OrbitControls';
import { TransformControls } from '../../../utils/three/controls/TransformControls';
import { PointerLockControls } from '../../../utils/three/controls/PointerLockControls';
import { FBXLoader } from '../../../utils/three/loaders/FBXLoader';
let container, // div内容
    renderer, // 渲染
    raycaster, // 光线投射用于进行鼠标拾取
    camera, //摄像头
    scene, // 场景
    orbitControl, // 滑动滚动器
    boxhelper, // 外边缘盒子
    plane, // 平面
    transformControls, //
    currentModel, // 当前选中的模型
    currentObjecs, // 当前操作的
    currentGroup, // 当前操作的
    selectedGroup, // 当前鼠标聚焦的
    selectedGroupArr = [], // 当前鼠标聚焦的
    keyStates = {}; // 键盘状态
export default {
  name       : 'stage-test',
  components : {},
  props      : {},
  data(){
    return {
      loadText       : '拼命加载中',
      reqId          : null, // 动画定时渲染
      loadingScene   : true,
      sceneClass     : {
        name   : '', //名字
        models : [], // 添加的模型
      },
      operationData  : [],//记录所有操作数据
      operationSteps : 0,//记录当前是第几步操作，changeData里则存了前n-1步操作，从0开始为第一步
      fromPosition   : new Three.Vector3(),
      fromRotation   : new Three.Vector3(),
      fromScale      : new Three.Vector3(),
      fatherGroup    : [], // 上一层场景模型
      sceneCamera    : {}, // 主场景摄像头
      indoorCamera   : {}, // 内部场景摄像头
    };
  },
  computed : {
    hasListener(){
      // 判断是否有鼠标事件监听，用于减少不必要的拾取判断
      /* eslint-disable no-underscore-dangle */
      const events = this._events;
      const result = {};
      ['on-mousemove', 'on-mouseup', 'on-mousedown', 'on-click'].forEach((name) => {
        result[name] = !!events[name] && events[name].length > 0;
      });
      return result;
    },
  },
  beforeDestroy(){
    cancelAnimationFrame(this.reqId);
    renderer.dispose();
    if (orbitControl) {
      orbitControl.dispose();
    }
    // this.$el.removeEventListener('mousedown', this.onMouseDown, false);
    // this.$el.removeEventListener('mousemove', this.onMouseMove, false);
    // this.$el.removeEventListener('mouseup', this.onMouseUp, false);
    // this.$el.removeEventListener('click', this.onClick, false);
    window.removeEventListener('resize', this.onResize, false);
    this.$el.removeEventListener('mousemove', this.onMouseMove);
    this.$el.removeEventListener('pointerdown', this.onMouseDown);
    this.$el.removeEventListener('pointermove', this.selectObject);
    this.$el.removeEventListener('click', this.clickObject);
  },
  created(){
  },
  mounted(){
    this.$nextTick(() => {
      container = document.getElementById('scene');
      if (container) {
        this.initDesign();
        this.animate();
      }
    });
  },
  methods : {
    // 设计台初始化
    initDesign(){
      this.initRenderer();
      //加载默认场景
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
      this.loadSceneClass(initScene);
      this.indoorCamera = new Three.PerspectiveCamera(75, this.$el.offsetWidth / this.$el.offsetHeight, 0.1, 1000);
      // 初始化物体操作工具
      this.initTransformControls();
      //渲染初始化
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(this.$el.offsetWidth, this.$el.offsetHeight);
      renderer.shadowMap.enabled = true;
      container.appendChild(renderer.domElement);
      //绑定事件
      window.addEventListener('resize', this.onResize, false);
      Three.Cache.enabled = true;
      this.$el.addEventListener('pointermove', this.selectObject);
      this.$el.addEventListener('click', this.clickObject);
      this.$el.addEventListener('dblclick', this.dblclickObject);
      // this.$el.addEventListener('keypress',this.keyListener());
      this.loadingScene = false;
    },
    // 动画
    animate(){
      this.reqId = requestAnimationFrame(this.animate);
      camera.updateProjectionMatrix();
      this.render();
    },
    // 渲染
    render(){
      renderer.render(scene, camera);
    },
    //
    initRenderer(){
      renderer = new Three.WebGLRenderer({antialias : true});
      raycaster = new Three.Raycaster();
    },
    onResize(){
      camera.aspect = this.$el.offsetWidth / this.$el.offsetHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(this.$el.offsetWidth, this.$el.offsetHeight);
    },
    // 初始化场景
    initScene(){
      scene = new Three.Scene();
      //灰色底部
      scene.background = new Three.Color(0xF2F2F2);
      //环境光
      let ambientLight = new Three.AmbientLight(0x222222);
      scene.add(ambientLight);
      //半球光
      let HemisphereLight = new Three.HemisphereLight(0xffffff, 0xffffff);
      HemisphereLight.position.set(0, 50, 0);
      scene.add(HemisphereLight);
      //坐标辅助线
      var axesHelper = new Three.AxesHelper(15);
      scene.add(axesHelper);
      // 初始化平面底板
      this.initPlane();
      orbitControl = new OrbitControls(camera, this.$el);
      // 初始化外边缘盒子
      this.initBoxheiper();
      this.sceneCamera = camera;
      scene.add(camera);
    },
    // 初始化平面底板
    initPlane(){
      let gridLength = 500;
      let planeGeometry = new Three.PlaneGeometry(gridLength, gridLength);
      let _plane = new Three.Mesh(planeGeometry, new Three.MeshPhongMaterial({color : 0xBDBDBD, depthWrite : true}));
      _plane.rotation.x = -Math.PI * 0.5;
      _plane.receiveShadow = true;
      _plane.castShadow = true;
      scene.add(_plane);
      plane = _plane;
    },
    // 初始化外边缘盒子
    initBoxheiper(){
      boxhelper = new Three.BoxHelper(undefined, 0xF4F4A5);
      boxhelper.visible = false;
      scene.add(boxhelper);
    },
    // 初始化物体操作工具
    initTransformControls(){
      let _this = this;
      transformControls = new TransformControls(camera, renderer.domElement);
      scene.add(transformControls);
      transformControls.addEventListener('dragging-changed',
          event => {
            boxhelper.update();
            orbitControl.enabled = !event.value;
            if (event.value === true) {
              _this.saveOperation(transformControls.mode, transformControls.object, true);
            } else {
              _this.saveOperation(transformControls.mode, transformControls.object, false);
            }
          },
      );
      //放缩模型时，实时更新参数数据
      transformControls.addEventListener('change', () => {
        if (transformControls.mode === 'scale') {
          console.log(transformControls.object);
        }
      });
    },
    // 保存操作步骤
    saveOperation(type, group, isPrevious = false){
      console.log(type, group, isPrevious);
    },
    //绑定trans按键模式
    keyListener(e){
      console.log(e.key);
      switch (e.key) {
        case 'q':
          transformControls.setSpace(transformControls.space === 'local' ? 'world' : 'local');
          break;
        case 'w':
          transformControls.setMode('translate');
          break;
        case 'e':
          transformControls.setMode('rotate');
          break;
        case 'r':
          transformControls.setMode('scale');
          break;
        case 'x':
          transformControls.showX = !transformControls.showX;
          break;
        case 'y':
          transformControls.showY = !transformControls.showY;
          break;
        case 'z':
          transformControls.showZ = !transformControls.showZ;
          break;
        case 'Delete':
          let selectedGroup = transformControls.object;
          if (selectedGroup) {
            this.saveOperation('delete', selectedGroup, false);
            // deleteGroup(selectedGroup);
          }
          break;
      }
    },
    //加载场景
    loadSceneClass(sceneData){
      this.sceneClass.uuid = (sceneData && sceneData.uuid) ? sceneData.uuid : Three.MathUtils.generateUUID();
      this.sceneClass.name = sceneData.name ? sceneData.name : null;
      camera = new Three.PerspectiveCamera(sceneData.cameraProperty.fov,
          this.$el.offsetWidth / this.$el.offsetHeight,
          sceneData.cameraProperty.near,
          sceneData.cameraProperty.far);
      camera.position.copy(sceneData.cameraProperty.position);
      camera.rotation.setFromVector3(sceneData.cameraProperty.rotation);
      // 初始化场景
      this.initScene();
      this.sceneClass.sceneModel = sceneData.sceneModel ? this.getModel(sceneData.sceneModel) : null;
      if (this.sceneClass.sceneModel) {
        this.loadFBX(this.sceneClass.sceneModel, false).then((res) => {
          //主场景的models
          this.sceneClass.models = [];
        });
      }
    },
    getModel(modelData){
      let {name, url, position, rotation, scale, relativePosition, relativeRotation, isOuterModel} = modelData;
      return {
        name,
        url,
        position         : position ? position : new Three.Vector3(),
        rotation         : rotation ? rotation : new Three.Vector3(),
        scale            : scale ? scale : new Three.Vector3(1, 1, 1), // scale初始要大于0，默认为0就看不见了
        relativePosition : relativePosition ? relativePosition : new Three.Vector3(),
        relativeRotation : relativeRotation ? relativeRotation : new Three.Vector3(),
        isOuterModel,
      };
    },
    getGroup(){
      if (this.isMainScene()) {
        return this.getGroups();
      } else {
        return this.fatherGroup.children.filter(child =>
            (child instanceof Group) && (child.model.isOuterModel === false),
        );
      }
    },
    //获取models对应的groups
    getGroups(){
      let model = this.sceneClass.models || [];
      let groups = model.map((model) => {
        return model.group;
      });
      return groups;
    },
    /**
     * 加载模型,可以同步加载
     * @param {boolean} isSceneModel 是否为场景模型
     * @return {Promise}
     */
    // loadFBX(modelData, isSceneModel = false){
    loadFBX(modelData, isOuterModel = true){
      let _this = this;
      console.log(this.sceneClass);
      const scope = modelData;
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
                  if (isOuterModel) {
                    _this.sceneClass.models.push(scope);
                    fbxGroup.position.copy(scope.position);
                    fbxGroup.rotation.setFromVector3(scope.rotation);
                    fbxGroup.scale.copy(scope.scale);
                  }
                  scene.add(fbxGroup);
                  resolve();
                },
                (xhr) => {
                  _this.loadingScene = true;
                  let num = parseInt(xhr.loaded / xhr.total * 10000) / 100;
                  _this.loadText = '模型加载：' + num + '%';
                  if (num == 100) {
                    _this.loadingScene = false;
                  }
                },
                error => reject(error),
            );
          },
      );
    },
    isMainScene(){
      return camera === this.sceneCamera;
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
      mouse.x = (mouseEvent.offsetX * 1000 / container.offsetWidth / 1000) * 2 - 1;
      mouse.y = -(mouseEvent.offsetY * 1000 / container.offsetHeight / 1000) * 2 + 1;
      // 计算物体和射线的焦点
      raycaster.setFromCamera(mouse, camera);
      let intersects = raycaster.intersectObjects(objects, true);
      //返回可视相交对象
      for (let intersect of intersects) {
        if (intersect.object.visible) return intersect;
      }
      return null;
    },
    // 获取当前聚集对象
    selectObject(event){
      //在主场景只能选择主场景模型，在模型内部只能选择内部模型
      let intersect = this.getIntersects(event, this.getGroups());
      if (intersect) {
        //主场景只检测外部模型，内场景只检测外部模型
        if (this.isMainScene()) {
          intersect.object.traverseAncestors(elem => {
            if (elem.parent instanceof Three.Scene) {
              selectedGroup = elem;
            }
          });
        } else {
          selectedGroup = intersect.object.parent ? intersect.object.parent : intersect.object;
        }
        //box套在group外
        boxhelper.setFromObject(selectedGroup);
        boxhelper.visible = true;
      } else {
        selectedGroup = null;
        boxhelper.visible = false;
      }
    },
    // 点击模型
    clickObject(event){
      if (transformControls.dragging) {
        return;
      } else if (selectedGroup) {
        transformControls.attach(selectedGroup);
      } else {
        transformControls.detach();
      }
    },
    /*双击对象*/
    dblclickObject(){
      if (selectedGroup) {
        //隐藏trans
        transformControls.detach();
        boxhelper.visible = false;
        //获取点击建筑的模型
        let model = selectedGroup.model;
        this.enterModel(model);
        document.removeEventListener('dblclick', this.dblclickObject);
        this.saveOperation('enter', selectedGroup);
        /**/
        selectedGroupArr.push(selectedGroup);
        /**/
        // selectedGroup = null;
      }
    },
    // 进入子场景
    enterModel(model){
      // document.getElementById("returnScene").disabled = false;
      console.log(1);
      this.fatherGroup = model.group;
      let mPosition = model.group.position;
      let rPosition = new Three.Vector3().copy(model.relativePosition).multiply(model.group.scale);
      let mRotation = model.group.rotation.toVector3();
      let rRotation = model.relativeRotation;
      console.log(this.indoorCamera);
      this.indoorCamera.position.copy(new Three.Vector3().addVectors(mPosition, rPosition));
      this.indoorCamera.rotation.setFromVector3(new Three.Vector3().addVectors(mRotation, rRotation));
      this.sceneCamera = camera;
      camera = this.indoorCamera;
      orbitControl.object = this.indoorCamera;
      orbitControl.target = this.fatherGroup.position.clone();
      orbitControl.panSpeed = 0.5;
      orbitControl.rotateSpeed = 0.5;
      transformControls.camera = this.indoorCamera;
    },
    /*载入及移动模型相关*/
    onMouseMove(mouseEvent){
      //检测对象为除了内部模型外的其他物体
      let intersect = this.getIntersects(mouseEvent, currentObjecs);
      if (intersect && currentModel.group) {
        currentModel.group.position.copy(intersect.point);
        boxhelper.setFromObject(currentGroup);
      }
    },
    onMouseDown(mouseEvent){
      //左击放置
      if (mouseEvent.buttons === 1) {//点击放置才保存
        this.saveOperation('add', currentModel.group, false);
        if (!this.isMainScene()) {
          this.fatherGroup.attach(currentModel.group);
        }
      } else if (mouseEvent.buttons === 2) {//右击取消放置
        this.cancelPutModel();
      }
      this.$el.removeEventListener('mousemove', this.onMouseMove);
      this.$el.removeEventListener('pointerdown', this.onMouseDown);
      /**/
      this.$el.addEventListener('click', this.clickObject);
      currentGroup = null;
      orbitControl.enabled = true;
    },
    /*加载菜单的场景及模型*/
    menuLoadModle(is_scene, model){
      if (is_scene) {
        this.loadSceneClass(model);
        this.initTransformControls();
      } else {
        this.dragModelInScene(model);
      }
    },
    //取消放置，则移除前一模型及其监听器
    cancelPutModel(){
      if (currentGroup) {
        boxhelper.visible = false;
        if (this.isMainScene()) {
          this.sceneClass.models.pop();
        }
        scene.remove(currentGroup);
        this.$el.removeEventListener('mousemove', this.onMouseMove);
        this.$el.removeEventListener('pointerdown', this.onMouseDown);
        /**/
        this.$el.addEventListener('click', this.clickObject);
      }
    },
    /*载入及移动模型相关*/
    dragModelInScene(modelData){
      this.cancelPutModel();
      if (!modelData) return;
      currentModel = this.getModel(modelData);
      currentObjecs = [plane];
      if (this.sceneClass.sceneModel) {
        currentObjecs.push(this.sceneClass.sceneModel.group);
      }
      currentObjecs = currentObjecs.concat(this.getGroups());
      orbitControl.enabled = false;
      //加载模型完毕再添加监听器,添加box提示当前添加模型
      this.loadFBX(currentModel, this.isMainScene())
          .then(() => {
            currentGroup = currentModel.group;
            currentModel.isOuterModel = this.isMainScene();
            //内场景放置模型以该场景为中心
            if (!currentModel.isOuterModel) currentGroup.position.copy(this.fatherGroup.position);
            boxhelper.setFromObject(currentModel.group);
            boxhelper.visible = true;
            this.$el.addEventListener('mousemove', this.onMouseMove);
            this.$el.addEventListener('pointerdown', this.onMouseDown);
            /**/
            this.$el.removeEventListener('click', this.clickObject);
          })
          .catch(reason => console.error(reason));
    },
  },
};
</script>
<style scoped lang="scss">
.stage-test-root{
  width: calc(100% - 592px);
  position: relative;
  #scene{
    position: absolute;left: 0;top: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
