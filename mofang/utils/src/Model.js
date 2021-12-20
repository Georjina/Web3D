import {
    Vector3
} from "./lib/three.module.js"
import {FBXLoader} from "./lib/loaders/FBXLoader.js";
import {indoorControl, manager} from "./Manager.js";
import {saveOperation} from "./SceneCon.js";
import {getIntersects, selectObject} from "./Operate.js";

class Model {
    constructor(modelData) {
        //可用区分
        this.name = modelData.name;
        this.url = modelData.url;

        this.position = modelData.position ? modelData.position : new Vector3();
        this.rotation = modelData.rotation ? modelData.rotation : new Vector3();
        this.scale = modelData.scale ? modelData.scale : new Vector3(1, 1, 1);
        //模型内部相机的相对位置，相对角度
        this.relativePosition = modelData.relativePosition ? modelData.relativePosition : new Vector3();
        this.relativeRotation = modelData.relativeRotation ? modelData.relativeRotation : new Vector3();
        //加载json里相机数据，同时记录每次返回场景的相机属性，解决再次进入场景相机重置问题
        //this.inCameraProp = modelData.inCameraProp?modelData.inCameraProp:null;

        //内部模型还是外部模型
        this.isOuterModel = true;

        this.group = null;
    }

    /**
     * 加载模型,可以同步加载
     * @param {boolean} isOuterModel 是否为外部模型非场景模型
     * @return {Promise}
     */
    loadFBX(isOuterModel = true) {
        const scope = this;
        const loader = new FBXLoader();
        loader.setPath('Model/');
        loader.setResourcePath('Model/texture/');
        $('#modelName').show().text(this.name);
        return new Promise((resolve, reject) => {
            loader.load(scope.url, function (fbxGroup) {
                    fbxGroup.castShadow = true;
                    fbxGroup.receiveShadow = true;

                    scope.group = fbxGroup;
                    scope.group.model = scope;
                    fbxGroup.name = scope.name;

                    if (isOuterModel) {
                        //models只保存外部不固定模型，内部模型是其孩子
                        manager.sceneClass.models.push(scope);
                        fbxGroup.position.copy(scope.position);
                        fbxGroup.rotation.setFromVector3(scope.rotation);
                        fbxGroup.scale.copy(scope.scale);
                    }

                    manager.sceneClass.scene.add(fbxGroup);
                    $('#modelName').hide();
                    $('#modelLoading').hide();
                    resolve();
                }, xhr => $('#modelLoading').show().attr('value', xhr.loaded / xhr.total * 100),
                error => reject(error));
        });
    }
}

/**
 * 从所有模型json数据中读取指定name的模型数据
 * @param {string}name 模型名
 * @return {Object}模型json对象
 */
function getModelDataByName(name) {
    for (let m of manager.allModelsData) {
        if (m.name === name) {
            return m;
        }
    }
}

//当前移动的模型
let currentGroup = null;
let model = null;
let objects = null;

/**
 * 点击图片放置模型
 * @param {string} modelName 模型名称
 */
function dragModelInScene(modelName) {
    cancelPutModel();

    let modelData = getModelDataByName(modelName);
    if (!modelData) return;
    model = new Model(modelData);

    objects = [manager.sceneClass.plane];

    if (!indoorControl.isMainScene()) {
        if (manager.sceneClass.sceneModel) objects.push(manager.sceneClass.sceneModel.group);
        objects = objects.concat(manager.sceneClass.getGroups());
    }


    manager.sceneClass.orbitControl.enabled = false;

    //加载模型完毕再添加监听器,添加box提示当前添加模型
    model.loadFBX(indoorControl.isMainScene())
        .then(() => {
            currentGroup = model.group;
            manager.sceneClass.boxhelper.setFromObject(currentGroup);
            manager.sceneClass.boxhelper.visible = true;

            model.isOuterModel = indoorControl.isMainScene();
            //内场景放置模型以该场景为中心
            if (!model.isOuterModel) currentGroup.position.copy(indoorControl.fatherGroup.position);

            document.getElementById("scene").removeEventListener('pointermove', selectObject);
            document.getElementById("scene").addEventListener("mousemove", onMouseMove);
            document.getElementById("scene").addEventListener("pointerdown", onMouseDown);
        })
        .catch(reason => console.error(reason));
}

//取消放置，则移除前一模型及其监听器
function cancelPutModel() {
    manager.sceneClass.transformControls.detach();
    if (currentGroup) {
        manager.sceneClass.boxhelper.visible = false;
        if (indoorControl.isMainScene()) {
            manager.sceneClass.models.pop()
        }
        manager.sceneClass.scene.remove(currentGroup);
        document.getElementById("scene").removeEventListener("mousemove", onMouseMove);
        document.getElementById("scene").removeEventListener("pointerdown", onMouseDown);
    }
}

function onMouseMove(mouseEvent) {
    //检测对象为除了内部模型外的其他物体
    let intersect = getIntersects(mouseEvent, objects);
    if (intersect && currentGroup) {
        currentGroup.position.copy(intersect.point);
        manager.sceneClass.boxhelper.setFromObject(currentGroup);
    }
}

function onMouseDown(mouseEvent) {
    document.getElementById("scene").addEventListener('pointermove', selectObject);
    //左击放置
    if (mouseEvent.buttons === 1) {
        //点击放置才保存
        saveOperation('add', currentGroup, false);
        if (!indoorControl.isMainScene()) {
            indoorControl.fatherGroup.attach(currentGroup);
        }
        manager.sceneClass.transformControls.attach(currentGroup);
        document.getElementById("scene").removeEventListener("mousemove", onMouseMove);
        document.getElementById("scene").removeEventListener("pointerdown", onMouseDown);
    }
    //右击取消放置
    if (mouseEvent.buttons === 2) {
        cancelPutModel();
    }
    currentGroup = null;
    manager.sceneClass.orbitControl.enabled = true;
}

export {Model, dragModelInScene, getModelDataByName}
