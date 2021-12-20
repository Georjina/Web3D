import {indoorControl, manager} from "./Manager.js";
import {saveOperation} from "./SceneCon.js";
import {Group, Vector2} from "three";
import {bindArgs} from "./BasicArgs.js";

//保存group
let selectedGroup = null;
let rightArgs = document.getElementsByClassName("right-menu-bottom-args");

/**
 * 检测射线和3d对象数组的相交对象
 * @param {MouseEvent}mouseEvent 鼠标事件
 * @param {Object3D[]}objects 用于检测交点的groups
 * @return {intersect|null} 相交对象|空
 */
function getIntersects(mouseEvent, objects) {
    if (!objects) return null;
    const mouse = new Vector2();

    mouse.x = ((mouseEvent.clientX - manager.container.offsetLeft) / manager.container.offsetWidth) * 2 - 1;
    mouse.y = -((mouseEvent.clientY - manager.container.offsetTop) / manager.container.offsetHeight) * 2 + 1;

    manager.raycaster.setFromCamera(mouse, manager.sceneClass.camera);

    let intersects = manager.raycaster.intersectObjects(objects, true);
    //返回可视相交对象
    for (let intersect of intersects) {
        if (intersect.object.visible) return intersect;
    }

    return null;
}

//获得主场景或内场景的groups
function getGroup() {
    if (indoorControl.isMainScene()) {
        return manager.sceneClass.getGroups();
    } else {
        return indoorControl.fatherGroup.children.filter(child =>
            (child instanceof Group)&& (child.model.isOuterModel === false)
        );
    }
}

//指针聚焦物体时，显示box
function selectObject(event) {
    //在主场景只能选择主场景模型，在模型内部只能选择内部模型
    let intersect = getIntersects(event, getGroup());
    if (intersect) {
        //!!如果内部模型放外面，selectedGroup可能为内部模型的group
        selectedGroup = intersect.object.parent ? intersect.object.parent : intersect.object;
        //box套在group外
        manager.sceneClass.boxhelper.setFromObject(selectedGroup);
        manager.sceneClass.boxhelper.visible = true;
    } else {
        selectedGroup = null;
        manager.sceneClass.boxhelper.visible = false;
    }
}

//鼠标点击模型
function clickObject(event) {
    switch (event.buttons) {
        case 1://对物体单击左键或者拖动轴，显示轴；单击非物体，解除轴
            if (manager.sceneClass.transformControls.dragging) return;
            if (selectedGroup) {
                rightArgs[0].style.display = "block";

                manager.sceneClass.transformControls.attach(selectedGroup);
                bindArgs(selectedGroup);
            } else {
                rightArgs[0].style.display = "none";
                if (!manager.sceneClass.transformControls.dragging) {
                    manager.sceneClass.transformControls.detach();
                }
            }
            break;
        case 2://对物体单击右键，删除物体
            if (selectedGroup) {
                rightArgs[0].style.display = "none";
                saveOperation('delete', selectedGroup, false);
                deleteGroup(selectedGroup);
                break;
            }
    }
}

//删除模型及其子模型
function deleteGroup(group) {
    let sceneClass = manager.sceneClass;

    sceneClass.boxhelper.visible = false;
    sceneClass.transformControls.detach();

    //主场景中移除group和model，模型内部移除group
    if(indoorControl.isMainScene()){
        let modelIndex = getGroup().findIndex(gro => gro === group);
        if(modelIndex>-1){
            sceneClass.models.splice(modelIndex, 1);
        }
        sceneClass.scene.remove(group);
    }
    else {
        indoorControl.fatherGroup.remove(group);
    }
}
//双击模型进入内部
function enterObject() {
    if (selectedGroup) {
        //隐藏trans和box
        manager.sceneClass.transformControls.detach();
        manager.sceneClass.boxhelper.visible = false;
        //切换相机
        indoorControl.cameraChange(selectedGroup.model);
    }
}

function dblclickObject() {
    rightArgs[0].style.display = "none";
    if (selectedGroup) {
        //隐藏trans
        manager.sceneClass.transformControls.detach();

        //获取点击建筑的模型
        let model = selectedGroup.model;

        indoorControl.cameraChange(model);

        document.removeEventListener('dblclick', dblclickObject);
    }
}

function getGroupArray(modelArray, getType) {
    let group = [];
    for (let m of modelArray) {
        if (getType) {
            if (m.type === getType) {
                group.push(m.group);
            }
        } else {
            group.push(m.group);
        }
    }
    return group;
}

function getMeshArray(GroupArray) {
    let mesh = [];
    for (let group of GroupArray) {
        for (let c of group.children) {
            if (c.type === "Mesh") {
                mesh.push(c)
            }
        }
    }
    return mesh;
}

export {getIntersects, selectObject, clickObject, deleteGroup, enterObject,getGroup, dblclickObject, getGroupArray};


