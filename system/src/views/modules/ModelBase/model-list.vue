<template>
  <section class="model-list-root m-list">
    <div class="tools">
      <el-input placeholder="请输入搜索内容" v-model="searchData.search" class="input-with-select" clearable @change="changeSearch">
        <el-button type="primary" icon="el-icon-search" slot="append"></el-button>
      </el-input>
      <div class="flex">
        <label for="m-uploadFIle">
          <el-button type="primary" class="u-icon"><i class="el-icon-upload"></i>上传模型</el-button>
          <input id="m-uploadFIle" type="file">
        </label>
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
  </section>
</template>
<script>
import { listMixin } from '../mixin-list';
import MPagin from '../../../components/m-pagin';
export default {
  name       : 'model-list',
  components : {MPagin},
  props      : {},
  mixins     : [listMixin],
  data(){
    return {
      fileList  : [],
      modelData : [
        {
          id    : 1,
          img   : 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          title : '大宋方式大宋方式大宋方式大宋方式大宋方式大宋方式大宋方式大宋方式大宋方式大宋方式',
          time  : '2020-02-02',
        },
      ],
    };
  },
  computed : {},
  watch    : {},
  created(){
    this.getModelData();
  },
  methods : {
    getModelData(){
      this.modelData = new Array(20).fill('').map((item, index) => {
        return {
          id    : index + 1,
          img   : 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          title : 'dafodsjf',
          time  : '2020-02-02',
        };
      });
    },
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
        let pathName = 'http://remote.mofang723.cn:81/3d-module-platform';
        this.$router.push({name : 'desian-stage', query : {model : pathName + itemData.path}});
      }
    },
    changeSearch(val){
      console.log(val);
    },
    /**/
    beforeUpload(){
    },
  },
};
</script>
<style scoped lang="scss">
.model-list-root{
  #m-uploadFIle{
    display: none;
  }
}
</style>
