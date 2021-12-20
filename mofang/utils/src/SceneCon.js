import {FileLoader, Group, MathUtils, Mesh, Vector3} from "./lib/three.module.js"
import {indoorControl, manager} from "./Manager.js";
import {deleteGroup} from "./Operate.js";
import {getSceneDateByName, SceneClass} from "./SceneClass.js";
import {bindArgs} from "./BasicArgs.js";
import {getModelDataByName, Model} from "./Model.js";

//本地测试专用
//保存场景文件
function uploadJson0() {
    let models = manager.sceneClass.getGroups().map(
        outerGroup => {
            let innerGroups = outerGroup.children.filter(child =>
                (child instanceof Group) && (child.model.isOuterModel === false));
            //外部模型对应的内部模型
            let innerModels = innerGroups.map(gro => {
                return {
                    name: gro.model.name,
                    position: gro.position,
                    rotation: gro.rotation.toVector3(),
                    scale: gro.scale
                };
            });
            return {
                name: outerGroup.model.name,
                position: outerGroup.position,
                rotation: outerGroup.rotation.toVector3(),
                scale: outerGroup.scale,
                innerModels: innerModels
            };
        });
    let sceneDate = {
        //场景名称
        name: manager.sceneClass.name,
        models: models
    };
    let content = JSON.stringify(sceneDate);

    let blob = new Blob([content], {type: "text/plain;charset=utf-8"});
    //必须导入FileSaver.js
    saveAs(blob, "save.json");
}

//加载场景文件
function loadJson0() {
    let loader = new FileLoader();
    loader.load("save.json", function (data) {
        let dataJson = JSON.parse(data);
        //加载场景
        let sceneData = getSceneDateByName(dataJson.name);
        manager.sceneClass = new SceneClass(sceneData);
        //加载模型
        loadModels(dataJson.models);
    });
}

//保存场景截图
function screenShot0() {
    if (!indoorControl.isMainScene()) {
        indoorControl.backScene();
    }

    let cameraProperty = getSceneDateByName("init").cameraProperty;
    manager.sceneClass.camera.position.copy(cameraProperty.position);
    manager.sceneClass.camera.rotation.setFromVector3(cameraProperty.rotation);

    let img = new Image();
    manager.render();
    img.src = manager.renderer.domElement.toDataURL("image/png");//转化为base64
    let url = img.src;                            // 获取图片地址
    let a = document.createElement('a');          // 创建一个a节点插入的documen t
    let event = new MouseEvent('click');           // 模拟鼠标click点击事件
    a.download = MathUtils.generateUUID();                  // 设置a节点的download属性值
    a.href = url;                                 // 将图片的src赋值给a节点的href
    a.dispatchEvent(event);                        // 触发鼠标点击事件
}


//根据模型数据创建model
function createModel(data) {
    let modelJson = getModelDataByName(data.name)
    let modelData = {
        name: modelJson.name,
        url: modelJson.url,
        position: data.position,
        rotation: data.rotation,
        scale: data.scale,
        relativePosition: modelJson.relativePosition,
        relativeRotation: modelJson.relativeRotation,
    }
    return new Model(modelData);
}

//loadJson加载所有模型数据
function loadModels(modelsData) {
    modelsData.forEach(outModelData => {
        let outerModel = createModel(outModelData);
        outerModel.loadFBX(true)
            .then(() => {
                if (outModelData.innerModels.length > 0) {
                    outModelData.innerModels.forEach(inModelData => {
                        let inModel = createModel(inModelData);
                        inModel.loadFBX(false)
                            .then(() => {
                                inModel.isOuterModel = false;
                                outerModel.group.attach(inModel.group);
                                inModel.group.position.copy(inModelData.position);
                                inModel.group.rotation.setFromVector3(inModelData.rotation);
                                inModel.group.scale.copy(inModelData.scale);
                            })
                    })
                }
            });
    });
}

