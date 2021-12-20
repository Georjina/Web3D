<template>
  <section class="Panel-root">
    <el-container class="panel-demo">
      <el-header class="header">
        <div class="h1-box">
          <h1 class="h1">{{ modelData.title }}展示面板</h1>
          <img class="h1-img" src="../../../assets/panel/h1.png" alt="">
        </div>
      </el-header>
      <el-container>
        <panel-lt></panel-lt>
        <panel-ct class="f-pd"></panel-ct>
        <panel-rt class="f-pd"></panel-rt>
      </el-container>
    </el-container>
  </section>
</template>
<script>
import Informrtion from './informrtion';
import LordSpeed from './lordSpeed';
import PanelDetails from './panel-details';
import Workload from './workload';
import UtilizationRate from './utilizationRate';
import Emergency from './emergency';
import PanelLt from './panel-lt';
import PanelCt from './panel-ct';
import PanelRt from './panel-rt';
export default {
  name       : 'Panel',
  components : {PanelRt, PanelCt, PanelLt, Emergency, UtilizationRate, Workload, PanelDetails, LordSpeed, Informrtion},
  props      : {
    modelData:{
      type:Object,
      default:{
        title:"龙门吊",
        subheading:"Gantry crane equipment in operation",
        name:"龙门吊10T",
        name2:"MG10/3-16A6",
        modelType:"fbx",
        modelSrc:"demo/longmendiao1.FBX",
        modelMash:"",
      }
    }
  },
  data(){
    return {
    };
  },
  provide(){
    return {
      modelData : this.modelData
    }
  },
  computed : {},
  created(){},
  methods : {},
};
</script>
<style scoped lang="scss">
.Panel-root{
  background: RGBA(0, 11, 4, 1);
  width: 1920px;height: 1080px;
  padding: 20px;
  color: #fff;
  .f-pd{
    padding: 20px 22px;
  }
  .panel-demo{
    width: 100%;height: 100%;
    padding: 20px;
    background: url("../../../assets/panel/bg.png") no-repeat;
    background-size: 100% 100%;
  }
  .header{
    text-align: center;
    .h1-box{
      position: relative;
      margin-top: 34px;
    }
    .h1-img{
      width: 88.4%;
      margin: 0 auto 0;
    }
    .h1{
      position: absolute;
      top: -32px;
      left: 0;
      width: 100%;
      text-align: center;
      font-size: 36px;
      text-shadow: -1px 2px 8px rgba(0, 255, 0, 0.8);
    }
  }
}
</style>
