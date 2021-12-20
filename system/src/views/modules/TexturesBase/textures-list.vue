<template>
  <section class="textures-list-root m-list">
    <div class="tools">
      <el-input placeholder="请输入搜索内容" v-model="searchData.search" class="input-with-select" clearable @change="changeSearch">
        <el-button type="primary" icon="el-icon-search" slot="append"></el-button>
      </el-input>
      <div class="flex">
        <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :show-file-list="false"
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList">
          <el-button type="primary" class="u-icon"><i class="el-icon-upload"></i>上传模型</el-button>
        </el-upload>
        <el-button v-show="isEdit == false" type="primary" class="u-icon" @click="isEdit = true"><i class="icon-chuangkou iconfont"></i>管理模型</el-button>
        <el-button v-show="isEdit == true" type="primary" class="u-icon" @click="isEdit = false"><i class="icon-chuangkou iconfont"></i>取消批量操作</el-button>
      </div>
    </div>
    <div class="flex" v-show="isEdit == true" style="margin-top: 15px;">
      <el-button class="u-icon" @click="selectAll"><i :class="selectAllStatus?'el-icon-success':'el-icon-remove-outline'"></i>全选当前页</el-button>
      <el-button type="primary" class="u-icon" :disabled="selectList.length == 0" @click="emptyAll"><i class="iconfont icon-qingkong"></i>清空选择</el-button>
      <el-button type="danger" class="u-icon" :disabled="selectList.length == 0"><i class="el-icon-delete-solid"></i>删除</el-button>
    </div>
    <ul class="model-ul" :class="{'is_edit':isEdit}">
      <li class="model-li" v-for="(item,index) in modelData" :key="index">
        <el-image
            class="li-img"
            :src="item.img"
            fit="cover"
            @click="openProduct(item,index)"
        >
        </el-image>
        <h5 class="h5" @click="openProduct(item,index)">{{ item.title }}</h5>
        <div class="ft">
          <div class="time">{{ item.time }}</div>
          <el-button class="delet-btn" type="danger" icon="el-icon-delete" circle></el-button>
        </div>
        <div class="label-box" v-show="isEdit" :class="{'active':item.delete}"><i class="el-icon-circle-check"></i></div>
      </li>
    </ul>
    <m-pagin :page="searchData.page" :total="total" @change="changePage"></m-pagin>
    <el-image-viewer v-if="showViewerImg" :url-list="viewerImgList" :on-close="closeViewer"></el-image-viewer>
  </section>
</template>
<script>
import { listMixin } from '../mixin-list';
import ElImageViewer from 'element-ui/packages/image/src/image-viewer'
import MPagin from '../../../components/m-pagin';
export default {
  name       : 'textures-list',
  components : {MPagin,ElImageViewer},
  props      : {
    modelData:{
      type:Array,
      default:[]
    }
  },
  mixins     : [listMixin],
  data(){
    return {
      /**/
      showViewerImg:false,
      viewerImgList:[],
    };
  },
  computed : {},
  created(){
  },
  methods : {
    changePage(val){
      console.log(val);
    },
    openProduct(itemData, index){
      if (this.isEdit) {
        itemData.delete = !itemData.delete;
        this.$set(this.modelData, index, itemData);
        if (itemData.delete) {
          this.selectList.push(itemData.id);
        } else {
          let currentObj = this.selectList.findIndex(obj => obj == itemData.id);
          this.selectList.splice(currentObj, 1);
        }
      } else {
        this.viewerImgList = [itemData.img]
        this.showViewerImg = true;
      }
    },
    changeSearch(val){
      console.log(val);
    },
    /**/
    handleRemove(file, fileList){
      console.log(file, fileList);
    },
    handlePreview(file){
      console.log(file);
    },
    handleExceed(files, fileList){
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${ files.length } 个文件，共选择了 ${ files.length + fileList.length } 个文件`);
    },
    beforeRemove(file, fileList){
      return this.$confirm(`确定移除 ${ file.name }？`);
    },
    /**/
    closeViewer(){
      this.showViewerImg = false;
    }
  },
};
</script>
<style scoped lang="scss">
.textures-list-root{}
</style>
