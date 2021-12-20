<template>
  <el-aside width="562px" class="panel-ct-root">
    <informrtion></informrtion>
    <panel-details></panel-details>
    <lord-speed v-if="modelData.id == 1"></lord-speed>
    <panel-alarm v-else-if="modelData.id == 2"></panel-alarm>
    <div class="footer-box">
      <img class="footer-img" src="@/assets/panel/footer.png" alt="">
      <div class="title u-num">{{ modelData.code_num }}</div>
    </div>
  </el-aside>
</template>
<script>
import Informrtion from './informrtion';
import PanelDetails from './panel-details';
import LordSpeed from './lordSpeed';
import PanelAlarm from './panel-alarm';
export default {
  name       : 'panel-ct',
  components : { LordSpeed, PanelDetails, Informrtion,PanelAlarm},
  props      : {},
  data(){
    return {};
  },
  inject:['modelData'],
  computed : {},
  created(){},
  methods : {},
};
</script>
<style scoped lang="scss">
.panel-ct-root{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .footer-box{
    position: relative;
    .footer-img{
      width: 100%;
      height: 24px;
    }
    .title{
      position: absolute;
      left: 0;
      top: 0;
      height: 24px;
      padding: 0 20px;
      display: flex;align-items: center;
    }
  }
}
</style>
