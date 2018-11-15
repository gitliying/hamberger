import Vue from 'vue'
import Router from 'vue-router'

import My from '../components/pages/My/My' //某一个组件
import Login from '../components/pages/My/Login' //某一个组件
import Info from '../components/pages/My/Info' //某一个组件

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',//匹配的hash地址
        redirect:'/home'//重定向
      },
    {
      path: '/home/:id',//匹配的hash地址
      name: 'Home',//路由的名字
      component: Home// 该路由所引用的组件
    },
    {
      path: '/my',
      name: 'My',
      component: My,
      children:[
        {path:'login',name:'Login',component:Login},
        {path:'info',name:'Info',component:Info}

      ]
    }
  ]
})
