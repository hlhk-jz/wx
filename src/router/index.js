import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Cj from '@/components/Cj'
import Gj from '@/components/Gj'
import Zj from '@/components/Zj'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
