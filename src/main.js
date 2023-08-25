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

//响应拦截器
axios.interceptors.response.use(response => {
   return response;
}, error => {
  sessionStorage.clear();
  router.push("/")
  Vue.prototype.$message({
    message: '登录异常需重新登录',
    type: 'error'
  });
});

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  token: null,
})
