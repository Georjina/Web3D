import {redo, undo, loadJson, uploadJson, clearAll, hideCeil} from "./SceneCon.js";
import {indoorControl, manager} from "./Manager.js";
import {selectObject} from "./Operate.js";

function bindListener() {
    bindKey();
    // bindRoam();
    bindButton();
}

function bindButton() {
    document.getElementById('hideCeils').addEventListener('click',()=>hideCeil('ding'));
    document.getElementById('hideErlou').addEventListener('click',()=>hideCeil('erlou'));

    //绑定选中事件
    document.getElementById("scene").addEventListener('pointermove', selectObject);

    document.getElementById("undo").addEventListener('click', undo);
    document.getElementById("redo").addEventListener('click', redo);
    document.getElementById("clearAll").addEventListener('click', clearAll);

    //document.getElementById('save_scene').addEventListener('click', toggleSave);
    document.getElementById('save_scene').addEventListener('click', uploadJson);
    // document.getElementById('load_scene').addEventListener('click', showFileDialog);
    document.getElementById('load_scene').addEventListener('click', loadJson);
    document.getElementById("returnScene").addEventListener("click", () => indoorControl.backScene());

    /*储存相关 start*/
    document.getElementsByClassName('js-save-overlay')[0].addEventListener('click', toggleSave);
    document.getElementsByClassName('js-save-close')[0].addEventListener('click', toggleSave);
    document.getElementsByClassName('js-save-close')[1].addEventListener('click', toggleSave);
    //document.getElementsByClassName('js-save-upload')[0].onclick = uploadJson;

    //切换弹窗的显示状态
    function toggleSave() {
        toggleClass(document.getElementsByClassName('js-dialog-save')[0], "show");
    }

    /*储存相关 end*/
    /*读取文件相关 start*/
    document.getElementsByClassName('js-file-overlay')[0].addEventListener('click', toggleFile);
    document.getElementsByClassName('js-file-close')[0].addEventListener('click', toggleFile);

    function showFileDialog() {
        //显示Loading
        let loadingE = document.getElementsByClassName('js-loading')[0];
        addClass(loadingE, "show");
        let ajax = new XMLHttpRequest();
        ajax.open("get", "http://remote.mofang723.cn:2022/3d-module-platform/file/list", true);
        ajax.send();
        ajax.onload = function () {
            // console.log(ajax.responseText);
        };
        ajax.onreadystatechange = function () {
            let res = JSON.parse(ajax.responseText);
            removeClass(loadingE, "show");
            if (res.code === 200) {
                addClass(document.getElementsByClassName('js-dialog-file')[0], "show");
                //列表动态渲染
                let htmlStr = "";
                let pathName = "http://remote.mofang723.cn:81/3d-module-platform"
                res.data.map((item) => {
                    item._path = pathName + item.path;
                    htmlStr += `<li class="file-li js-file-read" data-url="${item._path}">
                    <div class="li-lt">
                        <img src="./images/icon/file.png" alt="" class="icon">
                        <span class="name">${item.fileName}</span>
                    </div>
                    <div class="li-rt">${item.path}</div>
                </li>`
                })
                document.getElementsByClassName('js-file-conter')[0].innerHTML = htmlStr;
                bindFileList();
            }
        }
    }

    function toggleFile() {
        toggleClass(document.getElementsByClassName('js-dialog-file')[0], "show");
    }

    function bindFileList() {
        let fileRead = document.getElementsByClassName('js-file-read');
        for (let i = 0; i < fileRead.length; i++) {
            fileRead[i].addEventListener('click', function (e) {
                console.log(e.currentTarget.getAttribute('data-url'));
                loadJson(e.currentTarget.getAttribute('data-url'))
            })
        }
    }

    /*读取文件相关 end*/
}

function bindKey() {
    window.addEventListener('keydown', event => {
        manager.keyStates[event.code] = true;
    });
    window.addEventListener('keyup', event => {
        manager.keyStates[event.code] = false;
    });
}

/*function bindRoam() {

    let cameraInScene;

    document.getElementById("roam").addEventListener("click", function () {
        roamControl.worldOctree.fromGraphNode(manager.sceneClass.scene);
        manager.mode = "roam";
        cameraInScene = manager.sceneClass.camera;
        manager.sceneClass.camera = roamControl.camera;
        // roamControl.roamCamera = manager.sceneClass.camera;
        manager.sceneClass.camera.rotation.order = 'YXZ';
        manager.sceneClass.orbitControl.enabled = false;
        manager.sceneClass.transformControls.detach();

        document.addEventListener('mousedown', lockPointer);
        document.addEventListener('mousemove', cameraRotate);
    });

    document.getElementById("testRoam").addEventListener('click', function () {
        alert("abc");
        manager.mode = "standard";
        manager.sceneClass.camera = cameraInScene;
        manager.sceneClass.orbitControl.enabled = true;
        manager.sceneClass.loadScene();

        document.removeEventListener('mousedown', lockPointer);
        document.removeEventListener('mousemove', cameraRotate);
    }, false);
}

function lockPointer() {
    document.body.requestPointerLock();
}

function cameraRotate(event) {
    if (document.pointerLockElement === document.body) {
        manager.sceneClass.camera.rotation.y -= event.movementX / 1000;
        manager.sceneClass.camera.rotation.x -= event.movementY / 1000;
    }
}*/

export {bindListener}
