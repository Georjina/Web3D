/**
 * 全局组件
 * https://cn.vuejs.org/v2/guide/components-registration.html#基础组件的自动化全局注册
 * https://cn.vuejs.org/v2/guide/components-dynamic-async.html#异步组件
 * 为了方便 WebStorm Ctrl+单击 指向文件，这里还是直接每个单独引入，没有用 require.context 处理整个 components 目录
 * 注意：
 *  1.主要使用异步按需引入，部分根据优雅展示使用同步方式
 *  2.异步和同步的 ref 获取组件问题。异步组件可使用自定义 on-mounted 事件触发出去
 */
import AppHeader from '@/components/global/AppHeader';
export default {
  install(Vue, options){
    // 同步方式
    Vue.component('AppHeader', AppHeader);
    // 异步方式
    Vue.component('AppFooter', () => import('./AppFooter'));
  },
};
