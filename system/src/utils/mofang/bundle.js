/*! For license information please see bundle.js.LICENSE.txt */
(() => {
  "use strict";
  var t = {
    d: (e, n) => {
      for (var i in n) t.o(n, i) && !t.o(e, i) && Object.defineProperty(e, i, {enumerable: !0, get: n[i]})
    }, o: (t, e) => Object.prototype.hasOwnProperty.call(t, e), r: t => {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }
  }, e = {};
  t.r(e), t.d(e, {
    AsyncCompress: () => xh,
    AsyncDecompress: () => zh,
    AsyncDeflate: () => uh,
    AsyncGunzip: () => Mh,
    AsyncGzip: () => xh,
    AsyncInflate: () => fh,
    AsyncUnzipInflate: () => lu,
    AsyncUnzlib: () => Rh,
    AsyncZipDeflate: () => nu,
    AsyncZlib: () => Lh,
    Compress: () => yh,
    DecodeUTF8: () => Vh,
    Decompress: () => Nh,
    Deflate: () => hh,
    EncodeUTF8: () => Wh,
    Gunzip: () => bh,
    Gzip: () => yh,
    Inflate: () => mh,
    Unzip: () => cu,
    UnzipInflate: () => ou,
    UnzipPassThrough: () => au,
    Unzlib: () => Ph,
    Zip: () => iu,
    ZipDeflate: () => eu,
    ZipPassThrough: () => tu,
    Zlib: () => Th,
    compress: () => _h,
    compressSync: () => wh,
    decompress: () => Oh,
    decompressSync: () => Bh,
    deflate: () => dh,
    deflateSync: () => ph,
    gunzip: () => Sh,
    gunzipSync: () => Eh,
    gzip: () => _h,
    gzipSync: () => wh,
    inflate: () => gh,
    inflateSync: () => vh,
    strFromU8: () => Xh,
    strToU8: () => jh,
    unzip: () => hu,
    unzipSync: () => uu,
    unzlib: () => Ih,
    unzlibSync: () => Dh,
    zip: () => ru,
    zipSync: () => su,
    zlib: () => Ah,
    zlibSync: () => Ch
  });
  const n = 100, i = 301, r = 302, s = 303, a = 306, o = 1e3, l = 1001, c = 1002, h = 1003, u = 1006, d = 1008,
      p = 1009, m = 1012, f = 1014, g = 1015, v = 1016, y = 1020, x = 1022, _ = 1023, w = 1026, b = 1027, M = 2300,
      S = 2301, E = 2302, T = 2400, L = 2401, A = 2402, C = 3e3, P = 3001, R = 3007, I = 3002, D = 7680, N = 35044,
      z = 35048, O = "300 es";

  class B {
    addEventListener(t, e) {
      void 0 === this._listeners && (this._listeners = {});
      const n = this._listeners;
      void 0 === n[t] && (n[t] = []), -1 === n[t].indexOf(e) && n[t].push(e)
    }

    hasEventListener(t, e) {
      if (void 0 === this._listeners) return !1;
      const n = this._listeners;
      return void 0 !== n[t] && -1 !== n[t].indexOf(e)
    }

    removeEventListener(t, e) {
      if (void 0 === this._listeners) return;
      const n = this._listeners[t];
      if (void 0 !== n) {
        const t = n.indexOf(e);
        -1 !== t && n.splice(t, 1)
      }
    }

    dispatchEvent(t) {
      if (void 0 === this._listeners) return;
      const e = this._listeners[t.type];
      if (void 0 !== e) {
        t.target = this;
        const n = e.slice(0);
        for (let e = 0, i = n.length; e < i; e++) n[e].call(this, t);
        t.target = null
      }
    }
  }

  const F = [];
  for (let t = 0; t < 256; t++) F[t] = (t < 16 ? "0" : "") + t.toString(16);
  let k = 1234567;
  const U = Math.PI / 180, H = 180 / Math.PI;

  function G() {
    const t = 4294967295 * Math.random() | 0, e = 4294967295 * Math.random() | 0, n = 4294967295 * Math.random() | 0,
        i = 4294967295 * Math.random() | 0;
    return (F[255 & t] + F[t >> 8 & 255] + F[t >> 16 & 255] + F[t >> 24 & 255] + "-" + F[255 & e] + F[e >> 8 & 255] + "-" + F[e >> 16 & 15 | 64] + F[e >> 24 & 255] + "-" + F[63 & n | 128] + F[n >> 8 & 255] + "-" + F[n >> 16 & 255] + F[n >> 24 & 255] + F[255 & i] + F[i >> 8 & 255] + F[i >> 16 & 255] + F[i >> 24 & 255]).toUpperCase()
  }

  function V(t, e, n) {
    return Math.max(e, Math.min(n, t))
  }

  function W(t, e) {
    return (t % e + e) % e
  }

  function j(t, e, n) {
    return (1 - n) * t + n * e
  }

  function X(t) {
    return 0 == (t & t - 1) && 0 !== t
  }

  function Y(t) {
    return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2))
  }

  function q(t) {
    return Math.pow(2, Math.floor(Math.log(t) / Math.LN2))
  }

  var Z = Object.freeze({
    __proto__: null,
    DEG2RAD: U,
    RAD2DEG: H,
    generateUUID: G,
    clamp: V,
    euclideanModulo: W,
    mapLinear: function (t, e, n, i, r) {
      return i + (t - e) * (r - i) / (n - e)
    },
    inverseLerp: function (t, e, n) {
      return t !== e ? (n - t) / (e - t) : 0
    },
    lerp: j,
    damp: function (t, e, n, i) {
      return j(t, e, 1 - Math.exp(-n * i))
    },
    pingpong: function (t, e = 1) {
      return e - Math.abs(W(t, 2 * e) - e)
    },
    smoothstep: function (t, e, n) {
      return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e)) * t * (3 - 2 * t)
    },
    smootherstep: function (t, e, n) {
      return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e)) * t * t * (t * (6 * t - 15) + 10)
    },
    randInt: function (t, e) {
      return t + Math.floor(Math.random() * (e - t + 1))
    },
    randFloat: function (t, e) {
      return t + Math.random() * (e - t)
    },
    randFloatSpread: function (t) {
      return t * (.5 - Math.random())
    },
    seededRandom: function (t) {
      return void 0 !== t && (k = t % 2147483647), k = 16807 * k % 2147483647, (k - 1) / 2147483646
    },
    degToRad: function (t) {
      return t * U
    },
    radToDeg: function (t) {
      return t * H
    },
    isPowerOfTwo: X,
    ceilPowerOfTwo: Y,
    floorPowerOfTwo: q,
    setQuaternionFromProperEuler: function (t, e, n, i, r) {
      const s = Math.cos, a = Math.sin, o = s(n / 2), l = a(n / 2), c = s((e + i) / 2), h = a((e + i) / 2),
          u = s((e - i) / 2), d = a((e - i) / 2), p = s((i - e) / 2), m = a((i - e) / 2);
      switch (r) {
        case"XYX":
          t.set(o * h, l * u, l * d, o * c);
          break;
        case"YZY":
          t.set(l * d, o * h, l * u, o * c);
          break;
        case"ZXZ":
          t.set(l * u, l * d, o * h, o * c);
          break;
        case"XZX":
          t.set(o * h, l * m, l * p, o * c);
          break;
        case"YXY":
          t.set(l * p, o * h, l * m, o * c);
          break;
        case"ZYZ":
          t.set(l * m, l * p, o * h, o * c);
          break;
        default:
          console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r)
      }
    }
  });

  class J {
    constructor(t = 0, e = 0) {
      this.x = t, this.y = e
    }

    get width() {
      return this.x
    }

    set width(t) {
      this.x = t
    }

    get height() {
      return this.y
    }

    set height(t) {
      this.y = t
    }

    set(t, e) {
      return this.x = t, this.y = e, this
    }

    setScalar(t) {
      return this.x = t, this.y = t, this
    }

    setX(t) {
      return this.x = t, this
    }

    setY(t) {
      return this.y = t, this
    }

    setComponent(t, e) {
      switch (t) {
        case 0:
          this.x = e;
          break;
        case 1:
          this.y = e;
          break;
        default:
          throw new Error("index is out of range: " + t)
      }
      return this
    }

    getComponent(t) {
      switch (t) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        default:
          throw new Error("index is out of range: " + t)
      }
    }

    clone() {
      return new this.constructor(this.x, this.y)
    }

    copy(t) {
      return this.x = t.x, this.y = t.y, this
    }

    add(t, e) {
      return void 0 !== e ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this)
    }

    addScalar(t) {
      return this.x += t, this.y += t, this
    }

    addVectors(t, e) {
      return this.x = t.x + e.x, this.y = t.y + e.y, this
    }

    addScaledVector(t, e) {
      return this.x += t.x * e, this.y += t.y * e, this
    }

    sub(t, e) {
      return void 0 !== e ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this)
    }

    subScalar(t) {
      return this.x -= t, this.y -= t, this
    }

    subVectors(t, e) {
      return this.x = t.x - e.x, this.y = t.y - e.y, this
    }

    multiply(t) {
      return this.x *= t.x, this.y *= t.y, this
    }

    multiplyScalar(t) {
      return this.x *= t, this.y *= t, this
    }

    divide(t) {
      return this.x /= t.x, this.y /= t.y, this
    }

    divideScalar(t) {
      return this.multiplyScalar(1 / t)
    }

    applyMatrix3(t) {
      const e = this.x, n = this.y, i = t.elements;
      return this.x = i[0] * e + i[3] * n + i[6], this.y = i[1] * e + i[4] * n + i[7], this
    }

    min(t) {
      return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this
    }

    max(t) {
      return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this
    }

    clamp(t, e) {
      return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this
    }

    clampScalar(t, e) {
      return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this
    }

    clampLength(t, e) {
      const n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
    }

    floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
    }

    ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
    }

    round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this
    }

    roundToZero() {
      return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this
    }

    negate() {
      return this.x = -this.x, this.y = -this.y, this
    }

    dot(t) {
      return this.x * t.x + this.y * t.y
    }

    cross(t) {
      return this.x * t.y - this.y * t.x
    }

    lengthSq() {
      return this.x * this.x + this.y * this.y
    }

    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y)
    }

    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y)
    }

    normalize() {
      return this.divideScalar(this.length() || 1)
    }

    angle() {
      return Math.atan2(-this.y, -this.x) + Math.PI
    }

    distanceTo(t) {
      return Math.sqrt(this.distanceToSquared(t))
    }

    distanceToSquared(t) {
      const e = this.x - t.x, n = this.y - t.y;
      return e * e + n * n
    }

    manhattanDistanceTo(t) {
      return Math.abs(this.x - t.x) + Math.abs(this.y - t.y)
    }

    setLength(t) {
      return this.normalize().multiplyScalar(t)
    }

    lerp(t, e) {
      return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this
    }

    lerpVectors(t, e, n) {
      return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this
    }

    equals(t) {
      return t.x === this.x && t.y === this.y
    }

    fromArray(t, e = 0) {
      return this.x = t[e], this.y = t[e + 1], this
    }

    toArray(t = [], e = 0) {
      return t[e] = this.x, t[e + 1] = this.y, t
    }

    fromBufferAttribute(t, e, n) {
      return void 0 !== n && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this
    }

    rotateAround(t, e) {
      const n = Math.cos(e), i = Math.sin(e), r = this.x - t.x, s = this.y - t.y;
      return this.x = r * n - s * i + t.x, this.y = r * i + s * n + t.y, this
    }

    random() {
      return this.x = Math.random(), this.y = Math.random(), this
    }
  }

  J.prototype.isVector2 = !0;

  class Q {
    constructor() {
      this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
    }

    set(t, e, n, i, r, s, a, o, l) {
      const c = this.elements;
      return c[0] = t, c[1] = i, c[2] = a, c[3] = e, c[4] = r, c[5] = o, c[6] = n, c[7] = s, c[8] = l, this
    }

    identity() {
      return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
    }

    copy(t) {
      const e = this.elements, n = t.elements;
      return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], this
    }

    extractBasis(t, e, n) {
      return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this
    }

    setFromMatrix4(t) {
      const e = t.elements;
      return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this
    }

    multiply(t) {
      return this.multiplyMatrices(this, t)
    }

    premultiply(t) {
      return this.multiplyMatrices(t, this)
    }

    multiplyMatrices(t, e) {
      const n = t.elements, i = e.elements, r = this.elements, s = n[0], a = n[3], o = n[6], l = n[1], c = n[4],
          h = n[7], u = n[2], d = n[5], p = n[8], m = i[0], f = i[3], g = i[6], v = i[1], y = i[4], x = i[7], _ = i[2],
          w = i[5], b = i[8];
      return r[0] = s * m + a * v + o * _, r[3] = s * f + a * y + o * w, r[6] = s * g + a * x + o * b, r[1] = l * m + c * v + h * _, r[4] = l * f + c * y + h * w, r[7] = l * g + c * x + h * b, r[2] = u * m + d * v + p * _, r[5] = u * f + d * y + p * w, r[8] = u * g + d * x + p * b, this
    }

    multiplyScalar(t) {
      const e = this.elements;
      return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this
    }

    determinant() {
      const t = this.elements, e = t[0], n = t[1], i = t[2], r = t[3], s = t[4], a = t[5], o = t[6], l = t[7], c = t[8];
      return e * s * c - e * a * l - n * r * c + n * a * o + i * r * l - i * s * o
    }

    invert() {
      const t = this.elements, e = t[0], n = t[1], i = t[2], r = t[3], s = t[4], a = t[5], o = t[6], l = t[7], c = t[8],
          h = c * s - a * l, u = a * o - c * r, d = l * r - s * o, p = e * h + n * u + i * d;
      if (0 === p) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
      const m = 1 / p;
      return t[0] = h * m, t[1] = (i * l - c * n) * m, t[2] = (a * n - i * s) * m, t[3] = u * m, t[4] = (c * e - i * o) * m, t[5] = (i * r - a * e) * m, t[6] = d * m, t[7] = (n * o - l * e) * m, t[8] = (s * e - n * r) * m, this
    }

    transpose() {
      let t;
      const e = this.elements;
      return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this
    }

    getNormalMatrix(t) {
      return this.setFromMatrix4(t).invert().transpose()
    }

    transposeIntoArray(t) {
      const e = this.elements;
      return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this
    }

    setUvTransform(t, e, n, i, r, s, a) {
      const o = Math.cos(r), l = Math.sin(r);
      return this.set(n * o, n * l, -n * (o * s + l * a) + s + t, -i * l, i * o, -i * (-l * s + o * a) + a + e, 0, 0, 1), this
    }

    scale(t, e) {
      const n = this.elements;
      return n[0] *= t, n[3] *= t, n[6] *= t, n[1] *= e, n[4] *= e, n[7] *= e, this
    }

    rotate(t) {
      const e = Math.cos(t), n = Math.sin(t), i = this.elements, r = i[0], s = i[3], a = i[6], o = i[1], l = i[4],
          c = i[7];
      return i[0] = e * r + n * o, i[3] = e * s + n * l, i[6] = e * a + n * c, i[1] = -n * r + e * o, i[4] = -n * s + e * l, i[7] = -n * a + e * c, this
    }

    translate(t, e) {
      const n = this.elements;
      return n[0] += t * n[2], n[3] += t * n[5], n[6] += t * n[8], n[1] += e * n[2], n[4] += e * n[5], n[7] += e * n[8], this
    }

    equals(t) {
      const e = this.elements, n = t.elements;
      for (let t = 0; t < 9; t++) if (e[t] !== n[t]) return !1;
      return !0
    }

    fromArray(t, e = 0) {
      for (let n = 0; n < 9; n++) this.elements[n] = t[n + e];
      return this
    }

    toArray(t = [], e = 0) {
      const n = this.elements;
      return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t
    }

    clone() {
      return (new this.constructor).fromArray(this.elements)
    }
  }

  let K;
  Q.prototype.isMatrix3 = !0;

  class tt {
    static getDataURL(t) {
      if (/^data:/i.test(t.src)) return t.src;
      if ("undefined" == typeof HTMLCanvasElement) return t.src;
      let e;
      if (t instanceof HTMLCanvasElement) e = t; else {
        void 0 === K && (K = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")), K.width = t.width, K.height = t.height;
        const n = K.getContext("2d");
        t instanceof ImageData ? n.putImageData(t, 0, 0) : n.drawImage(t, 0, 0, t.width, t.height), e = K
      }
      return e.width > 2048 || e.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t), e.toDataURL("image/jpeg", .6)) : e.toDataURL("image/png")
    }
  }

  let et = 0;

  class nt extends B {
    constructor(t = nt.DEFAULT_IMAGE, e = nt.DEFAULT_MAPPING, n = 1001, i = 1001, r = 1006, s = 1008, a = 1023, o = 1009, l = 1, c = 3e3) {
      super(), Object.defineProperty(this, "id", {value: et++}), this.uuid = G(), this.name = "", this.image = t, this.mipmaps = [], this.mapping = e, this.wrapS = n, this.wrapT = i, this.magFilter = r, this.minFilter = s, this.anisotropy = l, this.format = a, this.internalFormat = null, this.type = o, this.offset = new J(0, 0), this.repeat = new J(1, 1), this.center = new J(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Q, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = c, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1
    }

    updateMatrix() {
      this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
    }

    clone() {
      return (new this.constructor).copy(this)
    }

    copy(t) {
      return this.name = t.name, this.image = t.image, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.encoding = t.encoding, this
    }

    toJSON(t) {
      const e = void 0 === t || "string" == typeof t;
      if (!e && void 0 !== t.textures[this.uuid]) return t.textures[this.uuid];
      const n = {
        metadata: {version: 4.5, type: "Texture", generator: "Texture.toJSON"},
        uuid: this.uuid,
        name: this.name,
        mapping: this.mapping,
        repeat: [this.repeat.x, this.repeat.y],
        offset: [this.offset.x, this.offset.y],
        center: [this.center.x, this.center.y],
        rotation: this.rotation,
        wrap: [this.wrapS, this.wrapT],
        format: this.format,
        type: this.type,
        encoding: this.encoding,
        minFilter: this.minFilter,
        magFilter: this.magFilter,
        anisotropy: this.anisotropy,
        flipY: this.flipY,
        premultiplyAlpha: this.premultiplyAlpha,
        unpackAlignment: this.unpackAlignment
      };
      if (void 0 !== this.image) {
        const i = this.image;
        if (void 0 === i.uuid && (i.uuid = G()), !e && void 0 === t.images[i.uuid]) {
          let e;
          if (Array.isArray(i)) {
            e = [];
            for (let t = 0, n = i.length; t < n; t++) i[t].isDataTexture ? e.push(it(i[t].image)) : e.push(it(i[t]))
          } else e = it(i);
          t.images[i.uuid] = {uuid: i.uuid, url: e}
        }
        n.image = i.uuid
      }
      return e || (t.textures[this.uuid] = n), n
    }

    dispose() {
      this.dispatchEvent({type: "dispose"})
    }

    transformUv(t) {
      if (300 !== this.mapping) return t;
      if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1) switch (this.wrapS) {
        case o:
          t.x = t.x - Math.floor(t.x);
          break;
        case l:
          t.x = t.x < 0 ? 0 : 1;
          break;
        case c:
          1 === Math.abs(Math.floor(t.x) % 2) ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x)
      }
      if (t.y < 0 || t.y > 1) switch (this.wrapT) {
        case o:
          t.y = t.y - Math.floor(t.y);
          break;
        case l:
          t.y = t.y < 0 ? 0 : 1;
          break;
        case c:
          1 === Math.abs(Math.floor(t.y) % 2) ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y)
      }
      return this.flipY && (t.y = 1 - t.y), t
    }

    set needsUpdate(t) {
      !0 === t && this.version++
    }
  }

  function it(t) {
    return "undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap ? tt.getDataURL(t) : t.data ? {
      data: Array.prototype.slice.call(t.data),
      width: t.width,
      height: t.height,
      type: t.data.constructor.name
    } : (console.warn("THREE.Texture: Unable to serialize Texture."), {})
  }

  nt.DEFAULT_IMAGE = void 0, nt.DEFAULT_MAPPING = 300, nt.prototype.isTexture = !0;

  class rt {
    constructor(t = 0, e = 0, n = 0, i = 1) {
      this.x = t, this.y = e, this.z = n, this.w = i
    }

    get width() {
      return this.z
    }

    set width(t) {
      this.z = t
    }

    get height() {
      return this.w
    }

    set height(t) {
      this.w = t
    }

    set(t, e, n, i) {
      return this.x = t, this.y = e, this.z = n, this.w = i, this
    }

    setScalar(t) {
      return this.x = t, this.y = t, this.z = t, this.w = t, this
    }

    setX(t) {
      return this.x = t, this
    }

    setY(t) {
      return this.y = t, this
    }

    setZ(t) {
      return this.z = t, this
    }

    setW(t) {
      return this.w = t, this
    }

    setComponent(t, e) {
      switch (t) {
        case 0:
          this.x = e;
          break;
        case 1:
          this.y = e;
          break;
        case 2:
          this.z = e;
          break;
        case 3:
          this.w = e;
          break;
        default:
          throw new Error("index is out of range: " + t)
      }
      return this
    }

    getComponent(t) {
      switch (t) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        case 3:
          return this.w;
        default:
          throw new Error("index is out of range: " + t)
      }
    }

    clone() {
      return new this.constructor(this.x, this.y, this.z, this.w)
    }

    copy(t) {
      return this.x = t.x, this.y = t.y, this.z = t.z, this.w = void 0 !== t.w ? t.w : 1, this
    }

    add(t, e) {
      return void 0 !== e ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this)
    }

    addScalar(t) {
      return this.x += t, this.y += t, this.z += t, this.w += t, this
    }

    addVectors(t, e) {
      return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this
    }

    addScaledVector(t, e) {
      return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this
    }

    sub(t, e) {
      return void 0 !== e ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this)
    }

    subScalar(t) {
      return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this
    }

    subVectors(t, e) {
      return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this
    }

    multiply(t) {
      return this.x *= t.x, this.y *= t.y, this.z *= t.z, this.w *= t.w, this
    }

    multiplyScalar(t) {
      return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this
    }

    applyMatrix4(t) {
      const e = this.x, n = this.y, i = this.z, r = this.w, s = t.elements;
      return this.x = s[0] * e + s[4] * n + s[8] * i + s[12] * r, this.y = s[1] * e + s[5] * n + s[9] * i + s[13] * r, this.z = s[2] * e + s[6] * n + s[10] * i + s[14] * r, this.w = s[3] * e + s[7] * n + s[11] * i + s[15] * r, this
    }

    divideScalar(t) {
      return this.multiplyScalar(1 / t)
    }

    setAxisAngleFromQuaternion(t) {
      this.w = 2 * Math.acos(t.w);
      const e = Math.sqrt(1 - t.w * t.w);
      return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this
    }

    setAxisAngleFromRotationMatrix(t) {
      let e, n, i, r;
      const s = .01, a = .1, o = t.elements, l = o[0], c = o[4], h = o[8], u = o[1], d = o[5], p = o[9], m = o[2],
          f = o[6], g = o[10];
      if (Math.abs(c - u) < s && Math.abs(h - m) < s && Math.abs(p - f) < s) {
        if (Math.abs(c + u) < a && Math.abs(h + m) < a && Math.abs(p + f) < a && Math.abs(l + d + g - 3) < a) return this.set(1, 0, 0, 0), this;
        e = Math.PI;
        const t = (l + 1) / 2, o = (d + 1) / 2, v = (g + 1) / 2, y = (c + u) / 4, x = (h + m) / 4, _ = (p + f) / 4;
        return t > o && t > v ? t < s ? (n = 0, i = .707106781, r = .707106781) : (n = Math.sqrt(t), i = y / n, r = x / n) : o > v ? o < s ? (n = .707106781, i = 0, r = .707106781) : (i = Math.sqrt(o), n = y / i, r = _ / i) : v < s ? (n = .707106781, i = .707106781, r = 0) : (r = Math.sqrt(v), n = x / r, i = _ / r), this.set(n, i, r, e), this
      }
      let v = Math.sqrt((f - p) * (f - p) + (h - m) * (h - m) + (u - c) * (u - c));
      return Math.abs(v) < .001 && (v = 1), this.x = (f - p) / v, this.y = (h - m) / v, this.z = (u - c) / v, this.w = Math.acos((l + d + g - 1) / 2), this
    }

    min(t) {
      return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this
    }

    max(t) {
      return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this
    }

    clamp(t, e) {
      return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), this
    }

    clampScalar(t, e) {
      return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this.w = Math.max(t, Math.min(e, this.w)), this
    }

    clampLength(t, e) {
      const n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
    }

    floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
    }

    ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
    }

    round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
    }

    roundToZero() {
      return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this
    }

    negate() {
      return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
    }

    dot(t) {
      return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w
    }

    lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    }

    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
    }

    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    }

    normalize() {
      return this.divideScalar(this.length() || 1)
    }

    setLength(t) {
      return this.normalize().multiplyScalar(t)
    }

    lerp(t, e) {
      return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this
    }

    lerpVectors(t, e, n) {
      return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this.w = t.w + (e.w - t.w) * n, this
    }

    equals(t) {
      return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
    }

    fromArray(t, e = 0) {
      return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this
    }

    toArray(t = [], e = 0) {
      return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t
    }

    fromBufferAttribute(t, e, n) {
      return void 0 !== n && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this
    }

    random() {
      return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this
    }
  }

  rt.prototype.isVector4 = !0;

  class st extends B {
    constructor(t, e, n = {}) {
      super(), this.width = t, this.height = e, this.depth = 1, this.scissor = new rt(0, 0, t, e), this.scissorTest = !1, this.viewport = new rt(0, 0, t, e), this.texture = new nt(void 0, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.isRenderTargetTexture = !0, this.texture.image = {
        width: t,
        height: e,
        depth: 1
      }, this.texture.generateMipmaps = void 0 !== n.generateMipmaps && n.generateMipmaps, this.texture.minFilter = void 0 !== n.minFilter ? n.minFilter : u, this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer, this.stencilBuffer = void 0 !== n.stencilBuffer && n.stencilBuffer, this.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null
    }

    setTexture(t) {
      t.image = {width: this.width, height: this.height, depth: this.depth}, this.texture = t
    }

    setSize(t, e, n = 1) {
      this.width === t && this.height === e && this.depth === n || (this.width = t, this.height = e, this.depth = n, this.texture.image.width = t, this.texture.image.height = e, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e)
    }

    clone() {
      return (new this.constructor).copy(this)
    }

    copy(t) {
      return this.width = t.width, this.height = t.height, this.depth = t.depth, this.viewport.copy(t.viewport), this.texture = t.texture.clone(), this.texture.image = {...this.texture.image}, this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.depthTexture = t.depthTexture, this
    }

    dispose() {
      this.dispatchEvent({type: "dispose"})
    }
  }

  st.prototype.isWebGLRenderTarget = !0, class extends st {
    constructor(t, e, n) {
      super(t, e);
      const i = this.texture;
      this.texture = [];
      for (let t = 0; t < n; t++) this.texture[t] = i.clone()
    }

    setSize(t, e, n = 1) {
      if (this.width !== t || this.height !== e || this.depth !== n) {
        this.width = t, this.height = e, this.depth = n;
        for (let i = 0, r = this.texture.length; i < r; i++) this.texture[i].image.width = t, this.texture[i].image.height = e, this.texture[i].image.depth = n;
        this.dispose()
      }
      return this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e), this
    }

    copy(t) {
      this.dispose(), this.width = t.width, this.height = t.height, this.depth = t.depth, this.viewport.set(0, 0, this.width, this.height), this.scissor.set(0, 0, this.width, this.height), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.depthTexture = t.depthTexture, this.texture.length = 0;
      for (let e = 0, n = t.texture.length; e < n; e++) this.texture[e] = t.texture[e].clone();
      return this
    }
  }.prototype.isWebGLMultipleRenderTargets = !0;

  class at extends st {
    constructor(t, e, n) {
      super(t, e, n), this.samples = 4
    }

    copy(t) {
      return super.copy.call(this, t), this.samples = t.samples, this
    }
  }

  at.prototype.isWebGLMultisampleRenderTarget = !0;

  class ot {
    constructor(t = 0, e = 0, n = 0, i = 1) {
      this._x = t, this._y = e, this._z = n, this._w = i
    }

    static slerp(t, e, n, i) {
      return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."), n.slerpQuaternions(t, e, i)
    }

    static slerpFlat(t, e, n, i, r, s, a) {
      let o = n[i + 0], l = n[i + 1], c = n[i + 2], h = n[i + 3];
      const u = r[s + 0], d = r[s + 1], p = r[s + 2], m = r[s + 3];
      if (0 === a) return t[e + 0] = o, t[e + 1] = l, t[e + 2] = c, void (t[e + 3] = h);
      if (1 === a) return t[e + 0] = u, t[e + 1] = d, t[e + 2] = p, void (t[e + 3] = m);
      if (h !== m || o !== u || l !== d || c !== p) {
        let t = 1 - a;
        const e = o * u + l * d + c * p + h * m, n = e >= 0 ? 1 : -1, i = 1 - e * e;
        if (i > Number.EPSILON) {
          const r = Math.sqrt(i), s = Math.atan2(r, e * n);
          t = Math.sin(t * s) / r, a = Math.sin(a * s) / r
        }
        const r = a * n;
        if (o = o * t + u * r, l = l * t + d * r, c = c * t + p * r, h = h * t + m * r, t === 1 - a) {
          const t = 1 / Math.sqrt(o * o + l * l + c * c + h * h);
          o *= t, l *= t, c *= t, h *= t
        }
      }
      t[e] = o, t[e + 1] = l, t[e + 2] = c, t[e + 3] = h
    }

    static multiplyQuaternionsFlat(t, e, n, i, r, s) {
      const a = n[i], o = n[i + 1], l = n[i + 2], c = n[i + 3], h = r[s], u = r[s + 1], d = r[s + 2], p = r[s + 3];
      return t[e] = a * p + c * h + o * d - l * u, t[e + 1] = o * p + c * u + l * h - a * d, t[e + 2] = l * p + c * d + a * u - o * h, t[e + 3] = c * p - a * h - o * u - l * d, t
    }

    get x() {
      return this._x
    }

    set x(t) {
      this._x = t, this._onChangeCallback()
    }

    get y() {
      return this._y
    }

    set y(t) {
      this._y = t, this._onChangeCallback()
    }

    get z() {
      return this._z
    }

    set z(t) {
      this._z = t, this._onChangeCallback()
    }

    get w() {
      return this._w
    }

    set w(t) {
      this._w = t, this._onChangeCallback()
    }

    set(t, e, n, i) {
      return this._x = t, this._y = e, this._z = n, this._w = i, this._onChangeCallback(), this
    }

    clone() {
      return new this.constructor(this._x, this._y, this._z, this._w)
    }

    copy(t) {
      return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this
    }

    setFromEuler(t, e) {
      if (!t || !t.isEuler) throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
      const n = t._x, i = t._y, r = t._z, s = t._order, a = Math.cos, o = Math.sin, l = a(n / 2), c = a(i / 2),
          h = a(r / 2), u = o(n / 2), d = o(i / 2), p = o(r / 2);
      switch (s) {
        case"XYZ":
          this._x = u * c * h + l * d * p, this._y = l * d * h - u * c * p, this._z = l * c * p + u * d * h, this._w = l * c * h - u * d * p;
          break;
        case"YXZ":
          this._x = u * c * h + l * d * p, this._y = l * d * h - u * c * p, this._z = l * c * p - u * d * h, this._w = l * c * h + u * d * p;
          break;
        case"ZXY":
          this._x = u * c * h - l * d * p, this._y = l * d * h + u * c * p, this._z = l * c * p + u * d * h, this._w = l * c * h - u * d * p;
          break;
        case"ZYX":
          this._x = u * c * h - l * d * p, this._y = l * d * h + u * c * p, this._z = l * c * p - u * d * h, this._w = l * c * h + u * d * p;
          break;
        case"YZX":
          this._x = u * c * h + l * d * p, this._y = l * d * h + u * c * p, this._z = l * c * p - u * d * h, this._w = l * c * h - u * d * p;
          break;
        case"XZY":
          this._x = u * c * h - l * d * p, this._y = l * d * h - u * c * p, this._z = l * c * p + u * d * h, this._w = l * c * h + u * d * p;
          break;
        default:
          console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + s)
      }
      return !1 !== e && this._onChangeCallback(), this
    }

    setFromAxisAngle(t, e) {
      const n = e / 2, i = Math.sin(n);
      return this._x = t.x * i, this._y = t.y * i, this._z = t.z * i, this._w = Math.cos(n), this._onChangeCallback(), this
    }

    setFromRotationMatrix(t) {
      const e = t.elements, n = e[0], i = e[4], r = e[8], s = e[1], a = e[5], o = e[9], l = e[2], c = e[6], h = e[10],
          u = n + a + h;
      if (u > 0) {
        const t = .5 / Math.sqrt(u + 1);
        this._w = .25 / t, this._x = (c - o) * t, this._y = (r - l) * t, this._z = (s - i) * t
      } else if (n > a && n > h) {
        const t = 2 * Math.sqrt(1 + n - a - h);
        this._w = (c - o) / t, this._x = .25 * t, this._y = (i + s) / t, this._z = (r + l) / t
      } else if (a > h) {
        const t = 2 * Math.sqrt(1 + a - n - h);
        this._w = (r - l) / t, this._x = (i + s) / t, this._y = .25 * t, this._z = (o + c) / t
      } else {
        const t = 2 * Math.sqrt(1 + h - n - a);
        this._w = (s - i) / t, this._x = (r + l) / t, this._y = (o + c) / t, this._z = .25 * t
      }
      return this._onChangeCallback(), this
    }

    setFromUnitVectors(t, e) {
      let n = t.dot(e) + 1;
      return n < Number.EPSILON ? (n = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = n)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = n), this.normalize()
    }

    angleTo(t) {
      return 2 * Math.acos(Math.abs(V(this.dot(t), -1, 1)))
    }

    rotateTowards(t, e) {
      const n = this.angleTo(t);
      if (0 === n) return this;
      const i = Math.min(1, e / n);
      return this.slerp(t, i), this
    }

    identity() {
      return this.set(0, 0, 0, 1)
    }

    invert() {
      return this.conjugate()
    }

    conjugate() {
      return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this
    }

    dot(t) {
      return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
    }

    lengthSq() {
      return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
    }

    length() {
      return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
    }

    normalize() {
      let t = this.length();
      return 0 === t ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this
    }

    multiply(t, e) {
      return void 0 !== e ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(t, e)) : this.multiplyQuaternions(this, t)
    }

    premultiply(t) {
      return this.multiplyQuaternions(t, this)
    }

    multiplyQuaternions(t, e) {
      const n = t._x, i = t._y, r = t._z, s = t._w, a = e._x, o = e._y, l = e._z, c = e._w;
      return this._x = n * c + s * a + i * l - r * o, this._y = i * c + s * o + r * a - n * l, this._z = r * c + s * l + n * o - i * a, this._w = s * c - n * a - i * o - r * l, this._onChangeCallback(), this
    }

    slerp(t, e) {
      if (0 === e) return this;
      if (1 === e) return this.copy(t);
      const n = this._x, i = this._y, r = this._z, s = this._w;
      let a = s * t._w + n * t._x + i * t._y + r * t._z;
      if (a < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, a = -a) : this.copy(t), a >= 1) return this._w = s, this._x = n, this._y = i, this._z = r, this;
      const o = 1 - a * a;
      if (o <= Number.EPSILON) {
        const t = 1 - e;
        return this._w = t * s + e * this._w, this._x = t * n + e * this._x, this._y = t * i + e * this._y, this._z = t * r + e * this._z, this.normalize(), this._onChangeCallback(), this
      }
      const l = Math.sqrt(o), c = Math.atan2(l, a), h = Math.sin((1 - e) * c) / l, u = Math.sin(e * c) / l;
      return this._w = s * h + this._w * u, this._x = n * h + this._x * u, this._y = i * h + this._y * u, this._z = r * h + this._z * u, this._onChangeCallback(), this
    }

    slerpQuaternions(t, e, n) {
      this.copy(t).slerp(e, n)
    }

    equals(t) {
      return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w
    }

    fromArray(t, e = 0) {
      return this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this
    }

    toArray(t = [], e = 0) {
      return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t
    }

    fromBufferAttribute(t, e) {
      return this._x = t.getX(e), this._y = t.getY(e), this._z = t.getZ(e), this._w = t.getW(e), this
    }

    _onChange(t) {
      return this._onChangeCallback = t, this
    }

    _onChangeCallback() {
    }
  }

  ot.prototype.isQuaternion = !0;

  class lt {
    constructor(t = 0, e = 0, n = 0) {
      this.x = t, this.y = e, this.z = n
    }

    set(t, e, n) {
      return void 0 === n && (n = this.z), this.x = t, this.y = e, this.z = n, this
    }

    setScalar(t) {
      return this.x = t, this.y = t, this.z = t, this
    }

    setX(t) {
      return this.x = t, this
    }

    setY(t) {
      return this.y = t, this
    }

    setZ(t) {
      return this.z = t, this
    }

    setComponent(t, e) {
      switch (t) {
        case 0:
          this.x = e;
          break;
        case 1:
          this.y = e;
          break;
        case 2:
          this.z = e;
          break;
        default:
          throw new Error("index is out of range: " + t)
      }
      return this
    }

    getComponent(t) {
      switch (t) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        default:
          throw new Error("index is out of range: " + t)
      }
    }

    clone() {
      return new this.constructor(this.x, this.y, this.z)
    }

    copy(t) {
      return this.x = t.x, this.y = t.y, this.z = t.z, this
    }

    add(t, e) {
      return void 0 !== e ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this)
    }

    addScalar(t) {
      return this.x += t, this.y += t, this.z += t, this
    }

    addVectors(t, e) {
      return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this
    }

    addScaledVector(t, e) {
      return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this
    }

    sub(t, e) {
      return void 0 !== e ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this)
    }

    subScalar(t) {
      return this.x -= t, this.y -= t, this.z -= t, this
    }

    subVectors(t, e) {
      return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this
    }

    multiply(t, e) {
      return void 0 !== e ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(t, e)) : (this.x *= t.x, this.y *= t.y, this.z *= t.z, this)
    }

    multiplyScalar(t) {
      return this.x *= t, this.y *= t, this.z *= t, this
    }

    multiplyVectors(t, e) {
      return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this
    }

    applyEuler(t) {
      return t && t.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(ht.setFromEuler(t))
    }

    applyAxisAngle(t, e) {
      return this.applyQuaternion(ht.setFromAxisAngle(t, e))
    }

    applyMatrix3(t) {
      const e = this.x, n = this.y, i = this.z, r = t.elements;
      return this.x = r[0] * e + r[3] * n + r[6] * i, this.y = r[1] * e + r[4] * n + r[7] * i, this.z = r[2] * e + r[5] * n + r[8] * i, this
    }

    applyNormalMatrix(t) {
      return this.applyMatrix3(t).normalize()
    }

    applyMatrix4(t) {
      const e = this.x, n = this.y, i = this.z, r = t.elements, s = 1 / (r[3] * e + r[7] * n + r[11] * i + r[15]);
      return this.x = (r[0] * e + r[4] * n + r[8] * i + r[12]) * s, this.y = (r[1] * e + r[5] * n + r[9] * i + r[13]) * s, this.z = (r[2] * e + r[6] * n + r[10] * i + r[14]) * s, this
    }

    applyQuaternion(t) {
      const e = this.x, n = this.y, i = this.z, r = t.x, s = t.y, a = t.z, o = t.w, l = o * e + s * i - a * n,
          c = o * n + a * e - r * i, h = o * i + r * n - s * e, u = -r * e - s * n - a * i;
      return this.x = l * o + u * -r + c * -a - h * -s, this.y = c * o + u * -s + h * -r - l * -a, this.z = h * o + u * -a + l * -s - c * -r, this
    }

    project(t) {
      return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)
    }

    unproject(t) {
      return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)
    }

    transformDirection(t) {
      const e = this.x, n = this.y, i = this.z, r = t.elements;
      return this.x = r[0] * e + r[4] * n + r[8] * i, this.y = r[1] * e + r[5] * n + r[9] * i, this.z = r[2] * e + r[6] * n + r[10] * i, this.normalize()
    }

    divide(t) {
      return this.x /= t.x, this.y /= t.y, this.z /= t.z, this
    }

    divideScalar(t) {
      return this.multiplyScalar(1 / t)
    }

    min(t) {
      return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this
    }

    max(t) {
      return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this
    }

    clamp(t, e) {
      return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this
    }

    clampScalar(t, e) {
      return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this
    }

    clampLength(t, e) {
      const n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
    }

    floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
    }

    ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
    }

    round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
    }

    roundToZero() {
      return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this
    }

    negate() {
      return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
    }

    dot(t) {
      return this.x * t.x + this.y * t.y + this.z * t.z
    }

    lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z
    }

    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
    }

    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
    }

    normalize() {
      return this.divideScalar(this.length() || 1)
    }

    setLength(t) {
      return this.normalize().multiplyScalar(t)
    }

    lerp(t, e) {
      return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this
    }

    lerpVectors(t, e, n) {
      return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this
    }

    cross(t, e) {
      return void 0 !== e ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(t, e)) : this.crossVectors(this, t)
    }

    crossVectors(t, e) {
      const n = t.x, i = t.y, r = t.z, s = e.x, a = e.y, o = e.z;
      return this.x = i * o - r * a, this.y = r * s - n * o, this.z = n * a - i * s, this
    }

    projectOnVector(t) {
      const e = t.lengthSq();
      if (0 === e) return this.set(0, 0, 0);
      const n = t.dot(this) / e;
      return this.copy(t).multiplyScalar(n)
    }

    projectOnPlane(t) {
      return ct.copy(this).projectOnVector(t), this.sub(ct)
    }

    reflect(t) {
      return this.sub(ct.copy(t).multiplyScalar(2 * this.dot(t)))
    }

    angleTo(t) {
      const e = Math.sqrt(this.lengthSq() * t.lengthSq());
      if (0 === e) return Math.PI / 2;
      const n = this.dot(t) / e;
      return Math.acos(V(n, -1, 1))
    }

    distanceTo(t) {
      return Math.sqrt(this.distanceToSquared(t))
    }

    distanceToSquared(t) {
      const e = this.x - t.x, n = this.y - t.y, i = this.z - t.z;
      return e * e + n * n + i * i
    }

    manhattanDistanceTo(t) {
      return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
    }

    setFromSpherical(t) {
      return this.setFromSphericalCoords(t.radius, t.phi, t.theta)
    }

    setFromSphericalCoords(t, e, n) {
      const i = Math.sin(e) * t;
      return this.x = i * Math.sin(n), this.y = Math.cos(e) * t, this.z = i * Math.cos(n), this
    }

    setFromCylindrical(t) {
      return this.setFromCylindricalCoords(t.radius, t.theta, t.y)
    }

    setFromCylindricalCoords(t, e, n) {
      return this.x = t * Math.sin(e), this.y = n, this.z = t * Math.cos(e), this
    }

    setFromMatrixPosition(t) {
      const e = t.elements;
      return this.x = e[12], this.y = e[13], this.z = e[14], this
    }

    setFromMatrixScale(t) {
      const e = this.setFromMatrixColumn(t, 0).length(), n = this.setFromMatrixColumn(t, 1).length(),
          i = this.setFromMatrixColumn(t, 2).length();
      return this.x = e, this.y = n, this.z = i, this
    }

    setFromMatrixColumn(t, e) {
      return this.fromArray(t.elements, 4 * e)
    }

    setFromMatrix3Column(t, e) {
      return this.fromArray(t.elements, 3 * e)
    }

    equals(t) {
      return t.x === this.x && t.y === this.y && t.z === this.z
    }

    fromArray(t, e = 0) {
      return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this
    }

    toArray(t = [], e = 0) {
      return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t
    }

    fromBufferAttribute(t, e, n) {
      return void 0 !== n && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this
    }

    random() {
      return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this
    }
  }

  lt.prototype.isVector3 = !0;
  const ct = new lt, ht = new ot;

  class ut {
    constructor(t = new lt(1 / 0, 1 / 0, 1 / 0), e = new lt(-1 / 0, -1 / 0, -1 / 0)) {
      this.min = t, this.max = e
    }

    set(t, e) {
      return this.min.copy(t), this.max.copy(e), this
    }

    setFromArray(t) {
      let e = 1 / 0, n = 1 / 0, i = 1 / 0, r = -1 / 0, s = -1 / 0, a = -1 / 0;
      for (let o = 0, l = t.length; o < l; o += 3) {
        const l = t[o], c = t[o + 1], h = t[o + 2];
        l < e && (e = l), c < n && (n = c), h < i && (i = h), l > r && (r = l), c > s && (s = c), h > a && (a = h)
      }
      return this.min.set(e, n, i), this.max.set(r, s, a), this
    }

    setFromBufferAttribute(t) {
      let e = 1 / 0, n = 1 / 0, i = 1 / 0, r = -1 / 0, s = -1 / 0, a = -1 / 0;
      for (let o = 0, l = t.count; o < l; o++) {
        const l = t.getX(o), c = t.getY(o), h = t.getZ(o);
        l < e && (e = l), c < n && (n = c), h < i && (i = h), l > r && (r = l), c > s && (s = c), h > a && (a = h)
      }
      return this.min.set(e, n, i), this.max.set(r, s, a), this
    }

    setFromPoints(t) {
      this.makeEmpty();
      for (let e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
      return this
    }

    setFromCenterAndSize(t, e) {
      const n = pt.copy(e).multiplyScalar(.5);
      return this.min.copy(t).sub(n), this.max.copy(t).add(n), this
    }

    setFromObject(t) {
      return this.makeEmpty(), this.expandByObject(t)
    }

    clone() {
      return (new this.constructor).copy(this)
    }

    copy(t) {
      return this.min.copy(t.min), this.max.copy(t.max), this
    }

    makeEmpty() {
      return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this
    }

    isEmpty() {
      return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
    }

    getCenter(t) {
      return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
    }

    getSize(t) {
      return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min)
    }

    expandByPoint(t) {
      return this.min.min(t), this.max.max(t), this
    }

    expandByVector(t) {
      return this.min.sub(t), this.max.add(t), this
    }

    expandByScalar(t) {
      return this.min.addScalar(-t), this.max.addScalar(t), this
    }

    expandByObject(t) {
      t.updateWorldMatrix(!1, !1);
      const e = t.geometry;
      void 0 !== e && (null === e.boundingBox && e.computeBoundingBox(), mt.copy(e.boundingBox), mt.applyMatrix4(t.matrixWorld), this.union(mt));
      const n = t.children;
      for (let t = 0, e = n.length; t < e; t++) this.expandByObject(n[t]);
      return this
    }

    containsPoint(t) {
      return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z)
    }

    containsBox(t) {
      return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z
    }

    getParameter(t, e) {
      return e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z))
    }

    intersectsBox(t) {
      return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z)
    }

    intersectsSphere(t) {
      return this.clampPoint(t.center, pt), pt.distanceToSquared(t.center) <= t.radius * t.radius
    }

    intersectsPlane(t) {
      let e, n;
      return t.normal.x > 0 ? (e = t.normal.x * this.min.x, n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, n = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, n += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, n += t.normal.z * this.min.z), e <= -t.constant && n >= -t.constant
    }

    intersectsTriangle(t) {
      if (this.isEmpty()) return !1;
      this.getCenter(wt), bt.subVectors(this.max, wt), ft.subVectors(t.a, wt), gt.subVectors(t.b, wt), vt.subVectors(t.c, wt), yt.subVectors(gt, ft), xt.subVectors(vt, gt), _t.subVectors(ft, vt);
      let e = [0, -yt.z, yt.y, 0, -xt.z, xt.y, 0, -_t.z, _t.y, yt.z, 0, -yt.x, xt.z, 0, -xt.x, _t.z, 0, -_t.x, -yt.y, yt.x, 0, -xt.y, xt.x, 0, -_t.y, _t.x, 0];
      return !!Et(e, ft, gt, vt, bt) && (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !!Et(e, ft, gt, vt, bt) && (Mt.crossVectors(yt, xt), e = [Mt.x, Mt.y, Mt.z], Et(e, ft, gt, vt, bt)))
    }

    clampPoint(t, e) {
      return e.copy(t).clamp(this.min, this.max)
    }

    distanceToPoint(t) {
      return pt.copy(t).clamp(this.min, this.max).sub(t).length()
    }

    getBoundingSphere(t) {
      return this.getCenter(t.center), t.radius = .5 * this.getSize(pt).length(), t
    }

    intersect(t) {
      return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this
    }

    union(t) {
      return this.min.min(t.min), this.max.max(t.max), this
    }

    applyMatrix4(t) {
      return this.isEmpty() || (dt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), dt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), dt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), dt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), dt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), dt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), dt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), dt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(dt)), this
    }

    translate(t) {
      return this.min.add(t), this.max.add(t), this
    }

    equals(t) {
      return t.min.equals(this.min) && t.max.equals(this.max)
    }
  }

  ut.prototype.isBox3 = !0;
  const dt = [new lt, new lt, new lt, new lt, new lt, new lt, new lt, new lt], pt = new lt, mt = new ut, ft = new lt,
      gt = new lt, vt = new lt, yt = new lt, xt = new lt, _t = new lt, wt = new lt, bt = new lt, Mt = new lt,
      St = new lt;

  function Et(t, e, n, i, r) {
    for (let s = 0, a = t.length - 3; s <= a; s += 3) {
      St.fromArray(t, s);
      const a = r.x * Math.abs(St.x) + r.y * Math.abs(St.y) + r.z * Math.abs(St.z), o = e.dot(St), l = n.dot(St),
          c = i.dot(St);
      if (Math.max(-Math.max(o, l, c), Math.min(o, l, c)) > a) return !1
    }
    return !0
  }

  const Tt = new ut, Lt = new lt, At = new lt, Ct = new lt;

  class Pt {
    constructor(t = new lt, e = -1) {
      this.center = t, this.radius = e
    }

    set(t, e) {
      return this.center.copy(t), this.radius = e, this
    }

    setFromPoints(t, e) {
      const n = this.center;
      void 0 !== e ? n.copy(e) : Tt.setFromPoints(t).getCenter(n);
      let i = 0;
      for (let e = 0, r = t.length; e < r; e++) i = Math.max(i, n.distanceToSquared(t[e]));
      return this.radius = Math.sqrt(i), this
    }

    copy(t) {
      return this.center.copy(t.center), this.radius = t.radius, this
    }

    isEmpty() {
      return this.radius < 0
    }

    makeEmpty() {
      return this.center.set(0, 0, 0), this.radius = -1, this
    }

    containsPoint(t) {
      return t.distanceToSquared(this.center) <= this.radius * this.radius
    }

    distanceToPoint(t) {
      return t.distanceTo(this.center) - this.radius
    }

    intersectsSphere(t) {
      const e = this.radius + t.radius;
      return t.center.distanceToSquared(this.center) <= e * e
    }

    intersectsBox(t) {
      return t.intersectsSphere(this)
    }

    intersectsPlane(t) {
      return Math.abs(t.distanceToPoint(this.center)) <= this.radius
    }

    clampPoint(t, e) {
      const n = this.center.distanceToSquared(t);
      return e.copy(t), n > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e
    }

    getBoundingBox(t) {
      return this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t)
    }

    applyMatrix4(t) {
      return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this
    }

    translate(t) {
      return this.center.add(t), this
    }

    expandByPoint(t) {
      Ct.subVectors(t, this.center);
      const e = Ct.lengthSq();
      if (e > this.radius * this.radius) {
        const t = Math.sqrt(e), n = .5 * (t - this.radius);
        this.center.add(Ct.multiplyScalar(n / t)), this.radius += n
      }
      return this
    }

    union(t) {
      return At.subVectors(t.center, this.center).normalize().multiplyScalar(t.radius), this.expandByPoint(Lt.copy(t.center).add(At)), this.expandByPoint(Lt.copy(t.center).sub(At)), this
    }

    equals(t) {
      return t.center.equals(this.center) && t.radius === this.radius
    }

    clone() {
      return (new this.constructor).copy(this)
    }
  }

  const Rt = new lt, It = new lt, Dt = new lt, Nt = new lt, zt = new lt, Ot = new lt, Bt = new lt;

  class Ft {
    constructor(t = new lt, e = new lt(0, 0, -1)) {
      this.origin = t, this.direction = e
    }

    set(t, e) {
      return this.origin.copy(t), this.direction.copy(e), this
    }

    copy(t) {
      return this.origin.copy(t.origin), this.direction.copy(t.direction), this
    }

    at(t, e) {
      return e.copy(this.direction).multiplyScalar(t).add(this.origin)
    }

    lookAt(t) {
      return this.direction.copy(t).sub(this.origin).normalize(), this
    }

    recast(t) {
      return this.origin.copy(this.at(t, Rt)), this
    }

    closestPointToPoint(t, e) {
      e.subVectors(t, this.origin);
      const n = e.dot(this.direction);
      return n < 0 ? e.copy(this.origin) : e.copy(this.direction).multiplyScalar(n).add(this.origin)
    }

    distanceToPoint(t) {
      return Math.sqrt(this.distanceSqToPoint(t))
    }

    distanceSqToPoint(t) {
      const e = Rt.subVectors(t, this.origin).dot(this.direction);
      return e < 0 ? this.origin.distanceToSquared(t) : (Rt.copy(this.direction).multiplyScalar(e).add(this.origin), Rt.distanceToSquared(t))
    }

    distanceSqToSegment(t, e, n, i) {
      It.copy(t).add(e).multiplyScalar(.5), Dt.copy(e).sub(t).normalize(), Nt.copy(this.origin).sub(It);
      const r = .5 * t.distanceTo(e), s = -this.direction.dot(Dt), a = Nt.dot(this.direction), o = -Nt.dot(Dt),
          l = Nt.lengthSq(), c = Math.abs(1 - s * s);
      let h, u, d, p;
      if (c > 0) if (h = s * o - a, u = s * a - o, p = r * c, h >= 0) if (u >= -p) if (u <= p) {
        const t = 1 / c;
        h *= t, u *= t, d = h * (h + s * u + 2 * a) + u * (s * h + u + 2 * o) + l
      } else u = r, h = Math.max(0, -(s * u + a)), d = -h * h + u * (u + 2 * o) + l; else u = -r, h = Math.max(0, -(s * u + a)), d = -h * h + u * (u + 2 * o) + l; else u <= -p ? (h = Math.max(0, -(-s * r + a)), u = h > 0 ? -r : Math.min(Math.max(-r, -o), r), d = -h * h + u * (u + 2 * o) + l) : u <= p ? (h = 0, u = Math.min(Math.max(-r, -o), r), d = u * (u + 2 * o) + l) : (h = Math.max(0, -(s * r + a)), u = h > 0 ? r : Math.min(Math.max(-r, -o), r), d = -h * h + u * (u + 2 * o) + l); else u = s > 0 ? -r : r, h = Math.max(0, -(s * u + a)), d = -h * h + u * (u + 2 * o) + l;
      return n && n.copy(this.direction).multiplyScalar(h).add(this.origin), i && i.copy(Dt).multiplyScalar(u).add(It), d
    }

    intersectSphere(t, e) {
      Rt.subVectors(t.center, this.origin);
      const n = Rt.dot(this.direction), i = Rt.dot(Rt) - n * n, r = t.radius * t.radius;
      if (i > r) return null;
      const s = Math.sqrt(r - i), a = n - s, o = n + s;
      return a < 0 && o < 0 ? null : a < 0 ? this.at(o, e) : this.at(a, e)
    }

    intersectsSphere(t) {
      return this.distanceSqToPoint(t.center) <= t.radius * t.radius
    }

    distanceToPlane(t) {
      const e = t.normal.dot(this.direction);
      if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
      const n = -(this.origin.dot(t.normal) + t.constant) / e;
      return n >= 0 ? n : null
    }

    intersectPlane(t, e) {
      const n = this.distanceToPlane(t);
      return null === n ? null : this.at(n, e)
    }

    intersectsPlane(t) {
      const e = t.distanceToPoint(this.origin);
      return 0 === e || t.normal.dot(this.direction) * e < 0
    }

    intersectBox(t, e) {
      let n, i, r, s, a, o;
      const l = 1 / this.direction.x, c = 1 / this.direction.y, h = 1 / this.direction.z, u = this.origin;
      return l >= 0 ? (n = (t.min.x - u.x) * l, i = (t.max.x - u.x) * l) : (n = (t.max.x - u.x) * l, i = (t.min.x - u.x) * l), c >= 0 ? (r = (t.min.y - u.y) * c, s = (t.max.y - u.y) * c) : (r = (t.max.y - u.y) * c, s = (t.min.y - u.y) * c), n > s || r > i ? null : ((r > n || n != n) && (n = r), (s < i || i != i) && (i = s), h >= 0 ? (a = (t.min.z - u.z) * h, o = (t.max.z - u.z) * h) : (a = (t.max.z - u.z) * h, o = (t.min.z - u.z) * h), n > o || a > i ? null : ((a > n || n != n) && (n = a), (o < i || i != i) && (i = o), i < 0 ? null : this.at(n >= 0 ? n : i, e)))
    }

    intersectsBox(t) {
      return null !== this.intersectBox(t, Rt)
    }

    intersectTriangle(t, e, n, i, r) {
      zt.subVectors(e, t), Ot.subVectors(n, t), Bt.crossVectors(zt, Ot);
      let s, a = this.direction.dot(Bt);
      if (a > 0) {
        if (i) return null;
        s = 1
      } else {
        if (!(a < 0)) return null;
        s = -1, a = -a
      }
      Nt.subVectors(this.origin, t);
      const o = s * this.direction.dot(Ot.crossVectors(Nt, Ot));
      if (o < 0) return null;
      const l = s * this.direction.dot(zt.cross(Nt));
      if (l < 0) return null;
      if (o + l > a) return null;
      const c = -s * Nt.dot(Bt);
      return c < 0 ? null : this.at(c / a, r)
    }

    applyMatrix4(t) {
      return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this
    }

    equals(t) {
      return t.origin.equals(this.origin) && t.direction.equals(this.direction)
    }

    clone() {
      return (new this.constructor).copy(this)
    }
  }

  class kt {
    constructor() {
      this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
    }

    set(t, e, n, i, r, s, a, o, l, c, h, u, d, p, m, f) {
      const g = this.elements;
      return g[0] = t, g[4] = e, g[8] = n, g[12] = i, g[1] = r, g[5] = s, g[9] = a, g[13] = o, g[2] = l, g[6] = c, g[10] = h, g[14] = u, g[3] = d, g[7] = p, g[11] = m, g[15] = f, this
    }

    identity() {
      return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
    }

    clone() {
      return (new kt).fromArray(this.elements)
    }

    copy(t) {
      const e = this.elements, n = t.elements;
      return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], e[9] = n[9], e[10] = n[10], e[11] = n[11], e[12] = n[12], e[13] = n[13], e[14] = n[14], e[15] = n[15], this
    }

    copyPosition(t) {
      const e = this.elements, n = t.elements;
      return e[12] = n[12], e[13] = n[13], e[14] = n[14], this
    }

    setFromMatrix3(t) {
      const e = t.elements;
      return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1), this
    }

    extractBasis(t, e, n) {
      return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this
    }

    makeBasis(t, e, n) {
      return this.set(t.x, e.x, n.x, 0, t.y, e.y, n.y, 0, t.z, e.z, n.z, 0, 0, 0, 0, 1), this
    }

    extractRotation(t) {
      const e = this.elements, n = t.elements, i = 1 / Ut.setFromMatrixColumn(t, 0).length(),
          r = 1 / Ut.setFromMatrixColumn(t, 1).length(), s = 1 / Ut.setFromMatrixColumn(t, 2).length();
      return e[0] = n[0] * i, e[1] = n[1] * i, e[2] = n[2] * i, e[3] = 0, e[4] = n[4] * r, e[5] = n[5] * r, e[6] = n[6] * r, e[7] = 0, e[8] = n[8] * s, e[9] = n[9] * s, e[10] = n[10] * s, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
    }

    makeRotationFromEuler(t) {
      t && t.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
      const e = this.elements, n = t.x, i = t.y, r = t.z, s = Math.cos(n), a = Math.sin(n), o = Math.cos(i),
          l = Math.sin(i), c = Math.cos(r), h = Math.sin(r);
      if ("XYZ" === t.order) {
        const t = s * c, n = s * h, i = a * c, r = a * h;
        e[0] = o * c, e[4] = -o * h, e[8] = l, e[1] = n + i * l, e[5] = t - r * l, e[9] = -a * o, e[2] = r - t * l, e[6] = i + n * l, e[10] = s * o
      } else if ("YXZ" === t.order) {
        const t = o * c, n = o * h, i = l * c, r = l * h;
        e[0] = t + r * a, e[4] = i * a - n, e[8] = s * l, e[1] = s * h, e[5] = s * c, e[9] = -a, e[2] = n * a - i, e[6] = r + t * a, e[10] = s * o
      } else if ("ZXY" === t.order) {
        const t = o * c, n = o * h, i = l * c, r = l * h;
        e[0] = t - r * a, e[4] = -s * h, e[8] = i + n * a, e[1] = n + i * a, e[5] = s * c, e[9] = r - t * a, e[2] = -s * l, e[6] = a, e[10] = s * o
      } else if ("ZYX" === t.order) {
        const t = s * c, n = s * h, i = a * c, r = a * h;
        e[0] = o * c, e[4] = i * l - n, e[8] = t * l + r, e[1] = o * h, e[5] = r * l + t, e[9] = n * l - i, e[2] = -l, e[6] = a * o, e[10] = s * o
      } else if ("YZX" === t.order) {
        const t = s * o, n = s * l, i = a * o, r = a * l;
        e[0] = o * c, e[4] = r - t * h, e[8] = i * h + n, e[1] = h, e[5] = s * c, e[9] = -a * c, e[2] = -l * c, e[6] = n * h + i, e[10] = t - r * h
      } else if ("XZY" === t.order) {
        const t = s * o, n = s * l, i = a * o, r = a * l;
        e[0] = o * c, e[4] = -h, e[8] = l * c, e[1] = t * h + r, e[5] = s * c, e[9] = n * h - i, e[2] = i * h - n, e[6] = a * c, e[10] = r * h + t
      }
      return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
    }

    makeRotationFromQuaternion(t) {
      return this.compose(Gt, t, Vt)
    }

    lookAt(t, e, n) {
      const i = this.elements;
      return Xt.subVectors(t, e), 0 === Xt.lengthSq() && (Xt.z = 1), Xt.normalize(), Wt.crossVectors(n, Xt), 0 === Wt.lengthSq() && (1 === Math.abs(n.z) ? Xt.x += 1e-4 : Xt.z += 1e-4, Xt.normalize(), Wt.crossVectors(n, Xt)), Wt.normalize(), jt.crossVectors(Xt, Wt), i[0] = Wt.x, i[4] = jt.x, i[8] = Xt.x, i[1] = Wt.y, i[5] = jt.y, i[9] = Xt.y, i[2] = Wt.z, i[6] = jt.z, i[10] = Xt.z, this
    }

    multiply(t, e) {
      return void 0 !== e ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(t, e)) : this.multiplyMatrices(this, t)
    }

    premultiply(t) {
      return this.multiplyMatrices(t, this)
    }

    multiplyMatrices(t, e) {
      const n = t.elements, i = e.elements, r = this.elements, s = n[0], a = n[4], o = n[8], l = n[12], c = n[1],
          h = n[5], u = n[9], d = n[13], p = n[2], m = n[6], f = n[10], g = n[14], v = n[3], y = n[7], x = n[11],
          _ = n[15], w = i[0], b = i[4], M = i[8], S = i[12], E = i[1], T = i[5], L = i[9], A = i[13], C = i[2],
          P = i[6], R = i[10], I = i[14], D = i[3], N = i[7], z = i[11], O = i[15];
      return r[0] = s * w + a * E + o * C + l * D, r[4] = s * b + a * T + o * P + l * N, r[8] = s * M + a * L + o * R + l * z, r[12] = s * S + a * A + o * I + l * O, r[1] = c * w + h * E + u * C + d * D, r[5] = c * b + h * T + u * P + d * N, r[9] = c * M + h * L + u * R + d * z, r[13] = c * S + h * A + u * I + d * O, r[2] = p * w + m * E + f * C + g * D, r[6] = p * b + m * T + f * P + g * N, r[10] = p * M + m * L + f * R + g * z, r[14] = p * S + m * A + f * I + g * O, r[3] = v * w + y * E + x * C + _ * D, r[7] = v * b + y * T + x * P + _ * N, r[11] = v * M + y * L + x * R + _ * z, r[15] = v * S + y * A + x * I + _ * O, this
    }

    multiplyScalar(t) {
      const e = this.elements;
      return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this
    }

    determinant() {
      const t = this.elements, e = t[0], n = t[4], i = t[8], r = t[12], s = t[1], a = t[5], o = t[9], l = t[13],
          c = t[2], h = t[6], u = t[10], d = t[14];
      return t[3] * (+r * o * h - i * l * h - r * a * u + n * l * u + i * a * d - n * o * d) + t[7] * (+e * o * d - e * l * u + r * s * u - i * s * d + i * l * c - r * o * c) + t[11] * (+e * l * h - e * a * d - r * s * h + n * s * d + r * a * c - n * l * c) + t[15] * (-i * a * c - e * o * h + e * a * u + i * s * h - n * s * u + n * o * c)
    }

    transpose() {
      const t = this.elements;
      let e;
      return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this
    }

    setPosition(t, e, n) {
      const i = this.elements;
      return t.isVector3 ? (i[12] = t.x, i[13] = t.y, i[14] = t.z) : (i[12] = t, i[13] = e, i[14] = n), this
    }

    invert() {
      const t = this.elements, e = t[0], n = t[1], i = t[2], r = t[3], s = t[4], a = t[5], o = t[6], l = t[7], c = t[8],
          h = t[9], u = t[10], d = t[11], p = t[12], m = t[13], f = t[14], g = t[15],
          v = h * f * l - m * u * l + m * o * d - a * f * d - h * o * g + a * u * g,
          y = p * u * l - c * f * l - p * o * d + s * f * d + c * o * g - s * u * g,
          x = c * m * l - p * h * l + p * a * d - s * m * d - c * a * g + s * h * g,
          _ = p * h * o - c * m * o - p * a * u + s * m * u + c * a * f - s * h * f, w = e * v + n * y + i * x + r * _;
      if (0 === w) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      const b = 1 / w;
      return t[0] = v * b, t[1] = (m * u * r - h * f * r - m * i * d + n * f * d + h * i * g - n * u * g) * b, t[2] = (a * f * r - m * o * r + m * i * l - n * f * l - a * i * g + n * o * g) * b, t[3] = (h * o * r - a * u * r - h * i * l + n * u * l + a * i * d - n * o * d) * b, t[4] = y * b, t[5] = (c * f * r - p * u * r + p * i * d - e * f * d - c * i * g + e * u * g) * b, t[6] = (p * o * r - s * f * r - p * i * l + e * f * l + s * i * g - e * o * g) * b, t[7] = (s * u * r - c * o * r + c * i * l - e * u * l - s * i * d + e * o * d) * b, t[8] = x * b, t[9] = (p * h * r - c * m * r - p * n * d + e * m * d + c * n * g - e * h * g) * b, t[10] = (s * m * r - p * a * r + p * n * l - e * m * l - s * n * g + e * a * g) * b, t[11] = (c * a * r - s * h * r - c * n * l + e * h * l + s * n * d - e * a * d) * b, t[12] = _ * b, t[13] = (c * m * i - p * h * i + p * n * u - e * m * u - c * n * f + e * h * f) * b, t[14] = (p * a * i - s * m * i - p * n * o + e * m * o + s * n * f - e * a * f) * b, t[15] = (s * h * i - c * a * i + c * n * o - e * h * o - s * n * u + e * a * u) * b, this
    }

    scale(t) {
      const e = this.elements, n = t.x, i = t.y, r = t.z;
      return e[0] *= n, e[4] *= i, e[8] *= r, e[1] *= n, e[5] *= i, e[9] *= r, e[2] *= n, e[6] *= i, e[10] *= r, e[3] *= n, e[7] *= i, e[11] *= r, this
    }

    getMaxScaleOnAxis() {
      const t = this.elements, e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2], n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
          i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
      return Math.sqrt(Math.max(e, n, i))
    }

    makeTranslation(t, e, n) {
      return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1), this
    }

    makeRotationX(t) {
      const e = Math.cos(t), n = Math.sin(t);
      return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this
    }

    makeRotationY(t) {
      const e = Math.cos(t), n = Math.sin(t);
      return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this
    }

    makeRotationZ(t) {
      const e = Math.cos(t), n = Math.sin(t);
      return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
    }

    makeRotationAxis(t, e) {
      const n = Math.cos(e), i = Math.sin(e), r = 1 - n, s = t.x, a = t.y, o = t.z, l = r * s, c = r * a;
      return this.set(l * s + n, l * a - i * o, l * o + i * a, 0, l * a + i * o, c * a + n, c * o - i * s, 0, l * o - i * a, c * o + i * s, r * o * o + n, 0, 0, 0, 0, 1), this
    }

    makeScale(t, e, n) {
      return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this
    }

    makeShear(t, e, n, i, r, s) {
      return this.set(1, n, r, 0, t, 1, s, 0, e, i, 1, 0, 0, 0, 0, 1), this
    }

    compose(t, e, n) {
      const i = this.elements, r = e._x, s = e._y, a = e._z, o = e._w, l = r + r, c = s + s, h = a + a, u = r * l,
          d = r * c, p = r * h, m = s * c, f = s * h, g = a * h, v = o * l, y = o * c, x = o * h, _ = n.x, w = n.y,
          b = n.z;
      return i[0] = (1 - (m + g)) * _, i[1] = (d + x) * _, i[2] = (p - y) * _, i[3] = 0, i[4] = (d - x) * w, i[5] = (1 - (u + g)) * w, i[6] = (f + v) * w, i[7] = 0, i[8] = (p + y) * b, i[9] = (f - v) * b, i[10] = (1 - (u + m)) * b, i[11] = 0, i[12] = t.x, i[13] = t.y, i[14] = t.z, i[15] = 1, this
    }

    decompose(t, e, n) {
      const i = this.elements;
      let r = Ut.set(i[0], i[1], i[2]).length();
      const s = Ut.set(i[4], i[5], i[6]).length(), a = Ut.set(i[8], i[9], i[10]).length();
      this.determinant() < 0 && (r = -r), t.x = i[12], t.y = i[13], t.z = i[14], Ht.copy(this);
      const o = 1 / r, l = 1 / s, c = 1 / a;
      return Ht.elements[0] *= o, Ht.elements[1] *= o, Ht.elements[2] *= o, Ht.elements[4] *= l, Ht.elements[5] *= l, Ht.elements[6] *= l, Ht.elements[8] *= c, Ht.elements[9] *= c, Ht.elements[10] *= c, e.setFromRotationMatrix(Ht), n.x = r, n.y = s, n.z = a, this
    }

    makePerspective(t, e, n, i, r, s) {
      void 0 === s && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
      const a = this.elements, o = 2 * r / (e - t), l = 2 * r / (n - i), c = (e + t) / (e - t), h = (n + i) / (n - i),
          u = -(s + r) / (s - r), d = -2 * s * r / (s - r);
      return a[0] = o, a[4] = 0, a[8] = c, a[12] = 0, a[1] = 0, a[5] = l, a[9] = h, a[13] = 0, a[2] = 0, a[6] = 0, a[10] = u, a[14] = d, a[3] = 0, a[7] = 0, a[11] = -1, a[15] = 0, this
    }

    makeOrthographic(t, e, n, i, r, s) {
      const a = this.elements, o = 1 / (e - t), l = 1 / (n - i), c = 1 / (s - r), h = (e + t) * o, u = (n + i) * l,
          d = (s + r) * c;
      return a[0] = 2 * o, a[4] = 0, a[8] = 0, a[12] = -h, a[1] = 0, a[5] = 2 * l, a[9] = 0, a[13] = -u, a[2] = 0, a[6] = 0, a[10] = -2 * c, a[14] = -d, a[3] = 0, a[7] = 0, a[11] = 0, a[15] = 1, this
    }

    equals(t) {
      const e = this.elements, n = t.elements;
      for (let t = 0; t < 16; t++) if (e[t] !== n[t]) return !1;
      return !0
    }

    fromArray(t, e = 0) {
      for (let n = 0; n < 16; n++) this.elements[n] = t[n + e];
      return this
    }

    toArray(t = [], e = 0) {
      const n = this.elements;
      return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t[e + 9] = n[9], t[e + 10] = n[10], t[e + 11] = n[11], t[e + 12] = n[12], t[e + 13] = n[13], t[e + 14] = n[14], t[e + 15] = n[15], t
    }
  }

  kt.prototype.isMatrix4 = !0;
  const Ut = new lt, Ht = new kt, Gt = new lt(0, 0, 0), Vt = new lt(1, 1, 1), Wt = new lt, jt = new lt, Xt = new lt,
      Yt = new kt, qt = new ot;

  class Zt {
    constructor(t = 0, e = 0, n = 0, i = Zt.DefaultOrder) {
      this._x = t, this._y = e, this._z = n, this._order = i
    }

    get x() {
      return this._x
    }

    set x(t) {
      this._x = t, this._onChangeCallback()
    }

    get y() {
      return this._y
    }

    set y(t) {
      this._y = t, this._onChangeCallback()
    }

    get z() {
      return this._z
    }

    set z(t) {
      this._z = t, this._onChangeCallback()
    }

    get order() {
      return this._order
    }

    set order(t) {
      this._order = t, this._onChangeCallback()
    }

    set(t, e, n, i = this._order) {
      return this._x = t, this._y = e, this._z = n, this._order = i, this._onChangeCallback(), this
    }

    clone() {
      return new this.constructor(this._x, this._y, this._z, this._order)
    }

    copy(t) {
      return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this
    }

    setFromRotationMatrix(t, e = this._order, n = !0) {
      const i = t.elements, r = i[0], s = i[4], a = i[8], o = i[1], l = i[5], c = i[9], h = i[2], u = i[6], d = i[10];
      switch (e) {
        case"XYZ":
          this._y = Math.asin(V(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(-c, d), this._z = Math.atan2(-s, r)) : (this._x = Math.atan2(u, l), this._z = 0);
          break;
        case"YXZ":
          this._x = Math.asin(-V(c, -1, 1)), Math.abs(c) < .9999999 ? (this._y = Math.atan2(a, d), this._z = Math.atan2(o, l)) : (this._y = Math.atan2(-h, r), this._z = 0);
          break;
        case"ZXY":
          this._x = Math.asin(V(u, -1, 1)), Math.abs(u) < .9999999 ? (this._y = Math.atan2(-h, d), this._z = Math.atan2(-s, l)) : (this._y = 0, this._z = Math.atan2(o, r));
          break;
        case"ZYX":
          this._y = Math.asin(-V(h, -1, 1)), Math.abs(h) < .9999999 ? (this._x = Math.atan2(u, d), this._z = Math.atan2(o, r)) : (this._x = 0, this._z = Math.atan2(-s, l));
          break;
        case"YZX":
          this._z = Math.asin(V(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(-c, l), this._y = Math.atan2(-h, r)) : (this._x = 0, this._y = Math.atan2(a, d));
          break;
        case"XZY":
          this._z = Math.asin(-V(s, -1, 1)), Math.abs(s) < .9999999 ? (this._x = Math.atan2(u, l), this._y = Math.atan2(a, r)) : (this._x = Math.atan2(-c, d), this._y = 0);
          break;
        default:
          console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e)
      }
      return this._order = e, !0 === n && this._onChangeCallback(), this
    }

    setFromQuaternion(t, e, n) {
      return Yt.makeRotationFromQuaternion(t), this.setFromRotationMatrix(Yt, e, n)
    }

    setFromVector3(t, e = this._order) {
      return this.set(t.x, t.y, t.z, e)
    }

    reorder(t) {
      return qt.setFromEuler(this), this.setFromQuaternion(qt, t)
    }

    equals(t) {
      return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order
    }

    fromArray(t) {
      return this._x = t[0], this._y = t[1], this._z = t[2], void 0 !== t[3] && (this._order = t[3]), this._onChangeCallback(), this
    }

    toArray(t = [], e = 0) {
      return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t
    }

    toVector3(t) {
      return t ? t.set(this._x, this._y, this._z) : new lt(this._x, this._y, this._z)
    }

    _onChange(t) {
      return this._onChangeCallback = t, this
    }

    _onChangeCallback() {
    }
  }

  Zt.prototype.isEuler = !0, Zt.DefaultOrder = "XYZ", Zt.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];

  class Jt {
    constructor() {
      this.mask = 1
    }

    set(t) {
      this.mask = 1 << t | 0
    }

    enable(t) {
      this.mask |= 1 << t | 0
    }

    enableAll() {
      this.mask = -1
    }

    toggle(t) {
      this.mask ^= 1 << t | 0
    }

    disable(t) {
      this.mask &= ~(1 << t | 0)
    }

    disableAll() {
      this.mask = 0
    }

    test(t) {
      return 0 != (this.mask & t.mask)
    }
  }

  let Qt = 0;
  const Kt = new lt, $t = new ot, te = new kt, ee = new lt, ne = new lt, ie = new lt, re = new ot, se = new lt(1, 0, 0),
      ae = new lt(0, 1, 0), oe = new lt(0, 0, 1), le = {type: "added"}, ce = {type: "removed"};

  class he extends B {
    constructor() {
      super(), Object.defineProperty(this, "id", {value: Qt++}), this.uuid = G(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = he.DefaultUp.clone();
      const t = new lt, e = new Zt, n = new ot, i = new lt(1, 1, 1);
      e._onChange((function () {
        n.setFromEuler(e, !1)
      })), n._onChange((function () {
        e.setFromQuaternion(n, void 0, !1)
      })), Object.defineProperties(this, {
        position: {configurable: !0, enumerable: !0, value: t},
        rotation: {configurable: !0, enumerable: !0, value: e},
        quaternion: {configurable: !0, enumerable: !0, value: n},
        scale: {configurable: !0, enumerable: !0, value: i},
        modelViewMatrix: {value: new kt},
        normalMatrix: {value: new Q}
      }), this.matrix = new kt, this.matrixWorld = new kt, this.matrixAutoUpdate = he.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new Jt, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {}
    }

    onBeforeRender() {
    }

    onAfterRender() {
    }

    applyMatrix4(t) {
      this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale)
    }

    applyQuaternion(t) {
      return this.quaternion.premultiply(t), this
    }

    setRotationFromAxisAngle(t, e) {
      this.quaternion.setFromAxisAngle(t, e)
    }

    setRotationFromEuler(t) {
      this.quaternion.setFromEuler(t, !0)
    }

    setRotationFromMatrix(t) {
      this.quaternion.setFromRotationMatrix(t)
    }

    setRotationFromQuaternion(t) {
      this.quaternion.copy(t)
    }

    rotateOnAxis(t, e) {
      return $t.setFromAxisAngle(t, e), this.quaternion.multiply($t), this
    }

    rotateOnWorldAxis(t, e) {
      return $t.setFromAxisAngle(t, e), this.quaternion.premultiply($t), this
    }

    rotateX(t) {
      return this.rotateOnAxis(se, t)
    }

    rotateY(t) {
      return this.rotateOnAxis(ae, t)
    }

    rotateZ(t) {
      return this.rotateOnAxis(oe, t)
    }

    translateOnAxis(t, e) {
      return Kt.copy(t).applyQuaternion(this.quaternion), this.position.add(Kt.multiplyScalar(e)), this
    }

    translateX(t) {
      return this.translateOnAxis(se, t)
    }

    translateY(t) {
      return this.translateOnAxis(ae, t)
    }

    translateZ(t) {
      return this.translateOnAxis(oe, t)
    }

    localToWorld(t) {
      return t.applyMatrix4(this.matrixWorld)
    }

    worldToLocal(t) {
      return t.applyMatrix4(te.copy(this.matrixWorld).invert())
    }

    lookAt(t, e, n) {
      t.isVector3 ? ee.copy(t) : ee.set(t, e, n);
      const i = this.parent;
      this.updateWorldMatrix(!0, !1), ne.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? te.lookAt(ne, ee, this.up) : te.lookAt(ee, ne, this.up), this.quaternion.setFromRotationMatrix(te), i && (te.extractRotation(i.matrixWorld), $t.setFromRotationMatrix(te), this.quaternion.premultiply($t.invert()))
    }

    add(t) {
      if (arguments.length > 1) {
        for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
        return this
      }
      return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (null !== t.parent && t.parent.remove(t), t.parent = this, this.children.push(t), t.dispatchEvent(le)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this)
    }

    remove(t) {
      if (arguments.length > 1) {
        for (let t = 0; t < arguments.length; t++) this.remove(arguments[t]);
        return this
      }
      const e = this.children.indexOf(t);
      return -1 !== e && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(ce)), this
    }

    removeFromParent() {
      const t = this.parent;
      return null !== t && t.remove(this), this
    }

    clear() {
      for (let t = 0; t < this.children.length; t++) {
        const e = this.children[t];
        e.parent = null, e.dispatchEvent(ce)
      }
      return this.children.length = 0, this
    }

    attach(t) {
      return this.updateWorldMatrix(!0, !1), te.copy(this.matrixWorld).invert(), null !== t.parent && (t.parent.updateWorldMatrix(!0, !1), te.multiply(t.parent.matrixWorld)), t.applyMatrix4(te), this.add(t), t.updateWorldMatrix(!1, !0), this
    }

    getObjectById(t) {
      return this.getObjectByProperty("id", t)
    }

    getObjectByName(t) {
      return this.getObjectByProperty("name", t)
    }

    getObjectByProperty(t, e) {
      if (this[t] === e) return this;
      for (let n = 0, i = this.children.length; n < i; n++) {
        const i = this.children[n].getObjectByProperty(t, e);
        if (void 0 !== i) return i
      }
    }

    getWorldPosition(t) {
      return this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld)
    }

    getWorldQuaternion(t) {
      return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ne, t, ie), t
    }

    getWorldScale(t) {
      return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ne, re, t), t
    }

    getWorldDirection(t) {
      this.updateWorldMatrix(!0, !1);
      const e = this.matrixWorld.elements;
      return t.set(e[8], e[9], e[10]).normalize()
    }

    raycast() {
    }

    traverse(t) {
      t(this);
      const e = this.children;
      for (let n = 0, i = e.length; n < i; n++) e[n].traverse(t)
    }

    traverseVisible(t) {
      if (!1 === this.visible) return;
      t(this);
      const e = this.children;
      for (let n = 0, i = e.length; n < i; n++) e[n].traverseVisible(t)
    }

    traverseAncestors(t) {
      const e = this.parent;
      null !== e && (t(e), e.traverseAncestors(t))
    }

    updateMatrix() {
      this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
    }

    updateMatrixWorld(t) {
      this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0);
      const e = this.children;
      for (let n = 0, i = e.length; n < i; n++) e[n].updateMatrixWorld(t)
    }

    updateWorldMatrix(t, e) {
      const n = this.parent;
      if (!0 === t && null !== n && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), !0 === e) {
        const t = this.children;
        for (let e = 0, n = t.length; e < n; e++) t[e].updateWorldMatrix(!1, !0)
      }
    }

    toJSON(t) {
      const e = void 0 === t || "string" == typeof t, n = {};
      e && (t = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {}
      }, n.metadata = {version: 4.5, type: "Object", generator: "Object3D.toJSON"});
      const i = {};

      function r(e, n) {
        return void 0 === e[n.uuid] && (e[n.uuid] = n.toJSON(t)), n.uuid
      }

      if (i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), !0 === this.castShadow && (i.castShadow = !0), !0 === this.receiveShadow && (i.receiveShadow = !0), !1 === this.visible && (i.visible = !1), !1 === this.frustumCulled && (i.frustumCulled = !1), 0 !== this.renderOrder && (i.renderOrder = this.renderOrder), "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), !1 === this.matrixAutoUpdate && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), null !== this.instanceColor && (i.instanceColor = this.instanceColor.toJSON())), this.isScene) this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(t).uuid)), this.environment && this.environment.isTexture && (i.environment = this.environment.toJSON(t).uuid); else if (this.isMesh || this.isLine || this.isPoints) {
        i.geometry = r(t.geometries, this.geometry);
        const e = this.geometry.parameters;
        if (void 0 !== e && void 0 !== e.shapes) {
          const n = e.shapes;
          if (Array.isArray(n)) for (let e = 0, i = n.length; e < i; e++) {
            const i = n[e];
            r(t.shapes, i)
          } else r(t.shapes, n)
        }
      }
      if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), void 0 !== this.skeleton && (r(t.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), void 0 !== this.material) if (Array.isArray(this.material)) {
        const e = [];
        for (let n = 0, i = this.material.length; n < i; n++) e.push(r(t.materials, this.material[n]));
        i.material = e
      } else i.material = r(t.materials, this.material);
      if (this.children.length > 0) {
        i.children = [];
        for (let e = 0; e < this.children.length; e++) i.children.push(this.children[e].toJSON(t).object)
      }
      if (this.animations.length > 0) {
        i.animations = [];
        for (let e = 0; e < this.animations.length; e++) {
          const n = this.animations[e];
          i.animations.push(r(t.animations, n))
        }
      }
      if (e) {
        const e = s(t.geometries), i = s(t.materials), r = s(t.textures), a = s(t.images), o = s(t.shapes),
            l = s(t.skeletons), c = s(t.animations);
        e.length > 0 && (n.geometries = e), i.length > 0 && (n.materials = i), r.length > 0 && (n.textures = r), a.length > 0 && (n.images = a), o.length > 0 && (n.shapes = o), l.length > 0 && (n.skeletons = l), c.length > 0 && (n.animations = c)
      }
      return n.object = i, n;

      function s(t) {
        const e = [];
        for (const n in t) {
          const i = t[n];
          delete i.metadata, e.push(i)
        }
        return e
      }
    }

    clone(t) {
      return (new this.constructor).copy(this, t)
    }

    copy(t, e = !0) {
      if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.userData = JSON.parse(JSON.stringify(t.userData)), !0 === e) for (let e = 0; e < t.children.length; e++) {
        const n = t.children[e];
        this.add(n.clone())
      }
      return this
    }
  }

  he.DefaultUp = new lt(0, 1, 0), he.DefaultMatrixAutoUpdate = !0, he.prototype.isObject3D = !0;
  const ue = new lt, de = new lt, pe = new lt, me = new lt, fe = new lt, ge = new lt, ve = new lt, ye = new lt,
      xe = new lt, _e = new lt;

  class we {
    constructor(t = new lt, e = new lt, n = new lt) {
      this.a = t, this.b = e, this.c = n
    }

    static getNormal(t, e, n, i) {
      i.subVectors(n, e), ue.subVectors(t, e), i.cross(ue);
      const r = i.lengthSq();
      return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0)
    }

    static getBarycoord(t, e, n, i, r) {
      ue.subVectors(i, e), de.subVectors(n, e), pe.subVectors(t, e);
      const s = ue.dot(ue), a = ue.dot(de), o = ue.dot(pe), l = de.dot(de), c = de.dot(pe), h = s * l - a * a;
      if (0 === h) return r.set(-2, -1, -1);
      const u = 1 / h, d = (l * o - a * c) * u, p = (s * c - a * o) * u;
      return r.set(1 - d - p, p, d)
    }

    static containsPoint(t, e, n, i) {
      return this.getBarycoord(t, e, n, i, me), me.x >= 0 && me.y >= 0 && me.x + me.y <= 1
    }

    static getUV(t, e, n, i, r, s, a, o) {
      return this.getBarycoord(t, e, n, i, me), o.set(0, 0), o.addScaledVector(r, me.x), o.addScaledVector(s, me.y), o.addScaledVector(a, me.z), o
    }

    static isFrontFacing(t, e, n, i) {
      return ue.subVectors(n, e), de.subVectors(t, e), ue.cross(de).dot(i) < 0
    }

    set(t, e, n) {
      return this.a.copy(t), this.b.copy(e), this.c.copy(n), this
    }

    setFromPointsAndIndices(t, e, n, i) {
      return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[i]), this
    }

    clone() {
      return (new this.constructor).copy(this)
    }

    copy(t) {
      return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this
    }

    getArea() {
      return ue.subVectors(this.c, this.b), de.subVectors(this.a, this.b), .5 * ue.cross(de).length()
    }

    getMidpoint(t) {
      return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
    }

    getNormal(t) {
      return we.getNormal(this.a, this.b, this.c, t)
    }

    getPlane(t) {
      return t.setFromCoplanarPoints(this.a, this.b, this.c)
    }

    getBarycoord(t, e) {
      return we.getBarycoord(t, this.a, this.b, this.c, e)
    }

    getUV(t, e, n, i, r) {
      return we.getUV(t, this.a, this.b, this.c, e, n, i, r)
    }

    containsPoint(t) {
      return we.containsPoint(t, this.a, this.b, this.c)
    }

    isFrontFacing(t) {
      return we.isFrontFacing(this.a, this.b, this.c, t)
    }

    intersectsBox(t) {
      return t.intersectsTriangle(this)
    }

    closestPointToPoint(t, e) {
      const n = this.a, i = this.b, r = this.c;
      let s, a;
      fe.subVectors(i, n), ge.subVectors(r, n), ye.subVectors(t, n);
      const o = fe.dot(ye), l = ge.dot(ye);
      if (o <= 0 && l <= 0) return e.copy(n);
      xe.subVectors(t, i);
      const c = fe.dot(xe), h = ge.dot(xe);
      if (c >= 0 && h <= c) return e.copy(i);
      const u = o * h - c * l;
      if (u <= 0 && o >= 0 && c <= 0) return s = o / (o - c), e.copy(n).addScaledVector(fe, s);
      _e.subVectors(t, r);
      const d = fe.dot(_e), p = ge.dot(_e);
      if (p >= 0 && d <= p) return e.copy(r);
      const m = d * l - o * p;
      if (m <= 0 && l >= 0 && p <= 0) return a = l / (l - p), e.copy(n).addScaledVector(ge, a);
      const f = c * p - d * h;
      if (f <= 0 && h - c >= 0 && d - p >= 0) return ve.subVectors(r, i), a = (h - c) / (h - c + (d - p)), e.copy(i).addScaledVector(ve, a);
      const g = 1 / (f + m + u);
      return s = m * g, a = u * g, e.copy(n).addScaledVector(fe, s).addScaledVector(ge, a)
    }

    equals(t) {
      return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c)
    }
  }

  let be = 0;

  class Me extends B {
    constructor() {
      super(), Object.defineProperty(this, "id", {value: be++}), this.uuid = G(), this.name = "", this.type = "Material", this.fog = !0, this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = n, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = D, this.stencilZFail = D, this.stencilZPass = D, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaTest = 0, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0
    }

    onBuild() {
    }

    onBeforeCompile() {
    }

    customProgramCacheKey() {
      return this.onBeforeCompile.toString()
    }

    setValues(t) {
      if (void 0 !== t) for (const e in t) {
        const n = t[e];
        if (void 0 === n) {
          console.warn("THREE.Material: '" + e + "' parameter is undefined.");
          continue
        }
        if ("shading" === e) {
          console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === n;
          continue
        }
        const i = this[e];
        void 0 !== i ? i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[e] = n : console.warn("THREE." + this.type + ": '" + e + "' is not a property of this material.")
      }
    }

    toJSON(t) {
      const e = void 0 === t || "string" == typeof t;
      e && (t = {textures: {}, images: {}});
      const n = {metadata: {version: 4.5, type: "Material", generator: "Material.toJSON"}};

      function i(t) {
        const e = [];
        for (const n in t) {
          const i = t[n];
          delete i.metadata, e.push(i)
        }
        return e
      }

      if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), void 0 !== this.roughness && (n.roughness = this.roughness), void 0 !== this.metalness && (n.metalness = this.metalness), this.sheen && this.sheen.isColor && (n.sheen = this.sheen.getHex()), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && 1 !== this.emissiveIntensity && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), void 0 !== this.specularIntensity && (n.specularIntensity = this.specularIntensity), this.specularTint && this.specularTint.isColor && (n.specularTint = this.specularTint.getHex()), void 0 !== this.shininess && (n.shininess = this.shininess), void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat), void 0 !== this.clearcoatRoughness && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid), this.specularTintMap && this.specularTintMap.isTexture && (n.specularTintMap = this.specularTintMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid, void 0 !== this.combine && (n.combine = this.combine)), void 0 !== this.envMapIntensity && (n.envMapIntensity = this.envMapIntensity), void 0 !== this.reflectivity && (n.reflectivity = this.reflectivity), void 0 !== this.refractionRatio && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid), void 0 !== this.transmission && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(t).uuid), void 0 !== this.thickness && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(t).uuid), void 0 !== this.attenuationDistance && (n.attenuationDistance = this.attenuationDistance), void 0 !== this.attenuationTint && (n.attenuationTint = this.attenuationTint.getHex()), void 0 !== this.size && (n.size = this.size), null !== this.shadowSide && (n.shadowSide = this.shadowSide), void 0 !== this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation), 1 !== this.blending && (n.blending = this.blending), 0 !== this.side && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), !0 === this.transparent && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.colorWrite = this.colorWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, this.rotation && 0 !== this.rotation && (n.rotation = this.rotation), !0 === this.polygonOffset && (n.polygonOffset = !0), 0 !== this.polygonOffsetFactor && (n.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth && 1 !== this.linewidth && (n.linewidth = this.linewidth), void 0 !== this.dashSize && (n.dashSize = this.dashSize), void 0 !== this.gapSize && (n.gapSize = this.gapSize), void 0 !== this.scale && (n.scale = this.scale), !0 === this.dithering && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), !0 === this.alphaToCoverage && (n.alphaToCoverage = this.alphaToCoverage), !0 === this.premultipliedAlpha && (n.premultipliedAlpha = this.premultipliedAlpha), !0 === this.wireframe && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (n.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (n.wireframeLinejoin = this.wireframeLinejoin), !0 === this.flatShading && (n.flatShading = this.flatShading), !1 === this.visible && (n.visible = !1), !1 === this.toneMapped && (n.toneMapped = !1), "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData), e) {
        const e = i(t.textures), r = i(t.images);
        e.length > 0 && (n.textures = e), r.length > 0 && (n.images = r)
      }
      return n
    }

    clone() {
      return (new this.constructor).copy(this)
    }

    copy(t) {
      this.name = t.name, this.fog = t.fog, this.blending = t.blending, this.side = t.side, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite;
      const e = t.clippingPlanes;
      let n = null;
      if (null !== e) {
        const t = e.length;
        n = new Array(t);
        for (let i = 0; i !== t; ++i) n[i] = e[i].clone()
      }
      return this.clippingPlanes = n, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.alphaToCoverage = t.alphaToCoverage, this.premultipliedAlpha = t.premultipliedAlpha, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this
    }

    dispose() {
      this.dispatchEvent({type: "dispose"})
    }

    set needsUpdate(t) {
      !0 === t && this.version++
    }
  }

  Me.prototype.isMaterial = !0;
  const Se = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
  }, Ee = {h: 0, s: 0, l: 0}, Te = {h: 0, s: 0, l: 0};

  function Le(t, e, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - n) : t
  }

  function Ae(t) {
    return t < .04045 ? .0773993808 * t : Math.pow(.9478672986 * t + .0521327014, 2.4)
  }

  function Ce(t) {
    return t < .0031308 ? 12.92 * t : 1.055 * Math.pow(t, .41666) - .055
  }

  class Pe {
    constructor(t, e, n) {
      return void 0 === e && void 0 === n ? this.set(t) : this.setRGB(t, e, n)
    }

    set(t) {
      return t && t.isColor ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t), this
    }

    setScalar(t) {
      return this.r = t, this.g = t, this.b = t, this
    }

    setHex(t) {
      return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (255 & t) / 255, this
    }

    setRGB(t, e, n) {
      return this.r = t, this.g = e, this.b = n, this
    }

    setHSL(t, e, n) {
      if (t = W(t, 1), e = V(e, 0, 1), n = V(n, 0, 1), 0 === e) this.r = this.g = this.b = n; else {
        const i = n <= .5 ? n * (1 + e) : n + e - n * e, r = 2 * n - i;
        this.r = Le(r, i, t + 1 / 3), this.g = Le(r, i, t), this.b = Le(r, i, t - 1 / 3)
      }
      return this
    }

    setStyle(t) {
      function e(e) {
        void 0 !== e && parseFloat(e) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.")
      }

      let n;
      if (n = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)) {
        let t;
        const i = n[1], r = n[2];
        switch (i) {
          case"rgb":
          case"rgba":
            if (t = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)) return this.r = Math.min(255, parseInt(t[1], 10)) / 255, this.g = Math.min(255, parseInt(t[2], 10)) / 255, this.b = Math.min(255, parseInt(t[3], 10)) / 255, e(t[4]), this;
            if (t = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)) return this.r = Math.min(100, parseInt(t[1], 10)) / 100, this.g = Math.min(100, parseInt(t[2], 10)) / 100, this.b = Math.min(100, parseInt(t[3], 10)) / 100, e(t[4]), this;
            break;
          case"hsl":
          case"hsla":
            if (t = /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)) {
              const n = parseFloat(t[1]) / 360, i = parseInt(t[2], 10) / 100, r = parseInt(t[3], 10) / 100;
              return e(t[4]), this.setHSL(n, i, r)
            }
        }
      } else if (n = /^\#([A-Fa-f\d]+)$/.exec(t)) {
        const t = n[1], e = t.length;
        if (3 === e) return this.r = parseInt(t.charAt(0) + t.charAt(0), 16) / 255, this.g = parseInt(t.charAt(1) + t.charAt(1), 16) / 255, this.b = parseInt(t.charAt(2) + t.charAt(2), 16) / 255, this;
        if (6 === e) return this.r = parseInt(t.charAt(0) + t.charAt(1), 16) / 255, this.g = parseInt(t.charAt(2) + t.charAt(3), 16) / 255, this.b = parseInt(t.charAt(4) + t.charAt(5), 16) / 255, this
      }
      return t && t.length > 0 ? this.setColorName(t) : this
    }

    setColorName(t) {
      const e = Se[t.toLowerCase()];
      return void 0 !== e ? this.setHex(e) : console.warn("THREE.Color: Unknown color " + t), this
    }

    clone() {
      return new this.constructor(this.r, this.g, this.b)
    }

    copy(t) {
      return this.r = t.r, this.g = t.g, this.b = t.b, this
    }

    copyGammaToLinear(t, e = 2) {
      return this.r = Math.pow(t.r, e), this.g = Math.pow(t.g, e), this.b = Math.pow(t.b, e), this
    }

    copyLinearToGamma(t, e = 2) {
      const n = e > 0 ? 1 / e : 1;
      return this.r = Math.pow(t.r, n), this.g = Math.pow(t.g, n), this.b = Math.pow(t.b, n), this
    }

    convertGammaToLinear(t) {
      return this.copyGammaToLinear(this, t), this
    }

    convertLinearToGamma(t) {
      return this.copyLinearToGamma(this, t), this
    }

    copySRGBToLinear(t) {
      return this.r = Ae(t.r), this.g = Ae(t.g), this.b = Ae(t.b), this
    }

    copyLinearToSRGB(t) {
      return this.r = Ce(t.r), this.g = Ce(t.g), this.b = Ce(t.b), this
    }

    convertSRGBToLinear() {
      return this.copySRGBToLinear(this), this
    }

    convertLinearToSRGB() {
      return this.copyLinearToSRGB(this), this
    }

    getHex() {
      return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
    }

    getHexString() {
      return ("000000" + this.getHex().toString(16)).slice(-6)
    }

    getHSL(t) {
      const e = this.r, n = this.g, i = this.b, r = Math.max(e, n, i), s = Math.min(e, n, i);
      let a, o;
      const l = (s + r) / 2;
      if (s === r) a = 0, o = 0; else {
        const t = r - s;
        switch (o = l <= .5 ? t / (r + s) : t / (2 - r - s), r) {
          case e:
            a = (n - i) / t + (n < i ? 6 : 0);
            break;
          case n:
            a = (i - e) / t + 2;
            break;
          case i:
            a = (e - n) / t + 4
        }
        a /= 6
      }
      return t.h = a, t.s = o, t.l = l, t
    }

    getStyle() {
      return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
    }

    offsetHSL(t, e, n) {
      return this.getHSL(Ee), Ee.h += t, Ee.s += e, Ee.l += n, this.setHSL(Ee.h, Ee.s, Ee.l), this
    }

    add(t) {
      return this.r += t.r, this.g += t.g, this.b += t.b, this
    }

    addColors(t, e) {
      return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this
    }

    addScalar(t) {
      return this.r += t, this.g += t, this.b += t, this
    }

    sub(t) {
      return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this
    }

    multiply(t) {
      return this.r *= t.r, this.g *= t.g, this.b *= t.b, this
    }

    multiplyScalar(t) {
      return this.r *= t, this.g *= t, this.b *= t, this
    }

    lerp(t, e) {
      return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this
    }

    lerpColors(t, e, n) {
      return this.r = t.r + (e.r - t.r) * n, this.g = t.g + (e.g - t.g) * n, this.b = t.b + (e.b - t.b) * n, this
    }

    lerpHSL(t, e) {
      this.getHSL(Ee), t.getHSL(Te);
      const n = j(Ee.h, Te.h, e), i = j(Ee.s, Te.s, e), r = j(Ee.l, Te.l, e);
      return this.setHSL(n, i, r), this
    }

    equals(t) {
      return t.r === this.r && t.g === this.g && t.b === this.b
    }

    fromArray(t, e = 0) {
      return this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this
    }

    toArray(t = [], e = 0) {
      return t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t
    }

    fromBufferAttribute(t, e) {
      return this.r = t.getX(e), this.g = t.getY(e), this.b = t.getZ(e), !0 === t.normalized && (this.r /= 255, this.g /= 255, this.b /= 255), this
    }

    toJSON() {
      return this.getHex()
    }
  }

  Pe.NAMES = Se, Pe.prototype.isColor = !0, Pe.prototype.r = 1, Pe.prototype.g = 1, Pe.prototype.b = 1;

  class Re extends Me {
    constructor(t) {
      super(), this.type = "MeshBasicMaterial", this.color = new Pe(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.setValues(t)
    }

    copy(t) {
      return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this
    }
  }

  Re.prototype.isMeshBasicMaterial = !0;
  const Ie = new lt, De = new J;

  class Ne {
    constructor(t, e, n) {
      if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
      this.name = "", this.array = t, this.itemSize = e, this.count = void 0 !== t ? t.length / e : 0, this.normalized = !0 === n, this.usage = N, this.updateRange = {
        offset: 0,
        count: -1
      }, this.version = 0
    }

    onUploadCallback() {
    }

    set needsUpdate(t) {
      !0 === t && this.version++
    }

    setUsage(t) {
      return this.usage = t, this
    }

    copy(t) {
      return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this
    }

    copyAt(t, e, n) {
      t *= this.itemSize, n *= e.itemSize;
      for (let i = 0, r = this.itemSize; i < r; i++) this.array[t + i] = e.array[n + i];
      return this
    }

    copyArray(t) {
      return this.array.set(t), this
    }

    copyColorsArray(t) {
      const e = this.array;
      let n = 0;
      for (let i = 0, r = t.length; i < r; i++) {
        let r = t[i];
        void 0 === r && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", i), r = new Pe), e[n++] = r.r, e[n++] = r.g, e[n++] = r.b
      }
      return this
    }

    copyVector2sArray(t) {
      const e = this.array;
      let n = 0;
      for (let i = 0, r = t.length; i < r; i++) {
        let r = t[i];
        void 0 === r && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", i), r = new J), e[n++] = r.x, e[n++] = r.y
      }
      return this
    }

    copyVector3sArray(t) {
      const e = this.array;
      let n = 0;
      for (let i = 0, r = t.length; i < r; i++) {
        let r = t[i];
        void 0 === r && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", i), r = new lt), e[n++] = r.x, e[n++] = r.y, e[n++] = r.z
      }
      return this
    }

    copyVector4sArray(t) {
      const e = this.array;
      let n = 0;
      for (let i = 0, r = t.length; i < r; i++) {
        let r = t[i];
        void 0 === r && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", i), r = new rt), e[n++] = r.x, e[n++] = r.y, e[n++] = r.z, e[n++] = r.w
      }
      return this
    }

    applyMatrix3(t) {
      if (2 === this.itemSize) for (let e = 0, n = this.count; e < n; e++) De.fromBufferAttribute(this, e), De.applyMatrix3(t), this.setXY(e, De.x, De.y); else if (3 === this.itemSize) for (let e = 0, n = this.count; e < n; e++) Ie.fromBufferAttribute(this, e), Ie.applyMatrix3(t), this.setXYZ(e, Ie.x, Ie.y, Ie.z);
      return this
    }

    applyMatrix4(t) {
      for (let e = 0, n = this.count; e < n; e++) Ie.x = this.getX(e), Ie.y = this.getY(e), Ie.z = this.getZ(e), Ie.applyMatrix4(t), this.setXYZ(e, Ie.x, Ie.y, Ie.z);
      return this
    }

    applyNormalMatrix(t) {
      for (let e = 0, n = this.count; e < n; e++) Ie.x = this.getX(e), Ie.y = this.getY(e), Ie.z = this.getZ(e), Ie.applyNormalMatrix(t), this.setXYZ(e, Ie.x, Ie.y, Ie.z);
      return this
    }

    transformDirection(t) {
      for (let e = 0, n = this.count; e < n; e++) Ie.x = this.getX(e), Ie.y = this.getY(e), Ie.z = this.getZ(e), Ie.transformDirection(t), this.setXYZ(e, Ie.x, Ie.y, Ie.z);
      return this
    }

    set(t, e = 0) {
      return this.array.set(t, e), this
    }

    getX(t) {
      return this.array[t * this.itemSize]
    }

    setX(t, e) {
      return this.array[t * this.itemSize] = e, this
    }

    getY(t) {
      return this.array[t * this.itemSize + 1]
    }

    setY(t, e) {
      return this.array[t * this.itemSize + 1] = e, this
    }

    getZ(t) {
      return this.array[t * this.itemSize + 2]
    }

    setZ(t, e) {
      return this.array[t * this.itemSize + 2] = e, this
    }

    getW(t) {
      return this.array[t * this.itemSize + 3]
    }

    setW(t, e) {
      return this.array[t * this.itemSize + 3] = e, this
    }

    setXY(t, e, n) {
      return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this
    }

    setXYZ(t, e, n, i) {
      return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this
    }

    setXYZW(t, e, n, i, r) {
      return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this.array[t + 3] = r, this
    }

    onUpload(t) {
      return this.onUploadCallback = t, this
    }

    clone() {
      return new this.constructor(this.array, this.itemSize).copy(this)
    }

    toJSON() {
      const t = {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: Array.prototype.slice.call(this.array),
        normalized: this.normalized
      };
      return "" !== this.name && (t.name = this.name), this.usage !== N && (t.usage = this.usage), 0 === this.updateRange.offset && -1 === this.updateRange.count || (t.updateRange = this.updateRange), t
    }
  }

  Ne.prototype.isBufferAttribute = !0;

  class ze extends Ne {
    constructor(t, e, n) {
      super(new Uint16Array(t), e, n)
    }
  }

  class Oe extends Ne {
    constructor(t, e, n) {
      super(new Uint32Array(t), e, n)
    }
  }

  (class extends Ne {
    constructor(t, e, n) {
      super(new Uint16Array(t), e, n)
    }
  }).prototype.isFloat16BufferAttribute = !0;

  class Be extends Ne {
    constructor(t, e, n) {
      super(new Float32Array(t), e, n)
    }
  }

  function Fe(t) {
    if (0 === t.length) return -1 / 0;
    let e = t[0];
    for (let n = 1, i = t.length; n < i; ++n) t[n] > e && (e = t[n]);
    return e
  }

  Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array;
  let ke = 0;
  const Ue = new kt, He = new he, Ge = new lt, Ve = new ut, We = new ut, je = new lt;

  class Xe extends B {
    constructor() {
      super(), Object.defineProperty(this, "id", {value: ke++}), this.uuid = G(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
        start: 0,
        count: 1 / 0
      }, this.userData = {}
    }

    getIndex() {
      return this.index
    }

    setIndex(t) {
      return Array.isArray(t) ? this.index = new (Fe(t) > 65535 ? Oe : ze)(t, 1) : this.index = t, this
    }

    getAttribute(t) {
      return this.attributes[t]
    }

    setAttribute(t, e) {
      return this.attributes[t] = e, this
    }

    deleteAttribute(t) {
      return delete this.attributes[t], this
    }

    hasAttribute(t) {
      return void 0 !== this.attributes[t]
    }

    addGroup(t, e, n = 0) {
      this.groups.push({start: t, count: e, materialIndex: n})
    }

    clearGroups() {
      this.groups = []
    }

    setDrawRange(t, e) {
      this.drawRange.start = t, this.drawRange.count = e
    }

    applyMatrix4(t) {
      const e = this.attributes.position;
      void 0 !== e && (e.applyMatrix4(t), e.needsUpdate = !0);
      const n = this.attributes.normal;
      if (void 0 !== n) {
        const e = (new Q).getNormalMatrix(t);
        n.applyNormalMatrix(e), n.needsUpdate = !0
      }
      const i = this.attributes.tangent;
      return void 0 !== i && (i.transformDirection(t), i.needsUpdate = !0), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this
    }

    applyQuaternion(t) {
      return Ue.makeRotationFromQuaternion(t), this.applyMatrix4(Ue), this
    }

    rotateX(t) {
      return Ue.makeRotationX(t), this.applyMatrix4(Ue), this
    }

    rotateY(t) {
      return Ue.makeRotationY(t), this.applyMatrix4(Ue), this
    }

    rotateZ(t) {
      return Ue.makeRotationZ(t), this.applyMatrix4(Ue), this
    }

    translate(t, e, n) {
      return Ue.makeTranslation(t, e, n), this.applyMatrix4(Ue), this
    }

    scale(t, e, n) {
      return Ue.makeScale(t, e, n), this.applyMatrix4(Ue), this
    }

    lookAt(t) {
      return He.lookAt(t), He.updateMatrix(), this.applyMatrix4(He.matrix), this
    }

    center() {
      return this.computeBoundingBox(), this.boundingBox.getCenter(Ge).negate(), this.translate(Ge.x, Ge.y, Ge.z), this
    }

    setFromPoints(t) {
      const e = [];
      for (let n = 0, i = t.length; n < i; n++) {
        const i = t[n];
        e.push(i.x, i.y, i.z || 0)
      }
      return this.setAttribute("position", new Be(e, 3)), this
    }

    computeBoundingBox() {
      null === this.boundingBox && (this.boundingBox = new ut);
      const t = this.attributes.position, e = this.morphAttributes.position;
      if (t && t.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingBox.set(new lt(-1 / 0, -1 / 0, -1 / 0), new lt(1 / 0, 1 / 0, 1 / 0));
      if (void 0 !== t) {
        if (this.boundingBox.setFromBufferAttribute(t), e) for (let t = 0, n = e.length; t < n; t++) {
          const n = e[t];
          Ve.setFromBufferAttribute(n), this.morphTargetsRelative ? (je.addVectors(this.boundingBox.min, Ve.min), this.boundingBox.expandByPoint(je), je.addVectors(this.boundingBox.max, Ve.max), this.boundingBox.expandByPoint(je)) : (this.boundingBox.expandByPoint(Ve.min), this.boundingBox.expandByPoint(Ve.max))
        }
      } else this.boundingBox.makeEmpty();
      (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
    }

    computeBoundingSphere() {
      null === this.boundingSphere && (this.boundingSphere = new Pt);
      const t = this.attributes.position, e = this.morphAttributes.position;
      if (t && t.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingSphere.set(new lt, 1 / 0);
      if (t) {
        const n = this.boundingSphere.center;
        if (Ve.setFromBufferAttribute(t), e) for (let t = 0, n = e.length; t < n; t++) {
          const n = e[t];
          We.setFromBufferAttribute(n), this.morphTargetsRelative ? (je.addVectors(Ve.min, We.min), Ve.expandByPoint(je), je.addVectors(Ve.max, We.max), Ve.expandByPoint(je)) : (Ve.expandByPoint(We.min), Ve.expandByPoint(We.max))
        }
        Ve.getCenter(n);
        let i = 0;
        for (let e = 0, r = t.count; e < r; e++) je.fromBufferAttribute(t, e), i = Math.max(i, n.distanceToSquared(je));
        if (e) for (let r = 0, s = e.length; r < s; r++) {
          const s = e[r], a = this.morphTargetsRelative;
          for (let e = 0, r = s.count; e < r; e++) je.fromBufferAttribute(s, e), a && (Ge.fromBufferAttribute(t, e), je.add(Ge)), i = Math.max(i, n.distanceToSquared(je))
        }
        this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
      }
    }

    computeFaceNormals() {
    }

    computeTangents() {
      const t = this.index, e = this.attributes;
      if (null === t || void 0 === e.position || void 0 === e.normal || void 0 === e.uv) return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      const n = t.array, i = e.position.array, r = e.normal.array, s = e.uv.array, a = i.length / 3;
      void 0 === e.tangent && this.setAttribute("tangent", new Ne(new Float32Array(4 * a), 4));
      const o = e.tangent.array, l = [], c = [];
      for (let t = 0; t < a; t++) l[t] = new lt, c[t] = new lt;
      const h = new lt, u = new lt, d = new lt, p = new J, m = new J, f = new J, g = new lt, v = new lt;

      function y(t, e, n) {
        h.fromArray(i, 3 * t), u.fromArray(i, 3 * e), d.fromArray(i, 3 * n), p.fromArray(s, 2 * t), m.fromArray(s, 2 * e), f.fromArray(s, 2 * n), u.sub(h), d.sub(h), m.sub(p), f.sub(p);
        const r = 1 / (m.x * f.y - f.x * m.y);
        isFinite(r) && (g.copy(u).multiplyScalar(f.y).addScaledVector(d, -m.y).multiplyScalar(r), v.copy(d).multiplyScalar(m.x).addScaledVector(u, -f.x).multiplyScalar(r), l[t].add(g), l[e].add(g), l[n].add(g), c[t].add(v), c[e].add(v), c[n].add(v))
      }

      let x = this.groups;
      0 === x.length && (x = [{start: 0, count: n.length}]);
      for (let t = 0, e = x.length; t < e; ++t) {
        const e = x[t], i = e.start;
        for (let t = i, r = i + e.count; t < r; t += 3) y(n[t + 0], n[t + 1], n[t + 2])
      }
      const _ = new lt, w = new lt, b = new lt, M = new lt;

      function S(t) {
        b.fromArray(r, 3 * t), M.copy(b);
        const e = l[t];
        _.copy(e), _.sub(b.multiplyScalar(b.dot(e))).normalize(), w.crossVectors(M, e);
        const n = w.dot(c[t]) < 0 ? -1 : 1;
        o[4 * t] = _.x, o[4 * t + 1] = _.y, o[4 * t + 2] = _.z, o[4 * t + 3] = n
      }

      for (let t = 0, e = x.length; t < e; ++t) {
        const e = x[t], i = e.start;
        for (let t = i, r = i + e.count; t < r; t += 3) S(n[t + 0]), S(n[t + 1]), S(n[t + 2])
      }
    }

    computeVertexNormals() {
      const t = this.index, e = this.getAttribute("position");
      if (void 0 !== e) {
        let n = this.getAttribute("normal");
        if (void 0 === n) n = new Ne(new Float32Array(3 * e.count), 3), this.setAttribute("normal", n); else for (let t = 0, e = n.count; t < e; t++) n.setXYZ(t, 0, 0, 0);
        const i = new lt, r = new lt, s = new lt, a = new lt, o = new lt, l = new lt, c = new lt, h = new lt;
        if (t) for (let u = 0, d = t.count; u < d; u += 3) {
          const d = t.getX(u + 0), p = t.getX(u + 1), m = t.getX(u + 2);
          i.fromBufferAttribute(e, d), r.fromBufferAttribute(e, p), s.fromBufferAttribute(e, m), c.subVectors(s, r), h.subVectors(i, r), c.cross(h), a.fromBufferAttribute(n, d), o.fromBufferAttribute(n, p), l.fromBufferAttribute(n, m), a.add(c), o.add(c), l.add(c), n.setXYZ(d, a.x, a.y, a.z), n.setXYZ(p, o.x, o.y, o.z), n.setXYZ(m, l.x, l.y, l.z)
        } else for (let t = 0, a = e.count; t < a; t += 3) i.fromBufferAttribute(e, t + 0), r.fromBufferAttribute(e, t + 1), s.fromBufferAttribute(e, t + 2), c.subVectors(s, r), h.subVectors(i, r), c.cross(h), n.setXYZ(t + 0, c.x, c.y, c.z), n.setXYZ(t + 1, c.x, c.y, c.z), n.setXYZ(t + 2, c.x, c.y, c.z);
        this.normalizeNormals(), n.needsUpdate = !0
      }
    }

    merge(t, e) {
      if (!t || !t.isBufferGeometry) return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", t);
      void 0 === e && (e = 0, console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
      const n = this.attributes;
      for (const i in n) {
        if (void 0 === t.attributes[i]) continue;
        const r = n[i].array, s = t.attributes[i], a = s.array, o = s.itemSize * e,
            l = Math.min(a.length, r.length - o);
        for (let t = 0, e = o; t < l; t++, e++) r[e] = a[t]
      }
      return this
    }

    normalizeNormals() {
      const t = this.attributes.normal;
      for (let e = 0, n = t.count; e < n; e++) je.fromBufferAttribute(t, e), je.normalize(), t.setXYZ(e, je.x, je.y, je.z)
    }

    toNonIndexed() {
      function t(t, e) {
        const n = t.array, i = t.itemSize, r = t.normalized, s = new n.constructor(e.length * i);
        let a = 0, o = 0;
        for (let r = 0, l = e.length; r < l; r++) {
          a = t.isInterleavedBufferAttribute ? e[r] * t.data.stride + t.offset : e[r] * i;
          for (let t = 0; t < i; t++) s[o++] = n[a++]
        }
        return new Ne(s, i, r)
      }

      if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
      const e = new Xe, n = this.index.array, i = this.attributes;
      for (const r in i) {
        const s = t(i[r], n);
        e.setAttribute(r, s)
      }
      const r = this.morphAttributes;
      for (const i in r) {
        const s = [], a = r[i];
        for (let e = 0, i = a.length; e < i; e++) {
          const i = t(a[e], n);
          s.push(i)
        }
        e.morphAttributes[i] = s
      }
      e.morphTargetsRelative = this.morphTargetsRelative;
      const s = this.groups;
      for (let t = 0, n = s.length; t < n; t++) {
        const n = s[t];
        e.addGroup(n.start, n.count, n.materialIndex)
      }
      return e
    }

    toJSON() {
      const t = {metadata: {version: 4.5, type: "BufferGeometry", generator: "BufferGeometry.toJSON"}};
      if (t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), void 0 !== this.parameters) {
        const e = this.parameters;
        for (const n in e) void 0 !== e[n] && (t[n] = e[n]);
        return t
      }
      t.data = {attributes: {}};
      const e = this.index;
      null !== e && (t.data.index = {type: e.array.constructor.name, array: Array.prototype.slice.call(e.array)});
      const n = this.attributes;
      for (const e in n) {
        const i = n[e];
        t.data.attributes[e] = i.toJSON(t.data)
      }
      const i = {};
      let r = !1;
      for (const e in this.morphAttributes) {
        const n = this.morphAttributes[e], s = [];
        for (let e = 0, i = n.length; e < i; e++) {
          const i = n[e];
          s.push(i.toJSON(t.data))
        }
        s.length > 0 && (i[e] = s, r = !0)
      }
      r && (t.data.morphAttributes = i, t.data.morphTargetsRelative = this.morphTargetsRelative);
      const s = this.groups;
      s.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(s)));
      const a = this.boundingSphere;
      return null !== a && (t.data.boundingSphere = {center: a.center.toArray(), radius: a.radius}), t
    }

    clone() {
      return (new Xe).copy(this)
    }

    copy(t) {
      this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
      const e = {};
      this.name = t.name;
      const n = t.index;
      null !== n && this.setIndex(n.clone(e));
      const i = t.attributes;
      for (const t in i) {
        const n = i[t];
        this.setAttribute(t, n.clone(e))
      }
      const r = t.morphAttributes;
      for (const t in r) {
        const n = [], i = r[t];
        for (let t = 0, r = i.length; t < r; t++) n.push(i[t].clone(e));
        this.morphAttributes[t] = n
      }
      this.morphTargetsRelative = t.morphTargetsRelative;
      const s = t.groups;
      for (let t = 0, e = s.length; t < e; t++) {
        const e = s[t];
        this.addGroup(e.start, e.count, e.materialIndex)
      }
      const a = t.boundingBox;
      null !== a && (this.boundingBox = a.clone());
      const o = t.boundingSphere;
      return null !== o && (this.boundingSphere = o.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this
    }

    dispose() {
      this.dispatchEvent({type: "dispose"})
    }
  }

  Xe.prototype.isBufferGeometry = !0;
  const Ye = new kt, qe = new Ft, Ze = new Pt, Je = new lt, Qe = new lt, Ke = new lt, $e = new lt, tn = new lt,
      en = new lt, nn = new lt, rn = new lt, sn = new lt, an = new J, on = new J, ln = new J, cn = new lt, hn = new lt;

  class un extends he {
    constructor(t = new Xe, e = new Re) {
      super(), this.type = "Mesh", this.geometry = t, this.material = e, this.updateMorphTargets()
    }

    copy(t) {
      return super.copy(t), void 0 !== t.morphTargetInfluences && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), void 0 !== t.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this.material = t.material, this.geometry = t.geometry, this
    }

    updateMorphTargets() {
      const t = this.geometry;
      if (t.isBufferGeometry) {
        const e = t.morphAttributes, n = Object.keys(e);
        if (n.length > 0) {
          const t = e[n[0]];
          if (void 0 !== t) {
            this.morphTargetInfluences = [], this.morphTargetDictionary = {};
            for (let e = 0, n = t.length; e < n; e++) {
              const n = t[e].name || String(e);
              this.morphTargetInfluences.push(0), this.morphTargetDictionary[n] = e
            }
          }
        }
      } else {
        const e = t.morphTargets;
        void 0 !== e && e.length > 0 && console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
      }
    }

    raycast(t, e) {
      const n = this.geometry, i = this.material, r = this.matrixWorld;
      if (void 0 === i) return;
      if (null === n.boundingSphere && n.computeBoundingSphere(), Ze.copy(n.boundingSphere), Ze.applyMatrix4(r), !1 === t.ray.intersectsSphere(Ze)) return;
      if (Ye.copy(r).invert(), qe.copy(t.ray).applyMatrix4(Ye), null !== n.boundingBox && !1 === qe.intersectsBox(n.boundingBox)) return;
      let s;
      if (n.isBufferGeometry) {
        const r = n.index, a = n.attributes.position, o = n.morphAttributes.position, l = n.morphTargetsRelative,
            c = n.attributes.uv, h = n.attributes.uv2, u = n.groups, d = n.drawRange;
        if (null !== r) if (Array.isArray(i)) for (let n = 0, p = u.length; n < p; n++) {
          const p = u[n], m = i[p.materialIndex];
          for (let n = Math.max(p.start, d.start), i = Math.min(p.start + p.count, d.start + d.count); n < i; n += 3) {
            const i = r.getX(n), u = r.getX(n + 1), d = r.getX(n + 2);
            s = dn(this, m, t, qe, a, o, l, c, h, i, u, d), s && (s.faceIndex = Math.floor(n / 3), s.face.materialIndex = p.materialIndex, e.push(s))
          }
        } else for (let n = Math.max(0, d.start), u = Math.min(r.count, d.start + d.count); n < u; n += 3) {
          const u = r.getX(n), d = r.getX(n + 1), p = r.getX(n + 2);
          s = dn(this, i, t, qe, a, o, l, c, h, u, d, p), s && (s.faceIndex = Math.floor(n / 3), e.push(s))
        } else if (void 0 !== a) if (Array.isArray(i)) for (let n = 0, r = u.length; n < r; n++) {
          const r = u[n], p = i[r.materialIndex];
          for (let n = Math.max(r.start, d.start), i = Math.min(r.start + r.count, d.start + d.count); n < i; n += 3) s = dn(this, p, t, qe, a, o, l, c, h, n, n + 1, n + 2), s && (s.faceIndex = Math.floor(n / 3), s.face.materialIndex = r.materialIndex, e.push(s))
        } else for (let n = Math.max(0, d.start), r = Math.min(a.count, d.start + d.count); n < r; n += 3) s = dn(this, i, t, qe, a, o, l, c, h, n, n + 1, n + 2), s && (s.faceIndex = Math.floor(n / 3), e.push(s))
      } else n.isGeometry && console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
    }
  }

  function dn(t, e, n, i, r, s, a, o, l, c, h, u) {
    Je.fromBufferAttribute(r, c), Qe.fromBufferAttribute(r, h), Ke.fromBufferAttribute(r, u);
    const d = t.morphTargetInfluences;
    if (s && d) {
      nn.set(0, 0, 0), rn.set(0, 0, 0), sn.set(0, 0, 0);
      for (let t = 0, e = s.length; t < e; t++) {
        const e = d[t], n = s[t];
        0 !== e && ($e.fromBufferAttribute(n, c), tn.fromBufferAttribute(n, h), en.fromBufferAttribute(n, u), a ? (nn.addScaledVector($e, e), rn.addScaledVector(tn, e), sn.addScaledVector(en, e)) : (nn.addScaledVector($e.sub(Je), e), rn.addScaledVector(tn.sub(Qe), e), sn.addScaledVector(en.sub(Ke), e)))
      }
      Je.add(nn), Qe.add(rn), Ke.add(sn)
    }
    t.isSkinnedMesh && (t.boneTransform(c, Je), t.boneTransform(h, Qe), t.boneTransform(u, Ke));
    const p = function (t, e, n, i, r, s, a, o) {
      let l;
      if (l = 1 === e.side ? i.intersectTriangle(a, s, r, !0, o) : i.intersectTriangle(r, s, a, 2 !== e.side, o), null === l) return null;
      hn.copy(o), hn.applyMatrix4(t.matrixWorld);
      const c = n.ray.origin.distanceTo(hn);
      return c < n.near || c > n.far ? null : {distance: c, point: hn.clone(), object: t}
    }(t, e, n, i, Je, Qe, Ke, cn);
    if (p) {
      o && (an.fromBufferAttribute(o, c), on.fromBufferAttribute(o, h), ln.fromBufferAttribute(o, u), p.uv = we.getUV(cn, Je, Qe, Ke, an, on, ln, new J)), l && (an.fromBufferAttribute(l, c), on.fromBufferAttribute(l, h), ln.fromBufferAttribute(l, u), p.uv2 = we.getUV(cn, Je, Qe, Ke, an, on, ln, new J));
      const t = {a: c, b: h, c: u, normal: new lt, materialIndex: 0};
      we.getNormal(Je, Qe, Ke, t.normal), p.face = t
    }
    return p
  }

  un.prototype.isMesh = !0;

  class pn extends Xe {
    constructor(t = 1, e = 1, n = 1, i = 1, r = 1, s = 1) {
      super(), this.type = "BoxGeometry", this.parameters = {
        width: t,
        height: e,
        depth: n,
        widthSegments: i,
        heightSegments: r,
        depthSegments: s
      };
      const a = this;
      i = Math.floor(i), r = Math.floor(r), s = Math.floor(s);
      const o = [], l = [], c = [], h = [];
      let u = 0, d = 0;

      function p(t, e, n, i, r, s, p, m, f, g, v) {
        const y = s / f, x = p / g, _ = s / 2, w = p / 2, b = m / 2, M = f + 1, S = g + 1;
        let E = 0, T = 0;
        const L = new lt;
        for (let s = 0; s < S; s++) {
          const a = s * x - w;
          for (let o = 0; o < M; o++) {
            const u = o * y - _;
            L[t] = u * i, L[e] = a * r, L[n] = b, l.push(L.x, L.y, L.z), L[t] = 0, L[e] = 0, L[n] = m > 0 ? 1 : -1, c.push(L.x, L.y, L.z), h.push(o / f), h.push(1 - s / g), E += 1
          }
        }
        for (let t = 0; t < g; t++) for (let e = 0; e < f; e++) {
          const n = u + e + M * t, i = u + e + M * (t + 1), r = u + (e + 1) + M * (t + 1), s = u + (e + 1) + M * t;
          o.push(n, i, s), o.push(i, r, s), T += 6
        }
        a.addGroup(d, T, v), d += T, u += E
      }

      p("z", "y", "x", -1, -1, n, e, t, s, r, 0), p("z", "y", "x", 1, -1, n, e, -t, s, r, 1), p("x", "z", "y", 1, 1, t, n, e, i, s, 2), p("x", "z", "y", 1, -1, t, n, -e, i, s, 3), p("x", "y", "z", 1, -1, t, e, n, i, r, 4), p("x", "y", "z", -1, -1, t, e, -n, i, r, 5), this.setIndex(o), this.setAttribute("position", new Be(l, 3)), this.setAttribute("normal", new Be(c, 3)), this.setAttribute("uv", new Be(h, 2))
    }

    static fromJSON(t) {
      return new pn(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments)
    }
  }

  function mn(t) {
    const e = {};
    for (const n in t) {
      e[n] = {};
      for (const i in t[n]) {
        const r = t[n][i];
        r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? e[n][i] = r.clone() : Array.isArray(r) ? e[n][i] = r.slice() : e[n][i] = r
      }
    }
    return e
  }

  function fn(t) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const i = mn(t[n]);
      for (const t in i) e[t] = i[t]
    }
    return e
  }

  const gn = {clone: mn, merge: fn};

  class vn extends Me {
    constructor(t) {
      super(), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.extensions = {
        derivatives: !1,
        fragDepth: !1,
        drawBuffers: !1,
        shaderTextureLOD: !1
      }, this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv2: [0, 0]
      }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, void 0 !== t && (void 0 !== t.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(t))
    }

    copy(t) {
      return super.copy(t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = mn(t.uniforms), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.lights = t.lights, this.clipping = t.clipping, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this
    }

    toJSON(t) {
      const e = super.toJSON(t);
      e.glslVersion = this.glslVersion, e.uniforms = {};
      for (const n in this.uniforms) {
        const i = this.uniforms[n].value;
        i && i.isTexture ? e.uniforms[n] = {
          type: "t",
          value: i.toJSON(t).uuid
        } : i && i.isColor ? e.uniforms[n] = {
          type: "c",
          value: i.getHex()
        } : i && i.isVector2 ? e.uniforms[n] = {
          type: "v2",
          value: i.toArray()
        } : i && i.isVector3 ? e.uniforms[n] = {
          type: "v3",
          value: i.toArray()
        } : i && i.isVector4 ? e.uniforms[n] = {
          type: "v4",
          value: i.toArray()
        } : i && i.isMatrix3 ? e.uniforms[n] = {
          type: "m3",
          value: i.toArray()
        } : i && i.isMatrix4 ? e.uniforms[n] = {type: "m4", value: i.toArray()} : e.uniforms[n] = {value: i}
      }
      Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader;
      const n = {};
      for (const t in this.extensions) !0 === this.extensions[t] && (n[t] = !0);
      return Object.keys(n).length > 0 && (e.extensions = n), e
    }
  }

  vn.prototype.isShaderMaterial = !0;

  class yn extends he {
    constructor() {
      super(), this.type = "Camera", this.matrixWorldInverse = new kt, this.projectionMatrix = new kt, this.projectionMatrixInverse = new kt
    }

    copy(t, e) {
      return super.copy(t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this
    }

    getWorldDirection(t) {
      this.updateWorldMatrix(!0, !1);
      const e = this.matrixWorld.elements;
      return t.set(-e[8], -e[9], -e[10]).normalize()
    }

    updateMatrixWorld(t) {
      super.updateMatrixWorld(t), this.matrixWorldInverse.copy(this.matrixWorld).invert()
    }

    updateWorldMatrix(t, e) {
      super.updateWorldMatrix(t, e), this.matrixWorldInverse.copy(this.matrixWorld).invert()
    }

    clone() {
      return (new this.constructor).copy(this)
    }
  }

  yn.prototype.isCamera = !0;

  class xn extends yn {
    constructor(t = 50, e = 1, n = .1, i = 2e3) {
      super(), this.type = "PerspectiveCamera", this.fov = t, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix()
    }

    copy(t, e) {
      return super.copy(t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = null === t.view ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this
    }

    setFocalLength(t) {
      const e = .5 * this.getFilmHeight() / t;
      this.fov = 2 * H * Math.atan(e), this.updateProjectionMatrix()
    }

    getFocalLength() {
      const t = Math.tan(.5 * U * this.fov);
      return .5 * this.getFilmHeight() / t
    }

    getEffectiveFOV() {
      return 2 * H * Math.atan(Math.tan(.5 * U * this.fov) / this.zoom)
    }

    getFilmWidth() {
      return this.filmGauge * Math.min(this.aspect, 1)
    }

    getFilmHeight() {
      return this.filmGauge / Math.max(this.aspect, 1)
    }

    setViewOffset(t, e, n, i, r, s) {
      this.aspect = t / e, null === this.view && (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1
      }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = s, this.updateProjectionMatrix()
    }

    clearViewOffset() {
      null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
    }

    updateProjectionMatrix() {
      const t = this.near;
      let e = t * Math.tan(.5 * U * this.fov) / this.zoom, n = 2 * e, i = this.aspect * n, r = -.5 * i;
      const s = this.view;
      if (null !== this.view && this.view.enabled) {
        const t = s.fullWidth, a = s.fullHeight;
        r += s.offsetX * i / t, e -= s.offsetY * n / a, i *= s.width / t, n *= s.height / a
      }
      const a = this.filmOffset;
      0 !== a && (r += t * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, e, e - n, t, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
    }

    toJSON(t) {
      const e = super.toJSON(t);
      return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, null !== this.view && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e
    }
  }

  xn.prototype.isPerspectiveCamera = !0;
  const _n = 90;

  class wn extends he {
    constructor(t, e, n) {
      if (super(), this.type = "CubeCamera", !0 !== n.isWebGLCubeRenderTarget) return void console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");
      this.renderTarget = n;
      const i = new xn(_n, 1, t, e);
      i.layers = this.layers, i.up.set(0, -1, 0), i.lookAt(new lt(1, 0, 0)), this.add(i);
      const r = new xn(_n, 1, t, e);
      r.layers = this.layers, r.up.set(0, -1, 0), r.lookAt(new lt(-1, 0, 0)), this.add(r);
      const s = new xn(_n, 1, t, e);
      s.layers = this.layers, s.up.set(0, 0, 1), s.lookAt(new lt(0, 1, 0)), this.add(s);
      const a = new xn(_n, 1, t, e);
      a.layers = this.layers, a.up.set(0, 0, -1), a.lookAt(new lt(0, -1, 0)), this.add(a);
      const o = new xn(_n, 1, t, e);
      o.layers = this.layers, o.up.set(0, -1, 0), o.lookAt(new lt(0, 0, 1)), this.add(o);
      const l = new xn(_n, 1, t, e);
      l.layers = this.layers, l.up.set(0, -1, 0), l.lookAt(new lt(0, 0, -1)), this.add(l)
    }

    update(t, e) {
      null === this.parent && this.updateMatrixWorld();
      const n = this.renderTarget, [i, r, s, a, o, l] = this.children, c = t.xr.enabled, h = t.getRenderTarget();
      t.xr.enabled = !1;
      const u = n.texture.generateMipmaps;
      n.texture.generateMipmaps = !1, t.setRenderTarget(n, 0), t.render(e, i), t.setRenderTarget(n, 1), t.render(e, r), t.setRenderTarget(n, 2), t.render(e, s), t.setRenderTarget(n, 3), t.render(e, a), t.setRenderTarget(n, 4), t.render(e, o), n.texture.generateMipmaps = u, t.setRenderTarget(n, 5), t.render(e, l), t.setRenderTarget(h), t.xr.enabled = c
    }
  }

  class bn extends nt {
    constructor(t, e, n, r, s, a, o, l, c, h) {
      super(t = void 0 !== t ? t : [], e = void 0 !== e ? e : i, n, r, s, a, o = void 0 !== o ? o : x, l, c, h), this.flipY = !1
    }

    get images() {
      return this.image
    }

    set images(t) {
      this.image = t
    }
  }

  bn.prototype.isCubeTexture = !0;

  class Mn extends st {
    constructor(t, e, n) {
      Number.isInteger(e) && (console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"), e = n), super(t, t, e), e = e || {}, this.texture = new bn(void 0, e.mapping, e.wrapS, e.wrapT, e.magFilter, e.minFilter, e.format, e.type, e.anisotropy, e.encoding), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = void 0 !== e.generateMipmaps && e.generateMipmaps, this.texture.minFilter = void 0 !== e.minFilter ? e.minFilter : u, this.texture._needsFlipEnvMap = !1
    }

    fromEquirectangularTexture(t, e) {
      this.texture.type = e.type, this.texture.format = _, this.texture.encoding = e.encoding, this.texture.generateMipmaps = e.generateMipmaps, this.texture.minFilter = e.minFilter, this.texture.magFilter = e.magFilter;
      const n = {tEquirect: {value: null}},
          i = "\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t#include <project_vertex>\n\n\t\t\t\t}\n\t\t\t",
          r = "\n\n\t\t\t\tuniform sampler2D tEquirect;\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\t#include <common>\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t\t}\n\t\t\t",
          s = new pn(5, 5, 5), a = new vn({
            name: "CubemapFromEquirect",
            uniforms: mn(n),
            vertexShader: i,
            fragmentShader: r,
            side: 1,
            blending: 0
          });
      a.uniforms.tEquirect.value = e;
      const o = new un(s, a), l = e.minFilter;
      return e.minFilter === d && (e.minFilter = u), new wn(1, 10, this).update(t, o), e.minFilter = l, o.geometry.dispose(), o.material.dispose(), this
    }

    clear(t, e, n, i) {
      const r = t.getRenderTarget();
      for (let r = 0; r < 6; r++) t.setRenderTarget(this, r), t.clear(e, n, i);
      t.setRenderTarget(r)
    }
  }

  Mn.prototype.isWebGLCubeRenderTarget = !0;
  const Sn = new lt, En = new lt, Tn = new Q;

  class Ln {
    constructor(t = new lt(1, 0, 0), e = 0) {
      this.normal = t, this.constant = e
    }

    set(t, e) {
      return this.normal.copy(t), this.constant = e, this
    }

    setComponents(t, e, n, i) {
      return this.normal.set(t, e, n), this.constant = i, this
    }

    setFromNormalAndCoplanarPoint(t, e) {
      return this.normal.copy(t), this.constant = -e.dot(this.normal), this
    }

    setFromCoplanarPoints(t, e, n) {
      const i = Sn.subVectors(n, e).cross(En.subVectors(t, e)).normalize();
      return this.setFromNormalAndCoplanarPoint(i, t), this
    }

    copy(t) {
      return this.normal.copy(t.normal), this.constant = t.constant, this
    }

    normalize() {
      const t = 1 / this.normal.length();
      return this.normal.multiplyScalar(t), this.constant *= t, this
    }

    negate() {
      return this.constant *= -1, this.normal.negate(), this
    }

    distanceToPoint(t) {
      return this.normal.dot(t) + this.constant
    }

    distanceToSphere(t) {
      return this.distanceToPoint(t.center) - t.radius
    }

    projectPoint(t, e) {
      return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)
    }

    intersectLine(t, e) {
      const n = t.delta(Sn), i = this.normal.dot(n);
      if (0 === i) return 0 === this.distanceToPoint(t.start) ? e.copy(t.start) : null;
      const r = -(t.start.dot(this.normal) + this.constant) / i;
      return r < 0 || r > 1 ? null : e.copy(n).multiplyScalar(r).add(t.start)
    }

    intersectsLine(t) {
      const e = this.distanceToPoint(t.start), n = this.distanceToPoint(t.end);
      return e < 0 && n > 0 || n < 0 && e > 0
    }

    intersectsBox(t) {
      return t.intersectsPlane(this)
    }

    intersectsSphere(t) {
      return t.intersectsPlane(this)
    }

    coplanarPoint(t) {
      return t.copy(this.normal).multiplyScalar(-this.constant)
    }

    applyMatrix4(t, e) {
      const n = e || Tn.getNormalMatrix(t), i = this.coplanarPoint(Sn).applyMatrix4(t),
          r = this.normal.applyMatrix3(n).normalize();
      return this.constant = -i.dot(r), this
    }

    translate(t) {
      return this.constant -= t.dot(this.normal), this
    }

    equals(t) {
      return t.normal.equals(this.normal) && t.constant === this.constant
    }

    clone() {
      return (new this.constructor).copy(this)
    }
  }

  Ln.prototype.isPlane = !0;
  const An = new Pt, Cn = new lt;

  class Pn {
    constructor(t = new Ln, e = new Ln, n = new Ln, i = new Ln, r = new Ln, s = new Ln) {
      this.planes = [t, e, n, i, r, s]
    }

    set(t, e, n, i, r, s) {
      const a = this.planes;
      return a[0].copy(t), a[1].copy(e), a[2].copy(n), a[3].copy(i), a[4].copy(r), a[5].copy(s), this
    }

    copy(t) {
      const e = this.planes;
      for (let n = 0; n < 6; n++) e[n].copy(t.planes[n]);
      return this
    }

    setFromProjectionMatrix(t) {
      const e = this.planes, n = t.elements, i = n[0], r = n[1], s = n[2], a = n[3], o = n[4], l = n[5], c = n[6],
          h = n[7], u = n[8], d = n[9], p = n[10], m = n[11], f = n[12], g = n[13], v = n[14], y = n[15];
      return e[0].setComponents(a - i, h - o, m - u, y - f).normalize(), e[1].setComponents(a + i, h + o, m + u, y + f).normalize(), e[2].setComponents(a + r, h + l, m + d, y + g).normalize(), e[3].setComponents(a - r, h - l, m - d, y - g).normalize(), e[4].setComponents(a - s, h - c, m - p, y - v).normalize(), e[5].setComponents(a + s, h + c, m + p, y + v).normalize(), this
    }

    intersectsObject(t) {
      const e = t.geometry;
      return null === e.boundingSphere && e.computeBoundingSphere(), An.copy(e.boundingSphere).applyMatrix4(t.matrixWorld), this.intersectsSphere(An)
    }

    intersectsSprite(t) {
      return An.center.set(0, 0, 0), An.radius = .7071067811865476, An.applyMatrix4(t.matrixWorld), this.intersectsSphere(An)
    }

    intersectsSphere(t) {
      const e = this.planes, n = t.center, i = -t.radius;
      for (let t = 0; t < 6; t++) if (e[t].distanceToPoint(n) < i) return !1;
      return !0
    }

    intersectsBox(t) {
      const e = this.planes;
      for (let n = 0; n < 6; n++) {
        const i = e[n];
        if (Cn.x = i.normal.x > 0 ? t.max.x : t.min.x, Cn.y = i.normal.y > 0 ? t.max.y : t.min.y, Cn.z = i.normal.z > 0 ? t.max.z : t.min.z, i.distanceToPoint(Cn) < 0) return !1
      }
      return !0
    }

    containsPoint(t) {
      const e = this.planes;
      for (let n = 0; n < 6; n++) if (e[n].distanceToPoint(t) < 0) return !1;
      return !0
    }

    clone() {
      return (new this.constructor).copy(this)
    }
  }

  function Rn() {
    let t = null, e = !1, n = null, i = null;

    function r(e, s) {
      n(e, s), i = t.requestAnimationFrame(r)
    }

    return {
      start: function () {
        !0 !== e && null !== n && (i = t.requestAnimationFrame(r), e = !0)
      }, stop: function () {
        t.cancelAnimationFrame(i), e = !1
      }, setAnimationLoop: function (t) {
        n = t
      }, setContext: function (e) {
        t = e
      }
    }
  }

  function In(t, e) {
    const n = e.isWebGL2, i = new WeakMap;
    return {
      get: function (t) {
        return t.isInterleavedBufferAttribute && (t = t.data), i.get(t)
      }, remove: function (e) {
        e.isInterleavedBufferAttribute && (e = e.data);
        const n = i.get(e);
        n && (t.deleteBuffer(n.buffer), i.delete(e))
      }, update: function (e, r) {
        if (e.isGLBufferAttribute) {
          const t = i.get(e);
          return void ((!t || t.version < e.version) && i.set(e, {
            buffer: e.buffer,
            type: e.type,
            bytesPerElement: e.elementSize,
            version: e.version
          }))
        }
        e.isInterleavedBufferAttribute && (e = e.data);
        const s = i.get(e);
        void 0 === s ? i.set(e, function (e, i) {
          const r = e.array, s = e.usage, a = t.createBuffer();
          t.bindBuffer(i, a), t.bufferData(i, r, s), e.onUploadCallback();
          let o = 5126;
          return r instanceof Float32Array ? o = 5126 : r instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : r instanceof Uint16Array ? e.isFloat16BufferAttribute ? n ? o = 5131 : console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.") : o = 5123 : r instanceof Int16Array ? o = 5122 : r instanceof Uint32Array ? o = 5125 : r instanceof Int32Array ? o = 5124 : r instanceof Int8Array ? o = 5120 : (r instanceof Uint8Array || r instanceof Uint8ClampedArray) && (o = 5121), {
            buffer: a,
            type: o,
            bytesPerElement: r.BYTES_PER_ELEMENT,
            version: e.version
          }
        }(e, r)) : s.version < e.version && (function (e, i, r) {
          const s = i.array, a = i.updateRange;
          t.bindBuffer(r, e), -1 === a.count ? t.bufferSubData(r, 0, s) : (n ? t.bufferSubData(r, a.offset * s.BYTES_PER_ELEMENT, s, a.offset, a.count) : t.bufferSubData(r, a.offset * s.BYTES_PER_ELEMENT, s.subarray(a.offset, a.offset + a.count)), a.count = -1)
        }(s.buffer, e, r), s.version = e.version)
      }
    }
  }

  class Dn extends Xe {
    constructor(t = 1, e = 1, n = 1, i = 1) {
      super(), this.type = "PlaneGeometry", this.parameters = {
        width: t,
        height: e,
        widthSegments: n,
        heightSegments: i
      };
      const r = t / 2, s = e / 2, a = Math.floor(n), o = Math.floor(i), l = a + 1, c = o + 1, h = t / a, u = e / o,
          d = [], p = [], m = [], f = [];
      for (let t = 0; t < c; t++) {
        const e = t * u - s;
        for (let n = 0; n < l; n++) {
          const i = n * h - r;
          p.push(i, -e, 0), m.push(0, 0, 1), f.push(n / a), f.push(1 - t / o)
        }
      }
      for (let t = 0; t < o; t++) for (let e = 0; e < a; e++) {
        const n = e + l * t, i = e + l * (t + 1), r = e + 1 + l * (t + 1), s = e + 1 + l * t;
        d.push(n, i, s), d.push(i, r, s)
      }
      this.setIndex(d), this.setAttribute("position", new Be(p, 3)), this.setAttribute("normal", new Be(m, 3)), this.setAttribute("uv", new Be(f, 2))
    }

    static fromJSON(t) {
      return new Dn(t.width, t.height, t.widthSegments, t.heightSegments)
    }
  }

  const Nn = {
    alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",
    alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
    alphatest_fragment: "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif",
    aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif",
    aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
    begin_vertex: "vec3 transformed = vec3( position );",
    beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",
    bsdfs: "vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\treturn vec2( -1.04, 1.04 ) * a004 + r.zw;\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in vec3 f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn ( f90 - f0 ) * fresnel + f0;\n}\nvec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );\n\tvec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;\n\treturn Fr * fresnel + F0;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in vec3 f90, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + viewDir );\n\tfloat dotNL = saturate( dot( normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( f0, f90, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\treturn specularColor * brdf.x + brdf.y;\n}\nvoid BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tvec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\tvec3 FssEss = F * brdf.x + brdf.y;\n\tfloat Ess = brdf.x + brdf.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, vec3( 1.0 ), dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie(float roughness, float NoH) {\n\tfloat invAlpha = 1.0 / roughness;\n\tfloat cos2h = NoH * NoH;\n\tfloat sin2h = max(1.0 - cos2h, 0.0078125);\treturn (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);\n}\nfloat V_Neubelt(float NoV, float NoL) {\n\treturn saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));\n}\nvec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 H = normalize( V + L );\n\tfloat dotNH = saturate( dot( N, H ) );\n\treturn specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );\n}\n#endif",
    bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 ) * faceDirection;\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
    clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#pragma unroll_loop_end\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",
    clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
    clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif",
    clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif",
    color_fragment: "#if defined( USE_COLOR_ALPHA )\n\tdiffuseColor *= vColor;\n#elif defined( USE_COLOR )\n\tdiffuseColor.rgb *= vColor;\n#endif",
    color_pars_fragment: "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR )\n\tvarying vec3 vColor;\n#endif",
    color_pars_vertex: "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvarying vec3 vColor;\n#endif",
    color_vertex: "#if defined( USE_COLOR_ALPHA )\n\tvColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif",
    common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}",
    cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_maxMipLevel 8.0\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_maxTileSize 256.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\tfloat texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );\n\t\tvec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );\n\t\tvec2 f = fract( uv );\n\t\tuv += 0.5 - f;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tif ( mipInt < cubeUV_maxMipLevel ) {\n\t\t\tuv.y += 2.0 * cubeUV_maxTileSize;\n\t\t}\n\t\tuv.y += filterInt * 2.0 * cubeUV_minTileSize;\n\t\tuv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );\n\t\tuv *= texelSize;\n\t\tvec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.x += texelSize;\n\t\tvec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.y += texelSize;\n\t\tvec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.x -= texelSize;\n\t\tvec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tvec3 tm = mix( tl, tr, f.x );\n\t\tvec3 bm = mix( bl, br, f.x );\n\t\treturn mix( tm, bm, f.y );\n\t}\n\t#define r0 1.0\n\t#define v0 0.339\n\t#define m0 - 2.0\n\t#define r1 0.8\n\t#define v1 0.276\n\t#define m1 - 1.0\n\t#define r4 0.4\n\t#define v4 0.046\n\t#define m4 2.0\n\t#define r5 0.305\n\t#define v5 0.016\n\t#define m5 3.0\n\t#define r6 0.21\n\t#define v6 0.0038\n\t#define m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= r1 ) {\n\t\t\tmip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;\n\t\t} else if ( roughness >= r4 ) {\n\t\t\tmip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;\n\t\t} else if ( roughness >= r5 ) {\n\t\t\tmip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;\n\t\t} else if ( roughness >= r6 ) {\n\t\t\tmip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif",
    defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\tmat3 m = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\ttransformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",
    displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
    displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",
    emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
    emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
    encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
    encodings_pars_fragment: "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = clamp( floor( D ) / 255.0, 0.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value ) {\n\tvec3 Xp_Y_XYZp = cLogLuvM * value.rgb;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}",
    envmap_fragment: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifndef ENVMAP_TYPE_CUBE_UV\n\t\tenvColor = envMapTexelToLinear( envColor );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
    envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",
    envmap_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
    envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",
    envmap_physical_pars_fragment: "#if defined( USE_ENVMAP )\n\t#ifdef ENVMAP_MODE_REFRACTION\n\t\tuniform float refractionRatio;\n\t#endif\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat sigma = PI * roughness * roughness / ( 1.0 + roughness );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + log2( sigma );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -viewDir, normal );\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -viewDir, normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif",
    envmap_vertex: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
    fog_vertex: "#ifdef USE_FOG\n\tfogDepth = - mvPosition.z;\n#endif",
    fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif",
    fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
    fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
    gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn texture2D( gradientMap, coord ).rgb;\n\t#else\n\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t#endif\n}",
    lightmap_fragment: "#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\treflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n#endif",
    lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
    lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\nvIndirectFront += getAmbientLightIrradiance( ambientLightColor );\nvIndirectFront += getLightProbeIrradiance( lightProbe, geometry );\n#ifdef DOUBLE_SIDED\n\tvIndirectBack += getAmbientLightIrradiance( ambientLightColor );\n\tvIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );\n#endif\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif",
    lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {\n\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif",
    lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
    lights_toon_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )\t(0)",
    lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
    lights_phong_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)",
    lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;\nmaterial.specularRoughness = min( material.specularRoughness, 1.0 );\n#ifdef REFLECTIVITY\n\t#ifdef SPECULAR\n\t\tvec3 specularIntensityFactor = vec3( specularIntensity );\n\t\tvec3 specularTintFactor = specularTint;\n\t\t#ifdef USE_SPECULARINTENSITYMAP\n\t\t\tspecularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;\n\t\t#endif\n\t\t#ifdef USE_SPECULARTINTMAP\n\t\t\tspecularTintFactor *= specularTintMapTexelToLinear( texture2D( specularTintMap, vUv ) ).rgb;\n\t\t#endif\n\t\tmaterial.specularColorF90 = mix( specularIntensityFactor, vec3( 1.0 ), metalnessFactor );\n\t#else\n\t\tvec3 specularIntensityFactor = vec3( 1.0 );\n\t\tvec3 specularTintFactor = vec3( 1.0 );\n\t\tmaterial.specularColorF90 = vec3( 1.0 );\n\t#endif\n\tmaterial.specularColor = mix( min( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ) * specularTintFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.specularColorF90 = vec3( 1.0 );\n#endif\n#ifdef CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheen;\n#endif",
    lights_physical_pars_fragment: "struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat specularRoughness;\n\tvec3 specularColor;\n\tvec3 specularColorF90;\n#ifdef CLEARCOAT\n\tfloat clearcoat;\n\tfloat clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tvec3 sheenColor;\n#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearcoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = ccDotNL * directLight.color;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tccIrradiance *= PI;\n\t\t#endif\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t\treflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), vec3( 1.0 ), material.clearcoatRoughness );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(\n\t\t\tmaterial.specularRoughness,\n\t\t\tdirectLight.direction,\n\t\t\tgeometry,\n\t\t\tmaterial.sheenColor\n\t\t);\n\t#else\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularColorF90, material.specularRoughness);\n\t#endif\n\treflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t\tfloat ccDotNL = ccDotNV;\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\tfloat clearcoatInv = 1.0 - clearcoatDHR;\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\tBRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n\treflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
    lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
    lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );\n\t#ifdef CLEARCOAT\n\t\tclearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );\n\t#endif\n#endif",
    lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",
    logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
    logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
    logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",
    logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif",
    map_fragment: "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif",
    map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",
    map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
    map_particle_pars_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
    metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",
    metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
    morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n#endif",
    morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifndef USE_MORPHNORMALS\n\t\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\t\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",
    morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\t\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\t\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\t\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\t\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t#endif\n#endif",
    normal_fragment_begin: "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * faceDirection;\n\t\t\tbitangent = bitangent * faceDirection;\n\t\t#endif\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;",
    normal_fragment_maps: "#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\t#ifdef USE_TANGENT\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal, mapN, faceDirection );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
    normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 N = surf_norm;\n\t\tvec3 q1perp = cross( q1, N );\n\t\tvec3 q0perp = cross( N, q0 );\n\t\tvec3 T = q1perp * st0.x + q0perp * st1.x;\n\t\tvec3 B = q1perp * st0.y + q0perp * st1.y;\n\t\tfloat det = max( dot( T, T ), dot( B, B ) );\n\t\tfloat scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );\n\t\treturn normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );\n\t}\n#endif",
    clearcoat_normal_fragment_begin: "#ifdef CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif",
    clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\t#ifdef USE_TANGENT\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );\n\t#endif\n#endif",
    clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif",
    packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
    premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",
    project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
    dithering_fragment: "#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
    dithering_pars_fragment: "#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
    roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",
    roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
    shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",
    shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",
    shadowmap_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0\n\t\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\tvec4 shadowWorldPosition;\n\t#endif\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n#endif",
    shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}",
    skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
    skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform highp sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif",
    skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
    skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",
    specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
    specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
    tonemapping_fragment: "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
    tonemapping_pars_fragment: "#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(  1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,  1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,  1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
    transmission_fragment: "#ifdef USE_TRANSMISSION\n\tfloat transmissionFactor = transmission;\n\tfloat thicknessFactor = thickness;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\ttransmissionFactor *= texture2D( transmissionMap, vUv ).r;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tthicknessFactor *= texture2D( thicknessMap, vUv ).g;\n\t#endif\n\tvec3 pos = vWorldPosition.xyz / vWorldPosition.w;\n\tvec3 v = normalize( cameraPosition - pos );\n\tvec3 n = inverseTransformDirection( normal, viewMatrix );\n\tfloat ior = ( 1.0 + 0.4 * reflectivity ) / ( 1.0 - 0.4 * reflectivity );\n\tvec3 transmission = transmissionFactor * getIBLVolumeRefraction(\n\t\tn, v, roughnessFactor, material.diffuseColor, material.specularColor,\n\t\tpos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,\n\t\tattenuationTint, attenuationDistance );\n\ttotalDiffuse = mix( totalDiffuse, transmission, transmissionFactor );\n#endif",
    transmission_pars_fragment: "#ifdef USE_TRANSMISSION\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tuniform sampler2D transmissionMap;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tuniform sampler2D thicknessMap;\n\t#endif\n\tuniform vec2 transmissionSamplerSize;\n\tuniform sampler2D transmissionSamplerMap;\n\tuniform mat4 modelMatrix;\n\tuniform mat4 projectionMatrix;\n\tvarying vec4 vWorldPosition;\n\tvec3 getVolumeTransmissionRay(vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix) {\n\t\tvec3 refractionVector = refract(-v, normalize(n), 1.0 / ior);\n\t\tvec3 modelScale;\n\t\tmodelScale.x = length(vec3(modelMatrix[0].xyz));\n\t\tmodelScale.y = length(vec3(modelMatrix[1].xyz));\n\t\tmodelScale.z = length(vec3(modelMatrix[2].xyz));\n\t\treturn normalize(refractionVector) * thickness * modelScale;\n\t}\n\tfloat applyIorToRoughness(float roughness, float ior) {\n\t\treturn roughness * clamp(ior * 2.0 - 2.0, 0.0, 1.0);\n\t}\n\tvec3 getTransmissionSample(vec2 fragCoord, float roughness, float ior) {\n\t\tfloat framebufferLod = log2(transmissionSamplerSize.x) * applyIorToRoughness(roughness, ior);\n\t\treturn texture2DLodEXT(transmissionSamplerMap, fragCoord.xy, framebufferLod).rgb;\n\t}\n\tvec3 applyVolumeAttenuation(vec3 radiance, float transmissionDistance, vec3 attenuationColor, float attenuationDistance) {\n\t\tif (attenuationDistance == 0.0) {\n\t\t\treturn radiance;\n\t\t} else {\n\t\t\tvec3 attenuationCoefficient = -log(attenuationColor) / attenuationDistance;\n\t\t\tvec3 transmittance = exp(-attenuationCoefficient * transmissionDistance);\t\t\treturn transmittance * radiance;\n\t\t}\n\t}\n\tvec3 getIBLVolumeRefraction(vec3 n, vec3 v, float perceptualRoughness, vec3 baseColor, vec3 specularColor,\n\t\tvec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness,\n\t\tvec3 attenuationColor, float attenuationDistance) {\n\t\tvec3 transmissionRay = getVolumeTransmissionRay(n, v, thickness, ior, modelMatrix);\n\t\tvec3 refractedRayExit = position + transmissionRay;\n\t\tvec4 ndcPos = projMatrix * viewMatrix * vec4(refractedRayExit, 1.0);\n\t\tvec2 refractionCoords = ndcPos.xy / ndcPos.w;\n\t\trefractionCoords += 1.0;\n\t\trefractionCoords /= 2.0;\n\t\tvec3 transmittedLight = getTransmissionSample(refractionCoords, perceptualRoughness, ior);\n\t\tvec3 attenuatedColor = applyVolumeAttenuation(transmittedLight, length(transmissionRay), attenuationColor, attenuationDistance);\n\t\treturn (1.0 - specularColor) * attenuatedColor * baseColor;\n\t}\n#endif",
    uv_pars_fragment: "#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif",
    uv_pars_vertex: "#ifdef USE_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif",
    uv_vertex: "#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
    uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
    uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\tuniform mat3 uv2Transform;\n#endif",
    uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif",
    worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",
    background_frag: "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
    background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
    cube_frag: "#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\tvec3 vReflect = vWorldDirection;\n\t#include <envmap_fragment>\n\tgl_FragColor = envColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
    cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
    depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}",
    depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}",
    distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
    distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
    equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tvec4 texColor = texture2D( tEquirect, sampleUV );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
    equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
    linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
    linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
    meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinbase_vertex>\n\t\t#include <skinnormal_vertex>\n\t\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
    meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t\tmatcapColor = matcapTexelToLinear( matcapColor );\n\t#else\n\t\tvec4 matcapColor = vec4( 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t\t#ifdef USE_TANGENT\n\t\t\tvTangent = normalize( transformedTangent );\n\t\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t\t#endif\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
    meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n\t#define REFLECTIVITY\n\t#define CLEARCOAT\n\t#define SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef USE_TRANSMISSION\n\tuniform float transmission;\n\tuniform float thickness;\n\tuniform float attenuationDistance;\n\tuniform vec3 attenuationTint;\n#endif\n#ifdef REFLECTIVITY\n\tuniform float reflectivity;\n#endif\n#ifdef SPECULAR\n\tuniform float specularIntensity;\n\tuniform vec3 specularTint;\n\t#ifdef USE_SPECULARINTENSITYMAP\n\t\tuniform sampler2D specularIntensityMap;\n\t#endif\n\t#ifdef USE_SPECULARTINTMAP\n\t\tuniform sampler2D specularTintMap;\n\t#endif\n#endif\n#ifdef CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheen;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <transmission_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n\tvec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n\t#include <transmission_fragment>\n\tvec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#ifdef USE_TRANSMISSION\n\tvarying vec4 vWorldPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n\tvWorldPosition = worldPosition;\n#endif\n}",
    normal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}",
    normal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
    points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
    points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
    shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
    shadow_vert: "#include <common>\n#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
    sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}"
  }, zn = {
    common: {
      diffuse: {value: new Pe(16777215)},
      opacity: {value: 1},
      map: {value: null},
      uvTransform: {value: new Q},
      uv2Transform: {value: new Q},
      alphaMap: {value: null}
    },
    specularmap: {specularMap: {value: null}},
    envmap: {
      envMap: {value: null},
      flipEnvMap: {value: -1},
      reflectivity: {value: 1},
      refractionRatio: {value: .98},
      maxMipLevel: {value: 0}
    },
    aomap: {aoMap: {value: null}, aoMapIntensity: {value: 1}},
    lightmap: {lightMap: {value: null}, lightMapIntensity: {value: 1}},
    emissivemap: {emissiveMap: {value: null}},
    bumpmap: {bumpMap: {value: null}, bumpScale: {value: 1}},
    normalmap: {normalMap: {value: null}, normalScale: {value: new J(1, 1)}},
    displacementmap: {displacementMap: {value: null}, displacementScale: {value: 1}, displacementBias: {value: 0}},
    roughnessmap: {roughnessMap: {value: null}},
    metalnessmap: {metalnessMap: {value: null}},
    gradientmap: {gradientMap: {value: null}},
    fog: {fogDensity: {value: 25e-5}, fogNear: {value: 1}, fogFar: {value: 2e3}, fogColor: {value: new Pe(16777215)}},
    lights: {
      ambientLightColor: {value: []},
      lightProbe: {value: []},
      directionalLights: {value: [], properties: {direction: {}, color: {}}},
      directionalLightShadows: {
        value: [],
        properties: {shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}}
      },
      directionalShadowMap: {value: []},
      directionalShadowMatrix: {value: []},
      spotLights: {
        value: [],
        properties: {color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {}}
      },
      spotLightShadows: {
        value: [],
        properties: {shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}}
      },
      spotShadowMap: {value: []},
      spotShadowMatrix: {value: []},
      pointLights: {value: [], properties: {color: {}, position: {}, decay: {}, distance: {}}},
      pointLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {}
        }
      },
      pointShadowMap: {value: []},
      pointShadowMatrix: {value: []},
      hemisphereLights: {value: [], properties: {direction: {}, skyColor: {}, groundColor: {}}},
      rectAreaLights: {value: [], properties: {color: {}, position: {}, width: {}, height: {}}},
      ltc_1: {value: null},
      ltc_2: {value: null}
    },
    points: {
      diffuse: {value: new Pe(16777215)},
      opacity: {value: 1},
      size: {value: 1},
      scale: {value: 1},
      map: {value: null},
      alphaMap: {value: null},
      uvTransform: {value: new Q}
    },
    sprite: {
      diffuse: {value: new Pe(16777215)},
      opacity: {value: 1},
      center: {value: new J(.5, .5)},
      rotation: {value: 0},
      map: {value: null},
      alphaMap: {value: null},
      uvTransform: {value: new Q}
    }
  }, On = {
    basic: {
      uniforms: fn([zn.common, zn.specularmap, zn.envmap, zn.aomap, zn.lightmap, zn.fog]),
      vertexShader: Nn.meshbasic_vert,
      fragmentShader: Nn.meshbasic_frag
    },
    lambert: {
      uniforms: fn([zn.common, zn.specularmap, zn.envmap, zn.aomap, zn.lightmap, zn.emissivemap, zn.fog, zn.lights, {emissive: {value: new Pe(0)}}]),
      vertexShader: Nn.meshlambert_vert,
      fragmentShader: Nn.meshlambert_frag
    },
    phong: {
      uniforms: fn([zn.common, zn.specularmap, zn.envmap, zn.aomap, zn.lightmap, zn.emissivemap, zn.bumpmap, zn.normalmap, zn.displacementmap, zn.fog, zn.lights, {
        emissive: {value: new Pe(0)},
        specular: {value: new Pe(1118481)},
        shininess: {value: 30}
      }]), vertexShader: Nn.meshphong_vert, fragmentShader: Nn.meshphong_frag
    },
    standard: {
      uniforms: fn([zn.common, zn.envmap, zn.aomap, zn.lightmap, zn.emissivemap, zn.bumpmap, zn.normalmap, zn.displacementmap, zn.roughnessmap, zn.metalnessmap, zn.fog, zn.lights, {
        emissive: {value: new Pe(0)},
        roughness: {value: 1},
        metalness: {value: 0},
        envMapIntensity: {value: 1}
      }]), vertexShader: Nn.meshphysical_vert, fragmentShader: Nn.meshphysical_frag
    },
    toon: {
      uniforms: fn([zn.common, zn.aomap, zn.lightmap, zn.emissivemap, zn.bumpmap, zn.normalmap, zn.displacementmap, zn.gradientmap, zn.fog, zn.lights, {emissive: {value: new Pe(0)}}]),
      vertexShader: Nn.meshtoon_vert,
      fragmentShader: Nn.meshtoon_frag
    },
    matcap: {
      uniforms: fn([zn.common, zn.bumpmap, zn.normalmap, zn.displacementmap, zn.fog, {matcap: {value: null}}]),
      vertexShader: Nn.meshmatcap_vert,
      fragmentShader: Nn.meshmatcap_frag
    },
    points: {uniforms: fn([zn.points, zn.fog]), vertexShader: Nn.points_vert, fragmentShader: Nn.points_frag},
    dashed: {
      uniforms: fn([zn.common, zn.fog, {scale: {value: 1}, dashSize: {value: 1}, totalSize: {value: 2}}]),
      vertexShader: Nn.linedashed_vert,
      fragmentShader: Nn.linedashed_frag
    },
    depth: {uniforms: fn([zn.common, zn.displacementmap]), vertexShader: Nn.depth_vert, fragmentShader: Nn.depth_frag},
    normal: {
      uniforms: fn([zn.common, zn.bumpmap, zn.normalmap, zn.displacementmap, {opacity: {value: 1}}]),
      vertexShader: Nn.normal_vert,
      fragmentShader: Nn.normal_frag
    },
    sprite: {uniforms: fn([zn.sprite, zn.fog]), vertexShader: Nn.sprite_vert, fragmentShader: Nn.sprite_frag},
    background: {
      uniforms: {uvTransform: {value: new Q}, t2D: {value: null}},
      vertexShader: Nn.background_vert,
      fragmentShader: Nn.background_frag
    },
    cube: {uniforms: fn([zn.envmap, {opacity: {value: 1}}]), vertexShader: Nn.cube_vert, fragmentShader: Nn.cube_frag},
    equirect: {uniforms: {tEquirect: {value: null}}, vertexShader: Nn.equirect_vert, fragmentShader: Nn.equirect_frag},
    distanceRGBA: {
      uniforms: fn([zn.common, zn.displacementmap, {
        referencePosition: {value: new lt},
        nearDistance: {value: 1},
        farDistance: {value: 1e3}
      }]), vertexShader: Nn.distanceRGBA_vert, fragmentShader: Nn.distanceRGBA_frag
    },
    shadow: {
      uniforms: fn([zn.lights, zn.fog, {color: {value: new Pe(0)}, opacity: {value: 1}}]),
      vertexShader: Nn.shadow_vert,
      fragmentShader: Nn.shadow_frag
    }
  };

  function Bn(t, e, n, i, r) {
    const s = new Pe(0);
    let o, l, c = 0, h = null, u = 0, d = null;

    function p(t, e) {
      n.buffers.color.setClear(t.r, t.g, t.b, e, r)
    }

    return {
      getClearColor: function () {
        return s
      }, setClearColor: function (t, e = 1) {
        s.set(t), c = e, p(s, c)
      }, getClearAlpha: function () {
        return c
      }, setClearAlpha: function (t) {
        c = t, p(s, c)
      }, render: function (n, r) {
        let m = !1, f = !0 === r.isScene ? r.background : null;
        f && f.isTexture && (f = e.get(f));
        const g = t.xr, v = g.getSession && g.getSession();
        v && "additive" === v.environmentBlendMode && (f = null), null === f ? p(s, c) : f && f.isColor && (p(f, 1), m = !0), (t.autoClear || m) && t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil), f && (f.isCubeTexture || f.mapping === a) ? (void 0 === l && (l = new un(new pn(1, 1, 1), new vn({
          name: "BackgroundCubeMaterial",
          uniforms: mn(On.cube.uniforms),
          vertexShader: On.cube.vertexShader,
          fragmentShader: On.cube.fragmentShader,
          side: 1,
          depthTest: !1,
          depthWrite: !1,
          fog: !1
        })), l.geometry.deleteAttribute("normal"), l.geometry.deleteAttribute("uv"), l.onBeforeRender = function (t, e, n) {
          this.matrixWorld.copyPosition(n.matrixWorld)
        }, Object.defineProperty(l.material, "envMap", {
          get: function () {
            return this.uniforms.envMap.value
          }
        }), i.update(l)), l.material.uniforms.envMap.value = f, l.material.uniforms.flipEnvMap.value = f.isCubeTexture && !1 === f.isRenderTargetTexture ? -1 : 1, h === f && u === f.version && d === t.toneMapping || (l.material.needsUpdate = !0, h = f, u = f.version, d = t.toneMapping), n.unshift(l, l.geometry, l.material, 0, 0, null)) : f && f.isTexture && (void 0 === o && (o = new un(new Dn(2, 2), new vn({
          name: "BackgroundMaterial",
          uniforms: mn(On.background.uniforms),
          vertexShader: On.background.vertexShader,
          fragmentShader: On.background.fragmentShader,
          side: 0,
          depthTest: !1,
          depthWrite: !1,
          fog: !1
        })), o.geometry.deleteAttribute("normal"), Object.defineProperty(o.material, "map", {
          get: function () {
            return this.uniforms.t2D.value
          }
        }), i.update(o)), o.material.uniforms.t2D.value = f, !0 === f.matrixAutoUpdate && f.updateMatrix(), o.material.uniforms.uvTransform.value.copy(f.matrix), h === f && u === f.version && d === t.toneMapping || (o.material.needsUpdate = !0, h = f, u = f.version, d = t.toneMapping), n.unshift(o, o.geometry, o.material, 0, 0, null))
      }
    }
  }

  function Fn(t, e, n, i) {
    const r = t.getParameter(34921), s = i.isWebGL2 ? null : e.get("OES_vertex_array_object"),
        a = i.isWebGL2 || null !== s, o = {}, l = d(null);
    let c = l;

    function h(e) {
      return i.isWebGL2 ? t.bindVertexArray(e) : s.bindVertexArrayOES(e)
    }

    function u(e) {
      return i.isWebGL2 ? t.deleteVertexArray(e) : s.deleteVertexArrayOES(e)
    }

    function d(t) {
      const e = [], n = [], i = [];
      for (let t = 0; t < r; t++) e[t] = 0, n[t] = 0, i[t] = 0;
      return {
        geometry: null,
        program: null,
        wireframe: !1,
        newAttributes: e,
        enabledAttributes: n,
        attributeDivisors: i,
        object: t,
        attributes: {},
        index: null
      }
    }

    function p() {
      const t = c.newAttributes;
      for (let e = 0, n = t.length; e < n; e++) t[e] = 0
    }

    function m(t) {
      f(t, 0)
    }

    function f(n, r) {
      const s = c.newAttributes, a = c.enabledAttributes, o = c.attributeDivisors;
      s[n] = 1, 0 === a[n] && (t.enableVertexAttribArray(n), a[n] = 1), o[n] !== r && ((i.isWebGL2 ? t : e.get("ANGLE_instanced_arrays"))[i.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](n, r), o[n] = r)
    }

    function g() {
      const e = c.newAttributes, n = c.enabledAttributes;
      for (let i = 0, r = n.length; i < r; i++) n[i] !== e[i] && (t.disableVertexAttribArray(i), n[i] = 0)
    }

    function v(e, n, r, s, a, o) {
      !0 !== i.isWebGL2 || 5124 !== r && 5125 !== r ? t.vertexAttribPointer(e, n, r, s, a, o) : t.vertexAttribIPointer(e, n, r, a, o)
    }

    function y() {
      x(), c !== l && (c = l, h(c.object))
    }

    function x() {
      l.geometry = null, l.program = null, l.wireframe = !1
    }

    return {
      setup: function (r, l, u, y, x) {
        let _ = !1;
        if (a) {
          const e = function (e, n, r) {
            const a = !0 === r.wireframe;
            let l = o[e.id];
            void 0 === l && (l = {}, o[e.id] = l);
            let c = l[n.id];
            void 0 === c && (c = {}, l[n.id] = c);
            let h = c[a];
            return void 0 === h && (h = d(i.isWebGL2 ? t.createVertexArray() : s.createVertexArrayOES()), c[a] = h), h
          }(y, u, l);
          c !== e && (c = e, h(c.object)), _ = function (t, e) {
            const n = c.attributes, i = t.attributes;
            let r = 0;
            for (const t in i) {
              const e = n[t], s = i[t];
              if (void 0 === e) return !0;
              if (e.attribute !== s) return !0;
              if (e.data !== s.data) return !0;
              r++
            }
            return c.attributesNum !== r || c.index !== e
          }(y, x), _ && function (t, e) {
            const n = {}, i = t.attributes;
            let r = 0;
            for (const t in i) {
              const e = i[t], s = {};
              s.attribute = e, e.data && (s.data = e.data), n[t] = s, r++
            }
            c.attributes = n, c.attributesNum = r, c.index = e
          }(y, x)
        } else {
          const t = !0 === l.wireframe;
          c.geometry === y.id && c.program === u.id && c.wireframe === t || (c.geometry = y.id, c.program = u.id, c.wireframe = t, _ = !0)
        }
        !0 === r.isInstancedMesh && (_ = !0), null !== x && n.update(x, 34963), _ && (function (r, s, a, o) {
          if (!1 === i.isWebGL2 && (r.isInstancedMesh || o.isInstancedBufferGeometry) && null === e.get("ANGLE_instanced_arrays")) return;
          p();
          const l = o.attributes, c = a.getAttributes(), h = s.defaultAttributeValues;
          for (const e in c) {
            const i = c[e];
            if (i >= 0) {
              const s = l[e];
              if (void 0 !== s) {
                const e = s.normalized, r = s.itemSize, a = n.get(s);
                if (void 0 === a) continue;
                const l = a.buffer, c = a.type, h = a.bytesPerElement;
                if (s.isInterleavedBufferAttribute) {
                  const n = s.data, a = n.stride, u = s.offset;
                  n && n.isInstancedInterleavedBuffer ? (f(i, n.meshPerAttribute), void 0 === o._maxInstanceCount && (o._maxInstanceCount = n.meshPerAttribute * n.count)) : m(i), t.bindBuffer(34962, l), v(i, r, c, e, a * h, u * h)
                } else s.isInstancedBufferAttribute ? (f(i, s.meshPerAttribute), void 0 === o._maxInstanceCount && (o._maxInstanceCount = s.meshPerAttribute * s.count)) : m(i), t.bindBuffer(34962, l), v(i, r, c, e, 0, 0)
              } else if ("instanceMatrix" === e) {
                const e = n.get(r.instanceMatrix);
                if (void 0 === e) continue;
                const s = e.buffer, a = e.type;
                f(i + 0, 1), f(i + 1, 1), f(i + 2, 1), f(i + 3, 1), t.bindBuffer(34962, s), t.vertexAttribPointer(i + 0, 4, a, !1, 64, 0), t.vertexAttribPointer(i + 1, 4, a, !1, 64, 16), t.vertexAttribPointer(i + 2, 4, a, !1, 64, 32), t.vertexAttribPointer(i + 3, 4, a, !1, 64, 48)
              } else if ("instanceColor" === e) {
                const e = n.get(r.instanceColor);
                if (void 0 === e) continue;
                const s = e.buffer, a = e.type;
                f(i, 1), t.bindBuffer(34962, s), t.vertexAttribPointer(i, 3, a, !1, 12, 0)
              } else if (void 0 !== h) {
                const n = h[e];
                if (void 0 !== n) switch (n.length) {
                  case 2:
                    t.vertexAttrib2fv(i, n);
                    break;
                  case 3:
                    t.vertexAttrib3fv(i, n);
                    break;
                  case 4:
                    t.vertexAttrib4fv(i, n);
                    break;
                  default:
                    t.vertexAttrib1fv(i, n)
                }
              }
            }
          }
          g()
        }(r, l, u, y), null !== x && t.bindBuffer(34963, n.get(x).buffer))
      }, reset: y, resetDefaultState: x, dispose: function () {
        y();
        for (const t in o) {
          const e = o[t];
          for (const t in e) {
            const n = e[t];
            for (const t in n) u(n[t].object), delete n[t];
            delete e[t]
          }
          delete o[t]
        }
      }, releaseStatesOfGeometry: function (t) {
        if (void 0 === o[t.id]) return;
        const e = o[t.id];
        for (const t in e) {
          const n = e[t];
          for (const t in n) u(n[t].object), delete n[t];
          delete e[t]
        }
        delete o[t.id]
      }, releaseStatesOfProgram: function (t) {
        for (const e in o) {
          const n = o[e];
          if (void 0 === n[t.id]) continue;
          const i = n[t.id];
          for (const t in i) u(i[t].object), delete i[t];
          delete n[t.id]
        }
      }, initAttributes: p, enableAttribute: m, disableUnusedAttributes: g
    }
  }

  function kn(t, e, n, i) {
    const r = i.isWebGL2;
    let s;
    this.setMode = function (t) {
      s = t
    }, this.render = function (e, i) {
      t.drawArrays(s, e, i), n.update(i, s, 1)
    }, this.renderInstances = function (i, a, o) {
      if (0 === o) return;
      let l, c;
      if (r) l = t, c = "drawArraysInstanced"; else if (l = e.get("ANGLE_instanced_arrays"), c = "drawArraysInstancedANGLE", null === l) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      l[c](s, i, a, o), n.update(a, s, o)
    }
  }

  function Un(t, e, n) {
    let i;

    function r(e) {
      if ("highp" === e) {
        if (t.getShaderPrecisionFormat(35633, 36338).precision > 0 && t.getShaderPrecisionFormat(35632, 36338).precision > 0) return "highp";
        e = "mediump"
      }
      return "mediump" === e && t.getShaderPrecisionFormat(35633, 36337).precision > 0 && t.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp"
    }

    const s = "undefined" != typeof WebGL2RenderingContext && t instanceof WebGL2RenderingContext || "undefined" != typeof WebGL2ComputeRenderingContext && t instanceof WebGL2ComputeRenderingContext;
    let a = void 0 !== n.precision ? n.precision : "highp";
    const o = r(a);
    o !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", o, "instead."), a = o);
    const l = s || e.has("WEBGL_draw_buffers"), c = !0 === n.logarithmicDepthBuffer, h = t.getParameter(34930),
        u = t.getParameter(35660), d = t.getParameter(3379), p = t.getParameter(34076), m = t.getParameter(34921),
        f = t.getParameter(36347), g = t.getParameter(36348), v = t.getParameter(36349), y = u > 0,
        x = s || e.has("OES_texture_float");
    return {
      isWebGL2: s,
      drawBuffers: l,
      getMaxAnisotropy: function () {
        if (void 0 !== i) return i;
        if (!0 === e.has("EXT_texture_filter_anisotropic")) {
          const n = e.get("EXT_texture_filter_anisotropic");
          i = t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
        } else i = 0;
        return i
      },
      getMaxPrecision: r,
      precision: a,
      logarithmicDepthBuffer: c,
      maxTextures: h,
      maxVertexTextures: u,
      maxTextureSize: d,
      maxCubemapSize: p,
      maxAttributes: m,
      maxVertexUniforms: f,
      maxVaryings: g,
      maxFragmentUniforms: v,
      vertexTextures: y,
      floatFragmentTextures: x,
      floatVertexTextures: y && x,
      maxSamples: s ? t.getParameter(36183) : 0
    }
  }

  function Hn(t) {
    const e = this;
    let n = null, i = 0, r = !1, s = !1;
    const a = new Ln, o = new Q, l = {value: null, needsUpdate: !1};

    function c() {
      l.value !== n && (l.value = n, l.needsUpdate = i > 0), e.numPlanes = i, e.numIntersection = 0
    }

    function h(t, n, i, r) {
      const s = null !== t ? t.length : 0;
      let c = null;
      if (0 !== s) {
        if (c = l.value, !0 !== r || null === c) {
          const e = i + 4 * s, r = n.matrixWorldInverse;
          o.getNormalMatrix(r), (null === c || c.length < e) && (c = new Float32Array(e));
          for (let e = 0, n = i; e !== s; ++e, n += 4) a.copy(t[e]).applyMatrix4(r, o), a.normal.toArray(c, n), c[n + 3] = a.constant
        }
        l.value = c, l.needsUpdate = !0
      }
      return e.numPlanes = s, e.numIntersection = 0, c
    }

    this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function (t, e, s) {
      const a = 0 !== t.length || e || 0 !== i || r;
      return r = e, n = h(t, s, 0), i = t.length, a
    }, this.beginShadows = function () {
      s = !0, h(null)
    }, this.endShadows = function () {
      s = !1, c()
    }, this.setState = function (e, a, o) {
      const u = e.clippingPlanes, d = e.clipIntersection, p = e.clipShadows, m = t.get(e);
      if (!r || null === u || 0 === u.length || s && !p) s ? h(null) : c(); else {
        const t = s ? 0 : i, e = 4 * t;
        let r = m.clippingState || null;
        l.value = r, r = h(u, a, e, o);
        for (let t = 0; t !== e; ++t) r[t] = n[t];
        m.clippingState = r, this.numIntersection = d ? this.numPlanes : 0, this.numPlanes += t
      }
    }
  }

  function Gn(t) {
    let e = new WeakMap;

    function n(t, e) {
      return e === s ? t.mapping = i : 304 === e && (t.mapping = r), t
    }

    function a(t) {
      const n = t.target;
      n.removeEventListener("dispose", a);
      const i = e.get(n);
      void 0 !== i && (e.delete(n), i.dispose())
    }

    return {
      get: function (i) {
        if (i && i.isTexture && !1 === i.isRenderTargetTexture) {
          const r = i.mapping;
          if (r === s || 304 === r) {
            if (e.has(i)) return n(e.get(i).texture, i.mapping);
            {
              const r = i.image;
              if (r && r.height > 0) {
                const s = t.getRenderTarget(), o = new Mn(r.height / 2);
                return o.fromEquirectangularTexture(t, i), e.set(i, o), t.setRenderTarget(s), i.addEventListener("dispose", a), n(o.texture, i.mapping)
              }
              return null
            }
          }
        }
        return i
      }, dispose: function () {
        e = new WeakMap
      }
    }
  }

  On.physical = {
    uniforms: fn([On.standard.uniforms, {
      clearcoat: {value: 0},
      clearcoatMap: {value: null},
      clearcoatRoughness: {value: 0},
      clearcoatRoughnessMap: {value: null},
      clearcoatNormalScale: {value: new J(1, 1)},
      clearcoatNormalMap: {value: null},
      sheen: {value: new Pe(0)},
      transmission: {value: 0},
      transmissionMap: {value: null},
      transmissionSamplerSize: {value: new J},
      transmissionSamplerMap: {value: null},
      thickness: {value: 0},
      thicknessMap: {value: null},
      attenuationDistance: {value: 0},
      attenuationTint: {value: new Pe(0)},
      specularIntensity: {value: 0},
      specularIntensityMap: {value: null},
      specularTint: {value: new Pe(1, 1, 1)},
      specularTintMap: {value: null}
    }]), vertexShader: Nn.meshphysical_vert, fragmentShader: Nn.meshphysical_frag
  };

  class Vn extends yn {
    constructor(t = -1, e = 1, n = 1, i = -1, r = .1, s = 2e3) {
      super(), this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = n, this.bottom = i, this.near = r, this.far = s, this.updateProjectionMatrix()
    }

    copy(t, e) {
      return super.copy(t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = null === t.view ? null : Object.assign({}, t.view), this
    }

    setViewOffset(t, e, n, i, r, s) {
      null === this.view && (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1
      }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = s, this.updateProjectionMatrix()
    }

    clearViewOffset() {
      null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
    }

    updateProjectionMatrix() {
      const t = (this.right - this.left) / (2 * this.zoom), e = (this.top - this.bottom) / (2 * this.zoom),
          n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
      let r = n - t, s = n + t, a = i + e, o = i - e;
      if (null !== this.view && this.view.enabled) {
        const t = (this.right - this.left) / this.view.fullWidth / this.zoom,
            e = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
        r += t * this.view.offsetX, s = r + t * this.view.width, a -= e * this.view.offsetY, o = a - e * this.view.height
      }
      this.projectionMatrix.makeOrthographic(r, s, a, o, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
    }

    toJSON(t) {
      const e = super.toJSON(t);
      return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, null !== this.view && (e.object.view = Object.assign({}, this.view)), e
    }
  }

  Vn.prototype.isOrthographicCamera = !0;

  class Wn extends vn {
    constructor(t) {
      super(t), this.type = "RawShaderMaterial"
    }
  }

  Wn.prototype.isRawShaderMaterial = !0;
  const jn = Math.pow(2, 8), Xn = [.125, .215, .35, .446, .526, .582], Yn = 5 + Xn.length,
      qn = {[C]: 0, [P]: 1, [I]: 2, 3004: 3, 3005: 4, 3006: 5, [R]: 6},
      Zn = new Re({side: 1, depthWrite: !1, depthTest: !1}), Jn = new un(new pn, Zn), Qn = new Vn, {
        _lodPlanes: Kn,
        _sizeLods: $n,
        _sigmas: ti
      } = ci(), ei = new Pe;
  let ni = null;
  const ii = (1 + Math.sqrt(5)) / 2, ri = 1 / ii,
      si = [new lt(1, 1, 1), new lt(-1, 1, 1), new lt(1, 1, -1), new lt(-1, 1, -1), new lt(0, ii, ri), new lt(0, ii, -ri), new lt(ri, 0, ii), new lt(-ri, 0, ii), new lt(ii, ri, 0), new lt(-ii, ri, 0)];

  function ai(t) {
    const e = Math.max(t.r, t.g, t.b), n = Math.min(Math.max(Math.ceil(Math.log2(e)), -128), 127);
    return t.multiplyScalar(Math.pow(2, -n)), (n + 128) / 255
  }

  class oi {
    constructor(t) {
      this._renderer = t, this._pingPongRenderTarget = null, this._blurMaterial = function (t) {
        const e = new Float32Array(20), n = new lt(0, 1, 0);
        return new Wn({
          name: "SphericalGaussianBlur",
          defines: {n: 20},
          uniforms: {
            envMap: {value: null},
            samples: {value: 1},
            weights: {value: e},
            latitudinal: {value: !1},
            dTheta: {value: 0},
            mipInt: {value: 0},
            poleAxis: {value: n},
            inputEncoding: {value: qn[3e3]},
            outputEncoding: {value: qn[3e3]}
          },
          vertexShader: "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute vec3 position;\n\t\tattribute vec2 uv;\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t",
          fragmentShader: "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform int samples;\n\t\t\tuniform float weights[ n ];\n\t\t\tuniform bool latitudinal;\n\t\t\tuniform float dTheta;\n\t\t\tuniform float mipInt;\n\t\t\tuniform vec3 poleAxis;\n\n\t\t\t\n\n\t\tuniform int inputEncoding;\n\t\tuniform int outputEncoding;\n\n\t\t#include <encodings_pars_fragment>\n\n\t\tvec4 inputTexelToLinear( vec4 value ) {\n\n\t\t\tif ( inputEncoding == 0 ) {\n\n\t\t\t\treturn value;\n\n\t\t\t} else if ( inputEncoding == 1 ) {\n\n\t\t\t\treturn sRGBToLinear( value );\n\n\t\t\t} else if ( inputEncoding == 2 ) {\n\n\t\t\t\treturn RGBEToLinear( value );\n\n\t\t\t} else if ( inputEncoding == 3 ) {\n\n\t\t\t\treturn RGBMToLinear( value, 7.0 );\n\n\t\t\t} else if ( inputEncoding == 4 ) {\n\n\t\t\t\treturn RGBMToLinear( value, 16.0 );\n\n\t\t\t} else if ( inputEncoding == 5 ) {\n\n\t\t\t\treturn RGBDToLinear( value, 256.0 );\n\n\t\t\t} else {\n\n\t\t\t\treturn GammaToLinear( value, 2.2 );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 linearToOutputTexel( vec4 value ) {\n\n\t\t\tif ( outputEncoding == 0 ) {\n\n\t\t\t\treturn value;\n\n\t\t\t} else if ( outputEncoding == 1 ) {\n\n\t\t\t\treturn LinearTosRGB( value );\n\n\t\t\t} else if ( outputEncoding == 2 ) {\n\n\t\t\t\treturn LinearToRGBE( value );\n\n\t\t\t} else if ( outputEncoding == 3 ) {\n\n\t\t\t\treturn LinearToRGBM( value, 7.0 );\n\n\t\t\t} else if ( outputEncoding == 4 ) {\n\n\t\t\t\treturn LinearToRGBM( value, 16.0 );\n\n\t\t\t} else if ( outputEncoding == 5 ) {\n\n\t\t\t\treturn LinearToRGBD( value, 256.0 );\n\n\t\t\t} else {\n\n\t\t\t\treturn LinearToGamma( value, 2.2 );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 envMapTexelToLinear( vec4 color ) {\n\n\t\t\treturn inputTexelToLinear( color );\n\n\t\t}\n\t\n\n\t\t\t#define ENVMAP_TYPE_CUBE_UV\n\t\t\t#include <cube_uv_reflection_fragment>\n\n\t\t\tvec3 getSample( float theta, vec3 axis ) {\n\n\t\t\t\tfloat cosTheta = cos( theta );\n\t\t\t\t// Rodrigues' axis-angle rotation\n\t\t\t\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t\t\t\t+ cross( axis, vOutputDirection ) * sin( theta )\n\t\t\t\t\t+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n\t\t\t\treturn bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n\t\t\t\tif ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n\t\t\t\t\taxis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n\t\t\t\t}\n\n\t\t\t\taxis = normalize( axis );\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n\t\t\t\tfor ( int i = 1; i < n; i++ ) {\n\n\t\t\t\t\tif ( i >= samples ) {\n\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfloat theta = dTheta * float( i );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n\t\t\t\t}\n\n\t\t\t\tgl_FragColor = linearToOutputTexel( gl_FragColor );\n\n\t\t\t}\n\t\t",
          blending: 0,
          depthTest: !1,
          depthWrite: !1
        })
      }(), this._equirectShader = null, this._cubemapShader = null, this._compileMaterial(this._blurMaterial)
    }

    fromScene(t, e = 0, n = .1, i = 100) {
      ni = this._renderer.getRenderTarget();
      const r = this._allocateTargets();
      return this._sceneToCubeUV(t, n, i, r), e > 0 && this._blur(r, 0, 0, e), this._applyPMREM(r), this._cleanup(r), r
    }

    fromEquirectangular(t) {
      return this._fromTexture(t)
    }

    fromCubemap(t) {
      return this._fromTexture(t)
    }

    compileCubemapShader() {
      null === this._cubemapShader && (this._cubemapShader = pi(), this._compileMaterial(this._cubemapShader))
    }

    compileEquirectangularShader() {
      null === this._equirectShader && (this._equirectShader = di(), this._compileMaterial(this._equirectShader))
    }

    dispose() {
      this._blurMaterial.dispose(), null !== this._cubemapShader && this._cubemapShader.dispose(), null !== this._equirectShader && this._equirectShader.dispose();
      for (let t = 0; t < Kn.length; t++) Kn[t].dispose()
    }

    _cleanup(t) {
      this._pingPongRenderTarget.dispose(), this._renderer.setRenderTarget(ni), t.scissorTest = !1, ui(t, 0, 0, t.width, t.height)
    }

    _fromTexture(t) {
      ni = this._renderer.getRenderTarget();
      const e = this._allocateTargets(t);
      return this._textureToCubeUV(t, e), this._applyPMREM(e), this._cleanup(e), e
    }

    _allocateTargets(t) {
      const e = {
        magFilter: h,
        minFilter: h,
        generateMipmaps: !1,
        type: p,
        format: 1023,
        encoding: li(t) ? t.encoding : I,
        depthBuffer: !1
      }, n = hi(e);
      return n.depthBuffer = !t, this._pingPongRenderTarget = hi(e), n
    }

    _compileMaterial(t) {
      const e = new un(Kn[0], t);
      this._renderer.compile(e, Qn)
    }

    _sceneToCubeUV(t, e, n, i) {
      const r = new xn(90, 1, e, n), s = [1, -1, 1, 1, 1, 1], a = [1, 1, 1, -1, -1, -1], o = this._renderer,
          l = o.autoClear, c = o.outputEncoding, h = o.toneMapping;
      o.getClearColor(ei), o.toneMapping = 0, o.outputEncoding = C, o.autoClear = !1;
      let u = !1;
      const d = t.background;
      if (d) {
        if (d.isColor) {
          Zn.color.copy(d).convertSRGBToLinear(), t.background = null;
          const e = ai(Zn.color);
          Zn.opacity = e, u = !0
        }
      } else {
        Zn.color.copy(ei).convertSRGBToLinear();
        const t = ai(Zn.color);
        Zn.opacity = t, u = !0
      }
      for (let e = 0; e < 6; e++) {
        const n = e % 3;
        0 == n ? (r.up.set(0, s[e], 0), r.lookAt(a[e], 0, 0)) : 1 == n ? (r.up.set(0, 0, s[e]), r.lookAt(0, a[e], 0)) : (r.up.set(0, s[e], 0), r.lookAt(0, 0, a[e])), ui(i, n * jn, e > 2 ? jn : 0, jn, jn), o.setRenderTarget(i), u && o.render(Jn, r), o.render(t, r)
      }
      o.toneMapping = h, o.outputEncoding = c, o.autoClear = l
    }

    _textureToCubeUV(t, e) {
      const n = this._renderer;
      t.isCubeTexture ? null == this._cubemapShader && (this._cubemapShader = pi()) : null == this._equirectShader && (this._equirectShader = di());
      const i = t.isCubeTexture ? this._cubemapShader : this._equirectShader, r = new un(Kn[0], i), s = i.uniforms;
      s.envMap.value = t, t.isCubeTexture || s.texelSize.value.set(1 / t.image.width, 1 / t.image.height), s.inputEncoding.value = qn[t.encoding], s.outputEncoding.value = qn[e.texture.encoding], ui(e, 0, 0, 3 * jn, 2 * jn), n.setRenderTarget(e), n.render(r, Qn)
    }

    _applyPMREM(t) {
      const e = this._renderer, n = e.autoClear;
      e.autoClear = !1;
      for (let e = 1; e < Yn; e++) {
        const n = Math.sqrt(ti[e] * ti[e] - ti[e - 1] * ti[e - 1]), i = si[(e - 1) % si.length];
        this._blur(t, e - 1, e, n, i)
      }
      e.autoClear = n
    }

    _blur(t, e, n, i, r) {
      const s = this._pingPongRenderTarget;
      this._halfBlur(t, s, e, n, i, "latitudinal", r), this._halfBlur(s, t, n, n, i, "longitudinal", r)
    }

    _halfBlur(t, e, n, i, r, s, a) {
      const o = this._renderer, l = this._blurMaterial;
      "latitudinal" !== s && "longitudinal" !== s && console.error("blur direction must be either latitudinal or longitudinal!");
      const c = new un(Kn[i], l), h = l.uniforms, u = $n[n] - 1, d = isFinite(r) ? Math.PI / (2 * u) : 2 * Math.PI / 39,
          p = r / d, m = isFinite(r) ? 1 + Math.floor(3 * p) : 20;
      m > 20 && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`);
      const f = [];
      let g = 0;
      for (let t = 0; t < 20; ++t) {
        const e = t / p, n = Math.exp(-e * e / 2);
        f.push(n), 0 == t ? g += n : t < m && (g += 2 * n)
      }
      for (let t = 0; t < f.length; t++) f[t] = f[t] / g;
      h.envMap.value = t.texture, h.samples.value = m, h.weights.value = f, h.latitudinal.value = "latitudinal" === s, a && (h.poleAxis.value = a), h.dTheta.value = d, h.mipInt.value = 8 - n, h.inputEncoding.value = qn[t.texture.encoding], h.outputEncoding.value = qn[t.texture.encoding];
      const v = $n[i];
      ui(e, 3 * Math.max(0, jn - 2 * v), (0 === i ? 0 : 2 * jn) + 2 * v * (i > 4 ? i - 8 + 4 : 0), 3 * v, 2 * v), o.setRenderTarget(e), o.render(c, Qn)
    }
  }

  function li(t) {
    return void 0 !== t && t.type === p && (t.encoding === C || t.encoding === P || t.encoding === R)
  }

  function ci() {
    const t = [], e = [], n = [];
    let i = 8;
    for (let r = 0; r < Yn; r++) {
      const s = Math.pow(2, i);
      e.push(s);
      let a = 1 / s;
      r > 4 ? a = Xn[r - 8 + 4 - 1] : 0 == r && (a = 0), n.push(a);
      const o = 1 / (s - 1), l = -o / 2, c = 1 + o / 2, h = [l, l, c, l, c, c, l, l, c, c, l, c], u = 6, d = 6, p = 3,
          m = 2, f = 1, g = new Float32Array(p * d * u), v = new Float32Array(m * d * u),
          y = new Float32Array(f * d * u);
      for (let t = 0; t < u; t++) {
        const e = t % 3 * 2 / 3 - 1, n = t > 2 ? 0 : -1,
            i = [e, n, 0, e + 2 / 3, n, 0, e + 2 / 3, n + 1, 0, e, n, 0, e + 2 / 3, n + 1, 0, e, n + 1, 0];
        g.set(i, p * d * t), v.set(h, m * d * t);
        const r = [t, t, t, t, t, t];
        y.set(r, f * d * t)
      }
      const x = new Xe;
      x.setAttribute("position", new Ne(g, p)), x.setAttribute("uv", new Ne(v, m)), x.setAttribute("faceIndex", new Ne(y, f)), t.push(x), i > 4 && i--
    }
    return {_lodPlanes: t, _sizeLods: e, _sigmas: n}
  }

  function hi(t) {
    const e = new st(3 * jn, 3 * jn, t);
    return e.texture.mapping = a, e.texture.name = "PMREM.cubeUv", e.scissorTest = !0, e
  }

  function ui(t, e, n, i, r) {
    t.viewport.set(e, n, i, r), t.scissor.set(e, n, i, r)
  }

  function di() {
    const t = new J(1, 1);
    return new Wn({
      name: "EquirectangularToCubeUV",
      uniforms: {
        envMap: {value: null},
        texelSize: {value: t},
        inputEncoding: {value: qn[3e3]},
        outputEncoding: {value: qn[3e3]}
      },
      vertexShader: "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute vec3 position;\n\t\tattribute vec2 uv;\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t",
      fragmentShader: "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform vec2 texelSize;\n\n\t\t\t\n\n\t\tuniform int inputEncoding;\n\t\tuniform int outputEncoding;\n\n\t\t#include <encodings_pars_fragment>\n\n\t\tvec4 inputTexelToLinear( vec4 value ) {\n\n\t\t\tif ( inputEncoding == 0 ) {\n\n\t\t\t\treturn value;\n\n\t\t\t} else if ( inputEncoding == 1 ) {\n\n\t\t\t\treturn sRGBToLinear( value );\n\n\t\t\t} else if ( inputEncoding == 2 ) {\n\n\t\t\t\treturn RGBEToLinear( value );\n\n\t\t\t} else if ( inputEncoding == 3 ) {\n\n\t\t\t\treturn RGBMToLinear( value, 7.0 );\n\n\t\t\t} else if ( inputEncoding == 4 ) {\n\n\t\t\t\treturn RGBMToLinear( value, 16.0 );\n\n\t\t\t} else if ( inputEncoding == 5 ) {\n\n\t\t\t\treturn RGBDToLinear( value, 256.0 );\n\n\t\t\t} else {\n\n\t\t\t\treturn GammaToLinear( value, 2.2 );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 linearToOutputTexel( vec4 value ) {\n\n\t\t\tif ( outputEncoding == 0 ) {\n\n\t\t\t\treturn value;\n\n\t\t\t} else if ( outputEncoding == 1 ) {\n\n\t\t\t\treturn LinearTosRGB( value );\n\n\t\t\t} else if ( outputEncoding == 2 ) {\n\n\t\t\t\treturn LinearToRGBE( value );\n\n\t\t\t} else if ( outputEncoding == 3 ) {\n\n\t\t\t\treturn LinearToRGBM( value, 7.0 );\n\n\t\t\t} else if ( outputEncoding == 4 ) {\n\n\t\t\t\treturn LinearToRGBM( value, 16.0 );\n\n\t\t\t} else if ( outputEncoding == 5 ) {\n\n\t\t\t\treturn LinearToRGBD( value, 256.0 );\n\n\t\t\t} else {\n\n\t\t\t\treturn LinearToGamma( value, 2.2 );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 envMapTexelToLinear( vec4 color ) {\n\n\t\t\treturn inputTexelToLinear( color );\n\n\t\t}\n\t\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\n\t\t\t\tvec3 outputDirection = normalize( vOutputDirection );\n\t\t\t\tvec2 uv = equirectUv( outputDirection );\n\n\t\t\t\tvec2 f = fract( uv / texelSize - 0.5 );\n\t\t\t\tuv -= f * texelSize;\n\t\t\t\tvec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\t\t\t\tuv.x += texelSize.x;\n\t\t\t\tvec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\t\t\t\tuv.y += texelSize.y;\n\t\t\t\tvec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\t\t\t\tuv.x -= texelSize.x;\n\t\t\t\tvec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\n\t\t\t\tvec3 tm = mix( tl, tr, f.x );\n\t\t\t\tvec3 bm = mix( bl, br, f.x );\n\t\t\t\tgl_FragColor.rgb = mix( tm, bm, f.y );\n\n\t\t\t\tgl_FragColor = linearToOutputTexel( gl_FragColor );\n\n\t\t\t}\n\t\t",
      blending: 0,
      depthTest: !1,
      depthWrite: !1
    })
  }

  function pi() {
    return new Wn({
      name: "CubemapToCubeUV",
      uniforms: {envMap: {value: null}, inputEncoding: {value: qn[3e3]}, outputEncoding: {value: qn[3e3]}},
      vertexShader: "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute vec3 position;\n\t\tattribute vec2 uv;\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t",
      fragmentShader: "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform samplerCube envMap;\n\n\t\t\t\n\n\t\tuniform int inputEncoding;\n\t\tuniform int outputEncoding;\n\n\t\t#include <encodings_pars_fragment>\n\n\t\tvec4 inputTexelToLinear( vec4 value ) {\n\n\t\t\tif ( inputEncoding == 0 ) {\n\n\t\t\t\treturn value;\n\n\t\t\t} else if ( inputEncoding == 1 ) {\n\n\t\t\t\treturn sRGBToLinear( value );\n\n\t\t\t} else if ( inputEncoding == 2 ) {\n\n\t\t\t\treturn RGBEToLinear( value );\n\n\t\t\t} else if ( inputEncoding == 3 ) {\n\n\t\t\t\treturn RGBMToLinear( value, 7.0 );\n\n\t\t\t} else if ( inputEncoding == 4 ) {\n\n\t\t\t\treturn RGBMToLinear( value, 16.0 );\n\n\t\t\t} else if ( inputEncoding == 5 ) {\n\n\t\t\t\treturn RGBDToLinear( value, 256.0 );\n\n\t\t\t} else {\n\n\t\t\t\treturn GammaToLinear( value, 2.2 );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 linearToOutputTexel( vec4 value ) {\n\n\t\t\tif ( outputEncoding == 0 ) {\n\n\t\t\t\treturn value;\n\n\t\t\t} else if ( outputEncoding == 1 ) {\n\n\t\t\t\treturn LinearTosRGB( value );\n\n\t\t\t} else if ( outputEncoding == 2 ) {\n\n\t\t\t\treturn LinearToRGBE( value );\n\n\t\t\t} else if ( outputEncoding == 3 ) {\n\n\t\t\t\treturn LinearToRGBM( value, 7.0 );\n\n\t\t\t} else if ( outputEncoding == 4 ) {\n\n\t\t\t\treturn LinearToRGBM( value, 16.0 );\n\n\t\t\t} else if ( outputEncoding == 5 ) {\n\n\t\t\t\treturn LinearToRGBD( value, 256.0 );\n\n\t\t\t} else {\n\n\t\t\t\treturn LinearToGamma( value, 2.2 );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 envMapTexelToLinear( vec4 color ) {\n\n\t\t\treturn inputTexelToLinear( color );\n\n\t\t}\n\t\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;\n\t\t\t\tgl_FragColor = linearToOutputTexel( gl_FragColor );\n\n\t\t\t}\n\t\t",
      blending: 0,
      depthTest: !1,
      depthWrite: !1
    })
  }

  function mi(t) {
    let e = new WeakMap, n = null;

    function a(t) {
      const n = t.target;
      n.removeEventListener("dispose", a);
      const i = e.get(n);
      void 0 !== i && (i.delete(n), i.dispose())
    }

    return {
      get: function (o) {
        if (o && o.isTexture && !1 === o.isRenderTargetTexture) {
          const l = o.mapping, c = l === s || 304 === l, h = l === i || l === r;
          if (c || h) {
            if (e.has(o)) return e.get(o).texture;
            {
              const i = o.image;
              if (c && i && i.height > 0 || h && i && function (t) {
                let e = 0;
                for (let n = 0; n < 6; n++) void 0 !== t[n] && e++;
                return 6 === e
              }(i)) {
                const i = t.getRenderTarget();
                null === n && (n = new oi(t));
                const r = c ? n.fromEquirectangular(o) : n.fromCubemap(o);
                return e.set(o, r), t.setRenderTarget(i), o.addEventListener("dispose", a), r.texture
              }
              return null
            }
          }
        }
        return o
      }, dispose: function () {
        e = new WeakMap, null !== n && (n.dispose(), n = null)
      }
    }
  }

  function fi(t) {
    const e = {};

    function n(n) {
      if (void 0 !== e[n]) return e[n];
      let i;
      switch (n) {
        case"WEBGL_depth_texture":
          i = t.getExtension("WEBGL_depth_texture") || t.getExtension("MOZ_WEBGL_depth_texture") || t.getExtension("WEBKIT_WEBGL_depth_texture");
          break;
        case"EXT_texture_filter_anisotropic":
          i = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
          break;
        case"WEBGL_compressed_texture_s3tc":
          i = t.getExtension("WEBGL_compressed_texture_s3tc") || t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
          break;
        case"WEBGL_compressed_texture_pvrtc":
          i = t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
          break;
        default:
          i = t.getExtension(n)
      }
      return e[n] = i, i
    }

    return {
      has: function (t) {
        return null !== n(t)
      }, init: function (t) {
        t.isWebGL2 ? n("EXT_color_buffer_float") : (n("WEBGL_depth_texture"), n("OES_texture_float"), n("OES_texture_half_float"), n("OES_texture_half_float_linear"), n("OES_standard_derivatives"), n("OES_element_index_uint"), n("OES_vertex_array_object"), n("ANGLE_instanced_arrays")), n("OES_texture_float_linear"), n("EXT_color_buffer_half_float")
      }, get: function (t) {
        const e = n(t);
        return null === e && console.warn("THREE.WebGLRenderer: " + t + " extension not supported."), e
      }
    }
  }

  function gi(t, e, n, i) {
    const r = {}, s = new WeakMap;

    function a(t) {
      const o = t.target;
      null !== o.index && e.remove(o.index);
      for (const t in o.attributes) e.remove(o.attributes[t]);
      o.removeEventListener("dispose", a), delete r[o.id];
      const l = s.get(o);
      l && (e.remove(l), s.delete(o)), i.releaseStatesOfGeometry(o), !0 === o.isInstancedBufferGeometry && delete o._maxInstanceCount, n.memory.geometries--
    }

    function o(t) {
      const n = [], i = t.index, r = t.attributes.position;
      let a = 0;
      if (null !== i) {
        const t = i.array;
        a = i.version;
        for (let e = 0, i = t.length; e < i; e += 3) {
          const i = t[e + 0], r = t[e + 1], s = t[e + 2];
          n.push(i, r, r, s, s, i)
        }
      } else {
        const t = r.array;
        a = r.version;
        for (let e = 0, i = t.length / 3 - 1; e < i; e += 3) {
          const t = e + 0, i = e + 1, r = e + 2;
          n.push(t, i, i, r, r, t)
        }
      }
      const o = new (Fe(n) > 65535 ? Oe : ze)(n, 1);
      o.version = a;
      const l = s.get(t);
      l && e.remove(l), s.set(t, o)
    }

    return {
      get: function (t, e) {
        return !0 === r[e.id] || (e.addEventListener("dispose", a), r[e.id] = !0, n.memory.geometries++), e
      }, update: function (t) {
        const n = t.attributes;
        for (const t in n) e.update(n[t], 34962);
        const i = t.morphAttributes;
        for (const t in i) {
          const n = i[t];
          for (let t = 0, i = n.length; t < i; t++) e.update(n[t], 34962)
        }
      }, getWireframeAttribute: function (t) {
        const e = s.get(t);
        if (e) {
          const n = t.index;
          null !== n && e.version < n.version && o(t)
        } else o(t);
        return s.get(t)
      }
    }
  }

  function vi(t, e, n, i) {
    const r = i.isWebGL2;
    let s, a, o;
    this.setMode = function (t) {
      s = t
    }, this.setIndex = function (t) {
      a = t.type, o = t.bytesPerElement
    }, this.render = function (e, i) {
      t.drawElements(s, i, a, e * o), n.update(i, s, 1)
    }, this.renderInstances = function (i, l, c) {
      if (0 === c) return;
      let h, u;
      if (r) h = t, u = "drawElementsInstanced"; else if (h = e.get("ANGLE_instanced_arrays"), u = "drawElementsInstancedANGLE", null === h) return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      h[u](s, l, a, i * o, c), n.update(l, s, c)
    }
  }

  function yi(t) {
    const e = {frame: 0, calls: 0, triangles: 0, points: 0, lines: 0};
    return {
      memory: {geometries: 0, textures: 0}, render: e, programs: null, autoReset: !0, reset: function () {
        e.frame++, e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0
      }, update: function (t, n, i) {
        switch (e.calls++, n) {
          case 4:
            e.triangles += i * (t / 3);
            break;
          case 1:
            e.lines += i * (t / 2);
            break;
          case 3:
            e.lines += i * (t - 1);
            break;
          case 2:
            e.lines += i * t;
            break;
          case 0:
            e.points += i * t;
            break;
          default:
            console.error("THREE.WebGLInfo: Unknown draw mode:", n)
        }
      }
    }
  }

  function xi(t, e) {
    return t[0] - e[0]
  }

  function _i(t, e) {
    return Math.abs(e[1]) - Math.abs(t[1])
  }

  function wi(t) {
    const e = {}, n = new Float32Array(8), i = [];
    for (let t = 0; t < 8; t++) i[t] = [t, 0];
    return {
      update: function (r, s, a, o) {
        const l = r.morphTargetInfluences, c = void 0 === l ? 0 : l.length;
        let h = e[s.id];
        if (void 0 === h || h.length !== c) {
          h = [];
          for (let t = 0; t < c; t++) h[t] = [t, 0];
          e[s.id] = h
        }
        for (let t = 0; t < c; t++) {
          const e = h[t];
          e[0] = t, e[1] = l[t]
        }
        h.sort(_i);
        for (let t = 0; t < 8; t++) t < c && h[t][1] ? (i[t][0] = h[t][0], i[t][1] = h[t][1]) : (i[t][0] = Number.MAX_SAFE_INTEGER, i[t][1] = 0);
        i.sort(xi);
        const u = s.morphAttributes.position, d = s.morphAttributes.normal;
        let p = 0;
        for (let t = 0; t < 8; t++) {
          const e = i[t], r = e[0], a = e[1];
          r !== Number.MAX_SAFE_INTEGER && a ? (u && s.getAttribute("morphTarget" + t) !== u[r] && s.setAttribute("morphTarget" + t, u[r]), d && s.getAttribute("morphNormal" + t) !== d[r] && s.setAttribute("morphNormal" + t, d[r]), n[t] = a, p += a) : (u && !0 === s.hasAttribute("morphTarget" + t) && s.deleteAttribute("morphTarget" + t), d && !0 === s.hasAttribute("morphNormal" + t) && s.deleteAttribute("morphNormal" + t), n[t] = 0)
        }
        const m = s.morphTargetsRelative ? 1 : 1 - p;
        o.getUniforms().setValue(t, "morphTargetBaseInfluence", m), o.getUniforms().setValue(t, "morphTargetInfluences", n)
      }
    }
  }

  function bi(t, e, n, i) {
    let r = new WeakMap;

    function s(t) {
      const e = t.target;
      e.removeEventListener("dispose", s), n.remove(e.instanceMatrix), null !== e.instanceColor && n.remove(e.instanceColor)
    }

    return {
      update: function (t) {
        const a = i.render.frame, o = t.geometry, l = e.get(t, o);
        return r.get(l) !== a && (e.update(l), r.set(l, a)), t.isInstancedMesh && (!1 === t.hasEventListener("dispose", s) && t.addEventListener("dispose", s), n.update(t.instanceMatrix, 34962), null !== t.instanceColor && n.update(t.instanceColor, 34962)), l
      }, dispose: function () {
        r = new WeakMap
      }
    }
  }

  class Mi extends nt {
    constructor(t = null, e = 1, n = 1, i = 1) {
      super(null), this.image = {
        data: t,
        width: e,
        height: n,
        depth: i
      }, this.magFilter = h, this.minFilter = h, this.wrapR = l, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.needsUpdate = !0
    }
  }

  Mi.prototype.isDataTexture2DArray = !0;

  class Si extends nt {
    constructor(t = null, e = 1, n = 1, i = 1) {
      super(null), this.image = {
        data: t,
        width: e,
        height: n,
        depth: i
      }, this.magFilter = h, this.minFilter = h, this.wrapR = l, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.needsUpdate = !0
    }
  }

  Si.prototype.isDataTexture3D = !0;
  const Ei = new nt, Ti = new Mi, Li = new Si, Ai = new bn, Ci = [], Pi = [], Ri = new Float32Array(16),
      Ii = new Float32Array(9), Di = new Float32Array(4);

  function Ni(t, e, n) {
    const i = t[0];
    if (i <= 0 || i > 0) return t;
    const r = e * n;
    let s = Ci[r];
    if (void 0 === s && (s = new Float32Array(r), Ci[r] = s), 0 !== e) {
      i.toArray(s, 0);
      for (let i = 1, r = 0; i !== e; ++i) r += n, t[i].toArray(s, r)
    }
    return s
  }

  function zi(t, e) {
    if (t.length !== e.length) return !1;
    for (let n = 0, i = t.length; n < i; n++) if (t[n] !== e[n]) return !1;
    return !0
  }

  function Oi(t, e) {
    for (let n = 0, i = e.length; n < i; n++) t[n] = e[n]
  }

  function Bi(t, e) {
    let n = Pi[e];
    void 0 === n && (n = new Int32Array(e), Pi[e] = n);
    for (let i = 0; i !== e; ++i) n[i] = t.allocateTextureUnit();
    return n
  }

  function Fi(t, e) {
    const n = this.cache;
    n[0] !== e && (t.uniform1f(this.addr, e), n[0] = e)
  }

  function ki(t, e) {
    const n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y || (t.uniform2f(this.addr, e.x, e.y), n[0] = e.x, n[1] = e.y); else {
      if (zi(n, e)) return;
      t.uniform2fv(this.addr, e), Oi(n, e)
    }
  }

  function Ui(t, e) {
    const n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z || (t.uniform3f(this.addr, e.x, e.y, e.z), n[0] = e.x, n[1] = e.y, n[2] = e.z); else if (void 0 !== e.r) n[0] === e.r && n[1] === e.g && n[2] === e.b || (t.uniform3f(this.addr, e.r, e.g, e.b), n[0] = e.r, n[1] = e.g, n[2] = e.b); else {
      if (zi(n, e)) return;
      t.uniform3fv(this.addr, e), Oi(n, e)
    }
  }

  function Hi(t, e) {
    const n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w || (t.uniform4f(this.addr, e.x, e.y, e.z, e.w), n[0] = e.x, n[1] = e.y, n[2] = e.z, n[3] = e.w); else {
      if (zi(n, e)) return;
      t.uniform4fv(this.addr, e), Oi(n, e)
    }
  }

  function Gi(t, e) {
    const n = this.cache, i = e.elements;
    if (void 0 === i) {
      if (zi(n, e)) return;
      t.uniformMatrix2fv(this.addr, !1, e), Oi(n, e)
    } else {
      if (zi(n, i)) return;
      Di.set(i), t.uniformMatrix2fv(this.addr, !1, Di), Oi(n, i)
    }
  }

  function Vi(t, e) {
    const n = this.cache, i = e.elements;
    if (void 0 === i) {
      if (zi(n, e)) return;
      t.uniformMatrix3fv(this.addr, !1, e), Oi(n, e)
    } else {
      if (zi(n, i)) return;
      Ii.set(i), t.uniformMatrix3fv(this.addr, !1, Ii), Oi(n, i)
    }
  }

  function Wi(t, e) {
    const n = this.cache, i = e.elements;
    if (void 0 === i) {
      if (zi(n, e)) return;
      t.uniformMatrix4fv(this.addr, !1, e), Oi(n, e)
    } else {
      if (zi(n, i)) return;
      Ri.set(i), t.uniformMatrix4fv(this.addr, !1, Ri), Oi(n, i)
    }
  }

  function ji(t, e) {
    const n = this.cache;
    n[0] !== e && (t.uniform1i(this.addr, e), n[0] = e)
  }

  function Xi(t, e) {
    const n = this.cache;
    zi(n, e) || (t.uniform2iv(this.addr, e), Oi(n, e))
  }

  function Yi(t, e) {
    const n = this.cache;
    zi(n, e) || (t.uniform3iv(this.addr, e), Oi(n, e))
  }

  function qi(t, e) {
    const n = this.cache;
    zi(n, e) || (t.uniform4iv(this.addr, e), Oi(n, e))
  }

  function Zi(t, e) {
    const n = this.cache;
    n[0] !== e && (t.uniform1ui(this.addr, e), n[0] = e)
  }

  function Ji(t, e) {
    const n = this.cache;
    zi(n, e) || (t.uniform2uiv(this.addr, e), Oi(n, e))
  }

  function Qi(t, e) {
    const n = this.cache;
    zi(n, e) || (t.uniform3uiv(this.addr, e), Oi(n, e))
  }

  function Ki(t, e) {
    const n = this.cache;
    zi(n, e) || (t.uniform4uiv(this.addr, e), Oi(n, e))
  }

  function $i(t, e, n) {
    const i = this.cache, r = n.allocateTextureUnit();
    i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.safeSetTexture2D(e || Ei, r)
  }

  function tr(t, e, n) {
    const i = this.cache, r = n.allocateTextureUnit();
    i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTexture3D(e || Li, r)
  }

  function er(t, e, n) {
    const i = this.cache, r = n.allocateTextureUnit();
    i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.safeSetTextureCube(e || Ai, r)
  }

  function nr(t, e, n) {
    const i = this.cache, r = n.allocateTextureUnit();
    i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTexture2DArray(e || Ti, r)
  }

  function ir(t, e) {
    t.uniform1fv(this.addr, e)
  }

  function rr(t, e) {
    const n = Ni(e, this.size, 2);
    t.uniform2fv(this.addr, n)
  }

  function sr(t, e) {
    const n = Ni(e, this.size, 3);
    t.uniform3fv(this.addr, n)
  }

  function ar(t, e) {
    const n = Ni(e, this.size, 4);
    t.uniform4fv(this.addr, n)
  }

  function or(t, e) {
    const n = Ni(e, this.size, 4);
    t.uniformMatrix2fv(this.addr, !1, n)
  }

  function lr(t, e) {
    const n = Ni(e, this.size, 9);
    t.uniformMatrix3fv(this.addr, !1, n)
  }

  function cr(t, e) {
    const n = Ni(e, this.size, 16);
    t.uniformMatrix4fv(this.addr, !1, n)
  }

  function hr(t, e) {
    t.uniform1iv(this.addr, e)
  }

  function ur(t, e) {
    t.uniform2iv(this.addr, e)
  }

  function dr(t, e) {
    t.uniform3iv(this.addr, e)
  }

  function pr(t, e) {
    t.uniform4iv(this.addr, e)
  }

  function mr(t, e) {
    t.uniform1uiv(this.addr, e)
  }

  function fr(t, e) {
    t.uniform2uiv(this.addr, e)
  }

  function gr(t, e) {
    t.uniform3uiv(this.addr, e)
  }

  function vr(t, e) {
    t.uniform4uiv(this.addr, e)
  }

  function yr(t, e, n) {
    const i = e.length, r = Bi(n, i);
    t.uniform1iv(this.addr, r);
    for (let t = 0; t !== i; ++t) n.safeSetTexture2D(e[t] || Ei, r[t])
  }

  function xr(t, e, n) {
    const i = e.length, r = Bi(n, i);
    t.uniform1iv(this.addr, r);
    for (let t = 0; t !== i; ++t) n.safeSetTextureCube(e[t] || Ai, r[t])
  }

  function _r(t, e, n) {
    this.id = t, this.addr = n, this.cache = [], this.setValue = function (t) {
      switch (t) {
        case 5126:
          return Fi;
        case 35664:
          return ki;
        case 35665:
          return Ui;
        case 35666:
          return Hi;
        case 35674:
          return Gi;
        case 35675:
          return Vi;
        case 35676:
          return Wi;
        case 5124:
        case 35670:
          return ji;
        case 35667:
        case 35671:
          return Xi;
        case 35668:
        case 35672:
          return Yi;
        case 35669:
        case 35673:
          return qi;
        case 5125:
          return Zi;
        case 36294:
          return Ji;
        case 36295:
          return Qi;
        case 36296:
          return Ki;
        case 35678:
        case 36198:
        case 36298:
        case 36306:
        case 35682:
          return $i;
        case 35679:
        case 36299:
        case 36307:
          return tr;
        case 35680:
        case 36300:
        case 36308:
        case 36293:
          return er;
        case 36289:
        case 36303:
        case 36311:
        case 36292:
          return nr
      }
    }(e.type)
  }

  function wr(t, e, n) {
    this.id = t, this.addr = n, this.cache = [], this.size = e.size, this.setValue = function (t) {
      switch (t) {
        case 5126:
          return ir;
        case 35664:
          return rr;
        case 35665:
          return sr;
        case 35666:
          return ar;
        case 35674:
          return or;
        case 35675:
          return lr;
        case 35676:
          return cr;
        case 5124:
        case 35670:
          return hr;
        case 35667:
        case 35671:
          return ur;
        case 35668:
        case 35672:
          return dr;
        case 35669:
        case 35673:
          return pr;
        case 5125:
          return mr;
        case 36294:
          return fr;
        case 36295:
          return gr;
        case 36296:
          return vr;
        case 35678:
        case 36198:
        case 36298:
        case 36306:
        case 35682:
          return yr;
        case 35680:
        case 36300:
        case 36308:
        case 36293:
          return xr
      }
    }(e.type)
  }

  function br(t) {
    this.id = t, this.seq = [], this.map = {}
  }

  wr.prototype.updateCache = function (t) {
    const e = this.cache;
    t instanceof Float32Array && e.length !== t.length && (this.cache = new Float32Array(t.length)), Oi(e, t)
  }, br.prototype.setValue = function (t, e, n) {
    const i = this.seq;
    for (let r = 0, s = i.length; r !== s; ++r) {
      const s = i[r];
      s.setValue(t, e[s.id], n)
    }
  };
  const Mr = /(\w+)(\])?(\[|\.)?/g;

  function Sr(t, e) {
    t.seq.push(e), t.map[e.id] = e
  }

  function Er(t, e, n) {
    const i = t.name, r = i.length;
    for (Mr.lastIndex = 0; ;) {
      const s = Mr.exec(i), a = Mr.lastIndex;
      let o = s[1];
      const l = "]" === s[2], c = s[3];
      if (l && (o |= 0), void 0 === c || "[" === c && a + 2 === r) {
        Sr(n, void 0 === c ? new _r(o, t, e) : new wr(o, t, e));
        break
      }
      {
        let t = n.map[o];
        void 0 === t && (t = new br(o), Sr(n, t)), n = t
      }
    }
  }

  function Tr(t, e) {
    this.seq = [], this.map = {};
    const n = t.getProgramParameter(e, 35718);
    for (let i = 0; i < n; ++i) {
      const n = t.getActiveUniform(e, i);
      Er(n, t.getUniformLocation(e, n.name), this)
    }
  }

  function Lr(t, e, n) {
    const i = t.createShader(e);
    return t.shaderSource(i, n), t.compileShader(i), i
  }

  Tr.prototype.setValue = function (t, e, n, i) {
    const r = this.map[e];
    void 0 !== r && r.setValue(t, n, i)
  }, Tr.prototype.setOptional = function (t, e, n) {
    const i = e[n];
    void 0 !== i && this.setValue(t, n, i)
  }, Tr.upload = function (t, e, n, i) {
    for (let r = 0, s = e.length; r !== s; ++r) {
      const s = e[r], a = n[s.id];
      !1 !== a.needsUpdate && s.setValue(t, a.value, i)
    }
  }, Tr.seqWithValue = function (t, e) {
    const n = [];
    for (let i = 0, r = t.length; i !== r; ++i) {
      const r = t[i];
      r.id in e && n.push(r)
    }
    return n
  };
  let Ar = 0;

  function Cr(t) {
    switch (t) {
      case C:
        return ["Linear", "( value )"];
      case P:
        return ["sRGB", "( value )"];
      case I:
        return ["RGBE", "( value )"];
      case 3004:
        return ["RGBM", "( value, 7.0 )"];
      case 3005:
        return ["RGBM", "( value, 16.0 )"];
      case 3006:
        return ["RGBD", "( value, 256.0 )"];
      case R:
        return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
      case 3003:
        return ["LogLuv", "( value )"];
      default:
        return console.warn("THREE.WebGLProgram: Unsupported encoding:", t), ["Linear", "( value )"]
    }
  }

  function Pr(t, e, n) {
    const i = t.getShaderParameter(e, 35713), r = t.getShaderInfoLog(e).trim();
    return i && "" === r ? "" : "THREE.WebGLShader: gl.getShaderInfoLog() " + n + "\n" + r + function (t) {
      const e = t.split("\n");
      for (let t = 0; t < e.length; t++) e[t] = t + 1 + ": " + e[t];
      return e.join("\n")
    }(t.getShaderSource(e))
  }

  function Rr(t, e) {
    const n = Cr(e);
    return "vec4 " + t + "( vec4 value ) { return " + n[0] + "ToLinear" + n[1] + "; }"
  }

  function Ir(t, e) {
    const n = Cr(e);
    return "vec4 " + t + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }"
  }

  function Dr(t, e) {
    let n;
    switch (e) {
      case 1:
        n = "Linear";
        break;
      case 2:
        n = "Reinhard";
        break;
      case 3:
        n = "OptimizedCineon";
        break;
      case 4:
        n = "ACESFilmic";
        break;
      case 5:
        n = "Custom";
        break;
      default:
        console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), n = "Linear"
    }
    return "vec3 " + t + "( vec3 color ) { return " + n + "ToneMapping( color ); }"
  }

  function Nr(t) {
    return "" !== t
  }

  function zr(t, e) {
    return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows)
  }

  function Or(t, e) {
    return t.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection)
  }

  const Br = /^[ \t]*#include +<([\w\d./]+)>/gm;

  function Fr(t) {
    return t.replace(Br, kr)
  }

  function kr(t, e) {
    const n = Nn[e];
    if (void 0 === n) throw new Error("Can not resolve #include <" + e + ">");
    return Fr(n)
  }

  const Ur = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,
      Hr = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;

  function Gr(t) {
    return t.replace(Hr, Wr).replace(Ur, Vr)
  }

  function Vr(t, e, n, i) {
    return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."), Wr(0, e, n, i)
  }

  function Wr(t, e, n, i) {
    let r = "";
    for (let t = parseInt(e); t < parseInt(n); t++) r += i.replace(/\[\s*i\s*\]/g, "[ " + t + " ]").replace(/UNROLLED_LOOP_INDEX/g, t);
    return r
  }

  function jr(t) {
    let e = "precision " + t.precision + " float;\nprecision " + t.precision + " int;";
    return "highp" === t.precision ? e += "\n#define HIGH_PRECISION" : "mediump" === t.precision ? e += "\n#define MEDIUM_PRECISION" : "lowp" === t.precision && (e += "\n#define LOW_PRECISION"), e
  }

  function Xr(t, e, n, s) {
    const o = t.getContext(), l = n.defines;
    let c = n.vertexShader, h = n.fragmentShader;
    const u = function (t) {
      let e = "SHADOWMAP_TYPE_BASIC";
      return 1 === t.shadowMapType ? e = "SHADOWMAP_TYPE_PCF" : 2 === t.shadowMapType ? e = "SHADOWMAP_TYPE_PCF_SOFT" : 3 === t.shadowMapType && (e = "SHADOWMAP_TYPE_VSM"), e
    }(n), d = function (t) {
      let e = "ENVMAP_TYPE_CUBE";
      if (t.envMap) switch (t.envMapMode) {
        case i:
        case r:
          e = "ENVMAP_TYPE_CUBE";
          break;
        case a:
        case 307:
          e = "ENVMAP_TYPE_CUBE_UV"
      }
      return e
    }(n), p = function (t) {
      let e = "ENVMAP_MODE_REFLECTION";
      if (t.envMap) switch (t.envMapMode) {
        case r:
        case 307:
          e = "ENVMAP_MODE_REFRACTION"
      }
      return e
    }(n), m = function (t) {
      let e = "ENVMAP_BLENDING_NONE";
      if (t.envMap) switch (t.combine) {
        case 0:
          e = "ENVMAP_BLENDING_MULTIPLY";
          break;
        case 1:
          e = "ENVMAP_BLENDING_MIX";
          break;
        case 2:
          e = "ENVMAP_BLENDING_ADD"
      }
      return e
    }(n), f = t.gammaFactor > 0 ? t.gammaFactor : 1, g = n.isWebGL2 ? "" : function (t) {
      return [t.extensionDerivatives || t.envMapCubeUV || t.bumpMap || t.tangentSpaceNormalMap || t.clearcoatNormalMap || t.flatShading || "physical" === t.shaderID ? "#extension GL_OES_standard_derivatives : enable" : "", (t.extensionFragDepth || t.logarithmicDepthBuffer) && t.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", t.extensionDrawBuffers && t.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (t.extensionShaderTextureLOD || t.envMap || t.transmission > 0) && t.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(Nr).join("\n")
    }(n), v = function (t) {
      const e = [];
      for (const n in t) {
        const i = t[n];
        !1 !== i && e.push("#define " + n + " " + i)
      }
      return e.join("\n")
    }(l), y = o.createProgram();
    let x, _, w = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";
    n.isRawShaderMaterial ? (x = [v].filter(Nr).join("\n"), x.length > 0 && (x += "\n"), _ = [g, v].filter(Nr).join("\n"), _.length > 0 && (_ += "\n")) : (x = [jr(n), "#define SHADER_NAME " + n.shaderName, v, n.instancing ? "#define USE_INSTANCING" : "", n.instancingColor ? "#define USE_INSTANCING_COLOR" : "", n.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + f, "#define MAX_BONES " + n.maxBones, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + p : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.displacementMap && n.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "", n.specularTintMap ? "#define USE_SPECULARTINTMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.transmission ? "#define USE_TRANSMISSION" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.thicknessMap ? "#define USE_THICKNESSMAP" : "", n.vertexTangents ? "#define USE_TANGENT" : "", n.vertexColors ? "#define USE_COLOR" : "", n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n.vertexUvs ? "#define USE_UV" : "", n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.skinning ? "#define USE_SKINNING" : "", n.useVertexTexture ? "#define BONE_TEXTURE" : "", n.morphTargets ? "#define USE_MORPHTARGETS" : "", n.morphNormals && !1 === n.flatShading ? "#define USE_MORPHNORMALS" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + u : "", n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "\tattribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "\tattribute vec3 instanceColor;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "\tattribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "\tattribute vec4 color;", "#elif defined( USE_COLOR )", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(Nr).join("\n"), _ = [g, jr(n), "#define SHADER_NAME " + n.shaderName, v, n.alphaTest ? "#define ALPHATEST " + n.alphaTest + (n.alphaTest % 1 ? "" : ".0") : "", "#define GAMMA_FACTOR " + f, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.matcap ? "#define USE_MATCAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + d : "", n.envMap ? "#define " + p : "", n.envMap ? "#define " + m : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "", n.specularTintMap ? "#define USE_SPECULARTINTMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.sheen ? "#define USE_SHEEN" : "", n.transmission ? "#define USE_TRANSMISSION" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.thicknessMap ? "#define USE_THICKNESSMAP" : "", n.vertexTangents ? "#define USE_TANGENT" : "", n.vertexColors || n.instancingColor ? "#define USE_COLOR" : "", n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n.vertexUvs ? "#define USE_UV" : "", n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", n.gradientMap ? "#define USE_GRADIENTMAP" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + u : "", n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", n.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", (n.extensionShaderTextureLOD || n.envMap) && n.rendererExtensionShaderTextureLod ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", 0 !== n.toneMapping ? "#define TONE_MAPPING" : "", 0 !== n.toneMapping ? Nn.tonemapping_pars_fragment : "", 0 !== n.toneMapping ? Dr("toneMapping", n.toneMapping) : "", n.dithering ? "#define DITHERING" : "", Nn.encodings_pars_fragment, n.map ? Rr("mapTexelToLinear", n.mapEncoding) : "", n.matcap ? Rr("matcapTexelToLinear", n.matcapEncoding) : "", n.envMap ? Rr("envMapTexelToLinear", n.envMapEncoding) : "", n.emissiveMap ? Rr("emissiveMapTexelToLinear", n.emissiveMapEncoding) : "", n.specularTintMap ? Rr("specularTintMapTexelToLinear", n.specularTintMapEncoding) : "", n.lightMap ? Rr("lightMapTexelToLinear", n.lightMapEncoding) : "", Ir("linearToOutputTexel", n.outputEncoding), n.depthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "", "\n"].filter(Nr).join("\n")), c = Fr(c), c = zr(c, n), c = Or(c, n), h = Fr(h), h = zr(h, n), h = Or(h, n), c = Gr(c), h = Gr(h), n.isWebGL2 && !0 !== n.isRawShaderMaterial && (w = "#version 300 es\n", x = ["#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + x, _ = ["#define varying in", n.glslVersion === O ? "" : "out highp vec4 pc_fragColor;", n.glslVersion === O ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + _);
    const b = w + _ + h, M = Lr(o, 35633, w + x + c), S = Lr(o, 35632, b);
    if (o.attachShader(y, M), o.attachShader(y, S), void 0 !== n.index0AttributeName ? o.bindAttribLocation(y, 0, n.index0AttributeName) : !0 === n.morphTargets && o.bindAttribLocation(y, 0, "position"), o.linkProgram(y), t.debug.checkShaderErrors) {
      const t = o.getProgramInfoLog(y).trim(), e = o.getShaderInfoLog(M).trim(), n = o.getShaderInfoLog(S).trim();
      let i = !0, r = !0;
      if (!1 === o.getProgramParameter(y, 35714)) {
        i = !1;
        const e = Pr(o, M, "vertex"), n = Pr(o, S, "fragment");
        console.error("THREE.WebGLProgram: shader error: ", o.getError(), "35715", o.getProgramParameter(y, 35715), "gl.getProgramInfoLog", t, e, n)
      } else "" !== t ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", t) : "" !== e && "" !== n || (r = !1);
      r && (this.diagnostics = {
        runnable: i,
        programLog: t,
        vertexShader: {log: e, prefix: x},
        fragmentShader: {log: n, prefix: _}
      })
    }
    let E, T;
    return o.deleteShader(M), o.deleteShader(S), this.getUniforms = function () {
      return void 0 === E && (E = new Tr(o, y)), E
    }, this.getAttributes = function () {
      return void 0 === T && (T = function (t, e) {
        const n = {}, i = t.getProgramParameter(e, 35721);
        for (let r = 0; r < i; r++) {
          const i = t.getActiveAttrib(e, r).name;
          n[i] = t.getAttribLocation(e, i)
        }
        return n
      }(o, y)), T
    }, this.destroy = function () {
      s.releaseStatesOfProgram(this), o.deleteProgram(y), this.program = void 0
    }, this.name = n.shaderName, this.id = Ar++, this.cacheKey = e, this.usedTimes = 1, this.program = y, this.vertexShader = M, this.fragmentShader = S, this
  }

  function Yr(t, e, n, i, r, s, o) {
    const l = [], c = r.isWebGL2, h = r.logarithmicDepthBuffer, u = r.floatVertexTextures, d = r.maxVertexUniforms,
        p = r.vertexTextures;
    let m = r.precision;
    const f = {
          MeshDepthMaterial: "depth",
          MeshDistanceMaterial: "distanceRGBA",
          MeshNormalMaterial: "normal",
          MeshBasicMaterial: "basic",
          MeshLambertMaterial: "lambert",
          MeshPhongMaterial: "phong",
          MeshToonMaterial: "toon",
          MeshStandardMaterial: "physical",
          MeshPhysicalMaterial: "physical",
          MeshMatcapMaterial: "matcap",
          LineBasicMaterial: "basic",
          LineDashedMaterial: "dashed",
          PointsMaterial: "points",
          ShadowMaterial: "shadow",
          SpriteMaterial: "sprite"
        },
        g = ["precision", "isWebGL2", "supportsVertexTextures", "outputEncoding", "instancing", "instancingColor", "map", "mapEncoding", "matcap", "matcapEncoding", "envMap", "envMapMode", "envMapEncoding", "envMapCubeUV", "lightMap", "lightMapEncoding", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "objectSpaceNormalMap", "tangentSpaceNormalMap", "clearcoatMap", "clearcoatRoughnessMap", "clearcoatNormalMap", "displacementMap", "specularMap", "specularIntensityMap", "specularTintMap", "specularTintMapEncoding", "roughnessMap", "metalnessMap", "gradientMap", "alphaMap", "combine", "vertexColors", "vertexAlphas", "vertexTangents", "vertexUvs", "uvsVertexOnly", "fog", "useFog", "fogExp2", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "numRectAreaLights", "numDirLightShadows", "numPointLightShadows", "numSpotLightShadows", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "numClipIntersection", "depthPacking", "dithering", "sheen", "transmission", "transmissionMap", "thicknessMap"];

    function v(t) {
      let e;
      return t && t.isTexture ? e = t.encoding : t && t.isWebGLRenderTarget ? (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), e = t.texture.encoding) : e = C, e
    }

    return {
      getParameters: function (s, l, g, y, x) {
        const _ = y.fog, w = s.isMeshStandardMaterial ? y.environment : null,
            b = (s.isMeshStandardMaterial ? n : e).get(s.envMap || w), M = f[s.type],
            S = x.isSkinnedMesh ? function (t) {
              const e = t.skeleton.bones;
              if (u) return 1024;
              {
                const t = d, n = Math.floor((t - 20) / 4), i = Math.min(n, e.length);
                return i < e.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + e.length + " bones. This GPU supports " + i + "."), 0) : i
              }
            }(x) : 0;
        let E, T;
        if (null !== s.precision && (m = r.getMaxPrecision(s.precision), m !== s.precision && console.warn("THREE.WebGLProgram.getParameters:", s.precision, "not supported, using", m, "instead.")), M) {
          const t = On[M];
          E = t.vertexShader, T = t.fragmentShader
        } else E = s.vertexShader, T = s.fragmentShader;
        const L = t.getRenderTarget();
        return {
          isWebGL2: c,
          shaderID: M,
          shaderName: s.type,
          vertexShader: E,
          fragmentShader: T,
          defines: s.defines,
          isRawShaderMaterial: !0 === s.isRawShaderMaterial,
          glslVersion: s.glslVersion,
          precision: m,
          instancing: !0 === x.isInstancedMesh,
          instancingColor: !0 === x.isInstancedMesh && null !== x.instanceColor,
          supportsVertexTextures: p,
          outputEncoding: null !== L ? v(L.texture) : t.outputEncoding,
          map: !!s.map,
          mapEncoding: v(s.map),
          matcap: !!s.matcap,
          matcapEncoding: v(s.matcap),
          envMap: !!b,
          envMapMode: b && b.mapping,
          envMapEncoding: v(b),
          envMapCubeUV: !!b && (b.mapping === a || 307 === b.mapping),
          lightMap: !!s.lightMap,
          lightMapEncoding: v(s.lightMap),
          aoMap: !!s.aoMap,
          emissiveMap: !!s.emissiveMap,
          emissiveMapEncoding: v(s.emissiveMap),
          bumpMap: !!s.bumpMap,
          normalMap: !!s.normalMap,
          objectSpaceNormalMap: 1 === s.normalMapType,
          tangentSpaceNormalMap: 0 === s.normalMapType,
          clearcoatMap: !!s.clearcoatMap,
          clearcoatRoughnessMap: !!s.clearcoatRoughnessMap,
          clearcoatNormalMap: !!s.clearcoatNormalMap,
          displacementMap: !!s.displacementMap,
          roughnessMap: !!s.roughnessMap,
          metalnessMap: !!s.metalnessMap,
          specularMap: !!s.specularMap,
          specularIntensityMap: !!s.specularIntensityMap,
          specularTintMap: !!s.specularTintMap,
          specularTintMapEncoding: v(s.specularTintMap),
          alphaMap: !!s.alphaMap,
          gradientMap: !!s.gradientMap,
          sheen: !!s.sheen,
          transmission: !!s.transmission,
          transmissionMap: !!s.transmissionMap,
          thicknessMap: !!s.thicknessMap,
          combine: s.combine,
          vertexTangents: !!s.normalMap && !!x.geometry && !!x.geometry.attributes.tangent,
          vertexColors: s.vertexColors,
          vertexAlphas: !0 === s.vertexColors && !!x.geometry && !!x.geometry.attributes.color && 4 === x.geometry.attributes.color.itemSize,
          vertexUvs: !!(s.map || s.bumpMap || s.normalMap || s.specularMap || s.alphaMap || s.emissiveMap || s.roughnessMap || s.metalnessMap || s.clearcoatMap || s.clearcoatRoughnessMap || s.clearcoatNormalMap || s.displacementMap || s.transmissionMap || s.thicknessMap || s.specularIntensityMap || s.specularTintMap),
          uvsVertexOnly: !(s.map || s.bumpMap || s.normalMap || s.specularMap || s.alphaMap || s.emissiveMap || s.roughnessMap || s.metalnessMap || s.clearcoatNormalMap || s.transmission || s.transmissionMap || s.thicknessMap || s.specularIntensityMap || s.specularTintMap || !s.displacementMap),
          fog: !!_,
          useFog: s.fog,
          fogExp2: _ && _.isFogExp2,
          flatShading: !!s.flatShading,
          sizeAttenuation: s.sizeAttenuation,
          logarithmicDepthBuffer: h,
          skinning: !0 === x.isSkinnedMesh && S > 0,
          maxBones: S,
          useVertexTexture: u,
          morphTargets: !!x.geometry && !!x.geometry.morphAttributes.position,
          morphNormals: !!x.geometry && !!x.geometry.morphAttributes.normal,
          numDirLights: l.directional.length,
          numPointLights: l.point.length,
          numSpotLights: l.spot.length,
          numRectAreaLights: l.rectArea.length,
          numHemiLights: l.hemi.length,
          numDirLightShadows: l.directionalShadowMap.length,
          numPointLightShadows: l.pointShadowMap.length,
          numSpotLightShadows: l.spotShadowMap.length,
          numClippingPlanes: o.numPlanes,
          numClipIntersection: o.numIntersection,
          dithering: s.dithering,
          shadowMapEnabled: t.shadowMap.enabled && g.length > 0,
          shadowMapType: t.shadowMap.type,
          toneMapping: s.toneMapped ? t.toneMapping : 0,
          physicallyCorrectLights: t.physicallyCorrectLights,
          premultipliedAlpha: s.premultipliedAlpha,
          alphaTest: s.alphaTest,
          doubleSided: 2 === s.side,
          flipSided: 1 === s.side,
          depthPacking: void 0 !== s.depthPacking && s.depthPacking,
          index0AttributeName: s.index0AttributeName,
          extensionDerivatives: s.extensions && s.extensions.derivatives,
          extensionFragDepth: s.extensions && s.extensions.fragDepth,
          extensionDrawBuffers: s.extensions && s.extensions.drawBuffers,
          extensionShaderTextureLOD: s.extensions && s.extensions.shaderTextureLOD,
          rendererExtensionFragDepth: c || i.has("EXT_frag_depth"),
          rendererExtensionDrawBuffers: c || i.has("WEBGL_draw_buffers"),
          rendererExtensionShaderTextureLod: c || i.has("EXT_shader_texture_lod"),
          customProgramCacheKey: s.customProgramCacheKey()
        }
      }, getProgramCacheKey: function (e) {
        const n = [];
        if (e.shaderID ? n.push(e.shaderID) : (n.push(e.fragmentShader), n.push(e.vertexShader)), void 0 !== e.defines) for (const t in e.defines) n.push(t), n.push(e.defines[t]);
        if (!1 === e.isRawShaderMaterial) {
          for (let t = 0; t < g.length; t++) n.push(e[g[t]]);
          n.push(t.outputEncoding), n.push(t.gammaFactor)
        }
        return n.push(e.customProgramCacheKey), n.join()
      }, getUniforms: function (t) {
        const e = f[t.type];
        let n;
        if (e) {
          const t = On[e];
          n = gn.clone(t.uniforms)
        } else n = t.uniforms;
        return n
      }, acquireProgram: function (e, n) {
        let i;
        for (let t = 0, e = l.length; t < e; t++) {
          const e = l[t];
          if (e.cacheKey === n) {
            i = e, ++i.usedTimes;
            break
          }
        }
        return void 0 === i && (i = new Xr(t, n, e, s), l.push(i)), i
      }, releaseProgram: function (t) {
        if (0 == --t.usedTimes) {
          const e = l.indexOf(t);
          l[e] = l[l.length - 1], l.pop(), t.destroy()
        }
      }, programs: l
    }
  }

  function qr() {
    let t = new WeakMap;
    return {
      get: function (e) {
        let n = t.get(e);
        return void 0 === n && (n = {}, t.set(e, n)), n
      }, remove: function (e) {
        t.delete(e)
      }, update: function (e, n, i) {
        t.get(e)[n] = i
      }, dispose: function () {
        t = new WeakMap
      }
    }
  }

  function Zr(t, e) {
    return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program !== e.program ? t.program.id - e.program.id : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id
  }

  function Jr(t, e) {
    return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id
  }

  function Qr(t) {
    const e = [];
    let n = 0;
    const i = [], r = [], s = [], a = {id: -1};

    function o(i, r, s, o, l, c) {
      let h = e[n];
      const u = t.get(s);
      return void 0 === h ? (h = {
        id: i.id,
        object: i,
        geometry: r,
        material: s,
        program: u.program || a,
        groupOrder: o,
        renderOrder: i.renderOrder,
        z: l,
        group: c
      }, e[n] = h) : (h.id = i.id, h.object = i, h.geometry = r, h.material = s, h.program = u.program || a, h.groupOrder = o, h.renderOrder = i.renderOrder, h.z = l, h.group = c), n++, h
    }

    return {
      opaque: i, transmissive: r, transparent: s, init: function () {
        n = 0, i.length = 0, r.length = 0, s.length = 0
      }, push: function (t, e, n, a, l, c) {
        const h = o(t, e, n, a, l, c);
        n.transmission > 0 ? r.push(h) : !0 === n.transparent ? s.push(h) : i.push(h)
      }, unshift: function (t, e, n, a, l, c) {
        const h = o(t, e, n, a, l, c);
        n.transmission > 0 ? r.unshift(h) : !0 === n.transparent ? s.unshift(h) : i.unshift(h)
      }, finish: function () {
        for (let t = n, i = e.length; t < i; t++) {
          const n = e[t];
          if (null === n.id) break;
          n.id = null, n.object = null, n.geometry = null, n.material = null, n.program = null, n.group = null
        }
      }, sort: function (t, e) {
        i.length > 1 && i.sort(t || Zr), r.length > 1 && r.sort(e || Jr), s.length > 1 && s.sort(e || Jr)
      }
    }
  }

  function Kr(t) {
    let e = new WeakMap;
    return {
      get: function (n, i) {
        let r;
        return !1 === e.has(n) ? (r = new Qr(t), e.set(n, [r])) : i >= e.get(n).length ? (r = new Qr(t), e.get(n).push(r)) : r = e.get(n)[i], r
      }, dispose: function () {
        e = new WeakMap
      }
    }
  }

  function $r() {
    const t = {};
    return {
      get: function (e) {
        if (void 0 !== t[e.id]) return t[e.id];
        let n;
        switch (e.type) {
          case"DirectionalLight":
            n = {direction: new lt, color: new Pe};
            break;
          case"SpotLight":
            n = {position: new lt, direction: new lt, color: new Pe, distance: 0, coneCos: 0, penumbraCos: 0, decay: 0};
            break;
          case"PointLight":
            n = {position: new lt, color: new Pe, distance: 0, decay: 0};
            break;
          case"HemisphereLight":
            n = {direction: new lt, skyColor: new Pe, groundColor: new Pe};
            break;
          case"RectAreaLight":
            n = {color: new Pe, position: new lt, halfWidth: new lt, halfHeight: new lt}
        }
        return t[e.id] = n, n
      }
    }
  }

  let ts = 0;

  function es(t, e) {
    return (e.castShadow ? 1 : 0) - (t.castShadow ? 1 : 0)
  }

  function ns(t, e) {
    const n = new $r, i = function () {
      const t = {};
      return {
        get: function (e) {
          if (void 0 !== t[e.id]) return t[e.id];
          let n;
          switch (e.type) {
            case"DirectionalLight":
            case"SpotLight":
              n = {shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new J};
              break;
            case"PointLight":
              n = {
                shadowBias: 0,
                shadowNormalBias: 0,
                shadowRadius: 1,
                shadowMapSize: new J,
                shadowCameraNear: 1,
                shadowCameraFar: 1e3
              }
          }
          return t[e.id] = n, n
        }
      }
    }(), r = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotShadow: [],
      spotShadowMap: [],
      spotShadowMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: []
    };
    for (let t = 0; t < 9; t++) r.probe.push(new lt);
    const s = new lt, a = new kt, o = new kt;
    return {
      setup: function (s) {
        let a = 0, o = 0, l = 0;
        for (let t = 0; t < 9; t++) r.probe[t].set(0, 0, 0);
        let c = 0, h = 0, u = 0, d = 0, p = 0, m = 0, f = 0, g = 0;
        s.sort(es);
        for (let t = 0, e = s.length; t < e; t++) {
          const e = s[t], v = e.color, y = e.intensity, x = e.distance,
              _ = e.shadow && e.shadow.map ? e.shadow.map.texture : null;
          if (e.isAmbientLight) a += v.r * y, o += v.g * y, l += v.b * y; else if (e.isLightProbe) for (let t = 0; t < 9; t++) r.probe[t].addScaledVector(e.sh.coefficients[t], y); else if (e.isDirectionalLight) {
            const t = n.get(e);
            if (t.color.copy(e.color).multiplyScalar(e.intensity), e.castShadow) {
              const t = e.shadow, n = i.get(e);
              n.shadowBias = t.bias, n.shadowNormalBias = t.normalBias, n.shadowRadius = t.radius, n.shadowMapSize = t.mapSize, r.directionalShadow[c] = n, r.directionalShadowMap[c] = _, r.directionalShadowMatrix[c] = e.shadow.matrix, m++
            }
            r.directional[c] = t, c++
          } else if (e.isSpotLight) {
            const t = n.get(e);
            if (t.position.setFromMatrixPosition(e.matrixWorld), t.color.copy(v).multiplyScalar(y), t.distance = x, t.coneCos = Math.cos(e.angle), t.penumbraCos = Math.cos(e.angle * (1 - e.penumbra)), t.decay = e.decay, e.castShadow) {
              const t = e.shadow, n = i.get(e);
              n.shadowBias = t.bias, n.shadowNormalBias = t.normalBias, n.shadowRadius = t.radius, n.shadowMapSize = t.mapSize, r.spotShadow[u] = n, r.spotShadowMap[u] = _, r.spotShadowMatrix[u] = e.shadow.matrix, g++
            }
            r.spot[u] = t, u++
          } else if (e.isRectAreaLight) {
            const t = n.get(e);
            t.color.copy(v).multiplyScalar(y), t.halfWidth.set(.5 * e.width, 0, 0), t.halfHeight.set(0, .5 * e.height, 0), r.rectArea[d] = t, d++
          } else if (e.isPointLight) {
            const t = n.get(e);
            if (t.color.copy(e.color).multiplyScalar(e.intensity), t.distance = e.distance, t.decay = e.decay, e.castShadow) {
              const t = e.shadow, n = i.get(e);
              n.shadowBias = t.bias, n.shadowNormalBias = t.normalBias, n.shadowRadius = t.radius, n.shadowMapSize = t.mapSize, n.shadowCameraNear = t.camera.near, n.shadowCameraFar = t.camera.far, r.pointShadow[h] = n, r.pointShadowMap[h] = _, r.pointShadowMatrix[h] = e.shadow.matrix, f++
            }
            r.point[h] = t, h++
          } else if (e.isHemisphereLight) {
            const t = n.get(e);
            t.skyColor.copy(e.color).multiplyScalar(y), t.groundColor.copy(e.groundColor).multiplyScalar(y), r.hemi[p] = t, p++
          }
        }
        d > 0 && (e.isWebGL2 || !0 === t.has("OES_texture_float_linear") ? (r.rectAreaLTC1 = zn.LTC_FLOAT_1, r.rectAreaLTC2 = zn.LTC_FLOAT_2) : !0 === t.has("OES_texture_half_float_linear") ? (r.rectAreaLTC1 = zn.LTC_HALF_1, r.rectAreaLTC2 = zn.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), r.ambient[0] = a, r.ambient[1] = o, r.ambient[2] = l;
        const v = r.hash;
        v.directionalLength === c && v.pointLength === h && v.spotLength === u && v.rectAreaLength === d && v.hemiLength === p && v.numDirectionalShadows === m && v.numPointShadows === f && v.numSpotShadows === g || (r.directional.length = c, r.spot.length = u, r.rectArea.length = d, r.point.length = h, r.hemi.length = p, r.directionalShadow.length = m, r.directionalShadowMap.length = m, r.pointShadow.length = f, r.pointShadowMap.length = f, r.spotShadow.length = g, r.spotShadowMap.length = g, r.directionalShadowMatrix.length = m, r.pointShadowMatrix.length = f, r.spotShadowMatrix.length = g, v.directionalLength = c, v.pointLength = h, v.spotLength = u, v.rectAreaLength = d, v.hemiLength = p, v.numDirectionalShadows = m, v.numPointShadows = f, v.numSpotShadows = g, r.version = ts++)
      }, setupView: function (t, e) {
        let n = 0, i = 0, l = 0, c = 0, h = 0;
        const u = e.matrixWorldInverse;
        for (let e = 0, d = t.length; e < d; e++) {
          const d = t[e];
          if (d.isDirectionalLight) {
            const t = r.directional[n];
            t.direction.setFromMatrixPosition(d.matrixWorld), s.setFromMatrixPosition(d.target.matrixWorld), t.direction.sub(s), t.direction.transformDirection(u), n++
          } else if (d.isSpotLight) {
            const t = r.spot[l];
            t.position.setFromMatrixPosition(d.matrixWorld), t.position.applyMatrix4(u), t.direction.setFromMatrixPosition(d.matrixWorld), s.setFromMatrixPosition(d.target.matrixWorld), t.direction.sub(s), t.direction.transformDirection(u), l++
          } else if (d.isRectAreaLight) {
            const t = r.rectArea[c];
            t.position.setFromMatrixPosition(d.matrixWorld), t.position.applyMatrix4(u), o.identity(), a.copy(d.matrixWorld), a.premultiply(u), o.extractRotation(a), t.halfWidth.set(.5 * d.width, 0, 0), t.halfHeight.set(0, .5 * d.height, 0), t.halfWidth.applyMatrix4(o), t.halfHeight.applyMatrix4(o), c++
          } else if (d.isPointLight) {
            const t = r.point[i];
            t.position.setFromMatrixPosition(d.matrixWorld), t.position.applyMatrix4(u), i++
          } else if (d.isHemisphereLight) {
            const t = r.hemi[h];
            t.direction.setFromMatrixPosition(d.matrixWorld), t.direction.transformDirection(u), t.direction.normalize(), h++
          }
        }
      }, state: r
    }
  }

  function is(t, e) {
    const n = new ns(t, e), i = [], r = [];
    return {
      init: function () {
        i.length = 0, r.length = 0
      }, state: {lightsArray: i, shadowsArray: r, lights: n}, setupLights: function () {
        n.setup(i)
      }, setupLightsView: function (t) {
        n.setupView(i, t)
      }, pushLight: function (t) {
        i.push(t)
      }, pushShadow: function (t) {
        r.push(t)
      }
    }
  }

  function rs(t, e) {
    let n = new WeakMap;
    return {
      get: function (i, r = 0) {
        let s;
        return !1 === n.has(i) ? (s = new is(t, e), n.set(i, [s])) : r >= n.get(i).length ? (s = new is(t, e), n.get(i).push(s)) : s = n.get(i)[r], s
      }, dispose: function () {
        n = new WeakMap
      }
    }
  }

  class ss extends Me {
    constructor(t) {
      super(), this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.setValues(t)
    }

    copy(t) {
      return super.copy(t), this.depthPacking = t.depthPacking, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this
    }
  }

  ss.prototype.isMeshDepthMaterial = !0;

  class as extends Me {
    constructor(t) {
      super(), this.type = "MeshDistanceMaterial", this.referencePosition = new lt, this.nearDistance = 1, this.farDistance = 1e3, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.fog = !1, this.setValues(t)
    }

    copy(t) {
      return super.copy(t), this.referencePosition.copy(t.referencePosition), this.nearDistance = t.nearDistance, this.farDistance = t.farDistance, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this
    }
  }

  function os(t, e, n) {
    let i = new Pn;
    const r = new J, s = new J, a = new rt, o = new ss({depthPacking: 3201}), l = new as, c = {}, d = n.maxTextureSize,
        p = {0: 1, 1: 0, 2: 2}, m = new vn({
          defines: {SAMPLE_RATE: 2 / 8, HALF_SAMPLE_RATE: 1 / 8},
          uniforms: {shadow_pass: {value: null}, resolution: {value: new J}, radius: {value: 4}},
          vertexShader: "void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",
          fragmentShader: "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );\n\tfor ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {\n\t\t#ifdef HORIZONTAL_PASS\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\t\t#else\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\t\t#endif\n\t}\n\tmean = mean * HALF_SAMPLE_RATE;\n\tsquared_mean = squared_mean * HALF_SAMPLE_RATE;\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}"
        }), f = m.clone();
    f.defines.HORIZONTAL_PASS = 1;
    const g = new Xe;
    g.setAttribute("position", new Ne(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3));
    const v = new un(g, m), y = this;

    function x(n, i) {
      const r = e.update(v);
      m.uniforms.shadow_pass.value = n.map.texture, m.uniforms.resolution.value = n.mapSize, m.uniforms.radius.value = n.radius, t.setRenderTarget(n.mapPass), t.clear(), t.renderBufferDirect(i, null, r, m, v, null), f.uniforms.shadow_pass.value = n.mapPass.texture, f.uniforms.resolution.value = n.mapSize, f.uniforms.radius.value = n.radius, t.setRenderTarget(n.map), t.clear(), t.renderBufferDirect(i, null, r, f, v, null)
    }

    function w(e, n, i, r, s, a, h) {
      let u = null;
      const d = !0 === r.isPointLight ? e.customDistanceMaterial : e.customDepthMaterial;
      if (u = void 0 !== d ? d : !0 === r.isPointLight ? l : o, t.localClippingEnabled && !0 === i.clipShadows && 0 !== i.clippingPlanes.length) {
        const t = u.uuid, e = i.uuid;
        let n = c[t];
        void 0 === n && (n = {}, c[t] = n);
        let r = n[e];
        void 0 === r && (r = u.clone(), n[e] = r), u = r
      }
      return u.visible = i.visible, u.wireframe = i.wireframe, u.side = 3 === h ? null !== i.shadowSide ? i.shadowSide : i.side : null !== i.shadowSide ? i.shadowSide : p[i.side], u.clipShadows = i.clipShadows, u.clippingPlanes = i.clippingPlanes, u.clipIntersection = i.clipIntersection, u.wireframeLinewidth = i.wireframeLinewidth, u.linewidth = i.linewidth, !0 === r.isPointLight && !0 === u.isMeshDistanceMaterial && (u.referencePosition.setFromMatrixPosition(r.matrixWorld), u.nearDistance = s, u.farDistance = a), u
    }

    function b(n, r, s, a, o) {
      if (!1 === n.visible) return;
      if (n.layers.test(r.layers) && (n.isMesh || n.isLine || n.isPoints) && (n.castShadow || n.receiveShadow && 3 === o) && (!n.frustumCulled || i.intersectsObject(n))) {
        n.modelViewMatrix.multiplyMatrices(s.matrixWorldInverse, n.matrixWorld);
        const i = e.update(n), r = n.material;
        if (Array.isArray(r)) {
          const e = i.groups;
          for (let l = 0, c = e.length; l < c; l++) {
            const c = e[l], h = r[c.materialIndex];
            if (h && h.visible) {
              const e = w(n, 0, h, a, s.near, s.far, o);
              t.renderBufferDirect(s, null, i, e, n, c)
            }
          }
        } else if (r.visible) {
          const e = w(n, 0, r, a, s.near, s.far, o);
          t.renderBufferDirect(s, null, i, e, n, null)
        }
      }
      const l = n.children;
      for (let t = 0, e = l.length; t < e; t++) b(l[t], r, s, a, o)
    }

    this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1, this.render = function (e, n, o) {
      if (!1 === y.enabled) return;
      if (!1 === y.autoUpdate && !1 === y.needsUpdate) return;
      if (0 === e.length) return;
      const l = t.getRenderTarget(), c = t.getActiveCubeFace(), p = t.getActiveMipmapLevel(), m = t.state;
      m.setBlending(0), m.buffers.color.setClear(1, 1, 1, 1), m.buffers.depth.setTest(!0), m.setScissorTest(!1);
      for (let l = 0, c = e.length; l < c; l++) {
        const c = e[l], p = c.shadow;
        if (void 0 === p) {
          console.warn("THREE.WebGLShadowMap:", c, "has no shadow.");
          continue
        }
        if (!1 === p.autoUpdate && !1 === p.needsUpdate) continue;
        r.copy(p.mapSize);
        const f = p.getFrameExtents();
        if (r.multiply(f), s.copy(p.mapSize), (r.x > d || r.y > d) && (r.x > d && (s.x = Math.floor(d / f.x), r.x = s.x * f.x, p.mapSize.x = s.x), r.y > d && (s.y = Math.floor(d / f.y), r.y = s.y * f.y, p.mapSize.y = s.y)), null === p.map && !p.isPointLightShadow && 3 === this.type) {
          const t = {minFilter: u, magFilter: u, format: _};
          p.map = new st(r.x, r.y, t), p.map.texture.name = c.name + ".shadowMap", p.mapPass = new st(r.x, r.y, t), p.camera.updateProjectionMatrix()
        }
        if (null === p.map) {
          const t = {minFilter: h, magFilter: h, format: _};
          p.map = new st(r.x, r.y, t), p.map.texture.name = c.name + ".shadowMap", p.camera.updateProjectionMatrix()
        }
        t.setRenderTarget(p.map), t.clear();
        const g = p.getViewportCount();
        for (let t = 0; t < g; t++) {
          const e = p.getViewport(t);
          a.set(s.x * e.x, s.y * e.y, s.x * e.z, s.y * e.w), m.viewport(a), p.updateMatrices(c, t), i = p.getFrustum(), b(n, o, p.camera, c, this.type)
        }
        p.isPointLightShadow || 3 !== this.type || x(p, o), p.needsUpdate = !1
      }
      y.needsUpdate = !1, t.setRenderTarget(l, c, p)
    }
  }

  function ls(t, e, i) {
    const r = i.isWebGL2, s = new function () {
      let e = !1;
      const n = new rt;
      let i = null;
      const r = new rt(0, 0, 0, 0);
      return {
        setMask: function (n) {
          i === n || e || (t.colorMask(n, n, n, n), i = n)
        }, setLocked: function (t) {
          e = t
        }, setClear: function (e, i, s, a, o) {
          !0 === o && (e *= a, i *= a, s *= a), n.set(e, i, s, a), !1 === r.equals(n) && (t.clearColor(e, i, s, a), r.copy(n))
        }, reset: function () {
          e = !1, i = null, r.set(-1, 0, 0, 0)
        }
      }
    }, a = new function () {
      let e = !1, n = null, i = null, r = null;
      return {
        setTest: function (t) {
          t ? F(2929) : k(2929)
        }, setMask: function (i) {
          n === i || e || (t.depthMask(i), n = i)
        }, setFunc: function (e) {
          if (i !== e) {
            if (e) switch (e) {
              case 0:
                t.depthFunc(512);
                break;
              case 1:
                t.depthFunc(519);
                break;
              case 2:
                t.depthFunc(513);
                break;
              case 3:
              default:
                t.depthFunc(515);
                break;
              case 4:
                t.depthFunc(514);
                break;
              case 5:
                t.depthFunc(518);
                break;
              case 6:
                t.depthFunc(516);
                break;
              case 7:
                t.depthFunc(517)
            } else t.depthFunc(515);
            i = e
          }
        }, setLocked: function (t) {
          e = t
        }, setClear: function (e) {
          r !== e && (t.clearDepth(e), r = e)
        }, reset: function () {
          e = !1, n = null, i = null, r = null
        }
      }
    }, o = new function () {
      let e = !1, n = null, i = null, r = null, s = null, a = null, o = null, l = null, c = null;
      return {
        setTest: function (t) {
          e || (t ? F(2960) : k(2960))
        }, setMask: function (i) {
          n === i || e || (t.stencilMask(i), n = i)
        }, setFunc: function (e, n, a) {
          i === e && r === n && s === a || (t.stencilFunc(e, n, a), i = e, r = n, s = a)
        }, setOp: function (e, n, i) {
          a === e && o === n && l === i || (t.stencilOp(e, n, i), a = e, o = n, l = i)
        }, setLocked: function (t) {
          e = t
        }, setClear: function (e) {
          c !== e && (t.clearStencil(e), c = e)
        }, reset: function () {
          e = !1, n = null, i = null, r = null, s = null, a = null, o = null, l = null, c = null
        }
      }
    };
    let l = {}, c = null, h = {}, u = null, d = !1, p = null, m = null, f = null, g = null, v = null, y = null,
        x = null, _ = !1, w = null, b = null, M = null, S = null, E = null;
    const T = t.getParameter(35661);
    let L = !1, A = 0;
    const C = t.getParameter(7938);
    -1 !== C.indexOf("WebGL") ? (A = parseFloat(/^WebGL (\d)/.exec(C)[1]), L = A >= 1) : -1 !== C.indexOf("OpenGL ES") && (A = parseFloat(/^OpenGL ES (\d)/.exec(C)[1]), L = A >= 2);
    let P = null, R = {};
    const I = t.getParameter(3088), D = t.getParameter(2978), N = (new rt).fromArray(I), z = (new rt).fromArray(D);

    function O(e, n, i) {
      const r = new Uint8Array(4), s = t.createTexture();
      t.bindTexture(e, s), t.texParameteri(e, 10241, 9728), t.texParameteri(e, 10240, 9728);
      for (let e = 0; e < i; e++) t.texImage2D(n + e, 0, 6408, 1, 1, 0, 6408, 5121, r);
      return s
    }

    const B = {};

    function F(e) {
      !0 !== l[e] && (t.enable(e), l[e] = !0)
    }

    function k(e) {
      !1 !== l[e] && (t.disable(e), l[e] = !1)
    }

    B[3553] = O(3553, 3553, 1), B[34067] = O(34067, 34069, 6), s.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), F(2929), a.setFunc(3), V(!1), W(1), F(2884), G(0);
    const U = {[n]: 32774, 101: 32778, 102: 32779};
    if (r) U[103] = 32775, U[104] = 32776; else {
      const t = e.get("EXT_blend_minmax");
      null !== t && (U[103] = t.MIN_EXT, U[104] = t.MAX_EXT)
    }
    const H = {
      200: 0,
      201: 1,
      202: 768,
      204: 770,
      210: 776,
      208: 774,
      206: 772,
      203: 769,
      205: 771,
      209: 775,
      207: 773
    };

    function G(e, i, r, s, a, o, l, c) {
      if (0 !== e) {
        if (!1 === d && (F(3042), d = !0), 5 === e) a = a || i, o = o || r, l = l || s, i === m && a === v || (t.blendEquationSeparate(U[i], U[a]), m = i, v = a), r === f && s === g && o === y && l === x || (t.blendFuncSeparate(H[r], H[s], H[o], H[l]), f = r, g = s, y = o, x = l), p = e, _ = null; else if (e !== p || c !== _) {
          if (m === n && v === n || (t.blendEquation(32774), m = n, v = n), c) switch (e) {
            case 1:
              t.blendFuncSeparate(1, 771, 1, 771);
              break;
            case 2:
              t.blendFunc(1, 1);
              break;
            case 3:
              t.blendFuncSeparate(0, 0, 769, 771);
              break;
            case 4:
              t.blendFuncSeparate(0, 768, 0, 770);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", e)
          } else switch (e) {
            case 1:
              t.blendFuncSeparate(770, 771, 1, 771);
              break;
            case 2:
              t.blendFunc(770, 1);
              break;
            case 3:
              t.blendFunc(0, 769);
              break;
            case 4:
              t.blendFunc(0, 768);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", e)
          }
          f = null, g = null, y = null, x = null, p = e, _ = c
        }
      } else !0 === d && (k(3042), d = !1)
    }

    function V(e) {
      w !== e && (e ? t.frontFace(2304) : t.frontFace(2305), w = e)
    }

    function W(e) {
      0 !== e ? (F(2884), e !== b && (1 === e ? t.cullFace(1029) : 2 === e ? t.cullFace(1028) : t.cullFace(1032))) : k(2884), b = e
    }

    function j(e, n, i) {
      e ? (F(32823), S === n && E === i || (t.polygonOffset(n, i), S = n, E = i)) : k(32823)
    }

    function X(e) {
      void 0 === e && (e = 33984 + T - 1), P !== e && (t.activeTexture(e), P = e)
    }

    return {
      buffers: {color: s, depth: a, stencil: o}, enable: F, disable: k, bindFramebuffer: function (e, n) {
        return null === n && null !== c && (n = c), h[e] !== n && (t.bindFramebuffer(e, n), h[e] = n, r && (36009 === e && (h[36160] = n), 36160 === e && (h[36009] = n)), !0)
      }, bindXRFramebuffer: function (e) {
        e !== c && (t.bindFramebuffer(36160, e), c = e)
      }, useProgram: function (e) {
        return u !== e && (t.useProgram(e), u = e, !0)
      }, setBlending: G, setMaterial: function (t, e) {
        2 === t.side ? k(2884) : F(2884);
        let n = 1 === t.side;
        e && (n = !n), V(n), 1 === t.blending && !1 === t.transparent ? G(0) : G(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.premultipliedAlpha), a.setFunc(t.depthFunc), a.setTest(t.depthTest), a.setMask(t.depthWrite), s.setMask(t.colorWrite);
        const i = t.stencilWrite;
        o.setTest(i), i && (o.setMask(t.stencilWriteMask), o.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask), o.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)), j(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits), !0 === t.alphaToCoverage ? F(32926) : k(32926)
      }, setFlipSided: V, setCullFace: W, setLineWidth: function (e) {
        e !== M && (L && t.lineWidth(e), M = e)
      }, setPolygonOffset: j, setScissorTest: function (t) {
        t ? F(3089) : k(3089)
      }, activeTexture: X, bindTexture: function (e, n) {
        null === P && X();
        let i = R[P];
        void 0 === i && (i = {
          type: void 0,
          texture: void 0
        }, R[P] = i), i.type === e && i.texture === n || (t.bindTexture(e, n || B[e]), i.type = e, i.texture = n)
      }, unbindTexture: function () {
        const e = R[P];
        void 0 !== e && void 0 !== e.type && (t.bindTexture(e.type, null), e.type = void 0, e.texture = void 0)
      }, compressedTexImage2D: function () {
        try {
          t.compressedTexImage2D.apply(t, arguments)
        } catch (t) {
          console.error("THREE.WebGLState:", t)
        }
      }, texImage2D: function () {
        try {
          t.texImage2D.apply(t, arguments)
        } catch (t) {
          console.error("THREE.WebGLState:", t)
        }
      }, texImage3D: function () {
        try {
          t.texImage3D.apply(t, arguments)
        } catch (t) {
          console.error("THREE.WebGLState:", t)
        }
      }, scissor: function (e) {
        !1 === N.equals(e) && (t.scissor(e.x, e.y, e.z, e.w), N.copy(e))
      }, viewport: function (e) {
        !1 === z.equals(e) && (t.viewport(e.x, e.y, e.z, e.w), z.copy(e))
      }, reset: function () {
        t.disable(3042), t.disable(2884), t.disable(2929), t.disable(32823), t.disable(3089), t.disable(2960), t.disable(32926), t.blendEquation(32774), t.blendFunc(1, 0), t.blendFuncSeparate(1, 0, 1, 0), t.colorMask(!0, !0, !0, !0), t.clearColor(0, 0, 0, 0), t.depthMask(!0), t.depthFunc(513), t.clearDepth(1), t.stencilMask(4294967295), t.stencilFunc(519, 0, 4294967295), t.stencilOp(7680, 7680, 7680), t.clearStencil(0), t.cullFace(1029), t.frontFace(2305), t.polygonOffset(0, 0), t.activeTexture(33984), t.bindFramebuffer(36160, null), !0 === r && (t.bindFramebuffer(36009, null), t.bindFramebuffer(36008, null)), t.useProgram(null), t.lineWidth(1), t.scissor(0, 0, t.canvas.width, t.canvas.height), t.viewport(0, 0, t.canvas.width, t.canvas.height), l = {}, P = null, R = {}, c = null, h = {}, u = null, d = !1, p = null, m = null, f = null, g = null, v = null, y = null, x = null, _ = !1, w = null, b = null, M = null, S = null, E = null, N.set(0, 0, t.canvas.width, t.canvas.height), z.set(0, 0, t.canvas.width, t.canvas.height), s.reset(), a.reset(), o.reset()
      }
    }
  }

  function cs(t, e, n, i, r, s, a) {
    const p = r.isWebGL2, M = r.maxTextures, S = r.maxCubemapSize, E = r.maxTextureSize, T = r.maxSamples,
        L = new WeakMap;
    let A, C = !1;
    try {
      C = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1, 1).getContext("2d")
    } catch (t) {
    }

    function P(t, e) {
      return C ? new OffscreenCanvas(t, e) : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")
    }

    function R(t, e, n, i) {
      let r = 1;
      if ((t.width > i || t.height > i) && (r = i / Math.max(t.width, t.height)), r < 1 || !0 === e) {
        if ("undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap) {
          const i = e ? q : Math.floor, s = i(r * t.width), a = i(r * t.height);
          void 0 === A && (A = P(s, a));
          const o = n ? P(s, a) : A;
          return o.width = s, o.height = a, o.getContext("2d").drawImage(t, 0, 0, s, a), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + t.width + "x" + t.height + ") to (" + s + "x" + a + ")."), o
        }
        return "data" in t && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + t.width + "x" + t.height + ")."), t
      }
      return t
    }

    function I(t) {
      return X(t.width) && X(t.height)
    }

    function D(t, e) {
      return t.generateMipmaps && e && t.minFilter !== h && t.minFilter !== u
    }

    function N(e, n, r, s, a = 1) {
      t.generateMipmap(e), i.get(n).__maxMipLevel = Math.log2(Math.max(r, s, a))
    }

    function z(n, i, r) {
      if (!1 === p) return i;
      if (null !== n) {
        if (void 0 !== t[n]) return t[n];
        console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + n + "'")
      }
      let s = i;
      return 6403 === i && (5126 === r && (s = 33326), 5131 === r && (s = 33325), 5121 === r && (s = 33321)), 6407 === i && (5126 === r && (s = 34837), 5131 === r && (s = 34843), 5121 === r && (s = 32849)), 6408 === i && (5126 === r && (s = 34836), 5131 === r && (s = 34842), 5121 === r && (s = 32856)), 33325 !== s && 33326 !== s && 34842 !== s && 34836 !== s || e.get("EXT_color_buffer_float"), s
    }

    function O(t) {
      return t === h || 1004 === t || 1005 === t ? 9728 : 9729
    }

    function B(e) {
      const n = e.target;
      n.removeEventListener("dispose", B), function (e) {
        const n = i.get(e);
        void 0 !== n.__webglInit && (t.deleteTexture(n.__webglTexture), i.remove(e))
      }(n), n.isVideoTexture && L.delete(n), a.memory.textures--
    }

    function F(e) {
      const n = e.target;
      n.removeEventListener("dispose", F), function (e) {
        const n = e.texture, r = i.get(e), s = i.get(n);
        if (e) {
          if (void 0 !== s.__webglTexture && (t.deleteTexture(s.__webglTexture), a.memory.textures--), e.depthTexture && e.depthTexture.dispose(), e.isWebGLCubeRenderTarget) for (let e = 0; e < 6; e++) t.deleteFramebuffer(r.__webglFramebuffer[e]), r.__webglDepthbuffer && t.deleteRenderbuffer(r.__webglDepthbuffer[e]); else t.deleteFramebuffer(r.__webglFramebuffer), r.__webglDepthbuffer && t.deleteRenderbuffer(r.__webglDepthbuffer), r.__webglMultisampledFramebuffer && t.deleteFramebuffer(r.__webglMultisampledFramebuffer), r.__webglColorRenderbuffer && t.deleteRenderbuffer(r.__webglColorRenderbuffer), r.__webglDepthRenderbuffer && t.deleteRenderbuffer(r.__webglDepthRenderbuffer);
          if (e.isWebGLMultipleRenderTargets) for (let e = 0, r = n.length; e < r; e++) {
            const r = i.get(n[e]);
            r.__webglTexture && (t.deleteTexture(r.__webglTexture), a.memory.textures--), i.remove(n[e])
          }
          i.remove(n), i.remove(e)
        }
      }(n)
    }

    let k = 0;

    function U(t, e) {
      const r = i.get(t);
      if (t.isVideoTexture && function (t) {
        const e = a.render.frame;
        L.get(t) !== e && (L.set(t, e), t.update())
      }(t), t.version > 0 && r.__version !== t.version) {
        const n = t.image;
        if (void 0 === n) console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined"); else {
          if (!1 !== n.complete) return void Y(r, t, e);
          console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")
        }
      }
      n.activeTexture(33984 + e), n.bindTexture(3553, r.__webglTexture)
    }

    function H(e, r) {
      const a = i.get(e);
      e.version > 0 && a.__version !== e.version ? function (e, i, r) {
        if (6 !== i.image.length) return;
        j(e, i), n.activeTexture(33984 + r), n.bindTexture(34067, e.__webglTexture), t.pixelStorei(37440, i.flipY), t.pixelStorei(37441, i.premultiplyAlpha), t.pixelStorei(3317, i.unpackAlignment), t.pixelStorei(37443, 0);
        const a = i && (i.isCompressedTexture || i.image[0].isCompressedTexture),
            o = i.image[0] && i.image[0].isDataTexture, l = [];
        for (let t = 0; t < 6; t++) l[t] = a || o ? o ? i.image[t].image : i.image[t] : R(i.image[t], !1, !0, S);
        const c = l[0], h = I(c) || p, u = s.convert(i.format), d = s.convert(i.type), m = z(i.internalFormat, u, d);
        let f;
        if (W(34067, i, h), a) {
          for (let t = 0; t < 6; t++) {
            f = l[t].mipmaps;
            for (let e = 0; e < f.length; e++) {
              const r = f[e];
              i.format !== _ && i.format !== x ? null !== u ? n.compressedTexImage2D(34069 + t, e, m, r.width, r.height, 0, r.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : n.texImage2D(34069 + t, e, m, r.width, r.height, 0, u, d, r.data)
            }
          }
          e.__maxMipLevel = f.length - 1
        } else {
          f = i.mipmaps;
          for (let t = 0; t < 6; t++) if (o) {
            n.texImage2D(34069 + t, 0, m, l[t].width, l[t].height, 0, u, d, l[t].data);
            for (let e = 0; e < f.length; e++) {
              const i = f[e].image[t].image;
              n.texImage2D(34069 + t, e + 1, m, i.width, i.height, 0, u, d, i.data)
            }
          } else {
            n.texImage2D(34069 + t, 0, m, u, d, l[t]);
            for (let e = 0; e < f.length; e++) {
              const i = f[e];
              n.texImage2D(34069 + t, e + 1, m, u, d, i.image[t])
            }
          }
          e.__maxMipLevel = f.length
        }
        D(i, h) && N(34067, i, c.width, c.height), e.__version = i.version, i.onUpdate && i.onUpdate(i)
      }(a, e, r) : (n.activeTexture(33984 + r), n.bindTexture(34067, a.__webglTexture))
    }

    const G = {[o]: 10497, [l]: 33071, [c]: 33648},
        V = {[h]: 9728, 1004: 9984, 1005: 9986, [u]: 9729, 1007: 9985, [d]: 9987};

    function W(n, s, a) {
      if (a ? (t.texParameteri(n, 10242, G[s.wrapS]), t.texParameteri(n, 10243, G[s.wrapT]), 32879 !== n && 35866 !== n || t.texParameteri(n, 32882, G[s.wrapR]), t.texParameteri(n, 10240, V[s.magFilter]), t.texParameteri(n, 10241, V[s.minFilter])) : (t.texParameteri(n, 10242, 33071), t.texParameteri(n, 10243, 33071), 32879 !== n && 35866 !== n || t.texParameteri(n, 32882, 33071), s.wrapS === l && s.wrapT === l || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), t.texParameteri(n, 10240, O(s.magFilter)), t.texParameteri(n, 10241, O(s.minFilter)), s.minFilter !== h && s.minFilter !== u && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), !0 === e.has("EXT_texture_filter_anisotropic")) {
        const a = e.get("EXT_texture_filter_anisotropic");
        if (s.type === g && !1 === e.has("OES_texture_float_linear")) return;
        if (!1 === p && s.type === v && !1 === e.has("OES_texture_half_float_linear")) return;
        (s.anisotropy > 1 || i.get(s).__currentAnisotropy) && (t.texParameterf(n, a.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(s.anisotropy, r.getMaxAnisotropy())), i.get(s).__currentAnisotropy = s.anisotropy)
      }
    }

    function j(e, n) {
      void 0 === e.__webglInit && (e.__webglInit = !0, n.addEventListener("dispose", B), e.__webglTexture = t.createTexture(), a.memory.textures++)
    }

    function Y(e, i, r) {
      let a = 3553;
      i.isDataTexture2DArray && (a = 35866), i.isDataTexture3D && (a = 32879), j(e, i), n.activeTexture(33984 + r), n.bindTexture(a, e.__webglTexture), t.pixelStorei(37440, i.flipY), t.pixelStorei(37441, i.premultiplyAlpha), t.pixelStorei(3317, i.unpackAlignment), t.pixelStorei(37443, 0);
      const o = function (t) {
        return !p && (t.wrapS !== l || t.wrapT !== l || t.minFilter !== h && t.minFilter !== u)
      }(i) && !1 === I(i.image), c = R(i.image, o, !1, E), d = I(c) || p, v = s.convert(i.format);
      let M, S = s.convert(i.type), T = z(i.internalFormat, v, S);
      W(a, i, d);
      const L = i.mipmaps;
      if (i.isDepthTexture) T = 6402, p ? T = i.type === g ? 36012 : i.type === f ? 33190 : i.type === y ? 35056 : 33189 : i.type === g && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), i.format === w && 6402 === T && i.type !== m && i.type !== f && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), i.type = m, S = s.convert(i.type)), i.format === b && 6402 === T && (T = 34041, i.type !== y && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), i.type = y, S = s.convert(i.type))), n.texImage2D(3553, 0, T, c.width, c.height, 0, v, S, null); else if (i.isDataTexture) if (L.length > 0 && d) {
        for (let t = 0, e = L.length; t < e; t++) M = L[t], n.texImage2D(3553, t, T, M.width, M.height, 0, v, S, M.data);
        i.generateMipmaps = !1, e.__maxMipLevel = L.length - 1
      } else n.texImage2D(3553, 0, T, c.width, c.height, 0, v, S, c.data), e.__maxMipLevel = 0; else if (i.isCompressedTexture) {
        for (let t = 0, e = L.length; t < e; t++) M = L[t], i.format !== _ && i.format !== x ? null !== v ? n.compressedTexImage2D(3553, t, T, M.width, M.height, 0, M.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : n.texImage2D(3553, t, T, M.width, M.height, 0, v, S, M.data);
        e.__maxMipLevel = L.length - 1
      } else if (i.isDataTexture2DArray) n.texImage3D(35866, 0, T, c.width, c.height, c.depth, 0, v, S, c.data), e.__maxMipLevel = 0; else if (i.isDataTexture3D) n.texImage3D(32879, 0, T, c.width, c.height, c.depth, 0, v, S, c.data), e.__maxMipLevel = 0; else if (L.length > 0 && d) {
        for (let t = 0, e = L.length; t < e; t++) M = L[t], n.texImage2D(3553, t, T, v, S, M);
        i.generateMipmaps = !1, e.__maxMipLevel = L.length - 1
      } else n.texImage2D(3553, 0, T, v, S, c), e.__maxMipLevel = 0;
      D(i, d) && N(a, i, c.width, c.height), e.__version = i.version, i.onUpdate && i.onUpdate(i)
    }

    function Z(e, r, a, o, l) {
      const c = s.convert(a.format), h = s.convert(a.type), u = z(a.internalFormat, c, h);
      32879 === l || 35866 === l ? n.texImage3D(l, 0, u, r.width, r.height, r.depth, 0, c, h, null) : n.texImage2D(l, 0, u, r.width, r.height, 0, c, h, null), n.bindFramebuffer(36160, e), t.framebufferTexture2D(36160, o, l, i.get(a).__webglTexture, 0), n.bindFramebuffer(36160, null)
    }

    function J(e, n, i) {
      if (t.bindRenderbuffer(36161, e), n.depthBuffer && !n.stencilBuffer) {
        let r = 33189;
        if (i) {
          const e = n.depthTexture;
          e && e.isDepthTexture && (e.type === g ? r = 36012 : e.type === f && (r = 33190));
          const i = Q(n);
          t.renderbufferStorageMultisample(36161, i, r, n.width, n.height)
        } else t.renderbufferStorage(36161, r, n.width, n.height);
        t.framebufferRenderbuffer(36160, 36096, 36161, e)
      } else if (n.depthBuffer && n.stencilBuffer) {
        if (i) {
          const e = Q(n);
          t.renderbufferStorageMultisample(36161, e, 35056, n.width, n.height)
        } else t.renderbufferStorage(36161, 34041, n.width, n.height);
        t.framebufferRenderbuffer(36160, 33306, 36161, e)
      } else {
        const e = !0 === n.isWebGLMultipleRenderTargets ? n.texture[0] : n.texture, r = s.convert(e.format),
            a = s.convert(e.type), o = z(e.internalFormat, r, a);
        if (i) {
          const e = Q(n);
          t.renderbufferStorageMultisample(36161, e, o, n.width, n.height)
        } else t.renderbufferStorage(36161, o, n.width, n.height)
      }
      t.bindRenderbuffer(36161, null)
    }

    function Q(t) {
      return p && t.isWebGLMultisampleRenderTarget ? Math.min(T, t.samples) : 0
    }

    let K = !1, $ = !1;
    this.allocateTextureUnit = function () {
      const t = k;
      return t >= M && console.warn("THREE.WebGLTextures: Trying to use " + t + " texture units while this GPU supports only " + M), k += 1, t
    }, this.resetTextureUnits = function () {
      k = 0
    }, this.setTexture2D = U, this.setTexture2DArray = function (t, e) {
      const r = i.get(t);
      t.version > 0 && r.__version !== t.version ? Y(r, t, e) : (n.activeTexture(33984 + e), n.bindTexture(35866, r.__webglTexture))
    }, this.setTexture3D = function (t, e) {
      const r = i.get(t);
      t.version > 0 && r.__version !== t.version ? Y(r, t, e) : (n.activeTexture(33984 + e), n.bindTexture(32879, r.__webglTexture))
    }, this.setTextureCube = H, this.setupRenderTarget = function (e) {
      const o = e.texture, l = i.get(e), c = i.get(o);
      e.addEventListener("dispose", F), !0 !== e.isWebGLMultipleRenderTargets && (c.__webglTexture = t.createTexture(), c.__version = o.version, a.memory.textures++);
      const h = !0 === e.isWebGLCubeRenderTarget, u = !0 === e.isWebGLMultipleRenderTargets,
          d = !0 === e.isWebGLMultisampleRenderTarget, m = o.isDataTexture3D || o.isDataTexture2DArray, f = I(e) || p;
      if (!p || o.format !== x || o.type !== g && o.type !== v || (o.format = _, console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")), h) {
        l.__webglFramebuffer = [];
        for (let e = 0; e < 6; e++) l.__webglFramebuffer[e] = t.createFramebuffer()
      } else if (l.__webglFramebuffer = t.createFramebuffer(), u) if (r.drawBuffers) {
        const n = e.texture;
        for (let e = 0, r = n.length; e < r; e++) {
          const r = i.get(n[e]);
          void 0 === r.__webglTexture && (r.__webglTexture = t.createTexture(), a.memory.textures++)
        }
      } else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension."); else if (d) if (p) {
        l.__webglMultisampledFramebuffer = t.createFramebuffer(), l.__webglColorRenderbuffer = t.createRenderbuffer(), t.bindRenderbuffer(36161, l.__webglColorRenderbuffer);
        const i = s.convert(o.format), r = s.convert(o.type), a = z(o.internalFormat, i, r), c = Q(e);
        t.renderbufferStorageMultisample(36161, c, a, e.width, e.height), n.bindFramebuffer(36160, l.__webglMultisampledFramebuffer), t.framebufferRenderbuffer(36160, 36064, 36161, l.__webglColorRenderbuffer), t.bindRenderbuffer(36161, null), e.depthBuffer && (l.__webglDepthRenderbuffer = t.createRenderbuffer(), J(l.__webglDepthRenderbuffer, e, !0)), n.bindFramebuffer(36160, null)
      } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
      if (h) {
        n.bindTexture(34067, c.__webglTexture), W(34067, o, f);
        for (let t = 0; t < 6; t++) Z(l.__webglFramebuffer[t], e, o, 36064, 34069 + t);
        D(o, f) && N(34067, o, e.width, e.height), n.bindTexture(34067, null)
      } else if (u) {
        const t = e.texture;
        for (let r = 0, s = t.length; r < s; r++) {
          const s = t[r], a = i.get(s);
          n.bindTexture(3553, a.__webglTexture), W(3553, s, f), Z(l.__webglFramebuffer, e, s, 36064 + r, 3553), D(s, f) && N(3553, s, e.width, e.height)
        }
        n.bindTexture(3553, null)
      } else {
        let t = 3553;
        m && (p ? t = o.isDataTexture3D ? 32879 : 35866 : console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")), n.bindTexture(t, c.__webglTexture), W(t, o, f), Z(l.__webglFramebuffer, e, o, 36064, t), D(o, f) && N(t, o, e.width, e.height, e.depth), n.bindTexture(t, null)
      }
      e.depthBuffer && function (e) {
        const r = i.get(e), s = !0 === e.isWebGLCubeRenderTarget;
        if (e.depthTexture) {
          if (s) throw new Error("target.depthTexture not supported in Cube render targets");
          !function (e, r) {
            if (r && r.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
            if (n.bindFramebuffer(36160, e), !r.depthTexture || !r.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
            i.get(r.depthTexture).__webglTexture && r.depthTexture.image.width === r.width && r.depthTexture.image.height === r.height || (r.depthTexture.image.width = r.width, r.depthTexture.image.height = r.height, r.depthTexture.needsUpdate = !0), U(r.depthTexture, 0);
            const s = i.get(r.depthTexture).__webglTexture;
            if (r.depthTexture.format === w) t.framebufferTexture2D(36160, 36096, 3553, s, 0); else {
              if (r.depthTexture.format !== b) throw new Error("Unknown depthTexture format");
              t.framebufferTexture2D(36160, 33306, 3553, s, 0)
            }
          }(r.__webglFramebuffer, e)
        } else if (s) {
          r.__webglDepthbuffer = [];
          for (let i = 0; i < 6; i++) n.bindFramebuffer(36160, r.__webglFramebuffer[i]), r.__webglDepthbuffer[i] = t.createRenderbuffer(), J(r.__webglDepthbuffer[i], e, !1)
        } else n.bindFramebuffer(36160, r.__webglFramebuffer), r.__webglDepthbuffer = t.createRenderbuffer(), J(r.__webglDepthbuffer, e, !1);
        n.bindFramebuffer(36160, null)
      }(e)
    }, this.updateRenderTargetMipmap = function (t) {
      const e = I(t) || p, r = !0 === t.isWebGLMultipleRenderTargets ? t.texture : [t.texture];
      for (let s = 0, a = r.length; s < a; s++) {
        const a = r[s];
        if (D(a, e)) {
          const e = t.isWebGLCubeRenderTarget ? 34067 : 3553, r = i.get(a).__webglTexture;
          n.bindTexture(e, r), N(e, a, t.width, t.height), n.bindTexture(e, null)
        }
      }
    }, this.updateMultisampleRenderTarget = function (e) {
      if (e.isWebGLMultisampleRenderTarget) if (p) {
        const r = e.width, s = e.height;
        let a = 16384;
        e.depthBuffer && (a |= 256), e.stencilBuffer && (a |= 1024);
        const o = i.get(e);
        n.bindFramebuffer(36008, o.__webglMultisampledFramebuffer), n.bindFramebuffer(36009, o.__webglFramebuffer), t.blitFramebuffer(0, 0, r, s, 0, 0, r, s, a, 9728), n.bindFramebuffer(36008, null), n.bindFramebuffer(36009, o.__webglMultisampledFramebuffer)
      } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")
    }, this.safeSetTexture2D = function (t, e) {
      t && t.isWebGLRenderTarget && (!1 === K && (console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."), K = !0), t = t.texture), U(t, e)
    }, this.safeSetTextureCube = function (t, e) {
      t && t.isWebGLCubeRenderTarget && (!1 === $ && (console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."), $ = !0), t = t.texture), H(t, e)
    }
  }

  function hs(t, e, n) {
    const i = n.isWebGL2;
    return {
      convert: function (t) {
        let n;
        if (t === p) return 5121;
        if (1017 === t) return 32819;
        if (1018 === t) return 32820;
        if (1019 === t) return 33635;
        if (1010 === t) return 5120;
        if (1011 === t) return 5122;
        if (t === m) return 5123;
        if (1013 === t) return 5124;
        if (t === f) return 5125;
        if (t === g) return 5126;
        if (t === v) return i ? 5131 : (n = e.get("OES_texture_half_float"), null !== n ? n.HALF_FLOAT_OES : null);
        if (1021 === t) return 6406;
        if (t === x) return 6407;
        if (t === _) return 6408;
        if (1024 === t) return 6409;
        if (1025 === t) return 6410;
        if (t === w) return 6402;
        if (t === b) return 34041;
        if (1028 === t) return 6403;
        if (1029 === t) return 36244;
        if (1030 === t) return 33319;
        if (1031 === t) return 33320;
        if (1032 === t) return 36248;
        if (1033 === t) return 36249;
        if (33776 === t || 33777 === t || 33778 === t || 33779 === t) {
          if (n = e.get("WEBGL_compressed_texture_s3tc"), null === n) return null;
          if (33776 === t) return n.COMPRESSED_RGB_S3TC_DXT1_EXT;
          if (33777 === t) return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;
          if (33778 === t) return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;
          if (33779 === t) return n.COMPRESSED_RGBA_S3TC_DXT5_EXT
        }
        if (35840 === t || 35841 === t || 35842 === t || 35843 === t) {
          if (n = e.get("WEBGL_compressed_texture_pvrtc"), null === n) return null;
          if (35840 === t) return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
          if (35841 === t) return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
          if (35842 === t) return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
          if (35843 === t) return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
        }
        if (36196 === t) return n = e.get("WEBGL_compressed_texture_etc1"), null !== n ? n.COMPRESSED_RGB_ETC1_WEBGL : null;
        if ((37492 === t || 37496 === t) && (n = e.get("WEBGL_compressed_texture_etc"), null !== n)) {
          if (37492 === t) return n.COMPRESSED_RGB8_ETC2;
          if (37496 === t) return n.COMPRESSED_RGBA8_ETC2_EAC
        }
        return 37808 === t || 37809 === t || 37810 === t || 37811 === t || 37812 === t || 37813 === t || 37814 === t || 37815 === t || 37816 === t || 37817 === t || 37818 === t || 37819 === t || 37820 === t || 37821 === t || 37840 === t || 37841 === t || 37842 === t || 37843 === t || 37844 === t || 37845 === t || 37846 === t || 37847 === t || 37848 === t || 37849 === t || 37850 === t || 37851 === t || 37852 === t || 37853 === t ? (n = e.get("WEBGL_compressed_texture_astc"), null !== n ? t : null) : 36492 === t ? (n = e.get("EXT_texture_compression_bptc"), null !== n ? t : null) : t === y ? i ? 34042 : (n = e.get("WEBGL_depth_texture"), null !== n ? n.UNSIGNED_INT_24_8_WEBGL : null) : void 0
      }
    }
  }

  as.prototype.isMeshDistanceMaterial = !0;

  class us extends xn {
    constructor(t = []) {
      super(), this.cameras = t
    }
  }

  us.prototype.isArrayCamera = !0;

  class ds extends he {
    constructor() {
      super(), this.type = "Group"
    }
  }

  ds.prototype.isGroup = !0;
  const ps = {type: "move"};

  class ms {
    constructor() {
      this._targetRay = null, this._grip = null, this._hand = null
    }

    getHandSpace() {
      return null === this._hand && (this._hand = new ds, this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = {pinching: !1}), this._hand
    }

    getTargetRaySpace() {
      return null === this._targetRay && (this._targetRay = new ds, this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new lt, this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new lt), this._targetRay
    }

    getGripSpace() {
      return null === this._grip && (this._grip = new ds, this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new lt, this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new lt), this._grip
    }

    dispatchEvent(t) {
      return null !== this._targetRay && this._targetRay.dispatchEvent(t), null !== this._grip && this._grip.dispatchEvent(t), null !== this._hand && this._hand.dispatchEvent(t), this
    }

    disconnect(t) {
      return this.dispatchEvent({
        type: "disconnected",
        data: t
      }), null !== this._targetRay && (this._targetRay.visible = !1), null !== this._grip && (this._grip.visible = !1), null !== this._hand && (this._hand.visible = !1), this
    }

    update(t, e, n) {
      let i = null, r = null, s = null;
      const a = this._targetRay, o = this._grip, l = this._hand;
      if (t && "visible-blurred" !== e.session.visibilityState) if (null !== a && (i = e.getPose(t.targetRaySpace, n), null !== i && (a.matrix.fromArray(i.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), i.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(i.linearVelocity)) : a.hasLinearVelocity = !1, i.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(i.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(ps))), l && t.hand) {
        s = !0;
        for (const i of t.hand.values()) {
          const t = e.getJointPose(i, n);
          if (void 0 === l.joints[i.jointName]) {
            const t = new ds;
            t.matrixAutoUpdate = !1, t.visible = !1, l.joints[i.jointName] = t, l.add(t)
          }
          const r = l.joints[i.jointName];
          null !== t && (r.matrix.fromArray(t.transform.matrix), r.matrix.decompose(r.position, r.rotation, r.scale), r.jointRadius = t.radius), r.visible = null !== t
        }
        const i = l.joints["index-finger-tip"], r = l.joints["thumb-tip"], a = i.position.distanceTo(r.position),
            o = .02, c = .005;
        l.inputState.pinching && a > o + c ? (l.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: t.handedness,
          target: this
        })) : !l.inputState.pinching && a <= o - c && (l.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: t.handedness,
          target: this
        }))
      } else null !== o && t.gripSpace && (r = e.getPose(t.gripSpace, n), null !== r && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1));
      return null !== a && (a.visible = null !== i), null !== o && (o.visible = null !== r), null !== l && (l.visible = null !== s), this
    }
  }

  class fs extends B {
    constructor(t, e) {
      super();
      const n = this, i = t.state;
      let r = null, s = 1, a = null, o = "local-floor", l = null, c = null, h = null, u = null, d = null;
      const p = [], m = new Map, f = new xn;
      f.layers.enable(1), f.viewport = new rt;
      const g = new xn;
      g.layers.enable(2), g.viewport = new rt;
      const v = [f, g], y = new us;
      y.layers.enable(1), y.layers.enable(2);
      let x = null, _ = null;

      function w(t) {
        const e = m.get(t.inputSource);
        e && e.dispatchEvent({type: t.type, data: t.inputSource})
      }

      function b() {
        m.forEach((function (t, e) {
          t.disconnect(e)
        })), m.clear(), x = null, _ = null, i.bindXRFramebuffer(null), t.setRenderTarget(t.getRenderTarget()), A.stop(), n.isPresenting = !1, n.dispatchEvent({type: "sessionend"})
      }

      function M(t) {
        const e = r.inputSources;
        for (let t = 0; t < p.length; t++) m.set(e[t], p[t]);
        for (let e = 0; e < t.removed.length; e++) {
          const n = t.removed[e], i = m.get(n);
          i && (i.dispatchEvent({type: "disconnected", data: n}), m.delete(n))
        }
        for (let e = 0; e < t.added.length; e++) {
          const n = t.added[e], i = m.get(n);
          i && i.dispatchEvent({type: "connected", data: n})
        }
      }

      this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function (t) {
        let e = p[t];
        return void 0 === e && (e = new ms, p[t] = e), e.getTargetRaySpace()
      }, this.getControllerGrip = function (t) {
        let e = p[t];
        return void 0 === e && (e = new ms, p[t] = e), e.getGripSpace()
      }, this.getHand = function (t) {
        let e = p[t];
        return void 0 === e && (e = new ms, p[t] = e), e.getHandSpace()
      }, this.setFramebufferScaleFactor = function (t) {
        s = t, !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")
      }, this.setReferenceSpaceType = function (t) {
        o = t, !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")
      }, this.getReferenceSpace = function () {
        return a
      }, this.getSession = function () {
        return r
      }, this.setSession = async function (t) {
        if (r = t, null !== r) {
          r.addEventListener("select", w), r.addEventListener("selectstart", w), r.addEventListener("selectend", w), r.addEventListener("squeeze", w), r.addEventListener("squeezestart", w), r.addEventListener("squeezeend", w), r.addEventListener("end", b), r.addEventListener("inputsourceschange", M);
          const t = e.getContextAttributes();
          if (!0 !== t.xrCompatible && await e.makeXRCompatible(), void 0 === r.renderState.layers) {
            const n = {
              antialias: t.antialias,
              alpha: t.alpha,
              depth: t.depth,
              stencil: t.stencil,
              framebufferScaleFactor: s
            };
            d = new XRWebGLLayer(r, e, n), r.updateRenderState({baseLayer: d})
          } else {
            let n = 0;
            if (t.antialias) {
              const n = {antialias: !0, alpha: t.alpha, depth: t.depth, stencil: t.stencil, framebufferScaleFactor: s};
              d = new XRWebGLLayer(r, e, n), r.updateRenderState({layers: [d]})
            } else {
              t.depth && (n = t.stencil ? 34041 : 6402);
              const i = {colorFormat: t.alpha ? 6408 : 6407, depthFormat: n, scaleFactor: s};
              c = new XRWebGLBinding(r, e), u = c.createProjectionLayer(i), h = e.createFramebuffer(), r.updateRenderState({layers: [u]})
            }
          }
          a = await r.requestReferenceSpace(o), A.setContext(r), A.start(), n.isPresenting = !0, n.dispatchEvent({type: "sessionstart"})
        }
      };
      const S = new lt, E = new lt;

      function T(t, e) {
        null === e ? t.matrixWorld.copy(t.matrix) : t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix), t.matrixWorldInverse.copy(t.matrixWorld).invert()
      }

      this.updateCamera = function (t) {
        if (null === r) return;
        y.near = g.near = f.near = t.near, y.far = g.far = f.far = t.far, x === y.near && _ === y.far || (r.updateRenderState({
          depthNear: y.near,
          depthFar: y.far
        }), x = y.near, _ = y.far);
        const e = t.parent, n = y.cameras;
        T(y, e);
        for (let t = 0; t < n.length; t++) T(n[t], e);
        y.matrixWorld.decompose(y.position, y.quaternion, y.scale), t.position.copy(y.position), t.quaternion.copy(y.quaternion), t.scale.copy(y.scale), t.matrix.copy(y.matrix), t.matrixWorld.copy(y.matrixWorld);
        const i = t.children;
        for (let t = 0, e = i.length; t < e; t++) i[t].updateMatrixWorld(!0);
        2 === n.length ? function (t, e, n) {
          S.setFromMatrixPosition(e.matrixWorld), E.setFromMatrixPosition(n.matrixWorld);
          const i = S.distanceTo(E), r = e.projectionMatrix.elements, s = n.projectionMatrix.elements,
              a = r[14] / (r[10] - 1), o = r[14] / (r[10] + 1), l = (r[9] + 1) / r[5], c = (r[9] - 1) / r[5],
              h = (r[8] - 1) / r[0], u = (s[8] + 1) / s[0], d = a * h, p = a * u, m = i / (-h + u), f = m * -h;
          e.matrixWorld.decompose(t.position, t.quaternion, t.scale), t.translateX(f), t.translateZ(m), t.matrixWorld.compose(t.position, t.quaternion, t.scale), t.matrixWorldInverse.copy(t.matrixWorld).invert();
          const g = a + m, v = o + m, y = d - f, x = p + (i - f), _ = l * o / v * g, w = c * o / v * g;
          t.projectionMatrix.makePerspective(y, x, _, w, g, v)
        }(y, f, g) : y.projectionMatrix.copy(f.projectionMatrix)
      }, this.getCamera = function () {
        return y
      }, this.getFoveation = function () {
        return null !== u ? u.fixedFoveation : null !== d ? d.fixedFoveation : void 0
      }, this.setFoveation = function (t) {
        null !== u && (u.fixedFoveation = t), null !== d && void 0 !== d.fixedFoveation && (d.fixedFoveation = t)
      };
      let L = null;
      const A = new Rn;
      A.setAnimationLoop((function (t, n) {
        if (l = n.getViewerPose(a), null !== l) {
          const t = l.views;
          null !== d && i.bindXRFramebuffer(d.framebuffer);
          let n = !1;
          t.length !== y.cameras.length && (y.cameras.length = 0, n = !0);
          for (let r = 0; r < t.length; r++) {
            const s = t[r];
            let a = null;
            if (null !== d) a = d.getViewport(s); else {
              const t = c.getViewSubImage(u, s);
              i.bindXRFramebuffer(h), void 0 !== t.depthStencilTexture && e.framebufferTexture2D(36160, 36096, 3553, t.depthStencilTexture, 0), e.framebufferTexture2D(36160, 36064, 3553, t.colorTexture, 0), a = t.viewport
            }
            const o = v[r];
            o.matrix.fromArray(s.transform.matrix), o.projectionMatrix.fromArray(s.projectionMatrix), o.viewport.set(a.x, a.y, a.width, a.height), 0 === r && y.matrix.copy(o.matrix), !0 === n && y.cameras.push(o)
          }
        }
        const s = r.inputSources;
        for (let t = 0; t < p.length; t++) {
          const e = p[t], i = s[t];
          e.update(i, n, a)
        }
        L && L(t, n)
      })), this.setAnimationLoop = function (t) {
        L = t
      }, this.dispose = function () {
      }
    }
  }

  function gs(t) {
    function e(e, n) {
      e.opacity.value = n.opacity, n.color && e.diffuse.value.copy(n.color), n.emissive && e.emissive.value.copy(n.emissive).multiplyScalar(n.emissiveIntensity), n.map && (e.map.value = n.map), n.alphaMap && (e.alphaMap.value = n.alphaMap), n.specularMap && (e.specularMap.value = n.specularMap);
      const i = t.get(n).envMap;
      if (i) {
        e.envMap.value = i, e.flipEnvMap.value = i.isCubeTexture && !1 === i.isRenderTargetTexture ? -1 : 1, e.reflectivity.value = n.reflectivity, e.refractionRatio.value = n.refractionRatio;
        const r = t.get(i).__maxMipLevel;
        void 0 !== r && (e.maxMipLevel.value = r)
      }
      let r, s;
      n.lightMap && (e.lightMap.value = n.lightMap, e.lightMapIntensity.value = n.lightMapIntensity), n.aoMap && (e.aoMap.value = n.aoMap, e.aoMapIntensity.value = n.aoMapIntensity), n.map ? r = n.map : n.specularMap ? r = n.specularMap : n.displacementMap ? r = n.displacementMap : n.normalMap ? r = n.normalMap : n.bumpMap ? r = n.bumpMap : n.roughnessMap ? r = n.roughnessMap : n.metalnessMap ? r = n.metalnessMap : n.alphaMap ? r = n.alphaMap : n.emissiveMap ? r = n.emissiveMap : n.clearcoatMap ? r = n.clearcoatMap : n.clearcoatNormalMap ? r = n.clearcoatNormalMap : n.clearcoatRoughnessMap ? r = n.clearcoatRoughnessMap : n.specularIntensityMap ? r = n.specularIntensityMap : n.specularTintMap && (r = n.specularTintMap), void 0 !== r && (r.isWebGLRenderTarget && (r = r.texture), !0 === r.matrixAutoUpdate && r.updateMatrix(), e.uvTransform.value.copy(r.matrix)), n.aoMap ? s = n.aoMap : n.lightMap && (s = n.lightMap), void 0 !== s && (s.isWebGLRenderTarget && (s = s.texture), !0 === s.matrixAutoUpdate && s.updateMatrix(), e.uv2Transform.value.copy(s.matrix))
    }

    function n(e, n) {
      e.roughness.value = n.roughness, e.metalness.value = n.metalness, n.roughnessMap && (e.roughnessMap.value = n.roughnessMap), n.metalnessMap && (e.metalnessMap.value = n.metalnessMap), n.emissiveMap && (e.emissiveMap.value = n.emissiveMap), n.bumpMap && (e.bumpMap.value = n.bumpMap, e.bumpScale.value = n.bumpScale, 1 === n.side && (e.bumpScale.value *= -1)), n.normalMap && (e.normalMap.value = n.normalMap, e.normalScale.value.copy(n.normalScale), 1 === n.side && e.normalScale.value.negate()), n.displacementMap && (e.displacementMap.value = n.displacementMap, e.displacementScale.value = n.displacementScale, e.displacementBias.value = n.displacementBias), t.get(n).envMap && (e.envMapIntensity.value = n.envMapIntensity)
    }

    return {
      refreshFogUniforms: function (t, e) {
        t.fogColor.value.copy(e.color), e.isFog ? (t.fogNear.value = e.near, t.fogFar.value = e.far) : e.isFogExp2 && (t.fogDensity.value = e.density)
      }, refreshMaterialUniforms: function (t, i, r, s, a) {
        i.isMeshBasicMaterial ? e(t, i) : i.isMeshLambertMaterial ? (e(t, i), function (t, e) {
          e.emissiveMap && (t.emissiveMap.value = e.emissiveMap)
        }(t, i)) : i.isMeshToonMaterial ? (e(t, i), function (t, e) {
          e.gradientMap && (t.gradientMap.value = e.gradientMap), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1)), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate()), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
        }(t, i)) : i.isMeshPhongMaterial ? (e(t, i), function (t, e) {
          t.specular.value.copy(e.specular), t.shininess.value = Math.max(e.shininess, 1e-4), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1)), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate()), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
        }(t, i)) : i.isMeshStandardMaterial ? (e(t, i), i.isMeshPhysicalMaterial ? function (t, e, i) {
          n(t, e), t.reflectivity.value = e.reflectivity, t.clearcoat.value = e.clearcoat, t.clearcoatRoughness.value = e.clearcoatRoughness, e.sheen && t.sheen.value.copy(e.sheen), e.clearcoatMap && (t.clearcoatMap.value = e.clearcoatMap), e.clearcoatRoughnessMap && (t.clearcoatRoughnessMap.value = e.clearcoatRoughnessMap), e.clearcoatNormalMap && (t.clearcoatNormalScale.value.copy(e.clearcoatNormalScale), t.clearcoatNormalMap.value = e.clearcoatNormalMap, 1 === e.side && t.clearcoatNormalScale.value.negate()), t.transmission.value = e.transmission, e.transmissionMap && (t.transmissionMap.value = e.transmissionMap), e.transmission > 0 && (t.transmissionSamplerMap.value = i.texture, t.transmissionSamplerSize.value.set(i.width, i.height)), t.thickness.value = e.thickness, e.thicknessMap && (t.thicknessMap.value = e.thicknessMap), t.attenuationDistance.value = e.attenuationDistance, t.attenuationTint.value.copy(e.attenuationTint), t.specularIntensity.value = e.specularIntensity, t.specularTint.value.copy(e.specularTint), e.specularIntensityMap && (t.specularIntensityMap.value = e.specularIntensityMap), e.specularTintMap && (t.specularTintMap.value = e.specularTintMap)
        }(t, i, a) : n(t, i)) : i.isMeshMatcapMaterial ? (e(t, i), function (t, e) {
          e.matcap && (t.matcap.value = e.matcap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1)), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate()), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
        }(t, i)) : i.isMeshDepthMaterial ? (e(t, i), function (t, e) {
          e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
        }(t, i)) : i.isMeshDistanceMaterial ? (e(t, i), function (t, e) {
          e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias), t.referencePosition.value.copy(e.referencePosition), t.nearDistance.value = e.nearDistance, t.farDistance.value = e.farDistance
        }(t, i)) : i.isMeshNormalMaterial ? (e(t, i), function (t, e) {
          e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1)), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate()), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
        }(t, i)) : i.isLineBasicMaterial ? (function (t, e) {
          t.diffuse.value.copy(e.color), t.opacity.value = e.opacity
        }(t, i), i.isLineDashedMaterial && function (t, e) {
          t.dashSize.value = e.dashSize, t.totalSize.value = e.dashSize + e.gapSize, t.scale.value = e.scale
        }(t, i)) : i.isPointsMaterial ? function (t, e, n, i) {
          let r;
          t.diffuse.value.copy(e.color), t.opacity.value = e.opacity, t.size.value = e.size * n, t.scale.value = .5 * i, e.map && (t.map.value = e.map), e.alphaMap && (t.alphaMap.value = e.alphaMap), e.map ? r = e.map : e.alphaMap && (r = e.alphaMap), void 0 !== r && (!0 === r.matrixAutoUpdate && r.updateMatrix(), t.uvTransform.value.copy(r.matrix))
        }(t, i, r, s) : i.isSpriteMaterial ? function (t, e) {
          let n;
          t.diffuse.value.copy(e.color), t.opacity.value = e.opacity, t.rotation.value = e.rotation, e.map && (t.map.value = e.map), e.alphaMap && (t.alphaMap.value = e.alphaMap), e.map ? n = e.map : e.alphaMap && (n = e.alphaMap), void 0 !== n && (!0 === n.matrixAutoUpdate && n.updateMatrix(), t.uvTransform.value.copy(n.matrix))
        }(t, i) : i.isShadowMaterial ? (t.color.value.copy(i.color), t.opacity.value = i.opacity) : i.isShaderMaterial && (i.uniformsNeedUpdate = !1)
      }
    }
  }

  function vs(t = {}) {
    const e = void 0 !== t.canvas ? t.canvas : function () {
          const t = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
          return t.style.display = "block", t
        }(), n = void 0 !== t.context ? t.context : null, i = void 0 !== t.alpha && t.alpha,
        r = void 0 === t.depth || t.depth, s = void 0 === t.stencil || t.stencil,
        a = void 0 !== t.antialias && t.antialias, o = void 0 === t.premultipliedAlpha || t.premultipliedAlpha,
        c = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer,
        u = void 0 !== t.powerPreference ? t.powerPreference : "default",
        m = void 0 !== t.failIfMajorPerformanceCaveat && t.failIfMajorPerformanceCaveat;
    let f = null, y = null;
    const x = [], w = [];
    this.domElement = e, this.debug = {checkShaderErrors: !0}, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.gammaFactor = 2, this.outputEncoding = C, this.physicallyCorrectLights = !1, this.toneMapping = 0, this.toneMappingExposure = 1;
    const b = this;
    let M = !1, S = 0, E = 0, T = null, L = -1, A = null;
    const P = new rt, R = new rt;
    let I = null, D = e.width, N = e.height, z = 1, O = null, B = null;
    const F = new rt(0, 0, D, N), k = new rt(0, 0, D, N);
    let U = !1;
    const H = [], G = new Pn;
    let V = !1, W = !1, j = null;
    const X = new kt, Y = new lt,
        q = {background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0};

    function Z() {
      return null === T ? z : 1
    }

    let J, Q, K, $, tt, et, nt, it, ot, ct, ht, ut, dt, pt, mt, ft, gt, vt, yt, xt, _t, wt, bt, Mt = n;

    function St(t, n) {
      for (let i = 0; i < t.length; i++) {
        const r = t[i], s = e.getContext(r, n);
        if (null !== s) return s
      }
      return null
    }

    try {
      const t = {
        alpha: i,
        depth: r,
        stencil: s,
        antialias: a,
        premultipliedAlpha: o,
        preserveDrawingBuffer: c,
        powerPreference: u,
        failIfMajorPerformanceCaveat: m
      };
      if (e.addEventListener("webglcontextlost", Lt, !1), e.addEventListener("webglcontextrestored", At, !1), null === Mt) {
        const e = ["webgl2", "webgl", "experimental-webgl"];
        if (!0 === b.isWebGL1Renderer && e.shift(), Mt = St(e, t), null === Mt) throw St(e) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.")
      }
      void 0 === Mt.getShaderPrecisionFormat && (Mt.getShaderPrecisionFormat = function () {
        return {rangeMin: 1, rangeMax: 1, precision: 1}
      })
    } catch (t) {
      throw console.error("THREE.WebGLRenderer: " + t.message), t
    }

    function Et() {
      J = new fi(Mt), Q = new Un(Mt, J, t), J.init(Q), wt = new hs(Mt, J, Q), K = new ls(Mt, J, Q), H[0] = 1029, $ = new yi(Mt), tt = new qr, et = new cs(Mt, J, K, tt, Q, wt, $), nt = new Gn(b), it = new mi(b), ot = new In(Mt, Q), bt = new Fn(Mt, J, ot, Q), ct = new gi(Mt, ot, $, bt), ht = new bi(Mt, ct, ot, $), yt = new wi(Mt), ft = new Hn(tt), ut = new Yr(b, nt, it, J, Q, bt, ft), dt = new gs(tt), pt = new Kr(tt), mt = new rs(J, Q), vt = new Bn(b, nt, K, ht, o), gt = new os(b, ht, Q), xt = new kn(Mt, J, $, Q), _t = new vi(Mt, J, $, Q), $.programs = ut.programs, b.capabilities = Q, b.extensions = J, b.properties = tt, b.renderLists = pt, b.shadowMap = gt, b.state = K, b.info = $
    }

    Et();
    const Tt = new fs(b, Mt);

    function Lt(t) {
      t.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), M = !0
    }

    function At() {
      console.log("THREE.WebGLRenderer: Context Restored."), M = !1;
      const t = $.autoReset, e = gt.enabled, n = gt.autoUpdate, i = gt.needsUpdate, r = gt.type;
      Et(), $.autoReset = t, gt.enabled = e, gt.autoUpdate = n, gt.needsUpdate = i, gt.type = r
    }

    function Ct(t) {
      const e = t.target;
      e.removeEventListener("dispose", Ct), function (t) {
        (function (t) {
          const e = tt.get(t).programs;
          void 0 !== e && e.forEach((function (t) {
            ut.releaseProgram(t)
          }))
        })(t), tt.remove(t)
      }(e)
    }

    this.xr = Tt, this.getContext = function () {
      return Mt
    }, this.getContextAttributes = function () {
      return Mt.getContextAttributes()
    }, this.forceContextLoss = function () {
      const t = J.get("WEBGL_lose_context");
      t && t.loseContext()
    }, this.forceContextRestore = function () {
      const t = J.get("WEBGL_lose_context");
      t && t.restoreContext()
    }, this.getPixelRatio = function () {
      return z
    }, this.setPixelRatio = function (t) {
      void 0 !== t && (z = t, this.setSize(D, N, !1))
    }, this.getSize = function (t) {
      return t.set(D, N)
    }, this.setSize = function (t, n, i) {
      Tt.isPresenting ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (D = t, N = n, e.width = Math.floor(t * z), e.height = Math.floor(n * z), !1 !== i && (e.style.width = t + "px", e.style.height = n + "px"), this.setViewport(0, 0, t, n))
    }, this.getDrawingBufferSize = function (t) {
      return t.set(D * z, N * z).floor()
    }, this.setDrawingBufferSize = function (t, n, i) {
      D = t, N = n, z = i, e.width = Math.floor(t * i), e.height = Math.floor(n * i), this.setViewport(0, 0, t, n)
    }, this.getCurrentViewport = function (t) {
      return t.copy(P)
    }, this.getViewport = function (t) {
      return t.copy(F)
    }, this.setViewport = function (t, e, n, i) {
      t.isVector4 ? F.set(t.x, t.y, t.z, t.w) : F.set(t, e, n, i), K.viewport(P.copy(F).multiplyScalar(z).floor())
    }, this.getScissor = function (t) {
      return t.copy(k)
    }, this.setScissor = function (t, e, n, i) {
      t.isVector4 ? k.set(t.x, t.y, t.z, t.w) : k.set(t, e, n, i), K.scissor(R.copy(k).multiplyScalar(z).floor())
    }, this.getScissorTest = function () {
      return U
    }, this.setScissorTest = function (t) {
      K.setScissorTest(U = t)
    }, this.setOpaqueSort = function (t) {
      O = t
    }, this.setTransparentSort = function (t) {
      B = t
    }, this.getClearColor = function (t) {
      return t.copy(vt.getClearColor())
    }, this.setClearColor = function () {
      vt.setClearColor.apply(vt, arguments)
    }, this.getClearAlpha = function () {
      return vt.getClearAlpha()
    }, this.setClearAlpha = function () {
      vt.setClearAlpha.apply(vt, arguments)
    }, this.clear = function (t, e, n) {
      let i = 0;
      (void 0 === t || t) && (i |= 16384), (void 0 === e || e) && (i |= 256), (void 0 === n || n) && (i |= 1024), Mt.clear(i)
    }, this.clearColor = function () {
      this.clear(!0, !1, !1)
    }, this.clearDepth = function () {
      this.clear(!1, !0, !1)
    }, this.clearStencil = function () {
      this.clear(!1, !1, !0)
    }, this.dispose = function () {
      e.removeEventListener("webglcontextlost", Lt, !1), e.removeEventListener("webglcontextrestored", At, !1), pt.dispose(), mt.dispose(), tt.dispose(), nt.dispose(), it.dispose(), ht.dispose(), bt.dispose(), Tt.dispose(), Tt.removeEventListener("sessionstart", Rt), Tt.removeEventListener("sessionend", It), j && (j.dispose(), j = null), Dt.stop()
    }, this.renderBufferImmediate = function (t, e) {
      bt.initAttributes();
      const n = tt.get(t);
      t.hasPositions && !n.position && (n.position = Mt.createBuffer()), t.hasNormals && !n.normal && (n.normal = Mt.createBuffer()), t.hasUvs && !n.uv && (n.uv = Mt.createBuffer()), t.hasColors && !n.color && (n.color = Mt.createBuffer());
      const i = e.getAttributes();
      t.hasPositions && (Mt.bindBuffer(34962, n.position), Mt.bufferData(34962, t.positionArray, 35048), bt.enableAttribute(i.position), Mt.vertexAttribPointer(i.position, 3, 5126, !1, 0, 0)), t.hasNormals && (Mt.bindBuffer(34962, n.normal), Mt.bufferData(34962, t.normalArray, 35048), bt.enableAttribute(i.normal), Mt.vertexAttribPointer(i.normal, 3, 5126, !1, 0, 0)), t.hasUvs && (Mt.bindBuffer(34962, n.uv), Mt.bufferData(34962, t.uvArray, 35048), bt.enableAttribute(i.uv), Mt.vertexAttribPointer(i.uv, 2, 5126, !1, 0, 0)), t.hasColors && (Mt.bindBuffer(34962, n.color), Mt.bufferData(34962, t.colorArray, 35048), bt.enableAttribute(i.color), Mt.vertexAttribPointer(i.color, 3, 5126, !1, 0, 0)), bt.disableUnusedAttributes(), Mt.drawArrays(4, 0, t.count), t.count = 0
    }, this.renderBufferDirect = function (t, e, n, i, r, s) {
      null === e && (e = q);
      const a = r.isMesh && r.matrixWorld.determinant() < 0, o = Ut(t, e, i, r);
      K.setMaterial(i, a);
      let l = n.index;
      const c = n.attributes.position;
      if (null === l) {
        if (void 0 === c || 0 === c.count) return
      } else if (0 === l.count) return;
      let h, u = 1;
      !0 === i.wireframe && (l = ct.getWireframeAttribute(n), u = 2), void 0 === n.morphAttributes.position && void 0 === n.morphAttributes.normal || yt.update(r, n, i, o), bt.setup(r, i, o, n, l);
      let d = xt;
      null !== l && (h = ot.get(l), d = _t, d.setIndex(h));
      const p = null !== l ? l.count : c.count, m = n.drawRange.start * u, f = n.drawRange.count * u,
          g = null !== s ? s.start * u : 0, v = null !== s ? s.count * u : 1 / 0, y = Math.max(m, g),
          x = Math.min(p, m + f, g + v) - 1, _ = Math.max(0, x - y + 1);
      if (0 !== _) {
        if (r.isMesh) !0 === i.wireframe ? (K.setLineWidth(i.wireframeLinewidth * Z()), d.setMode(1)) : d.setMode(4); else if (r.isLine) {
          let t = i.linewidth;
          void 0 === t && (t = 1), K.setLineWidth(t * Z()), r.isLineSegments ? d.setMode(1) : r.isLineLoop ? d.setMode(2) : d.setMode(3)
        } else r.isPoints ? d.setMode(0) : r.isSprite && d.setMode(4);
        if (r.isInstancedMesh) d.renderInstances(y, _, r.count); else if (n.isInstancedBufferGeometry) {
          const t = Math.min(n.instanceCount, n._maxInstanceCount);
          d.renderInstances(y, _, t)
        } else d.render(y, _)
      }
    }, this.compile = function (t, e) {
      y = mt.get(t), y.init(), w.push(y), t.traverseVisible((function (t) {
        t.isLight && t.layers.test(e.layers) && (y.pushLight(t), t.castShadow && y.pushShadow(t))
      })), y.setupLights(), t.traverse((function (e) {
        const n = e.material;
        if (n) if (Array.isArray(n)) for (let i = 0; i < n.length; i++) Bt(n[i], t, e); else Bt(n, t, e)
      })), w.pop(), y = null
    };
    let Pt = null;

    function Rt() {
      Dt.stop()
    }

    function It() {
      Dt.start()
    }

    const Dt = new Rn;

    function Nt(t, e, n, i) {
      if (!1 === t.visible) return;
      if (t.layers.test(e.layers)) if (t.isGroup) n = t.renderOrder; else if (t.isLOD) !0 === t.autoUpdate && t.update(e); else if (t.isLight) y.pushLight(t), t.castShadow && y.pushShadow(t); else if (t.isSprite) {
        if (!t.frustumCulled || G.intersectsSprite(t)) {
          i && Y.setFromMatrixPosition(t.matrixWorld).applyMatrix4(X);
          const e = ht.update(t), r = t.material;
          r.visible && f.push(t, e, r, n, Y.z, null)
        }
      } else if (t.isImmediateRenderObject) i && Y.setFromMatrixPosition(t.matrixWorld).applyMatrix4(X), f.push(t, null, t.material, n, Y.z, null); else if ((t.isMesh || t.isLine || t.isPoints) && (t.isSkinnedMesh && t.skeleton.frame !== $.render.frame && (t.skeleton.update(), t.skeleton.frame = $.render.frame), !t.frustumCulled || G.intersectsObject(t))) {
        i && Y.setFromMatrixPosition(t.matrixWorld).applyMatrix4(X);
        const e = ht.update(t), r = t.material;
        if (Array.isArray(r)) {
          const i = e.groups;
          for (let s = 0, a = i.length; s < a; s++) {
            const a = i[s], o = r[a.materialIndex];
            o && o.visible && f.push(t, e, o, n, Y.z, a)
          }
        } else r.visible && f.push(t, e, r, n, Y.z, null)
      }
      const r = t.children;
      for (let t = 0, s = r.length; t < s; t++) Nt(r[t], e, n, i)
    }

    function zt(t, e, n) {
      const i = !0 === e.isScene ? e.overrideMaterial : null;
      if (n.isArrayCamera) {
        const r = n.cameras;
        for (let n = 0, s = r.length; n < s; n++) {
          const s = r[n];
          K.viewport(P.copy(s.viewport)), y.setupLightsView(s);
          for (let n = 0, r = t.length; n < r; n++) {
            const r = t[n], a = r.object, o = r.geometry, l = null === i ? r.material : i, c = r.group;
            a.layers.test(s.layers) && Ot(a, e, s, o, l, c)
          }
        }
      } else for (let r = 0, s = t.length; r < s; r++) {
        const s = t[r];
        Ot(s.object, e, n, s.geometry, null === i ? s.material : i, s.group)
      }
    }

    function Ot(t, e, n, i, r, s) {
      if (t.onBeforeRender(b, e, n, i, r, s), t.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, t.matrixWorld), t.normalMatrix.getNormalMatrix(t.modelViewMatrix), t.isImmediateRenderObject) {
        const i = Ut(n, e, r, t);
        K.setMaterial(r), bt.reset(), function (t, e) {
          t.render((function (t) {
            b.renderBufferImmediate(t, e)
          }))
        }(t, i)
      } else !0 === r.transparent && 2 === r.side ? (r.side = 1, r.needsUpdate = !0, b.renderBufferDirect(n, e, i, r, t, s), r.side = 0, r.needsUpdate = !0, b.renderBufferDirect(n, e, i, r, t, s), r.side = 2) : b.renderBufferDirect(n, e, i, r, t, s);
      t.onAfterRender(b, e, n, i, r, s)
    }

    function Bt(t, e, n) {
      !0 !== e.isScene && (e = q);
      const i = tt.get(t), r = y.state.lights, s = y.state.shadowsArray, a = r.state.version,
          o = ut.getParameters(t, r.state, s, e, n), l = ut.getProgramCacheKey(o);
      let c = i.programs;
      i.environment = t.isMeshStandardMaterial ? e.environment : null, i.fog = e.fog, i.envMap = (t.isMeshStandardMaterial ? it : nt).get(t.envMap || i.environment), void 0 === c && (t.addEventListener("dispose", Ct), c = new Map, i.programs = c);
      let h = c.get(l);
      if (void 0 !== h) {
        if (i.currentProgram === h && i.lightsStateVersion === a) return Ft(t, o), h
      } else o.uniforms = ut.getUniforms(t), t.onBuild(o, b), t.onBeforeCompile(o, b), h = ut.acquireProgram(o, l), c.set(l, h), i.uniforms = o.uniforms;
      const u = i.uniforms;
      (t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping || (u.clippingPlanes = ft.uniform), Ft(t, o), i.needsLights = function (t) {
        return t.isMeshLambertMaterial || t.isMeshToonMaterial || t.isMeshPhongMaterial || t.isMeshStandardMaterial || t.isShadowMaterial || t.isShaderMaterial && !0 === t.lights
      }(t), i.lightsStateVersion = a, i.needsLights && (u.ambientLightColor.value = r.state.ambient, u.lightProbe.value = r.state.probe, u.directionalLights.value = r.state.directional, u.directionalLightShadows.value = r.state.directionalShadow, u.spotLights.value = r.state.spot, u.spotLightShadows.value = r.state.spotShadow, u.rectAreaLights.value = r.state.rectArea, u.ltc_1.value = r.state.rectAreaLTC1, u.ltc_2.value = r.state.rectAreaLTC2, u.pointLights.value = r.state.point, u.pointLightShadows.value = r.state.pointShadow, u.hemisphereLights.value = r.state.hemi, u.directionalShadowMap.value = r.state.directionalShadowMap, u.directionalShadowMatrix.value = r.state.directionalShadowMatrix, u.spotShadowMap.value = r.state.spotShadowMap, u.spotShadowMatrix.value = r.state.spotShadowMatrix, u.pointShadowMap.value = r.state.pointShadowMap, u.pointShadowMatrix.value = r.state.pointShadowMatrix);
      const d = h.getUniforms(), p = Tr.seqWithValue(d.seq, u);
      return i.currentProgram = h, i.uniformsList = p, h
    }

    function Ft(t, e) {
      const n = tt.get(t);
      n.outputEncoding = e.outputEncoding, n.instancing = e.instancing, n.skinning = e.skinning, n.morphTargets = e.morphTargets, n.morphNormals = e.morphNormals, n.numClippingPlanes = e.numClippingPlanes, n.numIntersection = e.numClipIntersection, n.vertexAlphas = e.vertexAlphas, n.vertexTangents = e.vertexTangents
    }

    function Ut(t, e, n, i) {
      !0 !== e.isScene && (e = q), et.resetTextureUnits();
      const r = e.fog, s = n.isMeshStandardMaterial ? e.environment : null,
          a = null === T ? b.outputEncoding : T.texture.encoding,
          o = (n.isMeshStandardMaterial ? it : nt).get(n.envMap || s),
          l = !0 === n.vertexColors && !!i.geometry && !!i.geometry.attributes.color && 4 === i.geometry.attributes.color.itemSize,
          c = !!i.geometry && !!i.geometry.attributes.tangent,
          h = !!i.geometry && !!i.geometry.morphAttributes.position,
          u = !!i.geometry && !!i.geometry.morphAttributes.normal, d = tt.get(n), p = y.state.lights;
      if (!0 === V && (!0 === W || t !== A)) {
        const e = t === A && n.id === L;
        ft.setState(n, t, e)
      }
      let m = !1;
      n.version === d.__version ? d.needsLights && d.lightsStateVersion !== p.state.version || d.outputEncoding !== a || i.isInstancedMesh && !1 === d.instancing ? m = !0 : i.isInstancedMesh || !0 !== d.instancing ? i.isSkinnedMesh && !1 === d.skinning ? m = !0 : i.isSkinnedMesh || !0 !== d.skinning ? d.envMap !== o || n.fog && d.fog !== r ? m = !0 : void 0 === d.numClippingPlanes || d.numClippingPlanes === ft.numPlanes && d.numIntersection === ft.numIntersection ? (d.vertexAlphas !== l || d.vertexTangents !== c || d.morphTargets !== h || d.morphNormals !== u) && (m = !0) : m = !0 : m = !0 : m = !0 : (m = !0, d.__version = n.version);
      let f = d.currentProgram;
      !0 === m && (f = Bt(n, e, i));
      let g = !1, v = !1, x = !1;
      const _ = f.getUniforms(), w = d.uniforms;
      if (K.useProgram(f.program) && (g = !0, v = !0, x = !0), n.id !== L && (L = n.id, v = !0), g || A !== t) {
        if (_.setValue(Mt, "projectionMatrix", t.projectionMatrix), Q.logarithmicDepthBuffer && _.setValue(Mt, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)), A !== t && (A = t, v = !0, x = !0), n.isShaderMaterial || n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshStandardMaterial || n.envMap) {
          const e = _.map.cameraPosition;
          void 0 !== e && e.setValue(Mt, Y.setFromMatrixPosition(t.matrixWorld))
        }
        (n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial) && _.setValue(Mt, "isOrthographic", !0 === t.isOrthographicCamera), (n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial || n.isShadowMaterial || i.isSkinnedMesh) && _.setValue(Mt, "viewMatrix", t.matrixWorldInverse)
      }
      if (i.isSkinnedMesh) {
        _.setOptional(Mt, i, "bindMatrix"), _.setOptional(Mt, i, "bindMatrixInverse");
        const t = i.skeleton;
        t && (Q.floatVertexTextures ? (null === t.boneTexture && t.computeBoneTexture(), _.setValue(Mt, "boneTexture", t.boneTexture, et), _.setValue(Mt, "boneTextureSize", t.boneTextureSize)) : _.setOptional(Mt, t, "boneMatrices"))
      }
      var M, S;
      return (v || d.receiveShadow !== i.receiveShadow) && (d.receiveShadow = i.receiveShadow, _.setValue(Mt, "receiveShadow", i.receiveShadow)), v && (_.setValue(Mt, "toneMappingExposure", b.toneMappingExposure), d.needsLights && (S = x, (M = w).ambientLightColor.needsUpdate = S, M.lightProbe.needsUpdate = S, M.directionalLights.needsUpdate = S, M.directionalLightShadows.needsUpdate = S, M.pointLights.needsUpdate = S, M.pointLightShadows.needsUpdate = S, M.spotLights.needsUpdate = S, M.spotLightShadows.needsUpdate = S, M.rectAreaLights.needsUpdate = S, M.hemisphereLights.needsUpdate = S), r && n.fog && dt.refreshFogUniforms(w, r), dt.refreshMaterialUniforms(w, n, z, N, j), Tr.upload(Mt, d.uniformsList, w, et)), n.isShaderMaterial && !0 === n.uniformsNeedUpdate && (Tr.upload(Mt, d.uniformsList, w, et), n.uniformsNeedUpdate = !1), n.isSpriteMaterial && _.setValue(Mt, "center", i.center), _.setValue(Mt, "modelViewMatrix", i.modelViewMatrix), _.setValue(Mt, "normalMatrix", i.normalMatrix), _.setValue(Mt, "modelMatrix", i.matrixWorld), f
    }

    Dt.setAnimationLoop((function (t) {
      Pt && Pt(t)
    })), "undefined" != typeof window && Dt.setContext(window), this.setAnimationLoop = function (t) {
      Pt = t, Tt.setAnimationLoop(t), null === t ? Dt.stop() : Dt.start()
    }, Tt.addEventListener("sessionstart", Rt), Tt.addEventListener("sessionend", It), this.render = function (t, e) {
      if (void 0 !== e && !0 !== e.isCamera) return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
      if (!0 === M) return;
      !0 === t.autoUpdate && t.updateMatrixWorld(), null === e.parent && e.updateMatrixWorld(), !0 === Tt.enabled && !0 === Tt.isPresenting && (!0 === Tt.cameraAutoUpdate && Tt.updateCamera(e), e = Tt.getCamera()), !0 === t.isScene && t.onBeforeRender(b, t, e, T), y = mt.get(t, w.length), y.init(), w.push(y), X.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), G.setFromProjectionMatrix(X), W = this.localClippingEnabled, V = ft.init(this.clippingPlanes, W, e), f = pt.get(t, x.length), f.init(), x.push(f), Nt(t, e, 0, b.sortObjects), f.finish(), !0 === b.sortObjects && f.sort(O, B), !0 === V && ft.beginShadows();
      const n = y.state.shadowsArray;
      gt.render(n, t, e), y.setupLights(), y.setupLightsView(e), !0 === V && ft.endShadows(), !0 === this.info.autoReset && this.info.reset(), vt.render(f, t);
      const i = f.opaque, r = f.transmissive, s = f.transparent;
      i.length > 0 && zt(i, t, e), r.length > 0 && function (t, e, n, i) {
        if (null === j) {
          const t = !0 === a && !0 === Q.isWebGL2;
          j = new (t ? at : st)(1024, 1024, {
            generateMipmaps: !0,
            type: null !== wt.convert(v) ? v : p,
            minFilter: d,
            magFilter: h,
            wrapS: l,
            wrapT: l
          })
        }
        const r = b.getRenderTarget();
        b.setRenderTarget(j), b.clear();
        const s = b.toneMapping;
        b.toneMapping = 0, zt(t, n, i), b.toneMapping = s, et.updateMultisampleRenderTarget(j), et.updateRenderTargetMipmap(j), b.setRenderTarget(r), zt(e, n, i)
      }(i, r, t, e), s.length > 0 && zt(s, t, e), null !== T && (et.updateMultisampleRenderTarget(T), et.updateRenderTargetMipmap(T)), !0 === t.isScene && t.onAfterRender(b, t, e), K.buffers.depth.setTest(!0), K.buffers.depth.setMask(!0), K.buffers.color.setMask(!0), K.setPolygonOffset(!1), bt.resetDefaultState(), L = -1, A = null, w.pop(), y = w.length > 0 ? w[w.length - 1] : null, x.pop(), f = x.length > 0 ? x[x.length - 1] : null
    }, this.getActiveCubeFace = function () {
      return S
    }, this.getActiveMipmapLevel = function () {
      return E
    }, this.getRenderTarget = function () {
      return T
    }, this.setRenderTarget = function (t, e = 0, n = 0) {
      T = t, S = e, E = n, t && void 0 === tt.get(t).__webglFramebuffer && et.setupRenderTarget(t);
      let i = null, r = !1, s = !1;
      if (t) {
        const n = t.texture;
        (n.isDataTexture3D || n.isDataTexture2DArray) && (s = !0);
        const a = tt.get(t).__webglFramebuffer;
        t.isWebGLCubeRenderTarget ? (i = a[e], r = !0) : i = t.isWebGLMultisampleRenderTarget ? tt.get(t).__webglMultisampledFramebuffer : a, P.copy(t.viewport), R.copy(t.scissor), I = t.scissorTest
      } else P.copy(F).multiplyScalar(z).floor(), R.copy(k).multiplyScalar(z).floor(), I = U;
      if (K.bindFramebuffer(36160, i) && Q.drawBuffers) {
        let e = !1;
        if (t) if (t.isWebGLMultipleRenderTargets) {
          const n = t.texture;
          if (H.length !== n.length || 36064 !== H[0]) {
            for (let t = 0, e = n.length; t < e; t++) H[t] = 36064 + t;
            H.length = n.length, e = !0
          }
        } else 1 === H.length && 36064 === H[0] || (H[0] = 36064, H.length = 1, e = !0); else 1 === H.length && 1029 === H[0] || (H[0] = 1029, H.length = 1, e = !0);
        e && (Q.isWebGL2 ? Mt.drawBuffers(H) : J.get("WEBGL_draw_buffers").drawBuffersWEBGL(H))
      }
      if (K.viewport(P), K.scissor(R), K.setScissorTest(I), r) {
        const i = tt.get(t.texture);
        Mt.framebufferTexture2D(36160, 36064, 34069 + e, i.__webglTexture, n)
      } else if (s) {
        const i = tt.get(t.texture), r = e || 0;
        Mt.framebufferTextureLayer(36160, 36064, i.__webglTexture, n || 0, r)
      }
    }, this.readRenderTargetPixels = function (t, e, n, i, r, s, a) {
      if (!t || !t.isWebGLRenderTarget) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let o = tt.get(t).__webglFramebuffer;
      if (t.isWebGLCubeRenderTarget && void 0 !== a && (o = o[a]), o) {
        K.bindFramebuffer(36160, o);
        try {
          const a = t.texture, o = a.format, l = a.type;
          if (o !== _ && wt.convert(o) !== Mt.getParameter(35739)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
          const c = l === v && (J.has("EXT_color_buffer_half_float") || Q.isWebGL2 && J.has("EXT_color_buffer_float"));
          if (!(l === p || wt.convert(l) === Mt.getParameter(35738) || l === g && (Q.isWebGL2 || J.has("OES_texture_float") || J.has("WEBGL_color_buffer_float")) || c)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
          36053 === Mt.checkFramebufferStatus(36160) ? e >= 0 && e <= t.width - i && n >= 0 && n <= t.height - r && Mt.readPixels(e, n, i, r, wt.convert(o), wt.convert(l), s) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")
        } finally {
          const t = null !== T ? tt.get(T).__webglFramebuffer : null;
          K.bindFramebuffer(36160, t)
        }
      }
    }, this.copyFramebufferToTexture = function (t, e, n = 0) {
      const i = Math.pow(2, -n), r = Math.floor(e.image.width * i), s = Math.floor(e.image.height * i);
      let a = wt.convert(e.format);
      Q.isWebGL2 && (6407 === a && (a = 32849), 6408 === a && (a = 32856)), et.setTexture2D(e, 0), Mt.copyTexImage2D(3553, n, a, t.x, t.y, r, s, 0), K.unbindTexture()
    }, this.copyTextureToTexture = function (t, e, n, i = 0) {
      const r = e.image.width, s = e.image.height, a = wt.convert(n.format), o = wt.convert(n.type);
      et.setTexture2D(n, 0), Mt.pixelStorei(37440, n.flipY), Mt.pixelStorei(37441, n.premultiplyAlpha), Mt.pixelStorei(3317, n.unpackAlignment), e.isDataTexture ? Mt.texSubImage2D(3553, i, t.x, t.y, r, s, a, o, e.image.data) : e.isCompressedTexture ? Mt.compressedTexSubImage2D(3553, i, t.x, t.y, e.mipmaps[0].width, e.mipmaps[0].height, a, e.mipmaps[0].data) : Mt.texSubImage2D(3553, i, t.x, t.y, a, o, e.image), 0 === i && n.generateMipmaps && Mt.generateMipmap(3553), K.unbindTexture()
    }, this.copyTextureToTexture3D = function (t, e, n, i, r = 0) {
      if (b.isWebGL1Renderer) return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
      const s = t.max.x - t.min.x + 1, a = t.max.y - t.min.y + 1, o = t.max.z - t.min.z + 1, l = wt.convert(i.format),
          c = wt.convert(i.type);
      let h;
      if (i.isDataTexture3D) et.setTexture3D(i, 0), h = 32879; else {
        if (!i.isDataTexture2DArray) return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        et.setTexture2DArray(i, 0), h = 35866
      }
      Mt.pixelStorei(37440, i.flipY), Mt.pixelStorei(37441, i.premultiplyAlpha), Mt.pixelStorei(3317, i.unpackAlignment);
      const u = Mt.getParameter(3314), d = Mt.getParameter(32878), p = Mt.getParameter(3316), m = Mt.getParameter(3315),
          f = Mt.getParameter(32877), g = n.isCompressedTexture ? n.mipmaps[0] : n.image;
      Mt.pixelStorei(3314, g.width), Mt.pixelStorei(32878, g.height), Mt.pixelStorei(3316, t.min.x), Mt.pixelStorei(3315, t.min.y), Mt.pixelStorei(32877, t.min.z), n.isDataTexture || n.isDataTexture3D ? Mt.texSubImage3D(h, r, e.x, e.y, e.z, s, a, o, l, c, g.data) : n.isCompressedTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), Mt.compressedTexSubImage3D(h, r, e.x, e.y, e.z, s, a, o, l, g.data)) : Mt.texSubImage3D(h, r, e.x, e.y, e.z, s, a, o, l, c, g), Mt.pixelStorei(3314, u), Mt.pixelStorei(32878, d), Mt.pixelStorei(3316, p), Mt.pixelStorei(3315, m), Mt.pixelStorei(32877, f), 0 === r && i.generateMipmaps && Mt.generateMipmap(h), K.unbindTexture()
    }, this.initTexture = function (t) {
      et.setTexture2D(t, 0), K.unbindTexture()
    }, this.resetState = function () {
      S = 0, E = 0, T = null, K.reset(), bt.reset()
    }, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {detail: this}))
  }

  (class extends vs {
  }).prototype.isWebGL1Renderer = !0;

  class ys {
    constructor(t, e = 25e-5) {
      this.name = "", this.color = new Pe(t), this.density = e
    }

    clone() {
      return new ys(this.color, this.density)
    }

    toJSON() {
      return {type: "FogExp2", color: this.color.getHex(), density: this.density}
    }
  }

  ys.prototype.isFogExp2 = !0;

  class xs {
    constructor(t, e = 1, n = 1e3) {
      this.name = "", this.color = new Pe(t), this.near = e, this.far = n
    }

    clone() {
      return new xs(this.color, this.near, this.far)
    }

    toJSON() {
      return {type: "Fog", color: this.color.getHex(), near: this.near, far: this.far}
    }
  }

  xs.prototype.isFog = !0;

  class _s extends he {
    constructor() {
      super(), this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {detail: this}))
    }

    copy(t, e) {
      return super.copy(t, e), null !== t.background && (this.background = t.background.clone()), null !== t.environment && (this.environment = t.environment.clone()), null !== t.fog && (this.fog = t.fog.clone()), null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()), this.autoUpdate = t.autoUpdate, this.matrixAutoUpdate = t.matrixAutoUpdate, this
    }

    toJSON(t) {
      const e = super.toJSON(t);
      return null !== this.fog && (e.object.fog = this.fog.toJSON()), e
    }
  }

  _s.prototype.isScene = !0;

  class ws {
    constructor(t, e) {
      this.array = t, this.stride = e, this.count = void 0 !== t ? t.length / e : 0, this.usage = N, this.updateRange = {
        offset: 0,
        count: -1
      }, this.version = 0, this.uuid = G()
    }

    onUploadCallback() {
    }

    set needsUpdate(t) {
      !0 === t && this.version++
    }

    setUsage(t) {
      return this.usage = t, this
    }

    copy(t) {
      return this.array = new t.array.constructor(t.array), this.count = t.count, this.stride = t.stride, this.usage = t.usage, this
    }

    copyAt(t, e, n) {
      t *= this.stride, n *= e.stride;
      for (let i = 0, r = this.stride; i < r; i++) this.array[t + i] = e.array[n + i];
      return this
    }

    set(t, e = 0) {
      return this.array.set(t, e), this
    }

    clone(t) {
      void 0 === t.arrayBuffers && (t.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = G()), void 0 === t.arrayBuffers[this.array.buffer._uuid] && (t.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
      const e = new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),
          n = new this.constructor(e, this.stride);
      return n.setUsage(this.usage), n
    }

    onUpload(t) {
      return this.onUploadCallback = t, this
    }

    toJSON(t) {
      return void 0 === t.arrayBuffers && (t.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = G()), void 0 === t.arrayBuffers[this.array.buffer._uuid] && (t.arrayBuffers[this.array.buffer._uuid] = Array.prototype.slice.call(new Uint32Array(this.array.buffer))), {
        uuid: this.uuid,
        buffer: this.array.buffer._uuid,
        type: this.array.constructor.name,
        stride: this.stride
      }
    }
  }

  ws.prototype.isInterleavedBuffer = !0;
  const bs = new lt;

  class Ms {
    constructor(t, e, n, i = !1) {
      this.name = "", this.data = t, this.itemSize = e, this.offset = n, this.normalized = !0 === i
    }

    get count() {
      return this.data.count
    }

    get array() {
      return this.data.array
    }

    set needsUpdate(t) {
      this.data.needsUpdate = t
    }

    applyMatrix4(t) {
      for (let e = 0, n = this.data.count; e < n; e++) bs.x = this.getX(e), bs.y = this.getY(e), bs.z = this.getZ(e), bs.applyMatrix4(t), this.setXYZ(e, bs.x, bs.y, bs.z);
      return this
    }

    applyNormalMatrix(t) {
      for (let e = 0, n = this.count; e < n; e++) bs.x = this.getX(e), bs.y = this.getY(e), bs.z = this.getZ(e), bs.applyNormalMatrix(t), this.setXYZ(e, bs.x, bs.y, bs.z);
      return this
    }

    transformDirection(t) {
      for (let e = 0, n = this.count; e < n; e++) bs.x = this.getX(e), bs.y = this.getY(e), bs.z = this.getZ(e), bs.transformDirection(t), this.setXYZ(e, bs.x, bs.y, bs.z);
      return this
    }

    setX(t, e) {
      return this.data.array[t * this.data.stride + this.offset] = e, this
    }

    setY(t, e) {
      return this.data.array[t * this.data.stride + this.offset + 1] = e, this
    }

    setZ(t, e) {
      return this.data.array[t * this.data.stride + this.offset + 2] = e, this
    }

    setW(t, e) {
      return this.data.array[t * this.data.stride + this.offset + 3] = e, this
    }

    getX(t) {
      return this.data.array[t * this.data.stride + this.offset]
    }

    getY(t) {
      return this.data.array[t * this.data.stride + this.offset + 1]
    }

    getZ(t) {
      return this.data.array[t * this.data.stride + this.offset + 2]
    }

    getW(t) {
      return this.data.array[t * this.data.stride + this.offset + 3]
    }

    setXY(t, e, n) {
      return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = n, this
    }

    setXYZ(t, e, n, i) {
      return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = i, this
    }

    setXYZW(t, e, n, i, r) {
      return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = i, this.data.array[t + 3] = r, this
    }

    clone(t) {
      if (void 0 === t) {
        console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");
        const t = [];
        for (let e = 0; e < this.count; e++) {
          const n = e * this.data.stride + this.offset;
          for (let e = 0; e < this.itemSize; e++) t.push(this.data.array[n + e])
        }
        return new Ne(new this.array.constructor(t), this.itemSize, this.normalized)
      }
      return void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}), void 0 === t.interleavedBuffers[this.data.uuid] && (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)), new Ms(t.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized)
    }

    toJSON(t) {
      if (void 0 === t) {
        console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");
        const t = [];
        for (let e = 0; e < this.count; e++) {
          const n = e * this.data.stride + this.offset;
          for (let e = 0; e < this.itemSize; e++) t.push(this.data.array[n + e])
        }
        return {itemSize: this.itemSize, type: this.array.constructor.name, array: t, normalized: this.normalized}
      }
      return void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}), void 0 === t.interleavedBuffers[this.data.uuid] && (t.interleavedBuffers[this.data.uuid] = this.data.toJSON(t)), {
        isInterleavedBufferAttribute: !0,
        itemSize: this.itemSize,
        data: this.data.uuid,
        offset: this.offset,
        normalized: this.normalized
      }
    }
  }

  Ms.prototype.isInterleavedBufferAttribute = !0;

  class Ss extends Me {
    constructor(t) {
      super(), this.type = "SpriteMaterial", this.color = new Pe(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.setValues(t)
    }

    copy(t) {
      return super.copy(t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.rotation = t.rotation, this.sizeAttenuation = t.sizeAttenuation, this
    }
  }

  let Es;
  Ss.prototype.isSpriteMaterial = !0;
  const Ts = new lt, Ls = new lt, As = new lt, Cs = new J, Ps = new J, Rs = new kt, Is = new lt, Ds = new lt,
      Ns = new lt, zs = new J, Os = new J, Bs = new J;

  function Fs(t, e, n, i, r, s) {
    Cs.subVectors(t, n).addScalar(.5).multiply(i), void 0 !== r ? (Ps.x = s * Cs.x - r * Cs.y, Ps.y = r * Cs.x + s * Cs.y) : Ps.copy(Cs), t.copy(e), t.x += Ps.x, t.y += Ps.y, t.applyMatrix4(Rs)
  }

  (class extends he {
    constructor(t) {
      if (super(), this.type = "Sprite", void 0 === Es) {
        Es = new Xe;
        const t = new Float32Array([-.5, -.5, 0, 0, 0, .5, -.5, 0, 1, 0, .5, .5, 0, 1, 1, -.5, .5, 0, 0, 1]),
            e = new ws(t, 5);
        Es.setIndex([0, 1, 2, 0, 2, 3]), Es.setAttribute("position", new Ms(e, 3, 0, !1)), Es.setAttribute("uv", new Ms(e, 2, 3, !1))
      }
      this.geometry = Es, this.material = void 0 !== t ? t : new Ss, this.center = new J(.5, .5)
    }

    raycast(t, e) {
      null === t.camera && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), Ls.setFromMatrixScale(this.matrixWorld), Rs.copy(t.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse, this.matrixWorld), As.setFromMatrixPosition(this.modelViewMatrix), t.camera.isPerspectiveCamera && !1 === this.material.sizeAttenuation && Ls.multiplyScalar(-As.z);
      const n = this.material.rotation;
      let i, r;
      0 !== n && (r = Math.cos(n), i = Math.sin(n));
      const s = this.center;
      Fs(Is.set(-.5, -.5, 0), As, s, Ls, i, r), Fs(Ds.set(.5, -.5, 0), As, s, Ls, i, r), Fs(Ns.set(.5, .5, 0), As, s, Ls, i, r), zs.set(0, 0), Os.set(1, 0), Bs.set(1, 1);
      let a = t.ray.intersectTriangle(Is, Ds, Ns, !1, Ts);
      if (null === a && (Fs(Ds.set(-.5, .5, 0), As, s, Ls, i, r), Os.set(0, 1), a = t.ray.intersectTriangle(Is, Ns, Ds, !1, Ts), null === a)) return;
      const o = t.ray.origin.distanceTo(Ts);
      o < t.near || o > t.far || e.push({
        distance: o,
        point: Ts.clone(),
        uv: we.getUV(Ts, Is, Ds, Ns, zs, Os, Bs, new J),
        face: null,
        object: this
      })
    }

    copy(t) {
      return super.copy(t), void 0 !== t.center && this.center.copy(t.center), this.material = t.material, this
    }
  }).prototype.isSprite = !0;
  const ks = new lt, Us = new rt, Hs = new rt, Gs = new lt, Vs = new kt;

  class Ws extends un {
    constructor(t, e) {
      super(t, e), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new kt, this.bindMatrixInverse = new kt
    }

    copy(t) {
      return super.copy(t), this.bindMode = t.bindMode, this.bindMatrix.copy(t.bindMatrix), this.bindMatrixInverse.copy(t.bindMatrixInverse), this.skeleton = t.skeleton, this
    }

    bind(t, e) {
      this.skeleton = t, void 0 === e && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), e = this.matrixWorld), this.bindMatrix.copy(e), this.bindMatrixInverse.copy(e).invert()
    }

    pose() {
      this.skeleton.pose()
    }

    normalizeSkinWeights() {
      const t = new rt, e = this.geometry.attributes.skinWeight;
      for (let n = 0, i = e.count; n < i; n++) {
        t.x = e.getX(n), t.y = e.getY(n), t.z = e.getZ(n), t.w = e.getW(n);
        const i = 1 / t.manhattanLength();
        i !== 1 / 0 ? t.multiplyScalar(i) : t.set(1, 0, 0, 0), e.setXYZW(n, t.x, t.y, t.z, t.w)
      }
    }

    updateMatrixWorld(t) {
      super.updateMatrixWorld(t), "attached" === this.bindMode ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : "detached" === this.bindMode ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode)
    }

    boneTransform(t, e) {
      const n = this.skeleton, i = this.geometry;
      Us.fromBufferAttribute(i.attributes.skinIndex, t), Hs.fromBufferAttribute(i.attributes.skinWeight, t), ks.fromBufferAttribute(i.attributes.position, t).applyMatrix4(this.bindMatrix), e.set(0, 0, 0);
      for (let t = 0; t < 4; t++) {
        const i = Hs.getComponent(t);
        if (0 !== i) {
          const r = Us.getComponent(t);
          Vs.multiplyMatrices(n.bones[r].matrixWorld, n.boneInverses[r]), e.addScaledVector(Gs.copy(ks).applyMatrix4(Vs), i)
        }
      }
      return e.applyMatrix4(this.bindMatrixInverse)
    }
  }

  Ws.prototype.isSkinnedMesh = !0;

  class js extends he {
    constructor() {
      super(), this.type = "Bone"
    }
  }

  js.prototype.isBone = !0;

  class Xs extends nt {
    constructor(t = null, e = 1, n = 1, i, r, s, a, o, l = 1003, c = 1003, h, u) {
      super(null, s, a, o, l, c, i, r, h, u), this.image = {
        data: t,
        width: e,
        height: n
      }, this.magFilter = l, this.minFilter = c, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.needsUpdate = !0
    }
  }

  Xs.prototype.isDataTexture = !0;
  const Ys = new kt, qs = new kt;

  class Zs {
    constructor(t = [], e = []) {
      this.uuid = G(), this.bones = t.slice(0), this.boneInverses = e, this.boneMatrices = null, this.boneTexture = null, this.boneTextureSize = 0, this.frame = -1, this.init()
    }

    init() {
      const t = this.bones, e = this.boneInverses;
      if (this.boneMatrices = new Float32Array(16 * t.length), 0 === e.length) this.calculateInverses(); else if (t.length !== e.length) {
        console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
        for (let t = 0, e = this.bones.length; t < e; t++) this.boneInverses.push(new kt)
      }
    }

    calculateInverses() {
      this.boneInverses.length = 0;
      for (let t = 0, e = this.bones.length; t < e; t++) {
        const e = new kt;
        this.bones[t] && e.copy(this.bones[t].matrixWorld).invert(), this.boneInverses.push(e)
      }
    }

    pose() {
      for (let t = 0, e = this.bones.length; t < e; t++) {
        const e = this.bones[t];
        e && e.matrixWorld.copy(this.boneInverses[t]).invert()
      }
      for (let t = 0, e = this.bones.length; t < e; t++) {
        const e = this.bones[t];
        e && (e.parent && e.parent.isBone ? (e.matrix.copy(e.parent.matrixWorld).invert(), e.matrix.multiply(e.matrixWorld)) : e.matrix.copy(e.matrixWorld), e.matrix.decompose(e.position, e.quaternion, e.scale))
      }
    }

    update() {
      const t = this.bones, e = this.boneInverses, n = this.boneMatrices, i = this.boneTexture;
      for (let i = 0, r = t.length; i < r; i++) {
        const r = t[i] ? t[i].matrixWorld : qs;
        Ys.multiplyMatrices(r, e[i]), Ys.toArray(n, 16 * i)
      }
      null !== i && (i.needsUpdate = !0)
    }

    clone() {
      return new Zs(this.bones, this.boneInverses)
    }

    computeBoneTexture() {
      let t = Math.sqrt(4 * this.bones.length);
      t = Y(t), t = Math.max(t, 4);
      const e = new Float32Array(t * t * 4);
      e.set(this.boneMatrices);
      const n = new Xs(e, t, t, _, g);
      return this.boneMatrices = e, this.boneTexture = n, this.boneTextureSize = t, this
    }

    getBoneByName(t) {
      for (let e = 0, n = this.bones.length; e < n; e++) {
        const n = this.bones[e];
        if (n.name === t) return n
      }
    }

    dispose() {
      null !== this.boneTexture && (this.boneTexture.dispose(), this.boneTexture = null)
    }

    fromJSON(t, e) {
      this.uuid = t.uuid;
      for (let n = 0, i = t.bones.length; n < i; n++) {
        const i = t.bones[n];
        let r = e[i];
        void 0 === r && (console.warn("THREE.Skeleton: No bone found with UUID:", i), r = new js), this.bones.push(r), this.boneInverses.push((new kt).fromArray(t.boneInverses[n]))
      }
      return this.init(), this
    }

    toJSON() {
      const t = {metadata: {version: 4.5, type: "Skeleton", generator: "Skeleton.toJSON"}, bones: [], boneInverses: []};
      t.uuid = this.uuid;
      const e = this.bones, n = this.boneInverses;
      for (let i = 0, r = e.length; i < r; i++) {
        const r = e[i];
        t.bones.push(r.uuid);
        const s = n[i];
        t.boneInverses.push(s.toArray())
      }
      return t
    }
  }

  const Js = new kt, Qs = new kt, Ks = [], $s = new un;
  (class extends un {
    constructor(t, e, n) {
      super(t, e), this.instanceMatrix = new Ne(new Float32Array(16 * n), 16), this.instanceColor = null, this.count = n, this.frustumCulled = !1
    }

    copy(t) {
      return super.copy(t), this.instanceMatrix.copy(t.instanceMatrix), null !== t.instanceColor && (this.instanceColor = t.instanceColor.clone()), this.count = t.count, this
    }

    getColorAt(t, e) {
      e.fromArray(this.instanceColor.array, 3 * t)
    }

    getMatrixAt(t, e) {
      e.fromArray(this.instanceMatrix.array, 16 * t)
    }

    raycast(t, e) {
      const n = this.matrixWorld, i = this.count;
      if ($s.geometry = this.geometry, $s.material = this.material, void 0 !== $s.material) for (let r = 0; r < i; r++) {
        this.getMatrixAt(r, Js), Qs.multiplyMatrices(n, Js), $s.matrixWorld = Qs, $s.raycast(t, Ks);
        for (let t = 0, n = Ks.length; t < n; t++) {
          const n = Ks[t];
          n.instanceId = r, n.object = this, e.push(n)
        }
        Ks.length = 0
      }
    }

    setColorAt(t, e) {
      null === this.instanceColor && (this.instanceColor = new Ne(new Float32Array(3 * this.instanceMatrix.count), 3)), e.toArray(this.instanceColor.array, 3 * t)
    }

    setMatrixAt(t, e) {
      e.toArray(this.instanceMatrix.array, 16 * t)
    }

    updateMorphTargets() {
    }

    dispose() {
      this.dispatchEvent({type: "dispose"})
    }
  }).prototype.isInstancedMesh = !0;

  class ta extends Me {
    constructor(t) {
      super(), this.type = "LineBasicMaterial", this.color = new Pe(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.setValues(t)
    }

    copy(t) {
      return super.copy(t), this.color.copy(t.color), this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this
    }
  }

  ta.prototype.isLineBasicMaterial = !0;
  const ea = new lt, na = new lt, ia = new kt, ra = new Ft, sa = new Pt;

  class aa extends he {
    constructor(t = new Xe, e = new ta) {
      super(), this.type = "Line", this.geometry = t, this.material = e, this.updateMorphTargets()
    }

    copy(t) {
      return super.copy(t), this.material = t.material, this.geometry = t.geometry, this
    }

    computeLineDistances() {
      const t = this.geometry;
      if (t.isBufferGeometry) if (null === t.index) {
        const e = t.attributes.position, n = [0];
        for (let t = 1, i = e.count; t < i; t++) ea.fromBufferAttribute(e, t - 1), na.fromBufferAttribute(e, t), n[t] = n[t - 1], n[t] += ea.distanceTo(na);
        t.setAttribute("lineDistance", new Be(n, 1))
      } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."); else t.isGeometry && console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
      return this
    }

    raycast(t, e) {
      const n = this.geometry, i = this.matrixWorld, r = t.params.Line.threshold, s = n.drawRange;
      if (null === n.boundingSphere && n.computeBoundingSphere(), sa.copy(n.boundingSphere), sa.applyMatrix4(i), sa.radius += r, !1 === t.ray.intersectsSphere(sa)) return;
      ia.copy(i).invert(), ra.copy(t.ray).applyMatrix4(ia);
      const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), o = a * a, l = new lt, c = new lt, h = new lt,
          u = new lt, d = this.isLineSegments ? 2 : 1;
      if (n.isBufferGeometry) {
        const i = n.index, r = n.attributes.position;
        if (null !== i) for (let n = Math.max(0, s.start), a = Math.min(i.count, s.start + s.count) - 1; n < a; n += d) {
          const s = i.getX(n), a = i.getX(n + 1);
          if (l.fromBufferAttribute(r, s), c.fromBufferAttribute(r, a), ra.distanceSqToSegment(l, c, u, h) > o) continue;
          u.applyMatrix4(this.matrixWorld);
          const d = t.ray.origin.distanceTo(u);
          d < t.near || d > t.far || e.push({
            distance: d,
            point: h.clone().applyMatrix4(this.matrixWorld),
            index: n,
            face: null,
            faceIndex: null,
            object: this
          })
        } else for (let n = Math.max(0, s.start), i = Math.min(r.count, s.start + s.count) - 1; n < i; n += d) {
          if (l.fromBufferAttribute(r, n), c.fromBufferAttribute(r, n + 1), ra.distanceSqToSegment(l, c, u, h) > o) continue;
          u.applyMatrix4(this.matrixWorld);
          const i = t.ray.origin.distanceTo(u);
          i < t.near || i > t.far || e.push({
            distance: i,
            point: h.clone().applyMatrix4(this.matrixWorld),
            index: n,
            face: null,
            faceIndex: null,
            object: this
          })
        }
      } else n.isGeometry && console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
    }

    updateMorphTargets() {
      const t = this.geometry;
      if (t.isBufferGeometry) {
        const e = t.morphAttributes, n = Object.keys(e);
        if (n.length > 0) {
          const t = e[n[0]];
          if (void 0 !== t) {
            this.morphTargetInfluences = [], this.morphTargetDictionary = {};
            for (let e = 0, n = t.length; e < n; e++) {
              const n = t[e].name || String(e);
              this.morphTargetInfluences.push(0), this.morphTargetDictionary[n] = e
            }
          }
        }
      } else {
        const e = t.morphTargets;
        void 0 !== e && e.length > 0 && console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")
      }
    }
  }

  aa.prototype.isLine = !0;
  const oa = new lt, la = new lt;

  class ca extends aa {
    constructor(t, e) {
      super(t, e), this.type = "LineSegments"
    }

    computeLineDistances() {
      const t = this.geometry;
      if (t.isBufferGeometry) if (null === t.index) {
        const e = t.attributes.position, n = [];
        for (let t = 0, i = e.count; t < i; t += 2) oa.fromBufferAttribute(e, t), la.fromBufferAttribute(e, t + 1), n[t] = 0 === t ? 0 : n[t - 1], n[t + 1] = n[t] + oa.distanceTo(la);
        t.setAttribute("lineDistance", new Be(n, 1))
      } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."); else t.isGeometry && console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
      return this
    }
  }

  ca.prototype.isLineSegments = !0;
  (class extends aa {
    constructor(t, e) {
      super(t, e), this.type = "LineLoop"
    }
  }).prototype.isLineLoop = !0;

  class ha extends Me {
    constructor(t) {
      super(), this.type = "PointsMaterial", this.color = new Pe(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.setValues(t)
    }

    copy(t) {
      return super.copy(t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this
    }
  }

  ha.prototype.isPointsMaterial = !0;
  const ua = new kt, da = new Ft, pa = new Pt, ma = new lt;

  function fa(t, e, n, i, r, s, a) {
    const o = da.distanceSqToPoint(t);
    if (o < n) {
      const n = new lt;
      da.closestPointToPoint(t, n), n.applyMatrix4(i);
      const l = r.ray.origin.distanceTo(n);
      if (l < r.near || l > r.far) return;
      s.push({distance: l, distanceToRay: Math.sqrt(o), point: n, index: e, face: null, object: a})
    }
  }

  (class extends he {
    constructor(t = new Xe, e = new ha) {
      super(), this.type = "Points", this.geometry = t, this.material = e, this.updateMorphTargets()
    }

    copy(t) {
      return super.copy(t), this.material = t.material, this.geometry = t.geometry, this
    }

    raycast(t, e) {
      const n = this.geometry, i = this.matrixWorld, r = t.params.Points.threshold, s = n.drawRange;
      if (null === n.boundingSphere && n.computeBoundingSphere(), pa.copy(n.boundingSphere), pa.applyMatrix4(i), pa.radius += r, !1 === t.ray.intersectsSphere(pa)) return;
      ua.copy(i).invert(), da.copy(t.ray).applyMatrix4(ua);
      const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), o = a * a;
      if (n.isBufferGeometry) {
        const r = n.index, a = n.attributes.position;
        if (null !== r) for (let n = Math.max(0, s.start), l = Math.min(r.count, s.start + s.count); n < l; n++) {
          const s = r.getX(n);
          ma.fromBufferAttribute(a, s), fa(ma, s, o, i, t, e, this)
        } else for (let n = Math.max(0, s.start), r = Math.min(a.count, s.start + s.count); n < r; n++) ma.fromBufferAttribute(a, n), fa(ma, n, o, i, t, e, this)
      } else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
    }

    updateMorphTargets() {
      const t = this.geometry;
      if (t.isBufferGeometry) {
        const e = t.morphAttributes, n = Object.keys(e);
        if (n.length > 0) {
          const t = e[n[0]];
          if (void 0 !== t) {
            this.morphTargetInfluences = [], this.morphTargetDictionary = {};
            for (let e = 0, n = t.length; e < n; e++) {
              const n = t[e].name || String(e);
              this.morphTargetInfluences.push(0), this.morphTargetDictionary[n] = e
            }
          }
        }
      } else {
        const e = t.morphTargets;
        void 0 !== e && e.length > 0 && console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")
      }
    }
  }).prototype.isPoints = !0, class extends nt {
    constructor(t, e, n, i, r, s, a, o, l) {
      super(t, e, n, i, r, s, a, o, l), this.format = void 0 !== a ? a : x, this.minFilter = void 0 !== s ? s : u, this.magFilter = void 0 !== r ? r : u, this.generateMipmaps = !1;
      const c = this;
      "requestVideoFrameCallback" in t && t.requestVideoFrameCallback((function e() {
        c.needsUpdate = !0, t.requestVideoFrameCallback(e)
      }))
    }

    clone() {
      return new this.constructor(this.image).copy(this)
    }

    update() {
      const t = this.image;
      !1 == "requestVideoFrameCallback" in t && t.readyState >= t.HAVE_CURRENT_DATA && (this.needsUpdate = !0)
    }
  }.prototype.isVideoTexture = !0;
  (class extends nt {
    constructor(t, e, n, i, r, s, a, o, l, c, h, u) {
      super(null, s, a, o, l, c, i, r, h, u), this.image = {
        width: e,
        height: n
      }, this.mipmaps = t, this.flipY = !1, this.generateMipmaps = !1
    }
  }).prototype.isCompressedTexture = !0, class extends nt {
    constructor(t, e, n, i, r, s, a, o, l) {
      super(t, e, n, i, r, s, a, o, l), this.needsUpdate = !0
    }
  }.prototype.isCanvasTexture = !0, class extends nt {
    constructor(t, e, n, i, r, s, a, o, l, c) {
      if ((c = void 0 !== c ? c : w) !== w && c !== b) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
      void 0 === n && c === w && (n = m), void 0 === n && c === b && (n = y), super(null, i, r, s, a, o, c, n, l), this.image = {
        width: t,
        height: e
      }, this.magFilter = void 0 !== a ? a : h, this.minFilter = void 0 !== o ? o : h, this.flipY = !1, this.generateMipmaps = !1
    }
  }.prototype.isDepthTexture = !0;

  class ga extends Xe {
    constructor(t = 1, e = 8, n = 0, i = 2 * Math.PI) {
      super(), this.type = "CircleGeometry", this.parameters = {
        radius: t,
        segments: e,
        thetaStart: n,
        thetaLength: i
      }, e = Math.max(3, e);
      const r = [], s = [], a = [], o = [], l = new lt, c = new J;
      s.push(0, 0, 0), a.push(0, 0, 1), o.push(.5, .5);
      for (let r = 0, h = 3; r <= e; r++, h += 3) {
        const u = n + r / e * i;
        l.x = t * Math.cos(u), l.y = t * Math.sin(u), s.push(l.x, l.y, l.z), a.push(0, 0, 1), c.x = (s[h] / t + 1) / 2, c.y = (s[h + 1] / t + 1) / 2, o.push(c.x, c.y)
      }
      for (let t = 1; t <= e; t++) r.push(t, t + 1, 0);
      this.setIndex(r), this.setAttribute("position", new Be(s, 3)), this.setAttribute("normal", new Be(a, 3)), this.setAttribute("uv", new Be(o, 2))
    }

    static fromJSON(t) {
      return new ga(t.radius, t.segments, t.thetaStart, t.thetaLength)
    }
  }

  class va extends Xe {
    constructor(t = 1, e = 1, n = 1, i = 8, r = 1, s = !1, a = 0, o = 2 * Math.PI) {
      super(), this.type = "CylinderGeometry", this.parameters = {
        radiusTop: t,
        radiusBottom: e,
        height: n,
        radialSegments: i,
        heightSegments: r,
        openEnded: s,
        thetaStart: a,
        thetaLength: o
      };
      const l = this;
      i = Math.floor(i), r = Math.floor(r);
      const c = [], h = [], u = [], d = [];
      let p = 0;
      const m = [], f = n / 2;
      let g = 0;

      function v(n) {
        const r = p, s = new J, m = new lt;
        let v = 0;
        const y = !0 === n ? t : e, x = !0 === n ? 1 : -1;
        for (let t = 1; t <= i; t++) h.push(0, f * x, 0), u.push(0, x, 0), d.push(.5, .5), p++;
        const _ = p;
        for (let t = 0; t <= i; t++) {
          const e = t / i * o + a, n = Math.cos(e), r = Math.sin(e);
          m.x = y * r, m.y = f * x, m.z = y * n, h.push(m.x, m.y, m.z), u.push(0, x, 0), s.x = .5 * n + .5, s.y = .5 * r * x + .5, d.push(s.x, s.y), p++
        }
        for (let t = 0; t < i; t++) {
          const e = r + t, i = _ + t;
          !0 === n ? c.push(i, i + 1, e) : c.push(i + 1, i, e), v += 3
        }
        l.addGroup(g, v, !0 === n ? 1 : 2), g += v
      }

      !function () {
        const s = new lt, v = new lt;
        let y = 0;
        const x = (e - t) / n;
        for (let l = 0; l <= r; l++) {
          const c = [], g = l / r, y = g * (e - t) + t;
          for (let t = 0; t <= i; t++) {
            const e = t / i, r = e * o + a, l = Math.sin(r), m = Math.cos(r);
            v.x = y * l, v.y = -g * n + f, v.z = y * m, h.push(v.x, v.y, v.z), s.set(l, x, m).normalize(), u.push(s.x, s.y, s.z), d.push(e, 1 - g), c.push(p++)
          }
          m.push(c)
        }
        for (let t = 0; t < i; t++) for (let e = 0; e < r; e++) {
          const n = m[e][t], i = m[e + 1][t], r = m[e + 1][t + 1], s = m[e][t + 1];
          c.push(n, i, s), c.push(i, r, s), y += 6
        }
        l.addGroup(g, y, 0), g += y
      }(), !1 === s && (t > 0 && v(!0), e > 0 && v(!1)), this.setIndex(c), this.setAttribute("position", new Be(h, 3)), this.setAttribute("normal", new Be(u, 3)), this.setAttribute("uv", new Be(d, 2))
    }

    static fromJSON(t) {
      return new va(t.radiusTop, t.radiusBottom, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength)
    }
  }

  class ya extends Xe {
    constructor(t, e, n = 1, i = 0) {
      super(), this.type = "PolyhedronGeometry", this.parameters = {vertices: t, indices: e, radius: n, detail: i};
      const r = [], s = [];

      function a(t, e, n, i) {
        const r = i + 1, s = [];
        for (let i = 0; i <= r; i++) {
          s[i] = [];
          const a = t.clone().lerp(n, i / r), o = e.clone().lerp(n, i / r), l = r - i;
          for (let t = 0; t <= l; t++) s[i][t] = 0 === t && i === r ? a : a.clone().lerp(o, t / l)
        }
        for (let t = 0; t < r; t++) for (let e = 0; e < 2 * (r - t) - 1; e++) {
          const n = Math.floor(e / 2);
          e % 2 == 0 ? (o(s[t][n + 1]), o(s[t + 1][n]), o(s[t][n])) : (o(s[t][n + 1]), o(s[t + 1][n + 1]), o(s[t + 1][n]))
        }
      }

      function o(t) {
        r.push(t.x, t.y, t.z)
      }

      function l(e, n) {
        const i = 3 * e;
        n.x = t[i + 0], n.y = t[i + 1], n.z = t[i + 2]
      }

      function c(t, e, n, i) {
        i < 0 && 1 === t.x && (s[e] = t.x - 1), 0 === n.x && 0 === n.z && (s[e] = i / 2 / Math.PI + .5)
      }

      function h(t) {
        return Math.atan2(t.z, -t.x)
      }

      !function (t) {
        const n = new lt, i = new lt, r = new lt;
        for (let s = 0; s < e.length; s += 3) l(e[s + 0], n), l(e[s + 1], i), l(e[s + 2], r), a(n, i, r, t)
      }(i), function (t) {
        const e = new lt;
        for (let n = 0; n < r.length; n += 3) e.x = r[n + 0], e.y = r[n + 1], e.z = r[n + 2], e.normalize().multiplyScalar(t), r[n + 0] = e.x, r[n + 1] = e.y, r[n + 2] = e.z
      }(n), function () {
        const t = new lt;
        for (let n = 0; n < r.length; n += 3) {
          t.x = r[n + 0], t.y = r[n + 1], t.z = r[n + 2];
          const i = h(t) / 2 / Math.PI + .5,
              a = (e = t, Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z)) / Math.PI + .5);
          s.push(i, 1 - a)
        }
        var e;
        (function () {
          const t = new lt, e = new lt, n = new lt, i = new lt, a = new J, o = new J, l = new J;
          for (let u = 0, d = 0; u < r.length; u += 9, d += 6) {
            t.set(r[u + 0], r[u + 1], r[u + 2]), e.set(r[u + 3], r[u + 4], r[u + 5]), n.set(r[u + 6], r[u + 7], r[u + 8]), a.set(s[d + 0], s[d + 1]), o.set(s[d + 2], s[d + 3]), l.set(s[d + 4], s[d + 5]), i.copy(t).add(e).add(n).divideScalar(3);
            const p = h(i);
            c(a, d + 0, t, p), c(o, d + 2, e, p), c(l, d + 4, n, p)
          }
        })(), function () {
          for (let t = 0; t < s.length; t += 6) {
            const e = s[t + 0], n = s[t + 2], i = s[t + 4], r = Math.max(e, n, i), a = Math.min(e, n, i);
            r > .9 && a < .1 && (e < .2 && (s[t + 0] += 1), n < .2 && (s[t + 2] += 1), i < .2 && (s[t + 4] += 1))
          }
        }()
      }(), this.setAttribute("position", new Be(r, 3)), this.setAttribute("normal", new Be(r.slice(), 3)), this.setAttribute("uv", new Be(s, 2)), 0 === i ? this.computeVertexNormals() : this.normalizeNormals()
    }

    static fromJSON(t) {
      return new ya(t.vertices, t.indices, t.radius, t.details)
    }
  }

  new lt, new lt, new lt, new we;

  class xa {
    constructor() {
      this.type = "Curve", this.arcLengthDivisions = 200
    }

    getPoint() {
      return console.warn("THREE.Curve: .getPoint() not implemented."), null
    }

    getPointAt(t, e) {
      const n = this.getUtoTmapping(t);
      return this.getPoint(n, e)
    }

    getPoints(t = 5) {
      const e = [];
      for (let n = 0; n <= t; n++) e.push(this.getPoint(n / t));
      return e
    }

    getSpacedPoints(t = 5) {
      const e = [];
      for (let n = 0; n <= t; n++) e.push(this.getPointAt(n / t));
      return e
    }

    getLength() {
      const t = this.getLengths();
      return t[t.length - 1]
    }

    getLengths(t = this.arcLengthDivisions) {
      if (this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate) return this.cacheArcLengths;
      this.needsUpdate = !1;
      const e = [];
      let n, i = this.getPoint(0), r = 0;
      e.push(0);
      for (let s = 1; s <= t; s++) n = this.getPoint(s / t), r += n.distanceTo(i), e.push(r), i = n;
      return this.cacheArcLengths = e, e
    }

    updateArcLengths() {
      this.needsUpdate = !0, this.getLengths()
    }

    getUtoTmapping(t, e) {
      const n = this.getLengths();
      let i = 0;
      const r = n.length;
      let s;
      s = e || t * n[r - 1];
      let a, o = 0, l = r - 1;
      for (; o <= l;) if (i = Math.floor(o + (l - o) / 2), a = n[i] - s, a < 0) o = i + 1; else {
        if (!(a > 0)) {
          l = i;
          break
        }
        l = i - 1
      }
      if (i = l, n[i] === s) return i / (r - 1);
      const c = n[i];
      return (i + (s - c) / (n[i + 1] - c)) / (r - 1)
    }

    getTangent(t, e) {
      const n = 1e-4;
      let i = t - n, r = t + n;
      i < 0 && (i = 0), r > 1 && (r = 1);
      const s = this.getPoint(i), a = this.getPoint(r), o = e || (s.isVector2 ? new J : new lt);
      return o.copy(a).sub(s).normalize(), o
    }

    getTangentAt(t, e) {
      const n = this.getUtoTmapping(t);
      return this.getTangent(n, e)
    }

    computeFrenetFrames(t, e) {
      const n = new lt, i = [], r = [], s = [], a = new lt, o = new kt;
      for (let e = 0; e <= t; e++) {
        const n = e / t;
        i[e] = this.getTangentAt(n, new lt), i[e].normalize()
      }
      r[0] = new lt, s[0] = new lt;
      let l = Number.MAX_VALUE;
      const c = Math.abs(i[0].x), h = Math.abs(i[0].y), u = Math.abs(i[0].z);
      c <= l && (l = c, n.set(1, 0, 0)), h <= l && (l = h, n.set(0, 1, 0)), u <= l && n.set(0, 0, 1), a.crossVectors(i[0], n).normalize(), r[0].crossVectors(i[0], a), s[0].crossVectors(i[0], r[0]);
      for (let e = 1; e <= t; e++) {
        if (r[e] = r[e - 1].clone(), s[e] = s[e - 1].clone(), a.crossVectors(i[e - 1], i[e]), a.length() > Number.EPSILON) {
          a.normalize();
          const t = Math.acos(V(i[e - 1].dot(i[e]), -1, 1));
          r[e].applyMatrix4(o.makeRotationAxis(a, t))
        }
        s[e].crossVectors(i[e], r[e])
      }
      if (!0 === e) {
        let e = Math.acos(V(r[0].dot(r[t]), -1, 1));
        e /= t, i[0].dot(a.crossVectors(r[0], r[t])) > 0 && (e = -e);
        for (let n = 1; n <= t; n++) r[n].applyMatrix4(o.makeRotationAxis(i[n], e * n)), s[n].crossVectors(i[n], r[n])
      }
      return {tangents: i, normals: r, binormals: s}
    }

    clone() {
      return (new this.constructor).copy(this)
    }

    copy(t) {
      return this.arcLengthDivisions = t.arcLengthDivisions, this
    }

    toJSON() {
      const t = {metadata: {version: 4.5, type: "Curve", generator: "Curve.toJSON"}};
      return t.arcLengthDivisions = this.arcLengthDivisions, t.type = this.type, t
    }

    fromJSON(t) {
      return this.arcLengthDivisions = t.arcLengthDivisions, this
    }
  }

  class _a extends xa {
    constructor(t = 0, e = 0, n = 1, i = 1, r = 0, s = 2 * Math.PI, a = !1, o = 0) {
      super(), this.type = "EllipseCurve", this.aX = t, this.aY = e, this.xRadius = n, this.yRadius = i, this.aStartAngle = r, this.aEndAngle = s, this.aClockwise = a, this.aRotation = o
    }

    getPoint(t, e) {
      const n = e || new J, i = 2 * Math.PI;
      let r = this.aEndAngle - this.aStartAngle;
      const s = Math.abs(r) < Number.EPSILON;
      for (; r < 0;) r += i;
      for (; r > i;) r -= i;
      r < Number.EPSILON && (r = s ? 0 : i), !0 !== this.aClockwise || s || (r === i ? r = -i : r -= i);
      const a = this.aStartAngle + t * r;
      let o = this.aX + this.xRadius * Math.cos(a), l = this.aY + this.yRadius * Math.sin(a);
      if (0 !== this.aRotation) {
        const t = Math.cos(this.aRotation), e = Math.sin(this.aRotation), n = o - this.aX, i = l - this.aY;
        o = n * t - i * e + this.aX, l = n * e + i * t + this.aY
      }
      return n.set(o, l)
    }

    copy(t) {
      return super.copy(t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this
    }

    toJSON() {
      const t = super.toJSON();
      return t.aX = this.aX, t.aY = this.aY, t.xRadius = this.xRadius, t.yRadius = this.yRadius, t.aStartAngle = this.aStartAngle, t.aEndAngle = this.aEndAngle, t.aClockwise = this.aClockwise, t.aRotation = this.aRotation, t
    }

    fromJSON(t) {
      return super.fromJSON(t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this
    }
  }

  _a.prototype.isEllipseCurve = !0;

  class wa extends _a {
    constructor(t, e, n, i, r, s) {
      super(t, e, n, n, i, r, s), this.type = "ArcCurve"
    }
  }

  function ba() {
    let t = 0, e = 0, n = 0, i = 0;

    function r(r, s, a, o) {
      t = r, e = a, n = -3 * r + 3 * s - 2 * a - o, i = 2 * r - 2 * s + a + o
    }

    return {
      initCatmullRom: function (t, e, n, i, s) {
        r(e, n, s * (n - t), s * (i - e))
      }, initNonuniformCatmullRom: function (t, e, n, i, s, a, o) {
        let l = (e - t) / s - (n - t) / (s + a) + (n - e) / a, c = (n - e) / a - (i - e) / (a + o) + (i - n) / o;
        l *= a, c *= a, r(e, n, l, c)
      }, calc: function (r) {
        const s = r * r;
        return t + e * r + n * s + i * (s * r)
      }
    }
  }

  wa.prototype.isArcCurve = !0;
  const Ma = new lt, Sa = new ba, Ea = new ba, Ta = new ba;

  class La extends xa {
    constructor(t = [], e = !1, n = "centripetal", i = .5) {
      super(), this.type = "CatmullRomCurve3", this.points = t, this.closed = e, this.curveType = n, this.tension = i
    }

    getPoint(t, e = new lt) {
      const n = e, i = this.points, r = i.length, s = (r - (this.closed ? 0 : 1)) * t;
      let a, o, l = Math.floor(s), c = s - l;
      this.closed ? l += l > 0 ? 0 : (Math.floor(Math.abs(l) / r) + 1) * r : 0 === c && l === r - 1 && (l = r - 2, c = 1), this.closed || l > 0 ? a = i[(l - 1) % r] : (Ma.subVectors(i[0], i[1]).add(i[0]), a = Ma);
      const h = i[l % r], u = i[(l + 1) % r];
      if (this.closed || l + 2 < r ? o = i[(l + 2) % r] : (Ma.subVectors(i[r - 1], i[r - 2]).add(i[r - 1]), o = Ma), "centripetal" === this.curveType || "chordal" === this.curveType) {
        const t = "chordal" === this.curveType ? .5 : .25;
        let e = Math.pow(a.distanceToSquared(h), t), n = Math.pow(h.distanceToSquared(u), t),
            i = Math.pow(u.distanceToSquared(o), t);
        n < 1e-4 && (n = 1), e < 1e-4 && (e = n), i < 1e-4 && (i = n), Sa.initNonuniformCatmullRom(a.x, h.x, u.x, o.x, e, n, i), Ea.initNonuniformCatmullRom(a.y, h.y, u.y, o.y, e, n, i), Ta.initNonuniformCatmullRom(a.z, h.z, u.z, o.z, e, n, i)
      } else "catmullrom" === this.curveType && (Sa.initCatmullRom(a.x, h.x, u.x, o.x, this.tension), Ea.initCatmullRom(a.y, h.y, u.y, o.y, this.tension), Ta.initCatmullRom(a.z, h.z, u.z, o.z, this.tension));
      return n.set(Sa.calc(c), Ea.calc(c), Ta.calc(c)), n
    }

    copy(t) {
      super.copy(t), this.points = [];
      for (let e = 0, n = t.points.length; e < n; e++) {
        const n = t.points[e];
        this.points.push(n.clone())
      }
      return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this
    }

    toJSON() {
      const t = super.toJSON();
      t.points = [];
      for (let e = 0, n = this.points.length; e < n; e++) {
        const n = this.points[e];
        t.points.push(n.toArray())
      }
      return t.closed = this.closed, t.curveType = this.curveType, t.tension = this.tension, t
    }

    fromJSON(t) {
      super.fromJSON(t), this.points = [];
      for (let e = 0, n = t.points.length; e < n; e++) {
        const n = t.points[e];
        this.points.push((new lt).fromArray(n))
      }
      return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this
    }
  }

  function Aa(t, e, n, i, r) {
    const s = .5 * (i - e), a = .5 * (r - n), o = t * t;
    return (2 * n - 2 * i + s + a) * (t * o) + (-3 * n + 3 * i - 2 * s - a) * o + s * t + n
  }

  function Ca(t, e, n, i) {
    return function (t, e) {
      const n = 1 - t;
      return n * n * e
    }(t, e) + function (t, e) {
      return 2 * (1 - t) * t * e
    }(t, n) + function (t, e) {
      return t * t * e
    }(t, i)
  }

  function Pa(t, e, n, i, r) {
    return function (t, e) {
      const n = 1 - t;
      return n * n * n * e
    }(t, e) + function (t, e) {
      const n = 1 - t;
      return 3 * n * n * t * e
    }(t, n) + function (t, e) {
      return 3 * (1 - t) * t * t * e
    }(t, i) + function (t, e) {
      return t * t * t * e
    }(t, r)
  }

  La.prototype.isCatmullRomCurve3 = !0;

  class Ra extends xa {
    constructor(t = new J, e = new J, n = new J, i = new J) {
      super(), this.type = "CubicBezierCurve", this.v0 = t, this.v1 = e, this.v2 = n, this.v3 = i
    }

    getPoint(t, e = new J) {
      const n = e, i = this.v0, r = this.v1, s = this.v2, a = this.v3;
      return n.set(Pa(t, i.x, r.x, s.x, a.x), Pa(t, i.y, r.y, s.y, a.y)), n
    }

    copy(t) {
      return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this
    }

    toJSON() {
      const t = super.toJSON();
      return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t
    }

    fromJSON(t) {
      return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this
    }
  }

  Ra.prototype.isCubicBezierCurve = !0;

  class Ia extends xa {
    constructor(t = new lt, e = new lt, n = new lt, i = new lt) {
      super(), this.type = "CubicBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = n, this.v3 = i
    }

    getPoint(t, e = new lt) {
      const n = e, i = this.v0, r = this.v1, s = this.v2, a = this.v3;
      return n.set(Pa(t, i.x, r.x, s.x, a.x), Pa(t, i.y, r.y, s.y, a.y), Pa(t, i.z, r.z, s.z, a.z)), n
    }

    copy(t) {
      return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this
    }

    toJSON() {
      const t = super.toJSON();
      return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t
    }

    fromJSON(t) {
      return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this
    }
  }

  Ia.prototype.isCubicBezierCurve3 = !0;

  class Da extends xa {
    constructor(t = new J, e = new J) {
      super(), this.type = "LineCurve", this.v1 = t, this.v2 = e
    }

    getPoint(t, e = new J) {
      const n = e;
      return 1 === t ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n
    }

    getPointAt(t, e) {
      return this.getPoint(t, e)
    }

    getTangent(t, e) {
      const n = e || new J;
      return n.copy(this.v2).sub(this.v1).normalize(), n
    }

    copy(t) {
      return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this
    }

    toJSON() {
      const t = super.toJSON();
      return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
    }

    fromJSON(t) {
      return super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
    }
  }

  Da.prototype.isLineCurve = !0;

  class Na extends xa {
    constructor(t = new J, e = new J, n = new J) {
      super(), this.type = "QuadraticBezierCurve", this.v0 = t, this.v1 = e, this.v2 = n
    }

    getPoint(t, e = new J) {
      const n = e, i = this.v0, r = this.v1, s = this.v2;
      return n.set(Ca(t, i.x, r.x, s.x), Ca(t, i.y, r.y, s.y)), n
    }

    copy(t) {
      return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this
    }

    toJSON() {
      const t = super.toJSON();
      return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
    }

    fromJSON(t) {
      return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
    }
  }

  Na.prototype.isQuadraticBezierCurve = !0;

  class za extends xa {
    constructor(t = new lt, e = new lt, n = new lt) {
      super(), this.type = "QuadraticBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = n
    }

    getPoint(t, e = new lt) {
      const n = e, i = this.v0, r = this.v1, s = this.v2;
      return n.set(Ca(t, i.x, r.x, s.x), Ca(t, i.y, r.y, s.y), Ca(t, i.z, r.z, s.z)), n
    }

    copy(t) {
      return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this
    }

    toJSON() {
      const t = super.toJSON();
      return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
    }

    fromJSON(t) {
      return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
    }
  }

  za.prototype.isQuadraticBezierCurve3 = !0;

  class Oa extends xa {
    constructor(t = []) {
      super(), this.type = "SplineCurve", this.points = t
    }

    getPoint(t, e = new J) {
      const n = e, i = this.points, r = (i.length - 1) * t, s = Math.floor(r), a = r - s, o = i[0 === s ? s : s - 1],
          l = i[s], c = i[s > i.length - 2 ? i.length - 1 : s + 1], h = i[s > i.length - 3 ? i.length - 1 : s + 2];
      return n.set(Aa(a, o.x, l.x, c.x, h.x), Aa(a, o.y, l.y, c.y, h.y)), n
    }

    copy(t) {
      super.copy(t), this.points = [];
      for (let e = 0, n = t.points.length; e < n; e++) {
        const n = t.points[e];
        this.points.push(n.clone())
      }
      return this
    }

    toJSON() {
      const t = super.toJSON();
      t.points = [];
      for (let e = 0, n = this.points.length; e < n; e++) {
        const n = this.points[e];
        t.points.push(n.toArray())
      }
      return t
    }

    fromJSON(t) {
      super.fromJSON(t), this.points = [];
      for (let e = 0, n = t.points.length; e < n; e++) {
        const n = t.points[e];
        this.points.push((new J).fromArray(n))
      }
      return this
    }
  }

  Oa.prototype.isSplineCurve = !0;
  var Ba = Object.freeze({
    __proto__: null,
    ArcCurve: wa,
    CatmullRomCurve3: La,
    CubicBezierCurve: Ra,
    CubicBezierCurve3: Ia,
    EllipseCurve: _a,
    LineCurve: Da,
    LineCurve3: class extends xa {
      constructor(t = new lt, e = new lt) {
        super(), this.type = "LineCurve3", this.isLineCurve3 = !0, this.v1 = t, this.v2 = e
      }

      getPoint(t, e = new lt) {
        const n = e;
        return 1 === t ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n
      }

      getPointAt(t, e) {
        return this.getPoint(t, e)
      }

      copy(t) {
        return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this
      }

      toJSON() {
        const t = super.toJSON();
        return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
      }

      fromJSON(t) {
        return super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
      }
    },
    QuadraticBezierCurve: Na,
    QuadraticBezierCurve3: za,
    SplineCurve: Oa
  });

  function Fa(t, e, n, i, r) {
    let s, a;
    if (r === function (t, e, n, i) {
      let r = 0;
      for (let s = e, a = n - i; s < n; s += i) r += (t[a] - t[s]) * (t[s + 1] + t[a + 1]), a = s;
      return r
    }(t, e, n, i) > 0) for (s = e; s < n; s += i) a = so(s, t[s], t[s + 1], a); else for (s = n - i; s >= e; s -= i) a = so(s, t[s], t[s + 1], a);
    return a && $a(a, a.next) && (ao(a), a = a.next), a
  }

  function ka(t, e) {
    if (!t) return t;
    e || (e = t);
    let n, i = t;
    do {
      if (n = !1, i.steiner || !$a(i, i.next) && 0 !== Ka(i.prev, i, i.next)) i = i.next; else {
        if (ao(i), i = e = i.prev, i === i.next) break;
        n = !0
      }
    } while (n || i !== e);
    return e
  }

  function Ua(t, e, n, i, r, s, a) {
    if (!t) return;
    !a && s && function (t, e, n, i) {
      let r = t;
      do {
        null === r.z && (r.z = qa(r.x, r.y, e, n, i)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next
      } while (r !== t);
      r.prevZ.nextZ = null, r.prevZ = null, function (t) {
        let e, n, i, r, s, a, o, l, c = 1;
        do {
          for (n = t, t = null, s = null, a = 0; n;) {
            for (a++, i = n, o = 0, e = 0; e < c && (o++, i = i.nextZ, i); e++) ;
            for (l = c; o > 0 || l > 0 && i;) 0 !== o && (0 === l || !i || n.z <= i.z) ? (r = n, n = n.nextZ, o--) : (r = i, i = i.nextZ, l--), s ? s.nextZ = r : t = r, r.prevZ = s, s = r;
            n = i
          }
          s.nextZ = null, c *= 2
        } while (a > 1)
      }(r)
    }(t, i, r, s);
    let o, l, c = t;
    for (; t.prev !== t.next;) if (o = t.prev, l = t.next, s ? Ga(t, i, r, s) : Ha(t)) e.push(o.i / n), e.push(t.i / n), e.push(l.i / n), ao(t), t = l.next, c = l.next; else if ((t = l) === c) {
      a ? 1 === a ? Ua(t = Va(ka(t), e, n), e, n, i, r, s, 2) : 2 === a && Wa(t, e, n, i, r, s) : Ua(ka(t), e, n, i, r, s, 1);
      break
    }
  }

  function Ha(t) {
    const e = t.prev, n = t, i = t.next;
    if (Ka(e, n, i) >= 0) return !1;
    let r = t.next.next;
    for (; r !== t.prev;) {
      if (Ja(e.x, e.y, n.x, n.y, i.x, i.y, r.x, r.y) && Ka(r.prev, r, r.next) >= 0) return !1;
      r = r.next
    }
    return !0
  }

  function Ga(t, e, n, i) {
    const r = t.prev, s = t, a = t.next;
    if (Ka(r, s, a) >= 0) return !1;
    const o = r.x < s.x ? r.x < a.x ? r.x : a.x : s.x < a.x ? s.x : a.x,
        l = r.y < s.y ? r.y < a.y ? r.y : a.y : s.y < a.y ? s.y : a.y,
        c = r.x > s.x ? r.x > a.x ? r.x : a.x : s.x > a.x ? s.x : a.x,
        h = r.y > s.y ? r.y > a.y ? r.y : a.y : s.y > a.y ? s.y : a.y, u = qa(o, l, e, n, i), d = qa(c, h, e, n, i);
    let p = t.prevZ, m = t.nextZ;
    for (; p && p.z >= u && m && m.z <= d;) {
      if (p !== t.prev && p !== t.next && Ja(r.x, r.y, s.x, s.y, a.x, a.y, p.x, p.y) && Ka(p.prev, p, p.next) >= 0) return !1;
      if (p = p.prevZ, m !== t.prev && m !== t.next && Ja(r.x, r.y, s.x, s.y, a.x, a.y, m.x, m.y) && Ka(m.prev, m, m.next) >= 0) return !1;
      m = m.nextZ
    }
    for (; p && p.z >= u;) {
      if (p !== t.prev && p !== t.next && Ja(r.x, r.y, s.x, s.y, a.x, a.y, p.x, p.y) && Ka(p.prev, p, p.next) >= 0) return !1;
      p = p.prevZ
    }
    for (; m && m.z <= d;) {
      if (m !== t.prev && m !== t.next && Ja(r.x, r.y, s.x, s.y, a.x, a.y, m.x, m.y) && Ka(m.prev, m, m.next) >= 0) return !1;
      m = m.nextZ
    }
    return !0
  }

  function Va(t, e, n) {
    let i = t;
    do {
      const r = i.prev, s = i.next.next;
      !$a(r, s) && to(r, i, i.next, s) && io(r, s) && io(s, r) && (e.push(r.i / n), e.push(i.i / n), e.push(s.i / n), ao(i), ao(i.next), i = t = s), i = i.next
    } while (i !== t);
    return ka(i)
  }

  function Wa(t, e, n, i, r, s) {
    let a = t;
    do {
      let t = a.next.next;
      for (; t !== a.prev;) {
        if (a.i !== t.i && Qa(a, t)) {
          let o = ro(a, t);
          return a = ka(a, a.next), o = ka(o, o.next), Ua(a, e, n, i, r, s), void Ua(o, e, n, i, r, s)
        }
        t = t.next
      }
      a = a.next
    } while (a !== t)
  }

  function ja(t, e) {
    return t.x - e.x
  }

  function Xa(t, e) {
    if (e = function (t, e) {
      let n = e;
      const i = t.x, r = t.y;
      let s, a = -1 / 0;
      do {
        if (r <= n.y && r >= n.next.y && n.next.y !== n.y) {
          const t = n.x + (r - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
          if (t <= i && t > a) {
            if (a = t, t === i) {
              if (r === n.y) return n;
              if (r === n.next.y) return n.next
            }
            s = n.x < n.next.x ? n : n.next
          }
        }
        n = n.next
      } while (n !== e);
      if (!s) return null;
      if (i === a) return s;
      const o = s, l = s.x, c = s.y;
      let h, u = 1 / 0;
      n = s;
      do {
        i >= n.x && n.x >= l && i !== n.x && Ja(r < c ? i : a, r, l, c, r < c ? a : i, r, n.x, n.y) && (h = Math.abs(r - n.y) / (i - n.x), io(n, t) && (h < u || h === u && (n.x > s.x || n.x === s.x && Ya(s, n))) && (s = n, u = h)), n = n.next
      } while (n !== o);
      return s
    }(t, e), e) {
      const n = ro(e, t);
      ka(e, e.next), ka(n, n.next)
    }
  }

  function Ya(t, e) {
    return Ka(t.prev, t, e.prev) < 0 && Ka(e.next, t, t.next) < 0
  }

  function qa(t, e, n, i, r) {
    return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - n) * r) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - i) * r) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1
  }

  function Za(t) {
    let e = t, n = t;
    do {
      (e.x < n.x || e.x === n.x && e.y < n.y) && (n = e), e = e.next
    } while (e !== t);
    return n
  }

  function Ja(t, e, n, i, r, s, a, o) {
    return (r - a) * (e - o) - (t - a) * (s - o) >= 0 && (t - a) * (i - o) - (n - a) * (e - o) >= 0 && (n - a) * (s - o) - (r - a) * (i - o) >= 0
  }

  function Qa(t, e) {
    return t.next.i !== e.i && t.prev.i !== e.i && !function (t, e) {
      let n = t;
      do {
        if (n.i !== t.i && n.next.i !== t.i && n.i !== e.i && n.next.i !== e.i && to(n, n.next, t, e)) return !0;
        n = n.next
      } while (n !== t);
      return !1
    }(t, e) && (io(t, e) && io(e, t) && function (t, e) {
      let n = t, i = !1;
      const r = (t.x + e.x) / 2, s = (t.y + e.y) / 2;
      do {
        n.y > s != n.next.y > s && n.next.y !== n.y && r < (n.next.x - n.x) * (s - n.y) / (n.next.y - n.y) + n.x && (i = !i), n = n.next
      } while (n !== t);
      return i
    }(t, e) && (Ka(t.prev, t, e.prev) || Ka(t, e.prev, e)) || $a(t, e) && Ka(t.prev, t, t.next) > 0 && Ka(e.prev, e, e.next) > 0)
  }

  function Ka(t, e, n) {
    return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y)
  }

  function $a(t, e) {
    return t.x === e.x && t.y === e.y
  }

  function to(t, e, n, i) {
    const r = no(Ka(t, e, n)), s = no(Ka(t, e, i)), a = no(Ka(n, i, t)), o = no(Ka(n, i, e));
    return r !== s && a !== o || !(0 !== r || !eo(t, n, e)) || !(0 !== s || !eo(t, i, e)) || !(0 !== a || !eo(n, t, i)) || !(0 !== o || !eo(n, e, i))
  }

  function eo(t, e, n) {
    return e.x <= Math.max(t.x, n.x) && e.x >= Math.min(t.x, n.x) && e.y <= Math.max(t.y, n.y) && e.y >= Math.min(t.y, n.y)
  }

  function no(t) {
    return t > 0 ? 1 : t < 0 ? -1 : 0
  }

  function io(t, e) {
    return Ka(t.prev, t, t.next) < 0 ? Ka(t, e, t.next) >= 0 && Ka(t, t.prev, e) >= 0 : Ka(t, e, t.prev) < 0 || Ka(t, t.next, e) < 0
  }

  function ro(t, e) {
    const n = new oo(t.i, t.x, t.y), i = new oo(e.i, e.x, e.y), r = t.next, s = e.prev;
    return t.next = e, e.prev = t, n.next = r, r.prev = n, i.next = n, n.prev = i, s.next = i, i.prev = s, i
  }

  function so(t, e, n, i) {
    const r = new oo(t, e, n);
    return i ? (r.next = i.next, r.prev = i, i.next.prev = r, i.next = r) : (r.prev = r, r.next = r), r
  }

  function ao(t) {
    t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ)
  }

  function oo(t, e, n) {
    this.i = t, this.x = e, this.y = n, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
  }

  class lo {
    static area(t) {
      const e = t.length;
      let n = 0;
      for (let i = e - 1, r = 0; r < e; i = r++) n += t[i].x * t[r].y - t[r].x * t[i].y;
      return .5 * n
    }

    static isClockWise(t) {
      return lo.area(t) < 0
    }

    static triangulateShape(t, e) {
      const n = [], i = [], r = [];
      co(t), ho(n, t);
      let s = t.length;
      e.forEach(co);
      for (let t = 0; t < e.length; t++) i.push(s), s += e[t].length, ho(n, e[t]);
      const a = function (t, e, n = 2) {
        const i = e && e.length, r = i ? e[0] * n : t.length;
        let s = Fa(t, 0, r, n, !0);
        const a = [];
        if (!s || s.next === s.prev) return a;
        let o, l, c, h, u, d, p;
        if (i && (s = function (t, e, n, i) {
          const r = [];
          let s, a, o, l, c;
          for (s = 0, a = e.length; s < a; s++) o = e[s] * i, l = s < a - 1 ? e[s + 1] * i : t.length, c = Fa(t, o, l, i, !1), c === c.next && (c.steiner = !0), r.push(Za(c));
          for (r.sort(ja), s = 0; s < r.length; s++) Xa(r[s], n), n = ka(n, n.next);
          return n
        }(t, e, s, n)), t.length > 80 * n) {
          o = c = t[0], l = h = t[1];
          for (let e = n; e < r; e += n) u = t[e], d = t[e + 1], u < o && (o = u), d < l && (l = d), u > c && (c = u), d > h && (h = d);
          p = Math.max(c - o, h - l), p = 0 !== p ? 1 / p : 0
        }
        return Ua(s, a, n, o, l, p), a
      }(n, i);
      for (let t = 0; t < a.length; t += 3) r.push(a.slice(t, t + 3));
      return r
    }
  }

  function co(t) {
    const e = t.length;
    e > 2 && t[e - 1].equals(t[0]) && t.pop()
  }

  function ho(t, e) {
    for (let n = 0; n < e.length; n++) t.push(e[n].x), t.push(e[n].y)
  }

  class uo extends Xe {
    constructor(t, e) {
      super(), this.type = "ExtrudeGeometry", this.parameters = {shapes: t, options: e}, t = Array.isArray(t) ? t : [t];
      const n = this, i = [], r = [];
      for (let e = 0, n = t.length; e < n; e++) s(t[e]);

      function s(t) {
        const s = [], a = void 0 !== e.curveSegments ? e.curveSegments : 12, o = void 0 !== e.steps ? e.steps : 1;
        let l = void 0 !== e.depth ? e.depth : 100, c = void 0 === e.bevelEnabled || e.bevelEnabled,
            h = void 0 !== e.bevelThickness ? e.bevelThickness : 6, u = void 0 !== e.bevelSize ? e.bevelSize : h - 2,
            d = void 0 !== e.bevelOffset ? e.bevelOffset : 0, p = void 0 !== e.bevelSegments ? e.bevelSegments : 3;
        const m = e.extrudePath, f = void 0 !== e.UVGenerator ? e.UVGenerator : po;
        void 0 !== e.amount && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."), l = e.amount);
        let g, v, y, x, _, w = !1;
        m && (g = m.getSpacedPoints(o), w = !0, c = !1, v = m.computeFrenetFrames(o, !1), y = new lt, x = new lt, _ = new lt), c || (p = 0, h = 0, u = 0, d = 0);
        const b = t.extractPoints(a);
        let M = b.shape;
        const S = b.holes;
        if (!lo.isClockWise(M)) {
          M = M.reverse();
          for (let t = 0, e = S.length; t < e; t++) {
            const e = S[t];
            lo.isClockWise(e) && (S[t] = e.reverse())
          }
        }
        const E = lo.triangulateShape(M, S), T = M;
        for (let t = 0, e = S.length; t < e; t++) {
          const e = S[t];
          M = M.concat(e)
        }

        function L(t, e, n) {
          return e || console.error("THREE.ExtrudeGeometry: vec does not exist"), e.clone().multiplyScalar(n).add(t)
        }

        const A = M.length, C = E.length;

        function P(t, e, n) {
          let i, r, s;
          const a = t.x - e.x, o = t.y - e.y, l = n.x - t.x, c = n.y - t.y, h = a * a + o * o, u = a * c - o * l;
          if (Math.abs(u) > Number.EPSILON) {
            const u = Math.sqrt(h), d = Math.sqrt(l * l + c * c), p = e.x - o / u, m = e.y + a / u,
                f = ((n.x - c / d - p) * c - (n.y + l / d - m) * l) / (a * c - o * l);
            i = p + a * f - t.x, r = m + o * f - t.y;
            const g = i * i + r * r;
            if (g <= 2) return new J(i, r);
            s = Math.sqrt(g / 2)
          } else {
            let t = !1;
            a > Number.EPSILON ? l > Number.EPSILON && (t = !0) : a < -Number.EPSILON ? l < -Number.EPSILON && (t = !0) : Math.sign(o) === Math.sign(c) && (t = !0), t ? (i = -o, r = a, s = Math.sqrt(h)) : (i = a, r = o, s = Math.sqrt(h / 2))
          }
          return new J(i / s, r / s)
        }

        const R = [];
        for (let t = 0, e = T.length, n = e - 1, i = t + 1; t < e; t++, n++, i++) n === e && (n = 0), i === e && (i = 0), R[t] = P(T[t], T[n], T[i]);
        const I = [];
        let D, N = R.concat();
        for (let t = 0, e = S.length; t < e; t++) {
          const e = S[t];
          D = [];
          for (let t = 0, n = e.length, i = n - 1, r = t + 1; t < n; t++, i++, r++) i === n && (i = 0), r === n && (r = 0), D[t] = P(e[t], e[i], e[r]);
          I.push(D), N = N.concat(D)
        }
        for (let t = 0; t < p; t++) {
          const e = t / p, n = h * Math.cos(e * Math.PI / 2), i = u * Math.sin(e * Math.PI / 2) + d;
          for (let t = 0, e = T.length; t < e; t++) {
            const e = L(T[t], R[t], i);
            B(e.x, e.y, -n)
          }
          for (let t = 0, e = S.length; t < e; t++) {
            const e = S[t];
            D = I[t];
            for (let t = 0, r = e.length; t < r; t++) {
              const r = L(e[t], D[t], i);
              B(r.x, r.y, -n)
            }
          }
        }
        const z = u + d;
        for (let t = 0; t < A; t++) {
          const e = c ? L(M[t], N[t], z) : M[t];
          w ? (x.copy(v.normals[0]).multiplyScalar(e.x), y.copy(v.binormals[0]).multiplyScalar(e.y), _.copy(g[0]).add(x).add(y), B(_.x, _.y, _.z)) : B(e.x, e.y, 0)
        }
        for (let t = 1; t <= o; t++) for (let e = 0; e < A; e++) {
          const n = c ? L(M[e], N[e], z) : M[e];
          w ? (x.copy(v.normals[t]).multiplyScalar(n.x), y.copy(v.binormals[t]).multiplyScalar(n.y), _.copy(g[t]).add(x).add(y), B(_.x, _.y, _.z)) : B(n.x, n.y, l / o * t)
        }
        for (let t = p - 1; t >= 0; t--) {
          const e = t / p, n = h * Math.cos(e * Math.PI / 2), i = u * Math.sin(e * Math.PI / 2) + d;
          for (let t = 0, e = T.length; t < e; t++) {
            const e = L(T[t], R[t], i);
            B(e.x, e.y, l + n)
          }
          for (let t = 0, e = S.length; t < e; t++) {
            const e = S[t];
            D = I[t];
            for (let t = 0, r = e.length; t < r; t++) {
              const r = L(e[t], D[t], i);
              w ? B(r.x, r.y + g[o - 1].y, g[o - 1].x + n) : B(r.x, r.y, l + n)
            }
          }
        }

        function O(t, e) {
          let n = t.length;
          for (; --n >= 0;) {
            const i = n;
            let r = n - 1;
            r < 0 && (r = t.length - 1);
            for (let t = 0, n = o + 2 * p; t < n; t++) {
              const n = A * t, s = A * (t + 1);
              k(e + i + n, e + r + n, e + r + s, e + i + s)
            }
          }
        }

        function B(t, e, n) {
          s.push(t), s.push(e), s.push(n)
        }

        function F(t, e, r) {
          U(t), U(e), U(r);
          const s = i.length / 3, a = f.generateTopUV(n, i, s - 3, s - 2, s - 1);
          H(a[0]), H(a[1]), H(a[2])
        }

        function k(t, e, r, s) {
          U(t), U(e), U(s), U(e), U(r), U(s);
          const a = i.length / 3, o = f.generateSideWallUV(n, i, a - 6, a - 3, a - 2, a - 1);
          H(o[0]), H(o[1]), H(o[3]), H(o[1]), H(o[2]), H(o[3])
        }

        function U(t) {
          i.push(s[3 * t + 0]), i.push(s[3 * t + 1]), i.push(s[3 * t + 2])
        }

        function H(t) {
          r.push(t.x), r.push(t.y)
        }

        !function () {
          const t = i.length / 3;
          if (c) {
            let t = 0, e = A * t;
            for (let t = 0; t < C; t++) {
              const n = E[t];
              F(n[2] + e, n[1] + e, n[0] + e)
            }
            t = o + 2 * p, e = A * t;
            for (let t = 0; t < C; t++) {
              const n = E[t];
              F(n[0] + e, n[1] + e, n[2] + e)
            }
          } else {
            for (let t = 0; t < C; t++) {
              const e = E[t];
              F(e[2], e[1], e[0])
            }
            for (let t = 0; t < C; t++) {
              const e = E[t];
              F(e[0] + A * o, e[1] + A * o, e[2] + A * o)
            }
          }
          n.addGroup(t, i.length / 3 - t, 0)
        }(), function () {
          const t = i.length / 3;
          let e = 0;
          O(T, e), e += T.length;
          for (let t = 0, n = S.length; t < n; t++) {
            const n = S[t];
            O(n, e), e += n.length
          }
          n.addGroup(t, i.length / 3 - t, 1)
        }()
      }

      this.setAttribute("position", new Be(i, 3)), this.setAttribute("uv", new Be(r, 2)), this.computeVertexNormals()
    }

    toJSON() {
      const t = super.toJSON();
      return function (t, e, n) {
        if (n.shapes = [], Array.isArray(t)) for (let e = 0, i = t.length; e < i; e++) {
          const i = t[e];
          n.shapes.push(i.uuid)
        } else n.shapes.push(t.uuid);
        return void 0 !== e.extrudePath && (n.options.extrudePath = e.extrudePath.toJSON()), n
      }(this.parameters.shapes, this.parameters.options, t)
    }

    static fromJSON(t, e) {
      const n = [];
      for (let i = 0, r = t.shapes.length; i < r; i++) {
        const r = e[t.shapes[i]];
        n.push(r)
      }
      const i = t.options.extrudePath;
      return void 0 !== i && (t.options.extrudePath = (new Ba[i.type]).fromJSON(i)), new uo(n, t.options)
    }
  }

  const po = {
    generateTopUV: function (t, e, n, i, r) {
      const s = e[3 * n], a = e[3 * n + 1], o = e[3 * i], l = e[3 * i + 1], c = e[3 * r], h = e[3 * r + 1];
      return [new J(s, a), new J(o, l), new J(c, h)]
    }, generateSideWallUV: function (t, e, n, i, r, s) {
      const a = e[3 * n], o = e[3 * n + 1], l = e[3 * n + 2], c = e[3 * i], h = e[3 * i + 1], u = e[3 * i + 2],
          d = e[3 * r], p = e[3 * r + 1], m = e[3 * r + 2], f = e[3 * s], g = e[3 * s + 1], v = e[3 * s + 2];
      return Math.abs(o - h) < Math.abs(a - c) ? [new J(a, 1 - l), new J(c, 1 - u), new J(d, 1 - m), new J(f, 1 - v)] : [new J(o, 1 - l), new J(h, 1 - u), new J(p, 1 - m), new J(g, 1 - v)]
    }
  };

  class mo extends ya {
    constructor(t = 1, e = 0) {
      super([1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], t, e), this.type = "OctahedronGeometry", this.parameters = {
        radius: t,
        detail: e
      }
    }

    static fromJSON(t) {
      return new mo(t.radius, t.detail)
    }
  }

  class fo extends Xe {
    constructor(t, e = 12) {
      super(), this.type = "ShapeGeometry", this.parameters = {shapes: t, curveSegments: e};
      const n = [], i = [], r = [], s = [];
      let a = 0, o = 0;
      if (!1 === Array.isArray(t)) l(t); else for (let e = 0; e < t.length; e++) l(t[e]), this.addGroup(a, o, e), a += o, o = 0;

      function l(t) {
        const a = i.length / 3, l = t.extractPoints(e);
        let c = l.shape;
        const h = l.holes;
        !1 === lo.isClockWise(c) && (c = c.reverse());
        for (let t = 0, e = h.length; t < e; t++) {
          const e = h[t];
          !0 === lo.isClockWise(e) && (h[t] = e.reverse())
        }
        const u = lo.triangulateShape(c, h);
        for (let t = 0, e = h.length; t < e; t++) {
          const e = h[t];
          c = c.concat(e)
        }
        for (let t = 0, e = c.length; t < e; t++) {
          const e = c[t];
          i.push(e.x, e.y, 0), r.push(0, 0, 1), s.push(e.x, e.y)
        }
        for (let t = 0, e = u.length; t < e; t++) {
          const e = u[t], i = e[0] + a, r = e[1] + a, s = e[2] + a;
          n.push(i, r, s), o += 3
        }
      }

      this.setIndex(n), this.setAttribute("position", new Be(i, 3)), this.setAttribute("normal", new Be(r, 3)), this.setAttribute("uv", new Be(s, 2))
    }

    toJSON() {
      const t = super.toJSON();
      return function (t, e) {
        if (e.shapes = [], Array.isArray(t)) for (let n = 0, i = t.length; n < i; n++) {
          const i = t[n];
          e.shapes.push(i.uuid)
        } else e.shapes.push(t.uuid);
        return e
      }(this.parameters.shapes, t)
    }

    static fromJSON(t, e) {
      const n = [];
      for (let i = 0, r = t.shapes.length; i < r; i++) {
        const r = e[t.shapes[i]];
        n.push(r)
      }
      return new fo(n, t.curveSegments)
    }
  }

  class go extends Xe {
    constructor(t = 1, e = 32, n = 16, i = 0, r = 2 * Math.PI, s = 0, a = Math.PI) {
      super(), this.type = "SphereGeometry", this.parameters = {
        radius: t,
        widthSegments: e,
        heightSegments: n,
        phiStart: i,
        phiLength: r,
        thetaStart: s,
        thetaLength: a
      }, e = Math.max(3, Math.floor(e)), n = Math.max(2, Math.floor(n));
      const o = Math.min(s + a, Math.PI);
      let l = 0;
      const c = [], h = new lt, u = new lt, d = [], p = [], m = [], f = [];
      for (let d = 0; d <= n; d++) {
        const g = [], v = d / n;
        let y = 0;
        0 == d && 0 == s ? y = .5 / e : d == n && o == Math.PI && (y = -.5 / e);
        for (let n = 0; n <= e; n++) {
          const o = n / e;
          h.x = -t * Math.cos(i + o * r) * Math.sin(s + v * a), h.y = t * Math.cos(s + v * a), h.z = t * Math.sin(i + o * r) * Math.sin(s + v * a), p.push(h.x, h.y, h.z), u.copy(h).normalize(), m.push(u.x, u.y, u.z), f.push(o + y, 1 - v), g.push(l++)
        }
        c.push(g)
      }
      for (let t = 0; t < n; t++) for (let i = 0; i < e; i++) {
        const e = c[t][i + 1], r = c[t][i], a = c[t + 1][i], l = c[t + 1][i + 1];
        (0 !== t || s > 0) && d.push(e, r, l), (t !== n - 1 || o < Math.PI) && d.push(r, a, l)
      }
      this.setIndex(d), this.setAttribute("position", new Be(p, 3)), this.setAttribute("normal", new Be(m, 3)), this.setAttribute("uv", new Be(f, 2))
    }

    static fromJSON(t) {
      return new go(t.radius, t.widthSegments, t.heightSegments, t.phiStart, t.phiLength, t.thetaStart, t.thetaLength)
    }
  }

  class vo extends Xe {
    constructor(t = 1, e = .4, n = 8, i = 6, r = 2 * Math.PI) {
      super(), this.type = "TorusGeometry", this.parameters = {
        radius: t,
        tube: e,
        radialSegments: n,
        tubularSegments: i,
        arc: r
      }, n = Math.floor(n), i = Math.floor(i);
      const s = [], a = [], o = [], l = [], c = new lt, h = new lt, u = new lt;
      for (let s = 0; s <= n; s++) for (let d = 0; d <= i; d++) {
        const p = d / i * r, m = s / n * Math.PI * 2;
        h.x = (t + e * Math.cos(m)) * Math.cos(p), h.y = (t + e * Math.cos(m)) * Math.sin(p), h.z = e * Math.sin(m), a.push(h.x, h.y, h.z), c.x = t * Math.cos(p), c.y = t * Math.sin(p), u.subVectors(h, c).normalize(), o.push(u.x, u.y, u.z), l.push(d / i), l.push(s / n)
      }
      for (let t = 1; t <= n; t++) for (let e = 1; e <= i; e++) {
        const n = (i + 1) * t + e - 1, r = (i + 1) * (t - 1) + e - 1, a = (i + 1) * (t - 1) + e, o = (i + 1) * t + e;
        s.push(n, r, o), s.push(r, a, o)
      }
      this.setIndex(s), this.setAttribute("position", new Be(a, 3)), this.setAttribute("normal", new Be(o, 3)), this.setAttribute("uv", new Be(l, 2))
    }

    static fromJSON(t) {
      return new vo(t.radius, t.tube, t.radialSegments, t.tubularSegments, t.arc)
    }
  }

  (class extends Me {
    constructor(t) {
      super(), this.type = "ShadowMaterial", this.color = new Pe(0), this.transparent = !0, this.setValues(t)
    }

    copy(t) {
      return super.copy(t), this.color.copy(t.color), this
    }
  }).prototype.isShadowMaterial = !0;

  class yo extends Me {
    constructor(t) {
      super(), this.defines = {STANDARD: ""}, this.type = "MeshStandardMaterial", this.color = new Pe(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Pe(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new J(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.setValues(t)
    }

    copy(t) {
      return super.copy(t), this.defines = {STANDARD: ""}, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapIntensity = t.envMapIntensity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.flatShading = t.flatShading, this
    }
  }

  yo.prototype.isMeshStandardMaterial = !0;
  (class extends yo {
    constructor(t) {
      super(), this.defines = {
        STANDARD: "",
        PHYSICAL: ""
      }, this.type = "MeshPhysicalMaterial", this.clearcoat = 0, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new J(1, 1), this.clearcoatNormalMap = null, this.reflectivity = .5, Object.defineProperty(this, "ior", {
        get: function () {
          return (1 + .4 * this.reflectivity) / (1 - .4 * this.reflectivity)
        }, set: function (t) {
          this.reflectivity = V(2.5 * (t - 1) / (t + 1), 0, 1)
        }
      }), this.sheen = null, this.transmission = 0, this.transmissionMap = null, this.thickness = .01, this.thicknessMap = null, this.attenuationDistance = 0, this.attenuationTint = new Pe(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularTint = new Pe(1, 1, 1), this.specularTintMap = null, this.setValues(t)
    }

    copy(t) {
      return super.copy(t), this.defines = {
        STANDARD: "",
        PHYSICAL: ""
      }, this.clearcoat = t.clearcoat, this.clearcoatMap = t.clearcoatMap, this.clearcoatRoughness = t.clearcoatRoughness, this.clearcoatRoughnessMap = t.clearcoatRoughnessMap, this.clearcoatNormalMap = t.clearcoatNormalMap, this.clearcoatNormalScale.copy(t.clearcoatNormalScale), this.reflectivity = t.reflectivity, t.sheen ? this.sheen = (this.sheen || new Pe).copy(t.sheen) : this.sheen = null, this.transmission = t.transmission, this.transmissionMap = t.transmissionMap, this.thickness = t.thickness, this.thicknessMap = t.thicknessMap, this.attenuationDistance = t.attenuationDistance, this.attenuationTint.copy(t.attenuationTint), this.specularIntensity = t.specularIntensity, this.specularIntensityMap = t.specularIntensityMap, this.specularTint.copy(t.specularTint), this.specularTintMap = t.specularTintMap, this
    }
  }).prototype.isMeshPhysicalMaterial = !0;

  class xo extends Me {
    constructor(t) {
      super(), this.type = "MeshPhongMaterial", this.color = new Pe(16777215), this.specular = new Pe(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Pe(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new J(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.setValues(t)
    }

    copy(t) {
      return super.copy(t), this.color.copy(t.color), this.specular.copy(t.specular), this.shininess = t.shininess, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.flatShading = t.flatShading, this
    }
  }

  xo.prototype.isMeshPhongMaterial = !0;
  (class extends Me {
    constructor(t) {
      super(), this.defines = {TOON: ""}, this.type = "MeshToonMaterial", this.color = new Pe(16777215), this.map = null, this.gradientMap = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Pe(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new J(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.setValues(t)
    }

    copy(t) {
      return super.copy(t), this.color.copy(t.color), this.map = t.map, this.gradientMap = t.gradientMap, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.alphaMap = t.alphaMap, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this
    }
  }).prototype.isMeshToonMaterial = !0;
  (class extends Me {
    constructor(t) {
      super(), this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new J(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.flatShading = !1, this.setValues(t)
    }

    copy(t) {
      return super.copy(t), this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.flatShading = t.flatShading, this
    }
  }).prototype.isMeshNormalMaterial = !0;

  class _o extends Me {
    constructor(t) {
      super(), this.type = "MeshLambertMaterial", this.color = new Pe(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Pe(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.setValues(t)
    }

    copy(t) {
      return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this
    }
  }

  _o.prototype.isMeshLambertMaterial = !0;
  (class extends Me {
    constructor(t) {
      super(), this.defines = {MATCAP: ""}, this.type = "MeshMatcapMaterial", this.color = new Pe(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new J(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.flatShading = !1, this.setValues(t)
    }

    copy(t) {
      return super.copy(t), this.defines = {MATCAP: ""}, this.color.copy(t.color), this.matcap = t.matcap, this.map = t.map, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.alphaMap = t.alphaMap, this.flatShading = t.flatShading, this
    }
  }).prototype.isMeshMatcapMaterial = !0;
  (class extends ta {
    constructor(t) {
      super(), this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(t)
    }

    copy(t) {
      return super.copy(t), this.scale = t.scale, this.dashSize = t.dashSize, this.gapSize = t.gapSize, this
    }
  }).prototype.isLineDashedMaterial = !0;
  const wo = {
    arraySlice: function (t, e, n) {
      return wo.isTypedArray(t) ? new t.constructor(t.subarray(e, void 0 !== n ? n : t.length)) : t.slice(e, n)
    }, convertArray: function (t, e, n) {
      return !t || !n && t.constructor === e ? t : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t) : Array.prototype.slice.call(t)
    }, isTypedArray: function (t) {
      return ArrayBuffer.isView(t) && !(t instanceof DataView)
    }, getKeyframeOrder: function (t) {
      const e = t.length, n = new Array(e);
      for (let t = 0; t !== e; ++t) n[t] = t;
      return n.sort((function (e, n) {
        return t[e] - t[n]
      })), n
    }, sortedArray: function (t, e, n) {
      const i = t.length, r = new t.constructor(i);
      for (let s = 0, a = 0; a !== i; ++s) {
        const i = n[s] * e;
        for (let n = 0; n !== e; ++n) r[a++] = t[i + n]
      }
      return r
    }, flattenJSON: function (t, e, n, i) {
      let r = 1, s = t[0];
      for (; void 0 !== s && void 0 === s[i];) s = t[r++];
      if (void 0 === s) return;
      let a = s[i];
      if (void 0 !== a) if (Array.isArray(a)) do {
        a = s[i], void 0 !== a && (e.push(s.time), n.push.apply(n, a)), s = t[r++]
      } while (void 0 !== s); else if (void 0 !== a.toArray) do {
        a = s[i], void 0 !== a && (e.push(s.time), a.toArray(n, n.length)), s = t[r++]
      } while (void 0 !== s); else do {
        a = s[i], void 0 !== a && (e.push(s.time), n.push(a)), s = t[r++]
      } while (void 0 !== s)
    }, subclip: function (t, e, n, i, r = 30) {
      const s = t.clone();
      s.name = e;
      const a = [];
      for (let t = 0; t < s.tracks.length; ++t) {
        const e = s.tracks[t], o = e.getValueSize(), l = [], c = [];
        for (let t = 0; t < e.times.length; ++t) {
          const s = e.times[t] * r;
          if (!(s < n || s >= i)) {
            l.push(e.times[t]);
            for (let n = 0; n < o; ++n) c.push(e.values[t * o + n])
          }
        }
        0 !== l.length && (e.times = wo.convertArray(l, e.times.constructor), e.values = wo.convertArray(c, e.values.constructor), a.push(e))
      }
      s.tracks = a;
      let o = 1 / 0;
      for (let t = 0; t < s.tracks.length; ++t) o > s.tracks[t].times[0] && (o = s.tracks[t].times[0]);
      for (let t = 0; t < s.tracks.length; ++t) s.tracks[t].shift(-1 * o);
      return s.resetDuration(), s
    }, makeClipAdditive: function (t, e = 0, n = t, i = 30) {
      i <= 0 && (i = 30);
      const r = n.tracks.length, s = e / i;
      for (let e = 0; e < r; ++e) {
        const i = n.tracks[e], r = i.ValueTypeName;
        if ("bool" === r || "string" === r) continue;
        const a = t.tracks.find((function (t) {
          return t.name === i.name && t.ValueTypeName === r
        }));
        if (void 0 === a) continue;
        let o = 0;
        const l = i.getValueSize();
        i.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (o = l / 3);
        let c = 0;
        const h = a.getValueSize();
        a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (c = h / 3);
        const u = i.times.length - 1;
        let d;
        if (s <= i.times[0]) {
          const t = o, e = l - o;
          d = wo.arraySlice(i.values, t, e)
        } else if (s >= i.times[u]) {
          const t = u * l + o, e = t + l - o;
          d = wo.arraySlice(i.values, t, e)
        } else {
          const t = i.createInterpolant(), e = o, n = l - o;
          t.evaluate(s), d = wo.arraySlice(t.resultBuffer, e, n)
        }
        "quaternion" === r && (new ot).fromArray(d).normalize().conjugate().toArray(d);
        const p = a.times.length;
        for (let t = 0; t < p; ++t) {
          const e = t * h + c;
          if ("quaternion" === r) ot.multiplyQuaternionsFlat(a.values, e, d, 0, a.values, e); else {
            const t = h - 2 * c;
            for (let n = 0; n < t; ++n) a.values[e + n] -= d[n]
          }
        }
      }
      return t.blendMode = 2501, t
    }
  };

  class bo {
    constructor(t, e, n, i) {
      this.parameterPositions = t, this._cachedIndex = 0, this.resultBuffer = void 0 !== i ? i : new e.constructor(n), this.sampleValues = e, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {}
    }

    evaluate(t) {
      const e = this.parameterPositions;
      let n = this._cachedIndex, i = e[n], r = e[n - 1];
      t:{
        e:{
          let s;
          n:{
            i:if (!(t < i)) {
              for (let s = n + 2; ;) {
                if (void 0 === i) {
                  if (t < r) break i;
                  return n = e.length, this._cachedIndex = n, this.afterEnd_(n - 1, t, r)
                }
                if (n === s) break;
                if (r = i, i = e[++n], t < i) break e
              }
              s = e.length;
              break n
            }
            if (t >= r) break t;
            {
              const a = e[1];
              t < a && (n = 2, r = a);
              for (let s = n - 2; ;) {
                if (void 0 === r) return this._cachedIndex = 0, this.beforeStart_(0, t, i);
                if (n === s) break;
                if (i = r, r = e[--n - 1], t >= r) break e
              }
              s = n, n = 0
            }
          }
          for (; n < s;) {
            const i = n + s >>> 1;
            t < e[i] ? s = i : n = i + 1
          }
          if (i = e[n], r = e[n - 1], void 0 === r) return this._cachedIndex = 0, this.beforeStart_(0, t, i);
          if (void 0 === i) return n = e.length, this._cachedIndex = n, this.afterEnd_(n - 1, r, t)
        }
        this._cachedIndex = n, this.intervalChanged_(n, r, i)
      }
      return this.interpolate_(n, r, t, i)
    }

    getSettings_() {
      return this.settings || this.DefaultSettings_
    }

    copySampleValue_(t) {
      const e = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = t * i;
      for (let t = 0; t !== i; ++t) e[t] = n[r + t];
      return e
    }

    interpolate_() {
      throw new Error("call to abstract method")
    }

    intervalChanged_() {
    }
  }

  bo.prototype.beforeStart_ = bo.prototype.copySampleValue_, bo.prototype.afterEnd_ = bo.prototype.copySampleValue_;

  class Mo extends bo {
    constructor(t, e, n, i) {
      super(t, e, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
        endingStart: T,
        endingEnd: T
      }
    }

    intervalChanged_(t, e, n) {
      const i = this.parameterPositions;
      let r = t - 2, s = t + 1, a = i[r], o = i[s];
      if (void 0 === a) switch (this.getSettings_().endingStart) {
        case L:
          r = t, a = 2 * e - n;
          break;
        case A:
          r = i.length - 2, a = e + i[r] - i[r + 1];
          break;
        default:
          r = t, a = n
      }
      if (void 0 === o) switch (this.getSettings_().endingEnd) {
        case L:
          s = t, o = 2 * n - e;
          break;
        case A:
          s = 1, o = n + i[1] - i[0];
          break;
        default:
          s = t - 1, o = e
      }
      const l = .5 * (n - e), c = this.valueSize;
      this._weightPrev = l / (e - a), this._weightNext = l / (o - n), this._offsetPrev = r * c, this._offsetNext = s * c
    }

    interpolate_(t, e, n, i) {
      const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = t * a, l = o - a,
          c = this._offsetPrev, h = this._offsetNext, u = this._weightPrev, d = this._weightNext, p = (n - e) / (i - e),
          m = p * p, f = m * p, g = -u * f + 2 * u * m - u * p,
          v = (1 + u) * f + (-1.5 - 2 * u) * m + (-.5 + u) * p + 1, y = (-1 - d) * f + (1.5 + d) * m + .5 * p,
          x = d * f - d * m;
      for (let t = 0; t !== a; ++t) r[t] = g * s[c + t] + v * s[l + t] + y * s[o + t] + x * s[h + t];
      return r
    }
  }

  class So extends bo {
    constructor(t, e, n, i) {
      super(t, e, n, i)
    }

    interpolate_(t, e, n, i) {
      const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = t * a, l = o - a,
          c = (n - e) / (i - e), h = 1 - c;
      for (let t = 0; t !== a; ++t) r[t] = s[l + t] * h + s[o + t] * c;
      return r
    }
  }

  class Eo extends bo {
    constructor(t, e, n, i) {
      super(t, e, n, i)
    }

    interpolate_(t) {
      return this.copySampleValue_(t - 1)
    }
  }

  class To {
    constructor(t, e, n, i) {
      if (void 0 === t) throw new Error("THREE.KeyframeTrack: track name is undefined");
      if (void 0 === e || 0 === e.length) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
      this.name = t, this.times = wo.convertArray(e, this.TimeBufferType), this.values = wo.convertArray(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation)
    }

    static toJSON(t) {
      const e = t.constructor;
      let n;
      if (e.toJSON !== this.toJSON) n = e.toJSON(t); else {
        n = {name: t.name, times: wo.convertArray(t.times, Array), values: wo.convertArray(t.values, Array)};
        const e = t.getInterpolation();
        e !== t.DefaultInterpolation && (n.interpolation = e)
      }
      return n.type = t.ValueTypeName, n
    }

    InterpolantFactoryMethodDiscrete(t) {
      return new Eo(this.times, this.values, this.getValueSize(), t)
    }

    InterpolantFactoryMethodLinear(t) {
      return new So(this.times, this.values, this.getValueSize(), t)
    }

    InterpolantFactoryMethodSmooth(t) {
      return new Mo(this.times, this.values, this.getValueSize(), t)
    }

    setInterpolation(t) {
      let e;
      switch (t) {
        case M:
          e = this.InterpolantFactoryMethodDiscrete;
          break;
        case S:
          e = this.InterpolantFactoryMethodLinear;
          break;
        case E:
          e = this.InterpolantFactoryMethodSmooth
      }
      if (void 0 === e) {
        const e = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
        if (void 0 === this.createInterpolant) {
          if (t === this.DefaultInterpolation) throw new Error(e);
          this.setInterpolation(this.DefaultInterpolation)
        }
        return console.warn("THREE.KeyframeTrack:", e), this
      }
      return this.createInterpolant = e, this
    }

    getInterpolation() {
      switch (this.createInterpolant) {
        case this.InterpolantFactoryMethodDiscrete:
          return M;
        case this.InterpolantFactoryMethodLinear:
          return S;
        case this.InterpolantFactoryMethodSmooth:
          return E
      }
    }

    getValueSize() {
      return this.values.length / this.times.length
    }

    shift(t) {
      if (0 !== t) {
        const e = this.times;
        for (let n = 0, i = e.length; n !== i; ++n) e[n] += t
      }
      return this
    }

    scale(t) {
      if (1 !== t) {
        const e = this.times;
        for (let n = 0, i = e.length; n !== i; ++n) e[n] *= t
      }
      return this
    }

    trim(t, e) {
      const n = this.times, i = n.length;
      let r = 0, s = i - 1;
      for (; r !== i && n[r] < t;) ++r;
      for (; -1 !== s && n[s] > e;) --s;
      if (++s, 0 !== r || s !== i) {
        r >= s && (s = Math.max(s, 1), r = s - 1);
        const t = this.getValueSize();
        this.times = wo.arraySlice(n, r, s), this.values = wo.arraySlice(this.values, r * t, s * t)
      }
      return this
    }

    validate() {
      let t = !0;
      const e = this.getValueSize();
      e - Math.floor(e) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), t = !1);
      const n = this.times, i = this.values, r = n.length;
      0 === r && (console.error("THREE.KeyframeTrack: Track is empty.", this), t = !1);
      let s = null;
      for (let e = 0; e !== r; e++) {
        const i = n[e];
        if ("number" == typeof i && isNaN(i)) {
          console.error("THREE.KeyframeTrack: Time is not a valid number.", this, e, i), t = !1;
          break
        }
        if (null !== s && s > i) {
          console.error("THREE.KeyframeTrack: Out of order keys.", this, e, i, s), t = !1;
          break
        }
        s = i
      }
      if (void 0 !== i && wo.isTypedArray(i)) for (let e = 0, n = i.length; e !== n; ++e) {
        const n = i[e];
        if (isNaN(n)) {
          console.error("THREE.KeyframeTrack: Value is not a valid number.", this, e, n), t = !1;
          break
        }
      }
      return t
    }

    optimize() {
      const t = wo.arraySlice(this.times), e = wo.arraySlice(this.values), n = this.getValueSize(),
          i = this.getInterpolation() === E, r = t.length - 1;
      let s = 1;
      for (let a = 1; a < r; ++a) {
        let r = !1;
        const o = t[a];
        if (o !== t[a + 1] && (1 !== a || o !== t[0])) if (i) r = !0; else {
          const t = a * n, i = t - n, s = t + n;
          for (let a = 0; a !== n; ++a) {
            const n = e[t + a];
            if (n !== e[i + a] || n !== e[s + a]) {
              r = !0;
              break
            }
          }
        }
        if (r) {
          if (a !== s) {
            t[s] = t[a];
            const i = a * n, r = s * n;
            for (let t = 0; t !== n; ++t) e[r + t] = e[i + t]
          }
          ++s
        }
      }
      if (r > 0) {
        t[s] = t[r];
        for (let t = r * n, i = s * n, a = 0; a !== n; ++a) e[i + a] = e[t + a];
        ++s
      }
      return s !== t.length ? (this.times = wo.arraySlice(t, 0, s), this.values = wo.arraySlice(e, 0, s * n)) : (this.times = t, this.values = e), this
    }

    clone() {
      const t = wo.arraySlice(this.times, 0), e = wo.arraySlice(this.values, 0),
          n = new (0, this.constructor)(this.name, t, e);
      return n.createInterpolant = this.createInterpolant, n
    }
  }

  To.prototype.TimeBufferType = Float32Array, To.prototype.ValueBufferType = Float32Array, To.prototype.DefaultInterpolation = S;

  class Lo extends To {
  }

  Lo.prototype.ValueTypeName = "bool", Lo.prototype.ValueBufferType = Array, Lo.prototype.DefaultInterpolation = M, Lo.prototype.InterpolantFactoryMethodLinear = void 0, Lo.prototype.InterpolantFactoryMethodSmooth = void 0;

  class Ao extends To {
  }

  Ao.prototype.ValueTypeName = "color";

  class Co extends To {
  }

  Co.prototype.ValueTypeName = "number";

  class Po extends bo {
    constructor(t, e, n, i) {
      super(t, e, n, i)
    }

    interpolate_(t, e, n, i) {
      const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = (n - e) / (i - e);
      let l = t * a;
      for (let t = l + a; l !== t; l += 4) ot.slerpFlat(r, 0, s, l - a, s, l, o);
      return r
    }
  }

  class Ro extends To {
    InterpolantFactoryMethodLinear(t) {
      return new Po(this.times, this.values, this.getValueSize(), t)
    }
  }

  Ro.prototype.ValueTypeName = "quaternion", Ro.prototype.DefaultInterpolation = S, Ro.prototype.InterpolantFactoryMethodSmooth = void 0;

  class Io extends To {
  }

  Io.prototype.ValueTypeName = "string", Io.prototype.ValueBufferType = Array, Io.prototype.DefaultInterpolation = M, Io.prototype.InterpolantFactoryMethodLinear = void 0, Io.prototype.InterpolantFactoryMethodSmooth = void 0;

  class Do extends To {
  }

  Do.prototype.ValueTypeName = "vector";

  class No {
    constructor(t, e = -1, n, i = 2500) {
      this.name = t, this.tracks = n, this.duration = e, this.blendMode = i, this.uuid = G(), this.duration < 0 && this.resetDuration()
    }

    static parse(t) {
      const e = [], n = t.tracks, i = 1 / (t.fps || 1);
      for (let t = 0, r = n.length; t !== r; ++t) e.push(zo(n[t]).scale(i));
      const r = new this(t.name, t.duration, e, t.blendMode);
      return r.uuid = t.uuid, r
    }

    static toJSON(t) {
      const e = [], n = t.tracks,
          i = {name: t.name, duration: t.duration, tracks: e, uuid: t.uuid, blendMode: t.blendMode};
      for (let t = 0, i = n.length; t !== i; ++t) e.push(To.toJSON(n[t]));
      return i
    }

    static CreateFromMorphTargetSequence(t, e, n, i) {
      const r = e.length, s = [];
      for (let t = 0; t < r; t++) {
        let a = [], o = [];
        a.push((t + r - 1) % r, t, (t + 1) % r), o.push(0, 1, 0);
        const l = wo.getKeyframeOrder(a);
        a = wo.sortedArray(a, 1, l), o = wo.sortedArray(o, 1, l), i || 0 !== a[0] || (a.push(r), o.push(o[0])), s.push(new Co(".morphTargetInfluences[" + e[t].name + "]", a, o).scale(1 / n))
      }
      return new this(t, -1, s)
    }

    static findByName(t, e) {
      let n = t;
      if (!Array.isArray(t)) {
        const e = t;
        n = e.geometry && e.geometry.animations || e.animations
      }
      for (let t = 0; t < n.length; t++) if (n[t].name === e) return n[t];
      return null
    }

    static CreateClipsFromMorphTargetSequences(t, e, n) {
      const i = {}, r = /^([\w-]*?)([\d]+)$/;
      for (let e = 0, n = t.length; e < n; e++) {
        const n = t[e], s = n.name.match(r);
        if (s && s.length > 1) {
          const t = s[1];
          let e = i[t];
          e || (i[t] = e = []), e.push(n)
        }
      }
      const s = [];
      for (const t in i) s.push(this.CreateFromMorphTargetSequence(t, i[t], e, n));
      return s
    }

    static parseAnimation(t, e) {
      if (!t) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
      const n = function (t, e, n, i, r) {
        if (0 !== n.length) {
          const s = [], a = [];
          wo.flattenJSON(n, s, a, i), 0 !== s.length && r.push(new t(e, s, a))
        }
      }, i = [], r = t.name || "default", s = t.fps || 30, a = t.blendMode;
      let o = t.length || -1;
      const l = t.hierarchy || [];
      for (let t = 0; t < l.length; t++) {
        const r = l[t].keys;
        if (r && 0 !== r.length) if (r[0].morphTargets) {
          const t = {};
          let e;
          for (e = 0; e < r.length; e++) if (r[e].morphTargets) for (let n = 0; n < r[e].morphTargets.length; n++) t[r[e].morphTargets[n]] = -1;
          for (const n in t) {
            const t = [], s = [];
            for (let i = 0; i !== r[e].morphTargets.length; ++i) {
              const i = r[e];
              t.push(i.time), s.push(i.morphTarget === n ? 1 : 0)
            }
            i.push(new Co(".morphTargetInfluence[" + n + "]", t, s))
          }
          o = t.length * (s || 1)
        } else {
          const s = ".bones[" + e[t].name + "]";
          n(Do, s + ".position", r, "pos", i), n(Ro, s + ".quaternion", r, "rot", i), n(Do, s + ".scale", r, "scl", i)
        }
      }
      return 0 === i.length ? null : new this(r, o, i, a)
    }

    resetDuration() {
      let t = 0;
      for (let e = 0, n = this.tracks.length; e !== n; ++e) {
        const n = this.tracks[e];
        t = Math.max(t, n.times[n.times.length - 1])
      }
      return this.duration = t, this
    }

    trim() {
      for (let t = 0; t < this.tracks.length; t++) this.tracks[t].trim(0, this.duration);
      return this
    }

    validate() {
      let t = !0;
      for (let e = 0; e < this.tracks.length; e++) t = t && this.tracks[e].validate();
      return t
    }

    optimize() {
      for (let t = 0; t < this.tracks.length; t++) this.tracks[t].optimize();
      return this
    }

    clone() {
      const t = [];
      for (let e = 0; e < this.tracks.length; e++) t.push(this.tracks[e].clone());
      return new this.constructor(this.name, this.duration, t, this.blendMode)
    }

    toJSON() {
      return this.constructor.toJSON(this)
    }
  }

  function zo(t) {
    if (void 0 === t.type) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
    const e = function (t) {
      switch (t.toLowerCase()) {
        case"scalar":
        case"double":
        case"float":
        case"number":
        case"integer":
          return Co;
        case"vector":
        case"vector2":
        case"vector3":
        case"vector4":
          return Do;
        case"color":
          return Ao;
        case"quaternion":
          return Ro;
        case"bool":
        case"boolean":
          return Lo;
        case"string":
          return Io
      }
      throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + t)
    }(t.type);
    if (void 0 === t.times) {
      const e = [], n = [];
      wo.flattenJSON(t.keys, e, n, "value"), t.times = e, t.values = n
    }
    return void 0 !== e.parse ? e.parse(t) : new e(t.name, t.times, t.values, t.interpolation)
  }

  const Oo = {
    enabled: !1, files: {}, add: function (t, e) {
      !1 !== this.enabled && (this.files[t] = e)
    }, get: function (t) {
      if (!1 !== this.enabled) return this.files[t]
    }, remove: function (t) {
      delete this.files[t]
    }, clear: function () {
      this.files = {}
    }
  };
  const Bo = new class {
    constructor(t, e, n) {
      const i = this;
      let r, s = !1, a = 0, o = 0;
      const l = [];
      this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = n, this.itemStart = function (t) {
        o++, !1 === s && void 0 !== i.onStart && i.onStart(t, a, o), s = !0
      }, this.itemEnd = function (t) {
        a++, void 0 !== i.onProgress && i.onProgress(t, a, o), a === o && (s = !1, void 0 !== i.onLoad && i.onLoad())
      }, this.itemError = function (t) {
        void 0 !== i.onError && i.onError(t)
      }, this.resolveURL = function (t) {
        return r ? r(t) : t
      }, this.setURLModifier = function (t) {
        return r = t, this
      }, this.addHandler = function (t, e) {
        return l.push(t, e), this
      }, this.removeHandler = function (t) {
        const e = l.indexOf(t);
        return -1 !== e && l.splice(e, 2), this
      }, this.getHandler = function (t) {
        for (let e = 0, n = l.length; e < n; e += 2) {
          const n = l[e], i = l[e + 1];
          if (n.global && (n.lastIndex = 0), n.test(t)) return i
        }
        return null
      }
    }
  };

  class Fo {
    constructor(t) {
      this.manager = void 0 !== t ? t : Bo, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {}
    }

    load() {
    }

    loadAsync(t, e) {
      const n = this;
      return new Promise((function (i, r) {
        n.load(t, i, e, r)
      }))
    }

    parse() {
    }

    setCrossOrigin(t) {
      return this.crossOrigin = t, this
    }

    setWithCredentials(t) {
      return this.withCredentials = t, this
    }

    setPath(t) {
      return this.path = t, this
    }

    setResourcePath(t) {
      return this.resourcePath = t, this
    }

    setRequestHeader(t) {
      return this.requestHeader = t, this
    }
  }

  const ko = {};

  class Uo extends Fo {
    constructor(t) {
      super(t)
    }

    load(t, e, n, i) {
      void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
      const r = this, s = Oo.get(t);
      if (void 0 !== s) return r.manager.itemStart(t), setTimeout((function () {
        e && e(s), r.manager.itemEnd(t)
      }), 0), s;
      if (void 0 !== ko[t]) return void ko[t].push({onLoad: e, onProgress: n, onError: i});
      const a = t.match(/^data:(.*?)(;base64)?,(.*)$/);
      let o;
      if (a) {
        const n = a[1], s = !!a[2];
        let o = a[3];
        o = decodeURIComponent(o), s && (o = atob(o));
        try {
          let i;
          const s = (this.responseType || "").toLowerCase();
          switch (s) {
            case"arraybuffer":
            case"blob":
              const t = new Uint8Array(o.length);
              for (let e = 0; e < o.length; e++) t[e] = o.charCodeAt(e);
              i = "blob" === s ? new Blob([t.buffer], {type: n}) : t.buffer;
              break;
            case"document":
              const e = new DOMParser;
              i = e.parseFromString(o, n);
              break;
            case"json":
              i = JSON.parse(o);
              break;
            default:
              i = o
          }
          setTimeout((function () {
            e && e(i), r.manager.itemEnd(t)
          }), 0)
        } catch (e) {
          setTimeout((function () {
            i && i(e), r.manager.itemError(t), r.manager.itemEnd(t)
          }), 0)
        }
      } else {
        ko[t] = [], ko[t].push({
          onLoad: e,
          onProgress: n,
          onError: i
        }), o = new XMLHttpRequest, o.open("GET", t, !0), o.addEventListener("load", (function (e) {
          const n = this.response, i = ko[t];
          if (delete ko[t], 200 === this.status || 0 === this.status) {
            0 === this.status && console.warn("THREE.FileLoader: HTTP Status 0 received."), Oo.add(t, n);
            for (let t = 0, e = i.length; t < e; t++) {
              const e = i[t];
              e.onLoad && e.onLoad(n)
            }
            r.manager.itemEnd(t)
          } else {
            for (let t = 0, n = i.length; t < n; t++) {
              const n = i[t];
              n.onError && n.onError(e)
            }
            r.manager.itemError(t), r.manager.itemEnd(t)
          }
        }), !1), o.addEventListener("progress", (function (e) {
          const n = ko[t];
          for (let t = 0, i = n.length; t < i; t++) {
            const i = n[t];
            i.onProgress && i.onProgress(e)
          }
        }), !1), o.addEventListener("error", (function (e) {
          const n = ko[t];
          delete ko[t];
          for (let t = 0, i = n.length; t < i; t++) {
            const i = n[t];
            i.onError && i.onError(e)
          }
          r.manager.itemError(t), r.manager.itemEnd(t)
        }), !1), o.addEventListener("abort", (function (e) {
          const n = ko[t];
          delete ko[t];
          for (let t = 0, i = n.length; t < i; t++) {
            const i = n[t];
            i.onError && i.onError(e)
          }
          r.manager.itemError(t), r.manager.itemEnd(t)
        }), !1), void 0 !== this.responseType && (o.responseType = this.responseType), void 0 !== this.withCredentials && (o.withCredentials = this.withCredentials), o.overrideMimeType && o.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : "text/plain");
        for (const t in this.requestHeader) o.setRequestHeader(t, this.requestHeader[t]);
        o.send(null)
      }
      return r.manager.itemStart(t), o
    }

    setResponseType(t) {
      return this.responseType = t, this
    }

    setMimeType(t) {
      return this.mimeType = t, this
    }
  }

  class Ho extends Fo {
    constructor(t) {
      super(t)
    }

    load(t, e, n, i) {
      if (void 0 === t) return;
      void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
      const r = this, s = Oo.get(t);
      if (void 0 !== s) return r.manager.itemStart(t), setTimeout((function () {
        e && e(s), r.manager.itemEnd(t)
      }), 0), s;
      const a = document.createElementNS("http://www.w3.org/1999/xhtml", "img");

      function o() {
        a.removeEventListener("load", o, !1), a.removeEventListener("error", l, !1), Oo.add(t, this), e && e(this), r.manager.itemEnd(t)
      }

      function l(e) {
        a.removeEventListener("load", o, !1), a.removeEventListener("error", l, !1), i && i(e), r.manager.itemError(t), r.manager.itemEnd(t)
      }

      return a.addEventListener("load", o, !1), a.addEventListener("error", l, !1), "data:" !== t.substr(0, 5) && void 0 !== this.crossOrigin && (a.crossOrigin = this.crossOrigin), r.manager.itemStart(t), a.src = t, a
    }
  }

  class Go extends Fo {
    constructor(t) {
      super(t)
    }

    load(t, e, n, i) {
      const r = new bn, s = new Ho(this.manager);
      s.setCrossOrigin(this.crossOrigin), s.setPath(this.path);
      let a = 0;

      function o(n) {
        s.load(t[n], (function (t) {
          r.images[n] = t, a++, 6 === a && (r.needsUpdate = !0, e && e(r))
        }), void 0, i)
      }

      for (let e = 0; e < t.length; ++e) o(e);
      return r
    }
  }

  class Vo extends Fo {
    constructor(t) {
      super(t)
    }

    load(t, e, n, i) {
      const r = new nt, s = new Ho(this.manager);
      return s.setCrossOrigin(this.crossOrigin), s.setPath(this.path), s.load(t, (function (n) {
        r.image = n;
        const i = t.search(/\.jpe?g($|\?)/i) > 0 || 0 === t.search(/^data\:image\/jpeg/);
        r.format = i ? x : _, r.needsUpdate = !0, void 0 !== e && e(r)
      }), n, i), r
    }
  }

  class Wo extends xa {
    constructor() {
      super(), this.type = "CurvePath", this.curves = [], this.autoClose = !1
    }

    add(t) {
      this.curves.push(t)
    }

    closePath() {
      const t = this.curves[0].getPoint(0), e = this.curves[this.curves.length - 1].getPoint(1);
      t.equals(e) || this.curves.push(new Da(e, t))
    }

    getPoint(t) {
      const e = t * this.getLength(), n = this.getCurveLengths();
      let i = 0;
      for (; i < n.length;) {
        if (n[i] >= e) {
          const t = n[i] - e, r = this.curves[i], s = r.getLength(), a = 0 === s ? 0 : 1 - t / s;
          return r.getPointAt(a)
        }
        i++
      }
      return null
    }

    getLength() {
      const t = this.getCurveLengths();
      return t[t.length - 1]
    }

    updateArcLengths() {
      this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths()
    }

    getCurveLengths() {
      if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
      const t = [];
      let e = 0;
      for (let n = 0, i = this.curves.length; n < i; n++) e += this.curves[n].getLength(), t.push(e);
      return this.cacheLengths = t, t
    }

    getSpacedPoints(t = 40) {
      const e = [];
      for (let n = 0; n <= t; n++) e.push(this.getPoint(n / t));
      return this.autoClose && e.push(e[0]), e
    }

    getPoints(t = 12) {
      const e = [];
      let n;
      for (let i = 0, r = this.curves; i < r.length; i++) {
        const s = r[i],
            a = s && s.isEllipseCurve ? 2 * t : s && (s.isLineCurve || s.isLineCurve3) ? 1 : s && s.isSplineCurve ? t * s.points.length : t,
            o = s.getPoints(a);
        for (let t = 0; t < o.length; t++) {
          const i = o[t];
          n && n.equals(i) || (e.push(i), n = i)
        }
      }
      return this.autoClose && e.length > 1 && !e[e.length - 1].equals(e[0]) && e.push(e[0]), e
    }

    copy(t) {
      super.copy(t), this.curves = [];
      for (let e = 0, n = t.curves.length; e < n; e++) {
        const n = t.curves[e];
        this.curves.push(n.clone())
      }
      return this.autoClose = t.autoClose, this
    }

    toJSON() {
      const t = super.toJSON();
      t.autoClose = this.autoClose, t.curves = [];
      for (let e = 0, n = this.curves.length; e < n; e++) {
        const n = this.curves[e];
        t.curves.push(n.toJSON())
      }
      return t
    }

    fromJSON(t) {
      super.fromJSON(t), this.autoClose = t.autoClose, this.curves = [];
      for (let e = 0, n = t.curves.length; e < n; e++) {
        const n = t.curves[e];
        this.curves.push((new Ba[n.type]).fromJSON(n))
      }
      return this
    }
  }

  class jo extends Wo {
    constructor(t) {
      super(), this.type = "Path", this.currentPoint = new J, t && this.setFromPoints(t)
    }

    setFromPoints(t) {
      this.moveTo(t[0].x, t[0].y);
      for (let e = 1, n = t.length; e < n; e++) this.lineTo(t[e].x, t[e].y);
      return this
    }

    moveTo(t, e) {
      return this.currentPoint.set(t, e), this
    }

    lineTo(t, e) {
      const n = new Da(this.currentPoint.clone(), new J(t, e));
      return this.curves.push(n), this.currentPoint.set(t, e), this
    }

    quadraticCurveTo(t, e, n, i) {
      const r = new Na(this.currentPoint.clone(), new J(t, e), new J(n, i));
      return this.curves.push(r), this.currentPoint.set(n, i), this
    }

    bezierCurveTo(t, e, n, i, r, s) {
      const a = new Ra(this.currentPoint.clone(), new J(t, e), new J(n, i), new J(r, s));
      return this.curves.push(a), this.currentPoint.set(r, s), this
    }

    splineThru(t) {
      const e = [this.currentPoint.clone()].concat(t), n = new Oa(e);
      return this.curves.push(n), this.currentPoint.copy(t[t.length - 1]), this
    }

    arc(t, e, n, i, r, s) {
      const a = this.currentPoint.x, o = this.currentPoint.y;
      return this.absarc(t + a, e + o, n, i, r, s), this
    }

    absarc(t, e, n, i, r, s) {
      return this.absellipse(t, e, n, n, i, r, s), this
    }

    ellipse(t, e, n, i, r, s, a, o) {
      const l = this.currentPoint.x, c = this.currentPoint.y;
      return this.absellipse(t + l, e + c, n, i, r, s, a, o), this
    }

    absellipse(t, e, n, i, r, s, a, o) {
      const l = new _a(t, e, n, i, r, s, a, o);
      if (this.curves.length > 0) {
        const t = l.getPoint(0);
        t.equals(this.currentPoint) || this.lineTo(t.x, t.y)
      }
      this.curves.push(l);
      const c = l.getPoint(1);
      return this.currentPoint.copy(c), this
    }

    copy(t) {
      return super.copy(t), this.currentPoint.copy(t.currentPoint), this
    }

    toJSON() {
      const t = super.toJSON();
      return t.currentPoint = this.currentPoint.toArray(), t
    }

    fromJSON(t) {
      return super.fromJSON(t), this.currentPoint.fromArray(t.currentPoint), this
    }
  }

  class Xo extends jo {
    constructor(t) {
      super(t), this.uuid = G(), this.type = "Shape", this.holes = []
    }

    getPointsHoles(t) {
      const e = [];
      for (let n = 0, i = this.holes.length; n < i; n++) e[n] = this.holes[n].getPoints(t);
      return e
    }

    extractPoints(t) {
      return {shape: this.getPoints(t), holes: this.getPointsHoles(t)}
    }

    copy(t) {
      super.copy(t), this.holes = [];
      for (let e = 0, n = t.holes.length; e < n; e++) {
        const n = t.holes[e];
        this.holes.push(n.clone())
      }
      return this
    }

    toJSON() {
      const t = super.toJSON();
      t.uuid = this.uuid, t.holes = [];
      for (let e = 0, n = this.holes.length; e < n; e++) {
        const n = this.holes[e];
        t.holes.push(n.toJSON())
      }
      return t
    }

    fromJSON(t) {
      super.fromJSON(t), this.uuid = t.uuid, this.holes = [];
      for (let e = 0, n = t.holes.length; e < n; e++) {
        const n = t.holes[e];
        this.holes.push((new jo).fromJSON(n))
      }
      return this
    }
  }

  class Yo extends he {
    constructor(t, e = 1) {
      super(), this.type = "Light", this.color = new Pe(t), this.intensity = e
    }

    dispose() {
    }

    copy(t) {
      return super.copy(t), this.color.copy(t.color), this.intensity = t.intensity, this
    }

    toJSON(t) {
      const e = super.toJSON(t);
      return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (e.object.distance = this.distance), void 0 !== this.angle && (e.object.angle = this.angle), void 0 !== this.decay && (e.object.decay = this.decay), void 0 !== this.penumbra && (e.object.penumbra = this.penumbra), void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()), e
    }
  }

  Yo.prototype.isLight = !0;

  class qo extends Yo {
    constructor(t, e, n) {
      super(t, n), this.type = "HemisphereLight", this.position.copy(he.DefaultUp), this.updateMatrix(), this.groundColor = new Pe(e)
    }

    copy(t) {
      return Yo.prototype.copy.call(this, t), this.groundColor.copy(t.groundColor), this
    }
  }

  qo.prototype.isHemisphereLight = !0;
  const Zo = new kt, Jo = new lt, Qo = new lt;

  class Ko {
    constructor(t) {
      this.camera = t, this.bias = 0, this.normalBias = 0, this.radius = 1, this.mapSize = new J(512, 512), this.map = null, this.mapPass = null, this.matrix = new kt, this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Pn, this._frameExtents = new J(1, 1), this._viewportCount = 1, this._viewports = [new rt(0, 0, 1, 1)]
    }

    getViewportCount() {
      return this._viewportCount
    }

    getFrustum() {
      return this._frustum
    }

    updateMatrices(t) {
      const e = this.camera, n = this.matrix;
      Jo.setFromMatrixPosition(t.matrixWorld), e.position.copy(Jo), Qo.setFromMatrixPosition(t.target.matrixWorld), e.lookAt(Qo), e.updateMatrixWorld(), Zo.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Zo), n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), n.multiply(e.projectionMatrix), n.multiply(e.matrixWorldInverse)
    }

    getViewport(t) {
      return this._viewports[t]
    }

    getFrameExtents() {
      return this._frameExtents
    }

    dispose() {
      this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose()
    }

    copy(t) {
      return this.camera = t.camera.clone(), this.bias = t.bias, this.radius = t.radius, this.mapSize.copy(t.mapSize), this
    }

    clone() {
      return (new this.constructor).copy(this)
    }

    toJSON() {
      const t = {};
      return 0 !== this.bias && (t.bias = this.bias), 0 !== this.normalBias && (t.normalBias = this.normalBias), 1 !== this.radius && (t.radius = this.radius), 512 === this.mapSize.x && 512 === this.mapSize.y || (t.mapSize = this.mapSize.toArray()), t.camera = this.camera.toJSON(!1).object, delete t.camera.matrix, t
    }
  }

  class $o extends Ko {
    constructor() {
      super(new xn(50, 1, .5, 500)), this.focus = 1
    }

    updateMatrices(t) {
      const e = this.camera, n = 2 * H * t.angle * this.focus, i = this.mapSize.width / this.mapSize.height,
          r = t.distance || e.far;
      n === e.fov && i === e.aspect && r === e.far || (e.fov = n, e.aspect = i, e.far = r, e.updateProjectionMatrix()), super.updateMatrices(t)
    }

    copy(t) {
      return super.copy(t), this.focus = t.focus, this
    }
  }

  $o.prototype.isSpotLightShadow = !0;

  class tl extends Yo {
    constructor(t, e, n = 0, i = Math.PI / 3, r = 0, s = 1) {
      super(t, e), this.type = "SpotLight", this.position.copy(he.DefaultUp), this.updateMatrix(), this.target = new he, this.distance = n, this.angle = i, this.penumbra = r, this.decay = s, this.shadow = new $o
    }

    get power() {
      return this.intensity * Math.PI
    }

    set power(t) {
      this.intensity = t / Math.PI
    }

    dispose() {
      this.shadow.dispose()
    }

    copy(t) {
      return super.copy(t), this.distance = t.distance, this.angle = t.angle, this.penumbra = t.penumbra, this.decay = t.decay, this.target = t.target.clone(), this.shadow = t.shadow.clone(), this
    }
  }

  tl.prototype.isSpotLight = !0;
  const el = new kt, nl = new lt, il = new lt;

  class rl extends Ko {
    constructor() {
      super(new xn(90, 1, .5, 500)), this._frameExtents = new J(4, 2), this._viewportCount = 6, this._viewports = [new rt(2, 1, 1, 1), new rt(0, 1, 1, 1), new rt(3, 1, 1, 1), new rt(1, 1, 1, 1), new rt(3, 0, 1, 1), new rt(1, 0, 1, 1)], this._cubeDirections = [new lt(1, 0, 0), new lt(-1, 0, 0), new lt(0, 0, 1), new lt(0, 0, -1), new lt(0, 1, 0), new lt(0, -1, 0)], this._cubeUps = [new lt(0, 1, 0), new lt(0, 1, 0), new lt(0, 1, 0), new lt(0, 1, 0), new lt(0, 0, 1), new lt(0, 0, -1)]
    }

    updateMatrices(t, e = 0) {
      const n = this.camera, i = this.matrix, r = t.distance || n.far;
      r !== n.far && (n.far = r, n.updateProjectionMatrix()), nl.setFromMatrixPosition(t.matrixWorld), n.position.copy(nl), il.copy(n.position), il.add(this._cubeDirections[e]), n.up.copy(this._cubeUps[e]), n.lookAt(il), n.updateMatrixWorld(), i.makeTranslation(-nl.x, -nl.y, -nl.z), el.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(el)
    }
  }

  rl.prototype.isPointLightShadow = !0;

  class sl extends Yo {
    constructor(t, e, n = 0, i = 1) {
      super(t, e), this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new rl
    }

    get power() {
      return 4 * this.intensity * Math.PI
    }

    set power(t) {
      this.intensity = t / (4 * Math.PI)
    }

    dispose() {
      this.shadow.dispose()
    }

    copy(t) {
      return super.copy(t), this.distance = t.distance, this.decay = t.decay, this.shadow = t.shadow.clone(), this
    }
  }

  sl.prototype.isPointLight = !0;

  class al extends Ko {
    constructor() {
      super(new Vn(-5, 5, 5, -5, .5, 500))
    }
  }

  al.prototype.isDirectionalLightShadow = !0;

  class ol extends Yo {
    constructor(t, e) {
      super(t, e), this.type = "DirectionalLight", this.position.copy(he.DefaultUp), this.updateMatrix(), this.target = new he, this.shadow = new al
    }

    dispose() {
      this.shadow.dispose()
    }

    copy(t) {
      return super.copy(t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this
    }
  }

  ol.prototype.isDirectionalLight = !0;

  class ll extends Yo {
    constructor(t, e) {
      super(t, e), this.type = "AmbientLight"
    }
  }

  ll.prototype.isAmbientLight = !0;
  (class extends Yo {
    constructor(t, e, n = 10, i = 10) {
      super(t, e), this.type = "RectAreaLight", this.width = n, this.height = i
    }

    copy(t) {
      return super.copy(t), this.width = t.width, this.height = t.height, this
    }

    toJSON(t) {
      const e = super.toJSON(t);
      return e.object.width = this.width, e.object.height = this.height, e
    }
  }).prototype.isRectAreaLight = !0;

  class cl {
    constructor() {
      this.coefficients = [];
      for (let t = 0; t < 9; t++) this.coefficients.push(new lt)
    }

    set(t) {
      for (let e = 0; e < 9; e++) this.coefficients[e].copy(t[e]);
      return this
    }

    zero() {
      for (let t = 0; t < 9; t++) this.coefficients[t].set(0, 0, 0);
      return this
    }

    getAt(t, e) {
      const n = t.x, i = t.y, r = t.z, s = this.coefficients;
      return e.copy(s[0]).multiplyScalar(.282095), e.addScaledVector(s[1], .488603 * i), e.addScaledVector(s[2], .488603 * r), e.addScaledVector(s[3], .488603 * n), e.addScaledVector(s[4], n * i * 1.092548), e.addScaledVector(s[5], i * r * 1.092548), e.addScaledVector(s[6], .315392 * (3 * r * r - 1)), e.addScaledVector(s[7], n * r * 1.092548), e.addScaledVector(s[8], .546274 * (n * n - i * i)), e
    }

    getIrradianceAt(t, e) {
      const n = t.x, i = t.y, r = t.z, s = this.coefficients;
      return e.copy(s[0]).multiplyScalar(.886227), e.addScaledVector(s[1], 1.023328 * i), e.addScaledVector(s[2], 1.023328 * r), e.addScaledVector(s[3], 1.023328 * n), e.addScaledVector(s[4], .858086 * n * i), e.addScaledVector(s[5], .858086 * i * r), e.addScaledVector(s[6], .743125 * r * r - .247708), e.addScaledVector(s[7], .858086 * n * r), e.addScaledVector(s[8], .429043 * (n * n - i * i)), e
    }

    add(t) {
      for (let e = 0; e < 9; e++) this.coefficients[e].add(t.coefficients[e]);
      return this
    }

    addScaledSH(t, e) {
      for (let n = 0; n < 9; n++) this.coefficients[n].addScaledVector(t.coefficients[n], e);
      return this
    }

    scale(t) {
      for (let e = 0; e < 9; e++) this.coefficients[e].multiplyScalar(t);
      return this
    }

    lerp(t, e) {
      for (let n = 0; n < 9; n++) this.coefficients[n].lerp(t.coefficients[n], e);
      return this
    }

    equals(t) {
      for (let e = 0; e < 9; e++) if (!this.coefficients[e].equals(t.coefficients[e])) return !1;
      return !0
    }

    copy(t) {
      return this.set(t.coefficients)
    }

    clone() {
      return (new this.constructor).copy(this)
    }

    fromArray(t, e = 0) {
      const n = this.coefficients;
      for (let i = 0; i < 9; i++) n[i].fromArray(t, e + 3 * i);
      return this
    }

    toArray(t = [], e = 0) {
      const n = this.coefficients;
      for (let i = 0; i < 9; i++) n[i].toArray(t, e + 3 * i);
      return t
    }

    static getBasisAt(t, e) {
      const n = t.x, i = t.y, r = t.z;
      e[0] = .282095, e[1] = .488603 * i, e[2] = .488603 * r, e[3] = .488603 * n, e[4] = 1.092548 * n * i, e[5] = 1.092548 * i * r, e[6] = .315392 * (3 * r * r - 1), e[7] = 1.092548 * n * r, e[8] = .546274 * (n * n - i * i)
    }
  }

  cl.prototype.isSphericalHarmonics3 = !0;

  class hl extends Yo {
    constructor(t = new cl, e = 1) {
      super(void 0, e), this.sh = t
    }

    copy(t) {
      return super.copy(t), this.sh.copy(t.sh), this
    }

    fromJSON(t) {
      return this.intensity = t.intensity, this.sh.fromArray(t.sh), this
    }

    toJSON(t) {
      const e = super.toJSON(t);
      return e.object.sh = this.sh.toArray(), e
    }
  }

  hl.prototype.isLightProbe = !0;

  class ul {
    static decodeText(t) {
      if ("undefined" != typeof TextDecoder) return (new TextDecoder).decode(t);
      let e = "";
      for (let n = 0, i = t.length; n < i; n++) e += String.fromCharCode(t[n]);
      try {
        return decodeURIComponent(escape(e))
      } catch (t) {
        return e
      }
    }

    static extractUrlBase(t) {
      const e = t.lastIndexOf("/");
      return -1 === e ? "./" : t.substr(0, e + 1)
    }
  }

  (class extends Xe {
    constructor() {
      super(), this.type = "InstancedBufferGeometry", this.instanceCount = 1 / 0
    }

    copy(t) {
      return super.copy(t), this.instanceCount = t.instanceCount, this
    }

    clone() {
      return (new this.constructor).copy(this)
    }

    toJSON() {
      const t = super.toJSON(this);
      return t.instanceCount = this.instanceCount, t.isInstancedBufferGeometry = !0, t
    }
  }).prototype.isInstancedBufferGeometry = !0;
  (class extends Ne {
    constructor(t, e, n, i = 1) {
      "number" == typeof n && (i = n, n = !1, console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")), super(t, e, n), this.meshPerAttribute = i
    }

    copy(t) {
      return super.copy(t), this.meshPerAttribute = t.meshPerAttribute, this
    }

    toJSON() {
      const t = super.toJSON();
      return t.meshPerAttribute = this.meshPerAttribute, t.isInstancedBufferAttribute = !0, t
    }
  }).prototype.isInstancedBufferAttribute = !0, class extends Fo {
    constructor(t) {
      super(t), "undefined" == typeof createImageBitmap && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), "undefined" == typeof fetch && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = {premultiplyAlpha: "none"}
    }

    setOptions(t) {
      return this.options = t, this
    }

    load(t, e, n, i) {
      void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
      const r = this, s = Oo.get(t);
      if (void 0 !== s) return r.manager.itemStart(t), setTimeout((function () {
        e && e(s), r.manager.itemEnd(t)
      }), 0), s;
      const a = {};
      a.credentials = "anonymous" === this.crossOrigin ? "same-origin" : "include", a.headers = this.requestHeader, fetch(t, a).then((function (t) {
        return t.blob()
      })).then((function (t) {
        return createImageBitmap(t, Object.assign(r.options, {colorSpaceConversion: "none"}))
      })).then((function (n) {
        Oo.add(t, n), e && e(n), r.manager.itemEnd(t)
      })).catch((function (e) {
        i && i(e), r.manager.itemError(t), r.manager.itemEnd(t)
      })), r.manager.itemStart(t)
    }
  }.prototype.isImageBitmapLoader = !0;
  let dl;

  class pl extends Fo {
    constructor(t) {
      super(t)
    }

    load(t, e, n, i) {
      const r = this, s = new Uo(this.manager);
      s.setResponseType("arraybuffer"), s.setPath(this.path), s.setRequestHeader(this.requestHeader), s.setWithCredentials(this.withCredentials), s.load(t, (function (n) {
        try {
          const t = n.slice(0);
          (void 0 === dl && (dl = new (window.AudioContext || window.webkitAudioContext)), dl).decodeAudioData(t, (function (t) {
            e(t)
          }))
        } catch (e) {
          i ? i(e) : console.error(e), r.manager.itemError(t)
        }
      }), n, i)
    }
  }

  (class extends hl {
    constructor(t, e, n = 1) {
      super(void 0, n);
      const i = (new Pe).set(t), r = (new Pe).set(e), s = new lt(i.r, i.g, i.b), a = new lt(r.r, r.g, r.b),
          o = Math.sqrt(Math.PI), l = o * Math.sqrt(.75);
      this.sh.coefficients[0].copy(s).add(a).multiplyScalar(o), this.sh.coefficients[1].copy(s).sub(a).multiplyScalar(l)
    }
  }).prototype.isHemisphereLightProbe = !0, class extends hl {
    constructor(t, e = 1) {
      super(void 0, e);
      const n = (new Pe).set(t);
      this.sh.coefficients[0].set(n.r, n.g, n.b).multiplyScalar(2 * Math.sqrt(Math.PI))
    }
  }.prototype.isAmbientLightProbe = !0;

  class ml {
    constructor(t, e, n) {
      let i, r, s;
      switch (this.binding = t, this.valueSize = n, e) {
        case"quaternion":
          i = this._slerp, r = this._slerpAdditive, s = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(6 * n), this._workIndex = 5;
          break;
        case"string":
        case"bool":
          i = this._select, r = this._select, s = this._setAdditiveIdentityOther, this.buffer = new Array(5 * n);
          break;
        default:
          i = this._lerp, r = this._lerpAdditive, s = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(5 * n)
      }
      this._mixBufferRegion = i, this._mixBufferRegionAdditive = r, this._setIdentity = s, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0
    }

    accumulate(t, e) {
      const n = this.buffer, i = this.valueSize, r = t * i + i;
      let s = this.cumulativeWeight;
      if (0 === s) {
        for (let t = 0; t !== i; ++t) n[r + t] = n[t];
        s = e
      } else {
        s += e;
        const t = e / s;
        this._mixBufferRegion(n, r, 0, t, i)
      }
      this.cumulativeWeight = s
    }

    accumulateAdditive(t) {
      const e = this.buffer, n = this.valueSize, i = n * this._addIndex;
      0 === this.cumulativeWeightAdditive && this._setIdentity(), this._mixBufferRegionAdditive(e, i, 0, t, n), this.cumulativeWeightAdditive += t
    }

    apply(t) {
      const e = this.valueSize, n = this.buffer, i = t * e + e, r = this.cumulativeWeight,
          s = this.cumulativeWeightAdditive, a = this.binding;
      if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, r < 1) {
        const t = e * this._origIndex;
        this._mixBufferRegion(n, i, t, 1 - r, e)
      }
      s > 0 && this._mixBufferRegionAdditive(n, i, this._addIndex * e, 1, e);
      for (let t = e, r = e + e; t !== r; ++t) if (n[t] !== n[t + e]) {
        a.setValue(n, i);
        break
      }
    }

    saveOriginalState() {
      const t = this.binding, e = this.buffer, n = this.valueSize, i = n * this._origIndex;
      t.getValue(e, i);
      for (let t = n, r = i; t !== r; ++t) e[t] = e[i + t % n];
      this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0
    }

    restoreOriginalState() {
      const t = 3 * this.valueSize;
      this.binding.setValue(this.buffer, t)
    }

    _setAdditiveIdentityNumeric() {
      const t = this._addIndex * this.valueSize, e = t + this.valueSize;
      for (let n = t; n < e; n++) this.buffer[n] = 0
    }

    _setAdditiveIdentityQuaternion() {
      this._setAdditiveIdentityNumeric(), this.buffer[this._addIndex * this.valueSize + 3] = 1
    }

    _setAdditiveIdentityOther() {
      const t = this._origIndex * this.valueSize, e = this._addIndex * this.valueSize;
      for (let n = 0; n < this.valueSize; n++) this.buffer[e + n] = this.buffer[t + n]
    }

    _select(t, e, n, i, r) {
      if (i >= .5) for (let i = 0; i !== r; ++i) t[e + i] = t[n + i]
    }

    _slerp(t, e, n, i) {
      ot.slerpFlat(t, e, t, e, t, n, i)
    }

    _slerpAdditive(t, e, n, i, r) {
      const s = this._workIndex * r;
      ot.multiplyQuaternionsFlat(t, s, t, e, t, n), ot.slerpFlat(t, e, t, e, t, s, i)
    }

    _lerp(t, e, n, i, r) {
      const s = 1 - i;
      for (let a = 0; a !== r; ++a) {
        const r = e + a;
        t[r] = t[r] * s + t[n + a] * i
      }
    }

    _lerpAdditive(t, e, n, i, r) {
      for (let s = 0; s !== r; ++s) {
        const r = e + s;
        t[r] = t[r] + t[n + s] * i
      }
    }
  }

  const fl = new RegExp("[\\[\\]\\.:\\/]", "g"), gl = "[^\\[\\]\\.:\\/]",
      vl = "[^" + "\\[\\]\\.:\\/".replace("\\.", "") + "]", yl = /((?:WC+[\/:])*)/.source.replace("WC", gl),
      xl = /(WCOD+)?/.source.replace("WCOD", vl), _l = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", gl),
      wl = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", gl), bl = new RegExp("^" + yl + xl + _l + wl + "$"),
      Ml = ["material", "materials", "bones"];

  class Sl {
    constructor(t, e, n) {
      this.path = e, this.parsedPath = n || Sl.parseTrackName(e), this.node = Sl.findNode(t, this.parsedPath.nodeName) || t, this.rootNode = t, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound
    }

    static create(t, e, n) {
      return t && t.isAnimationObjectGroup ? new Sl.Composite(t, e, n) : new Sl(t, e, n)
    }

    static sanitizeNodeName(t) {
      return t.replace(/\s/g, "_").replace(fl, "")
    }

    static parseTrackName(t) {
      const e = bl.exec(t);
      if (!e) throw new Error("PropertyBinding: Cannot parse trackName: " + t);
      const n = {nodeName: e[2], objectName: e[3], objectIndex: e[4], propertyName: e[5], propertyIndex: e[6]},
          i = n.nodeName && n.nodeName.lastIndexOf(".");
      if (void 0 !== i && -1 !== i) {
        const t = n.nodeName.substring(i + 1);
        -1 !== Ml.indexOf(t) && (n.nodeName = n.nodeName.substring(0, i), n.objectName = t)
      }
      if (null === n.propertyName || 0 === n.propertyName.length) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t);
      return n
    }

    static findNode(t, e) {
      if (!e || "" === e || "." === e || -1 === e || e === t.name || e === t.uuid) return t;
      if (t.skeleton) {
        const n = t.skeleton.getBoneByName(e);
        if (void 0 !== n) return n
      }
      if (t.children) {
        const n = function (t) {
          for (let i = 0; i < t.length; i++) {
            const r = t[i];
            if (r.name === e || r.uuid === e) return r;
            const s = n(r.children);
            if (s) return s
          }
          return null
        }, i = n(t.children);
        if (i) return i
      }
      return null
    }

    _getValue_unavailable() {
    }

    _setValue_unavailable() {
    }

    _getValue_direct(t, e) {
      t[e] = this.node[this.propertyName]
    }

    _getValue_array(t, e) {
      const n = this.resolvedProperty;
      for (let i = 0, r = n.length; i !== r; ++i) t[e++] = n[i]
    }

    _getValue_arrayElement(t, e) {
      t[e] = this.resolvedProperty[this.propertyIndex]
    }

    _getValue_toArray(t, e) {
      this.resolvedProperty.toArray(t, e)
    }

    _setValue_direct(t, e) {
      this.targetObject[this.propertyName] = t[e]
    }

    _setValue_direct_setNeedsUpdate(t, e) {
      this.targetObject[this.propertyName] = t[e], this.targetObject.needsUpdate = !0
    }

    _setValue_direct_setMatrixWorldNeedsUpdate(t, e) {
      this.targetObject[this.propertyName] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0
    }

    _setValue_array(t, e) {
      const n = this.resolvedProperty;
      for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++]
    }

    _setValue_array_setNeedsUpdate(t, e) {
      const n = this.resolvedProperty;
      for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
      this.targetObject.needsUpdate = !0
    }

    _setValue_array_setMatrixWorldNeedsUpdate(t, e) {
      const n = this.resolvedProperty;
      for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
      this.targetObject.matrixWorldNeedsUpdate = !0
    }

    _setValue_arrayElement(t, e) {
      this.resolvedProperty[this.propertyIndex] = t[e]
    }

    _setValue_arrayElement_setNeedsUpdate(t, e) {
      this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.needsUpdate = !0
    }

    _setValue_arrayElement_setMatrixWorldNeedsUpdate(t, e) {
      this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0
    }

    _setValue_fromArray(t, e) {
      this.resolvedProperty.fromArray(t, e)
    }

    _setValue_fromArray_setNeedsUpdate(t, e) {
      this.resolvedProperty.fromArray(t, e), this.targetObject.needsUpdate = !0
    }

    _setValue_fromArray_setMatrixWorldNeedsUpdate(t, e) {
      this.resolvedProperty.fromArray(t, e), this.targetObject.matrixWorldNeedsUpdate = !0
    }

    _getValue_unbound(t, e) {
      this.bind(), this.getValue(t, e)
    }

    _setValue_unbound(t, e) {
      this.bind(), this.setValue(t, e)
    }

    bind() {
      let t = this.node;
      const e = this.parsedPath, n = e.objectName, i = e.propertyName;
      let r = e.propertyIndex;
      if (t || (t = Sl.findNode(this.rootNode, e.nodeName) || this.rootNode, this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t) return void console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");
      if (n) {
        let i = e.objectIndex;
        switch (n) {
          case"materials":
            if (!t.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            if (!t.material.materials) return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            t = t.material.materials;
            break;
          case"bones":
            if (!t.skeleton) return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            t = t.skeleton.bones;
            for (let e = 0; e < t.length; e++) if (t[e].name === i) {
              i = e;
              break
            }
            break;
          default:
            if (void 0 === t[n]) return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
            t = t[n]
        }
        if (void 0 !== i) {
          if (void 0 === t[i]) return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
          t = t[i]
        }
      }
      const s = t[i];
      if (void 0 === s) {
        const n = e.nodeName;
        return void console.error("THREE.PropertyBinding: Trying to update property for track: " + n + "." + i + " but it wasn't found.", t)
      }
      let a = this.Versioning.None;
      this.targetObject = t, void 0 !== t.needsUpdate ? a = this.Versioning.NeedsUpdate : void 0 !== t.matrixWorldNeedsUpdate && (a = this.Versioning.MatrixWorldNeedsUpdate);
      let o = this.BindingType.Direct;
      if (void 0 !== r) {
        if ("morphTargetInfluences" === i) {
          if (!t.geometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          if (!t.geometry.isBufferGeometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.", this);
          if (!t.geometry.morphAttributes) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
          void 0 !== t.morphTargetDictionary[r] && (r = t.morphTargetDictionary[r])
        }
        o = this.BindingType.ArrayElement, this.resolvedProperty = s, this.propertyIndex = r
      } else void 0 !== s.fromArray && void 0 !== s.toArray ? (o = this.BindingType.HasFromToArray, this.resolvedProperty = s) : Array.isArray(s) ? (o = this.BindingType.EntireArray, this.resolvedProperty = s) : this.propertyName = i;
      this.getValue = this.GetterByBindingType[o], this.setValue = this.SetterByBindingTypeAndVersioning[o][a]
    }

    unbind() {
      this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound
    }
  }

  Sl.Composite = class {
    constructor(t, e, n) {
      const i = n || Sl.parseTrackName(e);
      this._targetGroup = t, this._bindings = t.subscribe_(e, i)
    }

    getValue(t, e) {
      this.bind();
      const n = this._targetGroup.nCachedObjects_, i = this._bindings[n];
      void 0 !== i && i.getValue(t, e)
    }

    setValue(t, e) {
      const n = this._bindings;
      for (let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i) n[i].setValue(t, e)
    }

    bind() {
      const t = this._bindings;
      for (let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e) t[e].bind()
    }

    unbind() {
      const t = this._bindings;
      for (let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e) t[e].unbind()
    }
  }, Sl.prototype.BindingType = {
    Direct: 0,
    EntireArray: 1,
    ArrayElement: 2,
    HasFromToArray: 3
  }, Sl.prototype.Versioning = {
    None: 0,
    NeedsUpdate: 1,
    MatrixWorldNeedsUpdate: 2
  }, Sl.prototype.GetterByBindingType = [Sl.prototype._getValue_direct, Sl.prototype._getValue_array, Sl.prototype._getValue_arrayElement, Sl.prototype._getValue_toArray], Sl.prototype.SetterByBindingTypeAndVersioning = [[Sl.prototype._setValue_direct, Sl.prototype._setValue_direct_setNeedsUpdate, Sl.prototype._setValue_direct_setMatrixWorldNeedsUpdate], [Sl.prototype._setValue_array, Sl.prototype._setValue_array_setNeedsUpdate, Sl.prototype._setValue_array_setMatrixWorldNeedsUpdate], [Sl.prototype._setValue_arrayElement, Sl.prototype._setValue_arrayElement_setNeedsUpdate, Sl.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate], [Sl.prototype._setValue_fromArray, Sl.prototype._setValue_fromArray_setNeedsUpdate, Sl.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];

  class El {
    constructor(t, e, n = null, i = e.blendMode) {
      this._mixer = t, this._clip = e, this._localRoot = n, this.blendMode = i;
      const r = e.tracks, s = r.length, a = new Array(s), o = {endingStart: T, endingEnd: T};
      for (let t = 0; t !== s; ++t) {
        const e = r[t].createInterpolant(null);
        a[t] = e, e.settings = o
      }
      this._interpolantSettings = o, this._interpolants = a, this._propertyBindings = new Array(s), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = 2201, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0
    }

    play() {
      return this._mixer._activateAction(this), this
    }

    stop() {
      return this._mixer._deactivateAction(this), this.reset()
    }

    reset() {
      return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping()
    }

    isRunning() {
      return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this)
    }

    isScheduled() {
      return this._mixer._isActiveAction(this)
    }

    startAt(t) {
      return this._startTime = t, this
    }

    setLoop(t, e) {
      return this.loop = t, this.repetitions = e, this
    }

    setEffectiveWeight(t) {
      return this.weight = t, this._effectiveWeight = this.enabled ? t : 0, this.stopFading()
    }

    getEffectiveWeight() {
      return this._effectiveWeight
    }

    fadeIn(t) {
      return this._scheduleFading(t, 0, 1)
    }

    fadeOut(t) {
      return this._scheduleFading(t, 1, 0)
    }

    crossFadeFrom(t, e, n) {
      if (t.fadeOut(e), this.fadeIn(e), n) {
        const n = this._clip.duration, i = t._clip.duration, r = i / n, s = n / i;
        t.warp(1, r, e), this.warp(s, 1, e)
      }
      return this
    }

    crossFadeTo(t, e, n) {
      return t.crossFadeFrom(this, e, n)
    }

    stopFading() {
      const t = this._weightInterpolant;
      return null !== t && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this
    }

    setEffectiveTimeScale(t) {
      return this.timeScale = t, this._effectiveTimeScale = this.paused ? 0 : t, this.stopWarping()
    }

    getEffectiveTimeScale() {
      return this._effectiveTimeScale
    }

    setDuration(t) {
      return this.timeScale = this._clip.duration / t, this.stopWarping()
    }

    syncWith(t) {
      return this.time = t.time, this.timeScale = t.timeScale, this.stopWarping()
    }

    halt(t) {
      return this.warp(this._effectiveTimeScale, 0, t)
    }

    warp(t, e, n) {
      const i = this._mixer, r = i.time, s = this.timeScale;
      let a = this._timeScaleInterpolant;
      null === a && (a = i._lendControlInterpolant(), this._timeScaleInterpolant = a);
      const o = a.parameterPositions, l = a.sampleValues;
      return o[0] = r, o[1] = r + n, l[0] = t / s, l[1] = e / s, this
    }

    stopWarping() {
      const t = this._timeScaleInterpolant;
      return null !== t && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this
    }

    getMixer() {
      return this._mixer
    }

    getClip() {
      return this._clip
    }

    getRoot() {
      return this._localRoot || this._mixer._root
    }

    _update(t, e, n, i) {
      if (!this.enabled) return void this._updateWeight(t);
      const r = this._startTime;
      if (null !== r) {
        const i = (t - r) * n;
        if (i < 0 || 0 === n) return;
        this._startTime = null, e = n * i
      }
      e *= this._updateTimeScale(t);
      const s = this._updateTime(e), a = this._updateWeight(t);
      if (a > 0) {
        const t = this._interpolants, e = this._propertyBindings;
        if (2501 === this.blendMode) for (let n = 0, i = t.length; n !== i; ++n) t[n].evaluate(s), e[n].accumulateAdditive(a); else for (let n = 0, r = t.length; n !== r; ++n) t[n].evaluate(s), e[n].accumulate(i, a)
      }
    }

    _updateWeight(t) {
      let e = 0;
      if (this.enabled) {
        e = this.weight;
        const n = this._weightInterpolant;
        if (null !== n) {
          const i = n.evaluate(t)[0];
          e *= i, t > n.parameterPositions[1] && (this.stopFading(), 0 === i && (this.enabled = !1))
        }
      }
      return this._effectiveWeight = e, e
    }

    _updateTimeScale(t) {
      let e = 0;
      if (!this.paused) {
        e = this.timeScale;
        const n = this._timeScaleInterpolant;
        null !== n && (e *= n.evaluate(t)[0], t > n.parameterPositions[1] && (this.stopWarping(), 0 === e ? this.paused = !0 : this.timeScale = e))
      }
      return this._effectiveTimeScale = e, e
    }

    _updateTime(t) {
      const e = this._clip.duration, n = this.loop;
      let i = this.time + t, r = this._loopCount;
      const s = 2202 === n;
      if (0 === t) return -1 === r ? i : s && 1 == (1 & r) ? e - i : i;
      if (2200 === n) {
        -1 === r && (this._loopCount = 0, this._setEndings(!0, !0, !1));
        t:{
          if (i >= e) i = e; else {
            if (!(i < 0)) {
              this.time = i;
              break t
            }
            i = 0
          }
          this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, this.time = i, this._mixer.dispatchEvent({
            type: "finished",
            action: this,
            direction: t < 0 ? -1 : 1
          })
        }
      } else {
        if (-1 === r && (t >= 0 ? (r = 0, this._setEndings(!0, 0 === this.repetitions, s)) : this._setEndings(0 === this.repetitions, !0, s)), i >= e || i < 0) {
          const n = Math.floor(i / e);
          i -= e * n, r += Math.abs(n);
          const a = this.repetitions - r;
          if (a <= 0) this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, i = t > 0 ? e : 0, this.time = i, this._mixer.dispatchEvent({
            type: "finished",
            action: this,
            direction: t > 0 ? 1 : -1
          }); else {
            if (1 === a) {
              const e = t < 0;
              this._setEndings(e, !e, s)
            } else this._setEndings(!1, !1, s);
            this._loopCount = r, this.time = i, this._mixer.dispatchEvent({type: "loop", action: this, loopDelta: n})
          }
        } else this.time = i;
        if (s && 1 == (1 & r)) return e - i
      }
      return i
    }

    _setEndings(t, e, n) {
      const i = this._interpolantSettings;
      n ? (i.endingStart = L, i.endingEnd = L) : (i.endingStart = t ? this.zeroSlopeAtStart ? L : T : A, i.endingEnd = e ? this.zeroSlopeAtEnd ? L : T : A)
    }

    _scheduleFading(t, e, n) {
      const i = this._mixer, r = i.time;
      let s = this._weightInterpolant;
      null === s && (s = i._lendControlInterpolant(), this._weightInterpolant = s);
      const a = s.parameterPositions, o = s.sampleValues;
      return a[0] = r, o[0] = e, a[1] = r + t, o[1] = n, this
    }
  }

  (class extends B {
    constructor(t) {
      super(), this._root = t, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1
    }

    _bindAction(t, e) {
      const n = t._localRoot || this._root, i = t._clip.tracks, r = i.length, s = t._propertyBindings,
          a = t._interpolants, o = n.uuid, l = this._bindingsByRootAndName;
      let c = l[o];
      void 0 === c && (c = {}, l[o] = c);
      for (let t = 0; t !== r; ++t) {
        const r = i[t], l = r.name;
        let h = c[l];
        if (void 0 !== h) s[t] = h; else {
          if (h = s[t], void 0 !== h) {
            null === h._cacheIndex && (++h.referenceCount, this._addInactiveBinding(h, o, l));
            continue
          }
          const i = e && e._propertyBindings[t].binding.parsedPath;
          h = new ml(Sl.create(n, l, i), r.ValueTypeName, r.getValueSize()), ++h.referenceCount, this._addInactiveBinding(h, o, l), s[t] = h
        }
        a[t].resultBuffer = h.buffer
      }
    }

    _activateAction(t) {
      if (!this._isActiveAction(t)) {
        if (null === t._cacheIndex) {
          const e = (t._localRoot || this._root).uuid, n = t._clip.uuid, i = this._actionsByClip[n];
          this._bindAction(t, i && i.knownActions[0]), this._addInactiveAction(t, n, e)
        }
        const e = t._propertyBindings;
        for (let t = 0, n = e.length; t !== n; ++t) {
          const n = e[t];
          0 == n.useCount++ && (this._lendBinding(n), n.saveOriginalState())
        }
        this._lendAction(t)
      }
    }

    _deactivateAction(t) {
      if (this._isActiveAction(t)) {
        const e = t._propertyBindings;
        for (let t = 0, n = e.length; t !== n; ++t) {
          const n = e[t];
          0 == --n.useCount && (n.restoreOriginalState(), this._takeBackBinding(n))
        }
        this._takeBackAction(t)
      }
    }

    _initMemoryManager() {
      this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
      const t = this;
      this.stats = {
        actions: {
          get total() {
            return t._actions.length
          }, get inUse() {
            return t._nActiveActions
          }
        }, bindings: {
          get total() {
            return t._bindings.length
          }, get inUse() {
            return t._nActiveBindings
          }
        }, controlInterpolants: {
          get total() {
            return t._controlInterpolants.length
          }, get inUse() {
            return t._nActiveControlInterpolants
          }
        }
      }
    }

    _isActiveAction(t) {
      const e = t._cacheIndex;
      return null !== e && e < this._nActiveActions
    }

    _addInactiveAction(t, e, n) {
      const i = this._actions, r = this._actionsByClip;
      let s = r[e];
      if (void 0 === s) s = {knownActions: [t], actionByRoot: {}}, t._byClipCacheIndex = 0, r[e] = s; else {
        const e = s.knownActions;
        t._byClipCacheIndex = e.length, e.push(t)
      }
      t._cacheIndex = i.length, i.push(t), s.actionByRoot[n] = t
    }

    _removeInactiveAction(t) {
      const e = this._actions, n = e[e.length - 1], i = t._cacheIndex;
      n._cacheIndex = i, e[i] = n, e.pop(), t._cacheIndex = null;
      const r = t._clip.uuid, s = this._actionsByClip, a = s[r], o = a.knownActions, l = o[o.length - 1],
          c = t._byClipCacheIndex;
      l._byClipCacheIndex = c, o[c] = l, o.pop(), t._byClipCacheIndex = null, delete a.actionByRoot[(t._localRoot || this._root).uuid], 0 === o.length && delete s[r], this._removeInactiveBindingsForAction(t)
    }

    _removeInactiveBindingsForAction(t) {
      const e = t._propertyBindings;
      for (let t = 0, n = e.length; t !== n; ++t) {
        const n = e[t];
        0 == --n.referenceCount && this._removeInactiveBinding(n)
      }
    }

    _lendAction(t) {
      const e = this._actions, n = t._cacheIndex, i = this._nActiveActions++, r = e[i];
      t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r
    }

    _takeBackAction(t) {
      const e = this._actions, n = t._cacheIndex, i = --this._nActiveActions, r = e[i];
      t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r
    }

    _addInactiveBinding(t, e, n) {
      const i = this._bindingsByRootAndName, r = this._bindings;
      let s = i[e];
      void 0 === s && (s = {}, i[e] = s), s[n] = t, t._cacheIndex = r.length, r.push(t)
    }

    _removeInactiveBinding(t) {
      const e = this._bindings, n = t.binding, i = n.rootNode.uuid, r = n.path, s = this._bindingsByRootAndName,
          a = s[i], o = e[e.length - 1], l = t._cacheIndex;
      o._cacheIndex = l, e[l] = o, e.pop(), delete a[r], 0 === Object.keys(a).length && delete s[i]
    }

    _lendBinding(t) {
      const e = this._bindings, n = t._cacheIndex, i = this._nActiveBindings++, r = e[i];
      t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r
    }

    _takeBackBinding(t) {
      const e = this._bindings, n = t._cacheIndex, i = --this._nActiveBindings, r = e[i];
      t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r
    }

    _lendControlInterpolant() {
      const t = this._controlInterpolants, e = this._nActiveControlInterpolants++;
      let n = t[e];
      return void 0 === n && (n = new So(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer), n.__cacheIndex = e, t[e] = n), n
    }

    _takeBackControlInterpolant(t) {
      const e = this._controlInterpolants, n = t.__cacheIndex, i = --this._nActiveControlInterpolants, r = e[i];
      t.__cacheIndex = i, e[i] = t, r.__cacheIndex = n, e[n] = r
    }

    clipAction(t, e, n) {
      const i = e || this._root, r = i.uuid;
      let s = "string" == typeof t ? No.findByName(i, t) : t;
      const a = null !== s ? s.uuid : t, o = this._actionsByClip[a];
      let l = null;
      if (void 0 === n && (n = null !== s ? s.blendMode : 2500), void 0 !== o) {
        const t = o.actionByRoot[r];
        if (void 0 !== t && t.blendMode === n) return t;
        l = o.knownActions[0], null === s && (s = l._clip)
      }
      if (null === s) return null;
      const c = new El(this, s, e, n);
      return this._bindAction(c, l), this._addInactiveAction(c, a, r), c
    }

    existingAction(t, e) {
      const n = e || this._root, i = n.uuid, r = "string" == typeof t ? No.findByName(n, t) : t, s = r ? r.uuid : t,
          a = this._actionsByClip[s];
      return void 0 !== a && a.actionByRoot[i] || null
    }

    stopAllAction() {
      const t = this._actions;
      for (let e = this._nActiveActions - 1; e >= 0; --e) t[e].stop();
      return this
    }

    update(t) {
      t *= this.timeScale;
      const e = this._actions, n = this._nActiveActions, i = this.time += t, r = Math.sign(t), s = this._accuIndex ^= 1;
      for (let a = 0; a !== n; ++a) e[a]._update(i, t, r, s);
      const a = this._bindings, o = this._nActiveBindings;
      for (let t = 0; t !== o; ++t) a[t].apply(s);
      return this
    }

    setTime(t) {
      this.time = 0;
      for (let t = 0; t < this._actions.length; t++) this._actions[t].time = 0;
      return this.update(t)
    }

    getRoot() {
      return this._root
    }

    uncacheClip(t) {
      const e = this._actions, n = t.uuid, i = this._actionsByClip, r = i[n];
      if (void 0 !== r) {
        const t = r.knownActions;
        for (let n = 0, i = t.length; n !== i; ++n) {
          const i = t[n];
          this._deactivateAction(i);
          const r = i._cacheIndex, s = e[e.length - 1];
          i._cacheIndex = null, i._byClipCacheIndex = null, s._cacheIndex = r, e[r] = s, e.pop(), this._removeInactiveBindingsForAction(i)
        }
        delete i[n]
      }
    }

    uncacheRoot(t) {
      const e = t.uuid, n = this._actionsByClip;
      for (const t in n) {
        const i = n[t].actionByRoot[e];
        void 0 !== i && (this._deactivateAction(i), this._removeInactiveAction(i))
      }
      const i = this._bindingsByRootAndName[e];
      if (void 0 !== i) for (const t in i) {
        const e = i[t];
        e.restoreOriginalState(), this._removeInactiveBinding(e)
      }
    }

    uncacheAction(t, e) {
      const n = this.existingAction(t, e);
      null !== n && (this._deactivateAction(n), this._removeInactiveAction(n))
    }
  }).prototype._controlInterpolantsResultBuffer = new Float32Array(1);

  class Tl {
    constructor(t) {
      "string" == typeof t && (console.warn("THREE.Uniform: Type parameter is no longer needed."), t = arguments[1]), this.value = t
    }

    clone() {
      return new Tl(void 0 === this.value.clone ? this.value : this.value.clone())
    }
  }

  (class extends ws {
    constructor(t, e, n = 1) {
      super(t, e), this.meshPerAttribute = n
    }

    copy(t) {
      return super.copy(t), this.meshPerAttribute = t.meshPerAttribute, this
    }

    clone(t) {
      const e = super.clone(t);
      return e.meshPerAttribute = this.meshPerAttribute, e
    }

    toJSON(t) {
      const e = super.toJSON(t);
      return e.isInstancedInterleavedBuffer = !0, e.meshPerAttribute = this.meshPerAttribute, e
    }
  }).prototype.isInstancedInterleavedBuffer = !0;

  class Ll {
    constructor(t, e, n = 0, i = 1 / 0) {
      this.ray = new Ft(t, e), this.near = n, this.far = i, this.camera = null, this.layers = new Jt, this.params = {
        Mesh: {},
        Line: {threshold: 1},
        LOD: {},
        Points: {threshold: 1},
        Sprite: {}
      }
    }

    set(t, e) {
      this.ray.set(t, e)
    }

    setFromCamera(t, e) {
      e && e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(t.x, t.y, .5).unproject(e).sub(this.ray.origin).normalize(), this.camera = e) : e && e.isOrthographicCamera ? (this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e.far)).unproject(e), this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld), this.camera = e) : console.error("THREE.Raycaster: Unsupported camera type: " + e.type)
    }

    intersectObject(t, e = !1, n = []) {
      return Cl(t, this, n, e), n.sort(Al), n
    }

    intersectObjects(t, e = !1, n = []) {
      for (let i = 0, r = t.length; i < r; i++) Cl(t[i], this, n, e);
      return n.sort(Al), n
    }
  }

  function Al(t, e) {
    return t.distance - e.distance
  }

  function Cl(t, e, n, i) {
    if (t.layers.test(e.layers) && t.raycast(e, n), !0 === i) {
      const i = t.children;
      for (let t = 0, r = i.length; t < r; t++) Cl(i[t], e, n, !0)
    }
  }

  class Pl {
    constructor(t = 1, e = 0, n = 0) {
      return this.radius = t, this.phi = e, this.theta = n, this
    }

    set(t, e, n) {
      return this.radius = t, this.phi = e, this.theta = n, this
    }

    copy(t) {
      return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this
    }

    makeSafe() {
      const t = 1e-6;
      return this.phi = Math.max(t, Math.min(Math.PI - t, this.phi)), this
    }

    setFromVector3(t) {
      return this.setFromCartesianCoords(t.x, t.y, t.z)
    }

    setFromCartesianCoords(t, e, n) {
      return this.radius = Math.sqrt(t * t + e * e + n * n), 0 === this.radius ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t, n), this.phi = Math.acos(V(e / this.radius, -1, 1))), this
    }

    clone() {
      return (new this.constructor).copy(this)
    }
  }

  const Rl = new J;

  class Il {
    constructor(t = new J(1 / 0, 1 / 0), e = new J(-1 / 0, -1 / 0)) {
      this.min = t, this.max = e
    }

    set(t, e) {
      return this.min.copy(t), this.max.copy(e), this
    }

    setFromPoints(t) {
      this.makeEmpty();
      for (let e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
      return this
    }

    setFromCenterAndSize(t, e) {
      const n = Rl.copy(e).multiplyScalar(.5);
      return this.min.copy(t).sub(n), this.max.copy(t).add(n), this
    }

    clone() {
      return (new this.constructor).copy(this)
    }

    copy(t) {
      return this.min.copy(t.min), this.max.copy(t.max), this
    }

    makeEmpty() {
      return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this
    }

    isEmpty() {
      return this.max.x < this.min.x || this.max.y < this.min.y
    }

    getCenter(t) {
      return this.isEmpty() ? t.set(0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
    }

    getSize(t) {
      return this.isEmpty() ? t.set(0, 0) : t.subVectors(this.max, this.min)
    }

    expandByPoint(t) {
      return this.min.min(t), this.max.max(t), this
    }

    expandByVector(t) {
      return this.min.sub(t), this.max.add(t), this
    }

    expandByScalar(t) {
      return this.min.addScalar(-t), this.max.addScalar(t), this
    }

    containsPoint(t) {
      return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y)
    }

    containsBox(t) {
      return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y
    }

    getParameter(t, e) {
      return e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y))
    }

    intersectsBox(t) {
      return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y)
    }

    clampPoint(t, e) {
      return e.copy(t).clamp(this.min, this.max)
    }

    distanceToPoint(t) {
      return Rl.copy(t).clamp(this.min, this.max).sub(t).length()
    }

    intersect(t) {
      return this.min.max(t.min), this.max.min(t.max), this
    }

    union(t) {
      return this.min.min(t.min), this.max.max(t.max), this
    }

    translate(t) {
      return this.min.add(t), this.max.add(t), this
    }

    equals(t) {
      return t.min.equals(this.min) && t.max.equals(this.max)
    }
  }

  Il.prototype.isBox2 = !0, class extends he {
    constructor(t) {
      super(), this.material = t, this.render = function () {
      }, this.hasPositions = !1, this.hasNormals = !1, this.hasColors = !1, this.hasUvs = !1, this.positionArray = null, this.normalArray = null, this.colorArray = null, this.uvArray = null, this.count = 0
    }
  }.prototype.isImmediateRenderObject = !0;
  const Dl = new lt, Nl = new kt, zl = new kt;

  function Ol(t) {
    const e = [];
    t && t.isBone && e.push(t);
    for (let n = 0; n < t.children.length; n++) e.push.apply(e, Ol(t.children[n]));
    return e
  }

  class Bl extends ca {
    constructor(t = 10, e = 10, n = 4473924, i = 8947848) {
      n = new Pe(n), i = new Pe(i);
      const r = e / 2, s = t / e, a = t / 2, o = [], l = [];
      for (let t = 0, c = 0, h = -a; t <= e; t++, h += s) {
        o.push(-a, 0, h, a, 0, h), o.push(h, 0, -a, h, 0, a);
        const e = t === r ? n : i;
        e.toArray(l, c), c += 3, e.toArray(l, c), c += 3, e.toArray(l, c), c += 3, e.toArray(l, c), c += 3
      }
      const c = new Xe;
      c.setAttribute("position", new Be(o, 3)), c.setAttribute("color", new Be(l, 3)), super(c, new ta({
        vertexColors: !0,
        toneMapped: !1
      })), this.type = "GridHelper"
    }
  }

  const Fl = new ut;

  class kl extends ca {
    constructor(t, e = 16776960) {
      const n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
          i = new Float32Array(24), r = new Xe;
      r.setIndex(new Ne(n, 1)), r.setAttribute("position", new Ne(i, 3)), super(r, new ta({
        color: e,
        toneMapped: !1
      })), this.object = t, this.type = "BoxHelper", this.matrixAutoUpdate = !1, this.update()
    }

    update(t) {
      if (void 0 !== t && console.warn("THREE.BoxHelper: .update() has no longer arguments."), void 0 !== this.object && Fl.setFromObject(this.object), Fl.isEmpty()) return;
      const e = Fl.min, n = Fl.max, i = this.geometry.attributes.position, r = i.array;
      r[0] = n.x, r[1] = n.y, r[2] = n.z, r[3] = e.x, r[4] = n.y, r[5] = n.z, r[6] = e.x, r[7] = e.y, r[8] = n.z, r[9] = n.x, r[10] = e.y, r[11] = n.z, r[12] = n.x, r[13] = n.y, r[14] = e.z, r[15] = e.x, r[16] = n.y, r[17] = e.z, r[18] = e.x, r[19] = e.y, r[20] = e.z, r[21] = n.x, r[22] = e.y, r[23] = e.z, i.needsUpdate = !0, this.geometry.computeBoundingSphere()
    }

    setFromObject(t) {
      return this.object = t, this.update(), this
    }

    copy(t) {
      return ca.prototype.copy.call(this, t), this.object = t.object, this
    }
  }

  const Ul = new Float32Array(1);
  new Int32Array(Ul.buffer), xa.create = function (t, e) {
    return console.log("THREE.Curve.create() has been deprecated"), t.prototype = Object.create(xa.prototype), t.prototype.constructor = t, t.prototype.getPoint = e, t
  }, jo.prototype.fromPoints = function (t) {
    return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."), this.setFromPoints(t)
  }, Bl.prototype.setColors = function () {
    console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")
  }, class extends ca {
    constructor(t) {
      const e = Ol(t), n = new Xe, i = [], r = [], s = new Pe(0, 0, 1), a = new Pe(0, 1, 0);
      for (let t = 0; t < e.length; t++) {
        const n = e[t];
        n.parent && n.parent.isBone && (i.push(0, 0, 0), i.push(0, 0, 0), r.push(s.r, s.g, s.b), r.push(a.r, a.g, a.b))
      }
      n.setAttribute("position", new Be(i, 3)), n.setAttribute("color", new Be(r, 3)), super(n, new ta({
        vertexColors: !0,
        depthTest: !1,
        depthWrite: !1,
        toneMapped: !1,
        transparent: !0
      })), this.type = "SkeletonHelper", this.isSkeletonHelper = !0, this.root = t, this.bones = e, this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1
    }

    updateMatrixWorld(t) {
      const e = this.bones, n = this.geometry, i = n.getAttribute("position");
      zl.copy(this.root.matrixWorld).invert();
      for (let t = 0, n = 0; t < e.length; t++) {
        const r = e[t];
        r.parent && r.parent.isBone && (Nl.multiplyMatrices(zl, r.matrixWorld), Dl.setFromMatrixPosition(Nl), i.setXYZ(n, Dl.x, Dl.y, Dl.z), Nl.multiplyMatrices(zl, r.parent.matrixWorld), Dl.setFromMatrixPosition(Nl), i.setXYZ(n + 1, Dl.x, Dl.y, Dl.z), n += 2)
      }
      n.getAttribute("position").needsUpdate = !0, super.updateMatrixWorld(t)
    }
  }.prototype.update = function () {
    console.error("THREE.SkeletonHelper: update() no longer needs to be called.")
  }, Fo.prototype.extractUrlBase = function (t) {
    return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."), ul.extractUrlBase(t)
  }, Fo.Handlers = {
    add: function () {
      console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")
    }, get: function () {
      console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")
    }
  }, Il.prototype.center = function (t) {
    return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."), this.getCenter(t)
  }, Il.prototype.empty = function () {
    return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."), this.isEmpty()
  }, Il.prototype.isIntersectionBox = function (t) {
    return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t)
  }, Il.prototype.size = function (t) {
    return console.warn("THREE.Box2: .size() has been renamed to .getSize()."), this.getSize(t)
  }, ut.prototype.center = function (t) {
    return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."), this.getCenter(t)
  }, ut.prototype.empty = function () {
    return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty()
  }, ut.prototype.isIntersectionBox = function (t) {
    return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t)
  }, ut.prototype.isIntersectionSphere = function (t) {
    return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(t)
  }, ut.prototype.size = function (t) {
    return console.warn("THREE.Box3: .size() has been renamed to .getSize()."), this.getSize(t)
  }, Pt.prototype.empty = function () {
    return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."), this.isEmpty()
  }, Pn.prototype.setFromMatrix = function (t) {
    return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."), this.setFromProjectionMatrix(t)
  }, Q.prototype.flattenToArrayOffset = function (t, e) {
    return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(t, e)
  }, Q.prototype.multiplyVector3 = function (t) {
    return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), t.applyMatrix3(this)
  }, Q.prototype.multiplyVector3Array = function () {
    console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")
  }, Q.prototype.applyToBufferAttribute = function (t) {
    return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."), t.applyMatrix3(this)
  }, Q.prototype.applyToVector3Array = function () {
    console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")
  }, Q.prototype.getInverse = function (t) {
    return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."), this.copy(t).invert()
  }, kt.prototype.extractPosition = function (t) {
    return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(t)
  }, kt.prototype.flattenToArrayOffset = function (t, e) {
    return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(t, e)
  }, kt.prototype.getPosition = function () {
    return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."), (new lt).setFromMatrixColumn(this, 3)
  }, kt.prototype.setRotationFromQuaternion = function (t) {
    return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(t)
  }, kt.prototype.multiplyToArray = function () {
    console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")
  }, kt.prototype.multiplyVector3 = function (t) {
    return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this)
  }, kt.prototype.multiplyVector4 = function (t) {
    return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this)
  }, kt.prototype.multiplyVector3Array = function () {
    console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")
  }, kt.prototype.rotateAxis = function (t) {
    console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), t.transformDirection(this)
  }, kt.prototype.crossVector = function (t) {
    return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this)
  }, kt.prototype.translate = function () {
    console.error("THREE.Matrix4: .translate() has been removed.")
  }, kt.prototype.rotateX = function () {
    console.error("THREE.Matrix4: .rotateX() has been removed.")
  }, kt.prototype.rotateY = function () {
    console.error("THREE.Matrix4: .rotateY() has been removed.")
  }, kt.prototype.rotateZ = function () {
    console.error("THREE.Matrix4: .rotateZ() has been removed.")
  }, kt.prototype.rotateByAxis = function () {
    console.error("THREE.Matrix4: .rotateByAxis() has been removed.")
  }, kt.prototype.applyToBufferAttribute = function (t) {
    return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."), t.applyMatrix4(this)
  }, kt.prototype.applyToVector3Array = function () {
    console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")
  }, kt.prototype.makeFrustum = function (t, e, n, i, r, s) {
    return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."), this.makePerspective(t, e, i, n, r, s)
  }, kt.prototype.getInverse = function (t) {
    return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."), this.copy(t).invert()
  }, Ln.prototype.isIntersectionLine = function (t) {
    return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(t)
  }, ot.prototype.multiplyVector3 = function (t) {
    return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), t.applyQuaternion(this)
  }, ot.prototype.inverse = function () {
    return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."), this.invert()
  }, Ft.prototype.isIntersectionBox = function (t) {
    return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t)
  }, Ft.prototype.isIntersectionPlane = function (t) {
    return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(t)
  }, Ft.prototype.isIntersectionSphere = function (t) {
    return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(t)
  }, we.prototype.area = function () {
    return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."), this.getArea()
  }, we.prototype.barycoordFromPoint = function (t, e) {
    return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), this.getBarycoord(t, e)
  }, we.prototype.midpoint = function (t) {
    return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."), this.getMidpoint(t)
  }, we.prototypenormal = function (t) {
    return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), this.getNormal(t)
  }, we.prototype.plane = function (t) {
    return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."), this.getPlane(t)
  }, we.barycoordFromPoint = function (t, e, n, i, r) {
    return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), we.getBarycoord(t, e, n, i, r)
  }, we.normal = function (t, e, n, i) {
    return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), we.getNormal(t, e, n, i)
  }, Xo.prototype.extractAllPoints = function (t) {
    return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."), this.extractPoints(t)
  }, Xo.prototype.extrude = function (t) {
    return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."), new uo(this, t)
  }, Xo.prototype.makeGeometry = function (t) {
    return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."), new fo(this, t)
  }, J.prototype.fromAttribute = function (t, e, n) {
    return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, n)
  }, J.prototype.distanceToManhattan = function (t) {
    return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(t)
  }, J.prototype.lengthManhattan = function () {
    return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
  }, lt.prototype.setEulerFromRotationMatrix = function () {
    console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
  }, lt.prototype.setEulerFromQuaternion = function () {
    console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
  }, lt.prototype.getPositionFromMatrix = function (t) {
    return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(t)
  }, lt.prototype.getScaleFromMatrix = function (t) {
    return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(t)
  }, lt.prototype.getColumnFromMatrix = function (t, e) {
    return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(e, t)
  }, lt.prototype.applyProjection = function (t) {
    return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."), this.applyMatrix4(t)
  }, lt.prototype.fromAttribute = function (t, e, n) {
    return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, n)
  }, lt.prototype.distanceToManhattan = function (t) {
    return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(t)
  }, lt.prototype.lengthManhattan = function () {
    return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
  }, rt.prototype.fromAttribute = function (t, e, n) {
    return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, n)
  }, rt.prototype.lengthManhattan = function () {
    return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
  }, he.prototype.getChildByName = function (t) {
    return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(t)
  }, he.prototype.renderDepth = function () {
    console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
  }, he.prototype.translate = function (t, e) {
    return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(e, t)
  }, he.prototype.getWorldRotation = function () {
    console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")
  }, he.prototype.applyMatrix = function (t) {
    return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(t)
  }, Object.defineProperties(he.prototype, {
    eulerOrder: {
      get: function () {
        return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order
      }, set: function (t) {
        console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order = t
      }
    }, useQuaternion: {
      get: function () {
        console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
      }, set: function () {
        console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
      }
    }
  }), un.prototype.setDrawMode = function () {
    console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")
  }, Object.defineProperties(un.prototype, {
    drawMode: {
      get: function () {
        return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."), 0
      }, set: function () {
        console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")
      }
    }
  }), Ws.prototype.initBones = function () {
    console.error("THREE.SkinnedMesh: initBones() has been removed.")
  }, xn.prototype.setLens = function (t, e) {
    console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."), void 0 !== e && (this.filmGauge = e), this.setFocalLength(t)
  }, Object.defineProperties(Yo.prototype, {
    onlyShadow: {
      set: function () {
        console.warn("THREE.Light: .onlyShadow has been removed.")
      }
    }, shadowCameraFov: {
      set: function (t) {
        console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."), this.shadow.camera.fov = t
      }
    }, shadowCameraLeft: {
      set: function (t) {
        console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."), this.shadow.camera.left = t
      }
    }, shadowCameraRight: {
      set: function (t) {
        console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."), this.shadow.camera.right = t
      }
    }, shadowCameraTop: {
      set: function (t) {
        console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."), this.shadow.camera.top = t
      }
    }, shadowCameraBottom: {
      set: function (t) {
        console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."), this.shadow.camera.bottom = t
      }
    }, shadowCameraNear: {
      set: function (t) {
        console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."), this.shadow.camera.near = t
      }
    }, shadowCameraFar: {
      set: function (t) {
        console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."), this.shadow.camera.far = t
      }
    }, shadowCameraVisible: {
      set: function () {
        console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")
      }
    }, shadowBias: {
      set: function (t) {
        console.warn("THREE.Light: .shadowBias is now .shadow.bias."), this.shadow.bias = t
      }
    }, shadowDarkness: {
      set: function () {
        console.warn("THREE.Light: .shadowDarkness has been removed.")
      }
    }, shadowMapWidth: {
      set: function (t) {
        console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."), this.shadow.mapSize.width = t
      }
    }, shadowMapHeight: {
      set: function (t) {
        console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."), this.shadow.mapSize.height = t
      }
    }
  }), Object.defineProperties(Ne.prototype, {
    length: {
      get: function () {
        return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."), this.array.length
      }
    }, dynamic: {
      get: function () {
        return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.usage === z
      }, set: function () {
        console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.setUsage(z)
      }
    }
  }), Ne.prototype.setDynamic = function (t) {
    return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(!0 === t ? z : N), this
  }, Ne.prototype.copyIndicesArray = function () {
    console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")
  }, Ne.prototype.setArray = function () {
    console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")
  }, Xe.prototype.addIndex = function (t) {
    console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(t)
  }, Xe.prototype.addAttribute = function (t, e) {
    return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."), e && e.isBufferAttribute || e && e.isInterleavedBufferAttribute ? "index" === t ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(e), this) : this.setAttribute(t, e) : (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.setAttribute(t, new Ne(arguments[1], arguments[2])))
  }, Xe.prototype.addDrawCall = function (t, e, n) {
    void 0 !== n && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(t, e)
  }, Xe.prototype.clearDrawCalls = function () {
    console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups()
  }, Xe.prototype.computeOffsets = function () {
    console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
  }, Xe.prototype.removeAttribute = function (t) {
    return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."), this.deleteAttribute(t)
  }, Xe.prototype.applyMatrix = function (t) {
    return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(t)
  }, Object.defineProperties(Xe.prototype, {
    drawcalls: {
      get: function () {
        return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups
      }
    }, offsets: {
      get: function () {
        return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups
      }
    }
  }), ws.prototype.setDynamic = function (t) {
    return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(!0 === t ? z : N), this
  }, ws.prototype.setArray = function () {
    console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")
  }, uo.prototype.getArrays = function () {
    console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")
  }, uo.prototype.addShapeList = function () {
    console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")
  }, uo.prototype.addShape = function () {
    console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")
  },_s.prototype.dispose = function () {
    console.error("THREE.Scene: .dispose() has been removed.")
  },Tl.prototype.onUpdate = function () {
    return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."), this
  },Object.defineProperties(Me.prototype, {
    wrapAround: {
      get: function () {
        console.warn("THREE.Material: .wrapAround has been removed.")
      }, set: function () {
        console.warn("THREE.Material: .wrapAround has been removed.")
      }
    }, overdraw: {
      get: function () {
        console.warn("THREE.Material: .overdraw has been removed.")
      }, set: function () {
        console.warn("THREE.Material: .overdraw has been removed.")
      }
    }, wrapRGB: {
      get: function () {
        return console.warn("THREE.Material: .wrapRGB has been removed."), new Pe
      }
    }, shading: {
      get: function () {
        console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.")
      }, set: function (t) {
        console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === t
      }
    }, stencilMask: {
      get: function () {
        return console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask
      }, set: function (t) {
        console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask = t
      }
    }, vertexTangents: {
      get: function () {
        console.warn("THREE." + this.type + ": .vertexTangents has been removed.")
      }, set: function () {
        console.warn("THREE." + this.type + ": .vertexTangents has been removed.")
      }
    }
  }),Object.defineProperties(vn.prototype, {
    derivatives: {
      get: function () {
        return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives
      }, set: function (t) {
        console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives = t
      }
    }
  }),vs.prototype.clearTarget = function (t, e, n, i) {
    console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."), this.setRenderTarget(t), this.clear(e, n, i)
  },vs.prototype.animate = function (t) {
    console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."), this.setAnimationLoop(t)
  },vs.prototype.getCurrentRenderTarget = function () {
    return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."), this.getRenderTarget()
  },vs.prototype.getMaxAnisotropy = function () {
    return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."), this.capabilities.getMaxAnisotropy()
  },vs.prototype.getPrecision = function () {
    return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."), this.capabilities.precision
  },vs.prototype.resetGLState = function () {
    return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."), this.state.reset()
  },vs.prototype.supportsFloatTextures = function () {
    return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), this.extensions.get("OES_texture_float")
  },vs.prototype.supportsHalfFloatTextures = function () {
    return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), this.extensions.get("OES_texture_half_float")
  },vs.prototype.supportsStandardDerivatives = function () {
    return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), this.extensions.get("OES_standard_derivatives")
  },vs.prototype.supportsCompressedTextureS3TC = function () {
    return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), this.extensions.get("WEBGL_compressed_texture_s3tc")
  },vs.prototype.supportsCompressedTexturePVRTC = function () {
    return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), this.extensions.get("WEBGL_compressed_texture_pvrtc")
  },vs.prototype.supportsBlendMinMax = function () {
    return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), this.extensions.get("EXT_blend_minmax")
  },vs.prototype.supportsVertexTextures = function () {
    return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."), this.capabilities.vertexTextures
  },vs.prototype.supportsInstancedArrays = function () {
    return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), this.extensions.get("ANGLE_instanced_arrays")
  },vs.prototype.enableScissorTest = function (t) {
    console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this.setScissorTest(t)
  },vs.prototype.initMaterial = function () {
    console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
  },vs.prototype.addPrePlugin = function () {
    console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
  },vs.prototype.addPostPlugin = function () {
    console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
  },vs.prototype.updateShadowMap = function () {
    console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
  },vs.prototype.setFaceCulling = function () {
    console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")
  },vs.prototype.allocTextureUnit = function () {
    console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")
  },vs.prototype.setTexture = function () {
    console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")
  },vs.prototype.setTexture2D = function () {
    console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")
  },vs.prototype.setTextureCube = function () {
    console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")
  },vs.prototype.getActiveMipMapLevel = function () {
    return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."), this.getActiveMipmapLevel()
  },Object.defineProperties(vs.prototype, {
    shadowMapEnabled: {
      get: function () {
        return this.shadowMap.enabled
      }, set: function (t) {
        console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), this.shadowMap.enabled = t
      }
    }, shadowMapType: {
      get: function () {
        return this.shadowMap.type
      }, set: function (t) {
        console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), this.shadowMap.type = t
      }
    }, shadowMapCullFace: {
      get: function () {
        console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
      }, set: function () {
        console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
      }
    }, context: {
      get: function () {
        return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."), this.getContext()
      }
    }, vr: {
      get: function () {
        return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"), this.xr
      }
    }, gammaInput: {
      get: function () {
        return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."), !1
      }, set: function () {
        console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")
      }
    }, gammaOutput: {
      get: function () {
        return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), !1
      }, set: function (t) {
        console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), this.outputEncoding = !0 === t ? P : C
      }
    }, toneMappingWhitePoint: {
      get: function () {
        return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."), 1
      }, set: function () {
        console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")
      }
    }
  }),Object.defineProperties(os.prototype, {
    cullFace: {
      get: function () {
        console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
      }, set: function () {
        console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
      }
    }, renderReverseSided: {
      get: function () {
        console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
      }, set: function () {
        console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
      }
    }, renderSingleSided: {
      get: function () {
        console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
      }, set: function () {
        console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
      }
    }
  }),Object.defineProperties(st.prototype, {
    wrapS: {
      get: function () {
        return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS
      }, set: function (t) {
        console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS = t
      }
    }, wrapT: {
      get: function () {
        return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT
      }, set: function (t) {
        console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT = t
      }
    }, magFilter: {
      get: function () {
        return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter
      }, set: function (t) {
        console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter = t
      }
    }, minFilter: {
      get: function () {
        return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter
      }, set: function (t) {
        console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter = t
      }
    }, anisotropy: {
      get: function () {
        return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy
      }, set: function (t) {
        console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy = t
      }
    }, offset: {
      get: function () {
        return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset
      }, set: function (t) {
        console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset = t
      }
    }, repeat: {
      get: function () {
        return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat
      }, set: function (t) {
        console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat = t
      }
    }, format: {
      get: function () {
        return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format
      }, set: function (t) {
        console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format = t
      }
    }, type: {
      get: function () {
        return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type
      }, set: function (t) {
        console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type = t
      }
    }, generateMipmaps: {
      get: function () {
        return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps
      }, set: function (t) {
        console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps = t
      }
    }
  }),class extends he {
    constructor(t) {
      super(), this.type = "Audio", this.listener = t, this.context = t.context, this.gain = this.context.createGain(), this.gain.connect(t.getInput()), this.autoplay = !1, this.buffer = null, this.detune = 0, this.loop = !1, this.loopStart = 0, this.loopEnd = 0, this.offset = 0, this.duration = void 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.source = null, this.sourceType = "empty", this._startedAt = 0, this._progress = 0, this._connected = !1, this.filters = []
    }

    getOutput() {
      return this.gain
    }

    setNodeSource(t) {
      return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = t, this.connect(), this
    }

    setMediaElementSource(t) {
      return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(t), this.connect(), this
    }

    setMediaStreamSource(t) {
      return this.hasPlaybackControl = !1, this.sourceType = "mediaStreamNode", this.source = this.context.createMediaStreamSource(t), this.connect(), this
    }

    setBuffer(t) {
      return this.buffer = t, this.sourceType = "buffer", this.autoplay && this.play(), this
    }

    play(t = 0) {
      if (!0 === this.isPlaying) return void console.warn("THREE.Audio: Audio is already playing.");
      if (!1 === this.hasPlaybackControl) return void console.warn("THREE.Audio: this Audio has no playback control.");
      this._startedAt = this.context.currentTime + t;
      const e = this.context.createBufferSource();
      return e.buffer = this.buffer, e.loop = this.loop, e.loopStart = this.loopStart, e.loopEnd = this.loopEnd, e.onended = this.onEnded.bind(this), e.start(this._startedAt, this._progress + this.offset, this.duration), this.isPlaying = !0, this.source = e, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect()
    }

    pause() {
      if (!1 !== this.hasPlaybackControl) return !0 === this.isPlaying && (this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate, !0 === this.loop && (this._progress = this._progress % (this.duration || this.buffer.duration)), this.source.stop(), this.source.onended = null, this.isPlaying = !1), this;
      console.warn("THREE.Audio: this Audio has no playback control.")
    }

    stop() {
      if (!1 !== this.hasPlaybackControl) return this._progress = 0, this.source.stop(), this.source.onended = null, this.isPlaying = !1, this;
      console.warn("THREE.Audio: this Audio has no playback control.")
    }

    connect() {
      if (this.filters.length > 0) {
        this.source.connect(this.filters[0]);
        for (let t = 1, e = this.filters.length; t < e; t++) this.filters[t - 1].connect(this.filters[t]);
        this.filters[this.filters.length - 1].connect(this.getOutput())
      } else this.source.connect(this.getOutput());
      return this._connected = !0, this
    }

    disconnect() {
      if (this.filters.length > 0) {
        this.source.disconnect(this.filters[0]);
        for (let t = 1, e = this.filters.length; t < e; t++) this.filters[t - 1].disconnect(this.filters[t]);
        this.filters[this.filters.length - 1].disconnect(this.getOutput())
      } else this.source.disconnect(this.getOutput());
      return this._connected = !1, this
    }

    getFilters() {
      return this.filters
    }

    setFilters(t) {
      return t || (t = []), !0 === this._connected ? (this.disconnect(), this.filters = t.slice(), this.connect()) : this.filters = t.slice(), this
    }

    setDetune(t) {
      if (this.detune = t, void 0 !== this.source.detune) return !0 === this.isPlaying && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, .01), this
    }

    getDetune() {
      return this.detune
    }

    getFilter() {
      return this.getFilters()[0]
    }

    setFilter(t) {
      return this.setFilters(t ? [t] : [])
    }

    setPlaybackRate(t) {
      if (!1 !== this.hasPlaybackControl) return this.playbackRate = t, !0 === this.isPlaying && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, .01), this;
      console.warn("THREE.Audio: this Audio has no playback control.")
    }

    getPlaybackRate() {
      return this.playbackRate
    }

    onEnded() {
      this.isPlaying = !1
    }

    getLoop() {
      return !1 === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop
    }

    setLoop(t) {
      if (!1 !== this.hasPlaybackControl) return this.loop = t, !0 === this.isPlaying && (this.source.loop = this.loop), this;
      console.warn("THREE.Audio: this Audio has no playback control.")
    }

    setLoopStart(t) {
      return this.loopStart = t, this
    }

    setLoopEnd(t) {
      return this.loopEnd = t, this
    }

    getVolume() {
      return this.gain.gain.value
    }

    setVolume(t) {
      return this.gain.gain.setTargetAtTime(t, this.context.currentTime, .01), this
    }
  }.prototype.load = function (t) {
    console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
    const e = this;
    return (new pl).load(t, (function (t) {
      e.setBuffer(t)
    })), this
  },wn.prototype.updateCubeMap = function (t, e) {
    return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."), this.update(t, e)
  },wn.prototype.clear = function (t, e, n, i) {
    return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."), this.renderTarget.clear(t, e, n, i)
  },tt.crossOrigin = void 0,tt.loadTexture = function (t, e, n, i) {
    console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
    const r = new Vo;
    r.setCrossOrigin(this.crossOrigin);
    const s = r.load(t, n, void 0, i);
    return e && (s.mapping = e), s
  },tt.loadTextureCube = function (t, e, n, i) {
    console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
    const r = new Go;
    r.setCrossOrigin(this.crossOrigin);
    const s = r.load(t, n, void 0, i);
    return e && (s.mapping = e), s
  },tt.loadCompressedTexture = function () {
    console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
  },tt.loadCompressedTextureCube = function () {
    console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
  },"undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {detail: {revision: "131"}})),"undefined" != typeof window && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "131");
  const Hl = {type: "change"}, Gl = {type: "start"}, Vl = {type: "end"};

  class Wl extends B {
    constructor(t, e) {
      super(), void 0 === e && console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'), e === document && console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'), this.object = t, this.domElement = e, this.enabled = !0, this.target = new lt, this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = .05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = {
        LEFT: "ArrowLeft",
        UP: "ArrowUp",
        RIGHT: "ArrowRight",
        BOTTOM: "ArrowDown"
      }, this.mouseButtons = {LEFT: 0, MIDDLE: 1, RIGHT: 2}, this.touches = {
        ONE: 0,
        TWO: 2
      }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function () {
        return a.phi
      }, this.getAzimuthalAngle = function () {
        return a.theta
      }, this.listenToKeyEvents = function (t) {
        t.addEventListener("keydown", U), this._domElementKeyEvents = t
      }, this.saveState = function () {
        n.target0.copy(n.target), n.position0.copy(n.object.position), n.zoom0 = n.object.zoom
      }, this.reset = function () {
        n.target.copy(n.target0), n.object.position.copy(n.position0), n.object.zoom = n.zoom0, n.object.updateProjectionMatrix(), n.dispatchEvent(Hl), n.update(), r = i.NONE
      }, this.update = function () {
        const e = new lt, u = (new ot).setFromUnitVectors(t.up, new lt(0, 1, 0)), d = u.clone().invert(), p = new lt,
            m = new ot, f = 2 * Math.PI;
        return function () {
          const t = n.object.position;
          e.copy(t).sub(n.target), e.applyQuaternion(u), a.setFromVector3(e), n.autoRotate && r === i.NONE && w(2 * Math.PI / 60 / 60 * n.autoRotateSpeed), n.enableDamping ? (a.theta += o.theta * n.dampingFactor, a.phi += o.phi * n.dampingFactor) : (a.theta += o.theta, a.phi += o.phi);
          let g = n.minAzimuthAngle, v = n.maxAzimuthAngle;
          return isFinite(g) && isFinite(v) && (g < -Math.PI ? g += f : g > Math.PI && (g -= f), v < -Math.PI ? v += f : v > Math.PI && (v -= f), a.theta = g <= v ? Math.max(g, Math.min(v, a.theta)) : a.theta > (g + v) / 2 ? Math.max(g, a.theta) : Math.min(v, a.theta)), a.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, a.phi)), a.makeSafe(), a.radius *= l, a.radius = Math.max(n.minDistance, Math.min(n.maxDistance, a.radius)), !0 === n.enableDamping ? n.target.addScaledVector(c, n.dampingFactor) : n.target.add(c), e.setFromSpherical(a), e.applyQuaternion(d), t.copy(n.target).add(e), n.object.lookAt(n.target), !0 === n.enableDamping ? (o.theta *= 1 - n.dampingFactor, o.phi *= 1 - n.dampingFactor, c.multiplyScalar(1 - n.dampingFactor)) : (o.set(0, 0, 0), c.set(0, 0, 0)), l = 1, !!(h || p.distanceToSquared(n.object.position) > s || 8 * (1 - m.dot(n.object.quaternion)) > s) && (n.dispatchEvent(Hl), p.copy(n.object.position), m.copy(n.object.quaternion), h = !1, !0)
        }
      }(), this.dispose = function () {
        n.domElement.removeEventListener("contextmenu", W), n.domElement.removeEventListener("pointerdown", O), n.domElement.removeEventListener("wheel", k), n.domElement.removeEventListener("touchstart", H), n.domElement.removeEventListener("touchend", V), n.domElement.removeEventListener("touchmove", G), n.domElement.ownerDocument.removeEventListener("pointermove", B), n.domElement.ownerDocument.removeEventListener("pointerup", F), null !== n._domElementKeyEvents && n._domElementKeyEvents.removeEventListener("keydown", U)
      };
      const n = this, i = {
        NONE: -1,
        ROTATE: 0,
        DOLLY: 1,
        PAN: 2,
        TOUCH_ROTATE: 3,
        TOUCH_PAN: 4,
        TOUCH_DOLLY_PAN: 5,
        TOUCH_DOLLY_ROTATE: 6
      };
      let r = i.NONE;
      const s = 1e-6, a = new Pl, o = new Pl;
      let l = 1;
      const c = new lt;
      let h = !1;
      const u = new J, d = new J, p = new J, m = new J, f = new J, g = new J, v = new J, y = new J, x = new J;

      function _() {
        return Math.pow(.95, n.zoomSpeed)
      }

      function w(t) {
        o.theta -= t
      }

      function b(t) {
        o.phi -= t
      }

      const M = function () {
        const t = new lt;
        return function (e, n) {
          t.setFromMatrixColumn(n, 0), t.multiplyScalar(-e), c.add(t)
        }
      }(), S = function () {
        const t = new lt;
        return function (e, i) {
          !0 === n.screenSpacePanning ? t.setFromMatrixColumn(i, 1) : (t.setFromMatrixColumn(i, 0), t.crossVectors(n.object.up, t)), t.multiplyScalar(e), c.add(t)
        }
      }(), E = function () {
        const t = new lt;
        return function (e, i) {
          const r = n.domElement;
          if (n.object.isPerspectiveCamera) {
            const s = n.object.position;
            t.copy(s).sub(n.target);
            let a = t.length();
            a *= Math.tan(n.object.fov / 2 * Math.PI / 180), M(2 * e * a / r.clientHeight, n.object.matrix), S(2 * i * a / r.clientHeight, n.object.matrix)
          } else n.object.isOrthographicCamera ? (M(e * (n.object.right - n.object.left) / n.object.zoom / r.clientWidth, n.object.matrix), S(i * (n.object.top - n.object.bottom) / n.object.zoom / r.clientHeight, n.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), n.enablePan = !1)
        }
      }();

      function T(t) {
        n.object.isPerspectiveCamera ? l /= t : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom * t)), n.object.updateProjectionMatrix(), h = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1)
      }

      function L(t) {
        n.object.isPerspectiveCamera ? l *= t : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / t)), n.object.updateProjectionMatrix(), h = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1)
      }

      function A(t) {
        u.set(t.clientX, t.clientY)
      }

      function C(t) {
        m.set(t.clientX, t.clientY)
      }

      function P(t) {
        if (1 == t.touches.length) u.set(t.touches[0].pageX, t.touches[0].pageY); else {
          const e = .5 * (t.touches[0].pageX + t.touches[1].pageX), n = .5 * (t.touches[0].pageY + t.touches[1].pageY);
          u.set(e, n)
        }
      }

      function R(t) {
        if (1 == t.touches.length) m.set(t.touches[0].pageX, t.touches[0].pageY); else {
          const e = .5 * (t.touches[0].pageX + t.touches[1].pageX), n = .5 * (t.touches[0].pageY + t.touches[1].pageY);
          m.set(e, n)
        }
      }

      function I(t) {
        const e = t.touches[0].pageX - t.touches[1].pageX, n = t.touches[0].pageY - t.touches[1].pageY,
            i = Math.sqrt(e * e + n * n);
        v.set(0, i)
      }

      function D(t) {
        if (1 == t.touches.length) d.set(t.touches[0].pageX, t.touches[0].pageY); else {
          const e = .5 * (t.touches[0].pageX + t.touches[1].pageX), n = .5 * (t.touches[0].pageY + t.touches[1].pageY);
          d.set(e, n)
        }
        p.subVectors(d, u).multiplyScalar(n.rotateSpeed);
        const e = n.domElement;
        w(2 * Math.PI * p.x / e.clientHeight), b(2 * Math.PI * p.y / e.clientHeight), u.copy(d)
      }

      function N(t) {
        if (1 == t.touches.length) f.set(t.touches[0].pageX, t.touches[0].pageY); else {
          const e = .5 * (t.touches[0].pageX + t.touches[1].pageX), n = .5 * (t.touches[0].pageY + t.touches[1].pageY);
          f.set(e, n)
        }
        g.subVectors(f, m).multiplyScalar(n.panSpeed), E(g.x, g.y), m.copy(f)
      }

      function z(t) {
        const e = t.touches[0].pageX - t.touches[1].pageX, i = t.touches[0].pageY - t.touches[1].pageY,
            r = Math.sqrt(e * e + i * i);
        y.set(0, r), x.set(0, Math.pow(y.y / v.y, n.zoomSpeed)), T(x.y), v.copy(y)
      }

      function O(t) {
        if (!1 !== n.enabled) switch (t.pointerType) {
          case"mouse":
          case"pen":
            !function (t) {
              let e;
              switch (t.preventDefault(), n.domElement.focus ? n.domElement.focus() : window.focus(), t.button) {
                case 0:
                  e = n.mouseButtons.LEFT;
                  break;
                case 1:
                  e = n.mouseButtons.MIDDLE;
                  break;
                case 2:
                  e = n.mouseButtons.RIGHT;
                  break;
                default:
                  e = -1
              }
              switch (e) {
                case 1:
                  if (!1 === n.enableZoom) return;
                  !function (t) {
                    v.set(t.clientX, t.clientY)
                  }(t), r = i.DOLLY;
                  break;
                case 0:
                  if (t.ctrlKey || t.metaKey || t.shiftKey) {
                    if (!1 === n.enablePan) return;
                    C(t), r = i.PAN
                  } else {
                    if (!1 === n.enableRotate) return;
                    A(t), r = i.ROTATE
                  }
                  break;
                case 2:
                  if (t.ctrlKey || t.metaKey || t.shiftKey) {
                    if (!1 === n.enableRotate) return;
                    A(t), r = i.ROTATE
                  } else {
                    if (!1 === n.enablePan) return;
                    C(t), r = i.PAN
                  }
                  break;
                default:
                  r = i.NONE
              }
              r !== i.NONE && (n.domElement.ownerDocument.addEventListener("pointermove", B), n.domElement.ownerDocument.addEventListener("pointerup", F), n.dispatchEvent(Gl))
            }(t)
        }
      }

      function B(t) {
        if (!1 !== n.enabled) switch (t.pointerType) {
          case"mouse":
          case"pen":
            !function (t) {
              if (!1 !== n.enabled) switch (t.preventDefault(), r) {
                case i.ROTATE:
                  if (!1 === n.enableRotate) return;
                  !function (t) {
                    d.set(t.clientX, t.clientY), p.subVectors(d, u).multiplyScalar(n.rotateSpeed);
                    const e = n.domElement;
                    w(2 * Math.PI * p.x / e.clientHeight), b(2 * Math.PI * p.y / e.clientHeight), u.copy(d), n.update()
                  }(t);
                  break;
                case i.DOLLY:
                  if (!1 === n.enableZoom) return;
                  !function (t) {
                    y.set(t.clientX, t.clientY), x.subVectors(y, v), x.y > 0 ? T(_()) : x.y < 0 && L(_()), v.copy(y), n.update()
                  }(t);
                  break;
                case i.PAN:
                  if (!1 === n.enablePan) return;
                  !function (t) {
                    f.set(t.clientX, t.clientY), g.subVectors(f, m).multiplyScalar(n.panSpeed), E(g.x, g.y), m.copy(f), n.update()
                  }(t)
              }
            }(t)
        }
      }

      function F(t) {
        switch (t.pointerType) {
          case"mouse":
          case"pen":
            n.domElement.ownerDocument.removeEventListener("pointermove", B), n.domElement.ownerDocument.removeEventListener("pointerup", F), !1 !== n.enabled && (n.dispatchEvent(Vl), r = i.NONE)
        }
      }

      function k(t) {
        !1 === n.enabled || !1 === n.enableZoom || r !== i.NONE && r !== i.ROTATE || (t.preventDefault(), n.dispatchEvent(Gl), function (t) {
          t.deltaY < 0 ? L(_()) : t.deltaY > 0 && T(_()), n.update()
        }(t), n.dispatchEvent(Vl))
      }

      function U(t) {
        !1 !== n.enabled && !1 !== n.enablePan && function (t) {
          let e = !1;
          switch (t.code) {
            case n.keys.UP:
              E(0, n.keyPanSpeed), e = !0;
              break;
            case n.keys.BOTTOM:
              E(0, -n.keyPanSpeed), e = !0;
              break;
            case n.keys.LEFT:
              E(n.keyPanSpeed, 0), e = !0;
              break;
            case n.keys.RIGHT:
              E(-n.keyPanSpeed, 0), e = !0
          }
          e && (t.preventDefault(), n.update())
        }(t)
      }

      function H(t) {
        if (!1 !== n.enabled) {
          switch (t.preventDefault(), t.touches.length) {
            case 1:
              switch (n.touches.ONE) {
                case 0:
                  if (!1 === n.enableRotate) return;
                  P(t), r = i.TOUCH_ROTATE;
                  break;
                case 1:
                  if (!1 === n.enablePan) return;
                  R(t), r = i.TOUCH_PAN;
                  break;
                default:
                  r = i.NONE
              }
              break;
            case 2:
              switch (n.touches.TWO) {
                case 2:
                  if (!1 === n.enableZoom && !1 === n.enablePan) return;
                  !function (t) {
                    n.enableZoom && I(t), n.enablePan && R(t)
                  }(t), r = i.TOUCH_DOLLY_PAN;
                  break;
                case 3:
                  if (!1 === n.enableZoom && !1 === n.enableRotate) return;
                  !function (t) {
                    n.enableZoom && I(t), n.enableRotate && P(t)
                  }(t), r = i.TOUCH_DOLLY_ROTATE;
                  break;
                default:
                  r = i.NONE
              }
              break;
            default:
              r = i.NONE
          }
          r !== i.NONE && n.dispatchEvent(Gl)
        }
      }

      function G(t) {
        if (!1 !== n.enabled) switch (t.preventDefault(), r) {
          case i.TOUCH_ROTATE:
            if (!1 === n.enableRotate) return;
            D(t), n.update();
            break;
          case i.TOUCH_PAN:
            if (!1 === n.enablePan) return;
            N(t), n.update();
            break;
          case i.TOUCH_DOLLY_PAN:
            if (!1 === n.enableZoom && !1 === n.enablePan) return;
            !function (t) {
              n.enableZoom && z(t), n.enablePan && N(t)
            }(t), n.update();
            break;
          case i.TOUCH_DOLLY_ROTATE:
            if (!1 === n.enableZoom && !1 === n.enableRotate) return;
            !function (t) {
              n.enableZoom && z(t), n.enableRotate && D(t)
            }(t), n.update();
            break;
          default:
            r = i.NONE
        }
      }

      function V(t) {
        !1 !== n.enabled && (n.dispatchEvent(Vl), r = i.NONE)
      }

      function W(t) {
        !1 !== n.enabled && t.preventDefault()
      }

      n.domElement.addEventListener("contextmenu", W), n.domElement.addEventListener("pointerdown", O), n.domElement.addEventListener("wheel", k, {passive: !1}), n.domElement.addEventListener("touchstart", H, {passive: !1}), n.domElement.addEventListener("touchend", V), n.domElement.addEventListener("touchmove", G, {passive: !1}), this.update()
    }
  }

  var jl = {}, Xl = function (t) {
    return URL.createObjectURL(new Blob([t], {type: "text/javascript"}))
  }, Yl = function (t) {
    return new Worker(t)
  };
  try {
    URL.revokeObjectURL(Xl(""))
  } catch (t) {
    Xl = function (t) {
      return "data:application/javascript;charset=UTF-8," + encodeURI(t)
    }, Yl = function (t) {
      return new Worker(t, {type: "module"})
    }
  }
  var ql = Uint8Array, Zl = Uint16Array, Jl = Uint32Array,
      Ql = new ql([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
      Kl = new ql([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
      $l = new ql([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), tc = function (t, e) {
        for (var n = new Zl(31), i = 0; i < 31; ++i) n[i] = e += 1 << t[i - 1];
        var r = new Jl(n[30]);
        for (i = 1; i < 30; ++i) for (var s = n[i]; s < n[i + 1]; ++s) r[s] = s - n[i] << 5 | i;
        return [n, r]
      }, ec = tc(Ql, 2), nc = ec[0], ic = ec[1];
  nc[28] = 258, ic[258] = 28;
  for (var rc = tc(Kl, 0), sc = rc[0], ac = rc[1], oc = new Zl(32768), lc = 0; lc < 32768; ++lc) {
    var cc = (43690 & lc) >>> 1 | (21845 & lc) << 1;
    cc = (61680 & (cc = (52428 & cc) >>> 2 | (13107 & cc) << 2)) >>> 4 | (3855 & cc) << 4, oc[lc] = ((65280 & cc) >>> 8 | (255 & cc) << 8) >>> 1
  }
  var hc = function (t, e, n) {
    for (var i = t.length, r = 0, s = new Zl(e); r < i; ++r) ++s[t[r] - 1];
    var a, o = new Zl(e);
    for (r = 0; r < e; ++r) o[r] = o[r - 1] + s[r - 1] << 1;
    if (n) {
      a = new Zl(1 << e);
      var l = 15 - e;
      for (r = 0; r < i; ++r) if (t[r]) for (var c = r << 4 | t[r], h = e - t[r], u = o[t[r] - 1]++ << h, d = u | (1 << h) - 1; u <= d; ++u) a[oc[u] >>> l] = c
    } else for (a = new Zl(i), r = 0; r < i; ++r) t[r] && (a[r] = oc[o[t[r] - 1]++] >>> 15 - t[r]);
    return a
  }, uc = new ql(288);
  for (lc = 0; lc < 144; ++lc) uc[lc] = 8;
  for (lc = 144; lc < 256; ++lc) uc[lc] = 9;
  for (lc = 256; lc < 280; ++lc) uc[lc] = 7;
  for (lc = 280; lc < 288; ++lc) uc[lc] = 8;
  var dc = new ql(32);
  for (lc = 0; lc < 32; ++lc) dc[lc] = 5;
  var pc = hc(uc, 9, 0), mc = hc(uc, 9, 1), fc = hc(dc, 5, 0), gc = hc(dc, 5, 1), vc = function (t) {
        for (var e = t[0], n = 1; n < t.length; ++n) t[n] > e && (e = t[n]);
        return e
      }, yc = function (t, e, n) {
        var i = e / 8 | 0;
        return (t[i] | t[i + 1] << 8) >> (7 & e) & n
      }, xc = function (t, e) {
        var n = e / 8 | 0;
        return (t[n] | t[n + 1] << 8 | t[n + 2] << 16) >> (7 & e)
      }, _c = function (t) {
        return (t / 8 | 0) + (7 & t && 1)
      }, wc = function (t, e, n) {
        (null == e || e < 0) && (e = 0), (null == n || n > t.length) && (n = t.length);
        var i = new (t instanceof Zl ? Zl : t instanceof Jl ? Jl : ql)(n - e);
        return i.set(t.subarray(e, n)), i
      }, bc = function (t, e, n) {
        var i = t.length;
        if (!i || n && !n.l && i < 5) return e || new ql(0);
        var r = !e || n, s = !n || n.i;
        n || (n = {}), e || (e = new ql(3 * i));
        var a = function (t) {
          var n = e.length;
          if (t > n) {
            var i = new ql(Math.max(2 * n, t));
            i.set(e), e = i
          }
        }, o = n.f || 0, l = n.p || 0, c = n.b || 0, h = n.l, u = n.d, d = n.m, p = n.n, m = 8 * i;
        do {
          if (!h) {
            n.f = o = yc(t, l, 1);
            var f = yc(t, l + 1, 3);
            if (l += 3, !f) {
              var g = t[(L = _c(l) + 4) - 4] | t[L - 3] << 8, v = L + g;
              if (v > i) {
                if (s) throw"unexpected EOF";
                break
              }
              r && a(c + g), e.set(t.subarray(L, v), c), n.b = c += g, n.p = l = 8 * v;
              continue
            }
            if (1 == f) h = mc, u = gc, d = 9, p = 5; else {
              if (2 != f) throw"invalid block type";
              var y = yc(t, l, 31) + 257, x = yc(t, l + 10, 15) + 4, _ = y + yc(t, l + 5, 31) + 1;
              l += 14;
              for (var w = new ql(_), b = new ql(19), M = 0; M < x; ++M) b[$l[M]] = yc(t, l + 3 * M, 7);
              l += 3 * x;
              var S = vc(b), E = (1 << S) - 1, T = hc(b, S, 1);
              for (M = 0; M < _;) {
                var L, A = T[yc(t, l, E)];
                if (l += 15 & A, (L = A >>> 4) < 16) w[M++] = L; else {
                  var C = 0, P = 0;
                  for (16 == L ? (P = 3 + yc(t, l, 3), l += 2, C = w[M - 1]) : 17 == L ? (P = 3 + yc(t, l, 7), l += 3) : 18 == L && (P = 11 + yc(t, l, 127), l += 7); P--;) w[M++] = C
                }
              }
              var R = w.subarray(0, y), I = w.subarray(y);
              d = vc(R), p = vc(I), h = hc(R, d, 1), u = hc(I, p, 1)
            }
            if (l > m) {
              if (s) throw"unexpected EOF";
              break
            }
          }
          r && a(c + 131072);
          for (var D = (1 << d) - 1, N = (1 << p) - 1, z = l; ; z = l) {
            var O = (C = h[xc(t, l) & D]) >>> 4;
            if ((l += 15 & C) > m) {
              if (s) throw"unexpected EOF";
              break
            }
            if (!C) throw"invalid length/literal";
            if (O < 256) e[c++] = O; else {
              if (256 == O) {
                z = l, h = null;
                break
              }
              var B = O - 254;
              if (O > 264) {
                var F = Ql[M = O - 257];
                B = yc(t, l, (1 << F) - 1) + nc[M], l += F
              }
              var k = u[xc(t, l) & N], U = k >>> 4;
              if (!k) throw"invalid distance";
              if (l += 15 & k, I = sc[U], U > 3 && (F = Kl[U], I += xc(t, l) & (1 << F) - 1, l += F), l > m) {
                if (s) throw"unexpected EOF";
                break
              }
              r && a(c + 131072);
              for (var H = c + B; c < H; c += 4) e[c] = e[c - I], e[c + 1] = e[c + 1 - I], e[c + 2] = e[c + 2 - I], e[c + 3] = e[c + 3 - I];
              c = H
            }
          }
          n.l = h, n.p = z, n.b = c, h && (o = 1, n.m = d, n.d = u, n.n = p)
        } while (!o);
        return c == e.length ? e : wc(e, 0, c)
      }, Mc = function (t, e, n) {
        n <<= 7 & e;
        var i = e / 8 | 0;
        t[i] |= n, t[i + 1] |= n >>> 8
      }, Sc = function (t, e, n) {
        n <<= 7 & e;
        var i = e / 8 | 0;
        t[i] |= n, t[i + 1] |= n >>> 8, t[i + 2] |= n >>> 16
      }, Ec = function (t, e) {
        for (var n = [], i = 0; i < t.length; ++i) t[i] && n.push({s: i, f: t[i]});
        var r = n.length, s = n.slice();
        if (!r) return [Ic, 0];
        if (1 == r) {
          var a = new ql(n[0].s + 1);
          return a[n[0].s] = 1, [a, 1]
        }
        n.sort((function (t, e) {
          return t.f - e.f
        })), n.push({s: -1, f: 25001});
        var o = n[0], l = n[1], c = 0, h = 1, u = 2;
        for (n[0] = {
          s: -1,
          f: o.f + l.f,
          l: o,
          r: l
        }; h != r - 1;) o = n[n[c].f < n[u].f ? c++ : u++], l = n[c != h && n[c].f < n[u].f ? c++ : u++], n[h++] = {
          s: -1,
          f: o.f + l.f,
          l: o,
          r: l
        };
        var d = s[0].s;
        for (i = 1; i < r; ++i) s[i].s > d && (d = s[i].s);
        var p = new Zl(d + 1), m = Tc(n[h - 1], p, 0);
        if (m > e) {
          i = 0;
          var f = 0, g = m - e, v = 1 << g;
          for (s.sort((function (t, e) {
            return p[e.s] - p[t.s] || t.f - e.f
          })); i < r; ++i) {
            var y = s[i].s;
            if (!(p[y] > e)) break;
            f += v - (1 << m - p[y]), p[y] = e
          }
          for (f >>>= g; f > 0;) {
            var x = s[i].s;
            p[x] < e ? f -= 1 << e - p[x]++ - 1 : ++i
          }
          for (; i >= 0 && f; --i) {
            var _ = s[i].s;
            p[_] == e && (--p[_], ++f)
          }
          m = e
        }
        return [new ql(p), m]
      }, Tc = function (t, e, n) {
        return -1 == t.s ? Math.max(Tc(t.l, e, n + 1), Tc(t.r, e, n + 1)) : e[t.s] = n
      }, Lc = function (t) {
        for (var e = t.length; e && !t[--e];) ;
        for (var n = new Zl(++e), i = 0, r = t[0], s = 1, a = function (t) {
          n[i++] = t
        }, o = 1; o <= e; ++o) if (t[o] == r && o != e) ++s; else {
          if (!r && s > 2) {
            for (; s > 138; s -= 138) a(32754);
            s > 2 && (a(s > 10 ? s - 11 << 5 | 28690 : s - 3 << 5 | 12305), s = 0)
          } else if (s > 3) {
            for (a(r), --s; s > 6; s -= 6) a(8304);
            s > 2 && (a(s - 3 << 5 | 8208), s = 0)
          }
          for (; s--;) a(r);
          s = 1, r = t[o]
        }
        return [n.subarray(0, i), e]
      }, Ac = function (t, e) {
        for (var n = 0, i = 0; i < e.length; ++i) n += t[i] * e[i];
        return n
      }, Cc = function (t, e, n) {
        var i = n.length, r = _c(e + 2);
        t[r] = 255 & i, t[r + 1] = i >>> 8, t[r + 2] = 255 ^ t[r], t[r + 3] = 255 ^ t[r + 1];
        for (var s = 0; s < i; ++s) t[r + s + 4] = n[s];
        return 8 * (r + 4 + i)
      }, Pc = function (t, e, n, i, r, s, a, o, l, c, h) {
        Mc(e, h++, n), ++r[256];
        for (var u = Ec(r, 15), d = u[0], p = u[1], m = Ec(s, 15), f = m[0], g = m[1], v = Lc(d), y = v[0], x = v[1], _ = Lc(f), w = _[0], b = _[1], M = new Zl(19), S = 0; S < y.length; ++S) M[31 & y[S]]++;
        for (S = 0; S < w.length; ++S) M[31 & w[S]]++;
        for (var E = Ec(M, 7), T = E[0], L = E[1], A = 19; A > 4 && !T[$l[A - 1]]; --A) ;
        var C, P, R, I, D = c + 5 << 3, N = Ac(r, uc) + Ac(s, dc) + a,
            z = Ac(r, d) + Ac(s, f) + a + 14 + 3 * A + Ac(M, T) + (2 * M[16] + 3 * M[17] + 7 * M[18]);
        if (D <= N && D <= z) return Cc(e, h, t.subarray(l, l + c));
        if (Mc(e, h, 1 + (z < N)), h += 2, z < N) {
          C = hc(d, p, 0), P = d, R = hc(f, g, 0), I = f;
          var O = hc(T, L, 0);
          for (Mc(e, h, x - 257), Mc(e, h + 5, b - 1), Mc(e, h + 10, A - 4), h += 14, S = 0; S < A; ++S) Mc(e, h + 3 * S, T[$l[S]]);
          h += 3 * A;
          for (var B = [y, w], F = 0; F < 2; ++F) {
            var k = B[F];
            for (S = 0; S < k.length; ++S) {
              var U = 31 & k[S];
              Mc(e, h, O[U]), h += T[U], U > 15 && (Mc(e, h, k[S] >>> 5 & 127), h += k[S] >>> 12)
            }
          }
        } else C = pc, P = uc, R = fc, I = dc;
        for (S = 0; S < o; ++S) if (i[S] > 255) {
          U = i[S] >>> 18 & 31, Sc(e, h, C[U + 257]), h += P[U + 257], U > 7 && (Mc(e, h, i[S] >>> 23 & 31), h += Ql[U]);
          var H = 31 & i[S];
          Sc(e, h, R[H]), h += I[H], H > 3 && (Sc(e, h, i[S] >>> 5 & 8191), h += Kl[H])
        } else Sc(e, h, C[i[S]]), h += P[i[S]];
        return Sc(e, h, C[256]), h + P[256]
      }, Rc = new Jl([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]), Ic = new ql(0),
      Dc = function (t, e, n, i, r, s) {
        var a = t.length, o = new ql(i + a + 5 * (1 + Math.ceil(a / 7e3)) + r), l = o.subarray(i, o.length - r), c = 0;
        if (!e || a < 8) for (var h = 0; h <= a; h += 65535) {
          var u = h + 65535;
          u < a ? c = Cc(l, c, t.subarray(h, u)) : (l[h] = s, c = Cc(l, c, t.subarray(h, a)))
        } else {
          for (var d = Rc[e - 1], p = d >>> 13, m = 8191 & d, f = (1 << n) - 1, g = new Zl(32768), v = new Zl(f + 1), y = Math.ceil(n / 3), x = 2 * y, _ = function (e) {
            return (t[e] ^ t[e + 1] << y ^ t[e + 2] << x) & f
          }, w = new Jl(25e3), b = new Zl(288), M = new Zl(32), S = 0, E = 0, T = (h = 0, 0), L = 0, A = 0; h < a; ++h) {
            var C = _(h), P = 32767 & h, R = v[C];
            if (g[P] = R, v[C] = P, L <= h) {
              var I = a - h;
              if ((S > 7e3 || T > 24576) && I > 423) {
                c = Pc(t, l, 0, w, b, M, E, T, A, h - A, c), T = S = E = 0, A = h;
                for (var D = 0; D < 286; ++D) b[D] = 0;
                for (D = 0; D < 30; ++D) M[D] = 0
              }
              var N = 2, z = 0, O = m, B = P - R & 32767;
              if (I > 2 && C == _(h - B)) for (var F = Math.min(p, I) - 1, k = Math.min(32767, h), U = Math.min(258, I); B <= k && --O && P != R;) {
                if (t[h + N] == t[h + N - B]) {
                  for (var H = 0; H < U && t[h + H] == t[h + H - B]; ++H) ;
                  if (H > N) {
                    if (N = H, z = B, H > F) break;
                    var G = Math.min(B, H - 2), V = 0;
                    for (D = 0; D < G; ++D) {
                      var W = h - B + D + 32768 & 32767, j = W - g[W] + 32768 & 32767;
                      j > V && (V = j, R = W)
                    }
                  }
                }
                B += (P = R) - (R = g[P]) + 32768 & 32767
              }
              if (z) {
                w[T++] = 268435456 | ic[N] << 18 | ac[z];
                var X = 31 & ic[N], Y = 31 & ac[z];
                E += Ql[X] + Kl[Y], ++b[257 + X], ++M[Y], L = h + N, ++S
              } else w[T++] = t[h], ++b[t[h]]
            }
          }
          c = Pc(t, l, s, w, b, M, E, T, A, h - A, c), !s && 7 & c && (c = Cc(l, c + 1, Ic))
        }
        return wc(o, 0, i + _c(c) + r)
      }, Nc = function () {
        for (var t = new Jl(256), e = 0; e < 256; ++e) {
          for (var n = e, i = 9; --i;) n = (1 & n && 3988292384) ^ n >>> 1;
          t[e] = n
        }
        return t
      }(), zc = function () {
        var t = -1;
        return {
          p: function (e) {
            for (var n = t, i = 0; i < e.length; ++i) n = Nc[255 & n ^ e[i]] ^ n >>> 8;
            t = n
          }, d: function () {
            return ~t
          }
        }
      }, Oc = function () {
        var t = 1, e = 0;
        return {
          p: function (n) {
            for (var i = t, r = e, s = n.length, a = 0; a != s;) {
              for (var o = Math.min(a + 2655, s); a < o; ++a) r += i += n[a];
              i = (65535 & i) + 15 * (i >> 16), r = (65535 & r) + 15 * (r >> 16)
            }
            t = i, e = r
          }, d: function () {
            return (255 & (t %= 65521)) << 24 | t >>> 8 << 16 | (255 & (e %= 65521)) << 8 | e >>> 8
          }
        }
      }, Bc = function (t, e, n, i, r) {
        return Dc(t, null == e.level ? 6 : e.level, null == e.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(t.length)))) : 12 + e.mem, n, i, !r)
      }, Fc = function (t, e) {
        var n = {};
        for (var i in t) n[i] = t[i];
        for (var i in e) n[i] = e[i];
        return n
      }, kc = function (t, e, n) {
        for (var i = t(), r = t.toString(), s = r.slice(r.indexOf("[") + 1, r.lastIndexOf("]")).replace(/ /g, "").split(","), a = 0; a < i.length; ++a) {
          var o = i[a], l = s[a];
          if ("function" == typeof o) {
            e += ";" + l + "=";
            var c = o.toString();
            if (o.prototype) if (-1 != c.indexOf("[native code]")) {
              var h = c.indexOf(" ", 8) + 1;
              e += c.slice(h, c.indexOf("(", h))
            } else for (var u in e += c, o.prototype) e += ";" + l + ".prototype." + u + "=" + o.prototype[u].toString(); else e += c
          } else n[l] = o
        }
        return [e, n]
      }, Uc = [], Hc = function (t, e, n, i) {
        var r;
        if (!Uc[n]) {
          for (var s = "", a = {}, o = t.length - 1, l = 0; l < o; ++l) s = (r = kc(t[l], s, a))[0], a = r[1];
          Uc[n] = kc(t[o], s, a)
        }
        var c = Fc({}, Uc[n][1]);
        return function (t, e, n, i, r) {
          var s = Yl(jl[e] || (jl[e] = Xl(t)));
          return s.onerror = function (t) {
            return r(t.error, null)
          }, s.onmessage = function (t) {
            return r(null, t.data)
          }, s.postMessage(n, i), s
        }(Uc[n][0] + ";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=" + e.toString() + "}", n, c, function (t) {
          var e = [];
          for (var n in t) (t[n] instanceof ql || t[n] instanceof Zl || t[n] instanceof Jl) && e.push((t[n] = new t[n].constructor(t[n])).buffer);
          return e
        }(c), i)
      }, Gc = function () {
        return [ql, Zl, Jl, Ql, Kl, $l, nc, sc, mc, gc, oc, hc, vc, yc, xc, _c, wc, bc, vh, qc, Zc]
      }, Vc = function () {
        return [ql, Zl, Jl, Ql, Kl, $l, ic, ac, pc, uc, fc, dc, oc, Rc, Ic, hc, Mc, Sc, Ec, Tc, Lc, Ac, Cc, Pc, _c, wc, Dc, Bc, ph, qc]
      }, Wc = function () {
        return [ih, ah, nh, zc, Nc]
      }, jc = function () {
        return [rh, sh]
      }, Xc = function () {
        return [oh, nh, Oc]
      }, Yc = function () {
        return [lh]
      }, qc = function (t) {
        return postMessage(t, [t.buffer])
      }, Zc = function (t) {
        return t && t.size && new ql(t.size)
      }, Jc = function (t, e, n, i, r, s) {
        var a = Hc(n, i, r, (function (t, e) {
          a.terminate(), s(t, e)
        }));
        return a.postMessage([t, e], e.consume ? [t.buffer] : []), function () {
          a.terminate()
        }
      }, Qc = function (t) {
        return t.ondata = function (t, e) {
          return postMessage([t, e], [t.buffer])
        }, function (e) {
          return t.push(e.data[0], e.data[1])
        }
      }, Kc = function (t, e, n, i, r) {
        var s, a = Hc(t, i, r, (function (t, n) {
          t ? (a.terminate(), e.ondata.call(e, t)) : (n[1] && a.terminate(), e.ondata.call(e, t, n[0], n[1]))
        }));
        a.postMessage(n), e.push = function (t, n) {
          if (s) throw"stream finished";
          if (!e.ondata) throw"no stream handler";
          a.postMessage([t, s = n], [t.buffer])
        }, e.terminate = function () {
          a.terminate()
        }
      }, $c = function (t, e) {
        return t[e] | t[e + 1] << 8
      }, th = function (t, e) {
        return (t[e] | t[e + 1] << 8 | t[e + 2] << 16 | t[e + 3] << 24) >>> 0
      }, eh = function (t, e) {
        return th(t, e) + 4294967296 * th(t, e + 4)
      }, nh = function (t, e, n) {
        for (; n; ++e) t[e] = n, n >>>= 8
      }, ih = function (t, e) {
        var n = e.filename;
        if (t[0] = 31, t[1] = 139, t[2] = 8, t[8] = e.level < 2 ? 4 : 9 == e.level ? 2 : 0, t[9] = 3, 0 != e.mtime && nh(t, 4, Math.floor(new Date(e.mtime || Date.now()) / 1e3)), n) {
          t[3] = 8;
          for (var i = 0; i <= n.length; ++i) t[i + 10] = n.charCodeAt(i)
        }
      }, rh = function (t) {
        if (31 != t[0] || 139 != t[1] || 8 != t[2]) throw"invalid gzip data";
        var e = t[3], n = 10;
        4 & e && (n += t[10] | 2 + (t[11] << 8));
        for (var i = (e >> 3 & 1) + (e >> 4 & 1); i > 0; i -= !t[n++]) ;
        return n + (2 & e)
      }, sh = function (t) {
        var e = t.length;
        return (t[e - 4] | t[e - 3] << 8 | t[e - 2] << 16 | t[e - 1] << 24) >>> 0
      }, ah = function (t) {
        return 10 + (t.filename && t.filename.length + 1 || 0)
      }, oh = function (t, e) {
        var n = e.level, i = 0 == n ? 0 : n < 6 ? 1 : 9 == n ? 3 : 2;
        t[0] = 120, t[1] = i << 6 | (i ? 32 - 2 * i : 1)
      }, lh = function (t) {
        if (8 != (15 & t[0]) || t[0] >>> 4 > 7 || (t[0] << 8 | t[1]) % 31) throw"invalid zlib data";
        if (32 & t[1]) throw"invalid zlib data: preset dictionaries not supported"
      };

  function ch(t, e) {
    return e || "function" != typeof t || (e = t, t = {}), this.ondata = e, t
  }

  var hh = function () {
    function t(t, e) {
      e || "function" != typeof t || (e = t, t = {}), this.ondata = e, this.o = t || {}
    }

    return t.prototype.p = function (t, e) {
      this.ondata(Bc(t, this.o, 0, 0, !e), e)
    }, t.prototype.push = function (t, e) {
      if (this.d) throw"stream finished";
      if (!this.ondata) throw"no stream handler";
      this.d = e, this.p(t, e || !1)
    }, t
  }(), uh = function () {
    return function (t, e) {
      Kc([Vc, function () {
        return [Qc, hh]
      }], this, ch.call(this, t, e), (function (t) {
        var e = new hh(t.data);
        onmessage = Qc(e)
      }), 6)
    }
  }();

  function dh(t, e, n) {
    if (n || (n = e, e = {}), "function" != typeof n) throw"no callback";
    return Jc(t, e, [Vc], (function (t) {
      return qc(ph(t.data[0], t.data[1]))
    }), 0, n)
  }

  function ph(t, e) {
    return Bc(t, e || {}, 0, 0)
  }

  var mh = function () {
    function t(t) {
      this.s = {}, this.p = new ql(0), this.ondata = t
    }

    return t.prototype.e = function (t) {
      if (this.d) throw"stream finished";
      if (!this.ondata) throw"no stream handler";
      var e = this.p.length, n = new ql(e + t.length);
      n.set(this.p), n.set(t, e), this.p = n
    }, t.prototype.c = function (t) {
      this.d = this.s.i = t || !1;
      var e = this.s.b, n = bc(this.p, this.o, this.s);
      this.ondata(wc(n, e, this.s.b), this.d), this.o = wc(n, this.s.b - 32768), this.s.b = this.o.length, this.p = wc(this.p, this.s.p / 8 | 0), this.s.p &= 7
    }, t.prototype.push = function (t, e) {
      this.e(t), this.c(e)
    }, t
  }(), fh = function () {
    return function (t) {
      this.ondata = t, Kc([Gc, function () {
        return [Qc, mh]
      }], this, 0, (function () {
        var t = new mh;
        onmessage = Qc(t)
      }), 7)
    }
  }();

  function gh(t, e, n) {
    if (n || (n = e, e = {}), "function" != typeof n) throw"no callback";
    return Jc(t, e, [Gc], (function (t) {
      return qc(vh(t.data[0], Zc(t.data[1])))
    }), 1, n)
  }

  function vh(t, e) {
    return bc(t, e)
  }

  var yh = function () {
    function t(t, e) {
      this.c = zc(), this.l = 0, this.v = 1, hh.call(this, t, e)
    }

    return t.prototype.push = function (t, e) {
      hh.prototype.push.call(this, t, e)
    }, t.prototype.p = function (t, e) {
      this.c.p(t), this.l += t.length;
      var n = Bc(t, this.o, this.v && ah(this.o), e && 8, !e);
      this.v && (ih(n, this.o), this.v = 0), e && (nh(n, n.length - 8, this.c.d()), nh(n, n.length - 4, this.l)), this.ondata(n, e)
    }, t
  }(), xh = function () {
    return function (t, e) {
      Kc([Vc, Wc, function () {
        return [Qc, hh, yh]
      }], this, ch.call(this, t, e), (function (t) {
        var e = new yh(t.data);
        onmessage = Qc(e)
      }), 8)
    }
  }();

  function _h(t, e, n) {
    if (n || (n = e, e = {}), "function" != typeof n) throw"no callback";
    return Jc(t, e, [Vc, Wc, function () {
      return [wh]
    }], (function (t) {
      return qc(wh(t.data[0], t.data[1]))
    }), 2, n)
  }

  function wh(t, e) {
    e || (e = {});
    var n = zc(), i = t.length;
    n.p(t);
    var r = Bc(t, e, ah(e), 8), s = r.length;
    return ih(r, e), nh(r, s - 8, n.d()), nh(r, s - 4, i), r
  }

  var bh = function () {
    function t(t) {
      this.v = 1, mh.call(this, t)
    }

    return t.prototype.push = function (t, e) {
      if (mh.prototype.e.call(this, t), this.v) {
        var n = this.p.length > 3 ? rh(this.p) : 4;
        if (n >= this.p.length && !e) return;
        this.p = this.p.subarray(n), this.v = 0
      }
      if (e) {
        if (this.p.length < 8) throw"invalid gzip stream";
        this.p = this.p.subarray(0, -8)
      }
      mh.prototype.c.call(this, e)
    }, t
  }(), Mh = function () {
    return function (t) {
      this.ondata = t, Kc([Gc, jc, function () {
        return [Qc, mh, bh]
      }], this, 0, (function () {
        var t = new bh;
        onmessage = Qc(t)
      }), 9)
    }
  }();

  function Sh(t, e, n) {
    if (n || (n = e, e = {}), "function" != typeof n) throw"no callback";
    return Jc(t, e, [Gc, jc, function () {
      return [Eh]
    }], (function (t) {
      return qc(Eh(t.data[0]))
    }), 3, n)
  }

  function Eh(t, e) {
    return bc(t.subarray(rh(t), -8), e || new ql(sh(t)))
  }

  var Th = function () {
    function t(t, e) {
      this.c = Oc(), this.v = 1, hh.call(this, t, e)
    }

    return t.prototype.push = function (t, e) {
      hh.prototype.push.call(this, t, e)
    }, t.prototype.p = function (t, e) {
      this.c.p(t);
      var n = Bc(t, this.o, this.v && 2, e && 4, !e);
      this.v && (oh(n, this.o), this.v = 0), e && nh(n, n.length - 4, this.c.d()), this.ondata(n, e)
    }, t
  }(), Lh = function () {
    return function (t, e) {
      Kc([Vc, Xc, function () {
        return [Qc, hh, Th]
      }], this, ch.call(this, t, e), (function (t) {
        var e = new Th(t.data);
        onmessage = Qc(e)
      }), 10)
    }
  }();

  function Ah(t, e, n) {
    if (n || (n = e, e = {}), "function" != typeof n) throw"no callback";
    return Jc(t, e, [Vc, Xc, function () {
      return [Ch]
    }], (function (t) {
      return qc(Ch(t.data[0], t.data[1]))
    }), 4, n)
  }

  function Ch(t, e) {
    e || (e = {});
    var n = Oc();
    n.p(t);
    var i = Bc(t, e, 2, 4);
    return oh(i, e), nh(i, i.length - 4, n.d()), i
  }

  var Ph = function () {
    function t(t) {
      this.v = 1, mh.call(this, t)
    }

    return t.prototype.push = function (t, e) {
      if (mh.prototype.e.call(this, t), this.v) {
        if (this.p.length < 2 && !e) return;
        this.p = this.p.subarray(2), this.v = 0
      }
      if (e) {
        if (this.p.length < 4) throw"invalid zlib stream";
        this.p = this.p.subarray(0, -4)
      }
      mh.prototype.c.call(this, e)
    }, t
  }(), Rh = function () {
    return function (t) {
      this.ondata = t, Kc([Gc, Yc, function () {
        return [Qc, mh, Ph]
      }], this, 0, (function () {
        var t = new Ph;
        onmessage = Qc(t)
      }), 11)
    }
  }();

  function Ih(t, e, n) {
    if (n || (n = e, e = {}), "function" != typeof n) throw"no callback";
    return Jc(t, e, [Gc, Yc, function () {
      return [Dh]
    }], (function (t) {
      return qc(Dh(t.data[0], Zc(t.data[1])))
    }), 5, n)
  }

  function Dh(t, e) {
    return bc((lh(t), t.subarray(2, -4)), e)
  }

  var Nh = function () {
    function t(t) {
      this.G = bh, this.I = mh, this.Z = Ph, this.ondata = t
    }

    return t.prototype.push = function (t, e) {
      if (!this.ondata) throw"no stream handler";
      if (this.s) this.s.push(t, e); else {
        if (this.p && this.p.length) {
          var n = new ql(this.p.length + t.length);
          n.set(this.p), n.set(t, this.p.length)
        } else this.p = t;
        if (this.p.length > 2) {
          var i = this, r = function () {
            i.ondata.apply(i, arguments)
          };
          this.s = 31 == this.p[0] && 139 == this.p[1] && 8 == this.p[2] ? new this.G(r) : 8 != (15 & this.p[0]) || this.p[0] >> 4 > 7 || (this.p[0] << 8 | this.p[1]) % 31 ? new this.I(r) : new this.Z(r), this.s.push(this.p, e), this.p = null
        }
      }
    }, t
  }(), zh = function () {
    function t(t) {
      this.G = Mh, this.I = fh, this.Z = Rh, this.ondata = t
    }

    return t.prototype.push = function (t, e) {
      Nh.prototype.push.call(this, t, e)
    }, t
  }();

  function Oh(t, e, n) {
    if (n || (n = e, e = {}), "function" != typeof n) throw"no callback";
    return 31 == t[0] && 139 == t[1] && 8 == t[2] ? Sh(t, e, n) : 8 != (15 & t[0]) || t[0] >> 4 > 7 || (t[0] << 8 | t[1]) % 31 ? gh(t, e, n) : Ih(t, e, n)
  }

  function Bh(t, e) {
    return 31 == t[0] && 139 == t[1] && 8 == t[2] ? Eh(t, e) : 8 != (15 & t[0]) || t[0] >> 4 > 7 || (t[0] << 8 | t[1]) % 31 ? vh(t, e) : Dh(t, e)
  }

  var Fh = function (t, e, n, i) {
        for (var r in t) {
          var s = t[r], a = e + r;
          s instanceof ql ? n[a] = [s, i] : Array.isArray(s) ? n[a] = [s[0], Fc(i, s[1])] : Fh(s, a + "/", n, i)
        }
      }, kh = "undefined" != typeof TextEncoder && new TextEncoder,
      Uh = "undefined" != typeof TextDecoder && new TextDecoder, Hh = 0;
  try {
    Uh.decode(Ic, {stream: !0}), Hh = 1
  } catch (t) {
  }
  var Gh = function (t) {
    for (var e = "", n = 0; ;) {
      var i = t[n++], r = (i > 127) + (i > 223) + (i > 239);
      if (n + r > t.length) return [e, wc(t, n - 1)];
      r ? 3 == r ? (i = ((15 & i) << 18 | (63 & t[n++]) << 12 | (63 & t[n++]) << 6 | 63 & t[n++]) - 65536, e += String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i)) : e += 1 & r ? String.fromCharCode((31 & i) << 6 | 63 & t[n++]) : String.fromCharCode((15 & i) << 12 | (63 & t[n++]) << 6 | 63 & t[n++]) : e += String.fromCharCode(i)
    }
  }, Vh = function () {
    function t(t) {
      this.ondata = t, Hh ? this.t = new TextDecoder : this.p = Ic
    }

    return t.prototype.push = function (t, e) {
      if (!this.ondata) throw"no callback";
      if (e = !!e, this.t) {
        if (this.ondata(this.t.decode(t, {stream: !0}), e), e) {
          if (this.t.decode().length) throw"invalid utf-8 data";
          this.t = null
        }
      } else {
        if (!this.p) throw"stream finished";
        var n = new ql(this.p.length + t.length);
        n.set(this.p), n.set(t, this.p.length);
        var i = Gh(n), r = i[0], s = i[1];
        if (e) {
          if (s.length) throw"invalid utf-8 data";
          this.p = null
        } else this.p = s;
        this.ondata(r, e)
      }
    }, t
  }(), Wh = function () {
    function t(t) {
      this.ondata = t
    }

    return t.prototype.push = function (t, e) {
      if (!this.ondata) throw"no callback";
      if (this.d) throw"stream finished";
      this.ondata(jh(t), this.d = e || !1)
    }, t
  }();

  function jh(t, e) {
    if (e) {
      for (var n = new ql(t.length), i = 0; i < t.length; ++i) n[i] = t.charCodeAt(i);
      return n
    }
    if (kh) return kh.encode(t);
    var r = t.length, s = new ql(t.length + (t.length >> 1)), a = 0, o = function (t) {
      s[a++] = t
    };
    for (i = 0; i < r; ++i) {
      if (a + 5 > s.length) {
        var l = new ql(a + 8 + (r - i << 1));
        l.set(s), s = l
      }
      var c = t.charCodeAt(i);
      c < 128 || e ? o(c) : c < 2048 ? (o(192 | c >> 6), o(128 | 63 & c)) : c > 55295 && c < 57344 ? (o(240 | (c = 65536 + (1047552 & c) | 1023 & t.charCodeAt(++i)) >> 18), o(128 | c >> 12 & 63), o(128 | c >> 6 & 63), o(128 | 63 & c)) : (o(224 | c >> 12), o(128 | c >> 6 & 63), o(128 | 63 & c))
    }
    return wc(s, 0, a)
  }

  function Xh(t, e) {
    if (e) {
      for (var n = "", i = 0; i < t.length; i += 16384) n += String.fromCharCode.apply(null, t.subarray(i, i + 16384));
      return n
    }
    if (Uh) return Uh.decode(t);
    var r = Gh(t), s = r[0];
    if (r[1].length) throw"invalid utf-8 data";
    return s
  }

  var Yh = function (t) {
    return 1 == t ? 3 : t < 6 ? 2 : 9 == t ? 1 : 0
  }, qh = function (t, e) {
    return e + 30 + $c(t, e + 26) + $c(t, e + 28)
  }, Zh = function (t, e, n) {
    var i = $c(t, e + 28), r = Xh(t.subarray(e + 46, e + 46 + i), !(2048 & $c(t, e + 8))), s = e + 46 + i,
        a = th(t, e + 20), o = n && 4294967295 == a ? Jh(t, s) : [a, th(t, e + 24), th(t, e + 42)], l = o[0], c = o[1],
        h = o[2];
    return [$c(t, e + 10), l, c, r, s + $c(t, e + 30) + $c(t, e + 32), h]
  }, Jh = function (t, e) {
    for (; 1 != $c(t, e); e += 4 + $c(t, e + 2)) ;
    return [eh(t, e + 12), eh(t, e + 4), eh(t, e + 20)]
  }, Qh = function (t) {
    var e = 0;
    if (t) for (var n in t) {
      var i = t[n].length;
      if (i > 65535) throw"extra field too long";
      e += i + 4
    }
    return e
  }, Kh = function (t, e, n, i, r, s, a, o) {
    var l = i.length, c = n.extra, h = o && o.length, u = Qh(c);
    nh(t, e, null != a ? 33639248 : 67324752), e += 4, null != a && (t[e++] = 20, t[e++] = n.os), t[e] = 20, e += 2, t[e++] = n.flag << 1 | (null == s && 8), t[e++] = r && 8, t[e++] = 255 & n.compression, t[e++] = n.compression >> 8;
    var d = new Date(null == n.mtime ? Date.now() : n.mtime), p = d.getFullYear() - 1980;
    if (p < 0 || p > 119) throw"date not in range 1980-2099";
    if (nh(t, e, p << 25 | d.getMonth() + 1 << 21 | d.getDate() << 16 | d.getHours() << 11 | d.getMinutes() << 5 | d.getSeconds() >>> 1), e += 4, null != s && (nh(t, e, n.crc), nh(t, e + 4, s), nh(t, e + 8, n.size)), nh(t, e + 12, l), nh(t, e + 14, u), e += 16, null != a && (nh(t, e, h), nh(t, e + 6, n.attrs), nh(t, e + 10, a), e += 14), t.set(i, e), e += l, u) for (var m in c) {
      var f = c[m], g = f.length;
      nh(t, e, +m), nh(t, e + 2, g), t.set(f, e + 4), e += 4 + g
    }
    return h && (t.set(o, e), e += h), e
  }, $h = function (t, e, n, i, r) {
    nh(t, e, 101010256), nh(t, e + 8, n), nh(t, e + 10, n), nh(t, e + 12, i), nh(t, e + 16, r)
  }, tu = function () {
    function t(t) {
      this.filename = t, this.c = zc(), this.size = 0, this.compression = 0
    }

    return t.prototype.process = function (t, e) {
      this.ondata(null, t, e)
    }, t.prototype.push = function (t, e) {
      if (!this.ondata) throw"no callback - add to ZIP archive before pushing";
      this.c.p(t), this.size += t.length, e && (this.crc = this.c.d()), this.process(t, e || !1)
    }, t
  }(), eu = function () {
    function t(t, e) {
      var n = this;
      e || (e = {}), tu.call(this, t), this.d = new hh(e, (function (t, e) {
        n.ondata(null, t, e)
      })), this.compression = 8, this.flag = Yh(e.level)
    }

    return t.prototype.process = function (t, e) {
      try {
        this.d.push(t, e)
      } catch (t) {
        this.ondata(t, null, e)
      }
    }, t.prototype.push = function (t, e) {
      tu.prototype.push.call(this, t, e)
    }, t
  }(), nu = function () {
    function t(t, e) {
      var n = this;
      e || (e = {}), tu.call(this, t), this.d = new uh(e, (function (t, e, i) {
        n.ondata(t, e, i)
      })), this.compression = 8, this.flag = Yh(e.level), this.terminate = this.d.terminate
    }

    return t.prototype.process = function (t, e) {
      this.d.push(t, e)
    }, t.prototype.push = function (t, e) {
      tu.prototype.push.call(this, t, e)
    }, t
  }(), iu = function () {
    function t(t) {
      this.ondata = t, this.u = [], this.d = 1
    }

    return t.prototype.add = function (t) {
      var e = this;
      if (2 & this.d) throw"stream finished";
      var n = jh(t.filename), i = n.length, r = t.comment, s = r && jh(r),
          a = i != t.filename.length || s && r.length != s.length, o = i + Qh(t.extra) + 30;
      if (i > 65535) throw"filename too long";
      var l = new ql(o);
      Kh(l, 0, t, n, a);
      var c = [l], h = function () {
        for (var t = 0, n = c; t < n.length; t++) {
          var i = n[t];
          e.ondata(null, i, !1)
        }
        c = []
      }, u = this.d;
      this.d = 0;
      var d = this.u.length, p = Fc(t, {
        f: n, u: a, o: s, t: function () {
          t.terminate && t.terminate()
        }, r: function () {
          if (h(), u) {
            var t = e.u[d + 1];
            t ? t.r() : e.d = 1
          }
          u = 1
        }
      }), m = 0;
      t.ondata = function (n, i, r) {
        if (n) e.ondata(n, i, r), e.terminate(); else if (m += i.length, c.push(i), r) {
          var s = new ql(16);
          nh(s, 0, 134695760), nh(s, 4, t.crc), nh(s, 8, m), nh(s, 12, t.size), c.push(s), p.c = m, p.b = o + m + 16, p.crc = t.crc, p.size = t.size, u && p.r(), u = 1
        } else u && h()
      }, this.u.push(p)
    }, t.prototype.end = function () {
      var t = this;
      if (2 & this.d) {
        if (1 & this.d) throw"stream finishing";
        throw"stream finished"
      }
      this.d ? this.e() : this.u.push({
        r: function () {
          1 & t.d && (t.u.splice(-1, 1), t.e())
        }, t: function () {
        }
      }), this.d = 3
    }, t.prototype.e = function () {
      for (var t = 0, e = 0, n = 0, i = 0, r = this.u; i < r.length; i++) n += 46 + (l = r[i]).f.length + Qh(l.extra) + (l.o ? l.o.length : 0);
      for (var s = new ql(n + 22), a = 0, o = this.u; a < o.length; a++) {
        var l = o[a];
        Kh(s, t, l, l.f, l.u, l.c, e, l.o), t += 46 + l.f.length + Qh(l.extra) + (l.o ? l.o.length : 0), e += l.b
      }
      $h(s, t, this.u.length, n, e), this.ondata(null, s, !0), this.d = 2
    }, t.prototype.terminate = function () {
      for (var t = 0, e = this.u; t < e.length; t++) e[t].t();
      this.d = 2
    }, t
  }();

  function ru(t, e, n) {
    if (n || (n = e, e = {}), "function" != typeof n) throw"no callback";
    var i = {};
    Fh(t, "", i, e);
    var r = Object.keys(i), s = r.length, a = 0, o = 0, l = s, c = new Array(s), h = [], u = function () {
      for (var t = 0; t < h.length; ++t) h[t]()
    }, d = function () {
      var t = new ql(o + 22), e = a, i = o - a;
      o = 0;
      for (var r = 0; r < l; ++r) {
        var s = c[r];
        try {
          var h = s.c.length;
          Kh(t, o, s, s.f, s.u, h);
          var u = 30 + s.f.length + Qh(s.extra), d = o + u;
          t.set(s.c, d), Kh(t, a, s, s.f, s.u, h, o, s.m), a += 16 + u + (s.m ? s.m.length : 0), o = d + h
        } catch (t) {
          return n(t, null)
        }
      }
      $h(t, a, c.length, i, e), n(null, t)
    };
    s || d();
    for (var p = function (t) {
      var e = r[t], l = i[e], p = l[0], m = l[1], f = zc(), g = p.length;
      f.p(p);
      var v = jh(e), y = v.length, x = m.comment, _ = x && jh(x), w = _ && _.length, b = Qh(m.extra),
          M = 0 == m.level ? 0 : 8, S = function (i, r) {
            if (i) u(), n(i, null); else {
              var l = r.length;
              c[t] = Fc(m, {
                size: g,
                crc: f.d(),
                c: r,
                f: v,
                m: _,
                u: y != e.length || _ && x.length != w,
                compression: M
              }), a += 30 + y + b + l, o += 76 + 2 * (y + b) + (w || 0) + l, --s || d()
            }
          };
      if (y > 65535 && S("filename too long", null), M) if (g < 16e4) try {
        S(null, ph(p, m))
      } catch (t) {
        S(t, null)
      } else h.push(dh(p, m, S)); else S(null, p)
    }, m = 0; m < l; ++m) p(m);
    return u
  }

  function su(t, e) {
    e || (e = {});
    var n = {}, i = [];
    Fh(t, "", n, e);
    var r = 0, s = 0;
    for (var a in n) {
      var o = n[a], l = o[0], c = o[1], h = 0 == c.level ? 0 : 8, u = (M = jh(a)).length, d = c.comment, p = d && jh(d),
          m = p && p.length, f = Qh(c.extra);
      if (u > 65535) throw"filename too long";
      var g = h ? ph(l, c) : l, v = g.length, y = zc();
      y.p(l), i.push(Fc(c, {
        size: l.length,
        crc: y.d(),
        c: g,
        f: M,
        m: p,
        u: u != a.length || p && d.length != m,
        o: r,
        compression: h
      })), r += 30 + u + f + v, s += 76 + 2 * (u + f) + (m || 0) + v
    }
    for (var x = new ql(s + 22), _ = r, w = s - r, b = 0; b < i.length; ++b) {
      var M = i[b];
      Kh(x, M.o, M, M.f, M.u, M.c.length);
      var S = 30 + M.f.length + Qh(M.extra);
      x.set(M.c, M.o + S), Kh(x, r, M, M.f, M.u, M.c.length, M.o, M.m), r += 16 + S + (M.m ? M.m.length : 0)
    }
    return $h(x, r, i.length, w, _), x
  }

  var au = function () {
    function t() {
    }

    return t.prototype.push = function (t, e) {
      this.ondata(null, t, e)
    }, t.compression = 0, t
  }(), ou = function () {
    function t() {
      var t = this;
      this.i = new mh((function (e, n) {
        t.ondata(null, e, n)
      }))
    }

    return t.prototype.push = function (t, e) {
      try {
        this.i.push(t, e)
      } catch (n) {
        this.ondata(n, t, e)
      }
    }, t.compression = 8, t
  }(), lu = function () {
    function t(t, e) {
      var n = this;
      e < 32e4 ? this.i = new mh((function (t, e) {
        n.ondata(null, t, e)
      })) : (this.i = new fh((function (t, e, i) {
        n.ondata(t, e, i)
      })), this.terminate = this.i.terminate)
    }

    return t.prototype.push = function (t, e) {
      this.i.terminate && (t = wc(t, 0)), this.i.push(t, e)
    }, t.compression = 8, t
  }(), cu = function () {
    function t(t) {
      this.onfile = t, this.k = [], this.o = {0: au}, this.p = Ic
    }

    return t.prototype.push = function (t, e) {
      var n = this;
      if (!this.onfile) throw"no callback";
      if (!this.p) throw"stream finished";
      if (this.c > 0) {
        var i = Math.min(this.c, t.length), r = t.subarray(0, i);
        if (this.c -= i, this.d ? this.d.push(r, !this.c) : this.k[0].push(r), (t = t.subarray(i)).length) return this.push(t, e)
      } else {
        var s = 0, a = 0, o = void 0, l = void 0;
        this.p.length ? t.length ? ((l = new ql(this.p.length + t.length)).set(this.p), l.set(t, this.p.length)) : l = this.p : l = t;
        for (var c = l.length, h = this.c, u = h && this.d, d = function () {
          var t, e = th(l, a);
          if (67324752 == e) {
            s = 1, o = a, p.d = null, p.c = 0;
            var i = $c(l, a + 6), r = $c(l, a + 8), u = 2048 & i, d = 8 & i, m = $c(l, a + 26), f = $c(l, a + 28);
            if (c > a + 30 + m + f) {
              var g = [];
              p.k.unshift(g), s = 2;
              var v, y = th(l, a + 18), x = th(l, a + 22), _ = Xh(l.subarray(a + 30, a += 30 + m), !u);
              4294967295 == y ? (t = d ? [-2] : Jh(l, a), y = t[0], x = t[1]) : d && (y = -1), a += f, p.c = y;
              var w = {
                name: _, compression: r, start: function () {
                  if (!w.ondata) throw"no callback";
                  if (y) {
                    var t = n.o[r];
                    if (!t) throw"unknown compression type " + r;
                    (v = y < 0 ? new t(_) : new t(_, y, x)).ondata = function (t, e, n) {
                      w.ondata(t, e, n)
                    };
                    for (var e = 0, i = g; e < i.length; e++) {
                      var s = i[e];
                      v.push(s, !1)
                    }
                    n.k[0] == g && n.c ? n.d = v : v.push(Ic, !0)
                  } else w.ondata(null, Ic, !0)
                }, terminate: function () {
                  v && v.terminate && v.terminate()
                }
              };
              y >= 0 && (w.size = y, w.originalSize = x), p.onfile(w)
            }
            return "break"
          }
          if (h) {
            if (134695760 == e) return o = a += 12 + (-2 == h && 8), s = 3, p.c = 0, "break";
            if (33639248 == e) return o = a -= 4, s = 3, p.c = 0, "break"
          }
        }, p = this; a < c - 4 && "break" !== d(); ++a) ;
        if (this.p = Ic, h < 0) {
          var m = s ? l.subarray(0, o - 12 - (-2 == h && 8) - (134695760 == th(l, o - 16) && 4)) : l.subarray(0, a);
          u ? u.push(m, !!s) : this.k[+(2 == s)].push(m)
        }
        if (2 & s) return this.push(l.subarray(a), e);
        this.p = l.subarray(a)
      }
      if (e) {
        if (this.c) throw"invalid zip file";
        this.p = null
      }
    }, t.prototype.register = function (t) {
      this.o[t.compression] = t
    }, t
  }();

  function hu(t, e) {
    if ("function" != typeof e) throw"no callback";
    for (var n = [], i = function () {
      for (var t = 0; t < n.length; ++t) n[t]()
    }, r = {}, s = t.length - 22; 101010256 != th(t, s); --s) if (!s || t.length - s > 65558) return void e("invalid zip file", null);
    var a = $c(t, s + 8);
    a || e(null, {});
    var o = a, l = th(t, s + 16), c = 4294967295 == l;
    if (c) {
      if (s = th(t, s - 12), 101075792 != th(t, s)) return void e("invalid zip file", null);
      o = a = th(t, s + 32), l = th(t, s + 48)
    }
    for (var h = function (s) {
      var o = Zh(t, l, c), h = o[0], u = o[1], d = o[2], p = o[3], m = o[4], f = o[5], g = qh(t, f);
      l = m;
      var v = function (t, n) {
        t ? (i(), e(t, null)) : (r[p] = n, --a || e(null, r))
      };
      if (h) if (8 == h) {
        var y = t.subarray(g, g + u);
        if (u < 32e4) try {
          v(null, vh(y, new ql(d)))
        } catch (t) {
          v(t, null)
        } else n.push(gh(y, {size: d}, v))
      } else v("unknown compression type " + h, null); else v(null, wc(t, g, g + u))
    }, u = 0; u < o; ++u) h();
    return i
  }

  function uu(t) {
    for (var e = {}, n = t.length - 22; 101010256 != th(t, n); --n) if (!n || t.length - n > 65558) throw"invalid zip file";
    var i = $c(t, n + 8);
    if (!i) return {};
    var r = th(t, n + 16), s = 4294967295 == r;
    if (s) {
      if (n = th(t, n - 12), 101075792 != th(t, n)) throw"invalid zip file";
      i = th(t, n + 32), r = th(t, n + 48)
    }
    for (var a = 0; a < i; ++a) {
      var o = Zh(t, r, s), l = o[0], c = o[1], h = o[2], u = o[3], d = o[4], p = o[5], m = qh(t, p);
      if (r = d, l) {
        if (8 != l) throw"unknown compression type " + l;
        e[u] = vh(t.subarray(m, m + c), new ql(h))
      } else e[u] = wc(t, m, m + c)
    }
    return e
  }

  class du {
    static findSpan(t, e, n) {
      const i = n.length - t - 1;
      if (e >= n[i]) return i - 1;
      if (e <= n[t]) return t;
      let r = t, s = i, a = Math.floor((r + s) / 2);
      for (; e < n[a] || e >= n[a + 1];) e < n[a] ? s = a : r = a, a = Math.floor((r + s) / 2);
      return a
    }

    static calcBasisFunctions(t, e, n, i) {
      const r = [], s = [], a = [];
      r[0] = 1;
      for (let o = 1; o <= n; ++o) {
        s[o] = e - i[t + 1 - o], a[o] = i[t + o] - e;
        let n = 0;
        for (let t = 0; t < o; ++t) {
          const e = a[t + 1], i = s[o - t], l = r[t] / (e + i);
          r[t] = n + e * l, n = i * l
        }
        r[o] = n
      }
      return r
    }

    static calcBSplinePoint(t, e, n, i) {
      const r = this.findSpan(t, i, e), s = this.calcBasisFunctions(r, i, t, e), a = new rt(0, 0, 0, 0);
      for (let e = 0; e <= t; ++e) {
        const i = n[r - t + e], o = s[e], l = i.w * o;
        a.x += i.x * l, a.y += i.y * l, a.z += i.z * l, a.w += i.w * o
      }
      return a
    }

    static calcBasisFunctionDerivatives(t, e, n, i, r) {
      const s = [];
      for (let t = 0; t <= n; ++t) s[t] = 0;
      const a = [];
      for (let t = 0; t <= i; ++t) a[t] = s.slice(0);
      const o = [];
      for (let t = 0; t <= n; ++t) o[t] = s.slice(0);
      o[0][0] = 1;
      const l = s.slice(0), c = s.slice(0);
      for (let i = 1; i <= n; ++i) {
        l[i] = e - r[t + 1 - i], c[i] = r[t + i] - e;
        let n = 0;
        for (let t = 0; t < i; ++t) {
          const e = c[t + 1], r = l[i - t];
          o[i][t] = e + r;
          const s = o[t][i - 1] / o[i][t];
          o[t][i] = n + e * s, n = r * s
        }
        o[i][i] = n
      }
      for (let t = 0; t <= n; ++t) a[0][t] = o[t][n];
      for (let t = 0; t <= n; ++t) {
        let e = 0, r = 1;
        const l = [];
        for (let t = 0; t <= n; ++t) l[t] = s.slice(0);
        l[0][0] = 1;
        for (let s = 1; s <= i; ++s) {
          let i = 0;
          const c = t - s, h = n - s;
          t >= s && (l[r][0] = l[e][0] / o[h + 1][c], i = l[r][0] * o[c][h]);
          const u = t - 1 <= h ? s - 1 : n - t;
          for (let t = c >= -1 ? 1 : -c; t <= u; ++t) l[r][t] = (l[e][t] - l[e][t - 1]) / o[h + 1][c + t], i += l[r][t] * o[c + t][h];
          t <= h && (l[r][s] = -l[e][s - 1] / o[h + 1][t], i += l[r][s] * o[t][h]), a[s][t] = i;
          const d = e;
          e = r, r = d
        }
      }
      let h = n;
      for (let t = 1; t <= i; ++t) {
        for (let e = 0; e <= n; ++e) a[t][e] *= h;
        h *= n - t
      }
      return a
    }

    static calcBSplineDerivatives(t, e, n, i, r) {
      const s = r < t ? r : t, a = [], o = this.findSpan(t, i, e), l = this.calcBasisFunctionDerivatives(o, i, t, s, e),
          c = [];
      for (let t = 0; t < n.length; ++t) {
        const e = n[t].clone(), i = e.w;
        e.x *= i, e.y *= i, e.z *= i, c[t] = e
      }
      for (let e = 0; e <= s; ++e) {
        const n = c[o - t].clone().multiplyScalar(l[e][0]);
        for (let i = 1; i <= t; ++i) n.add(c[o - t + i].clone().multiplyScalar(l[e][i]));
        a[e] = n
      }
      for (let t = s + 1; t <= r + 1; ++t) a[t] = new rt(0, 0, 0);
      return a
    }

    static calcKoverI(t, e) {
      let n = 1;
      for (let e = 2; e <= t; ++e) n *= e;
      let i = 1;
      for (let t = 2; t <= e; ++t) i *= t;
      for (let n = 2; n <= t - e; ++n) i *= n;
      return n / i
    }

    static calcRationalCurveDerivatives(t) {
      const e = t.length, n = [], i = [];
      for (let r = 0; r < e; ++r) {
        const e = t[r];
        n[r] = new lt(e.x, e.y, e.z), i[r] = e.w
      }
      const r = [];
      for (let t = 0; t < e; ++t) {
        const e = n[t].clone();
        for (let n = 1; n <= t; ++n) e.sub(r[t - n].clone().multiplyScalar(this.calcKoverI(t, n) * i[n]));
        r[t] = e.divideScalar(i[0])
      }
      return r
    }

    static calcNURBSDerivatives(t, e, n, i, r) {
      const s = this.calcBSplineDerivatives(t, e, n, i, r);
      return this.calcRationalCurveDerivatives(s)
    }

    static calcSurfacePoint(t, e, n, i, r, s, a, o) {
      const l = this.findSpan(t, s, n), c = this.findSpan(e, a, i), h = this.calcBasisFunctions(l, s, t, n),
          u = this.calcBasisFunctions(c, a, e, i), d = [];
      for (let n = 0; n <= e; ++n) {
        d[n] = new rt(0, 0, 0, 0);
        for (let i = 0; i <= t; ++i) {
          const s = r[l - t + i][c - e + n].clone(), a = s.w;
          s.x *= a, s.y *= a, s.z *= a, d[n].add(s.multiplyScalar(h[i]))
        }
      }
      const p = new rt(0, 0, 0, 0);
      for (let t = 0; t <= e; ++t) p.add(d[t].multiplyScalar(u[t]));
      p.divideScalar(p.w), o.set(p.x, p.y, p.z)
    }
  }

  class pu extends xa {
    constructor(t, e, n, i, r) {
      super(), this.degree = t, this.knots = e, this.controlPoints = [], this.startKnot = i || 0, this.endKnot = r || this.knots.length - 1;
      for (let t = 0; t < n.length; ++t) {
        const e = n[t];
        this.controlPoints[t] = new rt(e.x, e.y, e.z, e.w)
      }
    }

    getPoint(t, e = new lt) {
      const n = e, i = this.knots[this.startKnot] + t * (this.knots[this.endKnot] - this.knots[this.startKnot]),
          r = du.calcBSplinePoint(this.degree, this.knots, this.controlPoints, i);
      return 1 !== r.w && r.divideScalar(r.w), n.set(r.x, r.y, r.z)
    }

    getTangent(t, e = new lt) {
      const n = e, i = this.knots[0] + t * (this.knots[this.knots.length - 1] - this.knots[0]),
          r = du.calcNURBSDerivatives(this.degree, this.knots, this.controlPoints, i, 1);
      return n.copy(r[1]).normalize(), n
    }
  }

  let mu, fu, gu;

  class vu extends Fo {
    constructor(t) {
      super(t)
    }

    load(t, e, n, i) {
      const r = this, s = "" === r.path ? ul.extractUrlBase(t) : r.path, a = new Uo(this.manager);
      a.setPath(r.path), a.setResponseType("arraybuffer"), a.setRequestHeader(r.requestHeader), a.setWithCredentials(r.withCredentials), a.load(t, (function (n) {
        try {
          e(r.parse(n, s))
        } catch (e) {
          i ? i(e) : console.error(e), r.manager.itemError(t)
        }
      }), n, i)
    }

    parse(t, e) {
      if (function (t) {
        const e = "Kaydara FBX Binary  \0";
        return t.byteLength >= e.length && e === Nu(t, 0, e.length)
      }(t)) mu = (new bu).parse(t); else {
        const e = Nu(t);
        if (!function (t) {
          const e = ["K", "a", "y", "d", "a", "r", "a", "\\", "F", "B", "X", "\\", "B", "i", "n", "a", "r", "y", "\\", "\\"];
          let n = 0;

          function i(e) {
            const i = t[e - 1];
            return t = t.slice(n + e), n++, i
          }

          for (let t = 0; t < e.length; ++t) if (i(1) === e[t]) return !1;
          return !0
        }(e)) throw new Error("THREE.FBXLoader: Unknown format.");
        if (Eu(e) < 7e3) throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: " + Eu(e));
        mu = (new wu).parse(e)
      }
      const n = new Vo(this.manager).setPath(this.resourcePath || e).setCrossOrigin(this.crossOrigin);
      return new yu(n, this.manager).parse(mu)
    }
  }

  class yu {
    constructor(t, e) {
      this.textureLoader = t, this.manager = e
    }

    parse() {
      fu = this.parseConnections();
      const t = this.parseImages(), e = this.parseTextures(t), n = this.parseMaterials(e), i = this.parseDeformers(),
          r = (new xu).parse(i);
      return this.parseScene(i, r, n), gu
    }

    parseConnections() {
      const t = new Map;
      return "Connections" in mu && mu.Connections.connections.forEach((function (e) {
        const n = e[0], i = e[1], r = e[2];
        t.has(n) || t.set(n, {parents: [], children: []});
        const s = {ID: i, relationship: r};
        t.get(n).parents.push(s), t.has(i) || t.set(i, {parents: [], children: []});
        const a = {ID: n, relationship: r};
        t.get(i).children.push(a)
      })), t
    }

    parseImages() {
      const t = {}, e = {};
      if ("Video" in mu.Objects) {
        const n = mu.Objects.Video;
        for (const i in n) {
          const r = n[i];
          if (t[parseInt(i)] = r.RelativeFilename || r.Filename, "Content" in r) {
            const t = r.Content instanceof ArrayBuffer && r.Content.byteLength > 0,
                s = "string" == typeof r.Content && "" !== r.Content;
            if (t || s) {
              const t = this.parseImage(n[i]);
              e[r.RelativeFilename || r.Filename] = t
            }
          }
        }
      }
      for (const n in t) {
        const i = t[n];
        void 0 !== e[i] ? t[n] = e[i] : t[n] = t[n].split("\\").pop()
      }
      return t
    }

    parseImage(t) {
      const e = t.Content, n = t.RelativeFilename || t.Filename, i = n.slice(n.lastIndexOf(".") + 1).toLowerCase();
      let r;
      switch (i) {
        case"bmp":
          r = "image/bmp";
          break;
        case"jpg":
        case"jpeg":
          r = "image/jpeg";
          break;
        case"png":
          r = "image/png";
          break;
        case"tif":
          r = "image/tiff";
          break;
        case"tga":
          null === this.manager.getHandler(".tga") && console.warn("FBXLoader: TGA loader not found, skipping ", n), r = "image/tga";
          break;
        default:
          return void console.warn('FBXLoader: Image type "' + i + '" is not supported.')
      }
      if ("string" == typeof e) return "data:" + r + ";base64," + e;
      {
        const t = new Uint8Array(e);
        return window.URL.createObjectURL(new Blob([t], {type: r}))
      }
    }

    parseTextures(t) {
      const e = new Map;
      if ("Texture" in mu.Objects) {
        const n = mu.Objects.Texture;
        for (const i in n) {
          const r = this.parseTexture(n[i], t);
          e.set(parseInt(i), r)
        }
      }
      return e
    }

    parseTexture(t, e) {
      const n = this.loadTexture(t, e);
      n.ID = t.id, n.name = t.attrName;
      const i = t.WrapModeU, r = t.WrapModeV, s = void 0 !== i ? i.value : 0, a = void 0 !== r ? r.value : 0;
      if (n.wrapS = 0 === s ? o : l, n.wrapT = 0 === a ? o : l, "Scaling" in t) {
        const e = t.Scaling.value;
        n.repeat.x = e[0], n.repeat.y = e[1]
      }
      return n
    }

    loadTexture(t, e) {
      let n;
      const i = this.textureLoader.path, r = fu.get(t.id).children;
      let s;
      void 0 !== r && r.length > 0 && void 0 !== e[r[0].ID] && (n = e[r[0].ID], 0 !== n.indexOf("blob:") && 0 !== n.indexOf("data:") || this.textureLoader.setPath(void 0));
      const a = t.FileName.slice(-3).toLowerCase();
      if ("tga" === a) {
        const e = this.manager.getHandler(".tga");
        null === e ? (console.warn("FBXLoader: TGA loader not found, creating placeholder texture for", t.RelativeFilename), s = new nt) : s = e.load(n)
      } else "psd" === a ? (console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for", t.RelativeFilename), s = new nt) : s = this.textureLoader.load(n);
      return this.textureLoader.setPath(i), s
    }

    parseMaterials(t) {
      const e = new Map;
      if ("Material" in mu.Objects) {
        const n = mu.Objects.Material;
        for (const i in n) {
          const r = this.parseMaterial(n[i], t);
          null !== r && e.set(parseInt(i), r)
        }
      }
      return e
    }

    parseMaterial(t, e) {
      const n = t.id, i = t.attrName;
      let r = t.ShadingModel;
      if ("object" == typeof r && (r = r.value), !fu.has(n)) return null;
      const s = this.parseParameters(t, e, n);
      let a;
      switch (r.toLowerCase()) {
        case"phong":
          a = new xo;
          break;
        case"lambert":
          a = new _o;
          break;
        default:
          console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.', r), a = new xo
      }
      return a.setValues(s), a.name = i, a
    }

    parseParameters(t, e, n) {
      const i = {};
      t.BumpFactor && (i.bumpScale = t.BumpFactor.value), t.Diffuse ? i.color = (new Pe).fromArray(t.Diffuse.value) : !t.DiffuseColor || "Color" !== t.DiffuseColor.type && "ColorRGB" !== t.DiffuseColor.type || (i.color = (new Pe).fromArray(t.DiffuseColor.value)), t.DisplacementFactor && (i.displacementScale = t.DisplacementFactor.value), t.Emissive ? i.emissive = (new Pe).fromArray(t.Emissive.value) : !t.EmissiveColor || "Color" !== t.EmissiveColor.type && "ColorRGB" !== t.EmissiveColor.type || (i.emissive = (new Pe).fromArray(t.EmissiveColor.value)), t.EmissiveFactor && (i.emissiveIntensity = parseFloat(t.EmissiveFactor.value)), t.Opacity && (i.opacity = parseFloat(t.Opacity.value)), i.opacity < 1 && (i.transparent = !0), t.ReflectionFactor && (i.reflectivity = t.ReflectionFactor.value), t.Shininess && (i.shininess = t.Shininess.value), t.Specular ? i.specular = (new Pe).fromArray(t.Specular.value) : t.SpecularColor && "Color" === t.SpecularColor.type && (i.specular = (new Pe).fromArray(t.SpecularColor.value));
      const r = this;
      return fu.get(n).children.forEach((function (t) {
        const n = t.relationship;
        switch (n) {
          case"Bump":
            i.bumpMap = r.getTexture(e, t.ID);
            break;
          case"Maya|TEX_ao_map":
            i.aoMap = r.getTexture(e, t.ID);
            break;
          case"DiffuseColor":
          case"Maya|TEX_color_map":
            i.map = r.getTexture(e, t.ID), i.map.encoding = P;
            break;
          case"DisplacementColor":
            i.displacementMap = r.getTexture(e, t.ID);
            break;
          case"EmissiveColor":
            i.emissiveMap = r.getTexture(e, t.ID), i.emissiveMap.encoding = P;
            break;
          case"NormalMap":
          case"Maya|TEX_normal_map":
            i.normalMap = r.getTexture(e, t.ID);
            break;
          case"ReflectionColor":
            i.envMap = r.getTexture(e, t.ID), i.envMap.mapping = s, i.envMap.encoding = P;
            break;
          case"SpecularColor":
            i.specularMap = r.getTexture(e, t.ID), i.specularMap.encoding = P;
            break;
          case"TransparentColor":
          case"TransparencyFactor":
            i.alphaMap = r.getTexture(e, t.ID), i.transparent = !0;
            break;
          default:
            console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.", n)
        }
      })), i
    }

    getTexture(t, e) {
      return "LayeredTexture" in mu.Objects && e in mu.Objects.LayeredTexture && (console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."), e = fu.get(e).children[0].ID), t.get(e)
    }

    parseDeformers() {
      const t = {}, e = {};
      if ("Deformer" in mu.Objects) {
        const n = mu.Objects.Deformer;
        for (const i in n) {
          const r = n[i], s = fu.get(parseInt(i));
          if ("Skin" === r.attrType) {
            const e = this.parseSkeleton(s, n);
            e.ID = i, s.parents.length > 1 && console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."), e.geometryID = s.parents[0].ID, t[i] = e
          } else if ("BlendShape" === r.attrType) {
            const t = {id: i};
            t.rawTargets = this.parseMorphTargets(s, n), t.id = i, s.parents.length > 1 && console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."), e[i] = t
          }
        }
      }
      return {skeletons: t, morphTargets: e}
    }

    parseSkeleton(t, e) {
      const n = [];
      return t.children.forEach((function (t) {
        const i = e[t.ID];
        if ("Cluster" !== i.attrType) return;
        const r = {ID: t.ID, indices: [], weights: [], transformLink: (new kt).fromArray(i.TransformLink.a)};
        "Indexes" in i && (r.indices = i.Indexes.a, r.weights = i.Weights.a), n.push(r)
      })), {rawBones: n, bones: []}
    }

    parseMorphTargets(t, e) {
      const n = [];
      for (let i = 0; i < t.children.length; i++) {
        const r = t.children[i], s = e[r.ID],
            a = {name: s.attrName, initialWeight: s.DeformPercent, id: s.id, fullWeights: s.FullWeights.a};
        if ("BlendShapeChannel" !== s.attrType) return;
        a.geoID = fu.get(parseInt(r.ID)).children.filter((function (t) {
          return void 0 === t.relationship
        }))[0].ID, n.push(a)
      }
      return n
    }

    parseScene(t, e, n) {
      gu = new ds;
      const i = this.parseModels(t.skeletons, e, n), r = mu.Objects.Model, s = this;
      i.forEach((function (t) {
        const e = r[t.ID];
        s.setLookAtProperties(t, e), fu.get(t.ID).parents.forEach((function (e) {
          const n = i.get(e.ID);
          void 0 !== n && n.add(t)
        })), null === t.parent && gu.add(t)
      })), this.bindSkeleton(t.skeletons, e, i), this.createAmbientLight(), this.setupMorphMaterials(), gu.traverse((function (t) {
        if (t.userData.transformData) {
          t.parent && (t.userData.transformData.parentMatrix = t.parent.matrix, t.userData.transformData.parentMatrixWorld = t.parent.matrixWorld);
          const e = Ru(t.userData.transformData);
          t.applyMatrix4(e), t.updateWorldMatrix()
        }
      }));
      const a = (new _u).parse();
      1 === gu.children.length && gu.children[0].isGroup && (gu.children[0].animations = a, gu = gu.children[0]), gu.animations = a
    }

    parseModels(t, e, n) {
      const i = new Map, r = mu.Objects.Model;
      for (const s in r) {
        const a = parseInt(s), o = r[s], l = fu.get(a);
        let c = this.buildSkeleton(l, t, a, o.attrName);
        if (!c) {
          switch (o.attrType) {
            case"Camera":
              c = this.createCamera(l);
              break;
            case"Light":
              c = this.createLight(l);
              break;
            case"Mesh":
              c = this.createMesh(l, e, n);
              break;
            case"NurbsCurve":
              c = this.createCurve(l, e);
              break;
            case"LimbNode":
            case"Root":
              c = new js;
              break;
            default:
              c = new ds
          }
          c.name = o.attrName ? Sl.sanitizeNodeName(o.attrName) : "", c.ID = a
        }
        this.getTransformData(c, o), i.set(a, c)
      }
      return i
    }

    buildSkeleton(t, e, n, i) {
      let r = null;
      return t.parents.forEach((function (t) {
        for (const s in e) {
          const a = e[s];
          a.rawBones.forEach((function (e, s) {
            if (e.ID === t.ID) {
              const t = r;
              r = new js, r.matrixWorld.copy(e.transformLink), r.name = i ? Sl.sanitizeNodeName(i) : "", r.ID = n, a.bones[s] = r, null !== t && r.add(t)
            }
          }))
        }
      })), r
    }

    createCamera(t) {
      let e, n;
      if (t.children.forEach((function (t) {
        const e = mu.Objects.NodeAttribute[t.ID];
        void 0 !== e && (n = e)
      })), void 0 === n) e = new he; else {
        let t = 0;
        void 0 !== n.CameraProjectionType && 1 === n.CameraProjectionType.value && (t = 1);
        let i = 1;
        void 0 !== n.NearPlane && (i = n.NearPlane.value / 1e3);
        let r = 1e3;
        void 0 !== n.FarPlane && (r = n.FarPlane.value / 1e3);
        let s = window.innerWidth, a = window.innerHeight;
        void 0 !== n.AspectWidth && void 0 !== n.AspectHeight && (s = n.AspectWidth.value, a = n.AspectHeight.value);
        const o = s / a;
        let l = 45;
        void 0 !== n.FieldOfView && (l = n.FieldOfView.value);
        const c = n.FocalLength ? n.FocalLength.value : null;
        switch (t) {
          case 0:
            e = new xn(l, o, i, r), null !== c && e.setFocalLength(c);
            break;
          case 1:
            e = new Vn(-s / 2, s / 2, a / 2, -a / 2, i, r);
            break;
          default:
            console.warn("THREE.FBXLoader: Unknown camera type " + t + "."), e = new he
        }
      }
      return e
    }

    createLight(t) {
      let e, n;
      if (t.children.forEach((function (t) {
        const e = mu.Objects.NodeAttribute[t.ID];
        void 0 !== e && (n = e)
      })), void 0 === n) e = new he; else {
        let t;
        t = void 0 === n.LightType ? 0 : n.LightType.value;
        let i = 16777215;
        void 0 !== n.Color && (i = (new Pe).fromArray(n.Color.value));
        let r = void 0 === n.Intensity ? 1 : n.Intensity.value / 100;
        void 0 !== n.CastLightOnObject && 0 === n.CastLightOnObject.value && (r = 0);
        let s = 0;
        void 0 !== n.FarAttenuationEnd && (s = void 0 !== n.EnableFarAttenuation && 0 === n.EnableFarAttenuation.value ? 0 : n.FarAttenuationEnd.value);
        const a = 1;
        switch (t) {
          case 0:
            e = new sl(i, r, s, a);
            break;
          case 1:
            e = new ol(i, r);
            break;
          case 2:
            let t = Math.PI / 3;
            void 0 !== n.InnerAngle && (t = Z.degToRad(n.InnerAngle.value));
            let o = 0;
            void 0 !== n.OuterAngle && (o = Z.degToRad(n.OuterAngle.value), o = Math.max(o, 1)), e = new tl(i, r, s, t, o, a);
            break;
          default:
            console.warn("THREE.FBXLoader: Unknown light type " + n.LightType.value + ", defaulting to a PointLight."), e = new sl(i, r)
        }
        void 0 !== n.CastShadows && 1 === n.CastShadows.value && (e.castShadow = !0)
      }
      return e
    }

    createMesh(t, e, n) {
      let i, r = null, s = null;
      const a = [];
      return t.children.forEach((function (t) {
        e.has(t.ID) && (r = e.get(t.ID)), n.has(t.ID) && a.push(n.get(t.ID))
      })), a.length > 1 ? s = a : a.length > 0 ? s = a[0] : (s = new xo({color: 13421772}), a.push(s)), "color" in r.attributes && a.forEach((function (t) {
        t.vertexColors = !0
      })), r.FBX_Deformer ? (a.forEach((function (t) {
        t.skinning = !0
      })), i = new Ws(r, s), i.normalizeSkinWeights()) : i = new un(r, s), i
    }

    createCurve(t, e) {
      const n = t.children.reduce((function (t, n) {
        return e.has(n.ID) && (t = e.get(n.ID)), t
      }), null), i = new ta({color: 3342591, linewidth: 1});
      return new aa(n, i)
    }

    getTransformData(t, e) {
      const n = {};
      "InheritType" in e && (n.inheritType = parseInt(e.InheritType.value)), n.eulerOrder = "RotationOrder" in e ? Iu(e.RotationOrder.value) : "ZYX", "Lcl_Translation" in e && (n.translation = e.Lcl_Translation.value), "PreRotation" in e && (n.preRotation = e.PreRotation.value), "Lcl_Rotation" in e && (n.rotation = e.Lcl_Rotation.value), "PostRotation" in e && (n.postRotation = e.PostRotation.value), "Lcl_Scaling" in e && (n.scale = e.Lcl_Scaling.value), "ScalingOffset" in e && (n.scalingOffset = e.ScalingOffset.value), "ScalingPivot" in e && (n.scalingPivot = e.ScalingPivot.value), "RotationOffset" in e && (n.rotationOffset = e.RotationOffset.value), "RotationPivot" in e && (n.rotationPivot = e.RotationPivot.value), t.userData.transformData = n
    }

    setLookAtProperties(t, e) {
      "LookAtProperty" in e && fu.get(t.ID).children.forEach((function (e) {
        if ("LookAtProperty" === e.relationship) {
          const n = mu.Objects.Model[e.ID];
          if ("Lcl_Translation" in n) {
            const e = n.Lcl_Translation.value;
            void 0 !== t.target ? (t.target.position.fromArray(e), gu.add(t.target)) : t.lookAt((new lt).fromArray(e))
          }
        }
      }))
    }

    bindSkeleton(t, e, n) {
      const i = this.parsePoseNodes();
      for (const r in t) {
        const s = t[r];
        fu.get(parseInt(s.ID)).parents.forEach((function (t) {
          if (e.has(t.ID)) {
            const e = t.ID;
            fu.get(e).parents.forEach((function (t) {
              n.has(t.ID) && n.get(t.ID).bind(new Zs(s.bones), i[t.ID])
            }))
          }
        }))
      }
    }

    parsePoseNodes() {
      const t = {};
      if ("Pose" in mu.Objects) {
        const e = mu.Objects.Pose;
        for (const n in e) if ("BindPose" === e[n].attrType) {
          const i = e[n].PoseNode;
          Array.isArray(i) ? i.forEach((function (e) {
            t[e.Node] = (new kt).fromArray(e.Matrix.a)
          })) : t[i.Node] = (new kt).fromArray(i.Matrix.a)
        }
      }
      return t
    }

    createAmbientLight() {
      if ("GlobalSettings" in mu && "AmbientColor" in mu.GlobalSettings) {
        const t = mu.GlobalSettings.AmbientColor.value, e = t[0], n = t[1], i = t[2];
        if (0 !== e || 0 !== n || 0 !== i) {
          const t = new Pe(e, n, i);
          gu.add(new ll(t, 1))
        }
      }
    }

    setupMorphMaterials() {
      const t = this;
      gu.traverse((function (e) {
        e.isMesh && e.geometry.morphAttributes.position && e.geometry.morphAttributes.position.length && (Array.isArray(e.material) ? e.material.forEach((function (n, i) {
          t.setupMorphMaterial(e, n, i)
        })) : t.setupMorphMaterial(e, e.material))
      }))
    }

    setupMorphMaterial(t, e, n) {
      const i = t.uuid, r = e.uuid;
      let s = !1;
      if (gu.traverse((function (t) {
        t.isMesh && (Array.isArray(t.material) ? t.material.forEach((function (e) {
          e.uuid === r && t.uuid !== i && (s = !0)
        })) : t.material.uuid === r && t.uuid !== i && (s = !0))
      })), !0 === s) {
        const i = e.clone();
        i.morphTargets = !0, void 0 === n ? t.material = i : t.material[n] = i
      } else e.morphTargets = !0
    }
  }

  class xu {
    parse(t) {
      const e = new Map;
      if ("Geometry" in mu.Objects) {
        const n = mu.Objects.Geometry;
        for (const i in n) {
          const r = fu.get(parseInt(i)), s = this.parseGeometry(r, n[i], t);
          e.set(parseInt(i), s)
        }
      }
      return e
    }

    parseGeometry(t, e, n) {
      switch (e.attrType) {
        case"Mesh":
          return this.parseMeshGeometry(t, e, n);
        case"NurbsCurve":
          return this.parseNurbsGeometry(e)
      }
    }

    parseMeshGeometry(t, e, n) {
      const i = n.skeletons, r = [], s = t.parents.map((function (t) {
        return mu.Objects.Model[t.ID]
      }));
      if (0 === s.length) return;
      const a = t.children.reduce((function (t, e) {
        return void 0 !== i[e.ID] && (t = i[e.ID]), t
      }), null);
      t.children.forEach((function (t) {
        void 0 !== n.morphTargets[t.ID] && r.push(n.morphTargets[t.ID])
      }));
      const o = s[0], l = {};
      "RotationOrder" in o && (l.eulerOrder = Iu(o.RotationOrder.value)), "InheritType" in o && (l.inheritType = parseInt(o.InheritType.value)), "GeometricTranslation" in o && (l.translation = o.GeometricTranslation.value), "GeometricRotation" in o && (l.rotation = o.GeometricRotation.value), "GeometricScaling" in o && (l.scale = o.GeometricScaling.value);
      const c = Ru(l);
      return this.genGeometry(e, a, r, c)
    }

    genGeometry(t, e, n, i) {
      const r = new Xe;
      t.attrName && (r.name = t.attrName);
      const s = this.parseGeoNode(t, e), a = this.genBuffers(s), o = new Be(a.vertex, 3);
      if (o.applyMatrix4(i), r.setAttribute("position", o), a.colors.length > 0 && r.setAttribute("color", new Be(a.colors, 3)), e && (r.setAttribute("skinIndex", new ze(a.weightsIndices, 4)), r.setAttribute("skinWeight", new Be(a.vertexWeights, 4)), r.FBX_Deformer = e), a.normal.length > 0) {
        const t = (new Q).getNormalMatrix(i), e = new Be(a.normal, 3);
        e.applyNormalMatrix(t), r.setAttribute("normal", e)
      }
      if (a.uvs.forEach((function (t, e) {
        let n = "uv" + (e + 1).toString();
        0 === e && (n = "uv"), r.setAttribute(n, new Be(a.uvs[e], 2))
      })), s.material && "AllSame" !== s.material.mappingType) {
        let t = a.materialIndex[0], e = 0;
        if (a.materialIndex.forEach((function (n, i) {
          n !== t && (r.addGroup(e, i - e, t), t = n, e = i)
        })), r.groups.length > 0) {
          const e = r.groups[r.groups.length - 1], n = e.start + e.count;
          n !== a.materialIndex.length && r.addGroup(n, a.materialIndex.length - n, t)
        }
        0 === r.groups.length && r.addGroup(0, a.materialIndex.length, a.materialIndex[0])
      }
      return this.addMorphTargets(r, t, n, i), r
    }

    parseGeoNode(t, e) {
      const n = {};
      if (n.vertexPositions = void 0 !== t.Vertices ? t.Vertices.a : [], n.vertexIndices = void 0 !== t.PolygonVertexIndex ? t.PolygonVertexIndex.a : [], t.LayerElementColor && (n.color = this.parseVertexColors(t.LayerElementColor[0])), t.LayerElementMaterial && (n.material = this.parseMaterialIndices(t.LayerElementMaterial[0])), t.LayerElementNormal && (n.normal = this.parseNormals(t.LayerElementNormal[0])), t.LayerElementUV) {
        n.uv = [];
        let e = 0;
        for (; t.LayerElementUV[e];) t.LayerElementUV[e].UV && n.uv.push(this.parseUVs(t.LayerElementUV[e])), e++
      }
      return n.weightTable = {}, null !== e && (n.skeleton = e, e.rawBones.forEach((function (t, e) {
        t.indices.forEach((function (i, r) {
          void 0 === n.weightTable[i] && (n.weightTable[i] = []), n.weightTable[i].push({id: e, weight: t.weights[r]})
        }))
      }))), n
    }

    genBuffers(t) {
      const e = {vertex: [], normal: [], colors: [], uvs: [], materialIndex: [], vertexWeights: [], weightsIndices: []};
      let n = 0, i = 0, r = !1, s = [], a = [], o = [], l = [], c = [], h = [];
      const u = this;
      return t.vertexIndices.forEach((function (d, p) {
        let m, f = !1;
        d < 0 && (d ^= -1, f = !0);
        let g = [], v = [];
        if (s.push(3 * d, 3 * d + 1, 3 * d + 2), t.color) {
          const e = Au(p, n, d, t.color);
          o.push(e[0], e[1], e[2])
        }
        if (t.skeleton) {
          if (void 0 !== t.weightTable[d] && t.weightTable[d].forEach((function (t) {
            v.push(t.weight), g.push(t.id)
          })), v.length > 4) {
            r || (console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."), r = !0);
            const t = [0, 0, 0, 0], e = [0, 0, 0, 0];
            v.forEach((function (n, i) {
              let r = n, s = g[i];
              e.forEach((function (e, n, i) {
                if (r > e) {
                  i[n] = r, r = e;
                  const a = t[n];
                  t[n] = s, s = a
                }
              }))
            })), g = t, v = e
          }
          for (; v.length < 4;) v.push(0), g.push(0);
          for (let t = 0; t < 4; ++t) c.push(v[t]), h.push(g[t])
        }
        if (t.normal) {
          const e = Au(p, n, d, t.normal);
          a.push(e[0], e[1], e[2])
        }
        t.material && "AllSame" !== t.material.mappingType && (m = Au(p, n, d, t.material)[0]), t.uv && t.uv.forEach((function (t, e) {
          const i = Au(p, n, d, t);
          void 0 === l[e] && (l[e] = []), l[e].push(i[0]), l[e].push(i[1])
        })), i++, f && (u.genFace(e, t, s, m, a, o, l, c, h, i), n++, i = 0, s = [], a = [], o = [], l = [], c = [], h = [])
      })), e
    }

    genFace(t, e, n, i, r, s, a, o, l, c) {
      for (let h = 2; h < c; h++) t.vertex.push(e.vertexPositions[n[0]]), t.vertex.push(e.vertexPositions[n[1]]), t.vertex.push(e.vertexPositions[n[2]]), t.vertex.push(e.vertexPositions[n[3 * (h - 1)]]), t.vertex.push(e.vertexPositions[n[3 * (h - 1) + 1]]), t.vertex.push(e.vertexPositions[n[3 * (h - 1) + 2]]), t.vertex.push(e.vertexPositions[n[3 * h]]), t.vertex.push(e.vertexPositions[n[3 * h + 1]]), t.vertex.push(e.vertexPositions[n[3 * h + 2]]), e.skeleton && (t.vertexWeights.push(o[0]), t.vertexWeights.push(o[1]), t.vertexWeights.push(o[2]), t.vertexWeights.push(o[3]), t.vertexWeights.push(o[4 * (h - 1)]), t.vertexWeights.push(o[4 * (h - 1) + 1]), t.vertexWeights.push(o[4 * (h - 1) + 2]), t.vertexWeights.push(o[4 * (h - 1) + 3]), t.vertexWeights.push(o[4 * h]), t.vertexWeights.push(o[4 * h + 1]), t.vertexWeights.push(o[4 * h + 2]), t.vertexWeights.push(o[4 * h + 3]), t.weightsIndices.push(l[0]), t.weightsIndices.push(l[1]), t.weightsIndices.push(l[2]), t.weightsIndices.push(l[3]), t.weightsIndices.push(l[4 * (h - 1)]), t.weightsIndices.push(l[4 * (h - 1) + 1]), t.weightsIndices.push(l[4 * (h - 1) + 2]), t.weightsIndices.push(l[4 * (h - 1) + 3]), t.weightsIndices.push(l[4 * h]), t.weightsIndices.push(l[4 * h + 1]), t.weightsIndices.push(l[4 * h + 2]), t.weightsIndices.push(l[4 * h + 3])), e.color && (t.colors.push(s[0]), t.colors.push(s[1]), t.colors.push(s[2]), t.colors.push(s[3 * (h - 1)]), t.colors.push(s[3 * (h - 1) + 1]), t.colors.push(s[3 * (h - 1) + 2]), t.colors.push(s[3 * h]), t.colors.push(s[3 * h + 1]), t.colors.push(s[3 * h + 2])), e.material && "AllSame" !== e.material.mappingType && (t.materialIndex.push(i), t.materialIndex.push(i), t.materialIndex.push(i)), e.normal && (t.normal.push(r[0]), t.normal.push(r[1]), t.normal.push(r[2]), t.normal.push(r[3 * (h - 1)]), t.normal.push(r[3 * (h - 1) + 1]), t.normal.push(r[3 * (h - 1) + 2]), t.normal.push(r[3 * h]), t.normal.push(r[3 * h + 1]), t.normal.push(r[3 * h + 2])), e.uv && e.uv.forEach((function (e, n) {
        void 0 === t.uvs[n] && (t.uvs[n] = []), t.uvs[n].push(a[n][0]), t.uvs[n].push(a[n][1]), t.uvs[n].push(a[n][2 * (h - 1)]), t.uvs[n].push(a[n][2 * (h - 1) + 1]), t.uvs[n].push(a[n][2 * h]), t.uvs[n].push(a[n][2 * h + 1])
      }))
    }

    addMorphTargets(t, e, n, i) {
      if (0 === n.length) return;
      t.morphTargetsRelative = !0, t.morphAttributes.position = [];
      const r = this;
      n.forEach((function (n) {
        n.rawTargets.forEach((function (n) {
          const s = mu.Objects.Geometry[n.geoID];
          void 0 !== s && r.genMorphGeometry(t, e, s, i, n.name)
        }))
      }))
    }

    genMorphGeometry(t, e, n, i, r) {
      const s = void 0 !== e.PolygonVertexIndex ? e.PolygonVertexIndex.a : [],
          a = void 0 !== n.Vertices ? n.Vertices.a : [], o = void 0 !== n.Indexes ? n.Indexes.a : [],
          l = 3 * t.attributes.position.count, c = new Float32Array(l);
      for (let t = 0; t < o.length; t++) {
        const e = 3 * o[t];
        c[e] = a[3 * t], c[e + 1] = a[3 * t + 1], c[e + 2] = a[3 * t + 2]
      }
      const h = {vertexIndices: s, vertexPositions: c}, u = this.genBuffers(h), d = new Be(u.vertex, 3);
      d.name = r || n.attrName, d.applyMatrix4(i), t.morphAttributes.position.push(d)
    }

    parseNormals(t) {
      const e = t.MappingInformationType, n = t.ReferenceInformationType, i = t.Normals.a;
      let r = [];
      return "IndexToDirect" === n && ("NormalIndex" in t ? r = t.NormalIndex.a : "NormalsIndex" in t && (r = t.NormalsIndex.a)), {
        dataSize: 3,
        buffer: i,
        indices: r,
        mappingType: e,
        referenceType: n
      }
    }

    parseUVs(t) {
      const e = t.MappingInformationType, n = t.ReferenceInformationType, i = t.UV.a;
      let r = [];
      return "IndexToDirect" === n && (r = t.UVIndex.a), {
        dataSize: 2,
        buffer: i,
        indices: r,
        mappingType: e,
        referenceType: n
      }
    }

    parseVertexColors(t) {
      const e = t.MappingInformationType, n = t.ReferenceInformationType, i = t.Colors.a;
      let r = [];
      return "IndexToDirect" === n && (r = t.ColorIndex.a), {
        dataSize: 4,
        buffer: i,
        indices: r,
        mappingType: e,
        referenceType: n
      }
    }

    parseMaterialIndices(t) {
      const e = t.MappingInformationType, n = t.ReferenceInformationType;
      if ("NoMappingInformation" === e) return {
        dataSize: 1,
        buffer: [0],
        indices: [0],
        mappingType: "AllSame",
        referenceType: n
      };
      const i = t.Materials.a, r = [];
      for (let t = 0; t < i.length; ++t) r.push(t);
      return {dataSize: 1, buffer: i, indices: r, mappingType: e, referenceType: n}
    }

    parseNurbsGeometry(t) {
      if (void 0 === pu) return console.error("THREE.FBXLoader: The loader relies on NURBSCurve for any nurbs present in the model. Nurbs will show up as empty geometry."), new Xe;
      const e = parseInt(t.Order);
      if (isNaN(e)) return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s", t.Order, t.id), new Xe;
      const n = e - 1, i = t.KnotVector.a, r = [], s = t.Points.a;
      for (let t = 0, e = s.length; t < e; t += 4) r.push((new rt).fromArray(s, t));
      let a, o;
      if ("Closed" === t.Form) r.push(r[0]); else if ("Periodic" === t.Form) {
        a = n, o = i.length - 1 - a;
        for (let t = 0; t < n; ++t) r.push(r[t])
      }
      const l = new pu(n, i, r, a, o).getPoints(7 * r.length), c = new Float32Array(3 * l.length);
      l.forEach((function (t, e) {
        t.toArray(c, 3 * e)
      }));
      const h = new Xe;
      return h.setAttribute("position", new Ne(c, 3)), h
    }
  }

  class _u {
    parse() {
      const t = [], e = this.parseClips();
      if (void 0 !== e) for (const n in e) {
        const i = e[n], r = this.addClip(i);
        t.push(r)
      }
      return t
    }

    parseClips() {
      if (void 0 === mu.Objects.AnimationCurve) return;
      const t = this.parseAnimationCurveNodes();
      this.parseAnimationCurves(t);
      const e = this.parseAnimationLayers(t);
      return this.parseAnimStacks(e)
    }

    parseAnimationCurveNodes() {
      const t = mu.Objects.AnimationCurveNode, e = new Map;
      for (const n in t) {
        const i = t[n];
        if (null !== i.attrName.match(/S|R|T|DeformPercent/)) {
          const t = {id: i.id, attr: i.attrName, curves: {}};
          e.set(t.id, t)
        }
      }
      return e
    }

    parseAnimationCurves(t) {
      const e = mu.Objects.AnimationCurve;
      for (const n in e) {
        const i = {id: e[n].id, times: e[n].KeyTime.a.map(Tu), values: e[n].KeyValueFloat.a}, r = fu.get(i.id);
        if (void 0 !== r) {
          const e = r.parents[0].ID, n = r.parents[0].relationship;
          n.match(/X/) ? t.get(e).curves.x = i : n.match(/Y/) ? t.get(e).curves.y = i : n.match(/Z/) ? t.get(e).curves.z = i : n.match(/d|DeformPercent/) && t.has(e) && (t.get(e).curves.morph = i)
        }
      }
    }

    parseAnimationLayers(t) {
      const e = mu.Objects.AnimationLayer, n = new Map;
      for (const i in e) {
        const e = [], r = fu.get(parseInt(i));
        void 0 !== r && (r.children.forEach((function (n, i) {
          if (t.has(n.ID)) {
            const r = t.get(n.ID);
            if (void 0 !== r.curves.x || void 0 !== r.curves.y || void 0 !== r.curves.z) {
              if (void 0 === e[i]) {
                const t = fu.get(n.ID).parents.filter((function (t) {
                  return void 0 !== t.relationship
                }))[0].ID;
                if (void 0 !== t) {
                  const r = mu.Objects.Model[t.toString()];
                  if (void 0 === r) return void console.warn("THREE.FBXLoader: Encountered a unused curve.", n);
                  const s = {
                    modelName: r.attrName ? Sl.sanitizeNodeName(r.attrName) : "",
                    ID: r.id,
                    initialPosition: [0, 0, 0],
                    initialRotation: [0, 0, 0],
                    initialScale: [1, 1, 1]
                  };
                  gu.traverse((function (t) {
                    t.ID === r.id && (s.transform = t.matrix, t.userData.transformData && (s.eulerOrder = t.userData.transformData.eulerOrder))
                  })), s.transform || (s.transform = new kt), "PreRotation" in r && (s.preRotation = r.PreRotation.value), "PostRotation" in r && (s.postRotation = r.PostRotation.value), e[i] = s
                }
              }
              e[i] && (e[i][r.attr] = r)
            } else if (void 0 !== r.curves.morph) {
              if (void 0 === e[i]) {
                const t = fu.get(n.ID).parents.filter((function (t) {
                      return void 0 !== t.relationship
                    }))[0].ID, r = fu.get(t).parents[0].ID, s = fu.get(r).parents[0].ID, a = fu.get(s).parents[0].ID,
                    o = mu.Objects.Model[a], l = {
                      modelName: o.attrName ? Sl.sanitizeNodeName(o.attrName) : "",
                      morphName: mu.Objects.Deformer[t].attrName
                    };
                e[i] = l
              }
              e[i][r.attr] = r
            }
          }
        })), n.set(parseInt(i), e))
      }
      return n
    }

    parseAnimStacks(t) {
      const e = mu.Objects.AnimationStack, n = {};
      for (const i in e) {
        const r = fu.get(parseInt(i)).children;
        r.length > 1 && console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");
        const s = t.get(r[0].ID);
        n[i] = {name: e[i].attrName, layer: s}
      }
      return n
    }

    addClip(t) {
      let e = [];
      const n = this;
      return t.layer.forEach((function (t) {
        e = e.concat(n.generateTracks(t))
      })), new No(t.name, -1, e)
    }

    generateTracks(t) {
      const e = [];
      let n = new lt, i = new ot, r = new lt;
      if (t.transform && t.transform.decompose(n, i, r), n = n.toArray(), i = (new Zt).setFromQuaternion(i, t.eulerOrder).toArray(), r = r.toArray(), void 0 !== t.T && Object.keys(t.T.curves).length > 0) {
        const i = this.generateVectorTrack(t.modelName, t.T.curves, n, "position");
        void 0 !== i && e.push(i)
      }
      if (void 0 !== t.R && Object.keys(t.R.curves).length > 0) {
        const n = this.generateRotationTrack(t.modelName, t.R.curves, i, t.preRotation, t.postRotation, t.eulerOrder);
        void 0 !== n && e.push(n)
      }
      if (void 0 !== t.S && Object.keys(t.S.curves).length > 0) {
        const n = this.generateVectorTrack(t.modelName, t.S.curves, r, "scale");
        void 0 !== n && e.push(n)
      }
      if (void 0 !== t.DeformPercent) {
        const n = this.generateMorphTrack(t);
        void 0 !== n && e.push(n)
      }
      return e
    }

    generateVectorTrack(t, e, n, i) {
      const r = this.getTimesForAllAxes(e), s = this.getKeyframeTrackValues(r, e, n);
      return new Do(t + "." + i, r, s)
    }

    generateRotationTrack(t, e, n, i, r, s) {
      void 0 !== e.x && (this.interpolateRotations(e.x), e.x.values = e.x.values.map(Z.degToRad)), void 0 !== e.y && (this.interpolateRotations(e.y), e.y.values = e.y.values.map(Z.degToRad)), void 0 !== e.z && (this.interpolateRotations(e.z), e.z.values = e.z.values.map(Z.degToRad));
      const a = this.getTimesForAllAxes(e), o = this.getKeyframeTrackValues(a, e, n);
      void 0 !== i && ((i = i.map(Z.degToRad)).push(s), i = (new Zt).fromArray(i), i = (new ot).setFromEuler(i)), void 0 !== r && ((r = r.map(Z.degToRad)).push(s), r = (new Zt).fromArray(r), r = (new ot).setFromEuler(r).invert());
      const l = new ot, c = new Zt, h = [];
      for (let t = 0; t < o.length; t += 3) c.set(o[t], o[t + 1], o[t + 2], s), l.setFromEuler(c), void 0 !== i && l.premultiply(i), void 0 !== r && l.multiply(r), l.toArray(h, t / 3 * 4);
      return new Ro(t + ".quaternion", a, h)
    }

    generateMorphTrack(t) {
      const e = t.DeformPercent.curves.morph, n = e.values.map((function (t) {
        return t / 100
      })), i = gu.getObjectByName(t.modelName).morphTargetDictionary[t.morphName];
      return new Co(t.modelName + ".morphTargetInfluences[" + i + "]", e.times, n)
    }

    getTimesForAllAxes(t) {
      let e = [];
      if (void 0 !== t.x && (e = e.concat(t.x.times)), void 0 !== t.y && (e = e.concat(t.y.times)), void 0 !== t.z && (e = e.concat(t.z.times)), e = e.sort((function (t, e) {
        return t - e
      })), e.length > 1) {
        let t = 1, n = e[0];
        for (let i = 1; i < e.length; i++) {
          const r = e[i];
          r !== n && (e[t] = r, n = r, t++)
        }
        e = e.slice(0, t)
      }
      return e
    }

    getKeyframeTrackValues(t, e, n) {
      const i = n, r = [];
      let s = -1, a = -1, o = -1;
      return t.forEach((function (t) {
        if (e.x && (s = e.x.times.indexOf(t)), e.y && (a = e.y.times.indexOf(t)), e.z && (o = e.z.times.indexOf(t)), -1 !== s) {
          const t = e.x.values[s];
          r.push(t), i[0] = t
        } else r.push(i[0]);
        if (-1 !== a) {
          const t = e.y.values[a];
          r.push(t), i[1] = t
        } else r.push(i[1]);
        if (-1 !== o) {
          const t = e.z.values[o];
          r.push(t), i[2] = t
        } else r.push(i[2])
      })), r
    }

    interpolateRotations(t) {
      for (let e = 1; e < t.values.length; e++) {
        const n = t.values[e - 1], i = t.values[e] - n, r = Math.abs(i);
        if (r >= 180) {
          const s = r / 180, a = i / s;
          let o = n + a;
          const l = t.times[e - 1], c = (t.times[e] - l) / s;
          let h = l + c;
          const u = [], d = [];
          for (; h < t.times[e];) u.push(h), h += c, d.push(o), o += a;
          t.times = zu(t.times, e, u), t.values = zu(t.values, e, d)
        }
      }
    }
  }

  class wu {
    getPrevNode() {
      return this.nodeStack[this.currentIndent - 2]
    }

    getCurrentNode() {
      return this.nodeStack[this.currentIndent - 1]
    }

    getCurrentProp() {
      return this.currentProp
    }

    pushStack(t) {
      this.nodeStack.push(t), this.currentIndent += 1
    }

    popStack() {
      this.nodeStack.pop(), this.currentIndent -= 1
    }

    setCurrentProp(t, e) {
      this.currentProp = t, this.currentPropName = e
    }

    parse(t) {
      this.currentIndent = 0, this.allNodes = new Su, this.nodeStack = [], this.currentProp = [], this.currentPropName = "";
      const e = this, n = t.split(/[\r\n]+/);
      return n.forEach((function (t, i) {
        const r = t.match(/^[\s\t]*;/), s = t.match(/^[\s\t]*$/);
        if (r || s) return;
        const a = t.match("^\\t{" + e.currentIndent + "}(\\w+):(.*){", ""),
            o = t.match("^\\t{" + e.currentIndent + "}(\\w+):[\\s\\t\\r\\n](.*)"),
            l = t.match("^\\t{" + (e.currentIndent - 1) + "}}");
        a ? e.parseNodeBegin(t, a) : o ? e.parseNodeProperty(t, o, n[++i]) : l ? e.popStack() : t.match(/^[^\s\t}]/) && e.parseNodePropertyContinued(t)
      })), this.allNodes
    }

    parseNodeBegin(t, e) {
      const n = e[1].trim().replace(/^"/, "").replace(/"$/, ""), i = e[2].split(",").map((function (t) {
        return t.trim().replace(/^"/, "").replace(/"$/, "")
      })), r = {name: n}, s = this.parseNodeAttr(i), a = this.getCurrentNode();
      0 === this.currentIndent ? this.allNodes.add(n, r) : n in a ? ("PoseNode" === n ? a.PoseNode.push(r) : void 0 !== a[n].id && (a[n] = {}, a[n][a[n].id] = a[n]), "" !== s.id && (a[n][s.id] = r)) : "number" == typeof s.id ? (a[n] = {}, a[n][s.id] = r) : "Properties70" !== n && (a[n] = "PoseNode" === n ? [r] : r), "number" == typeof s.id && (r.id = s.id), "" !== s.name && (r.attrName = s.name), "" !== s.type && (r.attrType = s.type), this.pushStack(r)
    }

    parseNodeAttr(t) {
      let e = t[0];
      "" !== t[0] && (e = parseInt(t[0]), isNaN(e) && (e = t[0]));
      let n = "", i = "";
      return t.length > 1 && (n = t[1].replace(/^(\w+)::/, ""), i = t[2]), {id: e, name: n, type: i}
    }

    parseNodeProperty(t, e, n) {
      let i = e[1].replace(/^"/, "").replace(/"$/, "").trim(), r = e[2].replace(/^"/, "").replace(/"$/, "").trim();
      "Content" === i && "," === r && (r = n.replace(/"/g, "").replace(/,$/, "").trim());
      const s = this.getCurrentNode();
      if ("Properties70" !== s.name) {
        if ("C" === i) {
          const t = r.split(",").slice(1), e = parseInt(t[0]), n = parseInt(t[1]);
          let a = r.split(",").slice(3);
          a = a.map((function (t) {
            return t.trim().replace(/^"/, "")
          })), i = "connections", r = [e, n], function (t, e) {
            for (let n = 0, i = t.length, r = e.length; n < r; n++, i++) t[i] = e[n]
          }(r, a), void 0 === s[i] && (s[i] = [])
        }
        "Node" === i && (s.id = r), i in s && Array.isArray(s[i]) ? s[i].push(r) : "a" !== i ? s[i] = r : s.a = r, this.setCurrentProp(s, i), "a" === i && "," !== r.slice(-1) && (s.a = Du(r))
      } else this.parseNodeSpecialProperty(t, i, r)
    }

    parseNodePropertyContinued(t) {
      const e = this.getCurrentNode();
      e.a += t, "," !== t.slice(-1) && (e.a = Du(e.a))
    }

    parseNodeSpecialProperty(t, e, n) {
      const i = n.split('",').map((function (t) {
        return t.trim().replace(/^\"/, "").replace(/\s/, "_")
      })), r = i[0], s = i[1], a = i[2], o = i[3];
      let l = i[4];
      switch (s) {
        case"int":
        case"enum":
        case"bool":
        case"ULongLong":
        case"double":
        case"Number":
        case"FieldOfView":
          l = parseFloat(l);
          break;
        case"Color":
        case"ColorRGB":
        case"Vector3D":
        case"Lcl_Translation":
        case"Lcl_Rotation":
        case"Lcl_Scaling":
          l = Du(l)
      }
      this.getPrevNode()[r] = {type: s, type2: a, flag: o, value: l}, this.setCurrentProp(this.getPrevNode(), r)
    }
  }

  class bu {
    parse(t) {
      const e = new Mu(t);
      e.skip(23);
      const n = e.getUint32();
      if (n < 6400) throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: " + n);
      const i = new Su;
      for (; !this.endOfContent(e);) {
        const t = this.parseNode(e, n);
        null !== t && i.add(t.name, t)
      }
      return i
    }

    endOfContent(t) {
      return t.size() % 16 == 0 ? (t.getOffset() + 160 + 16 & -16) >= t.size() : t.getOffset() + 160 + 16 >= t.size()
    }

    parseNode(t, e) {
      const n = {}, i = e >= 7500 ? t.getUint64() : t.getUint32(), r = e >= 7500 ? t.getUint64() : t.getUint32();
      e >= 7500 ? t.getUint64() : t.getUint32();
      const s = t.getUint8(), a = t.getString(s);
      if (0 === i) return null;
      const o = [];
      for (let e = 0; e < r; e++) o.push(this.parseProperty(t));
      const l = o.length > 0 ? o[0] : "", c = o.length > 1 ? o[1] : "", h = o.length > 2 ? o[2] : "";
      for (n.singleProperty = 1 === r && t.getOffset() === i; i > t.getOffset();) {
        const i = this.parseNode(t, e);
        null !== i && this.parseSubNode(a, n, i)
      }
      return n.propertyList = o, "number" == typeof l && (n.id = l), "" !== c && (n.attrName = c), "" !== h && (n.attrType = h), "" !== a && (n.name = a), n
    }

    parseSubNode(t, e, n) {
      if (!0 === n.singleProperty) {
        const t = n.propertyList[0];
        Array.isArray(t) ? (e[n.name] = n, n.a = t) : e[n.name] = t
      } else if ("Connections" === t && "C" === n.name) {
        const t = [];
        n.propertyList.forEach((function (e, n) {
          0 !== n && t.push(e)
        })), void 0 === e.connections && (e.connections = []), e.connections.push(t)
      } else if ("Properties70" === n.name) Object.keys(n).forEach((function (t) {
        e[t] = n[t]
      })); else if ("Properties70" === t && "P" === n.name) {
        let t = n.propertyList[0], i = n.propertyList[1];
        const r = n.propertyList[2], s = n.propertyList[3];
        let a;
        0 === t.indexOf("Lcl ") && (t = t.replace("Lcl ", "Lcl_")), 0 === i.indexOf("Lcl ") && (i = i.replace("Lcl ", "Lcl_")), a = "Color" === i || "ColorRGB" === i || "Vector" === i || "Vector3D" === i || 0 === i.indexOf("Lcl_") ? [n.propertyList[4], n.propertyList[5], n.propertyList[6]] : n.propertyList[4], e[t] = {
          type: i,
          type2: r,
          flag: s,
          value: a
        }
      } else void 0 === e[n.name] ? "number" == typeof n.id ? (e[n.name] = {}, e[n.name][n.id] = n) : e[n.name] = n : "PoseNode" === n.name ? (Array.isArray(e[n.name]) || (e[n.name] = [e[n.name]]), e[n.name].push(n)) : void 0 === e[n.name][n.id] && (e[n.name][n.id] = n)
    }

    parseProperty(t) {
      const n = t.getString(1);
      let i;
      switch (n) {
        case"C":
          return t.getBoolean();
        case"D":
          return t.getFloat64();
        case"F":
          return t.getFloat32();
        case"I":
          return t.getInt32();
        case"L":
          return t.getInt64();
        case"R":
          return i = t.getUint32(), t.getArrayBuffer(i);
        case"S":
          return i = t.getUint32(), t.getString(i);
        case"Y":
          return t.getInt16();
        case"b":
        case"c":
        case"d":
        case"f":
        case"i":
        case"l":
          const r = t.getUint32(), s = t.getUint32(), a = t.getUint32();
          if (0 === s) switch (n) {
            case"b":
            case"c":
              return t.getBooleanArray(r);
            case"d":
              return t.getFloat64Array(r);
            case"f":
              return t.getFloat32Array(r);
            case"i":
              return t.getInt32Array(r);
            case"l":
              return t.getInt64Array(r)
          }
          void 0 === e && console.error("THREE.FBXLoader: External library fflate.min.js required.");
          const o = Dh(new Uint8Array(t.getArrayBuffer(a))), l = new Mu(o.buffer);
          switch (n) {
            case"b":
            case"c":
              return l.getBooleanArray(r);
            case"d":
              return l.getFloat64Array(r);
            case"f":
              return l.getFloat32Array(r);
            case"i":
              return l.getInt32Array(r);
            case"l":
              return l.getInt64Array(r)
          }
        default:
          throw new Error("THREE.FBXLoader: Unknown property type " + n)
      }
    }
  }

  class Mu {
    constructor(t, e) {
      this.dv = new DataView(t), this.offset = 0, this.littleEndian = void 0 === e || e
    }

    getOffset() {
      return this.offset
    }

    size() {
      return this.dv.buffer.byteLength
    }

    skip(t) {
      this.offset += t
    }

    getBoolean() {
      return 1 == (1 & this.getUint8())
    }

    getBooleanArray(t) {
      const e = [];
      for (let n = 0; n < t; n++) e.push(this.getBoolean());
      return e
    }

    getUint8() {
      const t = this.dv.getUint8(this.offset);
      return this.offset += 1, t
    }

    getInt16() {
      const t = this.dv.getInt16(this.offset, this.littleEndian);
      return this.offset += 2, t
    }

    getInt32() {
      const t = this.dv.getInt32(this.offset, this.littleEndian);
      return this.offset += 4, t
    }

    getInt32Array(t) {
      const e = [];
      for (let n = 0; n < t; n++) e.push(this.getInt32());
      return e
    }

    getUint32() {
      const t = this.dv.getUint32(this.offset, this.littleEndian);
      return this.offset += 4, t
    }

    getInt64() {
      let t, e;
      return this.littleEndian ? (t = this.getUint32(), e = this.getUint32()) : (e = this.getUint32(), t = this.getUint32()), 2147483648 & e ? (e = 4294967295 & ~e, t = 4294967295 & ~t, 4294967295 === t && (e = e + 1 & 4294967295), t = t + 1 & 4294967295, -(4294967296 * e + t)) : 4294967296 * e + t
    }

    getInt64Array(t) {
      const e = [];
      for (let n = 0; n < t; n++) e.push(this.getInt64());
      return e
    }

    getUint64() {
      let t, e;
      return this.littleEndian ? (t = this.getUint32(), e = this.getUint32()) : (e = this.getUint32(), t = this.getUint32()), 4294967296 * e + t
    }

    getFloat32() {
      const t = this.dv.getFloat32(this.offset, this.littleEndian);
      return this.offset += 4, t
    }

    getFloat32Array(t) {
      const e = [];
      for (let n = 0; n < t; n++) e.push(this.getFloat32());
      return e
    }

    getFloat64() {
      const t = this.dv.getFloat64(this.offset, this.littleEndian);
      return this.offset += 8, t
    }

    getFloat64Array(t) {
      const e = [];
      for (let n = 0; n < t; n++) e.push(this.getFloat64());
      return e
    }

    getArrayBuffer(t) {
      const e = this.dv.buffer.slice(this.offset, this.offset + t);
      return this.offset += t, e
    }

    getString(t) {
      let e = [];
      for (let n = 0; n < t; n++) e[n] = this.getUint8();
      const n = e.indexOf(0);
      return n >= 0 && (e = e.slice(0, n)), ul.decodeText(new Uint8Array(e))
    }
  }

  class Su {
    add(t, e) {
      this[t] = e
    }
  }

  function Eu(t) {
    const e = t.match(/FBXVersion: (\d+)/);
    if (e) return parseInt(e[1]);
    throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")
  }

  function Tu(t) {
    return t / 46186158e3
  }

  const Lu = [];

  function Au(t, e, n, i) {
    let r;
    switch (i.mappingType) {
      case"ByPolygonVertex":
        r = t;
        break;
      case"ByPolygon":
        r = e;
        break;
      case"ByVertice":
        r = n;
        break;
      case"AllSame":
        r = i.indices[0];
        break;
      default:
        console.warn("THREE.FBXLoader: unknown attribute mapping type " + i.mappingType)
    }
    "IndexToDirect" === i.referenceType && (r = i.indices[r]);
    const s = r * i.dataSize, a = s + i.dataSize;
    return function (t, e, n, i) {
      for (let r = n, s = 0; r < i; r++, s++) t[s] = e[r];
      return t
    }(Lu, i.buffer, s, a)
  }

  const Cu = new Zt, Pu = new lt;

  function Ru(t) {
    const e = new kt, n = new kt, i = new kt, r = new kt, s = new kt, a = new kt, o = new kt, l = new kt, c = new kt,
        h = new kt, u = new kt, d = new kt, p = t.inheritType ? t.inheritType : 0;
    if (t.translation && e.setPosition(Pu.fromArray(t.translation)), t.preRotation) {
      const e = t.preRotation.map(Z.degToRad);
      e.push(t.eulerOrder), n.makeRotationFromEuler(Cu.fromArray(e))
    }
    if (t.rotation) {
      const e = t.rotation.map(Z.degToRad);
      e.push(t.eulerOrder), i.makeRotationFromEuler(Cu.fromArray(e))
    }
    if (t.postRotation) {
      const e = t.postRotation.map(Z.degToRad);
      e.push(t.eulerOrder), r.makeRotationFromEuler(Cu.fromArray(e)), r.invert()
    }
    t.scale && s.scale(Pu.fromArray(t.scale)), t.scalingOffset && o.setPosition(Pu.fromArray(t.scalingOffset)), t.scalingPivot && a.setPosition(Pu.fromArray(t.scalingPivot)), t.rotationOffset && l.setPosition(Pu.fromArray(t.rotationOffset)), t.rotationPivot && c.setPosition(Pu.fromArray(t.rotationPivot)), t.parentMatrixWorld && (u.copy(t.parentMatrix), h.copy(t.parentMatrixWorld));
    const m = (new kt).copy(n).multiply(i).multiply(r), f = new kt;
    f.extractRotation(h);
    const g = new kt;
    g.copyPosition(h);
    const v = new kt, y = (new kt).copy(g).invert().multiply(h);
    v.copy(f).invert().multiply(y);
    const x = s, _ = new kt;
    if (0 === p) _.copy(f).multiply(m).multiply(v).multiply(x); else if (1 === p) _.copy(f).multiply(v).multiply(m).multiply(x); else {
      const t = (new kt).scale((new lt).setFromMatrixScale(u)), e = (new kt).copy(t).invert(),
          n = (new kt).copy(v).multiply(e);
      _.copy(f).multiply(m).multiply(n).multiply(x)
    }
    const w = new kt;
    w.copy(c).invert();
    const b = new kt;
    b.copy(a).invert();
    let M = new kt;
    M.copy(e).multiply(l).multiply(c).multiply(n).multiply(i).multiply(r).multiply(w).multiply(o).multiply(a).multiply(s).multiply(b);
    const S = (new kt).copyPosition(M), E = (new kt).copy(h).multiply(S);
    return d.copyPosition(E), M = (new kt).copy(d).multiply(_), M.premultiply(h.invert()), M
  }

  function Iu(t) {
    const e = ["ZYX", "YZX", "XZY", "ZXY", "YXZ", "XYZ"];
    return 6 === (t = t || 0) ? (console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."), e[0]) : e[t]
  }

  function Du(t) {
    return t.split(",").map((function (t) {
      return parseFloat(t)
    }))
  }

  function Nu(t, e, n) {
    return void 0 === e && (e = 0), void 0 === n && (n = t.byteLength), ul.decodeText(new Uint8Array(t, e, n))
  }

  function zu(t, e, n) {
    return t.slice(0, e).concat(n).concat(t.slice(e))
  }

  let Ou = document.getElementById("lengthRange"), Bu = document.getElementById("lengthNumber"),
      Fu = document.getElementById("widthRange"), ku = document.getElementById("widthNumber"),
      Uu = document.getElementById("heightRange"), Hu = document.getElementById("heightNumber"),
      Gu = document.getElementById("altitudeRange"), Vu = document.getElementById("altitudeNumber"),
      Wu = document.getElementById("uniformScale"), ju = ["length", "width", "height", "altitude"], Xu = !0;

  function Yu(t) {
    if (!t) return;
    let e = qu(t);
    e = e.multiply(t.scale), Ou.value = 1e3 * e.x, Bu.value = Ou.value, Fu.value = 1e3 * e.z, ku.value = Fu.value, Uu.value = 1e3 * e.y, Hu.value = Uu.value, Gu.value = 1e3 * t.position.y, Vu.value = Gu.value
  }

  function qu(t) {
    let e;
    if (t.children.length > 0 && (e = t.children[0].geometry), !e) return;
    let n = e.boundingBox, i = new lt;
    return n.getSize(i), i
  }

  function Zu(t, e) {
    let n = wp.sceneClass.transformControls.object;
    if (n) {
      e && pd("altitude" === t ? "translate" : "scale", n, !0);
      let i = qu(n);
      if (Wu.checked) {
        let e;
        switch (t) {
          case"length":
            e = Ou.value / n.scale.x / i.x / 1e3, n.scale.multiplyScalar(e);
            break;
          case"width":
            e = Fu.value / n.scale.z / i.z / 1e3, n.scale.multiplyScalar(e);
            break;
          case"height":
            e = Uu.value / n.scale.y / i.y / 1e3, n.scale.multiplyScalar(e);
            break;
          case"altitude":
            n.position.y = Gu.value / 1e3
        }
        Yu(n)
      } else switch (t) {
        case"length":
          n.scale.x = Ou.value / i.x / 1e3;
          break;
        case"width":
          n.scale.z = Fu.value / i.z / 1e3;
          break;
        case"height":
          n.scale.y = Uu.value / i.y / 1e3;
          break;
        case"altitude":
          n.position.y = Gu.value / 1e3
      }
      e && pd("altitude" === t ? "translate" : "scale", n, !1)
    }
  }

  let Ju = null;

  function Qu(t, e) {
    if (!e) return null;
    const n = new J;
    n.x = (t.clientX - wp.container.offsetLeft) / wp.container.offsetWidth * 2 - 1, n.y = -(t.clientY - wp.container.offsetTop) / wp.container.offsetHeight * 2 + 1, wp.raycaster.setFromCamera(n, wp.sceneClass.camera);
    let i = wp.raycaster.intersectObjects(e, !0);
    for (let t of i) if (t.object.visible) return t;
    return null
  }

  function Ku(t) {
    const e = new J;
    return e.x = (t.clientX - wp.container.offsetLeft) / wp.container.offsetWidth * 2 - 1, e.y = -(t.clientY - wp.container.offsetTop) / wp.container.offsetHeight * 2 + 1, wp.raycaster.setFromCamera(e, wp.sceneClass.camera), wp.raycaster.intersectObject(wp.sceneClass.plane)[0].point
  }

  function $u() {
    return bp.isMainScene() ? wp.sceneClass.getGroups() : bp.fatherGroup.children.filter((t => t instanceof ds && !1 === t.model.isOuterModel))
  }

  function td(t) {
    let e = Qu(t, $u());
    e ? (bp.isMainScene() ? e.object.traverseAncestors((t => {
      t.parent instanceof _s && (Ju = t)
    })) : Ju = e.object.parent ? e.object.parent : e.object, wp.sceneClass.boxhelper.setFromObject(Ju), wp.sceneClass.boxhelper.visible = !0) : (Ju = null, wp.sceneClass.boxhelper.visible = !1)
  }

  function ed(t) {
    if (1 === t.buttons) {
      if (wp.sceneClass.transformControls.dragging) return;
      Ju ? (wp.sceneClass.transformControls.attach(Ju), Yu(Ju)) : wp.sceneClass.transformControls.dragging || wp.sceneClass.transformControls.detach()
    }
  }

  function nd(t) {
    let e = wp.sceneClass;
    if (e.boxhelper.visible = !1, e.transformControls.detach(), bp.isMainScene()) {
      let n = $u().findIndex((e => e === t));
      n > -1 && e.models.splice(n, 1), e.scene.remove(t)
    } else bp.fatherGroup.remove(t)
  }

  function id() {
    if (Ju) {
      wp.sceneClass.transformControls.detach(), wp.sceneClass.boxhelper.visible = !1;
      let t = Ju.model;
      bp.enterModel(t), document.removeEventListener("dblclick", id), pd("enter", Ju), Ju = null
    }
  }

  function rd(t) {
    let e = _d(t.name), n = {
      name: e.name,
      url: e.url,
      position: t.position,
      rotation: t.rotation,
      scale: t.scale,
      relativePosition: e.relativePosition,
      relativeRotation: e.relativeRotation
    };
    return new xd(n)
  }

  function sd() {
    let t = document.getElementsByClassName("js-loading")[0];
    addClass(t, "show");
    let e, n = document.getElementsByClassName("dialog-upload-input")[0].value,
        i = wp.sceneClass.getGroups().map((t => {
          let e = t.children.filter((t => t instanceof ds && !1 === t.model.isOuterModel)).map((t => ({
            name: t.model.name,
            position: t.position,
            rotation: t.rotation.toVector3(),
            scale: t.scale
          })));
          return {
            name: t.model.name,
            position: t.position,
            rotation: t.rotation.toVector3(),
            scale: t.scale,
            innerModels: e
          }
        })), r = {name: wp.sceneClass.name, models: i}, s = JSON.stringify(r);
    try {
      e = new File([s], `${n}.json`, {type: "text/plain;charset=utf-8"})
    } catch (t) {
      e = new Blob([s], {type: "text/plain;charset=utf-8"})
    }
    let a = new XMLHttpRequest, o = new FormData;
    o.append("model", e), o.append("fileName", n), o.append("img", od(), `${n}.png`), a.open("post", "http://remote.mofang723.cn:2022/3d-module-platform/file/upload", !0), a.onload = function () {
      console.log(a.responseText)
    }, a.send(o), a.onreadystatechange = function () {
      let e = JSON.parse(a.responseText);
      removeClass(t, "show"), 200 === e.code ? (removeClass(document.getElementsByClassName("js-dialog-save")[0], "show"), alert("上传成功")) : console.log(e.message || "上传失败")
    }
  }

  function ad(t) {
    (new Uo).load(t, (function (t) {
      let e = JSON.parse(t), n = op(e.name);
      wp.sceneClass = new ap(n), e.models.forEach((t => {
        let e = rd(t);
        e.loadFBX(!0).then((() => {
          t.innerModels.length > 0 && t.innerModels.forEach((t => {
            let n = rd(t);
            n.loadFBX(!1).then((() => {
              n.isOuterModel = !1, e.group.attach(n.group), n.group.position.copy(t.position), n.group.rotation.setFromVector3(t.rotation), n.group.scale.copy(t.scale)
            }))
          }))
        }))
      }))
    }))
  }

  function od() {
    bp.isMainScene() || bp.backScene();
    let t = op("init").cameraProperty;
    wp.sceneClass.camera.position.copy(t.position), wp.sceneClass.camera.rotation.setFromVector3(t.rotation);
    let e = new Image;
    wp.render(), e.src = wp.renderer.domElement.toDataURL("image/png");
    for (var n = e.src.split(","), i = n[0].match(/:(.*?);/)[1], r = atob(n[1]), s = r.length, a = new Uint8Array(s); s--;) a[s] = r.charCodeAt(s);
    return new Blob([a], {type: i})
  }

  let ld = [], cd = 0, hd = new lt, ud = new lt, dd = new lt;

  function pd(t, e, n = !1) {
    if (n) switch (t) {
      case"translate":
        hd = e.position.clone();
        break;
      case"rotate":
        ud = e.rotation.clone();
        break;
      case"scale":
        dd = e.scale.clone()
    } else {
      switch (cd !== ld.length && ld.splice(cd), t) {
        case"translate":
          if (hd.equals(e.position.clone())) return;
          ld[cd] = {type: "translate", group: e, fromPosition: hd, toPosition: e.position.clone()};
          break;
        case"rotate":
          if (ud.equals(e.rotation.clone())) return;
          ld[cd] = {type: "rotate", group: e, fromRotation: ud, toRotation: e.rotation.clone()};
          break;
        case"scale":
          if (dd.equals(e.scale.clone())) return;
          ld[cd] = {type: "scale", group: e, fromScale: dd, toScale: e.scale.clone()};
          break;
        case"add":
          ld[cd] = {type: "add", sceneClass: wp.sceneClass, group: e};
          break;
        case"delete":
          ld[cd] = {type: "delete", sceneClass: wp.sceneClass, group: e};
          break;
        case"enter":
          ld[cd] = {type: "enter", group: e};
          break;
        case"out":
          ld[cd] = {type: "out", group: e}
      }
      cd++, vd()
    }
  }

  function md() {
    cd--, vd();
    const t = ld[cd];
    switch (t.type) {
      case"translate":
        t.group.position.copy(t.fromPosition), Yu(t.group);
        break;
      case"rotate":
        t.group.rotation.copy(t.fromRotation);
        break;
      case"scale":
        t.group.scale.copy(t.fromScale), Yu(t.group);
        break;
      case"add":
        nd(t.group);
        break;
      case"delete":
        bp.isMainScene() ? (t.sceneClass.models.push(t.group.model), t.sceneClass.scene.add(t.group)) : bp.addGroup(t.group);
        break;
      case"enter":
        bp.backScene();
        break;
      case"out":
        bp.enterModel(t.group.model)
    }
  }

  function fd() {
    const t = ld[cd];
    switch (t.type) {
      case"translate":
        t.group.position.copy(t.toPosition), Yu(t.group);
        break;
      case"rotate":
        t.group.rotation.copy(t.toRotation);
        break;
      case"scale":
        t.group.scale.copy(t.toScale), Yu(t.group);
        break;
      case"add":
        bp.isMainScene() ? (t.sceneClass.models.push(t.group.model), t.sceneClass.scene.add(t.group)) : bp.addGroup(t.group);
        break;
      case"delete":
        nd(t.group);
        break;
      case"enter":
        bp.enterModel(t.group.model);
        break;
      case"out":
        bp.backScene()
    }
    cd++, vd()
  }

  function gd() {
    bp.backScene();
    let t = wp.sceneClass;
    t.transformControls.detach(), t.boxhelper.visible = !1, t.models.forEach((e => t.scene.remove(e.group))), t.models = [], ld = [], cd = 0, vd()
  }

  function vd() {
    document.getElementById("undo").disabled = 0 === cd, document.getElementById("redo").disabled = cd === ld.length
  }

  function yd(t) {
    let e = wp.sceneClass.transformControls.object;
    e && e.traverse((e => {
      e instanceof un && e.name === t && (e.visible = !e.visible)
    }))
  }

  class xd {
    constructor(t) {
      this.name = t.name, this.url = t.url, this.position = t.position ? t.position : new lt, this.rotation = t.rotation ? t.rotation : new lt, this.scale = t.scale ? t.scale : new lt(1, 1, 1), this.relativePosition = t.relativePosition ? t.relativePosition : new lt, this.relativeRotation = t.relativeRotation ? t.relativeRotation : new lt, this.isOuterModel = !0, this.group = null
    }

    loadFBX(t = !0) {
      const e = this, n = new vu;
      return n.setPath("Model/"), n.setResourcePath("Model/texture/"), $("#modelName").show().text(this.name), new Promise(((i, r) => {
        n.load(e.url, (function (n) {
          n.castShadow = !0, n.receiveShadow = !0, e.group = n, e.group.model = e, n.name = e.name, t && (wp.sceneClass.models.push(e), n.position.copy(e.position), n.rotation.setFromVector3(e.rotation), n.scale.copy(e.scale)), wp.sceneClass.scene.add(n), $("#modelName").hide(), $("#modelLoading").hide(), i()
        }), (t => $("#modelLoading").show().attr("value", t.loaded / t.total * 100)), (t => r(t)))
      }))
    }
  }

  function _d(t) {
    for (let e of wp.allModelsData) if (e.name === t) return e
  }

  let wd = null, bd = null, Md = null;

  function Sd(t) {
    Ed();
    let e = _d(t);
    e && (bd = new xd(e), Md = [wp.sceneClass.plane], bp.isMainScene() || (wp.sceneClass.sceneModel && Md.push(wp.sceneClass.sceneModel.group), Md = Md.concat(wp.sceneClass.getGroups())), wp.sceneClass.orbitControl.enabled = !1, bd.loadFBX(bp.isMainScene()).then((() => {
      wd = bd.group, wp.sceneClass.boxhelper.setFromObject(wd), wp.sceneClass.boxhelper.visible = !0, bd.isOuterModel = bp.isMainScene(), bd.isOuterModel || wd.position.copy(bp.fatherGroup.position), document.getElementById("scene").removeEventListener("pointermove", td), document.getElementById("scene").addEventListener("mousemove", Td), document.getElementById("scene").addEventListener("pointerdown", Ld)
    })).catch((t => console.error(t))))
  }

  function Ed() {
    wp.sceneClass.transformControls.detach(), wd && (wp.sceneClass.boxhelper.visible = !1, bp.isMainScene() && wp.sceneClass.models.pop(), wp.sceneClass.scene.remove(wd), document.getElementById("scene").removeEventListener("mousemove", Td), document.getElementById("scene").removeEventListener("pointerdown", Ld))
  }

  function Td(t) {
    let e = Qu(t, Md);
    e && wd && (wd.position.copy(e.point), wp.sceneClass.boxhelper.setFromObject(wd))
  }

  function Ld(t) {
    document.getElementById("scene").addEventListener("pointermove", td), 1 === t.buttons && (pd("add", wd, !1), bp.isMainScene() || bp.fatherGroup.attach(wd), wp.sceneClass.transformControls.attach(wd), document.getElementById("scene").removeEventListener("mousemove", Td), document.getElementById("scene").removeEventListener("pointerdown", Ld)), 2 === t.buttons && Ed(), wd = null, wp.sceneClass.orbitControl.enabled = !0
  }

  const Ad = new Ll, Cd = new lt, Pd = new lt, Rd = new ot,
      Id = {X: new lt(1, 0, 0), Y: new lt(0, 1, 0), Z: new lt(0, 0, 1)}, Dd = {type: "change"},
      Nd = {type: "mouseDown"}, zd = {type: "mouseUp", mode: null}, Od = {type: "objectChange"};

  class Bd extends he {
    constructor(t, e) {
      super(), void 0 === e && (console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'), e = document), this.visible = !1, this.domElement = e, this.domElement.style.touchAction = "none";
      const n = new rp;
      this._gizmo = n, this.add(n);
      const i = new sp;
      this._plane = i, this.add(i);
      const r = this;

      function s(t, e) {
        let s = e;
        Object.defineProperty(r, t, {
          get: function () {
            return void 0 !== s ? s : e
          }, set: function (e) {
            s !== e && (s = e, i[t] = e, n[t] = e, r.dispatchEvent({
              type: t + "-changed",
              value: e
            }), r.dispatchEvent(Dd))
          }
        }), r[t] = e, i[t] = e, n[t] = e
      }

      s("camera", t), s("object", void 0), s("enabled", !0), s("axis", null), s("mode", "translate"), s("translationSnap", null), s("rotationSnap", null), s("scaleSnap", null), s("space", "world"), s("size", 1), s("dragging", !1), s("showX", !0), s("showY", !0), s("showZ", !0);
      const a = new lt, o = new lt, l = new ot, c = new ot, h = new lt, u = new ot, d = new lt, p = new lt, m = new lt,
          f = new lt;
      s("worldPosition", a), s("worldPositionStart", o), s("worldQuaternion", l), s("worldQuaternionStart", c), s("cameraPosition", h), s("cameraQuaternion", u), s("pointStart", d), s("pointEnd", p), s("rotationAxis", m), s("rotationAngle", 0), s("eye", f), this._offset = new lt, this._startNorm = new lt, this._endNorm = new lt, this._cameraScale = new lt, this._parentPosition = new lt, this._parentQuaternion = new ot, this._parentQuaternionInv = new ot, this._parentScale = new lt, this._worldScaleStart = new lt, this._worldQuaternionInv = new ot, this._worldScale = new lt, this._positionStart = new lt, this._quaternionStart = new ot, this._scaleStart = new lt, this._getPointer = Fd.bind(this), this._onPointerDown = Ud.bind(this), this._onPointerHover = kd.bind(this), this._onPointerMove = Hd.bind(this), this._onPointerUp = Gd.bind(this), this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointermove", this._onPointerHover), this.domElement.addEventListener("pointerup", this._onPointerUp)
    }

    updateMatrixWorld() {
      void 0 !== this.object && (this.object.updateMatrixWorld(), null === this.object.parent ? console.error("TransformControls: The attached 3D object must be a part of the scene graph.") : this.object.parent.matrixWorld.decompose(this._parentPosition, this._parentQuaternion, this._parentScale), this.object.matrixWorld.decompose(this.worldPosition, this.worldQuaternion, this._worldScale), this._parentQuaternionInv.copy(this._parentQuaternion).invert(), this._worldQuaternionInv.copy(this.worldQuaternion).invert()), this.camera.updateMatrixWorld(), this.camera.matrixWorld.decompose(this.cameraPosition, this.cameraQuaternion, this._cameraScale), this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(), super.updateMatrixWorld(this)
    }

    pointerHover(t) {
      if (void 0 === this.object || !0 === this.dragging) return;
      Ad.setFromCamera(t, this.camera);
      const e = Vd(this._gizmo.picker[this.mode], Ad);
      this.axis = e ? e.object.name : null
    }

    pointerDown(t) {
      if (void 0 !== this.object && !0 !== this.dragging && 0 === t.button && null !== this.axis) {
        Ad.setFromCamera(t, this.camera);
        const e = Vd(this._plane, Ad, !0);
        if (e) {
          let t = this.space;
          if ("scale" === this.mode ? t = "local" : "E" !== this.axis && "XYZE" !== this.axis && "XYZ" !== this.axis || (t = "world"), "local" === t && "rotate" === this.mode) {
            const t = this.rotationSnap;
            "X" === this.axis && t && (this.object.rotation.x = Math.round(this.object.rotation.x / t) * t), "Y" === this.axis && t && (this.object.rotation.y = Math.round(this.object.rotation.y / t) * t), "Z" === this.axis && t && (this.object.rotation.z = Math.round(this.object.rotation.z / t) * t)
          }
          this.object.updateMatrixWorld(), this.object.parent.updateMatrixWorld(), this._positionStart.copy(this.object.position), this._quaternionStart.copy(this.object.quaternion), this._scaleStart.copy(this.object.scale), this.object.matrixWorld.decompose(this.worldPositionStart, this.worldQuaternionStart, this._worldScaleStart), this.pointStart.copy(e.point).sub(this.worldPositionStart)
        }
        this.dragging = !0, Nd.mode = this.mode, this.dispatchEvent(Nd)
      }
    }

    pointerMove(t) {
      const e = this.axis, n = this.mode, i = this.object;
      let r = this.space;
      if ("scale" === n ? r = "local" : "E" !== e && "XYZE" !== e && "XYZ" !== e || (r = "world"), void 0 === i || null === e || !1 === this.dragging || -1 !== t.button) return;
      Ad.setFromCamera(t, this.camera);
      const s = Vd(this._plane, Ad, !0);
      if (s) {
        if (this.pointEnd.copy(s.point).sub(this.worldPositionStart), "translate" === n) this._offset.copy(this.pointEnd).sub(this.pointStart), "local" === r && "XYZ" !== e && this._offset.applyQuaternion(this._worldQuaternionInv), -1 === e.indexOf("X") && (this._offset.x = 0), -1 === e.indexOf("Y") && (this._offset.y = 0), -1 === e.indexOf("Z") && (this._offset.z = 0), "local" === r && "XYZ" !== e ? this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale) : this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale), i.position.copy(this._offset).add(this._positionStart), this.translationSnap && ("local" === r && (i.position.applyQuaternion(Rd.copy(this._quaternionStart).invert()), -1 !== e.search("X") && (i.position.x = Math.round(i.position.x / this.translationSnap) * this.translationSnap), -1 !== e.search("Y") && (i.position.y = Math.round(i.position.y / this.translationSnap) * this.translationSnap), -1 !== e.search("Z") && (i.position.z = Math.round(i.position.z / this.translationSnap) * this.translationSnap), i.position.applyQuaternion(this._quaternionStart)), "world" === r && (i.parent && i.position.add(Cd.setFromMatrixPosition(i.parent.matrixWorld)), -1 !== e.search("X") && (i.position.x = Math.round(i.position.x / this.translationSnap) * this.translationSnap), -1 !== e.search("Y") && (i.position.y = Math.round(i.position.y / this.translationSnap) * this.translationSnap), -1 !== e.search("Z") && (i.position.z = Math.round(i.position.z / this.translationSnap) * this.translationSnap), i.parent && i.position.sub(Cd.setFromMatrixPosition(i.parent.matrixWorld)))); else if ("scale" === n) {
          if (-1 !== e.search("XYZ")) {
            let t = this.pointEnd.length() / this.pointStart.length();
            this.pointEnd.dot(this.pointStart) < 0 && (t *= -1), Pd.set(t, t, t)
          } else Cd.copy(this.pointStart), Pd.copy(this.pointEnd), Cd.applyQuaternion(this._worldQuaternionInv), Pd.applyQuaternion(this._worldQuaternionInv), Pd.divide(Cd), -1 === e.search("X") && (Pd.x = 1), -1 === e.search("Y") && (Pd.y = 1), -1 === e.search("Z") && (Pd.z = 1);
          i.scale.copy(this._scaleStart).multiply(Pd), this.scaleSnap && (-1 !== e.search("X") && (i.scale.x = Math.round(i.scale.x / this.scaleSnap) * this.scaleSnap || this.scaleSnap), -1 !== e.search("Y") && (i.scale.y = Math.round(i.scale.y / this.scaleSnap) * this.scaleSnap || this.scaleSnap), -1 !== e.search("Z") && (i.scale.z = Math.round(i.scale.z / this.scaleSnap) * this.scaleSnap || this.scaleSnap))
        } else if ("rotate" === n) {
          this._offset.copy(this.pointEnd).sub(this.pointStart);
          const t = 20 / this.worldPosition.distanceTo(Cd.setFromMatrixPosition(this.camera.matrixWorld));
          "E" === e ? (this.rotationAxis.copy(this.eye), this.rotationAngle = this.pointEnd.angleTo(this.pointStart), this._startNorm.copy(this.pointStart).normalize(), this._endNorm.copy(this.pointEnd).normalize(), this.rotationAngle *= this._endNorm.cross(this._startNorm).dot(this.eye) < 0 ? 1 : -1) : "XYZE" === e ? (this.rotationAxis.copy(this._offset).cross(this.eye).normalize(), this.rotationAngle = this._offset.dot(Cd.copy(this.rotationAxis).cross(this.eye)) * t) : "X" !== e && "Y" !== e && "Z" !== e || (this.rotationAxis.copy(Id[e]), Cd.copy(Id[e]), "local" === r && Cd.applyQuaternion(this.worldQuaternion), this.rotationAngle = this._offset.dot(Cd.cross(this.eye).normalize()) * t), this.rotationSnap && (this.rotationAngle = Math.round(this.rotationAngle / this.rotationSnap) * this.rotationSnap), "local" === r && "E" !== e && "XYZE" !== e ? (i.quaternion.copy(this._quaternionStart), i.quaternion.multiply(Rd.setFromAxisAngle(this.rotationAxis, this.rotationAngle)).normalize()) : (this.rotationAxis.applyQuaternion(this._parentQuaternionInv), i.quaternion.copy(Rd.setFromAxisAngle(this.rotationAxis, this.rotationAngle)), i.quaternion.multiply(this._quaternionStart).normalize())
        }
        this.dispatchEvent(Dd), this.dispatchEvent(Od)
      }
    }

    pointerUp(t) {
      0 === t.button && (this.dragging && null !== this.axis && (zd.mode = this.mode, this.dispatchEvent(zd)), this.dragging = !1, this.axis = null)
    }

    dispose() {
      this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.removeEventListener("pointermove", this._onPointerHover), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.traverse((function (t) {
        t.geometry && t.geometry.dispose(), t.material && t.material.dispose()
      }))
    }

    attach(t) {
      return this.object = t, this.visible = !0, this
    }

    detach() {
      return this.object = void 0, this.visible = !1, this.axis = null, this
    }

    getRaycaster() {
      return Ad
    }

    getMode() {
      return this.mode
    }

    setMode(t) {
      this.mode = t
    }

    setTranslationSnap(t) {
      this.translationSnap = t
    }

    setRotationSnap(t) {
      this.rotationSnap = t
    }

    setScaleSnap(t) {
      this.scaleSnap = t
    }

    setSize(t) {
      this.size = t
    }

    setSpace(t) {
      this.space = t
    }

    update() {
      console.warn("THREE.TransformControls: update function has no more functionality and therefore has been deprecated.")
    }
  }

  function Fd(t) {
    if (this.domElement.ownerDocument.pointerLockElement) return {x: 0, y: 0, button: t.button};
    {
      const e = this.domElement.getBoundingClientRect();
      return {x: (t.clientX - e.left) / e.width * 2 - 1, y: -(t.clientY - e.top) / e.height * 2 + 1, button: t.button}
    }
  }

  function kd(t) {
    if (this.enabled) switch (t.pointerType) {
      case"mouse":
      case"pen":
        this.pointerHover(this._getPointer(t))
    }
  }

  function Ud(t) {
    this.enabled && (this.domElement.setPointerCapture(t.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.pointerHover(this._getPointer(t)), this.pointerDown(this._getPointer(t)))
  }

  function Hd(t) {
    this.enabled && this.pointerMove(this._getPointer(t))
  }

  function Gd(t) {
    this.enabled && (this.domElement.releasePointerCapture(t.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.pointerUp(this._getPointer(t)))
  }

  function Vd(t, e, n) {
    const i = e.intersectObject(t, !0);
    for (let t = 0; t < i.length; t++) if (i[t].object.visible || n) return i[t];
    return !1
  }

  Bd.prototype.isTransformControls = !0;
  const Wd = new Zt, jd = new lt(0, 1, 0), Xd = new lt(0, 0, 0), Yd = new kt, qd = new ot, Zd = new ot, Jd = new lt,
      Qd = new kt, Kd = new lt(1, 0, 0), $d = new lt(0, 1, 0), tp = new lt(0, 0, 1), ep = new lt, np = new lt,
      ip = new lt;

  class rp extends he {
    constructor() {
      super(), this.type = "TransformControlsGizmo";
      const t = new Re({depthTest: !1, depthWrite: !1, fog: !1, toneMapped: !1, transparent: !0}),
          e = new ta({depthTest: !1, depthWrite: !1, fog: !1, toneMapped: !1, transparent: !0}), n = t.clone();
      n.opacity = .15;
      const i = e.clone();
      i.opacity = .5;
      const r = t.clone();
      r.color.setHex(16033974);
      const s = t.clone();
      s.color.setHex(11394985);
      const a = t.clone();
      a.color.setHex(10142453);
      const o = t.clone();
      o.color.setHex(16033974), o.opacity = .5;
      const l = t.clone();
      l.color.setHex(11394985), l.opacity = .5;
      const c = t.clone();
      c.color.setHex(10142453), c.opacity = .5;
      const h = t.clone();
      h.opacity = .25;
      const u = t.clone();
      u.color.setHex(16776960), u.opacity = .25, t.clone().color.setHex(16776960);
      const d = t.clone();
      d.color.setHex(7895160);
      const p = new va(0, .04, .1, 12);
      p.translate(0, .05, 0);
      const m = new pn(.08, .08, .08);
      m.translate(0, .04, 0);
      const f = new Xe;
      f.setAttribute("position", new Be([0, 0, 0, 1, 0, 0], 3));
      const g = new va(.0075, .0075, .5, 3);

      function v(t, e) {
        const n = new vo(t, .0075, 3, 64, e * Math.PI * 2);
        return n.rotateY(Math.PI / 2), n.rotateX(Math.PI / 2), n
      }

      g.translate(0, .25, 0);
      const y = {
        X: [[new un(p, r), [.5, 0, 0], [0, 0, -Math.PI / 2]], [new un(p, r), [-.5, 0, 0], [0, 0, Math.PI / 2]], [new un(g, r), [0, 0, 0], [0, 0, -Math.PI / 2]]],
        Y: [[new un(p, s), [0, .5, 0]], [new un(p, s), [0, -.5, 0], [Math.PI, 0, 0]], [new un(g, s)]],
        Z: [[new un(p, a), [0, 0, .5], [Math.PI / 2, 0, 0]], [new un(p, a), [0, 0, -.5], [-Math.PI / 2, 0, 0]], [new un(g, a), null, [Math.PI / 2, 0, 0]]],
        XYZ: [[new un(new mo(.1, 0), h.clone()), [0, 0, 0]]],
        XY: [[new un(new pn(.15, .15, .01), c.clone()), [.15, .15, 0]]],
        YZ: [[new un(new pn(.15, .15, .01), o.clone()), [0, .15, .15], [0, Math.PI / 2, 0]]],
        XZ: [[new un(new pn(.15, .15, .01), l.clone()), [.15, 0, .15], [-Math.PI / 2, 0, 0]]]
      }, x = {
        X: [[new un(new va(.2, 0, .6, 4), n), [.3, 0, 0], [0, 0, -Math.PI / 2]], [new un(new va(.2, 0, .6, 4), n), [-.3, 0, 0], [0, 0, Math.PI / 2]]],
        Y: [[new un(new va(.2, 0, .6, 4), n), [0, .3, 0]], [new un(new va(.2, 0, .6, 4), n), [0, -.3, 0], [0, 0, Math.PI]]],
        Z: [[new un(new va(.2, 0, .6, 4), n), [0, 0, .3], [Math.PI / 2, 0, 0]], [new un(new va(.2, 0, .6, 4), n), [0, 0, -.3], [-Math.PI / 2, 0, 0]]],
        XYZ: [[new un(new mo(.2, 0), n)]],
        XY: [[new un(new pn(.2, .2, .01), n), [.15, .15, 0]]],
        YZ: [[new un(new pn(.2, .2, .01), n), [0, .15, .15], [0, Math.PI / 2, 0]]],
        XZ: [[new un(new pn(.2, .2, .01), n), [.15, 0, .15], [-Math.PI / 2, 0, 0]]]
      }, _ = {
        START: [[new un(new mo(.01, 2), i), null, null, null, "helper"]],
        END: [[new un(new mo(.01, 2), i), null, null, null, "helper"]],
        DELTA: [[new aa(function () {
          const t = new Xe;
          return t.setAttribute("position", new Be([0, 0, 0, 1, 1, 1], 3)), t
        }(), i), null, null, null, "helper"]],
        X: [[new aa(f, i.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], "helper"]],
        Y: [[new aa(f, i.clone()), [0, -1e3, 0], [0, 0, Math.PI / 2], [1e6, 1, 1], "helper"]],
        Z: [[new aa(f, i.clone()), [0, 0, -1e3], [0, -Math.PI / 2, 0], [1e6, 1, 1], "helper"]]
      }, w = {
        XYZE: [[new un(v(.5, 1), d), null, [0, Math.PI / 2, 0]]],
        X: [[new un(v(.5, .5), r)]],
        Y: [[new un(v(.5, .5), s), null, [0, 0, -Math.PI / 2]]],
        Z: [[new un(v(.5, .5), a), null, [0, Math.PI / 2, 0]]],
        E: [[new un(v(.75, 1), u), null, [0, Math.PI / 2, 0]]]
      }, b = {AXIS: [[new aa(f, i.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], "helper"]]}, M = {
        XYZE: [[new un(new go(.25, 10, 8), n)]],
        X: [[new un(new vo(.5, .1, 4, 24), n), [0, 0, 0], [0, -Math.PI / 2, -Math.PI / 2]]],
        Y: [[new un(new vo(.5, .1, 4, 24), n), [0, 0, 0], [Math.PI / 2, 0, 0]]],
        Z: [[new un(new vo(.5, .1, 4, 24), n), [0, 0, 0], [0, 0, -Math.PI / 2]]],
        E: [[new un(new vo(.75, .1, 2, 24), n)]]
      }, S = {
        X: [[new un(m, r), [.5, 0, 0], [0, 0, -Math.PI / 2]], [new un(g, r), [0, 0, 0], [0, 0, -Math.PI / 2]], [new un(m, r), [-.5, 0, 0], [0, 0, Math.PI / 2]]],
        Y: [[new un(m, s), [0, .5, 0]], [new un(g, s)], [new un(m, s), [0, -.5, 0], [0, 0, Math.PI]]],
        Z: [[new un(m, a), [0, 0, .5], [Math.PI / 2, 0, 0]], [new un(g, a), [0, 0, 0], [Math.PI / 2, 0, 0]], [new un(m, a), [0, 0, -.5], [-Math.PI / 2, 0, 0]]],
        XY: [[new un(new pn(.15, .15, .01), c), [.15, .15, 0]]],
        YZ: [[new un(new pn(.15, .15, .01), o), [0, .15, .15], [0, Math.PI / 2, 0]]],
        XZ: [[new un(new pn(.15, .15, .01), l), [.15, 0, .15], [-Math.PI / 2, 0, 0]]],
        XYZ: [[new un(new pn(.1, .1, .1), h.clone())]]
      }, E = {
        X: [[new un(new va(.2, 0, .6, 4), n), [.3, 0, 0], [0, 0, -Math.PI / 2]], [new un(new va(.2, 0, .6, 4), n), [-.3, 0, 0], [0, 0, Math.PI / 2]]],
        Y: [[new un(new va(.2, 0, .6, 4), n), [0, .3, 0]], [new un(new va(.2, 0, .6, 4), n), [0, -.3, 0], [0, 0, Math.PI]]],
        Z: [[new un(new va(.2, 0, .6, 4), n), [0, 0, .3], [Math.PI / 2, 0, 0]], [new un(new va(.2, 0, .6, 4), n), [0, 0, -.3], [-Math.PI / 2, 0, 0]]],
        XY: [[new un(new pn(.2, .2, .01), n), [.15, .15, 0]]],
        YZ: [[new un(new pn(.2, .2, .01), n), [0, .15, .15], [0, Math.PI / 2, 0]]],
        XZ: [[new un(new pn(.2, .2, .01), n), [.15, 0, .15], [-Math.PI / 2, 0, 0]]],
        XYZ: [[new un(new pn(.2, .2, .2), n), [0, 0, 0]]]
      }, T = {
        X: [[new aa(f, i.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], "helper"]],
        Y: [[new aa(f, i.clone()), [0, -1e3, 0], [0, 0, Math.PI / 2], [1e6, 1, 1], "helper"]],
        Z: [[new aa(f, i.clone()), [0, 0, -1e3], [0, -Math.PI / 2, 0], [1e6, 1, 1], "helper"]]
      };

      function L(t) {
        const e = new he;
        for (const n in t) for (let i = t[n].length; i--;) {
          const r = t[n][i][0].clone(), s = t[n][i][1], a = t[n][i][2], o = t[n][i][3], l = t[n][i][4];
          r.name = n, r.tag = l, s && r.position.set(s[0], s[1], s[2]), a && r.rotation.set(a[0], a[1], a[2]), o && r.scale.set(o[0], o[1], o[2]), r.updateMatrix();
          const c = r.geometry.clone();
          c.applyMatrix4(r.matrix), r.geometry = c, r.renderOrder = 1 / 0, r.position.set(0, 0, 0), r.rotation.set(0, 0, 0), r.scale.set(1, 1, 1), e.add(r)
        }
        return e
      }

      this.gizmo = {}, this.picker = {}, this.helper = {}, this.add(this.gizmo.translate = L(y)), this.add(this.gizmo.rotate = L(w)), this.add(this.gizmo.scale = L(S)), this.add(this.picker.translate = L(x)), this.add(this.picker.rotate = L(M)), this.add(this.picker.scale = L(E)), this.add(this.helper.translate = L(_)), this.add(this.helper.rotate = L(b)), this.add(this.helper.scale = L(T)), this.picker.translate.visible = !1, this.picker.rotate.visible = !1, this.picker.scale.visible = !1
    }

    updateMatrixWorld(t) {
      const e = "local" === ("scale" === this.mode ? "local" : this.space) ? this.worldQuaternion : Zd;
      this.gizmo.translate.visible = "translate" === this.mode, this.gizmo.rotate.visible = "rotate" === this.mode, this.gizmo.scale.visible = "scale" === this.mode, this.helper.translate.visible = "translate" === this.mode, this.helper.rotate.visible = "rotate" === this.mode, this.helper.scale.visible = "scale" === this.mode;
      let n = [];
      n = n.concat(this.picker[this.mode].children), n = n.concat(this.gizmo[this.mode].children), n = n.concat(this.helper[this.mode].children);
      for (let t = 0; t < n.length; t++) {
        const i = n[t];
        let r;
        if (i.visible = !0, i.rotation.set(0, 0, 0), i.position.copy(this.worldPosition), r = this.camera.isOrthographicCamera ? (this.camera.top - this.camera.bottom) / this.camera.zoom : this.worldPosition.distanceTo(this.cameraPosition) * Math.min(1.9 * Math.tan(Math.PI * this.camera.fov / 360) / this.camera.zoom, 7), i.scale.set(1, 1, 1).multiplyScalar(r * this.size / 4), "helper" !== i.tag) {
          if (i.quaternion.copy(e), "translate" === this.mode || "scale" === this.mode) {
            const t = .99, n = .2;
            "X" === i.name && Math.abs(jd.copy(Kd).applyQuaternion(e).dot(this.eye)) > t && (i.scale.set(1e-10, 1e-10, 1e-10), i.visible = !1), "Y" === i.name && Math.abs(jd.copy($d).applyQuaternion(e).dot(this.eye)) > t && (i.scale.set(1e-10, 1e-10, 1e-10), i.visible = !1), "Z" === i.name && Math.abs(jd.copy(tp).applyQuaternion(e).dot(this.eye)) > t && (i.scale.set(1e-10, 1e-10, 1e-10), i.visible = !1), "XY" === i.name && Math.abs(jd.copy(tp).applyQuaternion(e).dot(this.eye)) < n && (i.scale.set(1e-10, 1e-10, 1e-10), i.visible = !1), "YZ" === i.name && Math.abs(jd.copy(Kd).applyQuaternion(e).dot(this.eye)) < n && (i.scale.set(1e-10, 1e-10, 1e-10), i.visible = !1), "XZ" === i.name && Math.abs(jd.copy($d).applyQuaternion(e).dot(this.eye)) < n && (i.scale.set(1e-10, 1e-10, 1e-10), i.visible = !1)
          } else "rotate" === this.mode && (qd.copy(e), jd.copy(this.eye).applyQuaternion(Rd.copy(e).invert()), -1 !== i.name.search("E") && i.quaternion.setFromRotationMatrix(Yd.lookAt(this.eye, Xd, $d)), "X" === i.name && (Rd.setFromAxisAngle(Kd, Math.atan2(-jd.y, jd.z)), Rd.multiplyQuaternions(qd, Rd), i.quaternion.copy(Rd)), "Y" === i.name && (Rd.setFromAxisAngle($d, Math.atan2(jd.x, jd.z)), Rd.multiplyQuaternions(qd, Rd), i.quaternion.copy(Rd)), "Z" === i.name && (Rd.setFromAxisAngle(tp, Math.atan2(jd.y, jd.x)), Rd.multiplyQuaternions(qd, Rd), i.quaternion.copy(Rd)));
          i.visible = i.visible && (-1 === i.name.indexOf("X") || this.showX), i.visible = i.visible && (-1 === i.name.indexOf("Y") || this.showY), i.visible = i.visible && (-1 === i.name.indexOf("Z") || this.showZ), i.visible = i.visible && (-1 === i.name.indexOf("E") || this.showX && this.showY && this.showZ), i.material._color = i.material._color || i.material.color.clone(), i.material._opacity = i.material._opacity || i.material.opacity, i.material.color.copy(i.material._color), i.material.opacity = i.material._opacity, this.enabled && this.axis && (i.name === this.axis || this.axis.split("").some((function (t) {
            return i.name === t
          }))) && (i.material.color.setHex(16053413), i.material.opacity = 1)
        } else i.visible = !1, "AXIS" === i.name ? (i.position.copy(this.worldPositionStart), i.visible = !!this.axis, "X" === this.axis && (Rd.setFromEuler(Wd.set(0, 0, 0)), i.quaternion.copy(e).multiply(Rd), Math.abs(jd.copy(Kd).applyQuaternion(e).dot(this.eye)) > .9 && (i.visible = !1)), "Y" === this.axis && (Rd.setFromEuler(Wd.set(0, 0, Math.PI / 2)), i.quaternion.copy(e).multiply(Rd), Math.abs(jd.copy($d).applyQuaternion(e).dot(this.eye)) > .9 && (i.visible = !1)), "Z" === this.axis && (Rd.setFromEuler(Wd.set(0, Math.PI / 2, 0)), i.quaternion.copy(e).multiply(Rd), Math.abs(jd.copy(tp).applyQuaternion(e).dot(this.eye)) > .9 && (i.visible = !1)), "XYZE" === this.axis && (Rd.setFromEuler(Wd.set(0, Math.PI / 2, 0)), jd.copy(this.rotationAxis), i.quaternion.setFromRotationMatrix(Yd.lookAt(Xd, jd, $d)), i.quaternion.multiply(Rd), i.visible = this.dragging), "E" === this.axis && (i.visible = !1)) : "START" === i.name ? (i.position.copy(this.worldPositionStart), i.visible = this.dragging) : "END" === i.name ? (i.position.copy(this.worldPosition), i.visible = this.dragging) : "DELTA" === i.name ? (i.position.copy(this.worldPositionStart), i.quaternion.copy(this.worldQuaternionStart), Cd.set(1e-10, 1e-10, 1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1), Cd.applyQuaternion(this.worldQuaternionStart.clone().invert()), i.scale.copy(Cd), i.visible = this.dragging) : (i.quaternion.copy(e), this.dragging ? i.position.copy(this.worldPositionStart) : i.position.copy(this.worldPosition), this.axis && (i.visible = -1 !== this.axis.search(i.name)))
      }
      super.updateMatrixWorld(t)
    }
  }

  rp.prototype.isTransformControlsGizmo = !0;

  class sp extends un {
    constructor() {
      super(new Dn(1e5, 1e5, 2, 2), new Re({
        visible: !1,
        wireframe: !0,
        side: 2,
        transparent: !0,
        opacity: .1,
        toneMapped: !1
      })), this.type = "TransformControlsPlane"
    }

    updateMatrixWorld(t) {
      let e = this.space;
      switch (this.position.copy(this.worldPosition), "scale" === this.mode && (e = "local"), ep.copy(Kd).applyQuaternion("local" === e ? this.worldQuaternion : Zd), np.copy($d).applyQuaternion("local" === e ? this.worldQuaternion : Zd), ip.copy(tp).applyQuaternion("local" === e ? this.worldQuaternion : Zd), jd.copy(np), this.mode) {
        case"translate":
        case"scale":
          switch (this.axis) {
            case"X":
              jd.copy(this.eye).cross(ep), Jd.copy(ep).cross(jd);
              break;
            case"Y":
              jd.copy(this.eye).cross(np), Jd.copy(np).cross(jd);
              break;
            case"Z":
              jd.copy(this.eye).cross(ip), Jd.copy(ip).cross(jd);
              break;
            case"XY":
              Jd.copy(ip);
              break;
            case"YZ":
              Jd.copy(ep);
              break;
            case"XZ":
              jd.copy(ip), Jd.copy(np);
              break;
            case"XYZ":
            case"E":
              Jd.set(0, 0, 0)
          }
          break;
        default:
          Jd.set(0, 0, 0)
      }
      0 === Jd.length() ? this.quaternion.copy(this.cameraQuaternion) : (Qd.lookAt(Cd.set(0, 0, 0), Jd, jd), this.quaternion.setFromRotationMatrix(Qd)), super.updateMatrixWorld(t)
    }
  }

  sp.prototype.isTransformControlsPlane = !0;

  class ap {
    constructor(t) {
      this.name = t.name ? t.name : null, this.camera = new xn(50, wp.container.offsetWidth / wp.container.offsetHeight, 1, 1e4), this.camera.position.copy(t.cameraProperty.position), this.camera.rotation.setFromVector3(t.cameraProperty.rotation), this.init(), this.sceneModel = t.sceneModel ? new xd(t.sceneModel) : null, this.sceneModel && this.sceneModel.loadFBX(!0).then((() => this.models = [])), this.models = []
    }

    init() {
      this.scene = new _s, this.scene.background = new Pe(15921906), bp.sceneCamera = this.camera;
      let t = new ll(2236962);
      this.scene.add(t);
      let e = new qo(16777215, 16777215);
      e.position.set(0, 50, 0), this.scene.add(e);
      let n = new Dn(500, 500), i = new un(n, new xo({color: 12434877, depthWrite: !0}));
      i.rotation.x = .5 * -Math.PI, i.receiveShadow = !0, i.castShadow = !0, this.scene.add(i), this.plane = i;
      const r = new Bl(500, 10);
      this.scene.add(r), this.orbitControl = new Wl(this.camera, wp.renderer.domElement), this.boxhelper = new kl(void 0, 16053413), this.boxhelper.visible = !1, this.scene.add(this.boxhelper), this.transformControls = new Bd(this.camera, wp.renderer.domElement), this.transformControls.showY = !1, this.scene.add(this.transformControls), this.addTransListeners(), document.getElementById("scene").addEventListener("pointerdown", ed), document.addEventListener("dblclick", id)
    }

    addTransListeners() {
      const t = this;
      this.transformControls.addEventListener("dragging-changed", (e => {
        this.boxhelper.update(), t.orbitControl.enabled = !e.value, !0 === e.value ? pd(t.transformControls.mode, t.transformControls.object, !0) : pd(t.transformControls.mode, t.transformControls.object, !1)
      })), this.transformControls.addEventListener("change", (() => {
        let t, e;
        "rotate" !== this.transformControls.mode && Yu(this.transformControls.object), e = this.transformControls.object ? this.transformControls.object : bp.isMainScene() ? null : bp.fatherGroup, t = e ? "Model/" + e.model.url.split("/")[0] + "/" + e.name + ".png" : "images/designer/dimian-cad.png", $("#right-menu-top>img").attr("src", t)
      })), this.transformControls.addEventListener("object-changed", (() => {
        this.transformControls.object ? ($(".arg-list").show(), $(".base-args img").attr("src", "images/designer/md-arrow_drop_up@1x.png")) : ($(".arg-list").hide(), $(".base-args img").attr("src", "images/designer/md-arrow_drop_upCopy@1x.png"))
      }))
    }

    getGroups() {
      let t = [];
      return this.models.forEach((e => t.push(e.group))), t
    }
  }

  function op(t) {
    for (let e of wp.allScenesData) if (e.name === t) return e;
    return null
  }

  const lp = new Zt(0, 0, 0, "YXZ"), cp = new lt, hp = {type: "change"}, up = {type: "lock"}, dp = {type: "unlock"},
      pp = Math.PI / 2;

  class mp extends B {
    constructor(t, e) {
      super(), void 0 === e && (console.warn('THREE.PointerLockControls: The second parameter "domElement" is now mandatory.'), e = document.body), this.domElement = e, this.isLocked = !1, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI;
      const n = this;

      function i(e) {
        if (!1 === n.isLocked) return;
        const i = e.movementX || e.mozMovementX || e.webkitMovementX || 0,
            r = e.movementY || e.mozMovementY || e.webkitMovementY || 0;
        lp.setFromQuaternion(t.quaternion), lp.y -= .002 * i, lp.x -= .002 * r, lp.x = Math.max(pp - n.maxPolarAngle, Math.min(pp - n.minPolarAngle, lp.x)), t.quaternion.setFromEuler(lp), n.dispatchEvent(hp)
      }

      function r() {
        n.domElement.ownerDocument.pointerLockElement === n.domElement ? (n.dispatchEvent(up), n.isLocked = !0) : (n.dispatchEvent(dp), n.isLocked = !1)
      }

      function s() {
        console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")
      }

      this.connect = function () {
        n.domElement.ownerDocument.addEventListener("mousemove", i), n.domElement.ownerDocument.addEventListener("pointerlockchange", r), n.domElement.ownerDocument.addEventListener("pointerlockerror", s)
      }, this.disconnect = function () {
        n.domElement.ownerDocument.removeEventListener("mousemove", i), n.domElement.ownerDocument.removeEventListener("pointerlockchange", r), n.domElement.ownerDocument.removeEventListener("pointerlockerror", s)
      }, this.dispose = function () {
        this.disconnect()
      }, this.getObject = function () {
        return t
      }, this.getDirection = function () {
        const e = new lt(0, 0, -1);
        return function (n) {
          return n.copy(e).applyQuaternion(t.quaternion)
        }
      }(), this.moveForward = function (e) {
        cp.setFromMatrixColumn(t.matrix, 0), cp.crossVectors(t.up, cp), t.position.addScaledVector(cp, e)
      }, this.moveRight = function (e) {
        cp.setFromMatrixColumn(t.matrix, 0), t.position.addScaledVector(cp, e)
      }, this.lock = function () {
        this.domElement.requestPointerLock()
      }, this.unlock = function () {
        n.domElement.ownerDocument.exitPointerLock()
      }, this.connect()
    }
  }

  let fp, gp = new lt, vp = .1;

  function yp(t) {
    switch (t.preventDefault(), t.key) {
      case"w":
        gp.z = -vp;
        break;
      case"a":
        gp.x = -vp;
        break;
      case"s":
        gp.z = vp;
        break;
      case"d":
        gp.x = vp
    }
  }

  function xp(t) {
    switch (t.preventDefault(), t.key) {
      case"w":
      case"s":
        gp.z = 0;
        break;
      case"a":
      case"d":
        gp.x = 0
    }
  }

  function _p(t) {
    t.preventDefault(), t.deltaY > 0 && vp > .04 && (vp -= .01), t.deltaY < 0 && vp < .5 && (vp += .01)
  }

  const wp = new class {
    constructor() {
      this.container = document.getElementById("scene"), this.renderer = new vs({antialias: !0}), this.raycaster = new Ll, this.keyStates = {}, this.sceneClass = null, this.allModelsData = [], this.allScenesData = [], this.mode = "standard"
    }

    init() {
      const t = this;
      this.sceneClass = new ap({
        name: "init",
        cameraProperty: {
          fov: 50,
          near: 1,
          far: 5e3,
          position: {x: 7.54, y: 103.53, z: -165.54},
          rotation: {x: -2.62, y: .03, z: 3.12}
        }
      }), bp.sceneCamera = this.sceneClass.camera, function () {
        for (let t of ju) {
          let e = document.getElementById(t + "Range"), n = document.getElementById(t + "Number");
          e.addEventListener("input", (() => {
            let i = wp.sceneClass.transformControls.object;
            n.value = e.value, Xu && (pd("altitude" === t ? "translate" : "scale", i, !0), Xu = !1), Zu(t)
          })), e.addEventListener("change", (() => {
            let e = wp.sceneClass.transformControls.object;
            pd("altitude" === t ? "translate" : "scale", e, !1), Xu = !0
          })), n.addEventListener("change", (() => {
            e.value = n.value, Zu(t, !0)
          }))
        }
      }(), function () {
        fp = new mp(wp.sceneClass.camera, wp.container);
        let t = document.getElementById("roam");
        t.addEventListener("click", (() => {
          wp.sceneClass.transformControls.detach(), fp = new mp(wp.sceneClass.camera, wp.container), fp.lock()
        })), fp.addEventListener("lock", (() => {
          document.getElementById("scene").removeEventListener("pointermove", td), t.disabled = !0, document.addEventListener("keydown", yp), document.addEventListener("keyup", xp), document.addEventListener("wheel", _p, {passive: !1})
        })), fp.addEventListener("unlock", (() => {
          document.getElementById("scene").addEventListener("pointermove", td), t.disabled = !1, document.removeEventListener("keydown", yp), document.removeEventListener("keyup", xp), document.removeEventListener("wheel", _p)
        }))
      }(), this.renderer.setPixelRatio(window.devicePixelRatio), this.renderer.setSize(this.container.offsetWidth, this.container.offsetHeight), this.renderer.shadowMap.enabled = !0, this.container.appendChild(this.renderer.domElement), window.addEventListener("resize", (() => this.onWindowResize(t)), !1), Oo.enabled = !0, this.readAllSceneJson(), this.readAllModelJson()
    }

    readAllModelJson() {
      const t = this;
      (new Uo).load("data.json", (e => t.allModelsData = JSON.parse(e)))
    }

    readAllSceneJson() {
      const t = this;
      (new Uo).load("scene.json", (e => t.allScenesData = JSON.parse(e)))
    }

    onWindowResize(t) {
      t.sceneClass.camera.aspect = t.container.offsetWidth / t.container.offsetHeight, t.sceneClass.camera.updateProjectionMatrix(), t.renderer.setSize(t.container.offsetWidth, t.container.offsetHeight)
    }

    animate() {
      requestAnimationFrame(wp.animate), !0 === fp.isLocked && (fp.getObject().translateZ(gp.z), fp.getObject().translateX(gp.x)), wp.sceneClass.camera.updateProjectionMatrix(), wp.renderer.render(wp.sceneClass.scene, wp.sceneClass.camera)
    }

    render() {
      this.renderer.render(wp.sceneClass.scene, wp.sceneClass.camera)
    }
  }, bp = new class {
    constructor() {
      this.fatherGroup = null, this.sceneCamera = null, this.indoorCamera = new xn(75, wp.container.offsetWidth / wp.container.offsetHeight, .1, 1e3)
    }

    enterModel(t) {
      document.getElementById("returnScene").disabled = !1, this.fatherGroup = t.group;
      let e = t.group.position, n = (new lt).copy(t.relativePosition).multiply(t.group.scale),
          i = t.group.rotation.toVector3(), r = t.relativeRotation;
      this.indoorCamera.position.copy((new lt).addVectors(e, n)), this.indoorCamera.rotation.setFromVector3((new lt).addVectors(i, r)), this.sceneCamera = wp.sceneClass.camera, wp.sceneClass.camera = this.indoorCamera, wp.sceneClass.orbitControl.object = this.indoorCamera, wp.sceneClass.orbitControl.target = this.fatherGroup.position.clone(), wp.sceneClass.orbitControl.panSpeed = .5, wp.sceneClass.orbitControl.rotateSpeed = .5, wp.sceneClass.transformControls.camera = this.indoorCamera
    }

    backScene() {
      document.getElementById("returnScene").disabled = !0, wp.sceneClass.transformControls.detach(), wp.sceneClass.camera = this.sceneCamera, wp.sceneClass.orbitControl.object = this.sceneCamera, wp.sceneClass.orbitControl.target = new lt, wp.sceneClass.orbitControl.panSpeed = 1, wp.sceneClass.orbitControl.rotateSpeed = 1, wp.sceneClass.transformControls.camera = this.sceneCamera, document.addEventListener("dblclick", id)
    }

    isMainScene() {
      return wp.sceneClass.camera === this.sceneCamera
    }

    addGroup(t) {
      let e = t.position.clone(), n = t.rotation.clone(), i = t.scale.clone();
      this.fatherGroup.attach(t), t.position.copy(e), t.rotation.setFromVector3(n), t.scale.copy(i)
    }
  };

  class Mp {
    constructor(t, e) {
      this.position = t, this.mesh = this.getPointMesh(t, e)
    }

    getPointMesh(t, e) {
      e = e || new Pe("rgb(217,88,88)");
      const n = new ga(2, 32), i = new Re({color: e}), r = new un(n, i);
      return r.position.copy(t), r.rotation.setFromVector3(new lt(-.5 * Math.PI, 0, 0)), r
    }

    draw() {
      -1 === wp.sceneClass.scene.children.indexOf(this.mesh) && wp.sceneClass.scene.add(this.mesh)
    }

    delete() {
      wp.sceneClass.scene.children.indexOf(this.mesh) > -1 && wp.sceneClass.scene.remove(this.mesh)
    }
  }

  class Sp {
    constructor(t, e, n) {
      this.start = t, this.end = e, this.mesh = this.getLineMesh(t, e, n)
    }

    getLineMesh(t, e, n) {
      n = n || new Pe("rgb(0,142,214)");
      const i = new Xe, r = new Float32Array([].concat(t.toArray(), e.toArray()));
      i.setAttribute("position", new Ne(r, 3));
      const s = new ta({color: n, side: 2, transparent: !0});
      return new aa(i, s)
    }

    draw() {
      -1 === wp.sceneClass.scene.children.indexOf(this.mesh) && wp.sceneClass.scene.add(this.mesh)
    }

    delete() {
      wp.sceneClass.scene.children.indexOf(this.mesh) > -1 && wp.sceneClass.scene.remove(this.mesh)
    }
  }

  class Ep {
    constructor(...t) {
      this.position = [...t], this.mesh = this.getPlaneMesh(this.position)
    }

    getPlaneMesh(t, e) {
      e = e || new Pe(16776960);
      let n = [], i = [];
      t.forEach((t => {
        i.push(t.x, t.y, t.z)
      }));
      for (let e = 0; e < t.length - 2; e++) n.push(e, e + 1, t.length - 1);
      let r = new Xe;
      r.setIndex(n), r.setAttribute("position", new Be(i, 3));
      let s = new Re({side: 2, color: e, transparent: !0});
      return s.opacity = .5, new un(r, s)
    }

    draw() {
      -1 === wp.sceneClass.scene.children.indexOf(this.mesh) && wp.sceneClass.scene.add(this.mesh)
    }

    delete() {
      wp.sceneClass.scene.children.indexOf(this.mesh) > -1 && wp.sceneClass.scene.remove(this.mesh)
    }
  }

  class Tp {
    constructor(t, e, n, i) {
      this.position = {}, this.pointObj = {}, this.lineObj = {}, this.planeObj = null, this.init(t, e, n, i)
    }

    init(t, e, n, i) {
      this.position = e && i ? {a: t, b: e, c: n, d: i} : this.getAllPosition(t, n);
      let r = this.position;
      for (let t in r) this.pointObj[t] = new Mp(r[t]);
      this.lineObj.ab = new Sp(r.a, r.b), this.lineObj.bc = new Sp(r.b, r.c), this.lineObj.cd = new Sp(r.c, r.d), this.lineObj.da = new Sp(r.d, r.a), this.planeObj = new Ep(r.a, r.b, r.c, r.d)
    }

    getAllPosition(t, e) {
      let n, i, r = new lt(t.x, .1, e.z), s = new lt(e.x, .1, t.z);
      return n = r, i = s, this.getClock(t, e, r) < 0 ? (n = r, i = s) : (i = r, n = s), {a: t, b: n, c: e, d: i}
    }

    getClock(t, e, n) {
      return (e.x - t.x) * (n.z - t.z) - (n.x - t.x) * (e.z - t.z)
    }

    draw(t) {
      if (t) this.planeObj.draw(); else {
        for (const t in this.pointObj) this.pointObj[t].draw();
        for (const t in this.lineObj) this.lineObj[t].draw()
      }
    }

    delete(t) {
      if (t) this.planeObj.delete(); else {
        for (const t in this.pointObj) this.pointObj[t].delete();
        for (const t in this.lineObj) this.lineObj[t].delete()
      }
    }

    isInRect(t) {
      let e = this.position;
      return this.getClock(e.a, e.b, t) * this.getClock(e.c, e.d, t) >= 0 && this.getClock(e.b, e.c, t) * this.getClock(e.d, e.a, t) >= 0
    }
  }

  let Lp, Ap = 0, Cp = [], Pp = [], Rp = [], Ip = null;

  function Dp() {
    "draw" !== wp.mode ? (wp.mode = "draw", document.getElementById("scene").addEventListener("click", Np)) : (wp.mode = "standard", wp.sceneClass.orbitControl.enabled = !0, document.getElementById("scene").removeEventListener("click", Np))
  }

  function Np(t) {
    wp.sceneClass.orbitControl.enabled = !1, Ap++;
    let e = Ku(t);
    e.y += .1;
    let n = new Mp(e);
    n.draw(), Pp.push(n), Cp[Ap] = e, Ap % 2 == 1 ? document.getElementById("scene").addEventListener("pointermove", zp) : (Rp.push(Lp), Pp.forEach((t => {
      t.delete()
    })), Lp = null, document.getElementById("scene").removeEventListener("pointermove", zp))
  }

  function zp(t) {
    Lp && Lp.delete();
    let e = Cp[Ap], n = Ku(t);
    n.y += .1;
    let i = new Tp(e, void 0, n);
    i.draw(), Lp = i
  }

  function Op() {
    "choseRect" !== wp.mode ? ("draw" === wp.mode && document.getElementById("scene").removeEventListener("click", Np), wp.mode = "choseRect", document.getElementById("scene").addEventListener("click", Bp)) : (wp.mode = "standard", wp.sceneClass.orbitControl.enabled = !0, document.getElementById("scene").removeEventListener("click", Bp))
  }

  function Bp(t) {
    let e = Ku(t);
    e.y += .2;
    let n = new Mp(e, 0);
    n.draw(), Rp.forEach((t => {
      t.delete(!0), t.isInRect(e) && (Ip = t, Ip.draw(!0))
    })), setTimeout((() => {
      n.delete()
    }), 500), function () {
      let t = Ip.position, e = Math.abs(t.a.x - t.b.x), n = Math.abs(t.a.z - t.d.z);
      console.log(e + "    h" + n);
      let i = _d("haobangonglou02");
      new xd(i)
    }()
  }

  wp.init(), wp.animate(), function () {
    function t() {
      toggleClass(document.getElementsByClassName("js-dialog-save")[0], "show")
    }

    function e() {
      toggleClass(document.getElementsByClassName("js-dialog-file")[0], "show")
    }

    document.getElementById("hideCeils").addEventListener("click", (() => yd("ding"))), document.getElementById("hideErlou").addEventListener("click", (() => yd("erlou"))), document.getElementById("scene").addEventListener("pointermove", td), document.getElementById("undo").addEventListener("click", md), document.getElementById("redo").addEventListener("click", fd), document.getElementById("clearAll").addEventListener("click", gd), document.getElementById("save_scene").addEventListener("click", t), document.getElementById("load_scene").addEventListener("click", (function () {
      let t = document.getElementsByClassName("js-loading")[0];
      addClass(t, "show");
      let e = new XMLHttpRequest;
      e.open("get", "http://remote.mofang723.cn:2022/3d-module-platform/file/list", !0), e.send(), e.onload = function () {
      }, e.onreadystatechange = function () {
        let n = e.responseText ? JSON.parse(e.responseText) : {};
        if (removeClass(t, "show"), 200 === n.code) {
          addClass(document.getElementsByClassName("js-dialog-file")[0], "show");
          let t = "", e = "http://remote.mofang723.cn:81/3d-module-platform";
          n.data.map((n => {
            n._path = e + n.path, t += `<li class="file-li js-file-read" data-url="${n._path}">\n                    <div class="li-lt">\n                        <img src="./images/icon/file.png" alt="" class="icon">\n                        <span class="name">${n.fileName}</span>\n                    </div>\n                    <div class="li-rt">${n.path}</div>\n                </li>`
          })), document.getElementsByClassName("js-file-conter")[0].innerHTML = t, function () {
            let t = document.getElementsByClassName("js-file-read");
            for (let e = 0; e < t.length; e++) t[e].addEventListener("click", (function (t) {
              console.log(t.currentTarget.getAttribute("data-url")), ad(t.currentTarget.getAttribute("data-url"))
            }))
          }()
        }
      }
    })), document.getElementById("returnScene").addEventListener("click", (function () {
      bp.backScene(), pd("out", bp.fatherGroup)
    })), document.getElementById("screenShot").addEventListener("click", od), document.getElementById("draw").addEventListener("click", Dp), document.getElementById("choseRect").addEventListener("click", Op), document.getElementsByClassName("js-save-overlay")[0].addEventListener("click", t), document.getElementsByClassName("js-save-close")[0].addEventListener("click", t), document.getElementsByClassName("js-save-close")[1].addEventListener("click", t), document.getElementsByClassName("js-save-upload")[0].onclick = sd, document.getElementsByClassName("js-file-overlay")[0].addEventListener("click", e), document.getElementsByClassName("js-file-close")[0].addEventListener("click", e)
  }(), window.addEventListener("keyup", (function () {
    let t = wp.sceneClass.transformControls;
    switch (event.key) {
      case"q":
        t.setSpace("local" === t.space ? "world" : "local");
        break;
      case"w":
        t.setMode("translate");
        break;
      case"e":
        t.setMode("rotate");
        break;
      case"r":
        t.setMode("scale");
        break;
      case"x":
        t.showX = !t.showX;
        break;
      case"y":
        t.showY = !t.showY;
        break;
      case"z":
        t.showZ = !t.showZ;
        break;
      case"Delete":
        let e = t.object;
        e && (pd("delete", e, !1), nd(e))
    }
  })), function () {
    let t = document.getElementById("repertory-content"),
        e = document.getElementsByClassName("repertory-project-scene"),
        n = document.getElementsByClassName("repertory-common-scene"), i = [{
          id: "jianzhu",
          arr: [{id: "haocangku03", src: "Model/jianzhu/haocangku03.png", name: "仓库3"}, {
            id: "fantang01",
            src: "Model/jianzhu/fantang01.png",
            name: "饭堂1"
          }, {id: "haobangonglou02", src: "Model/jianzhu/haobangonglou02.png", name: "办公楼2"}, {
            id: "liangting01",
            src: "Model/jianzhu/liangting01.png",
            name: "凉亭1"
          }, {id: "gongjufang02", src: "Model/jianzhu/gongjufang02.png", name: "工具房2"}, {
            id: "xiaofangshuibengfang01",
            src: "Model/jianzhu/xiaofangshuibengfang01.png",
            name: "消防水泵1"
          }, {id: "haocangku01", src: "Model/jianzhu/haocangku01.png", name: "仓库1"}, {
            id: "haobangonglou01",
            src: "Model/jianzhu/haobangonglou01.png",
            name: "办公楼1"
          }, {id: "haocangku0809", src: "Model/jianzhu/haocangku0809.png", name: "仓库8和9"}, {
            id: "cailanjifang01",
            src: "Model/jianzhu/cailanjifang01.png",
            name: "彩兰机房1"
          }, {id: "gongjufang01", src: "Model/jianzhu/gongjufang01.png", name: "工具房1"}, {
            id: "haocangku0506",
            src: "Model/jianzhu/haocangku0506.png",
            name: "仓库5和6"
          }, {id: "baoanting01", src: "Model/jianzhu/baoanting01.png", name: "保安亭1"}, {
            id: "xiaofangshuichi01",
            src: "Model/jianzhu/xiaofangshuichi01.png",
            name: "消防水池1"
          }]
        }, {
          id: "cangku01",
          arr: [{id: "huojia0001", src: "Model/cangku01/huojia0001.png", name: "货架1"}, {
            id: "huojia0002",
            src: "Model/cangku01/huojia0002.png",
            name: "货架2"
          }, {id: "huowu0001", src: "Model/cangku01/huowu0001.png", name: "货物1"}, {
            id: "AGV0001",
            src: "Model/cangku01/AGV0001.png",
            name: "AGV1"
          }]
        }, {
          id: "cangku03",
          arr: [{
            id: "jingjuhuojia0001",
            src: "Model/cangku03/jingjuhuojia0001.png",
            name: "京剧货架"
          }, {id: "jiqirenfangzi0001", src: "Model/cangku03/jiqirenfangzi0001.png", name: "机器人房子"}, {
            id: "peidiangui0001",
            src: "Model/cangku03/peidiangui0001.png",
            name: "配电柜"
          }]
        }, {
          id: "bangonglou0102",
          arr: [{id: "bingxiang0001", src: "Model/bangonglou0102/bingxiang0001.png", name: "冰箱1"}, {
            id: "dengzi0001",
            src: "Model/bangonglou0102/dengzi0001.png",
            name: "凳子1"
          }, {id: "dengzi0002", src: "Model/bangonglou0102/dengzi0002.png", name: "凳子2"}, {
            id: "guizi0001",
            src: "Model/bangonglou0102/guizi0001.png",
            name: "柜子1"
          }, {id: "guizi0002", src: "Model/bangonglou0102/guizi0002.png", name: "柜子2"}, {
            id: "guizi0003",
            src: "Model/bangonglou0102/guizi0003.png",
            name: "柜子3"
          }, {id: "guizi0004", src: "Model/bangonglou0102/guizi0004.png", name: "柜子4"}, {
            id: "guizi0005",
            src: "Model/bangonglou0102/guizi0005.png",
            name: "柜子5"
          }, {id: "guizi0006", src: "Model/bangonglou0102/guizi0006.png", name: "柜子6"}, {
            id: "guizi0007",
            src: "Model/bangonglou0102/guizi0007.png",
            name: "柜子7"
          }, {id: "guizi0008", src: "Model/bangonglou0102/guizi0008.png", name: "柜子8"}, {
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
          }, {id: "kongtiao0001", src: "Model/bangonglou0102/kongtiao0001.png", name: "空调1"}, {
            id: "shafa0001",
            src: "Model/bangonglou0102/shafa0001.png",
            name: "沙发1"
          }, {id: "shafa0002", src: "Model/bangonglou0102/shafa0002.png", name: "沙发2"}, {
            id: "shafa0003",
            src: "Model/bangonglou0102/shafa0003.png",
            name: "沙发3"
          }, {id: "shafa0004", src: "Model/bangonglou0102/shafa0004.png", name: "沙发4"}, {
            id: "shujia0001",
            src: "Model/bangonglou0102/shujia0001.png",
            name: "书架1"
          }, {id: "shujia0002", src: "Model/bangonglou0102/shujia0002.png", name: "书架2"}, {
            id: "shujia0003",
            src: "Model/bangonglou0102/shujia0003.png",
            name: "书架3"
          }, {id: "xianshiping0001", src: "Model/bangonglou0102/xianshiping0001.png", name: "显示屏1"}, {
            id: "xianshiping0002",
            src: "Model/bangonglou0102/xianshiping0002.png",
            name: "显示屏2"
          }, {id: "xianshiping0003", src: "Model/bangonglou0102/xianshiping0003.png", name: "显示屏3"}, {
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
          }, {id: "zhuozi0001", src: "Model/bangonglou0102/zhuozi0001.png", name: "桌子1"}, {
            id: "zhuozi0002",
            src: "Model/bangonglou0102/zhuozi0002.png",
            name: "桌子2"
          }, {id: "zhuozi0003", src: "Model/bangonglou0102/zhuozi0003.png", name: "桌子3"}, {
            id: "zhuozi0004",
            src: "Model/bangonglou0102/zhuozi0004.png",
            name: "桌子4"
          }, {id: "zhuozi0005", src: "Model/bangonglou0102/zhuozi0005.png", name: "桌子5"}, {
            id: "zhuozi0006",
            src: "Model/bangonglou0102/zhuozi0006.png",
            name: "桌子6"
          }, {id: "zhuozi0007", src: "Model/bangonglou0102/zhuozi0007.png", name: "桌子7"}]
        }, {
          id: "caifengji",
          arr: [{id: "cailanjishebei", src: "Model/caifengji/cailanjishebei.png", name: "彩兰机设备"}]
        }, {
          id: "dianlanhuowu",
          arr: [{id: "dianlan0001", src: "Model/dianlanhuowu/dianlan0001.png", name: "电缆1"}, {
            id: "dianlan0002",
            src: "Model/dianlanhuowu/dianlan0002.png",
            name: "电缆2"
          }, {id: "dianlan0003", src: "Model/dianlanhuowu/dianlan0003.png", name: "电缆3"}]
        }, {
          id: "longmendiao",
          arr: [{id: "longmendiao0001", src: "Model/longmendiao/longmendiao0001.png", name: "龙门吊1"}]
        }, {
          id: "shexiangtou",
          arr: [{id: "shexiangtou0001", src: "Model/shexiangtou/shexiangtou0001.png", name: "摄像头1"}, {
            id: "shexiangtou0002",
            src: "Model/shexiangtou/shexiangtou0002.png",
            name: "摄像头2"
          }, {id: "shexiangtou0003", src: "Model/shexiangtou/shexiangtou0003.png", name: "摄像头3"}]
        }];
    for (let t of i) document.getElementById(t.id).onclick = () => r(t.arr, "common");

    function r(i, r) {
      !function () {
        for (let t of e) t.style.display = "none";
        for (let t of n) t.style.display = "none"
      }();
      let s = [], a = i.length;
      for (let t = 0; t < a; t++) {
        let e = document.createElement("img");
        e.src = i[t].src;
        let n = document.createElement("p");
        n.innerText = i[t].name;
        let a = document.createElement("div");
        a.className = "repertory-" + r + "-item", a.id = i[t].id, a.appendChild(e), a.appendChild(n), a.addEventListener("click", (() => Sd(a.id))), s.push(a)
      }
      for (let e = 0; e < s.length; e++) {
        let n = document.createElement("div");
        n.className = "repertory-" + r + "-row", n.appendChild(s[e]), e + 1 < s.length && n.appendChild(s[++e]), t.appendChild(n)
      }
    }

    function s() {
      let e = document.getElementsByClassName("repertory-project-row");
      if (e) {
        let n = e.length;
        for (; n--;) t.removeChild(e[0])
      }
      let n = document.getElementsByClassName("repertory-common-row");
      if (n) {
        let e = n.length;
        for (; e--;) t.removeChild(n[0])
      }
    }

    document.getElementById("scene1").onclick = function () {
      let t = op("dimian");
      wp.sceneClass = new ap(t)
    }, document.getElementById("project").onclick = function () {
      s();
      for (let t of e) t.style.display = "flex";
      for (let t of n) t.style.display = "none"
    }, document.getElementById("common").onclick = function () {
      s();
      for (let t of e) t.style.display = "none";
      for (let t of n) t.style.display = "flex"
    }
  }()
})();