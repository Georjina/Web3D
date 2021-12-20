import {indoorControl, manager} from "./Manager.js";
import {bindListener} from "./Listener.js";
import {loadScene} from "./LoadScene.js";
import {loadJson} from "./SceneCon.js";

  manager.init();
  manager.animate();
  bindListener();
  loadScene();
