import {
    WebGLRenderer,
    Raycaster,
    Cache,
} from "./lib/three.module.js"
import {FileLoader} from "./lib/three.module.js";
import {SceneClass} from "./SceneClass.js";
import {roam, roamUpdate} from "./RoamControl.js";
import {bindInput} from "./BasicArgs.js";
import {IndoorControl} from "./IndoorControl.js";


class Manager {
    constructor() {
        this.container = document.getElementById('scene');
        this.renderer = new WebGLRenderer({antialias: true});
        this.raycaster = new Raycaster();
        this.keyStates = {};
        this.sceneClass = null;

        //json读取的数据,存json对象
        this.allModelsData = []
        this.allScenesData = [];
        //roam mode
        this.mode = "standard";
    }

    init() {
        const scope = this;

        let initScene = {
            "name": "init",
            "cameraProperty": {
                "fov": 50,
                "near": 1,
                "far": 5000,
                "position": {
                    "x": 7.54,
                    "y": 103.53,
                    "z": -165.54
                },
                "rotation": {
                    "x": -2.62,
                    "y": 0.03,
                    "z": 3.12
                }
            }
        };

        this.sceneClass = new SceneClass(initScene);
        indoorControl.sceneCamera = this.sceneClass.camera;
        //需要在sceneClass初始化trans后绑定
        bindInput();
        roam();

        //渲染初始化
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(this.container.offsetWidth, this.container.offsetHeight);
        this.renderer.shadowMap.enabled = true;
        this.container.appendChild(this.renderer.domElement);
        window.addEventListener('resize', () => this.onWindowResize(scope), false);

        Cache.enabled = true;

        /*
        //同步载入所有场景数据
        this.readAllSceneJson().then(() => {
            this.sceneClass = new SceneClass(scope.allScenesData[0]);
            //需要在sceneClass初始化trans后绑定
            bindInput();
            roam();
            this.animate();
        });*/
        this.readAllSceneJson();
        this.readAllModelJson();
    }

    readAllModelJson() {
        const scope = this;
        const loader = new FileLoader();
        loader.load("data.json",
            data => scope.allModelsData = JSON.parse(data)
        );
    }

    readAllSceneJson() {
        const scope = this;
        const loader = new FileLoader();
        loader.load("scene.json",
            data => scope.allScenesData = JSON.parse(data));
    }

    /*readAllSceneJson() {
        const scope = this;
        const loader = new FileLoader();
        return new Promise(resolve =>
            loader.load("src/scene.json",
                data => {
                    scope.allScenesData = JSON.parse(data);
                    resolve();
                })
        );
    }*/

    onWindowResize(manager) {
        manager.sceneClass.camera.aspect = manager.container.offsetWidth / manager.container.offsetHeight;
        manager.sceneClass.camera.updateProjectionMatrix();
        manager.renderer.setSize(manager.container.offsetWidth, manager.container.offsetHeight);
    }

    animate() {
        requestAnimationFrame(manager.animate);
        roamUpdate();
        manager.sceneClass.camera.updateProjectionMatrix();
        manager.renderer.render(manager.sceneClass.scene, manager.sceneClass.camera);
    }

    render() {
        this.renderer.render(manager.sceneClass.scene, manager.sceneClass.camera);
    }
}

//全局manager,各文件公用
const manager = new Manager();
const indoorControl = new IndoorControl();
export {manager, indoorControl}
