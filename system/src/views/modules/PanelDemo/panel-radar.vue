<template>
  <section class="panel-radar-root">
    <div
        class="echarts-box"
        :id="echartsId"
    ></div>
  </section>
</template>
<script>
export default {
  name       : 'panel-radar',
  components : {},
  props      : {
    modelData : {
      type    : Object,
      default : {
        lf        : {
          name  : '',
          value : [],
        },
        fc        : {
          name  : '',
          value : [],
        },
        indicator : [],
      },
    },
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
      return {
        tooltip : {
          show    : true,
          trigger : 'item',
        },
        legend  : {
          top       : 16,
          textStyle : {color : '#fff', fontSize : 14},
          data      : ['起升速度', '运行速度'],
          icon      : 'roundRect',
          itemGap   : 30,
        },
        radar   : {
          center    : ['50%', '60%'], // 外圆的位置
          radius    : '60%',
          splitArea : {
            // 坐标轴在 grid 区域中的分隔区域，默认不显示。
            areaStyle : {
              // 分隔区域的样式设置。
              // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
              color : ['rgba(209,252,209,0.2)', 'rgba(143,183,143,0.1)'].reverse(),
            },
          },
          name  : {
            color      : 'rgba(255,255,255,0.7)',
            fontSize   : 16,
            fontWeight : 400,
            fontFamily : 'PingFangSC-Regular,PingFang SC',
            fontStyle  : 'normal',
          },
          indicator : _this.modelData.indicator,
          axisLine  : {
            // 指向外圈文本的分隔线样式
            lineStyle : {
              color : 'rgba(255,255,255,0.2)',
            },
          },
          splitLine : {
            lineStyle : {
              type  : 'solid',
              color : 'rgba(255,255,255,0.2)', // 分隔线颜色
              width : 1, // 分隔线线宽
            },
          },
        },
        series  : [
          {
            type       : 'radar',
            symbolSize : 5,
            data       : [
              {
                // TODO:
                value     : _this.modelData.lf.value,
                name      : '起升速度',
                areaStyle : {
                  color : {
                    type       : 'radial',
                    x          : 0.5,
                    y          : 0.5,
                    r          : 0.5,
                    colorStops : [
                      {
                        offset : 0,
                        color  : 'rgba(0, 255, 0, 0.14)', // 0% 处的颜色
                      },
                      {
                        offset : 0.15,
                        color  : 'rgba(0, 255, 0, 0.14)', // 100% 处的颜色
                      },
                      {
                        offset : 0.75,
                        color  : 'rgba(0, 255, 0, 0.4)', // 100% 处的颜色
                      },
                      {
                        offset : 1,
                        color  : 'rgba(0, 255, 0, 0.5)', // 100% 处的颜色
                      },
                    ],
                    global     : false, // 缺省为 false
                  },
                },
                itemStyle : {
                  opacity : 0.5,
                  color   : 'rgb(0, 255, 0)',
                  // 折线拐点标志的样式。
                  lineStyle : {
                    color : 'rgb(0, 255, 0)',
                    width : 1,
                  },
                },
                emphasis : {
                  // 高亮时的样式
                  lineStyle : {
                    width : 5,
                  },
                  itemStyle : {
                    opacity : 0,
                  },
                },
              },
              {
                // TODO:
                value     : _this.modelData.fc.value,
                name      : '运行速度',
                areaStyle : {
                  color : {
                    type       : 'radial',
                    x          : 0.5,
                    y          : 0.5,
                    r          : 0.5,
                    colorStops : [
                      {
                        offset : 0,
                        color  : 'rgba(46,203,255, 0.14)', // 0% 处的颜色
                      },
                      {
                        offset : 0.15,
                        color  : 'rgba(46,203,255, 0.14)', // 100% 处的颜色
                      },
                      {
                        offset : 0.75,
                        color  : 'rgba(46,203,255, 0.4)', // 100% 处的颜色
                      },
                      {
                        offset : 1,
                        color  : 'rgba(46,203,255, 0.6)', // 100% 处的颜色
                      },
                    ],
                    global     : false, // 缺省为 false
                  },
                },
                itemStyle : {
                  // 折线拐点标志的样式。
                  color : 'rgb(46,203,255)',
                },
                emphasis : {
                  // 高亮时的样式
                  lineStyle : {
                    width : 5,
                  },
                  itemStyle : {
                    opacity : 0,
                  },
                },
              },
            ],
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
      let option = {};
      if (this.modelData.indicator && this.modelData.indicator.length > 0) {
        option = this.mapOption;
      }
      this.myChart = this.$echarts.init(document.getElementById(this.echartsId));
      this.myChart.setOption(option);
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
.panel-radar-root{
  .echarts-box{
    height: 330px;
  }
}
</style>
