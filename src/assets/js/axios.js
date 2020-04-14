// 引入axios
import axios from 'axios'

import { Toast, Indicator } from 'mint-ui'

// 引用路由文件
import router from '../../router' 


// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 添加loading
  Indicator.open({
    text: 'Loading...',
    spinnerType: 'fading-circle'
  });
  
  // 添加axios请求的参数默认值
  config.data = config.data || {}
  
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 关闭loading
  Indicator.close();
  
	// 如果token失效，直接跳转到登录页
	// if(response.data.code == -2) router.push('/user/login')

  // 只返回服务器的响应内容，其实就是res.send里的数据
  return response.data;
}, function (err) {
  // 对响应错误做点什么
  if (err && err.response) {
    switch (err.response.status) {
      case 400: err.message = '请求错误(400)'; break;
      case 401: router.push('/login'); break;
      case 403: err.message = '拒绝访问(403)'; break;
      case 404: err.message = '请求出错(404)'; break;
      case 408: err.message = '请求超时(408)'; break;
      case 500: err.message = '服务器错误(500)'; break;
      case 501: err.message = '服务未实现(501)'; break;
      case 502: err.message = '网络错误(502)'; break;
      case 503: err.message = '服务不可用(503)'; break;
      case 504: err.message = '网络超时(504)'; break;
      case 505: err.message = 'HTTP版本不受支持(505)'; break;
      default: err.message = `连接出错(${err.response.status})!`;
    }
  } else {
    err.message = '连接服务器失败!'
  }  
  Toast(err.message)
  return Promise.reject(err);
});

export default axios;