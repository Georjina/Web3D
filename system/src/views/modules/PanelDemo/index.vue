<template>
  <section class="index-root">
    <Panel :modelData="currentData"></Panel>
  </section>
</template>
<script>
import Panel from './Panel';
export default {
  name       : 'index',
  components : {Panel},
  props      : {},
  data(){
    return {
      mockData:{
        longmengdiao : {
          id:1,
          title       : '龙门吊',
          subheading  : 'Gantry crane equipment in operation',
          name        : '龙门吊10T',
          name2       : 'MG10/3-16A6',
          code_num:"code-4210-440113-201805-0003",
          modelType   : 'fbx',
          modelSrc    : 'demo/longmendiao1.FBX',
          modelMash   : '',
          modelDetail : {
            position : {
              x:0, y:-2, z:0
            },
            scale    :{
              x:0.26, y:0.26, z:0.26
            },
          },
          statusModel:"demo/longmendiao.FBX",
          detail:{
            ELET:"起重机械",
            IPC:"1年",
            EC:"通用门式起重机",
            ML:"10T",
            UST:"广州供电局有限公司",
            EB:"重粤A600032480",
            MI:"豫正重工集团有限公司",
            RA:"广州市番禺区市场监督管理局",
            IPO:"广州特种机电设备检测研究院",
          }
        },
        xunjianjiqiren : {
          id:2,
          title       : '巡检机器人',
          subheading  : 'Patrol robot equipment in operation',
          name        : '巡检机器人',
          name2       : 'IP65-DC48V',
          code_num:"code-4210-440113-201805-0003",
          modelType   : 'fbx',
          modelSrc    : 'demo/xunjianjiqiren.FBX',
          modelMash   : '',
          modelDetail : {
            position : {
              x:0, y:-1.8, z:0
            },
            scale    :{
              x:4.5, y:4.5, z:4.5
            },
          },
          statusModel:"demo/xunjianjiqiren.FBX",
          detail:{
            ELET:"智能巡检",
            IPC:"1年",
            MC:">=50%",
            RP:"565W*2",
            DS:"815*600*915mm",
            RS:"0-5KM/H",
            CM:"无线制服控/自主巡航",
            UST:"广州供电局有限公司",
            IPO:"广州特种机电设备检测研究院",
          }
        },
      }
    };
  },
  computed : {
    currentData(){
      return (this.$route.query && this.$route.query.id)?this.mockData[this.$route.query.id]:''
    }
  },
  created(){},
  methods : {},
};
</script>
<style scoped lang="scss">
.index-root{
}
</style>
