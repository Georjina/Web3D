<template>
  <section class="workload-root">
    <u-hd3 title="line data"></u-hd3>
    <ul class="ul">
      <li class="li">
        <div class="li-label">workload</div>
        <div class="flex">
          <div class="echarts-box" :id="echartsId + '1'"></div>
          <div class="num-box">
            <div class="ps">rote</div>
            <div class="num">65</div>
          </div>
        </div>
      </li>
      <li class="li">
        <div class="li-label">Operating frequency</div>
        <div class="flex">
          <div class="echarts-box" :id="echartsId + '2'"></div>
          <div class="num-box">
            <div class="ps">rote</div>
            <div class="num">76</div>
          </div>
        </div>
      </li>
      <li class="li">
        <div class="li-label">Equipment power</div>
        <div class="flex">
          <div class="echarts-box" :id="echartsId + '3'"></div>
          <div class="num-box">
            <div class="ps">value</div>
            <div class="num">132</div>
          </div>
        </div>
      </li>
      <li class="li">
        <div class="li-label">Voltage load</div>
        <div class="flex">
          <div class="echarts-box" :id="echartsId + '4'" style="height: 80px;"></div>
          <div class="num-box">
            <div class="ps">volA</div>
            <div class="num" style="margin-bottom: 20px;">57</div>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>
