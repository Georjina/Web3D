import {dragModelInScene} from "./Model.js";
import {getSceneDateByName, SceneClass} from "./SceneClass.js";
import {manager} from "./Manager.js";

function loadScene() {

    let repertory_content = document.getElementById("repertory-content");
    let project_scene = document.getElementsByClassName("repertory-project-scene");
    let common_scene = document.getElementsByClassName("repertory-common-scene");

    //所有模型分类
    let jianzhuArr = [
        {
            id: "haocangku03",
            src: "Model/jianzhu/haocangku03.png",
            name: "仓库3"
        },
        {
            id: "fantang01",
            src: "Model/jianzhu/fantang01.png",
            name: "饭堂1"
        },
        {
            id: "haobangonglou02",
            src: "Model/jianzhu/haobangonglou02.png",
            name: "办公楼2"
        },
        {
            id: "liangting01",
            src: "Model/jianzhu/liangting01.png",
            name: "凉亭1"
        },
        {
            id: "gongjufang02",
            src: "Model/jianzhu/gongjufang02.png",
            name: "工具房2"
        },
        {
            id: "xiaofangshuibengfang01",
            src: "Model/jianzhu/xiaofangshuibengfang01.png",
            name: "消防水泵1"
        },
        {
            id: "haocangku01",
            src: "Model/jianzhu/haocangku01.png",
            name: "仓库1"
        },
        {
            id: "haobangonglou01",
            src: "Model/jianzhu/haobangonglou01.png",
            name: "办公楼1"
        },
        {
            id: "haocangku0809",
            src: "Model/jianzhu/haocangku0809.png",
            name: "仓库8和9"
        },
        {
            id: "cailanjifang01",
            src: "Model/jianzhu/cailanjifang01.png",
            name: "彩兰机房1"
        },
        {
            id: "gongjufang01",
            src: "Model/jianzhu/gongjufang01.png",
            name: "工具房1"
        },
        {
            id: "haocangku0506",
            src: "Model/jianzhu/haocangku0506.png",
            name: "仓库5和6"
        }, {
            id: "baoanting01",
            src: "Model/jianzhu/baoanting01.png",
            name: "保安亭1"
        },
        {
            id: "xiaofangshuichi01",
            src: "Model/jianzhu/xiaofangshuichi01.png",
            name: "消防水池1"
        }
    ];
    let cangku01Arr = [
        {
            id: "huojia0001",
            src: "Model/cangku01/huojia0001.png",
            name: "货架1"
        }, {
            id: "huojia0002",
            src: "Model/cangku01/huojia0002.png",
            name: "货架2"
        }, {
            id: "huowu0001",
            src: "Model/cangku01/huowu0001.png",
            name: "货物1"
        }, {
            id: "AGV0001",
            src: "Model/cangku01/AGV0001.png",
            name: "AGV1"
        }
    ];
    let cangku03Arr = [
        {
            id: "jingjuhuojia0001",
            src: "Model/cangku03/jingjuhuojia0001.png",
            name: "京剧货架"
        }, {
            id: "jiqirenfangzi0001",
            src: "Model/cangku03/jiqirenfangzi0001.png",
            name: "机器人房子"
        }, {
            id: "peidiangui0001",
            src: "Model/cangku03/peidiangui0001.png",
            name: "配电柜"
        }
    ];
    let bangonglou0102Arr = [
        {
            id: "bingxiang0001",
            src: "Model/bangonglou0102/bingxiang0001.png",
            name: "冰箱1"
        }, {
            id: "dengzi0001",
            src: "Model/bangonglou0102/dengzi0001.png",
            name: "凳子1"
        }, {
            id: "dengzi0002",
            src: "Model/bangonglou0102/dengzi0002.png",
            name: "凳子2"
        }, {
            id: "guizi0001",
            src: "Model/bangonglou0102/guizi0001.png",
            name: "柜子1"
        }, {
            id: "guizi0002",
            src: "Model/bangonglou0102/guizi0002.png",
            name: "柜子2"
        }, {
            id: "guizi0003",
            src: "Model/bangonglou0102/guizi0003.png",
            name: "柜子3"
        }, {
            id: "guizi0004",
            src: "Model/bangonglou0102/guizi0004.png",
            name: "柜子4"
        }, {
            id: "guizi0005",
            src: "Model/bangonglou0102/guizi0005.png",
            name: "柜子5"
        }, {
            id: "guizi0006",
            src: "Model/bangonglou0102/guizi0006.png",
            name: "柜子6"
        }, {
            id: "guizi0007",
            src: "Model/bangonglou0102/guizi0007.png",
            name: "柜子7"
        }, {
            id: "guizi0008",
            src: "Model/bangonglou0102/guizi0008.png",
            name: "柜子8"
        }, {
            id: "guizi0009",
            src: "Model/bangonglou0102/guizi0009.png",
            name: "柜子9"
        }, {
            id: "jianpanshubiao0001",
            src: "Model/bangonglou0102/jianpanshubiao0001.png",
            name: "键盘鼠标1"
        }, {
            id: "jiaohuanjixiang0001",
            src: "Model/bangonglou0102/jiaohuanjixiang0001.png",
            name: "交换机箱1"
        }, {
            id: "kongtiao0001",
            src: "Model/bangonglou0102/kongtiao0001.png",
            name: "空调1"
        }, {
            id: "shafa0001",
            src: "Model/bangonglou0102/shafa0001.png",
            name: "沙发1"
        }, {
            id: "shafa0002",
            src: "Model/bangonglou0102/shafa0002.png",
            name: "沙发2"
        }, {
            id: "shafa0003",
            src: "Model/bangonglou0102/shafa0003.png",
            name: "沙发3"
        }, {
            id: "shafa0004",
            src: "Model/bangonglou0102/shafa0004.png",
            name: "沙发4"
        }, {
            id: "shujia0001",
            src: "Model/bangonglou0102/shujia0001.png",
            name: "书架1"
        }, {
            id: "shujia0002",
            src: "Model/bangonglou0102/shujia0002.png",
            name: "书架2"
        }, {
            id: "shujia0003",
            src: "Model/bangonglou0102/shujia0003.png",
            name: "书架3"
        }, {
            id: "xianshiping0001",
            src: "Model/bangonglou0102/xianshiping0001.png",
            name: "显示屏1"
        }, {
            id: "xianshiping0002",
            src: "Model/bangonglou0102/xianshiping0002.png",
            name: "显示屏2"
        }, {
            id: "xianshiping0003",
            src: "Model/bangonglou0102/xianshiping0003.png",
            name: "显示屏3"
        }, {
            id: "yanjiangtai0001",
            src: "Model/bangonglou0102/yanjiangtai0001.png",
            name: "演讲台1"
        }, {
            id: "yaoshigui0001",
            src: "Model/bangonglou0102/yaoshigui0001.png",
            name: "钥匙柜1"
        }, {
            id: "yaoshiguimimasuo0001",
            src: "Model/bangonglou0102/yaoshiguimimasuo0001.png",
            name: "钥匙柜密码锁1"
        }, {
            id: "zhuozi0001",
            src: "Model/bangonglou0102/zhuozi0001.png",
            name: "桌子1"
        }, {
            id: "zhuozi0002",
            src: "Model/bangonglou0102/zhuozi0002.png",
            name: "桌子2"
        }, {
            id: "zhuozi0003",
            src: "Model/bangonglou0102/zhuozi0003.png",
            name: "桌子3"
        }, {
            id: "zhuozi0004",
            src: "Model/bangonglou0102/zhuozi0004.png",
            name: "桌子4"
        }, {
            id: "zhuozi0005",
            src: "Model/bangonglou0102/zhuozi0005.png",
            name: "桌子5"
        }, {
            id: "zhuozi0006",
            src: "Model/bangonglou0102/zhuozi0006.png",
            name: "桌子6"
        }, {
            id: "zhuozi0007",
            src: "Model/bangonglou0102/zhuozi0007.png",
            name: "桌子7"
        },
    ];
    let caifengjiArr = [{
        id: 'cailanjishebei',
        src: 'Model/caifengji/cailanjishebei.png',
        name: '彩兰机设备'
    }];
    let dianlanhuowuArr = [
        {
            id: 'dianlan0001',
            src: 'Model/dianlanhuowu/dianlan0001.png',
            name: '电缆1'
        }, {
            id: 'dianlan0002',
            src: 'Model/dianlanhuowu/dianlan0002.png',
            name: '电缆2'
        }, {
            id: 'dianlan0003',
            src: 'Model/dianlanhuowu/dianlan0003.png',
            name: '电缆3'
        }
    ];
    let longmendiaoArr = [
        {
            id: 'longmendiao0001',
            src: 'Model/longmendiao/longmendiao0001.png',
            name: '龙门吊1'
        }
    ];
    let shexiangtouArr = [
        {
            id: 'shexiangtou0001',
            src: 'Model/shexiangtou/shexiangtou0001.png',
            name: '摄像头1'
        }, {
            id: 'shexiangtou0002',
            src: 'Model/shexiangtou/shexiangtou0002.png',
            name: '摄像头2'
        }, {
            id: 'shexiangtou0003',
            src: 'Model/shexiangtou/shexiangtou0003.png',
            name: '摄像头3'
        }
    ];
    //一起绑定点击事件
    let allCommonCategory = [
        {
            id: "jianzhu",
            arr: jianzhuArr
        }, {
            id: "cangku01",
            arr: cangku01Arr
        }, {
            id: "cangku03",
            arr: cangku03Arr
        }, {
            id: "bangonglou0102",
            arr: bangonglou0102Arr
        },  {
            id: 'caifengji',
            arr: caifengjiArr
        }, {
            id: 'dianlanhuowu',
            arr: dianlanhuowuArr
        }, {
            id: 'longmendiao',
            arr: longmendiaoArr
        }, {
            id: 'shexiangtou',
            arr: shexiangtouArr
        }
    ];
    for (let elem of allCommonCategory) {
        let cate = document.getElementById(elem.id);
        cate.onclick = () => addElem(elem.arr, "common");
    }

    //点击项目分类下的场景1，加载地基
    let scene1 = document.getElementById("scene1");
    scene1.onclick = function () {
        let data = getSceneDateByName("dimian");
        manager.sceneClass = new SceneClass(data);
    };

    //点击项目分类
    let project = document.getElementById("project");
    project.onclick = function () {
        hideRow();
        //隐藏的场景再显示
        for (let elem of project_scene) {
            elem.style.display = "flex";
        }
        for (let elem of common_scene) {
            elem.style.display = "none";
        }
    };
    //点击通用分类
    let common = document.getElementById("common");
    common.onclick = function () {
        hideRow();
        //隐藏的场景再显示
        for (let elem of project_scene) {
            elem.style.display = "none";
        }
        for (let elem of common_scene) {
            elem.style.display = "flex";
        }
    };

    //生成每个类别的div
    function addElem(arr, type) {
        hideScene();
        //显示场景对应模型
        let items = [];
        let arrLength = arr.length;
        for (let i = 0; i < arrLength; i++) {
            let img = document.createElement("img");
            img.src = arr[i].src;
            let p = document.createElement("p");
            p.innerText = arr[i].name;

            let item = document.createElement("div");
            item.className = "repertory-" + type + "-item";
            item.id = arr[i].id;
            item.appendChild(img);
            item.appendChild(p);

            item.addEventListener("click", () => dragModelInScene(item.id));
            items.push(item);
        }
        //一行2个item
        for (let j = 0; j < items.length; j++) {
            let row = document.createElement("div");
            row.className = "repertory-" + type + "-row";
            row.appendChild(items[j]);
            if (j + 1 < items.length) row.appendChild(items[++j]);
            repertory_content.appendChild(row);
        }
    }

    function hideScene() {
        //隐藏场景元素
        for (let elem of project_scene) {
            elem.style.display = "none";
        }
        for (let elem of common_scene) {
            elem.style.display = "none";
        }
    }

    function hideRow() {
        let project_row = document.getElementsByClassName("repertory-project-row");
        if (project_row) {
            let len = project_row.length;
            while (len--) {
                repertory_content.removeChild(project_row[0]);
            }

        }
        let common_row = document.getElementsByClassName("repertory-common-row");
        if (common_row) {
            let len = common_row.length;
            while (len--) {
                repertory_content.removeChild(common_row[0]);
            }
        }
    }
}

export {loadScene}
