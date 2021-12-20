<template>
  <el-aside class="m-aside" width="200px">
    <el-menu
        :default-active="$route.name"
        :collapse="false"
        :default-openeds="openOneMenu"
    >
      <layout-uc-menu-item v-for="(item,index) in menuData" :key="index" :menu="item"></layout-uc-menu-item>
    </el-menu>
  </el-aside>
</template>
<script>
import LayoutUcMenuItem from './layout-uc-menu-item';
export default {
  name       : 'layout-uc-menu',
  components : {LayoutUcMenuItem},
  props      : {},
  data(){
    return {
      menuData : [
        {
          title    : '3D方案',
          children : [
            {
              name   : '设计方案',
              icon   : 'iconfont icon-mianfeishejifangan',
              router : 'design-scheme',
            },
            {
              name   : '项目管理',
              icon   : 'iconfont icon-chuangkou',
              router : 'PM',
            },
          ],
        },
        {
          title    : '素材库',
          children : [
            {
              name   : '模型管理',
              icon   : 'iconfont icon-jibenxinxi',
              router : 'model-base',
            },
            {
              name   : '材质管理',
              icon   : 'iconfont icon-caizhi',
              router : 'textures-base',
            },
            {
              name   : '图纸管理',
              icon   : 'iconfont icon-tuzhi',
              router : 'drawing-base',
            },
            {
              title    : '面板demo',
              children : [
                {
                  name   : '龙门吊',
                  icon   : 'iconfont icon-tuzhi',
                  router : 'panel-demo',
                  query  : {
                    id : 'longmengdiao',
                  },
                },
                {
                  name   : '巡检机器人',
                  icon   : 'iconfont icon-tuzhi',
                  router : 'panel-demo',
                  query  : {
                    id : 'xunjianjiqiren',
                  },
                },
                {
                  name   : 'echarts面板',
                  icon   : 'iconfont icon-tuzhi',
                  router : 'echarts-demo',
                },
              ],
            },
          ],
        },
        {
          title    : '设置',
          children : [
            {
              name : '系统设置',
              icon : 'iconfont icon-xitongshezhi',
            },
          ],
        },
      ],
    };
  },
  computed : {
    openOneMenu(){
      return this.menuData.map((item, index) => {
        return item.title;
      });
    },
  },
  created(){},
  methods : {},
};
</script>
<style scoped lang="scss">
.m-aside{
  border: 1px solid #bbb;
  border-radius: 3px;
  box-shadow: 4px -4px 3px 0px #eee;
  .flex{
    display: flex;align-items: center;
  }
  .m-menu{
    font-size: 14px;
    .title{
      line-height: 3em;
      padding: 0 20px;
    }
    .menu-li{
      display: flex;align-items: center;justify-content: space-between;
      height: 2.8em;
      padding: 0 20px;
      @extend %btn_base;
      .iconfont{
        font-size: 18px;
        margin-right: 10px;
      }
      &.active{
        color: #fff;
        background: #4197f6;
      }
      &:hover{
        color: #fff;
        background: rgba(105, 176, 255, 0.7);
      }
    }
  }
}
</style>
