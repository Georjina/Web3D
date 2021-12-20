<template>
  <section class="panel-lt-root">
    <h2 class="h2">
      <div class="span">{{ name }}</div>
      <div class="span">{{ name }}</div>
    </h2>
  </section>
</template>
<script>
export default {
  name       : 'panel-title',
  components : {},
  props      : {
    name:{
      type:String,
      default:""
    }
  },
  data(){
    return {
    };
  },
  computed : {},
  created(){},
  methods : {},
};
</script>
<style scoped lang="scss">
.panel-lt-root{
  $h2-w: 360px;
  $h2-h: 106px;
  margin: 0 auto;
  width: $h2-w;
  height: $h2-h;
  padding: 10px 20px;
  background: url("../../../assets/panel/h2.png") no-repeat;
  .h2{
    color: rgba(1, 255, 1, 1);
    font-family: 'UnidreamLED';
    letter-spacing: 5px;
    font-size: 26px;
    overflow: hidden;
    position: relative;
    height: 100%;
    & > *{
      display: inline-block;
      white-space: nowrap;
      //width: 100%;
      height: 100%;
      position: absolute;top: 0;left: 0;
      display: flex;align-items: center;justify-content: center;
      text-shadow: -1px 1px 2px #fff;
      padding-left: 5px;
      &:first-child{
        animation: rotaryBlockFirst 6s linear infinite;
      }
      &:last-child{
        animation: rotaryBlockSecond 6s linear infinite;
      }
    }
  }
  @keyframes rotaryBlockFirst{
    100%{ transform: translateX(-120%)}
  }
  @keyframes rotaryBlockSecond{
    0%{ transform: translateX(120%) }
    100%{ transform: translateX(0)}
  }
}
</style>