//保存场景json至服务器-mofang
function uploadJson() {
    //显示Loading
    let loadingE = document.getElementsByClassName('js-loading')[0];
    addClass(loadingE, "show");
    //获取文件名
    let name = document.getElementsByClassName('dialog-upload-input')[0].value;
    //模型文件相关
    let models = manager.sceneClass.getGroups().map(
        outerGroup => {
            let innerGroups = outerGroup.children.filter(child =>
                (child instanceof Group) && (child.model.isOuterModel === false));
            //外部模型对应的内部模型
            let innerModels = innerGroups.map(gro => {
                return {
                    name: gro.model.name,
                    position: gro.position,
                    rotation: gro.rotation.toVector3(),
                    scale: gro.scale
                };
            });
            return {
                name: outerGroup.model.name,
                position: outerGroup.position,
                rotation: outerGroup.rotation.toVector3(),
                scale: outerGroup.scale,
                innerModels: innerModels
            };
        });
    let sceneDate = {
        name: manager.sceneClass.name,
        models: models
    };
    // console.log(sceneDate);
    let content = JSON.stringify(sceneDate);
    let file;
    try {
        file = new File([content], `${name}.json`, {type: "text/plain;charset=utf-8"})
    } catch (e) {
        file = new Blob([content], {type: "text/plain;charset=utf-8"})
    }
    //原生ajax请求
    let ajax = new XMLHttpRequest();
    let fd = new FormData();
    fd.append("model", file);
    fd.append("fileName", name);
    fd.append("img", screenShot(),`${name}.png`);
    ajax.open("post", "http://remote.mofang723.cn:2022/3d-module-platform/file/upload", true);
    ajax.onload = function () {
        console.log(ajax.responseText);
    };
    ajax.send(fd);
    ajax.onreadystatechange = function () {
        let res = JSON.parse(ajax.responseText);
        removeClass(loadingE, "show");
        if (res.code === 200) {
            removeClass(document.getElementsByClassName('js-dialog-save')[0], "show");
            alert('上传成功')
        } else {
            console.log(res.message || "上传失败")
        }
    }
}

//加载场景json
function loadJson(name) {
    let loader = new FileLoader();
    loader.load(name, function (data) {
        let dataJson = JSON.parse(data);
        let sceneData = getSceneDateByName(dataJson.name);
        manager.sceneClass = new SceneClass(sceneData);
        loadModels(dataJson.models);
    });
}

//保存场景截图
function screenShot() {
    if (!indoorControl.isMainScene()) {
        indoorControl.backScene();
    }

    let cameraProperty = getSceneDateByName("init").cameraProperty;
    manager.sceneClass.camera.position.copy(cameraProperty.position);
    manager.sceneClass.camera.rotation.setFromVector3(cameraProperty.rotation);

    let img = new Image();
    manager.render();
    img.src = manager.renderer.domElement.toDataURL("image/png");//转化为base64
    // base64转成blob
    let dataurl = img.src;
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    var obj = new Blob([u8arr], {type:mime});
    return obj
}

let operationData = [];//记录所有操作数据
//记录当前是第几步操作，changeData里则存了前n-1步操作，从0开始为第一步
let operationSteps = 0;
let fromPosition = new Vector3(), fromRotation = new Vector3(), fromScale = new Vector3();

/**
 * 保存能够撤销，恢复的操作
 * @param {string} type 操作类型
 * @param {Group} group 操作对象group
 * @param {boolean} isPrevious 是否需要保存前一状态
 */
