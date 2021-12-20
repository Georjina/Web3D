<template>
  <section class="panel-alarm-swiper-root">
    <swiper ref="mySwiper" :options="swiperOption" class="m-swiper">
      <swiper-slide v-for="(item,index) in modelData" :key="index">
        <div class="alarm-li">
          <div class="time">{{ item.time }}</div>
          <div class="center">{{ item.center }}</div>
          <div class="area">{{ item.area }}</div>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>
<script>
import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
Vue.use(VueAwesomeSwiper);
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import Swiper from 'swiper/dist/js/swiper.min';
import 'swiper/dist/css/swiper.css';
let vm;
export default {
  name       : 'panel-alarm-swiper',
  components : {swiper, swiperSlide},
  props      : {},
  data(){
    return {
      activeIndex  : 0,
      swiperOption : {
        loop               : true,
        autoplay           : true,
        direction          : 'vertical',
        slidesPerView      : 3,
        slidesOffsetBefore : 37,
        on                 : {
          slideChange : function(){
            // console.log(this);
            vm.activeIndex = this.realIndex;
          },
        },
      },
      modelData    : [
        {
          time   : '8:16',
          center : '设备作业时人员闯入告警',
          area   : '二区',
        },
        {
          time   : '10:45',
          center : '巡检设备连接异常告警',
          area   : '一区',
        },
        {
          time   : '9:32',
          center : '设备作业人员闯入告警',
          area   : '三区',
        },
      ],
    };
  },
  computed : {},
  created(){
    vm = this;
  },
  mounted(){
    this.dom = new Swiper(this.$refs.mySwiper);
  },
  methods : {},
};
</script>
<style scoped lang="scss">
.panel-alarm-swiper-root{
  .m-swiper{
    /deep/ .swiper-wrapper{
      height: 111px;
      .swiper-slide-prev{
        display: flex;align-items: flex-start;justify-content: center;
      }
      .swiper-slide-next{
        display: flex;align-items: flex-end;justify-content: center;
      }
      .swiper-slide-active{
        display: flex;align-items: center;justify-content: center;
        .alarm-li{
          $borderColor1: rgba(224, 52, 47, 0.6);
          $backgroudColor1: linear-gradient(45deg, rgba(224, 10, 4, 0.5) 18%, transparent 0, transparent 50%, rgba(224, 10, 4, 0.5) 0, rgba(224, 10, 4, 0.5) 68%, transparent 0);
          $beforeBackroud1: linear-gradient(180deg, rgba(158, 18, 14, 0.5), rgba(226, 23, 23, 0.5));
          color: rgba(254, 6, 0, 1);
          .center{
            margin: 0 14px;
            border: 1px dashed $borderColor1;
            width: 302px;
            height: 32px;
            font-size: 20px;color: rgba(255, 186, 0, 1);
            background: $beforeBackroud1;
            &:before{
              background: $backgroudColor1;
              background-size: 10px 10px;
            }
          }
          .time, .area{
            font-size: 18px;
            height: 30px;
            padding: 0 8px;
            background: $beforeBackroud1;
            border: 1px dashed $borderColor1;
            &:before{
              background: $backgroudColor1;
              background-size: 10px 10px;
            }
          }
        }
      }
    }
  }
  $borderColor2: rgba(125, 125, 125, 0.6);
  $backgroudColor2: linear-gradient(45deg, rgba(23, 23, 23, 0.8) 18%, transparent 0, transparent 50%, rgba(23, 23, 23, 0.8) 0, rgba(23, 23, 23, 0.8) 68%, transparent 0);
  $beforeBackroud2: linear-gradient(180deg, rgba(178, 178, 178, 0.4), rgba(34, 34, 34, 0.5) 80%);
  .alarm-li-box{
    object-fit: cover;
    background: $backgroudColor2;
    background-size: 10px 10px;
    position: relative;
    width: 100%;
    height: 100%;
  }
  .alarm-li{
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    font-weight: bold;
    color: rgba(132, 132, 132, 1);
    /**/
    /*width: 100%;
    position: relative;
    object-fit: cover;
    &:before{
      content: "";
      position: absolute;
      top: 0;left: 0;
      z-index: -1;
      width: 200%;height: 100%;
      background: $backgroudColor2;
      background-size: 10px 10px;
      border-radius: 2px;
      animation: line-tr 10s linear infinite;
    }*/
    /**/
    .center{
      mix-blend-mode: difference;
      margin: 0 8px;
      border: 1px dashed $borderColor2;
      width: 280px;height: 26px;
      font-size: 16px;
      display: flex;align-items: center;justify-content: center;
      background: $beforeBackroud2;
      border-radius: 2px;
      position: relative;
      overflow: hidden;
      &:before{
        content: "";
        position: absolute;
        top: 0;left: 0;
        z-index: -1;
        width: 200%;height: 100%;
        background: $backgroudColor2;
        background-size: 10px 10px;
        border-radius: 2px;
        animation: line-tr 10s linear infinite;
      }
    }
    .time, .area{
      font-size: 14px;
      border: 1px dashed $borderColor2;
      height: 26px;
      padding: 0 6px;
      background: $beforeBackroud2;
      position: relative;
      border-radius: 2px;
      display: flex;align-items: center;justify-content: center;
      overflow: hidden;
      &:before{
        content: "";
        position: absolute;
        top: 0;left: 0;
        z-index: -1;
        width: 200%;height: 100%;
        background: $backgroudColor2;
        background-size: 10px 10px;
        border-radius: 2px;
        animation: line-tr 2s linear infinite;
      }
    }
    .area{
      font-size: 16px;
    }
  }
  @keyframes line-tr{
    100%{
      transform: translateX(-50%);
    }
  }
}
</style>
