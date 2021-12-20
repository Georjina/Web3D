<template>
  <section class="panel-alarm-root">
    <div class="flex">
      <panel-alarm-pie echarts-id="alarm-pie"></panel-alarm-pie>
      <ul class="alarm-ul">
        <li class="alarm-li" v-for="(item,index) in alarmData" :key="index" :class="{'red':item.value>0}">
          <span class="name">{{ item.name }}</span> <span class="num u-num">{{ item.value }}</span>
        </li>
      </ul>
    </div>
    <panel-alarm-swiper></panel-alarm-swiper>
  </section>
</template>
<script>
import PanelAlarmPie from './panel-alarm-pie';
import PanelAlarmSwiper from './panel-alarm-swiper';
export default {
  name       : 'panel-alarm',
  components : {PanelAlarmSwiper, PanelAlarmPie},
  props      : {},
  data(){
    return {
      alarmData : [
        {
          name  : '运行告警',
          value : 0,
        },
        {
          name  : '闯入告警',
          value : 2,
        },
        {
          name  : '连接告警',
          value : 6,
        },
        {
          name  : '温度告警',
          value : 0,
        },
      ],
    };
  },
  computed : {},
  created(){
  },
  mounted(){
  },
  methods : {},
};
</script>
<style scoped lang="scss">
.panel-alarm-root{
  .flex{
    margin-bottom: 30px;
    display: flex;align-items: center;justify-content: space-between;
  }
  .alarm-ul{
    flex: 1;
    display: flex;align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    .alarm-li{
      width: 136px;height: 60px;
      display: flex;align-items: center;justify-content: center;
      background: url("../../../assets/alarm1.png");
      background-size: 100% 100%;
      &.red{
        background: url("../../../assets/alarm0.png");
        background-size: 100% 100%;
      }
      &:nth-child(n + 3){
        margin-top: 30px;
      }
      .name{
        font-size: 16px;font-weight: bold;
      }
      .num{
        color: rgba(255, 0, 0, 1);
        font-size: 26px;font-weight: bold;
      }
    }
  }
}
</style>
