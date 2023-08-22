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
  if(!localStorage.getItem('token_wx') && to.name != "Login"){
    next({
      replace:true,
      name:'Login'
    });
  }else{
    next();
  }
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
