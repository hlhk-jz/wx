// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import common from '@/common/index'
Vue.use(ElementUI);
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.prototype.$api = common
/* eslint-disable no-new */

router.beforeEach((to, from, next) => {
  //当没有token时并且访问不是首页的时候，跳转首页
  if(!sessionStorage.getItem("token_wx") && to.name != "Login"){
    next({
      replace:true,
      name:'Login'
    });
  }else{
    next();
  }
})

//全局发送拦截器设置token
axios.interceptors.request.use(config=>{
  let token = sessionStorage.getItem("token_wx");
  if(token){
    config.headers["token"]=token;
  }
  return config;
})

//全局响应拦截器（处理后端返回的错误码）
/*axios.interceptors.response.use(
  re=>{
    return re
  },
  err=>{
    if(err.response.status===401){
      return Promise.reject("没有登录")
    }
    if(err.response.status===520){
      //跳转到login页面
      router.push("/Login")
      alert("您的账号在别处登录！")
    }
    return Promise.reject("服务器异常")
  }
)*/

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  token: null,
})
