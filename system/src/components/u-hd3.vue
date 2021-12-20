<template>
  <section class="u-hd3-root">
    <div class="title-box">
      <i class="iconfont icon-sanjiaoxing"></i>
      <div class="title">{{ title }}</div>
    </div>
    <div class="flex-baseline">
      <i class="iconfont icon-zhuangshi2"></i>
      <div class="line-box">
        <div class="line"></div>
        <div class="dot"></div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name       : 'u-hd3',
  components : {},
  props      : {
    title:{
      type:String,
      default:""
    }
  },
  data(){
    return {};
  },
  computed : {},
  created(){},
  methods : {},
};
</script>
<style scoped lang="scss">
.u-hd3-root{
  display: flex;align-items: flex-end;
  .title-box{
    display: flex;align-items: center;
    .icon-sanjiaoxing{
      font-size: 12px;
      transform: scale(0.6);
      color:rgba(0, 255, 0, 0.8);
    }
  }
  .title{
    font-size: 20px;
    font-family: 'UnidreamLED';
    letter-spacing: 2px;
    padding-left: 2px;
    color:rgb(255,255,254);
    text-shadow: -1px 1px 2px rgba(0, 255, 0, 0.8);
  }
  .icon-zhuangshi2{
    margin:0 4px;
    font-size: 12px;
    color:RGBA(221, 222, 221, 1);
  }
  .flex-baseline{
    display: flex;align-items: baseline;
    flex:1;
  }
  .line-box{
    flex: 1;
    display: flex;
    align-items: center;
    .line{
      height: 1px;
      background: RGBA(68, 76, 71, 1);
      flex: 1;
    }
    .dot{
      background: #ffff;
      margin-left: 6px;
      width: 3px;
      height: 3px;
      border-radius: 50%;
    }
  }
}
</style>
