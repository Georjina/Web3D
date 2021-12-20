<template>
  <section class="stage-tools-root">
    <div class="left" style="width: 108px;"></div>
    <div class="center flex-aic">
      <button class="md-note_add">
<!--        <img id="load_scene" src="@/assets/designer/md-note_add@1x.png">-->
        <i class="iconfont icon-tianjiawenjian"></i>
        <span>文件</span>
      </button>
      <button class="md-save">
<!--        <img id="save_scene" src="@/assets/designer/md-save@1x.png">-->
        <i class="iconfont icon-cunchu"></i>
        <span>存储</span>
      </button>
      <div class="vertical-line"></div>
      <button class="md-reply-undo" id="undo" disabled>
<!--        <img src="@/assets/designer/md-reply-undo@1x.png">-->
        <i class="iconfont icon-fanhuichexiaohoutuinishizhendaotuichehui"></i><span>撤销</span>
      </button>
      <button class="md-reply-redo" id="redo" disabled>
<!--        <img src="@/assets/designer/md-reply-redo@1x.png">-->
        <i class="iconfont icon-fanhuichexiaohoutuinishizhendaotuichehuibeifen"></i><span>回撤</span>
      </button>
      <button class="md-reply-undo" id="returnScene">
<!--        <img src="@/assets/designer/md-reply-undo@1x.png">-->
        <i class="iconfont icon-changjing"></i> <span>返回场景</span>
      </button>
      <button class="md-delete_forever" id="clearAll">
<!--        <img src="@/assets/designer/md-delete_forever@1x.png">-->
        <i class="iconfont icon-qingkong"></i> <span>清空</span>
      </button>
      <div class="vertical-line"></div>
      <button class="md-3d_rotation" id="roam">
<!--        <img src="@/assets/designer/md-3d_rotation@1x.png">-->
        <i class="iconfont icon-chenjinmanyou"></i> <span>漫游</span>
      </button>
      <button class="md-extension">
<!--        <img src="@/assets/designer/md-extension@1x.png">-->
        <i class="iconfont icon-kuozhan"></i> <span>文件</span>
      </button>
      <button class="md-build">
<!--        <img id="testRoam" src="@/assets/designer/md-build@1x.png">-->
        <i class="iconfont icon-gongju"></i> <span>工具</span>
      </button>
    </div>
    <div class="right flex-aic">
      <button class="md-help_outline">
        <img src="@/assets/designer/md-help_outline@1x.png"> <span>帮助</span>
      </button>
      <button class="user-center">
        <img src="@/assets/designer/imgCopy@1x.png">
      </button>
    </div>
  </section>
</template>
<script>
export default {
  name       : 'stage-tools',
  components : {},
  props      : {},
  data(){
    return {};
  },
  computed : {},
  created(){},
  methods : {},
};
</script>
<style scoped lang="scss">
.stage-tools-root{
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 4px;
  height: 60px;
  box-shadow: -3px 0 5px 2px #bebebf;
  .vertical-line{
    margin: 0 5px;
    width: 2px;
    height: 80%;
    background-color: #d7d8da;
  }
  button{
    margin: 0 10px;
    border: 0;
    padding: 0;
    background: rgba(0,0,0,0);
    text-align: center;
    //display: flex;flex-direction: column;
    & > span{
      display: block;
      font-size: 12px;
    }
    .iconfont{
      font-size: 20px;
      color:#535252;
      @extend %btn_base;
      &.active, &:hover{
        color:$link-active-color;
      }
    }
  }
  .flex-aic{
    display: flex;
    align-items: center;
  }
}
</style>
