import {PerspectiveCamera, Vector3} from "./lib/three.module.js";
import {manager} from "./Manager.js";
import {dblclickObject} from "./Operate.js";

class IndoorControl {
    constructor() {
        //进入模型内，记录该模型
        this.fatherGroup = null;
        //记录外场景相机
        this.sceneCamera = null;
        this.indoorCamera = new PerspectiveCamera(75, manager.container.offsetWidth / manager.container.offsetHeight, 0.1, 1000);
    }

    enterModel(model) {
        document.getElementById("returnScene").disabled = false;
        this.fatherGroup = model.group;
        let mPosition = model.group.position;
        let rPosition = new Vector3().copy(model.relativePosition).multiply(model.group.scale);
        let mRotation = model.group.rotation.toVector3();
        let rRotation = model.relativeRotation;

        this.indoorCamera.position.copy(new Vector3().addVectors(mPosition, rPosition));
        this.indoorCamera.rotation.setFromVector3(new Vector3().addVectors(mRotation, rRotation));

        this.sceneCamera = manager.sceneClass.camera;

        manager.sceneClass.camera = this.indoorCamera;
        manager.sceneClass.orbitControl.object = this.indoorCamera;
        manager.sceneClass.orbitControl.target = this.fatherGroup.position.clone();

        manager.sceneClass.orbitControl.panSpeed = 0.5;
        manager.sceneClass.orbitControl.rotateSpeed = 0.5;

        manager.sceneClass.transformControls.camera = this.indoorCamera;
    }

    backScene() {
        document.getElementById("returnScene").disabled = true;
        manager.sceneClass.transformControls.detach();

        manager.sceneClass.camera = this.sceneCamera;
        manager.sceneClass.orbitControl.object = this.sceneCamera;
        manager.sceneClass.orbitControl.target = new Vector3();
        manager.sceneClass.orbitControl.panSpeed = 1;
        manager.sceneClass.orbitControl.rotateSpeed = 1;
        manager.sceneClass.transformControls.camera = this.sceneCamera;

        document.addEventListener('dblclick', dblclickObject);
    }

    isMainScene() {
        return manager.sceneClass.camera === this.sceneCamera;
    }

    addGroup(group) {
        let position = group.position.clone();
        let rotation = group.rotation.clone();
        let scale = group.scale.clone();
        this.fatherGroup.attach(group);

        group.position.copy(position);
        group.rotation.setFromVector3(rotation);
        group.scale.copy(scale);
    }
}

export {IndoorControl}
