import * as Three from 'three';
//加载场景等
import { SceneClass } from './SceneClass.js';
//漫游功能
// import { roam, roamUpdate } from './RoamTest.js';
//各控件绑定
import { bindInput } from './BasicArgs.js';
// 漫游控制
import { RoamControl } from './RoamControl.js';
//双击进入室内后的相关操作
import { IndoorControl } from './IndoorControl.js';
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
    this.sceneClass = new SceneClass(initScene);
    indoorControl.sceneCamera = this.sceneClass.camera;
    //需要在sceneClass初始化trans后绑定
    bindInput();
    // roam();
    //渲染初始化
    this.renderer.setPixelRatio(window.devicePixelRatio);
    if (this.container) {
      this.renderer.setSize(this.container.offsetWidth, this.container.offsetHeight);
      this.container.appendChild(this.renderer.domElement);
    }
    this.renderer.shadowMap.enabled = true;
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
    manager.sceneClass.camera.aspect = manager.container.offsetWidth / manager.container.offsetHeight;
    manager.sceneClass.camera.updateProjectionMatrix();
    manager.renderer.setSize(manager.container.offsetWidth, manager.container.offsetHeight);
  }
  animate(){
    requestAnimationFrame(manager.animate);
    // roamUpdate();
    if (manager.sceneClass && manager.sceneClass.camera) {
      manager.sceneClass.camera.updateProjectionMatrix();
      manager.renderer.render(manager.sceneClass.scene, manager.sceneClass.camera);
    }
  }
  render(){
    this.renderer.render(manager.sceneClass.scene, manager.sceneClass.camera);
  }
}
//全局manager,各文件公用
const manager = new Manager();
// const roamControl = new RoamControl();
const indoorControl = new IndoorControl();
export { manager, indoorControl };
