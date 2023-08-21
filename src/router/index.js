import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Cj from '@/components/Cj'
import Gj from '@/components/Gj'
import Zj from '@/components/Zj'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/cj',
      name: 'Cj',
      component: Cj
    },
    {
      path: '/zj',
      name: 'Zj',
      component: Zj
    },
    {
      path: '/gj',
      name: 'Gj',
      component: Gj
    }
  ]
})
