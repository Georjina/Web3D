// 1.vue一家：
import Vue from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';
// 2.UI框架 ElementUI：
import ElementUI from 'element-ui';
import '@/element-ui-theme';
import 'element-ui/lib/theme-chalk/index.css';
// 3.其他全局挂载：
import utils from '@/utils';
import api from '@/api';
import globalComponents from '@/components/global';
import cssVariable from '@/styles/base/variable-js';
// 4.全局样式，在其他框架的全局样式之后引用：
import '@/styles/global/index.scss';
// 5 挂载echarts
import * as echarts from 'echarts';
Vue.prototype.$echarts = echarts;
// import 'default-passive-events';
// UI框架 ElementUI
Vue.use(ElementUI);
// 其他全局挂载、Vue.use：
Vue.use(utils);
Vue.use(api);
Vue.use(globalComponents);
Vue.use(cssVariable);
//百度地图
import BaiduMap from "vue-baidu-map";
Vue.use(BaiduMap, {
  ak: 'cXuqYc8DDUPi4vHIAKHoIg1Fq7j95C3G'  //这个地方是官方提供的ak密钥
})
// utils.setRem(); // rem设置
// 5.调试选项设置：
Vue.config.productionTip = false;
// 6.创建vue实例：
new Vue({
  computed : {
    nodeEnv(){
      return process.env.NODE_ENV;
    },
  },
  router,
  store,
  comments : true,
  render   : h => h(App),
}).$mount('#app');
