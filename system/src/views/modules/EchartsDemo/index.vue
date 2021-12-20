<template>
  <section class="index-root">
    <el-container class="m-g">
      <el-header class="layout-hd">
        <h1 class="h1">图表编辑器</h1>
        <div class="rt">
          <i class="iconfont icon-xinjian" @click="$router.push('desian-stage')"></i>
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
        <charts-menu></charts-menu>
        <el-main class="layout-main">
          <RouterView v-if="refresh"></RouterView>
        </el-main>
      </el-container>
    </el-container>
  </section>
</template>
<script>
import ChartsMenu from './charts-menu';
export default {
  name       : 'index',
  components : {ChartsMenu},
  props      : {},
  data(){
    return {
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
  },
};
</script>
<style scoped lang="scss">
.index-root{
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
}
</style>
