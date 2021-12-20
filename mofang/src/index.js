import "./css/main.css";
import "./css/hover.css";
import "./css/common.css";
import "./js/FileSaver.js";
import $ from "./js/jquery-3.4.1.js";
import "./js/utils.js"
import {indoorControl, manager} from "./Manager.js";
import {bindListener} from "./Listener.js";
import {loadScene} from "./LoadScene.js";
import {loadJson} from "./SceneCon.js";

  window.$ = $
  window.jQuery = $

  manager.init();
  manager.animate();
  bindListener();
  loadScene();

