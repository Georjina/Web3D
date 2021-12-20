import { indoorControl, manager } from './Manager.js';
import * as Three from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls';
//加载模型
import { getModelDataByName, mergeModelData, Model } from './Model.js';
//模型相关的事件
import { clickObject, dblclickObject, enterObject } from './Operate.js';
//工具栏上的一些操作
import { saveOperation } from './SceneCon.js';
//绑定拖动条和输入框
import { bindArgs } from './BasicArgs.js';
/**
 * @example {
 *     manager.sceneClass = new SceneClass(sceneData);
 * }
 */
class SceneClass {
  constructor(sceneData){
    //暂时未用
    this.uuid = sceneData.uuid ? sceneData.uuid : Three.MathUtils.generateUUID();
    //场景名称
    this.name = sceneData.name ? sceneData.name : null;
    if (manager.container) {
      this.camera = new Three.PerspectiveCamera(sceneData.cameraProperty.fov,
          manager.container.offsetWidth / manager.container.offsetHeight,
          sceneData.cameraProperty.near,
          sceneData.cameraProperty.far);
      this.camera.position.copy(sceneData.cameraProperty.position);
      this.camera.rotation.setFromVector3(sceneData.cameraProperty.rotation);
    }
    this.init();
    //场景模型
    this.sceneModel = sceneData.sceneModel ? new Model(sceneData.sceneModel) : null;
    if (this.sceneModel) this.sceneModel.loadFBX(true);
    //主场景的models
    this.models = [];
  }
  init(){
    const scope = this;
    this.scene = new Three.Scene();
    this.scene.background = new Three.Color(0xF2F2F2);
    indoorControl.sceneCamera = this.camera;
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
    if (scope.camera) {
      this.orbitControl = new OrbitControls(scope.camera, manager.renderer.domElement);
    }
    this.boxhelper = new Three.BoxHelper(undefined, 0xF4F4A5);
    this.boxhelper.visible = false;
    this.scene.add(this.boxhelper);
    this.transformControls = new TransformControls(scope.camera, manager.renderer.domElement);
    this.transformControls.addEventListener('dragging-changed',
        event => {
          this.boxhelper.update();
          scope.orbitControl.enabled = !event.value;
          if (event.value === true) {
            saveOperation(scope.transformControls.mode, scope.transformControls.object, true);
          } else {
            saveOperation(scope.transformControls.mode, scope.transformControls.object, false);
          }
        });
    //放缩模型时，实时更新参数数据
    this.transformControls.addEventListener('change', () => {
      if (this.transformControls.mode === 'scale') {
        bindArgs(this.transformControls.object);
      }
    });
    this.scene.add(this.transformControls);
    document.getElementById('scene').addEventListener('pointerdown', clickObject);
    document.addEventListener('keypress', () => this.keyListener());
    // document.addEventListener('dblclick', enterObject);
    document.addEventListener('dblclick', dblclickObject);
  }
  //绑定trans按键模式
  keyListener(){
    const scope = this;
    if (manager.keyStates['KeyQ']) {
      scope.transformControls.setSpace(scope.transformControls.space === 'local' ? 'world' : 'local');
    } else if (manager.keyStates['KeyW']) {
      scope.transformControls.setMode('translate');
    } else if (manager.keyStates['KeyE']) {
      scope.transformControls.setMode('rotate');
    } else if (manager.keyStates['KeyR']) {
      scope.transformControls.setMode('scale');
    } else if (manager.keyStates['KeyX']) {
      scope.transformControls.showX = !scope.transformControls.showX;
    } else if (manager.keyStates['KeyY']) {
      scope.transformControls.showY = !scope.transformControls.showY;
    } else if (manager.keyStates['KeyZ']) {
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
/**
 * 从场景json数据中查找指定名称的场景数据
 * @param {string}sceneName
 * @return
 */
function getSceneDateByName(sceneName){
  for (let sceneData of manager.allScenesData) {
    if (sceneData.name === sceneName) {
      return sceneData;
    }
  }
  return null;
}
function mergeSceneData(dataJson, sceneData){
  let scene = {};
  scene.uuid = dataJson.uuid ? dataJson.uuid : sceneData.uuid;
  scene.name = dataJson.name ? dataJson.name : sceneData.name;
  scene.sceneModel = dataJson.sceneModel ? dataJson.sceneModel : sceneData.sceneModel;
  scene.cameraProperty = dataJson.cameraProperty ? dataJson.cameraProperty : sceneData.cameraProperty;
  scene.models = [];
  if (dataJson.models) {
    for (let m of dataJson.models) {
      scene.models.push(mergeModelData(m, getModelDataByName(m.name)));
    }
  }
  return scene;
}
export { getSceneDateByName, mergeSceneData, SceneClass };
