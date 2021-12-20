<template>
  <section class="BMapVPoints-root">
    <div
        v-for="(item,index) in modelData"
        :key="index"
    >
      <bm-marker
          :dragging="false"
          :title="item.name"
          :position="item.center"
          :icon="{
              url: markerIconImg0,
              size: {width: markerOption.width, height: markerOption.height},
              opts:{
                imageSize:{ width: markerOption.width, height: markerOption.iconImgHeight},
              }
            }"
          @click="markerInfo(item)"
      >
      </bm-marker>
      <bm-label
          :content="item.name"
          :position="item.center"
          :labelStyle="{color: '#fff', fontSize : labelFontSize,background:'rgba(0,0,0,0)',border:'0px'}"
          :offset="labelOffset"
          :title="item.name"
      />
      <bm-marker
          :dragging="false"
          :position="item.center"
          :icon="{
            url: 'http://remote.mofang723.cn:81/3d-module-platform/img/2021/08/26/18/10/39/321.png',
            size: productImg,
            opts:{
              imageSize:productImgSize,
            }
          }"
          @click="markerInfo(item)"
      >
      </bm-marker>
      <bm-marker
          :dragging="false"
          :position="item.center"
          animation="BMAP_ANIMATION_BOUNCE"
          :icon="{url: markerIconImg1, size: iconOoption.size,opts:{imageSize:iconOoption.size}}"
          @click="markerInfo(item)"
      >
      </bm-marker>
    </div>
  </section>
</template>
<script>
export default {
  name       : 'BMapVPoints',
  components : {},
  props      : {
    modelData : {
      type    : Array,
      default : [],
    },
  },
  data(){
    return {
      markerIconImg0 : 'http://remote.mofang723.cn:81/dw-sass-3d/mark0.png',
      markerIconImg1 : 'http://remote.mofang723.cn:81/dw-sass-3d/mark1.png',
      markerOption   : {
        width         : 230,
        height        : 163,
        iconImgHeight : 60,
      },
      labelOption:{
        fontSize:24,
      },
      productImgSize:{
        width: 60,
        height: 50
      },
      iconOoption:{
        size:{width: 50, height: 50}
      }
    };
  },
  computed : {
    labelFontSize(){
      return this.labelOption.fontSize + 'px'
    },
    labelOffset(){
      let height = -(this.markerOption.height - this.labelOption.fontSize -this.markerOption.iconImgHeight - 16);
      let width = -(this.markerOption.width / 4 - 20);
      return {height,width}
    },
    productImg(){
      return {
        width:this.markerOption.width - 14,
        height:this.markerOption.height - 10,
      }
    },
  },
  created(){},
  methods : {
    markerInfo(itemData){
      this.$emit('markerInfo', itemData.center);
    },
  },
};
</script>
<style scoped lang="scss">
.BMapVPoints-root{}
</style>
