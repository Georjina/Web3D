import Vue from 'vue';
import Vuex from 'vuex';
import utils from '@/utils';
import api from '@/api';
import cloneDeep from 'lodash/cloneDeep';
Vue.use(Vuex);
export default new Vuex.Store({
  state     : {
  },
  getters   : {},
  mutations : {
    // 设置 state 里面指定属性的值，通用更新方法
    stateUpdate(state, {key, value, module, custom}){
      if (utils.equalType(custom, Function)) {
        custom(state);
      } else {
        if (module) {
          state[module][key] = value;
        } else {
          state[key] = value;
        }
      }
    },
    // 重置vuex本地储存状态
    resetStore(state){
      Object.keys(state).forEach((key) => {
        state[key] = cloneDeep(window.SITE_CONFIG['storeState'][key]);
      });
    },
  },
  actions   : {
  },
  modules   : {},
});
