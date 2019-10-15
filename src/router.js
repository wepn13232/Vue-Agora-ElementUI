import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/index/Home.vue'
import login from './views/login/login.vue'
import reg from '@/views/reg/reg.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path:'/register',
      name:'register',
      component:reg
    }
  ]
})
