//绑定拖动条和输入框
import * as Three from 'three';
import { manager } from './Manager.js';
import { saveOperation } from './SceneCon.js';
//各个控件绑定
let lengthRange = document.getElementById('lengthRange');
let lengthNumber = document.getElementById('lengthNumber');
let widthRange = document.getElementById('widthRange');
let widthNumber = document.getElementById('widthNumber');
let heightRange = document.getElementById('heightRange');
let heightNumber = document.getElementById('heightNumber');
let altitudeRange = document.getElementById('altitudeRange');
let altitudeNumber = document.getElementById('altitudeNumber');
let uniformScale = document.getElementById('uniformScale');
let typeArr = ['length', 'width', 'height', 'altitude'];
let isSave = true;
//绑定前端输入的表单控件
function bindInput(){
    return
  //遍历每个控件
  for (let type of typeArr) {
    let range = document.getElementById(type + 'Range');
    let number = document.getElementById(type + 'Number');
    //每个控件添加监听器
    //滑动控件和数值双向监听，同时改变物体的scale
    range.addEventListener('input', () => {
      let group = manager.sceneClass.transformControls.object;
      number.value = range.value;
      if (isSave) {
        if (type === 'altitude') {
          saveOperation('translate', group, true);
        } else {
          saveOperation('scale', group, true);
        }
        isSave = false;
      }
      setGroupSize(type);
    });
    range.addEventListener('change', () => {
      let group = manager.sceneClass.transformControls.object;
      if (type === 'altitude') {
        saveOperation('translate', group, false);
      } else {
        saveOperation('scale', group, false);
      }
      isSave = true;
    });
    number.addEventListener('change', () => {
      range.value = number.value;
      setGroupSize(type, true);
    });
  }
}
function bindArgs(group){
  //获取物体尺寸
  if (!group) return;
  let size = getBoxSize(group);
  size = size.multiply(group.scale);
  //input的值为模型的数据 可以精简!!!
  //调整前端控件的值
  lengthRange.value = size.x * 1000;
  lengthNumber.value = lengthRange.value;
  widthRange.value = size.z * 1000;
  widthNumber.value = widthRange.value;
  heightRange.value = size.y * 1000;
  heightNumber.value = heightRange.value;
  altitudeRange.value = group.position.y * 1000;
  altitudeNumber.value = altitudeRange.value;
}
//获取group的box尺寸
function getBoxSize(group){
  //获取boundingBox的值,调用时保证group非空
  let bufferGeometry;
  if (group.children.length > 0) bufferGeometry = group.children[0].geometry;
  if (!bufferGeometry) return;
  let box3 = bufferGeometry.boundingBox;
  let size = new Three.Vector3();
  box3.getSize(size);
  return size;
}
function setGroupSize(type, isNum){
  let group = manager.sceneClass.transformControls.object;
  if (group) {
    if (isNum) {
      if (type === 'altitude') {
        saveOperation('translate', group, true);
      } else {
        saveOperation('scale', group, true);
      }
    }
    let size = getBoxSize(group);
    if (uniformScale.checked) {
      let scaleNum;
      switch (type) {
        case 'length':
          scaleNum = lengthRange.value / group.scale.x / size.x / 1000;
          group.scale.multiplyScalar(scaleNum);
          break;
        case 'width':
          scaleNum = widthRange.value / group.scale.z / size.z / 1000;
          group.scale.multiplyScalar(scaleNum);
          break;
        case 'height':
          scaleNum = heightRange.value / group.scale.y / size.y / 1000;
          group.scale.multiplyScalar(scaleNum);
          break;
        case 'altitude':
          group.position.y = altitudeRange.value / 1000;
          break;
      }
      bindArgs(group);
    } else {
      switch (type) {
        case 'length':
          group.scale.x = lengthRange.value / size.x / 1000;
          break;
        case 'width':
          group.scale.z = widthRange.value / size.z / 1000;
          break;
        case 'height':
          group.scale.y = heightRange.value / size.y / 1000;
          break;
        case 'altitude':
          group.position.y = altitudeRange.value / 1000;
          break;
      }
    }
    if (isNum) {
      if (type === 'altitude') {
        saveOperation('translate', group, false);
      } else {
        saveOperation('scale', group, false);
      }
    }
  }
}
export { bindInput, bindArgs };
