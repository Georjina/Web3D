import {indoorControl, manager} from "./Manager.js";
import {
    AmbientLight, Color, Mesh,
    MeshPhongMaterial, PerspectiveCamera, PlaneGeometry,
    Scene, HemisphereLight, BoxHelper, GridHelper
} from "./lib/three.module.js";
import {OrbitControls} from "./lib/controls/OrbitControls.js";
import {Model} from "./Model.js";
import {TransformControls} from "./lib/controls/TransformControls.js";
import {clickObject, dblclickObject} from "./Operate.js";
import {saveOperation} from "./SceneCon.js";
import {bindArgs} from "./BasicArgs.js";


/**
 * @example {
 *     manager.sceneClass = new SceneClass(sceneData);
 * }
 */
class SceneClass {
    constructor(sceneData) {
        //场景名称
        this.name = sceneData.name ? sceneData.name : null;

        this.camera = new PerspectiveCamera(50,
            manager.container.offsetWidth / manager.container.offsetHeight,
            1,
            10000);
        this.camera.position.copy(sceneData.cameraProperty.position);
        this.camera.rotation.setFromVector3(sceneData.cameraProperty.rotation);

        this.init();

        //场景模型
        this.sceneModel = sceneData.sceneModel ? new Model(sceneData.sceneModel) : null;
        if (this.sceneModel) this.sceneModel.loadFBX(true).then(() => this.models = []);
        //主场景的models
        this.models = [];
    }

    init() {
        const scope = this;

        this.scene = new Scene();
        this.scene.background = new Color(0xF2F2F2);

        indoorControl.sceneCamera = this.camera;

        let ambientLight = new AmbientLight(0x222222);
        this.scene.add(ambientLight);
        let light = new HemisphereLight(0xffffff, 0xffffff);
        light.position.set(0, 50, 0);
        this.scene.add(light);

        const gridLength = 500;
        let planeGeometry = new PlaneGeometry(gridLength, gridLength);
        let plane = new Mesh(planeGeometry, new MeshPhongMaterial({color: 0xBDBDBD, depthWrite: true}));
        plane.rotation.x = -Math.PI * 0.5;
        plane.receiveShadow = true;
        plane.castShadow = true;
        this.scene.add(plane);
        this.plane = plane;

        const gridHelper = new GridHelper( gridLength, 10 );
        this.scene.add( gridHelper );

        this.orbitControl = new OrbitControls(scope.camera, manager.renderer.domElement);

        this.boxhelper = new BoxHelper(undefined, 0xF4F4A5);
        this.boxhelper.visible = false;
        this.scene.add(this.boxhelper);

        this.transformControls = new TransformControls(scope.camera, manager.renderer.domElement);
        this.transformControls.showY = false;
        this.scene.add(this.transformControls);
        this.addTransListeners();

        document.getElementById("scene").addEventListener('pointerdown', clickObject);
        document.addEventListener('dblclick', dblclickObject);
    }

    //添加trans监听器
    addTransListeners(){
        const scope = this;
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

        this.transformControls.addEventListener('change', () => {
            //放缩模型时，实时更新参数数据
            if (this.transformControls.mode !== 'rotate') {
                bindArgs(this.transformControls.object);
            }
            //改变右上角视图
            let srcStr;
            let group;
            if (this.transformControls.object) {
                group = this.transformControls.object;
            } else {
                group = indoorControl.isMainScene()?null:indoorControl.fatherGroup;
            }

            if(group){
                let urlArr = group.model.url.split('/');
                srcStr = 'Model/'+urlArr[0]+'/'+group.name+'.png';
            }
            else srcStr = 'images/designer/dimian-cad.png';
            $('#right-menu-top>img').attr('src',srcStr);
        });

        this.transformControls.addEventListener('object-changed', () => {
            if (this.transformControls.object) {
                $('.arg-list').show();
                $('.base-args img').attr('src', 'images/designer/md-arrow_drop_up@1x.png');
            } else {
                $('.arg-list').hide();
                $('.base-args img').attr('src', 'images/designer/md-arrow_drop_upCopy@1x.png');
            }
        });
    }

    //获取models对应的groups
    getGroups() {
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
function getSceneDateByName(sceneName) {
    for (let sceneData of manager.allScenesData) {
        if (sceneData.name === sceneName) {
            return sceneData;
        }
    }
    return null;
}

export {getSceneDateByName, SceneClass}
