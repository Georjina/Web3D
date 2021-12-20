<template>
  <section class="pm-list-root">
    <el-input placeholder="请输入搜索内容" v-model="searchData.search" class="input-with-select" clearable>
      <el-button type="primary" icon="el-icon-search" slot="append"></el-button>
    </el-input>
    <ul class="product-ul">
      <li class="product-li" v-for="(item,index) in modelData" :key="index">
        <el-image
            class="li-img"
            :src="item._imgPath"
            fit="cover"
            @click="openProduct(item._path)"
        >
        </el-image>
        <h5 class="h5" @click="openProduct(item._path)">{{ item.fileName }}</h5>
        <div class="ft">
          <div class="time">{{ item.time }}</div>
          <el-dropdown v-if="type == 'pm'">
            <el-button class="more-btn" icon="el-icon-more" type="primary">
            </el-button>
            <el-dropdown-menu slot="dropdown" class="dropdown">
              <el-dropdown-item>重别名</el-dropdown-item>
              <el-dropdown-item>克隆项目</el-dropdown-item>
              <el-dropdown-item>导出历史版本</el-dropdown-item>
              <el-dropdown-item>邀请组员</el-dropdown-item>
              <el-dropdown-item class="color-red" v-if="item.private">解散项目</el-dropdown-item>
              <el-dropdown-item class="color-red" v-else>退出项目</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-dropdown v-if="type == 'design-scheme'" @command="handleCommand">
            <el-button class="more-btn" icon="el-icon-more" type="primary">
            </el-button>
            <el-dropdown-menu slot="dropdown" class="dropdown">
              <el-dropdown-item command="a">重别名</el-dropdown-item>
              <el-dropdown-item command="b">克隆方案</el-dropdown-item>
              <el-dropdown-item command="c">导出历史版本</el-dropdown-item>
              <el-dropdown-item command="create">生成项目</el-dropdown-item>
              <el-dropdown-item command="delete" class="color-red">删除方案</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </li>
    </ul>
    <m-pagin :page="searchData.page" :total="total" @change="changePage"></m-pagin>
    <el-dialog
        title="提示"
        :visible.sync="schemeDialoge.show"
        width="50%"
    >
      <el-form ref="schemeForm" :model="schemeDialoge.createForm">
        <el-form-item label="项目名称">
          <el-input class="dialog-input" placeholder="请输入项目坐标" v-model="schemeDialoge.createForm.name"></el-input>
        </el-form-item>
        <el-form-item label="项目坐标">
          <el-input class="dialog-input" placeholder="请输入坐标经度" v-model="schemeDialoge.createForm.name"></el-input>
          <span style="padding: 0 20px">-</span>
          <el-input class="dialog-input" placeholder="请输入坐标纬度" v-model="schemeDialoge.createForm.name"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="schemeDialoge.show = false">取 消</el-button>
        <el-button type="primary" @click="schemeDialoge.show = false">确 定</el-button>
      </div>
    </el-dialog>
  </section>
</template>
<script>
import MPagin from '../../../components/m-pagin';
export default {
  name       : 'pm-list',
  components : {MPagin},
  props      : {
    modelData : {
      type    : Array,
      default : [],
    },
    type      : {
      type    : String,
      default : '',
    },
  },
  data(){
    return {
      searchData : {
        search   : '',
        page     : 1,
        pageSize : '10',
      },
      total      : 400,
      schemeDialoge:{
        show:false,
        createForm:{
          name:'',
        }
      }
    };
  },
  computed : {},
  created(){},
  methods : {
    changePage(val){
      console.log(val);
    },
    openProduct(path){
      /*let pathName = "http://remote.mofang723.cn:81/3d-module-platform";
      this.$router.push({name:'desian-stage',query:{path:pathName + path}})*/
      /*临时*/
      let openPath = 'http://remote.mofang723.cn:81/test-demo/?path=' + encodeURIComponent(path);
      // window.location.href = openPath;
      window.open(openPath);
    },
    handleCommand(command){
      this.$message('click on item ' + command);
      if (command == 'create') {
        this.schemeDialoge.show = true;
      }
    },
  },
};
</script>
<style scoped lang="scss">
.pm-list-root{
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
    border-radius: 4px;
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
  .dialog-input{
    width: 200px;
  }
}
.color-red{
  color: red;
}
</style>
