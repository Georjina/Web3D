<template>
  <section class="index-root">
    <!--  工具栏  -->
    <stage-tools></stage-tools>
    <div id="content">
      <!--   菜单   -->
      <stage-menu></stage-menu>
      <!--   主内容   -->
<!--      <stage-main ref="three-main"></stage-main>-->
<!--      <stage-scene ref="three-main"></stage-scene>-->
      <stage-test ref="three-main"></stage-test>
      <!--   右侧模型相关参数   -->
      <stage-modeling></stage-modeling>
    </div>
  </section>
</template>
<script>
import StageTools from './stage-tools';
import StageMenu from './stage-menu';
import StageMain from './stage-main';
import StageTest from './stage-test';
import StageModeling from './stage-modeling';
export default {
  name       : 'index',
  components : {StageModeling, StageMain, StageMenu, StageTools,StageTest},
  props      : {},
  data(){
    return {};
  },
  computed : {},
  created(){},
  methods : {
    menuLoadModle(is_scene,model){
      this.$refs['three-main'].menuLoadModle(is_scene,model)
    },
  },
};
</script>
<style scoped lang="scss">
.index-root{
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-height: $mine-h;
  #content{
    display: flex;
    justify-content: start;
    margin-top: 5px;
    width: 100vw;
    min-width: $mine-w;
    flex:1;
  }
  #content > div{
    height: 99%;
  }
}
</style>
