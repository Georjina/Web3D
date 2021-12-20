import * as Three from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import {indoorControl, manager} from "./Manager.js";
import {saveOperation} from "./SceneCon.js";
import {getIntersects} from "./Operate.js";

class Model {
    constructor(modelData) {
        //可用区分
        this.uuid = Three.MathUtils.generateUUID();
        this.name = modelData.name;
        this.url = modelData.url;

        this.position = modelData.position ? modelData.position : new Three.Vector3();
        this.rotation = modelData.rotation ? modelData.rotation : new Three.Vector3();
        this.scale = modelData.scale ? modelData.scale : new Three.Vector3(1, 1, 1);
        //模型内部相机的相对位置，相对角度
        this.relativePosition = modelData.relativePosition ? modelData.relativePosition : new Three.Vector3();
        this.relativeRotation = modelData.relativeRotation ? modelData.relativeRotation : new Three.Vector3();

        //内部模型还是外部模型
        this.isOuterModel = true;

        this.group = null;
    }

    /**
     * 加载模型,可以同步加载
     * @param {boolean} isSceneModel 是否为场景模型
     * @return {Promise}
     */
    loadFBX(isSceneModel = false) {
        const scope = this;
        const loader = new FBXLoader();
        loader.setPath('Model/');
        loader.setResourcePath('Model/texture/');
        return new Promise((resolve, reject) => {
            loader.load(scope.url, function (fbxGroup) {
                    fbxGroup.castShadow = true;
                    fbxGroup.receiveShadow = true;

                    scope.group = fbxGroup;
                    scope.group.model = scope;
                    fbxGroup.name = scope.name;

                    fbxGroup.position.copy(scope.position);
                    fbxGroup.rotation.setFromVector3(scope.rotation);
                    fbxGroup.scale.copy(scope.scale);

                    scope.isOuterModel = indoorControl.isMainScene();

                    if (!isSceneModel) {
                        //models只保存外部不固定模型，内部模型是其孩子
                        if(scope.isOuterModel){
                            manager.sceneClass.models.push(scope);
                        }
                    }

                    manager.sceneClass.scene.add(fbxGroup);
                    resolve();
                }, xhr => console.log(xhr.loaded / xhr.total * 100 + '%'),
                error => reject(error));
        });
    }

}

//记录是否已经放置
let isPut = false;

/**
 * 点击图片放置模型
 * @param {string} modelName 模型名称
 */
function dragModelInScene(modelName) {
    //如果没有放置，则移除前一模型
    if (!isPut && manager.sceneClass.models.length > 0) {
        manager.sceneClass.boxhelper.visible = false;
        let mod = manager.sceneClass.models.pop();
        manager.sceneClass.scene.remove(mod.group);
    }

    isPut = false;

    let modelData = getModelDataByName(modelName);
    if (!modelData) return;
    let model = new Model(modelData);

    let objects = [manager.sceneClass.plane];
    if(manager.sceneClass.sceneModel)objects.push(manager.sceneClass.sceneModel.group);
    objects = objects.concat(manager.sceneClass.getGroups());

    manager.sceneClass.orbitControl.enabled = false;

    //加载模型完毕再添加监听器,添加box提示当前添加模型
    model.loadFBX(false)
        .then(() => {
            manager.sceneClass.boxhelper.setFromObject(model.group);
            manager.sceneClass.boxhelper.visible = true;
            document.getElementById("scene").addEventListener("mousemove", onMouseMove);
            document.getElementById("scene").addEventListener("pointerdown", onMouseDown);
        })
        .catch(reason => console.error(reason));

    function onMouseMove(mouseEvent) {
        //检测对象为除了内部模型外的其他物体
        let intersect = getIntersects(mouseEvent, objects);
        if (intersect && model.group) {
            model.group.position.copy(intersect.point);
        }
    }

    function onMouseDown() {
        isPut = true;
        document.getElementById("scene").removeEventListener("mousemove", onMouseMove);
        document.getElementById("scene").removeEventListener("pointerdown", onMouseDown);
        manager.sceneClass.orbitControl.enabled = true;
        //点击放置才保存
        saveOperation('add', model.group, false);

        if (!indoorControl.isMainScene()) {
            indoorControl.fatherGroup.attach(model.group);
        }
    }
}

function mergeModelData(dataJson, modelData) {
    let model = {};
    model.uuid = dataJson.uuid ? dataJson.uuid : modelData.uuid;
    model.name = dataJson.name ? dataJson.name : modelData.name;
    model.meshType = dataJson.meshType ? dataJson.meshType : modelData.meshType;
    model.url = dataJson.url ? dataJson.url : modelData.url;
    model.position = dataJson.position ? dataJson.position : modelData.position;
    model.rotation = dataJson.rotation ? dataJson.rotation : modelData.rotation;
    model.scale = dataJson.scale ? dataJson.scale : modelData.scale;
    return model;
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

export {Model, dragModelInScene, mergeModelData, getModelDataByName}
