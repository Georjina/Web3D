<template>
  <section class="informrtion-root">
    <u-hd3 title="Informrtion"></u-hd3>
    <div class="ct">
      <div class="ct-lt">
        <div class="line-box">
          <div class="dot"></div>
          <div class="line"></div>
        </div>
        <div class="info">
          <div class="name">{{ modelData.name }}</div>
          <p class="p">{{ modelData.name2 }}</p>
        </div>
      </div>
      <div class="status-box">
        <panel-model-status ref="inform-status" :model-src="modelData.statusModel"></panel-model-status>
        <span>异常告警</span>
      </div>
      <!--      <ul class="status-ul">
              <li class="status-li" v-for="(item,index) in statusArr" :key="index" :class="'color' + item.status">
                <i class="iconfont icon-longmendiaoICON"></i>
                <p>{{ item.msg }}</p>
              </li>
            </ul>-->
    </div>
  </section>
</template>
<script>
import UHd3 from '../../../components/u-hd3';
import PanelModelStatus from './panel-model-status';
export default {
  name       : 'informrtion',
  components : {PanelModelStatus, UHd3},
  props      : {},
  data(){
    return {
      statusArr : [
        {
          msg    : '运行中',
          status : 1,
        },
        {
          msg    : '未运行',
          status : 0,
        },
        {
          msg    : '异常告警',
          status : 2,
        },
      ],
    };
  },
  inject   : {
    modelData:{
      name:"",
      name2:"",
      statusModel:"",
    }
  },
  computed : {},
  created(){},
  mounted(){
    this.$nextTick(() => {
      let obj = this.$refs['inform-status'];
      if (obj) {
        obj.changeOutlineEdgeColor('error');
      }
    });
  },
  methods : {},
};
</script>
<style scoped lang="scss">
.informrtion-root{
  .ct{
    padding: 18px 14px 0;
    display: flex;align-items: flex-start;
  }
  .ct-lt{
    display: flex;align-items: flex-start;
    margin-right: 30px;
    padding-top: 10px;
    .info{
      margin-left: 7px;
    }
    .name{
      color: rgba(0, 255, 0, 1);
      font-size: 16px;
    }
    .p{
      color: RGBA(221, 222, 221, 1);
    }
    .dot{
      background: #ccc;
      width: 3px;height: 3px;
      border-radius: 50%;
    }
    .line{
      margin-left: 1px;
      width: 1px;
      height: 46px;
      background: linear-gradient(180deg, rgba(255, 254, 254, 0.6) 0%, rgba(255, 254, 254, 0) 100%);
    }
  }
  .status-box{
    text-align: center;
  }
  .status-ul{
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;color: rgba(255, 254, 254, 1);
    text-align: center;
    width: 338px;
    .color0{
      color: rgb(129, 130, 130);
    }
    .color1{
      color: rgba(0, 255, 0, 1);
    }
    .color2{
      color: #f00;
    }
    .iconfont{
      font-size: 46px;
      text-shadow: 2px 2px 4px #fff;
    }
  }
}
</style>
