import './polyfill';
import Cookies from 'js-cookie';
import { clone, cloneJSON, cloneLoop, cloneForce } from '@jsmini/clone';
const R = require('ramda');
const utils = {
  // ------ 类型 ------
  /**
   * 获取类型
   * @param value
   * @returns {string}：返回构造函数名。null、undefined 对应返回 Null、Undefined
   */
  getType(value){
    return Object.prototype.toString.call(value).slice(8, -1);
  },
  /**
   * 判断类型
   * @param value：要判断的值
   * @param constructor：构造函数，String、Boolean 等
   * @returns {boolean}
   */
  equalType(value, constructor){
    return this.getType(value) == constructor.name;
  },
  // ------ 本地存储 ------
  setCookie    : Cookies.set,
  getCookie    : Cookies.get,
  removeCookie : Cookies.remove,
  // ------ 数据处理 ------
  clone,      // 通过递归方式实现的深拷贝
  cloneJSON,  // 通过JSON.parse(JSON.stringify(x))方式实现的深拷贝
  cloneLoop,  // 通过循环方式实现的深拷贝
  cloneForce, // 通过循环方式实现的深拷贝，并且能够支持任意循环引用，保留引用关系
  /**
   * 从数据源合并到目标
   * @param target：目标
   * @param source：数据源
   */
  deepAssign(target, source = {}){
    const result = R.mergeDeepRight(target, source);
    Object.assign(target, result);
  },
  /**
   * 传参的数据过滤处理：处理 null、undefined，字符串去空格
   * @param value
   * @returns {*}
   */
  filterParams(value){
    // 非对象，原样返回
    if (!this.equalType(value, Object)) {return value;}
    // 对象处理
    const obj = JSON.parse(JSON.stringify(value));
    Object.keys(obj).forEach((key) => {
      const value = obj[key];
      if (Object.is(value, null) || Object.is(value, undefined)) { // 移除null、undefined
        delete obj[key];
      } else if (this.equalType(value, String)) { // 字串去除空格
        obj[key] = value.trim();
      } else if (this.equalType(value, Object)) { // 对象继续递归操作
        obj[key] = this.filterParams(value);
      }
    });
    return obj;
  },
  /**
   * 返回的部分空值替换默认值，null：赋值替换，undefined：手动加的一些数据
   * @param data：数据源，常用于 res.data
   * @param model：数据模型，需与接口定义的数据格式一致
   * @returns {*}
   */
  optimizeNull(data, model = {}){
    console.log({data, model});
    // 防止model传参类型错误
    if (!this.equalType(model, Object)) {throw new Error('model 需传 Object 类型！');}
    // model为空对象：原样返回
    if (!Object.keys(model).length) {return data;}
    // data非对象：可能是数组或字符串，原样返回，不去默认赋值为 {}
    if (!this.equalType(data, Object)) {return data;}
    // 筛选，替换 null、undefined：用传入的 modal 对象处理 data 中的 null、undefined 值
    const obj = JSON.parse(JSON.stringify(data));
    Object.entries(model).map(([key, value]) => {
      const dataValue = obj[key];
      if (Object.is(dataValue, null) || Object.is(dataValue, undefined)) { // 赋值替换或新增
        obj[key] = value;
      } else if (this.equalType(dataValue, Object)) { // 对象：递归处理，注意 model 里面的对应值也要为对象类型
        obj[key] = this.optimizeNull(dataValue, model[key]);
      }
    });
    return obj;
  },
  // ------
  /**
   * 设置rem
   * @param max：最大尺寸
   * @param min：最小尺寸
   * @param px：1rem相对应的 px
   * @param relative：px是相对哪个尺寸下的px，其他尺寸对应缩放
   * @param scale：缩放比例，用在可能视图需要缩放微调的场景
   * @param direction：方向：相对于宽/高设置rem，x：宽，y：高
   */
  setRem({max = 750, min = 320, px = 100, relative = max, scale = 1, direction = 'x'} = {}){
    const resize = () => {
      const html = document.documentElement;
      let size = direction == 'x' ? html.clientWidth : html.clientHeight;
      if (size < min) {
        size = min;
      } else if (size > max) {
        size = max;
      }
      html.style.fontSize = `${ scale * px * size / (relative) }px`;
    };
    window.onresize = resize;
    resize();
  },
};
export default {
  ...utils,
  install(Vue){
    Object.assign(Vue.prototype, {$utils : utils});
  },
};
