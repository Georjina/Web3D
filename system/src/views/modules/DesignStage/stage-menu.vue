<template>
  <section class="stage-menu-root">
    <div id="left-menu">
      <div class="antFill-home">
        <i class="iconfont icon-zhuye"></i>
      </div>
      <div class="antFill-bulb">
        <i class="iconfont icon-4"></i>
      </div>
      <div class="antFill-youtube">
        <i class="iconfont icon-shipin"></i>
      </div>
      <div class="fas-fa-user" @click="$router.push('PM')">
        <i class="iconfont icon-yonghu"></i>
      </div>
      <div class="antFill-appstore">
        <i class="iconfont icon-caidan"></i>
      </div>
    </div>
    <div class="m-repertory">
      <div class="repertory-top">
        <img src="@/assets/designer/mb-cubes@1x.png"> <span class="text">公共库</span>
        <el-input
            placeholder="在素材库搜索.."
            v-model="searchData.content"
            class="input-with-select"
        >
          <template #append>
            <el-button class="icon" icon="el-icon-search"></el-button>
          </template>
        </el-input>
      </div>
      <div class="repertory-category">
        <el-button type="primary" plain @click="changeClasify('changjin')">项目分类</el-button>
        <el-button type="primary" plain @click="changeClasify('tongyong')">通用分类</el-button>
      </div>
      <div class="repertory-content">
        <ul class="ul">
          <li class="li" v-for="(item,index) in currentData" :key="index" @click="modelClassify(item)">
            <el-image
                style="width: 120px; height: 70px"
                :src="item.img"
                fit="cover"
            ></el-image>
            <span>{{ item.name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
import modelData from './tsconfig.json';
export default {
  name       : 'stage-menu',
  components : {},
  props      : {},
  data(){
    return {
      classify:"0",
      searchData         : {
        content : '',
      },
      currentData        : [
        {
          "img": "/designer/building1.png", "name": "场景1", "children": "",
          "model": {
            "name": "dimian",
            "sceneModel": {
              "name": "dimian",
              "url": "/Model/dimian/CK-dimian01-JZ.FBX",
              "position": {
                "x": 0,
                "y": 10,
                "z": 100
              }
            },
            "cameraProperty": {
              "fov": 50,
              "near": 1,
              "far": 5000,
              "position": {
                "x": 7.54,
                "y": 103.53,
                "z": -165.54
              },
              "rotation": {
                "x": -2.62,
                "y": 0.03,
                "z": 3.12
              }
            }
          },
          "is_scene": true
        },
        {
          "img": "/designer/building2.png", "name": "场景2", "children": "",
          "model": "",
          "is_scene": true
        }
      ],
      temporaryModelData : modelData,
    };
  },
  computed : {},
  created(){
  },
  methods : {
    changeClasify(id){
      this.currentData = this.temporaryModelData[id]
    },
    modelClassify(modelData){
      if(modelData.children){ //有子分类
        this.changeClasify(modelData.children)
      } else if(modelData.model){ // 有模型
        if(modelData.is_scene){//场景模型
          console.log('场景模型');
          console.log(modelData.model);
          this.$parent.menuLoadModle(modelData.is_scene,modelData.model)
        } else{// 普通模型
          console.log('普通模型');
          this.$parent.menuLoadModle(modelData.is_scene,modelData.model)
        }
      } else{
        this.$message('该模型暂未绑定');
      }
    },
  },
};
</script>
<style scoped lang="scss">
.stage-menu-root{
  flex-shrink: 0;
  display: flex;
  box-shadow: 0 3px 3px 3px #d7d8da;
  #left-menu{
    width: 40px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .iconfont{
      font-size: 24px;
      color: #828181;
      @extend %btn_base;
      &:hover, &.active{
        color: $link-active-color;
      }
      &.icon-caidan{
        font-size: 22px;
      }
    }
  }
  .m-repertory{
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    width: 290px;
    & > *{
      padding: 0 6px;
    }
    .repertory-top{
      flex-shrink: 0;
      padding: 10px 6px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .input-with-select{
        width: 180px;
      }
      .text{
        font-size: 16px;
      }
      ::v-deep .el-input-group__append{
        padding: 0 10px;
      }
    }
    .repertory-category{
      flex-shrink: 0;
      display: flex;align-items: center;justify-content: space-around;
      margin-bottom: 6px;
    }
  }
  .repertory-content{
    width: 100%;
    padding-right: 0;
    .ul{
      display: flex;
      flex-wrap: wrap;
      max-height: calc(100vh - 175px);
      overflow: auto;
      /*滚动条*/
      &::-webkit-scrollbar{
        width: 8px;
        height: 200px;
        background-color: #f2f2f2;
      }
      &::-webkit-scrollbar-track{
        border-radius: 6px;
        background-color: #f2f2f2;
      }
      /*track外层轨道,track-piece内层轨道,thumb滑块,corner边角,button两端按钮*/
      &::-webkit-scrollbar-thumb{
        border-radius: 6px;
        background-color: #d8d8d8;
      }
    }
    .li{
      margin: 0 6px 6px 0;
      border: 1px solid #ccc;
      border-radius: 4px;
      width: calc(50% - 6px);
      padding: 4px;
      text-align: center;
    }
  }
}
</style>
