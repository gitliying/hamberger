import Vue from 'vue'
import Router from 'vue-router'

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
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/car',
      name: 'Car',
      component: Car,
    },
    {
      path: '/my',
      name: 'My',
      component: My,
      children:[
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
    }
  ]
})
