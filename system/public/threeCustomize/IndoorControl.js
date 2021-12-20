import * as Three from 'three';
import {indoorControl, manager} from "./Manager.js";
import {dblclickObject} from "./Operate.js";

class IndoorControl {
    constructor() {
        const scope = this;
        this.fatherModel = null;
        this.sceneCamera = null;
        this.indoorCamera = new Three.PerspectiveCamera(75, manager.container.offsetWidth / manager.container.offsetHeight, 0.1, 1000);
    }

    cameraChange(model) {
        document.getElementById("returnScene").disabled = false;
        this.fatherModel = model;
        let mPosition = model.group.position;
        let rPosition = model.relativePosition;
        let mRotation = model.group.rotation.toVector3();
        let rRotation = model.relativeRotation;

        this.indoorCamera.position.copy(new Three.Vector3().addVectors(mPosition, rPosition));
        this.indoorCamera.rotation.setFromVector3(new Three.Vector3().addVectors(mRotation, rRotation));

        this.sceneCamera = manager.sceneClass.camera;

        manager.sceneClass.camera = this.indoorCamera;
        manager.sceneClass.orbitControl.object = this.indoorCamera;
        manager.sceneClass.orbitControl.target = this.fatherModel.group.position;
        manager.sceneClass.orbitControl.panSpeed = 0.5;
        manager.sceneClass.orbitControl.rotateSpeed = 0.5;
        manager.sceneClass.transformControls.camera = this.indoorCamera;
    }

    backScene() {
        document.getElementById("returnScene").disabled = true;
        manager.sceneClass.transformControls.detach();

        manager.sceneClass.camera = this.sceneCamera;
        manager.sceneClass.orbitControl.object = this.sceneCamera;
        manager.sceneClass.orbitControl.target = new Three.Vector3();
        manager.sceneClass.orbitControl.panSpeed = 1;
        manager.sceneClass.orbitControl.rotateSpeed = 1;
        manager.sceneClass.transformControls.camera = this.sceneCamera;

        document.addEventListener('dblclick', dblclickObject);
    }

    bindFatherModel(childModel) {
        this.fatherModel.group.attach(childModel.group);
    }

    isMainScene() {
        return manager.sceneClass.camera === this.sceneCamera;
    }
}

export {IndoorControl}
