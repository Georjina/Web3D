import {manager} from "./Manager.js";
import {PointerLockControls} from "./lib/controls/PointerLockControls.js";
import {Vector3} from "./lib/three.module.js";
import {selectObject} from "./Operate.js";

let pointerControl;

let velocity = new Vector3();
let rate = 0.1;

function roam() {
  pointerControl = new PointerLockControls(manager.sceneClass.camera, manager.container);
  let roamBtn = document.getElementById("roam");
  roamBtn.addEventListener('click', () => {
    manager.sceneClass.transformControls.detach();

    pointerControl = new PointerLockControls(manager.sceneClass.camera, manager.container);
    pointerControl.lock();
  });
  pointerControl.addEventListener('lock', () => {
    document.getElementById("scene").removeEventListener('pointermove', selectObject);

    roamBtn.disabled = true;
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);
    document.addEventListener('wheel', onWheel, {passive: false});
  });
  pointerControl.addEventListener('unlock', () => {
    document.getElementById("scene").addEventListener('pointermove', selectObject);

    roamBtn.disabled = false;
    document.removeEventListener('keydown', onKeyDown);
    document.removeEventListener('keyup', onKeyUp);
    document.removeEventListener('wheel', onWheel);
  });
}

function roamUpdate() {
  if (pointerControl.isLocked === true) {
    pointerControl.getObject().translateZ(velocity.z);
    pointerControl.getObject().translateX(velocity.x);
  }
}

function onKeyDown(event) {
  event.preventDefault();
  switch (event.key) {
    case 'w':
      velocity.z = -rate;
      break;
    case 'a':
      velocity.x = -rate;
      break;
    case 's':
      velocity.z = rate;
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
