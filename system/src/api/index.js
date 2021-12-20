// 1.import
import axios from 'axios';
import utils from '@/utils';
import { Message } from 'iview';
// 2.env config
const envConfig = {
  test       : 'http://remote.mofang723.cn:2022/3d-module-platform/',
  production : '',
};
const root = envConfig.test;  // 打包切换环境时这里要改
// 3.settings
// 添加请求拦截器
const src_root = 'http://remote.mofang723.cn:81/3d-module-platform';
axios.interceptors.request.use(function(config){
  utils.deepAssign(config, {
    baseURL : root,
    headers : {
      'Content-Type': 'application/x-www-form-urlencoded',
      // Authorization  : utils.getCookie('token'),
    },
  });
  return config;
}, function(error){
  // 请求前报错
  // console.dir(error);
  return Promise.reject(error);
});
// 添加响应拦截器
axios.interceptors.response.use(function(response){
  const {data : res, data : {code:status, message}} = response;
  // 1 成功，其他失败
  if (status == 200) {
    return res;
  } else {
    if (false) {  // 登录过期的处理
      return;
    } else {  // 其他：统一弹一下错误提示
      Message.error(message);
    }
    // 后端接口处理后返回的失败，reject 出去
    return Promise.reject(response);
  }
}, function(error){
  // console.dir(error);
  // 两种情况 error 字段信息不同，判断处理
  if (error.response) { // 请求已发出，但服务器响应的状态码不在 2xx 范围内
    const {status, error : statusText} = error.response.data;
    Message.error(`${ status }：${ statusText }`);
    return Promise.reject(error.response);  // 同上 reject，返回 response 统一格式
  } else {  // 其他，常用于报 net::ERR_CONNECTION_REFUSED 等情况
    Message.error(error.message);
    /**
     * 可考虑返回 {} 对象格式和 if 中统一格式
     * 由于 catch 方法一般用不上参数，先默认返回 undefined
     * catch 方法中先判断 response 是否 undefined，再详细判断 response 对象
     */
    return Promise.reject();
  }
});
// 4.方法封装
const dataGroup = ['PUT', 'POST', 'PATCH']; // 使用 data 字段传参的类型
const paramsGroup = ['GET'];  // 使用 params 字段传参的类型
function includes(arr, str){
  return arr.map(item => item.trim().toLowerCase()).includes(str);
}
function axiosAsync(method, url, params = {}){
  params = utils.filterParams(params);
  return axios({
    method,
    url,
    data   : includes(dataGroup, method) ? params : {},
    params : includes(paramsGroup, method) ? params : {},
  });
}
const api = {
  root,
  src_root,
  get(url, params){
    return axiosAsync('GET', url, params);
  },
  post(url, params){
    return axiosAsync('POST', url, params);
  },
};
export default {
  ...api,
  install(Vue){
    Object.assign(Vue.prototype, {$api : api});
  },
};
