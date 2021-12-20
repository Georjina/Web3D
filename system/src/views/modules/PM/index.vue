<template>
  <section class="index-root">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="全部" name="">
      </el-tab-pane>
      <el-tab-pane label="我创建的" name="1">
      </el-tab-pane>
      <el-tab-pane label="我参与的" name="2">
      </el-tab-pane>
      <el-tab-pane label="数据分析" name="3">
      </el-tab-pane>
    </el-tabs>
    <pm-list v-show="activeName != '3'" :model-data="modelData" type="pm"></pm-list>
    <b-map-v v-show="activeName == '3'"></b-map-v>
  </section>
</template>
<script>
import PmList from './pm-list';
import BMapV from './BMapV';
export default {
  name       : 'index',
  components : {BMapV, PmList},
  props      : {},
  data(){
    return {
      activeName : '',
      modelData  : [],
    };
  },
  computed : {},
  created(){
  },
  mounted(){
    this.getPageData();
  },
  methods : {
    getPageData(){
      this.$api.get('file/list').then((res) => {
        let data = res.data || [];
        this.modelData = data.map((item, index) => {
          item.time = item.path.slice(5, 16) + ' ' + item.path.slice(17, 25).replaceAll('/', ':');
          item.private = true;
          item._imgPath = this.$api.src_root + item.imgPath;
          item._path = this.$api.src_root + item.path;
          return item;
        });
      });
    },
    handleClick(tab, event){},
  },
};
</script>
<style scoped lang="scss">
.index-root{}
</style>
