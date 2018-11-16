import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

	//引入组件
  import Home from "../components/pages/Home/Home";
  import My from     '../components/pages/My/My';
  import Coffee from '../components/pages/Coffee/Coffee';
  import Order from '../components/pages/Order/Order';
  import Info from '../components/pages/My/info';
  import Login from '../components/pages/My/Login';
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/my',
      name: 'My',
      component: My,
      children:[
        {path:"login",name:"Login",component:Login},
        {path:"info",name:"Info",component:Info},
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
    }
  ]
})
