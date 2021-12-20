<template>
  <el-submenu v-if="menu.children" :index="menu.title">
    <template slot="title">
      <span v-if="menu.title">{{ menu.title }}</span>
      <div class="menu-li" v-else>
        <i :class="menu.icon"></i> <span>{{ menu.name }}</span>
      </div>
    </template>
    <layout-uc-menu-item v-for="(item,index) in menu.children" :key="index" :menu="item"></layout-uc-menu-item>
  </el-submenu>
  <el-menu-item v-else :index="menu.router" @click="gotoRouteHandle(menu)">
    <div class="menu-li">
      <i :class="menu.icon"></i> <span>{{ menu.name }}</span>
    </div>
  </el-menu-item>
</template>
<script>
export default {
  name       : 'layout-uc-menu-item',
  components : {},
  props      : {
    menu : {
      type     : Object,
      required : true,
    },
  },
  data(){
    return {};
  },
  computed : {},
  created(){},
  methods : {
    gotoRouteHandle(menu){
      if(menu.router == this.$route.name){
        this.refresh=false;
        setTimeout(()=>{
          this.refresh=true;
        },300)
      } else if(menu.router){
        this.$router.push({name:menu.router,query:menu.query})
      }
    },
  },
};
</script>
<style scoped lang="scss">
.menu-li{
  font-size: 14px;
  display: flex;align-items: center;
  .iconfont{
    font-size: 18px;
    margin-right: 10px;
  }
 /* &.active{
    color: #fff;
    background: #4197f6;
  }
  &:hover{
    color: #fff;
    background: rgba(105, 176, 255, 0.7);
  }*/
}
</style>
