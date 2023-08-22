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
  if (to.matched.some(record => record.meta.requireAuth)){  // 判断该路由是否需要登录权限
    if(!localStorage.getItem('token')){
      next({
        path: '/',
        //query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }else{
      next();
    }
  }else {
    next();
  }
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
