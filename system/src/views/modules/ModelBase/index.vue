<template>
  <section class="index-root">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="我的模型库" name="1">
      </el-tab-pane>
      <el-tab-pane label="回收站" name="2">
      </el-tab-pane>
    </el-tabs>
    <model-list></model-list>
  </section>
</template>
<script>
import ModelList from './model-list';
export default {
  name       : 'index',
  components : {ModelList},
  props      : {},
  data(){
    return {
      activeName:"1",
    };
  },
  computed : {},
  created(){},
  methods : {
    handleClick(tab,event){},
  },
};
</script>
<style scoped lang="scss">
.index-root{}
</style>
