<template>
  <section class="lordSpeed-root">
    <u-hd3 title="Lord Speed"></u-hd3>
    <div class="flex">
      <panel-radar echarts-id="radar" class="radar" :model-data="modelData"></panel-radar>
      <ul class="tabel">
        <li class="tr" v-for="(item,index) in modelData.indicator" :key="index">
          <p class="td type">{{ item.name }}</p>
          <p class="td">
            <span class="label u-num">LF：</span>
            <span class="u-num color1">{{ modelData.lf.value[index] + '%' }}</span>
          </p>
          <p class="td">
            <span class="label u-num">fc：</span>
            <span class="u-num color2">{{ modelData.lf.value[index] + '%' }}</span>
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
import PanelRadar from './panel-radar';
import UHd3 from '../../../components/u-hd3';
export default {
  name       : 'lordSpeed',
  components : {UHd3, PanelRadar},
  props      : {},
  data(){
    return {
      modelData : {
        lf : {
          name  : '起升速度',
          value : [70, 60, 75, 45, 50, 60],
        },
        fc : {
          name  : '运行速度',
          value : [60, 82, 55, 30, 60, 70],
        },
        indicator:[
          {
            name : '启动',
            max  : 100,
          },
          {
            name : '1-2T',
            max  : 100,
          },
          {
            name : '3-4T',
            max  : 100,
          },
          {
            name : '5-6T',
            max  : 100,
          },
          {
            name : '7-8T',
            max  : 100,
          },
          {
            name : '9-10T',
            max  : 100,
          },
        ]
      },
    };
  },
  computed : {},
  created(){},
  methods : {},
};
</script>
<style scoped lang="scss">
.lordSpeed-root{
  //margin-top: 16px;
  .flex{
    display: flex;
    align-items: flex-end;
  }
  .radar{
    width: 55%;
  }
  .tabel{
    flex:1;
    .tr{
      display: flex;
      align-items: center;
      margin: 12px 0 0 4px;
      border-bottom: 1px solid rgba(255,255,255,0.3);
      padding: 4px 2px;
      position: relative;
      &:after{
        content: "";
        display: inline-block;
        position: absolute;
        left:0;bottom: -1.5px;
        border-radius: 2px;
        width: 4px;
        height: 3px;
        background: #CCCCCC;
      }
    }
    .td{
      font-size: 16px;
      display: flex;
      align-items: center;
      flex:1;
      &.type{
        color:rgba(255, 254, 254, 1);
      }
      .color1{
        color:rgba(0, 255, 27, 1);
      }
      .color2{
        color:rgba(93, 255, 255, 1);
      }
    }
    .u-num{
      display: inline-block;
    }
  }
}
</style>
