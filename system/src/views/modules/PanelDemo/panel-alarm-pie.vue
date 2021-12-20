<template>
  <section class="panel-alarm-pie-root">
    <div
        class="echarts-box"
        :id="echartsId"
    ></div>
  </section>
</template>
<script>
export default {
  name       : 'panel-alarm-pie',
  components : {},
  props      : {
    echartsId : {
      type    : String,
      default : 'mains_supply',
    },
  },
  data(){
    return {
      myChart  : null,
      loadData : true,
    };
  },
  computed : {
    mapOption(){
      let _this = this;
      let value = 55;
      let value_rate = parseInt(value)
      return {
        title: {
          text: value_rate + '%',
          x: 'center',
          top: 'middle',
          textStyle: {
            fontSize: '20',
            fontWeight: '800',
            color: 'rgba(255, 0, 0, 1)',
          },
        },
        polar      : {
          // radius: ['51%', '47%'],
          // center: ['50%', '50%'],
        },
        angleAxis  : {
          max        : 100,
          show       : false,
          startAngle : 0,
        },
        radiusAxis : {
          type      : 'category',
          show      : false,
          axisLabel : {
            show : false,
          },
          axisLine  : {
            show : false,
          },
          axisTick  : {
            show : false,
          },
        },
        series     : [
          {
            type           : 'pie',
            name           : '内层细圆环',
            radius         : ['43%', '45%'],
            hoverAnimation : false,
            clockWise      : false,
            itemStyle      : {
              normal : {
                color : 'rgba(102,102,102,0.8)',
              },
            },
            label          : {
              show : false,
            },
            data           : [100],
          },
          {
            type           : 'pie',
            name           : '内层细圆环2',
            radius         : ['64%', '65%'],
            hoverAnimation : false,
            clockWise      : false,
            itemStyle      : {
              normal : {
                color : 'rgba(102,102,102,0.5)',
              },
            },
            label          : {
              show : false,
            },
            data           : [100],
          },
          {
            type        : 'gauge',
            radius      : '80%',
            center      : ['50%', '50%'],
            clockwise   : false,
            startAngle  : '90',
            endAngle    : '-269.9999',
            splitNumber : 30,
            detail      : {
              offsetCenter : [0, -20],
              formatter    : ' ',
            },
            pointer     : {
              show : true,
              // icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z', // 箭头图标
              length       : '16%',
              width        : 4,
              offsetCenter : [0, '-65%'], // 箭头位置
              itemStyle    : {
                color : '#f64649', // 箭头颜色
              },
            },
            axisLine    : {
              show      : true,
              lineStyle : {
                color : [
                  [0, 'rgba(255, 0, 0, 1)'],
                  [(100 - value) / 100, 'rgba(32,187,252,0)'],
                  [1, 'rgba(255, 0, 0, 1)'],
                ],
                width : 8,
              },
            },
            axisTick    : {
              show : false,
            },
            splitLine   : {
              show      : true,
              length    : 12,
              lineStyle : {
                color : '#000b04',
                width : 2,
              },
              distance  : -12,
            },
            axisLabel   : {
              show : false,
            },
            data        : [value],
          },
          {
            name        : '',
            type        : 'gauge',
            splitNumber : 30, //刻度数量
            detail      : {
              offsetCenter : [0, -20],
              formatter    : ' ',
            },
            radius      : '99%', //图表尺寸
            center      : ['50%', '50%'],
            startAngle  : '90',
            angleAxis   : {
              max        : 100,
              show       : false,
              startAngle : 0,
            },
            endAngle    : '-269.9999',
            axisTick    : {
              length    : 0,
              lineStyle : {
                width : 0,
              },
            },
            axisLine    : {
              show      : false,
              lineStyle : {
                width      : 0,
                shadowBlur : 0,
              },
            },
            splitLine   : {
              show      : true,
              length    : 1,
              lineStyle : {
                width : 1,
              },
            },
            axisLabel   : {
              show : false,
            },
          },
        ],
      };
    },
  },
  created(){},
  mounted(){
    this.$nextTick(() => {
      this.init();
    });
  },
  methods : {
    init(){
      this.myChart = this.$echarts.init(document.getElementById(this.echartsId));
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
.panel-alarm-pie-root{
  flex-shrink: 0;
  margin-right: 22px;
  .echarts-box{
    width: 140px;height: 140px;
  }
}
</style>
