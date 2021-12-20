<template>
  <section class="utilizationRate-root">
    <u-hd3 title="utilizationRate"></u-hd3>
    <div class="echarts-box" id="utilizationRate"></div>
  </section>
</template>
<script>
import UHd3 from '../../../components/u-hd3';
export default {
  name       : 'utilizationRate',
  components : {UHd3},
  props      : {},
  data(){
    return {
      indexArr:[],
      modelData : [],
      timers    : '',
    };
  },
  computed : {
    xData(){
      return new Array(50).fill('').map((item, index) => {
        return index;
      });
    },
    modelData2(){
      return this.modelData.map((item) => {
        return item * -1;
      });
    },
    mapOption(){
      return {
        animation: true,
        animationDuration: 100,
        animationEasing: 'cubicInOut',
        animationDurationUpdate: 100,
        animationEasingUpdate: 'cubicInOut',
        xAxis     : [
          {
            show : false,
            data : this.xData,
          },
          {
            show : false,
            data : this.xData,
          },
        ],
        visualMap : {
          show      : false,
          min       : 0,
          max       : 50,
          dimension : 0,
          inRange   : {
            color : ['#4a657a', '#308e92', '#b1cfa5', '#f5d69f', '#f5898b', '#ef5055'],
          },
        },
        yAxis     : {
          axisLine  : {
            show : false,
          },
          axisLabel : {
            color : '#4a657a',
          },
          splitLine : {
            show : false,
          },
          axisTick  : {
            show : false,
          },
        },
        series    : [
          {
            name      : 'back',
            type      : 'bar',
            data      : this.modelData2,
            z         : 1,
            itemStyle : {
              opacity         : 0.6,
              borderRadius : 1,
              shadowColor     : '#111',
            },
            barWidth  : 1,
          },
          {
            name       : 'front',
            type       : 'bar',
            data       : this.modelData,
            xAxisIndex : 1,
            z          : 3,
            itemStyle  : {
              borderRadius : 1,
            },
            barWidth   : 1,
          },
          {
            type       : 'line',
            showSymbol : false,
            smooth     : true,
            data       : this.modelData,
            lineStyle  : {
              width : 2,
            },
          },
          {
            type       : 'line',
            showSymbol : false,
            smooth     : true,
            data       : this.modelData2,
            lineStyle  : {
              width : 2,
            },
          },
        ],
      };
    },
  },
  created(){
    this.getData(0);
  },
  mounted(){
    this.$nextTick(() => {
      this.initEcharts();
      this.timers = setInterval(() => {
        this.getData(this.indexArr[1]);
        this.resetMychart();
      }, 100);
    });
  },
  beforeDestroy(){
    clearInterval(this.timers);
  },
  methods : {
    getData(num){
      let indexArr = [];
      this.modelData = new Array(50).fill('').map((item, index) => {
        let _index = index + num;
        indexArr.push(_index);
        if(index == 6){
          return Math.sin((_index + 0.5) / 5) * 50;
        }
        return Math.sin(_index / 5) * 50;
      });
      this.indexArr = indexArr;
    },
    initEcharts(){
      this.myChart = this.$echarts.init(document.getElementById('utilizationRate'));
      this.myChart.setOption(this.mapOption);
      this.loadData = false;
      this.myChart.resize();
    },
    resetMychart(){
      this.$nextTick(() => {
        // this.myChart.hideLoading();
        this.loadData = false;
        this.myChart.setOption(this.mapOption, true);
      });
    },
  },
};
</script>
<style scoped lang="scss">
.utilizationRate-root{
  margin-top: 20px;
  .echarts-box{
    width: 100%;
    height: 300px;
  }
}
</style>