function saveOperation(type, group, isPrevious = false) {
    if (isPrevious) {
        switch (type) {
            case 'translate':
                fromPosition = group.position.clone();
                break;
            case 'rotate':
                fromRotation = group.rotation.clone();
                break;
            case 'scale':
                fromScale = group.scale.clone();
                break;
        }
    } else {
        //如果撤销后移动则重新记录步骤
        if (operationSteps !== operationData.length) operationData.splice(operationSteps)
        //当非拖拽变化的时候
        switch (type) {
            case 'translate':
                //如果初始和结束一样，那么返回
                if (fromPosition.equals(group.position.clone())) return;
                operationData[operationSteps] = {
                    type: 'translate',
                    group: group,
                    fromPosition: fromPosition,
                    toPosition: group.position.clone()
                }
                break;
            case 'rotate':
                if (fromRotation.equals(group.rotation.clone())) return;
                operationData[operationSteps] = {
                    type: 'rotate',
                    group: group,
                    fromRotation: fromRotation,
                    toRotation: group.rotation.clone()
                };
                break;
            case 'scale':
                if (fromScale.equals(group.scale.clone())) return;
                operationData[operationSteps] = {
                    type: 'scale',
                    group: group,
                    fromScale: fromScale,
                    toScale: group.scale.clone()
                };
                break;
            case 'add':
                operationData[operationSteps] = {
                    type: 'add',
                    sceneClass: manager.sceneClass,
                    group: group
                };
                break;
            case 'delete':
                operationData[operationSteps] = {
                    type: 'delete',
                    sceneClass: manager.sceneClass,
                    group: group
                };
                break;
            case 'enter':
                operationData[operationSteps] = {
                    type: 'enter',
                    group: group
                };
                break;
            case 'out':
                operationData[operationSteps] = {
                    type: 'out',
                    group: group
                };
                break;
        }
        operationSteps++;
        //button显示控制
        buttonDisabled();
    }
}

//撤销
function undo() {
    operationSteps--;
    buttonDisabled();
    const ope = operationData[operationSteps];
    switch (ope.type) {
        case "translate":
            ope.group.position.copy(ope.fromPosition);
            bindArgs(ope.group);
            break;
        case "rotate":
            ope.group.rotation.copy(ope.fromRotation);
            break;
        case "scale":
            ope.group.scale.copy(ope.fromScale);
            bindArgs(ope.group);
            break;
        case 'add':
            deleteGroup(ope.group);
            break;
        case 'delete':
            if (indoorControl.isMainScene()) {
                ope.sceneClass.models.push(ope.group.model);
                ope.sceneClass.scene.add(ope.group);
            } else {
                indoorControl.addGroup(ope.group);
            }
            break;
        case 'enter':
            indoorControl.backScene();
            break;
        case 'out':
            indoorControl.enterModel(ope.group.model);
            break;
    }
}

//回撤
function redo() {
    const ope = operationData[operationSteps];
    switch (ope.type) {
        case "translate":
            ope.group.position.copy(ope.toPosition);
            bindArgs(ope.group);
            break;
        case "rotate":
            ope.group.rotation.copy(ope.toRotation);
            break;
        case "scale":
            ope.group.scale.copy(ope.toScale);
            bindArgs(ope.group);
            break;
        case 'add':
            if (indoorControl.isMainScene()) {
                ope.sceneClass.models.push(ope.group.model);
                ope.sceneClass.scene.add(ope.group);
            } else {
                indoorControl.addGroup(ope.group);
            }
            break;
        case 'delete':
            deleteGroup(ope.group);
            break;
        case 'enter':
            indoorControl.enterModel(ope.group.model);
            break;
        case 'out':
            indoorControl.backScene();
            break;
    }
    operationSteps++;
    buttonDisabled();
}

//清空场景
function clearAll() {
    indoorControl.backScene();
    //子模型（二级模型）可能不需要加入models,所以只需要移除scene里面的所有一级模型
    let sceneClass = manager.sceneClass;
    sceneClass.transformControls.detach();
    sceneClass.boxhelper.visible = false;
    sceneClass.models.forEach(mod => sceneClass.scene.remove(mod.group));
    sceneClass.models = [];

    operationData = [];
    operationSteps = 0;
    buttonDisabled();
}

function buttonDisabled() {
    document.getElementById("undo").disabled = operationSteps === 0;
    document.getElementById("redo").disabled = operationSteps === operationData.length;
}

/**
 * 点击按钮[隐藏|显示]当前建筑的房顶
 * @param {string}meshName 要隐藏部分的名称
 */
function hideCeil(meshName) {
    let group = manager.sceneClass.transformControls.object;
    if (!group) return
    group.traverse(child => {
        if (child instanceof Mesh) {
            if (child.name === meshName) {
                child.visible = !child.visible;
            }
        }
    })
}


export {loadJson, saveOperation, undo, redo, uploadJson, clearAll, hideCeil, screenShot}