<template>
  <section class="charts-menu-root">
    <ul class="m-type">
      <li class="type-li" v-for="(item,index) in typeArr" :key="index" :title="item.name">

      </li>
    </ul>
  </section>
</template>
<script>
export default {
  name       : 'charts-menu',
  components : {},
  props      : {},
  data(){
    return {
      currentType:"base",
      currentList:[],
      typeArr:[
        {
          name:"基础图表库",
          icon:"icon-bingzhuangtu",
          id:"base",
          show:true,
        },
        {
          name:"共用库",
          icon:"icon-jibenxinxi",
          id:"comment",
          show:true,
        },
        {
          name:"我的",
          icon:"icon-tuanduicankaoxian-",
          id:"myself",
          show:false,
        },
      ],
      chartList:{
        base:[],
        comment:[],
        myself:[],
      }
    };
  },
  computed : {},
  created(){},
  methods : {},
};
</script>
<style scoped lang="scss">
.charts-menu-root{}
</style>
