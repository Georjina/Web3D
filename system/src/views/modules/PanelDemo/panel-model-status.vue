<template>
  <section class="panel-model-root">
  </section>
</template>
<script>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
let container,
    camera, //相机
    scene, // 场景
    renderer, //渲染器
    controls, //控制器
    renderPass, //场景通道
    outlinePass, //鼠标物体边缘发光通道
    composer, //EffectComposer（效果组合器）对象
    effectFXAA,
    selectedObjects = []; //边缘发光的对象
let objects = new Set(); // 监听可以点击或发光的对象
const mouse = new THREE.Vector2();
export default {
  name       : 'panel-model-status',
  components : {},
  props      : {
    modelSrc:{
      type:String,
      default:'demo/longmendiao.FBX'
    }
  },
  data(){
    return {
      OutlineEdgeColorArr:{
        success:{
          visibleEdgeColor:"#00ff00",
          hiddenEdgeColor:"#4CC34C",
        },
        error:{
          visibleEdgeColor:"#c21d1d",
          hiddenEdgeColor:"#c21d1d",
        },
        static:{
          visibleEdgeColor:"#757C76",
          hiddenEdgeColor:"#c1c2c1",
        }
      }
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
      if (container) {
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
      this.initCompose();
      this.initOutlinePass();
      this.loaderFBX(this.modelSrc);
      // postprocessing
      window.addEventListener('resize', this.onWindowResize);
    },
    initCamera(){
      camera = new THREE.PerspectiveCamera(45, container.offsetWidth / container.offsetHeight, 0.1, 100);
      camera.position.set(0, 0, 8);
    },
    initControls(){
      controls = new OrbitControls(camera, renderer.domElement);
      controls.enablePan = false;
      controls.enableZoom = false;
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
    initCompose(){
      composer = new EffectComposer(renderer);
      const renderPass = new RenderPass(scene, camera);
      composer.addPass(renderPass);
      effectFXAA = new ShaderPass(FXAAShader);
      effectFXAA.uniforms['resolution'].value.set(1 / container.offsetWidth, 1 / container.offsetHeight);
      composer.addPass(effectFXAA);
    },
    loaderFBX(src){
      let loaderFbx = new FBXLoader();
      loaderFbx.load(src, function(object){
        scene.add(object);
        object.scale.set(2.8, 2.8, 2.8);
        object.position.set(0, -2.1, 0);
        outlinePass.selectedObjects = [object];
        selectedObjects = [object];
      });
    },
    initOutlinePass(){
      outlinePass = new OutlinePass(new THREE.Vector2(container.offsetWidth, container.offsetHeight), scene, camera);
      outlinePass.pulsePeriod = 4;
      outlinePass.edgeThickness = 4;
      outlinePass.edgeGlow = 1;
      outlinePass.edgeStrength = 3;
      composer.addPass(outlinePass);
    },
    onWindowResize(){
      const width = container.offsetWidth;
      const height = container.offsetHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      composer.setSize(width, height);
      effectFXAA.uniforms['resolution'].value.set(1 / container.offsetWidth, 1 / container.offsetHeight);
    },
    changeOutlineEdgeColor(state){
      let {visibleEdgeColor,hiddenEdgeColor} = this.OutlineEdgeColorArr[state];
      outlinePass.visibleEdgeColor.set(visibleEdgeColor);
      outlinePass.hiddenEdgeColor.set(hiddenEdgeColor);
    },
    animate(){
      this.reqId = requestAnimationFrame(this.animate);
      if (selectedObjects[0]) {
        selectedObjects[0].rotation.y -= Math.PI * 0.005;
      }
      controls.update();
      composer.render();
    },
    //让模型居中
    setContent(object){
      object.updateMatrixWorld();
      const box = new THREE.Box3().setFromObject(object);
      const size = box.getSize(new THREE.Vector3()).length();
      const boxSize = box.getSize();
      const center = box.getCenter(new THREE.Vector3());
      object.position.x += object.position.x - center.x;
      object.position.y += object.position.y - center.y;//修改center.y可以设置模型整体上下偏移
      object.position.z += object.position.z - center.z;
      camera.position.copy(center);
      if (boxSize.x > boxSize.y) {
        camera.position.z = boxSize.x * -2.85;
      } else {
        camera.position.z = boxSize.y * -2.85;
      }
      camera.lookAt(0, 0, 0);
    },
  },
};
</script>
<style scoped lang="scss">
.panel-model-root{
  width: 60px;
  height: 60px;
}
</style>
