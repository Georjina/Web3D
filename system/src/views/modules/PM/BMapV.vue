<template>
  <section class="BMapV-root">
    <baidu-map
        id="map_container"
        :center="center"
        :zoom="zoom"
        @ready="handler"
        :scroll-wheel-zoom="true"
        @click="getClickInfo"
        @moving="syncCenterAndZoom"
        @moveend="syncCenterAndZoom"
        @zoomend="syncCenterAndZoom"
    >
      <bm-map-type :type="mapType" :map-types="maptypeArr" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
      <bm-navigation anchor="BMAP_ANCHOR_BOTTOM_RIGHT"></bm-navigation>
      <bm-copyright
          anchor="BMAP_ANCHOR_TOP_RIGHT"
          :copyright="[{id: 1, content: '这是内容', bounds: {ne: {lng: 110, lat: 40}, sw:{lng: 0, lat: 0}}}, {id: 2, content: '<a>a标签</a>'}]">
      </bm-copyright>
      <!--   海量点   -->
<!--                  <bm-point-collection :points="_points" color="red"></bm-point-collection>-->
      <!--   点   -->
      <bml-marker-clusterer :averageCenter="true" :maxZoom="clustererZoom" :minClusterSize="1">
        <div
            v-for="(item,index) in points"
            :key="index"
        >
          <!--     内容框     -->
          <bm-marker
              :dragging="false"
              :title="item.name"
              :position="item.center"
              :offset="{height:-38,width:-1}"
              :icon="{
                url: markerIconImg0,
                size: {width: markerOption.width, height: markerOption.height},
                opts:{
                  imageSize:{ width: markerOption.width, height: markerOption.iconImgHeight},
                }
              }"
              :zIndex="index * 10"
              @click="markerInfo(item)"
          >
            <bm-label
                :content="setMarkerCenter(item)"
                :position="item.center"
                :labelStyle="{color: '#fff', fontSize : labelFontSize,background:'rgba(0,0,0,0)',border:'0px',zindex:index + 2,'display':clustererStatus?'block':'none'}"
                :offset="{height:4,width:0}"
                title="icon"
            />
          </bm-marker>
          <!--     项目名称     -->
          <!--          <bm-label
                        :content="item.name"
                        :position="item.center"
                        :labelStyle="{color: '#fff', fontSize : labelFontSize,background:'rgba(0,0,0,0)',border:'0px'}"
                        :offset="labelOffset"
                        :title="item.name"
                        :zIndex="index"
                    />
                    &lt;!&ndash;     项目图片     &ndash;&gt;
                    <bm-label
                        :content="setLabelUrl('http://remote.mofang723.cn:81/3d-module-platform/img/2021/08/26/18/10/39/321.png')"
                        :position="item.center"
                        :labelStyle="{color: '#fff', fontSize : labelFontSize,background:'rgba(0,0,0,0)',border:'0px','display':clustererStatus?'block':'none'}"
                        :offset="productLabelImg"
                        :title="item.name"
                        :zIndex="index"
                    />
                    &lt;!&ndash;          <bm-marker
                                  :dragging="false"
                                  :position="item.center"
                                  :icon="{
                                            url: 'http://remote.mofang723.cn:81/3d-module-platform/img/2021/08/26/18/10/39/321.png',
                                            size: productImg,
                                            opts:{
                                              imageSize:productImgSize,
                                            }
                                          }"
                                  :zIndex="index"
                                  @click="markerInfo(item)"
                              >
                              </bm-marker>&ndash;&gt;
                    &lt;!&ndash;     项目名称     &ndash;&gt;
                    <bm-label
                        :content="setLabelIcon(markerIconImg1)"
                        :position="item.center"
                        :labelStyle="{color: '#fff', fontSize : labelFontSize,background:'rgba(0,0,0,0)',border:'0px','display':clustererStatus?'block':'none'}"
                        :offset="{width:-25,height:-25}"
                        :title="item.name"
                        :zIndex="index"
                    />-->
          <!--          <bm-marker
                        :dragging="false"
                        :position="item.center"
                        animation="BMAP_ANIMATION_BOUNCE"
                        :zIndex="index"
                        :icon="{url: markerIconImg1, size: iconOoption.size,opts:{imageSize:iconOoption.size}}"
                        @click="markerInfo(item)"
                    >
                    </bm-marker>-->
        </div>
      </bml-marker-clusterer>
      <!--            <bm-boundary v-if="zoom <= 9" :name="moveBoundary" :strokeWeight="2" :fillOpacity="0.6" strokeColor="blue" :clicking="false"></bm-boundary>-->
      <!--      <bm-polyline :path="polylinePath" stroke-color="blue" :stroke-opacity="0.8" :stroke-weight="2"></bm-polyline>-->
    </baidu-map>
  </section>