<script>
import UHd3 from '../../../components/u-hd3';
export default {
  name       : 'workload',
  components : {UHd3},
  props      : {
    echartsId  : {
      type    : String,
      default : 'eacharts-box',
    },
    moduleData : {
      type    : Array,
      default : [],
    },
  },
  data(){
    return {
      loadData : true,
      inRange  : [
        '#f89fa5',
        '#fe0011',
      ],
      timers   : '',
    };
  },
  computed : {
    mapOption1(){
      let _this = this;
      var dateList = this.moduleData.map(function(item){
        return item[0];
      });
      var valueList = this.moduleData.map(function(item){
        return item[1];
      });
      return {
        visualMap : {
          show    : false,
          type    : 'continuous',
          min     : 0,
          max     : 400,
          inRange : {
            color : _this.inRange,
          },
        },
        tooltip   : {
          trigger : 'axis',
        },
        xAxis     : {
          data : dateList,
          show : false,
        },
        yAxis     : {
          show : false,
        },
        grid      : {
          top    : 10,
          bottom : 0, // 100
          left   : 10,
          right  : 10,
        },
        series    : [{
          type       : 'line',
          showSymbol : false,
          data       : valueList,
          animationDelay: 1200,
          animationEasing: 'linear',
          animationDuration: 1200,
        }],
        animationEasing: 'elasticOut',
        animationEasingUpdate: 'elasticOut',
        animationDelay: function (idx) {
          return idx * 20;
        },
        animationDelayUpdate: function (idx) {
          return idx * 20;
        }
      };
    },
    mapOption2(){
      let _this = this;
      let data = this.moduleData.filter((obj,index)=>{
        return (index >=10) & (index <=30)
      })
      var dateList = data.map(function(item){
        return item[0];
      });
      var valueList = data.map(function(item){
        return item[1];
      });
      return {
        tooltip : {
          trigger : 'axis',
        },
        xAxis   : {
          data : dateList,
          show : false,
        },
        yAxis   : {
          show : false,
        },
        grid    : {
          top    : 10,
          bottom : 0, // 100
          left   : 10,
          right  : 10,
        },
        series  : [{
          type       : 'line',
          showSymbol : false,
          smooth: true,
          data       : valueList,
          lineStyle  : {
            width         : 2,
            color         : new this.$echarts.graphic.LinearGradient(0, 0, 1, 1, [{
              offset : 0,
              color  : 'rgba(93,72,0,0.6)',
            },
              {
                offset : 1,
                color  : '#fcd600',
              },
            ]),
          },
        }],
      };
    },
    mapOption3(){
      let _this = this;
      let data = [
        ['1', 30],
        ['2', 34],
        ['3', 35],
        ['4', 30],
        ['4', 30],
        ['4', 30],
        ['4', 30],
        ['4', 30],
        ['4', 30],
        ['4', 30],
        ['4', 30],
        ['4', 30],
        ['4', 30],
        ['4', 30],
        ['4', 30],
        ['4', 30],
        ['4', 30],
        ['5', 28],
        ['6', 26],
        ['7', 30],
        ['8', 36],
        ['9', 23],
        ['10', 30],
        ['11', 30],
        ['11', 30],
        ['11', 30],
        ['11', 30],
        ['11', 30],
        ['11', 30],
        ['11', 30],
        ['11', 30],
        ['11', 30],
        ['11', 30],
        ['11', 30],
        ['11', 30],
        ['12', 30],
        ['13', 50],
        ['14', 10],
        ['15', 55],
        ['16', 5],
        ['17', 52],
        ['18', 7],
        ['13', 50],
        ['14', 10],
        ['15', 55],
        ['16', 5],
        ['17', 52],
        ['18', 7],
        ['13', 50],
        ['14', 10],
        ['15', 55],
        ['16', 5],
        ['17', 52],
        ['18', 7],
        ['13', 50],
        ['14', 10],
        ['15', 55],
        ['16', 5],
        ['17', 52],
        ['18', 7],
      ];
      var dateList = data.map(function(item){
        return item[0];
      });
      var valueList = data.map(function(item){
        return item[1];
      });
      return {
        tooltip : {
          trigger : 'axis',
        },
        xAxis   : {
          data : dateList,
          show : false,
        },
        yAxis   : {
          show : false,
        },
        grid    : {
          top    : 10,
          bottom : 0, // 100
          left   : 10,
          right  : 10,
        },
        series  : [{
          type       : 'line',
          showSymbol : false,
          data       : valueList,
          lineStyle  : {
            width         : 2,
            color         : new this.$echarts.graphic.LinearGradient(0, 0, 1, 1, [{
              offset : 0,
              color  : 'rgba(0,252,202,0.2)',
            },
              {
                offset : 1,
                color  : '#00fcca',
              },
            ]),
          },
        }],
      };
    },
    mapOption4(){
      let _this = this;
      let data = this.moduleData.filter((obj,index)=>{
        return (index >=30) & (index <=40)
      })
      var dateList = data.map(function(item){
        return item[0];
      });
      var valueList = data.map(function(item){
        return item[1];
      });
      return {
        tooltip : {
          trigger : 'axis',
        },
        xAxis   : {
          data : dateList,
          show:true,
          nameTextStyle:{
            color:'#fff',
            fontSize:10
          },
          boundaryGap:false,
          axisLine:{
            show:false
          },
          axisTick:{

          }
        },
        yAxis   : {
          show : false,
        },
        grid    : {
          top    : 10,
          bottom : 20, // 100
          left   : 10,
          right  : 10,
        },
        series  : [{
          type       : 'line',
          showSymbol : false,
          data       : valueList,
          lineStyle  : {
            width         : 2,
            color         : new this.$echarts.graphic.LinearGradient(0, 0, 1, 1, [{
              offset : 0,
              color  : '#fff',
            },
              {
                offset : 1,
                color  : '#fff',
              },
            ]),
          },
        }],
      };
    },
  },
  beforeDestroy(){
    clearInterval(this.timers);
  },
  created(){},
  mounted(){
    this.$nextTick(() => {
      this.initEcharts(1);
      this.initEcharts(2);
      this.initEcharts(3);
      this.initEcharts(4);
    });
  },
  methods : {
    initEcharts(num){
      this.myChart = this.$echarts.init(document.getElementById(this.echartsId + num));
      this.myChart.setOption(this['mapOption' + num]);
      this.loadData = false;
      this.myChart.resize();
    },
    resetMychart(){
      this.$nextTick(() => {
        // this.myChart.hideLoading();
        this.loadData = false;
        this.myChart.setOption(this.mapOption1, true);
      });
    },
  },
};
</script>
<style scoped lang="scss">
.workload-root{
  .echarts-box{
    height: 60px;
    width: 484px;
  }
  .ul{
    .li{
      margin-top: 20px;
      &:first-child{
        color:red;
      }
      &:nth-child(2){
        color:#fcd600;
      }
      &:nth-child(3){
        color: #00fcca;
      }
    }
    .flex{
      display: flex;align-items: center;justify-content: space-between;
    }
    .num-box{
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 14px;
      .num{
        font-size: 36px;
        font-family: UniDreamLED;
        line-height: 1.1;
      }
    }
  }
  .li-label{
    color: rgb(3, 248, 170);
    background: rgba(0, 255, 0, 0.04);
    font-size: 16px;
    font-family: UniDreamLED;
    letter-spacing: 2px;
    border-radius: 2px;
    padding: 5px 14px 5px 16px;
    display: inline-block;
    box-shadow: 1px 1px 2px 1px rgba(0, 255, 0, 0.4);
  }
}
</style>
