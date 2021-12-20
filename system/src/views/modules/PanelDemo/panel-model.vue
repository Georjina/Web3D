<template>
  <section class="panel-model-root">
  </section>
</template>
<script>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
let container,
    camera, //相机
    scene, // 场景
    renderer, //渲染器
    controls, //控制器
    renderPass, //场景通道
    outlinePass, //鼠标物体边缘发光通道
    composer, //EffectComposer（效果组合器）对象
    effectFXAA,
    selectedObjects; //边缘发光的对象
let objects = new Set(); // 监听可以点击或发光的对象
const mouse = new THREE.Vector2();
export default {
  name       : 'panel-model',
  components : {},
  props      : {
    src:{
      type:String,
      default:""
    },
    option:{
      type:Object,
      default : {}
    }
  },
  data(){
    return {
    };
  },
  computed : {},
  beforeDestroy(){
    cancelAnimationFrame(this.reqId);
    if (renderer) {
      renderer.dispose();
    }
    if (controls) {
      controls.dispose();
    }
  },
  created(){},
  mounted(){
    this.$nextTick(() => {
      container = this.$el;
      if (container && this.src) {
        this.init();
        this.animate();
      }
    });
  },
  methods : {
    init(){
      let container1 = document.createElement('div');
      container.appendChild(container1);
      const width = container.offsetWidth;
      const height = container.offsetHeight;
      // 渲染
      renderer = new THREE.WebGLRenderer({antialias : true, alpha : true});
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.shadowMap.enabled = true;
      // todo - support pixelRatio in this demo
      renderer.setSize(width, height);
      container.appendChild(renderer.domElement);
      //初始化场景
      scene = new THREE.Scene();
      this.initCamera();
      this.initControls();
      this.initLight();
      this.loaderFBX();
      // postprocessing
      window.addEventListener('resize', this.onWindowResize);
    },
    initCamera(){
      camera = new THREE.PerspectiveCamera(45, container.offsetWidth / container.offsetHeight, 0.1, 100);
      camera.position.set(0, 0, 8);
    },
    initControls(){
      controls = new OrbitControls(camera, renderer.domElement);
      controls.minDistance = 5;
      controls.maxDistance = 100;
      controls.enablePan = true;
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
    },
    initLight(){
      /*半球光*/
      var HemisphereLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.5);
      scene.add(HemisphereLight);
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.castShadow = false;
      scene.add(directionalLight);
    },
    loaderFBX(){
      let _this = this;
      let loaderFbx = new FBXLoader();
      loaderFbx.load(this.src, function(object){
        let mesh = object.children[0];
        console.log(mesh);
        mesh.material = new THREE.MeshBasicMaterial ({
          blendSrcAlpha:0.1,
          color: '#000',
        })
        const group = new THREE.Group();
        group.add(mesh)
        /**/
        const wireframe = new THREE.WireframeGeometry( mesh.geometry );
        let line = new THREE.LineSegments( wireframe );
        line.material.depthTest = true;
        line.material.opacity = 0.6;
        line.material.transparent = true;
        line.material.color.setRGB(0,255,0);
        line.material.linewidth = 10;
        line.linewidth = 10;
        console.log(line);
        line.rotation.set(-1.57,0,0)
        group.add(line)
        //
        if(_this.option.position){
          group.position.copy(_this.option.position);
        }
        if(_this.option.scale){
          group.scale.copy(_this.option.scale);
        }
        scene.add(group);
        selectedObjects = group;
      });
    },
    onWindowResize(){
      const width = container.offsetWidth;
      const height = container.offsetHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    },
    animate(){
      this.reqId = requestAnimationFrame(this.animate);
      if (selectedObjects && selectedObjects.rotation) {
        selectedObjects.rotation.y -= Math.PI * 0.005;
      }
      controls.update();
      renderer.render( scene, camera );
    },
  },
};
</script>
<style scoped lang="scss">
.panel-model-root{
  width: 100%;
  height: 540px;
}
</style>
