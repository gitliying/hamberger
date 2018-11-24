import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD

import My from '../components/pages/My/My' //某一个组件
import Login from '../components/pages/My/Login' //某一个组件
import Info from '../components/pages/My/Info' //某一个组件
=======
>>>>>>> bb2de7e102e8de652408f74648faad82378d6210

Vue.use(Router)

	//引入组件
  import Home from "../components/pages/Home/Home";
  import Coffee from '../components/pages/Coffee/Coffee';
  import Order from '../components/pages/Order/Order';
  //登陆注册 组件
  import My from     '../components/pages/My/My';
  import Info from '../components/pages/My/info';
  import Login from '../components/pages/My/Login';
  import Reg from '../components/pages/My/Reg';
  //详情页
  import Deatails from   '../components/pages/Deatails/Deatails';


  import Car from '../components/pages/Car/Car';
export default new Router({
  routes: [
    {
<<<<<<< HEAD
        path: '/',//匹配的hash地址
        redirect:'/home'//重定向
      },
    {
      path: '/home/:id',//匹配的hash地址
      name: 'Home',//路由的名字
      component: Home// 该路由所引用的组件
=======
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/car',
      name: 'Car',
      component: Car,
>>>>>>> bb2de7e102e8de652408f74648faad82378d6210
    },
    {
      path: '/my',
      name: 'My',
      component: My,
      children:[
<<<<<<< HEAD
        {path:'login',name:'Login',component:Login},
        {path:'info',name:'Info',component:Info}

      ]
=======
        {path:"login",name:"Login",component:Login},
        {path:"info",name:"Info",component:Info},
        {path:"reg",name:"Reg",component:Reg},
      ]
    },
    {
      path: '/coffee',
      name: 'Coffee',
      component: Coffee
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/details/:id',
      name: 'Deatails',
      component: Deatails
>>>>>>> bb2de7e102e8de652408f74648faad82378d6210
    }
  ]
})
