<template>
  <section class="stage-modeling-root">
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template slot="title">
          <div class="flex">
            <i class="iconfont icon-menu-two"></i><h5 class="h5">视图</h5>
          </div>
        </template>
        <div class="center">
          <el-image
              style="width: 210px; height: 146px"
              src="/designer/rt-cad01.png"
              fit="cover"
          ></el-image>
        </div>
      </el-collapse-item>
      <el-collapse-item name="2">
        <template slot="title">
          <div class="flex">
            <i class="iconfont icon-menu-two"></i><h5 class="h5">组件属性</h5>
          </div>
        </template>
        <ul class="parmas-ul">
          <li class="parmas-li">
            <span>长度</span>
            <input type="range" min="1" max="200000" v-model="params.extent">
            <input type="number" min="1" max="200000" v-model="params.extent" @input="getNum($event,'extent')">
            <select v-model="params.extent_unit">
              <option value="mm">mm</option>
              <option value="cm">cm</option>
              <option value="m">m</option>
            </select>
          </li>
          <li class="parmas-li">
            <span>宽度</span>
            <input type="range" min="1" max="200000" v-model="params.width">
            <input type="number" min="1" max="200000" v-model="params.width" @input="getNum($event,'width')">
            <select v-model="params.width_unit">
              <option value="mm">mm</option>
              <option value="cm">cm</option>
              <option value="m">m</option>
            </select>
          </li>
          <li class="parmas-li">
            <span>高度</span>
            <input type="range" min="1" max="200000" v-model="params.height">
            <input type="number" min="1" max="200000" v-model="params.height" @input="getNum($event,'height')">
            <select v-model="params.height_unit">
              <option value="mm">mm</option>
              <option value="cm">cm</option>
              <option value="m">m</option>
            </select>
          </li>
          <li class="parmas-li">
            <span>离地</span>
            <input type="range" min="1" max="200000" v-model="params.ground">
            <input type="number" min="1" max="200000" v-model="params.ground" @input="getNum($event,'ground')">
            <select v-model="params.ground_unit">
              <option value="mm">mm</option>
              <option value="cm">cm</option>
              <option value="m">m</option>
            </select>
          </li>
        </ul>
        <div class="flex-s">
          <div class="label">等比缩放</div>
          <el-checkbox v-model="constrainproportions"></el-checkbox>
        </div>
      </el-collapse-item>
    </el-collapse>
  </section>
</template>
<script>
export default {
  name       : 'stage-modeling',
  components : {},
  props      : {},
  data(){
    return {
      activeNames : ['1', '2'],
      constrainproportions:true,
      params      : {
        extent      : 100000,
        extent_unit : 'mm',
        width      : 5000,
        width_unit : 'mm',
        height      : 5000,
        height_unit : 'mm',
        ground      : 5000,
        ground_unit : 'mm',
      },
    };
  },
  computed : {},
  created(){},
  methods : {
    getNum($event,obj){
      let value = $event.target.value;
      console.log(value,obj);
      let max = 200000;
      let min = 1;
      if(value > max){
        this.params[obj] = max
      } else if(value < min){
        this.params[obj] = min
      }
    }
  },
};
</script>
<style scoped lang="scss">
.stage-modeling-root{
  flex-shrink: 0;
  width: 262px;
  background: white;
  box-shadow: 0 3px 3px 3px #d7d8da;
  .flex{
    display: flex;
    align-items: center;
    padding: 0 10px;
  }
  .h5{
    margin-left: 10px;
    font-size: 15px;font-weight: normal;
  }
  .center{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
  }
  .parmas-li{
    display: flex;
    align-items: center;
    //justify-content: center;
    margin-bottom: 10px;
    padding: 0 4px;
    input[type="range"]{
      width: 110px;
      height: 5px;
    }
    input[type="number"]{
      width: 66px;
      height: 21px;
    }
    select{
      width: 50px;
      height: 21px;
    }
  }
  .flex-s{
    display: flex;
    padding: 0 4px;
    .label{
      margin-right: 10px;
      font-size: 13px;
      color: #303133;
      line-height: 1.769230769230769;
    }
  }
}
</style>
