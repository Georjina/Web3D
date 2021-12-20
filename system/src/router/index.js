import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const router = new VueRouter({
  routes : [
    {
      path     : '/',
      redirect : '/login'
    },
    {
      path      : '/',
      name      : 'home',
      component : () => import('@/views/Home'),
      meta : {
        title : "首页"
      }
    },{
      path      : '/mofang',
      name      : 'mofang',
      component : () => import('@/views/modules/Mofang/Mofang'),
      meta : {
        title : "控制台"
      }
    },
    {
      path      : '/desian-stage',
      name      : 'desian-stage',
      component : () => import('@/views/modules/DesignStage/index'),
      meta : {
        title : "设计台"
      }
    },
    {
      path      : '/desian-stage2',
      name      : 'desian-stage2',
      component : () => import('@/views/modules/test/index'),
      meta : {
        title : "设计台2"
      }
    },
    {
      path     : '/layot-uc',
      redirect : '/design-scheme'
    },
    {
      path      : '/layot-uc',
      name      : 'layot-uc',
      component : () => import('@/views/modules/layout-uc'),
      meta:{title:"个人中心"},
      children:[
        {
          path:'/design-scheme',
          name:'design-scheme',
          component:()=> import('@/views/modules/DesignScheme/index'),
          meta:{
            title : "设计方案"
          }
        },
        {
          path:'/PM',
          name:'PM',
          component:()=> import('@/views/modules/PM/index'),
          meta:{
            title : "项目管理"
          }
        },
        {
          path:'/model-base',
          name:'model-base',
          component:()=> import('@/views/modules/ModelBase/index'),
          meta:{
            title : "模型管理"
          }
        },
        {
          path:'/textures-base',
          name:'textures-base',
          component:()=> import('@/views/modules/TexturesBase/index'),
          meta:{
            title : "材质管理"
          }
        },
        {
          path:'/drawing-base',
          name:'drawing-base',
          component:()=> import('@/views/modules/DrawingBase/index'),
          meta:{
            title : "图纸管理"
          }
        },
      ]
    },
    {
      path      : '/login',
      name      : 'login',
      component : () => import('@/views/login'),
      meta : {
        title : ""
      }
    },
    {
      path:'/panel-demo',
      name:'panel-demo',
      component:()=> import('@/views/modules/PanelDemo/index'),
      meta:{
        title : "面板demo"
      }
    },
    {
      path:'/echarts-demo',
      name:'echarts-demo',
      component:()=> import('@/views/modules/EchartsDemo/index'),
      meta:{
        title : "echarts面板"
      }
    },
    {path : '/404', component : () => import('@/views/404'), name : '404', meta : {title : '404未找到'}},
    {path : '*', component : () => import('@/views/404'), name : 'none', meta : {title : '404未找到'}},
  ],
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title?`${ to.meta.title } | 3d模块化平台`:'3d模块化平台';
  next();
  /*const role = localStorage.getItem('ms_username');
  if (!role && to.path !== '/login') {
    next('/login');
  } else if (to.meta.permission) {
    // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
    role === 'admin'
        ? next()
        : next('/403');
  } else {
    next();
  }*/
});
export default router;
