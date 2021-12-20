<template>
  <section class="index-root">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="材质库" name="">
      </el-tab-pane>
      <el-tab-pane label="回收站" name="1">
      </el-tab-pane>
    </el-tabs>
    <textures-list :model-data.sync="modelData"></textures-list>
  </section>
</template>
<script>
import TexturesList from './textures-list';
export default {
  name       : 'index',
  components : {TexturesList},
  props      : {},
  data(){
    return {
      activeName : '',
      modelData:[]
    };
  },
  computed : {},
  created(){
    this.getPageData();
  },
  methods : {
    getPageData(){
      this.modelData = new Array(20).fill('').map((item, index) => {
        return {
          id    : index + 1,
          img   : 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          title : 'dafodsjf',
          time  : '2020-02-02',
        };
      });
    },
    handleClick(tab, event){},
  },
};
</script>
<style scoped lang="scss">
.index-root{}
</style>
