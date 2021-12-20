<template>
  <section class="panel-line-root">
    <div
        class="echarts-box"
        :id="echartsId"
    ></div>
  </section>
</template>
<script>
export default {
  name       : 'panel-line',
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
      let base = +new Date(1968, 9, 3);
      let oneDay = 24 * 3600 * 1000;
      let date = [];
      let data = [Math.random() * 300];
      for (let i = 1; i < 20000; i++) {
        var now = new Date((base += oneDay));
        date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
        data.push(Math.abs((Math.random() - 0.5) * 20 + data[i - 1]));
      }
      return {
        grid    : {
          left         : -34,
          right        : 0,
          top          : 0,
          bottom       : -16,
          containLabel : true,
        },
        xAxis: {
          show:false,
          type: 'category',
          boundaryGap: false,
          data: date
        },
        yAxis: {
          show:false,
          type: 'value',
        },
        series: [
          {
            name: 'Fake Data',
            type: 'line',
            symbol: 'none',
            sampling: 'lttb',
            itemStyle: {
              color: 'rgba(212, 143, 42, 1)'
            },
            areaStyle: {
              color: new _this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(212, 143, 42, 0.9)'
                },
                {
                  offset: 1,
                  color: 'rgba(212, 143, 42, 0.1)'
                }
              ])
            },
            data: data
          }
        ]
      }
    }
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
.panel-line-root{
  .echarts-box{
    border:1px solid rgba(0, 255, 27, 0.8);
    border-top:0;
    width: 100%;
    height: 200px;
  }
}
</style>
