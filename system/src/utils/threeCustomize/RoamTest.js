import {manager} from "./Manager.js";
import * as Three from 'three';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls';

let pointerControl;

let velocity = new Three.Vector3();
let rate = 0.1;

function roam() {
    if(!manager.container){
        return
    }
    pointerControl = new PointerLockControls(manager.sceneClass.camera, manager.container);
    let roamBtn = document.getElementById("roam");
    roamBtn.addEventListener('click', () => {
        manager.sceneClass.transformControls.detach();
        pointerControl = new PointerLockControls(manager.sceneClass.camera, manager.container);
        pointerControl.lock();
    });
    pointerControl.addEventListener('lock', () => {
        roamBtn.disabled = true;
        document.addEventListener('keydown', onKeyDown, false);
        document.addEventListener('keyup', onKeyUp, false);
        document.addEventListener('wheel', onWheel, {passive: false});
    });
    pointerControl.addEventListener('unlock', () => {
        roamBtn.disabled = false;
        document.removeEventListener('keydown', onKeyDown, false);
        document.removeEventListener('keyup', onKeyUp, false);
        document.removeEventListener('wheel', onWheel);
    });
}

function roamUpdate() {
    if (pointerControl && pointerControl.isLocked === true) {
        pointerControl.moveRight(velocity.x);
        pointerControl.moveForward(velocity.z);
    }
}

function onKeyDown(event) {
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
}

function onKeyUp(event) {
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
}

function onWheel(event) {
    event.preventDefault();
    if (event.deltaY > 0 && rate > 0.04) rate -= 0.01;
    if (event.deltaY < 0 && rate < 0.5) rate += 0.01;
}

export {roam, roamUpdate}
