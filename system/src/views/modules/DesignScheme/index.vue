<template>
  <section class="index-root">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="全部" name="">
      </el-tab-pane>
      <el-tab-pane label="我创建的" name="1">
      </el-tab-pane>
      <el-tab-pane label="我参与的" name="2">
      </el-tab-pane>
    </el-tabs>
    <pm-list :model-data="modelData" type="design-scheme"></pm-list>
  </section>
</template>
<script>
import PmList from '../PM/pm-list';
export default {
  name       : 'index',
  components : {PmList},
  props      : {},
  data(){
    return {
      activeName : '',
      modelData  : [],
    };
  },
  computed : {},
  created(){
    this.getPageData();
  },
  methods : {
    getPageData(){
      this.$api.get('file/list').then((res) => {
        let data = res.data || [];
        this.modelData = data.map((item,index)=>{
          item.time = item.path.slice(5,16) + " " + item.path.slice(17,25).replaceAll('/',':');
          item.private = true;
          item._imgPath = this.$api.src_root + item.imgPath;
          item._path = this.$api.src_root + item.path;
          return item
        });
      });
    },
    handleClick(tab, event){},
  },
};
</script>
<style scoped lang="scss">
.index-root{
  .product-ul{
    margin: 10px 0;
    height: calc(100vh - 196px - 32px - 20px);
    min-height: $mine-h - 196px - 32px - 20px;
    padding-right: 10px;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    overflow-y: auto;
    /*滚动条样式*/
    &::-webkit-scrollbar{
      width: 4px;
      /*height: 4px;*/
    }
    &::-webkit-scrollbar-thumb{
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 5px #333;
      background: #333;
    }
    &::-webkit-scrollbar-track{
      -webkit-box-shadow: inset 0 0 5px transparent;
      border-radius: 0;
      background: transparent;
    }
  }
  .product-li{
    margin: 0 0 10px 10px;
    border: 1px solid #eee;
    width: 226px;height: 290px;
    padding: 4px;
    .li-img{
      width: 100%; height: 188px;
      @extend %btn_base;
    }
    .h5{
      font-size: 16px;
      @include ellipsis(100%, 2);
      height: 2.8em;
      @extend %btn_base;
      text-align: center;
    }
    .ft{
      margin-top: 10px;
      display: flex;align-items: center;justify-content: space-between;
      font-size: 14px;
      .more-btn{
        padding: 2px 10px;
        font-size: 24px;
      }
    }
  }
}
.color-red{
  color:red;
}
</style>
