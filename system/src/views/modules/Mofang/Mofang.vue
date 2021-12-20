<template>
<section>
  <div class="header-menu">
    <button class="md-note_add" id="load_scene">
      <img src="images/designer/md-note_add@1x.png" alt="">
      <span>文件</span>
    </button>
    <button class="md-save" id="save_scene">
      <img src="images/designer/md-save@1x.png" alt="">
      <span>存储</span>
    </button>
    <div class="vertical-line"></div>
    <button class="md-reply-undo" id="undo" disabled>
      <img src="images/designer/md-reply-undo@1x.png" alt="">
      <span>撤销</span>
    </button>
    <button class="md-reply-redo" id="redo" disabled>
      <img src="images/designer/md-reply-redo@1x.png" alt="">
      <span>回撤</span>
    </button>
    <button class="md-reply-undo" id="returnScene" disabled>
      <img src="images/designer/md-reply-undo@1x.png" alt="">
      <span>返回场景</span>
    </button>
    <button class="md-delete_forever" id="clearAll">
      <img src="images/designer/md-delete_forever@1x.png" alt="">
      <span>清空</span>
    </button>
    <div class="vertical-line"></div>
    <button class="md-3d_rotation" id="roam">
      <img src="images/designer/md-3d_rotation@1x.png" alt="">
      <span>漫游</span>
    </button>
    <button class="md-extension" id="screenShot">
      <img src="images/designer/md-extension@1x.png" alt="">
      <span>截图</span>
    </button>
    <button class="md-build" style="display: none">
      <img id="draw" src="images/designer/md-build@1x.png" alt="">
      <span>画矩形</span>
    </button>
    <button class="md-build" style="display: none">
      <img id="choseRect" src="images/designer/md-build@1x.png" alt="">
      <span>选矩形</span>
    </button>


    <button class="md-help_outline">
      <img src="images/designer/md-help_outline@1x.png" alt="">
      <span>帮助</span>
    </button>
    <button class="user-center">
      <img src="images/designer/imgCopy@1x.png" alt="">
    </button>
  </div>
  <div id="content">
    <div id="left-menu">
      <div>
        <button class="antFill-home">
          <img src="images/designer/antFill-home@1x.png" alt="">
        </button>
        <button class="antFill-bulb">
          <img src="images/designer/antFill-bulb@1x.png" alt="">
        </button>
        <button class="antFill-youtube">
          <img src="images/designer/antFill-youtube@1x.png" alt="">
        </button>
        <button class="fas-fa-user">
          <img src="images/designer/fas-fa-user@1x.png" alt="">
        </button>
        <button class="antFill-appstore">
          <img src="images/designer/antFill-appstore@1x.png" alt="">
        </button>
      </div>

    </div>

    <div class="repertory">
      <div class="repertory-top">
        <img src="images/designer/mb-cubes@1x.png" alt="">
        <span>公共库</span>
        <input type="search" placeholder="在素材库搜索..">
        <button><img src="images/designer/md-search@1x.png" alt=""></button>
      </div>
      <div class="repertory-category">
        <button id="project">项目分类</button>
        <button id="common" style="margin-left: 4%">通用分类</button>
      </div>
      <div class="repertory-content" id="repertory-content">
        <div class="repertory-project-scene">
          <div class="repertory-project-item" id="scene1">
            <img src="images/designer/building1.png" alt="">
            <p>场景1</p>
          </div>
          <div class="repertory-project-item" id="scene2">
            <img src="images/designer/building2.png" alt="">
            <p>场景2</p>
          </div>
        </div>
        <div class="repertory-project-scene">
          <div class="repertory-project-item" id="scene3">
            <img src="images/designer/building3.png" alt="">
            <p>场景3</p>
          </div>
          <div class="repertory-project-item" id="scene4">
            <img src="images/designer/building4.png" alt="">
            <p>场景4</p>
          </div>
        </div>
        <div class="repertory-project-scene">
          <div class="repertory-project-item" id="scene5">
            <img src="images/designer/building5.png" alt="">
            <p>场景5</p>
          </div>
          <div class="repertory-project-item" id="scene6">
            <img src="images/designer/building6.png" alt="">
            <p>场景6</p>
          </div>
        </div>
        <div class="repertory-project-scene">
          <div class="repertory-project-item" id="scene7">
            <img src="images/designer/building4.png" alt="">
            <p>场景7</p>
          </div>
          <div class="repertory-project-item" id="scene8">
            <img src="images/designer/building3.png" alt="">
            <p>场景8</p>
          </div>
        </div>
        <div class="repertory-project-scene">
          <div class="repertory-project-item" id="scene9">
            <img src="images/designer/building6.png" alt="">
            <p>场景9</p>
          </div>
          <div class="repertory-project-item" id="scene10">
            <img src="images/designer/building5.png" alt="">
            <p>场景10</p>
          </div>
        </div>

        <div class="repertory-common-scene">
          <div class="repertory-common-item" id="jianzhu">
            <img src="Model/jianzhu/baoanting01.png" alt="">
            <p>建筑</p>
          </div>
          <div class="repertory-common-item" id="cangku01">
            <img src="Model/cangku01/huojia0001.png" alt="">
            <p>仓库1</p>
          </div>
        </div>
        <div class="repertory-common-scene">
          <div class="repertory-common-item" id="cangku03">
            <img src="Model/cangku03/jingjuhuojia0001.png" alt="">
            <p>仓库3</p>
          </div>
          <div class="repertory-common-item" id="bangonglou0102">
            <img src="Model/bangonglou0102/zhuozi0002.png" alt="">
            <p>办公楼1和2</p>
          </div>
        </div>
        <div class="repertory-common-scene">
          <div class="repertory-common-item" id="caifengji">
            <img src="Model/caifengji/cailanjishebei.png" alt="">
            <p>裁缝机</p>
          </div>
          <div class="repertory-common-item" id="dianlanhuowu">
            <img src="Model/dianlanhuowu/dianlan0002.png" alt="">
            <p>电缆货物</p>
          </div>
        </div>
        <div class="repertory-common-scene">
          <div class="repertory-common-item" id="longmendiao">
            <img src="Model/longmendiao/longmendiao0001.png" alt="">
            <p>龙门吊</p>
          </div>
          <div class="repertory-common-item" id="shexiangtou">
            <img src="Model/shexiangtou/shexiangtou0002.png" alt="">
            <p>摄像头</p>
          </div>
        </div>
      </div>
    </div>
    <div id="main">
      <div id="scene">
      </div>
    </div>

    <div id="right-menu">
      <div id="right-menu-top">
        <div>
          <img src="images/designer/fas-fa-bars@1x.png" alt="">
          <span>视图</span>
        </div>
        <img src="images/designer/dimian-cad.png" alt="">

      </div>
      <div class="right-menu-bottom">
        <div class="right-menu-bottom-props">
          <img src="images/designer/fas-fa-bars@1x.png" alt="">
          <span>组件属性</span>
        </div>
        <div class="right-menu-bottom-args">
          <label class="base-args">基础参数
            <img src="images/designer/md-arrow_drop_upCopy@1x.png" alt="">
          </label>
          <div class="arg-list">
            <span>长度</span>
            <input id="lengthRange" type="range" min="1" max="200000" value="10000">
            <input id="lengthNumber" type="number" value="10000">
            <select>
              <option>mm</option>
              <option>cm</option>
              <option>m</option>
            </select>
          </div>
          <div class="arg-list">
            <span>宽度</span>
            <input id="widthRange" type="range" min="1" max="200000" value="10000">
            <input id="widthNumber" type="number" value="10000">
            <select>
              <option>mm</option>
              <option>cm</option>
              <option>m</option>
            </select>
          </div>
          <div class="arg-list">
            <span>高度</span>
            <input id="heightRange" type="range" min="1" max="200000" value="10000">
            <input id="heightNumber" type="number" value="10000">
            <select>
              <option>mm</option>
              <option>cm</option>
              <option>m</option>
            </select>
          </div>
          <div class="arg-list">
            <span>离地</span>
            <input id="altitudeRange" type="range" min="-30000" max="30000" value="0">
            <input id="altitudeNumber" type="number" value="0">
            <select>
              <option>mm</option>
              <option>cm</option>
              <option>m</option>
            </select>
          </div>
          <div class="arg-list">
            <span>等比缩放</span>
            <input id="uniformScale" type="checkbox" checked>
          </div>
          <div class="arg-list">
            <button id="hideCeils" style="display: none">
              隐藏|显示房顶
            </button>
            <button id="hideErlou" style="display: none">
              隐藏|显示二楼
            </button>
          </div>
        </div>
        <span id="modelName" style="margin-left: 20px" hidden>模型名</span>
        <progress id="modelLoading" value="0" max="100" hidden></progress>
      </div>
    </div>
  </div>

  <!--存储弹窗-->
  <section class="m-dialog js-dialog-save">
    <div class="m-overlay js-save-overlay"></div>
    <div class="dialog-content top">
      <div class="dialog-hd">
        <h5 class="title">存储</h5>
        <img class="close js-save-close" src="images/icon/error.png" alt="">
      </div>
      <div class="dialog-bd">
        <div class="m-save-input">
          <input type="text" class="u-input dialog-upload-input" placeholder="请输入存储的文件名">
        </div>
      </div>
      <div class="dialog-ft">
        <span class="u-btn js-save-close">取 消</span>
        <span class="u-btn type-primary js-save-upload">确 定</span>
      </div>
    </div>
  </section>
  <section class="m-dialog js-dialog-file">
    <div class="m-overlay js-file-overlay"></div>
    <div class="dialog-content top">
      <div class="dialog-hd">
        <h5 class="title">文件</h5>
        <img class="close js-file-close" src="images/icon/error.png" alt="">
      </div>
      <div class="dialog-bd">
        <ul class="m-file-ul js-file-conter">
          <li class="file-li js-file-read" data-url="123">
            <div class="li-lt">
              <img src="images/icon/file.png" alt="" class="icon">
              <span class="name">sdafsdf</span>
            </div>
            <div class="li-rt">/2021/08/05/18/01/08/空间漫游.png</div>
          </li>
          <li class="file-li js-file-read" data-url="321">
            <div class="li-lt">
              <img src="images/icon/file.png" alt="" class="icon">
              <span class="name">sdafsdf</span>
            </div>
            <div class="li-rt">/2021/08/05/18/01/08/空间漫游.png</div>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section class="m-loading m-dialog js-loading">
    <div class="m-overlay">
      <img class="loading" src="images/icon/loading.gif" alt="">
    </div>
  </section>
</section>
</template>

<script >
// import "../../../utils/src/css/main.css"
import "../../../utils/mofang/test"
import "../../../utils/mofang/bundle";

export default {
  name: "Mofang"
}
</script>

<style scoped>

</style>