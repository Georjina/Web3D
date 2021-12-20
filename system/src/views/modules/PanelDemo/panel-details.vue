<template>
  <section class="panel-details-root">
    <u-hd3 title="DETAILS"></u-hd3>
    <div class="detail-ul">
      <div class="flex">
        <div class="li">
          <div class="label">ELET：</div>
          <div class="value">{{ modelData.detail.ELET }}</div>
        </div>
        <div class="li">
          <div class="label">IPC：</div>
          <div class="value">{{ modelData.detail.IPC }}</div>
        </div>
      </div>
      <template v-if="modelData.id == 1">
        <div class="flex">
          <div class="li">
            <div class="label">EC：</div>
            <div class="value">{{ modelData.detail.EC }}</div>
          </div>
          <div class="li">
            <div class="label">ML：</div>
            <div class="value">{{ modelData.detail.ML }}</div>
          </div>
        </div>
        <div class="flex">
          <div class="li">
            <div class="label">UST：</div>
            <div class="value">{{ modelData.detail.UST }}</div>
          </div>
          <div class="li">
            <div class="label">EB：</div>
            <div class="value">{{ modelData.detail.EB }}</div>
          </div>
        </div>
        <div class="li">
          <div class="label">MI：</div>
          <div class="value">{{ modelData.detail.MI }}</div>
        </div>
        <div class="li">
          <div class="label">RA：</div>
          <div class="value">{{ modelData.detail.RA }}</div>
        </div>
      </template>
      <template v-else-if="modelData.id == 2">
        <div class="flex">
          <div class="li">
            <div class="label">MC：</div>
            <div class="value">{{ modelData.detail.MC }}</div>
          </div>
          <div class="li">
            <div class="label">RP：</div>
            <div class="value">{{ modelData.detail.RP }}</div>
          </div>
        </div>
        <div class="flex">
          <div class="li">
            <div class="label">DS：</div>
            <div class="value">{{ modelData.detail.DS }}</div>
          </div>
          <div class="li">
            <div class="label">RS：</div>
            <div class="value">{{ modelData.detail.RS }}</div>
          </div>
        </div>
        <div class="li">
          <div class="label">CM：</div>
          <div class="value">{{ modelData.detail.CM }}</div>
        </div>
        <div class="li">
          <div class="label">UST：</div>
          <div class="value">{{ modelData.detail.UST }}</div>
        </div>
      </template>
      <div class="li">
        <div class="label">IPO：</div>
        <div class="value">{{ modelData.detail.IPO }}</div>
      </div>
    </div>
  </section>
</template>
<script>
import UHd3 from '../../../components/u-hd3';
export default {
  name       : 'panel-details',
  components : {UHd3},
  props      : {},
  data(){
    return {};
  },
  inject   : {
    modelData : {
      id     : '',
      detail : {},
    },
  },
  computed : {},
  created(){},
  methods : {},
};
</script>
<style scoped lang="scss">
.panel-details-root{
  //margin-top: 26px;
  .detail-ul{
    margin-top: 20px;
    & > *{
      padding: 12px 8px;
    }
    & > *:nth-child(2n - 1){
      background: rgba(0, 255, 0, 0.04);
    }
  }
  .flex{
    display: flex;
    align-items: center;
    .li{
      flex: 1;
    }
  }
  .li{
    display: flex;align-items: center;
    .label{
      font-size: 16px;
      font-family: UniDreamLED;
      letter-spacing: 2px;
      padding-left: 2px;
    }
    .value{
      color: RGBA(150, 153, 151, 1);
      font-size: 14px;
    }
  }
}
</style>
