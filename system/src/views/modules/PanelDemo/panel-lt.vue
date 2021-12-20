<template>
  <el-main>
    <section class="panel-lt-root">
      <panel-title :name="modelData.subheading"></panel-title>
      <panel-model :src='modelData.modelSrc' :option="modelData.modelDetail"></panel-model>
      <panel-line echarts-id="lt-line" :model-data="{}"></panel-line>
    </section>
  </el-main>
</template>
<script>
import PanelTitle from './panel-title';
import PanelModel from './panel-model';
import PanelLine from './panel-line';
export default {
  name       : 'panel-lt',
  components : {PanelLine, PanelModel, PanelTitle},
  data(){
    return {};
  },
  inject:['modelData'],
  computed : {},
  created(){},
  methods : {},
};
</script>
<style scoped lang="scss">
.panel-lt-root{}
</style>
