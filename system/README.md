# xx模块化平台项目
> spa应用VUE项目
> 基于vue2.x、element-ui构建开发
## 主要目录结构(初始化，后续再补充)
```
posPush
├─.gitignore                           git忽略项
├─package.json                         依赖包管理
├─README.md                            说明文档
├─src                                  源代码
|  ├─api                              axios定制
|  ├─utils                            js工具库、常用方法
|  ├─assets                           图片等资源文件
|  ├─components                       共用模块
|  ├─router                           路由控制  
|  ├─store                            状态管理器  
|  ├─styles                           sass
|  |   ├─base                         基础共用样式
|  |   |  ├─mixin.scss                混入      
|  |   |  ├─variable.scss             全局变量样式   
|  |   ├─global                       该项目共用样式
|  |   |  ├─iconfont                  字段文件     
|  |   |  ├─grid.scss                 grid模块       
|  |   |  ├─unit.scss                 unit模块       
|  |   |  ├─function.scss             特殊共用     
|  |   |  ├─reset.scss                样式重置  
|  └─views                            详情看router/index.js 
|  |   ├─404.vue                      404页面  
|  |   ├─Home.vue                     home页面
|  |   └─modules                      模块及页面
           
```

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

