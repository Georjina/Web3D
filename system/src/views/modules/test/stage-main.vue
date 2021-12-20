<template>
  <section class="stage-main-root">
    <div id="scene">
      <button id="loadModel">loadModel</button>
    </div>
  </section>
</template>
<script>
import * as THREE from '../../../utils/lib/three.module.js';
import {OrbitControls} from '../../../utils/lib/controls/OrbitControls';
import {FBXLoader} from "../../../utils/lib/loaders/FBXLoader";
let container, scene, renderer, camera, raycaster, plane, orbitControls;
export default {
  name: "stage-main",
  data() {
    return {};
  },
  computed: {},
  created() {
  },
  mounted() {
    this.$nextTick(() => {
      this.init();
      this.animate();
    });
  },
  methods: {
    init() {
      /*全局变量初始化3dContainer*/
      container = document.getElementById('scene');

      //场景初始化
      scene = new THREE.Scene();
      scene.background = new THREE.Color("rgba(131,126,126,0.78)");
      //渲染初始化
      renderer = new THREE.WebGLRenderer({antialias: true});
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(container.offsetWidth, container.offsetHeight);
      // document.body.appendChild(renderer.domElement);
      container.appendChild(renderer.domElement);
      //摄像头初始化
      camera = new THREE.PerspectiveCamera(60, container.offsetWidth / container.offsetHeight, 1, 1000);
      camera.position.set(0, 100, 0);
      //灯光初始化
      const ambientLight = new THREE.AmbientLight(0xffffff);
      scene.add(ambientLight);
      //射线初始化
      raycaster = new THREE.Raycaster();
      //网格初始化
      let length = 1000;
      const gridHelper = new THREE.GridHelper(length, length / 10);
      scene.add(gridHelper);
      //地面初始化
      const planeGeometry = new THREE.PlaneGeometry(length, length);
      plane = new THREE.Mesh(planeGeometry, new THREE.MeshBasicMaterial({color: '#e3b2b2'}));
      plane.rotation.x = -Math.PI * 0.5;
      plane.position.y -= 0.1;
      scene.add(plane);

      orbitControls = new OrbitControls(camera, renderer.domElement);
      orbitControls.listenToKeyEvents(window);
      orbitControls.dampingFactor = 0.05;
      orbitControls.screenSpacePanning = false;
      orbitControls.maxPolarAngle = 0.5 * Math.PI;

      window.addEventListener('resize', () => this.onWindowResize(), false);


      document.getElementById("loadModel").addEventListener('click',function (){
        const loader = new FBXLoader();
        loader.setResourcePath('Model/texture/');
        loader.load('Model/dimian/CK-dimian01-JZ.FBX', function (fbx) {
          fbx.name = "dimian";
          scene.add(fbx);
        })
      })
    },
    onWindowResize() {
      camera.aspect = container.offsetWidth / container.offsetHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.offsetWidth, container.offsetHeight);
    },

    animate() {
      requestAnimationFrame(this.animate);
      renderer.render(scene, camera);
    }
  },
};
</script>
<style scoped lang="scss">
.stage-main-root {
  width: calc(100% - 592px);

  #scene {
    width: 100%;
    height: 100%;
  }

  #scene > img {
    margin-left: 2px;
    margin-top: 60px;
    width: 100%;
    height: 80%;
  }
}
</style>