import sass from './_variable.scss';
export default {
  sass,
  install(Vue){
    Object.assign(Vue.prototype, {$sass : sass});
  },
};
