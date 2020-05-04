import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/mock' //引用mock文件夹的模拟数据

// 全局引用UI组件库
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

Vue.config.productionTip = false

// 根据不同的环境,配置不同的请求域
const commonUrl = process.env.NODE_ENV == 'development' ? 'https://sit.jianxuetang.xyz' : 'https://smartedu.ccb.com'
// 把请求域添加Vue,然后每个组件都可以直接获取它
Vue.prototype.$commonUrl = commonUrl

// //引入配置好的axios
// import axios from './assets/js/axios'
// // 把axios添加到Vue上,然后每个组件中都可以引用这里的axios
// Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
