<template>
  <section class="layout-uc-root">
    <el-container class="m-g">
      <el-header class="layout-hd">
        <h1 class="h1">3D模块化平台</h1>
        <div class="rt">
       <i class="iconfont icon-xinjian" @click="$router.push('desian-stage')"></i>
<!--          <a target="_blank" href="http://remote.mofang723.cn:81/test-demo/"><i class="iconfont icon-xinjian"></i></a>-->
          <el-dropdown @command="handleCommand">
            <div class="flex">
              <el-avatar icon="el-icon-user-solid"></el-avatar>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="a">
                <div class="flex">
                  <i class="iconfont icon-shezhi"></i> <span>设置</span>
                </div>
              </el-dropdown-item>
              <el-dropdown-item command="b">
                <div class="flex">
                  <i class="iconfont icon-bangzhu"></i> <span>帮助</span>
                </div>
              </el-dropdown-item>
              <el-dropdown-item command="Logout">
                <div class="flex">
                  <i class="iconfont icon-dengchu-"></i> <span>退出登陆</span>
                </div>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-container>
        <layout-uc-menu></layout-uc-menu>
        <el-main class="layout-main">
          <RouterView v-if="refresh"></RouterView>
        </el-main>
      </el-container>
    </el-container>
  </section>
</template>
<script>
import LayoutUcMenu from './layout-uc-menu';
export default {
  name       : 'layout-uc',
  components : {LayoutUcMenu},
  props      : {},
  data(){
    return {
      refresh     : true,
      currentMenu : '',
    };
  },
  computed : {},
  created(){},
  methods : {
    handleCommand(command){
      console.log(command);
      if (command == 'Logout') {
        this.$router.push('login');
      }
    },
    handleOpen(key, keyPath){
      console.log(key, keyPath);
    },
    handleClose(key, keyPath){
      console.log(key, keyPath);
    },
    goHref(router){
      if (router == this.$route.name) {
        this.refresh = false;
        setTimeout(() => {
          this.refresh = true;
        }, 300);
      } else if (router) {
        this.$router.push(router);
      }
    },
  },
};
</script>
<style scoped lang="scss">
.layout-uc-root{
  height: 100vh;
  min-height: $mine-h;
  .m-g{
    height: 100%;
  }
  .layout-hd{
    display: flex;align-items: center;justify-content: space-between;
    border-bottom: 8px solid #eee;
    position: sticky;top: 0;z-index: 100;
    background: #fff;
    .rt{
      display: flex;align-items: center;
      .icon-xinjian{
        font-size: 40px;color: #ccc;
        margin-right: 20px;
        @extend %btn_base;
        &:hover{
          color: #4197f6;
        }
      }
    }
  }
  .flex{
    display: flex;align-items: center;
  }
  .layout-main{
    margin-left: 6px;
    border-left: 1px solid #bbb;
    box-shadow: -4px 4px 3px 0px #eee;
    border-radius: 4px 0 0 4px;
  }
  /deep/ .input-with-select{
    width: 300px;
    .el-button{
      color: #fff;
      background-color: #409eff;
      border-color: #409eff;
    }
  }
}
</style>
