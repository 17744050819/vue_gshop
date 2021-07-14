import Vue from 'vue'
import VueRouter from 'vue-router'
// 底部的路由组件
import Msite from '../pages/Msite'
import Search from '../pages/Search'
import Order from '../pages/Order'
import Profile from '../pages/Profile'
// 登录路由
import Login from '../pages/Login/Login.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      // 路由重定向，开始或找不到的时候就定到首页
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/msite',
      component: Msite,
      // 设置底部导航状态，首页显示
      meta: {
        showFooder: true
      }
    },
    {
      path: '/search',
      component: Search,
      // 设置底部导航状态，搜索显示
      meta: {
        showFooder: true
      }
    },
    {
      path: '/order',
      component: Order,
      // 设置底部导航状态，订单显示
      meta: {
        showFooder: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      // 设置底部导航状态，个人显示
      meta: {
        showFooder: true
      }
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
