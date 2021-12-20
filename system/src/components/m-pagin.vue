<template>
  <section class="m-pagin-root">
    <el-pagination
        background
        @current-change="handleCurrentChange"
        :current-page="page"
        :page-size="10"
        layout="total, prev, pager, next, jumper"
        :total="total">
    </el-pagination>
  </section>
</template>
<script>
export default {
  name       : 'm-pagin',
  components : {},
  props      : {
    page  : {
      type    : Number,
      default : 1,
    },
    total : {
      type    : Number,
      default : 0,
    },
  },
  data(){
    return {};
  },
  computed : {},
  created(){},
  methods : {
    handleCurrentChange(val){
      console.log(val);
      this.$emit('change', val);
    },
  },
};
</script>
<style scoped lang="scss">
.m-pagin-root{
  text-align: center;
}
</style>
