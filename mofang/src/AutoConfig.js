import {manager} from "./Manager.js";
import {getPlanePosition} from "./Operate.js";
import {PointObj, Rectangle} from "./Geometry.js";
import {getModelDataByName, Model} from "./Model.js";

let pointNum = 0;
let pointPosition = [];
let pointObj = [];
let bufferRect;
let allRect = [];
let finalRect = null;

//点击绘制矩形
function drawListen() {
  if (manager.mode !== "draw") {
    manager.mode = "draw";
    document.getElementById("scene").addEventListener("click", drawRect);
  } else {
    manager.mode = "standard";
    manager.sceneClass.orbitControl.enabled = true;
    document.getElementById("scene").removeEventListener("click", drawRect);
  }
}

//绘制矩形，确定矩形位置
function drawRect(event) {
  //静止
  manager.sceneClass.orbitControl.enabled = false;

  //判断确定了几个点
  pointNum++;

  //获取当前点击点的位置
  let position = getPlanePosition(event);
  position.y += 0.1;

  let p = new PointObj(position);
  p.draw();
  pointObj.push(p);
  pointPosition[pointNum] = position;

  if (pointNum % 2 === 1) {
    //只确定了第一个点
    document.getElementById("scene").addEventListener("pointermove", drawRectMove);
  } else {
    //第二个点确定
    allRect.push(bufferRect);
    pointObj.forEach((v) => {
      v.delete();
    });
    bufferRect = null;
    document.getElementById("scene").removeEventListener("pointermove", drawRectMove);
  }
}

//画移动的矩形
function drawRectMove(event) {
  if (bufferRect) {
    bufferRect.delete();
  }

  let pa = pointPosition[pointNum];
  let pc = getPlanePosition(event);
  pc.y += 0.1;

  let rect = new Rectangle(pa, undefined, pc);
  rect.draw();

  bufferRect = rect;
}

//选择绘制的矩形监听
function choseRect() {
  if (manager.mode !== "choseRect") {
    if (manager.mode === "draw") {
      document.getElementById("scene").removeEventListener("click", drawRect);
    }
    manager.mode = "choseRect";
    document.getElementById("scene").addEventListener("click", clickChoseRect);
  } else {
    manager.mode = "standard";
    manager.sceneClass.orbitControl.enabled = true;
    document.getElementById("scene").removeEventListener("click", clickChoseRect);
  }
}

//选择矩形
function clickChoseRect(event) {

  let position = getPlanePosition(event);
  position.y += 0.2;

  let chosePoint = new PointObj(position, 0x00000);
  chosePoint.draw();

  allRect.forEach((value) => {
    value.delete(true);
    if (value.isInRect(position)) {
      finalRect = value;
      finalRect.draw(true);
    }
  })

  setTimeout(() => {
    chosePoint.delete();
  }, 500)

  layoutModel();
}

function layoutModel() {
  /*
  1.获取矩形长款
  2.获取模型长宽
  3.计算每个模型位置
  * */
  let p = finalRect.position;
  let width = Math.abs(p["a"].x - p["b"].x);
  let height = Math.abs(p["a"].z - p["d"].z);

  console.log(width+"    h"+height);

  let m = getModelDataByName("haobangonglou02");
  let model = new Model(m);
 // model.loadFBX();
}

export {drawListen, choseRect}