</template>
<script>
import { BmlMarkerClusterer } from 'vue-baidu-map';
export default {
  name       : 'BMapV',
  components : {BmlMarkerClusterer},
  props      : {},
  data(){
    return {
      center       : '北京',
      moveBoundary : '',
      zoom         : 13,
      points       : [],
      mapType      : 'BMAP_NORMAL_MAP',
      maptypeArr   : [
        'BMAP_NORMAL_MAP', // 展示普通街道视图
        // 'BMAP_PERSPECTIVE_MAP', //此地图类型展示透视图像视图
        'BMAP_SATELLITE_MAP', //此地图类型展示卫星视图
        'BMAP_HYBRID_MAP', //展示卫星和路网的混合视图
      ],
      myGeo        : '',
      areaArr      : [
        '全国',
        '北京市',
        '天津市',
        '河北省',
        '山西省',
        '内蒙古自治区',
        '辽宁省',
        '吉林省',
        '黑龙江省',
        '上海市',
        '江苏省',
        '浙江省',
        '安徽省',
        '福建省',
        '江西省',
        '山东省',
        '河南省',
        '湖北省',
        '湖南省',
        '广东省',
        '广西壮族自治区',
        '海南省',
        '重庆市',
        '四川省',
        '贵州省',
        '云南省',
        '西藏自治区',
        '陕西省',
        '甘肃省',
        '青海省',
        '宁夏回族自治区',
        '新疆维吾尔自治区',
        '香港',
        '澳门',
        '台湾省',
      ],
      /*路线*/
      /*polylinePath: [
        {lng: 116.404, lat: 39.915},
        {lng: 116.405, lat: 39.920},
        {lng: 116.423493, lat: 39.907445},
        {lng: 117.423493, lat: 41.907445}
      ],*/
      /*设置*/
      markerIconImg0  : 'http://remote.mofang723.cn:81/dw-sass-3d/mark0.png',
      markerIconImg1  : 'http://remote.mofang723.cn:81/dw-sass-3d/mark1.png',
      markerOption    : {
        width         : 230,
        height        : 100,
        iconImgHeight : 60,
      },
      labelOption     : {
        fontSize : 24,
      },
      productImgSize  : {
        width  : 60,
        height : 50,
      },
      iconOoption     : {
        size : {width : 50, height : 50},
      },
      clustererZoom   : 8,
      clustererStatus : true,
    };
  },
  computed : {
    labelFontSize(){
      return this.labelOption.fontSize + 'px';
    },
    labelOffset(){
      let height = -(this.markerOption.height - this.labelOption.fontSize - this.markerOption.iconImgHeight - 16);
      let width = -(this.markerOption.width / 4 - 20);
      return {height, width};
    },
    productLabelImg(){
      let height = -(this.markerOption.height - this.markerOption.iconImgHeight - 16 - 10);
      let width = -(this.markerOption.width / 2 - 6);
      return {height, width};
    },
    productImg(){
      return {
        width  : this.markerOption.width - 14,
        height : this.markerOption.height - 10,
      };
    },
    _points(){
      return this.points.map((item)=>{
        return item.center
      })
    },
  },
  created(){
  },
  mounted(){
    this.getPoints();
  },
  methods : {
    getPoints(){
      this.points = [
        {
          name   : '1号仓库',
          center : {lng : 109.49926175379778, lat : 36.60449676862417},
        },
        {
          name   : '2号仓库',
          center : {lng : 130.49926175379778, lat : 40.60449676862417},
        },
        {
          name   : '3号仓库',
          center : {lng : 110.49926175379778, lat : 42.60449676862417},
        },
        {
          name   : '4号仓库',
          center : {lng : 120.49926175379778, lat : 46.60449676862417},
        },
        {
          name   : '5号仓库',
          center : {lng: 116.404, lat: 39.915},
        },
        {
          name   : '6号仓库',
          center : {lng : 130.79878, lat : 46.174009},
        },
        {
          name   : '7号仓库',
          center : {lng : 116.440121, lat : 39.879481},
        },
      ];
      this.showPoint = true;
    },
    handler({BMap}){
      var _map = new BMap.Map('allmap', {enableMapClick : false});
      _map.enableMapClick = false;
      console.log('loadingMap');
      /**/
      // this.myGeo = new BMap.Geocoder();
    },
    getClickInfo(e){
      console.log('lng:' + e.point.lng);
      console.log('lat:' + e.point.lat);
      /*this.center.lng = e.point.lng;
      this.center.lat = e.point.lat;
      this.zoom = 20;*/
    },
    markerInfo(itemData){
      console.log('itemData:' , itemData);
      let centerObj = itemData.center;
      console.log('centerObj:' , centerObj,'center:' , this.center);
      if ((this.center.lng == centerObj.lng) && (this.center.lat == centerObj.lat)) { // 若相等，子组件的监听是监听不到的，所以要先变下值，再改回去
        this.center = {
          lng : centerObj.lng - 1,
          lat : centerObj.lat - 1,
        };
        setTimeout(() => {
          this.markerInfo(itemData);
        }, 500);
      } else {
        this.center = centerObj;
        this.zoom = 20;
      }
    },
    syncCenterAndZoom({type, target}){
      const {lng, lat} = target.getCenter();
      this.center = {lng, lat};
      this.zoom = target.getZoom();
      this.clustererStatus = this.zoom <= this.clustererZoom ? false : true;
    },
    /*移动对应的省，显示其级别*/
    mouseMoveMap({target, point}){
      let _this = this;
      this.myGeo.getLocation(point, function(result){
        if (result && result.addressComponents && result.addressComponents.province) {
          let province = result.addressComponents.province;
          if (_this.areaArr.findIndex(obj => obj == province) != -1) {
            _this.moveBoundary = province;
          }
        }
      });
    },
    setLabelUrl(label){
      return `<img class="map-label-img" src="${ label }">`;
    },
    setLabelIcon(url){
      return `<img class="map-label-icon" src="${ url }">`;
    },
    setMarkerCenter(itemData){
      return `
      <div class="map-marker">
        <div class="map-marker-hd">
          <img class="map-label-img" src="http://remote.mofang723.cn:81/3d-module-platform/img/2021/08/26/18/10/39/321.png" alt="">
          <p class="map-name">${ itemData.name }</p>
        </div>
        <div class="map-label-icon-box">
          <img class="map-label-icon" src="${this.markerIconImg1}" alt="">
        </div>
      </div>
      `;
    },
  },
};
</script>
<style scoped lang="scss">
.BMapV-root{
  margin: 10px 0;
  height: calc(100vh - 136px - 32px - 20px);
  min-height: $mine-h - 136px - 32px - 20px;
  #map_container{
    width: 100%;
    height: 100%;
  }
}
</style>
