import {
  BufferAttribute,
  BufferGeometry, CircleGeometry,
  Color,
  DoubleSide, Float32BufferAttribute,
  Line,
  LineBasicMaterial, Mesh, MeshBasicMaterial,
  Vector3
} from "./lib/three.module.js";
import {manager} from "./Manager.js";

class PointObj {
  constructor(p, color) {
    this.position = p;
    this.mesh = this.getPointMesh(p, color);
  }

  getPointMesh(position, color) {
    color = color ? color : new Color("rgb(217,88,88)");

    const geometry = new CircleGeometry(2, 32);
    const material = new MeshBasicMaterial({color: color});
    const circle = new Mesh(geometry, material);
    circle.position.copy(position);
    circle.rotation.setFromVector3(new Vector3(-0.5 * Math.PI, 0, 0));

    return circle;
  }

  draw() {
    if (manager.sceneClass.scene.children.indexOf(this.mesh) === -1) {
      manager.sceneClass.scene.add(this.mesh);
    }
  }

  delete() {
    if (manager.sceneClass.scene.children.indexOf(this.mesh) > -1) {
      manager.sceneClass.scene.remove(this.mesh);
    }
  }
}

class LineObj {
  constructor(start, end, color) {
    this.start = start;
    this.end = end;
    this.mesh = this.getLineMesh(start, end, color);
  }

  getLineMesh(start, end, color) {
    color = color?color:new Color("rgb(0,142,214)");

    const geometry = new BufferGeometry();
    const vertices = new Float32Array([].concat(start.toArray(), end.toArray()));
    geometry.setAttribute('position', new BufferAttribute(vertices, 3));
    const material = new LineBasicMaterial({color: color, side: DoubleSide,transparent: true});
    const line = new Line(geometry, material);

    return line;
  }

  draw() {
    if (manager.sceneClass.scene.children.indexOf(this.mesh) === -1) {
      manager.sceneClass.scene.add(this.mesh);
    }
  }

  delete() {
    if (manager.sceneClass.scene.children.indexOf(this.mesh) > -1) {
      manager.sceneClass.scene.remove(this.mesh);
    }
  }
}

class PlaneObj {
  constructor(...point) {
    this.position = [...point];
    this.mesh = this.getPlaneMesh(this.position);
  }

  getPlaneMesh(pArray,color) {
    color = color?color:new Color(0xffff00);
    let indices = [];
    let vertices = [];

    pArray.forEach((v)=>{
      vertices.push(v.x,v.y,v.z);
    });
    for(let i=0;i<pArray.length-2;i++){
      indices.push(i,i+1,pArray.length-1);
    }

    let geometry = new BufferGeometry();
    geometry.setIndex(indices);
    geometry.setAttribute('position', new Float32BufferAttribute(vertices, 3));
    let material = new MeshBasicMaterial({side: DoubleSide, color:color,transparent: true});
    material.opacity = 0.5;
    let plane = new Mesh(geometry, material);

    return plane;
  }
  draw() {
    if (manager.sceneClass.scene.children.indexOf(this.mesh) === -1) {
      manager.sceneClass.scene.add(this.mesh);
    }
  }
  delete(){
    if (manager.sceneClass.scene.children.indexOf(this.mesh) > -1) {
      manager.sceneClass.scene.remove(this.mesh);
    }
  }
}

class Rectangle {
  constructor(a, b, c, d) {
    this.position = {};
    this.pointObj = {};
    this.lineObj = {};
    this.planeObj = null;

    this.init(a, b, c, d);
  }

  init(a, b, c, d) {
    if (!b || !d) {
      this.position = this.getAllPosition(a, c);
    } else {
      this.position = {a, b, c, d};
    }

    let p = this.position;
    for (let key in p) {
      this.pointObj[key] = new PointObj(p[key]);
    }

    this.lineObj["ab"] = new LineObj(p["a"], p["b"]);
    this.lineObj["bc"] = new LineObj(p["b"], p["c"]);
    this.lineObj["cd"] = new LineObj(p["c"], p["d"]);
    this.lineObj["da"] = new LineObj(p["d"], p["a"]);

    this.planeObj = new PlaneObj(p["a"],p["b"],p["c"],p["d"]);
  }

  getAllPosition(a, c) {
    let p1 = new Vector3(a.x, 0.1, c.z);
    let p2 = new Vector3(c.x, 0.1, a.z);

    let b;
    let d;

    /*a-------b
      |       |
      |       |
      d-------c
     */
    b = p1;
    d = p2;
    if (this.getClock(a, c, p1) < 0) {
      //Vac到Vap1逆时针,p1为点B
      b = p1;
      d = p2;
    } else {
      //Vac到Vap1顺时针,p1为点D
      d = p1;
      b = p2;
    }

    return {a, b, c, d};
  }

  //p位于p1到p2向量的逆时针方向一侧时，返回值为负数
  //p位于p1到p2向量的顺时针方向一侧时，返回值为正数
  getClock(p1, p2, p) {
    return (p2.x - p1.x) * (p.z - p1.z) - (p.x - p1.x) * (p2.z - p1.z);
  }

  draw(isPlane) {
    if(!isPlane){
      for (const key in this.pointObj) {
        this.pointObj[key].draw();
      }
      for (const key in this.lineObj) {
        this.lineObj[key].draw();
      }
    }else{
      this.planeObj.draw();
    }
  }

  delete(isPlane) {
    if(!isPlane){
      for (const key in this.pointObj) {
        this.pointObj[key].delete();
      }
      for (const key in this.lineObj) {
        this.lineObj[key].delete();
      }
    }else{
      this.planeObj.delete();
    }
  }

  isInRect(p) {
    let pos = this.position;
    return this.getClock(pos["a"], pos["b"], p) * this.getClock(pos["c"], pos["d"], p) >= 0
        && this.getClock(pos["b"], pos["c"], p) * this.getClock(pos["d"], pos["a"], p) >= 0;
  }
}

export {PointObj, LineObj, Rectangle,PlaneObj}