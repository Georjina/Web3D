<template>
  <section class="index-root">
    <!--  工具栏  -->
    <stage-tools></stage-tools>
    <div id="content">
      <!--   菜单   -->
      <stage-menu></stage-menu>
      <!--   主内容   -->
      <stage-main></stage-main>
      <!--   右侧模型相关参数   -->
      <stage-modeling></stage-modeling>
    </div>
  </section>
</template>
<script>
import StageTools from '../DesignStage/stage-tools';
import StageMain from '../test/stage-main'
import StageMenu from '../DesignStage/stage-menu';
import StageModeling from '../DesignStage/stage-modeling';
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

let container, scene, renderer, camera, raycaster, plane, orbitControls;
export default {
  name: 'index',
  components: {StageModeling, StageMenu, StageMain, StageTools},
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {
  },
  mounted() {

  },
  methods: {},
};
</script>
<style scoped lang="scss">
.index-root {
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-height: $mine-h;

  #content {
    display: flex;
    justify-content: start;
    margin-top: 5px;
    width: 100vw;
    min-width: $mine-w;
    flex: 1;
  }

  #content > div {
    height: 99%;
  }
}
</style>
