// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App';
//引入重置样式 
import './styles/common/base.css';
//引入路由
import router from './router/index.js';
//引入store 
import store from './store/index.js';
//mint-ui 轮播图--start
import { Swipe, SwipeItem } from 'mint-ui'; 
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
//轮播图--end

//引用自定义ui框架
import Mz from '../MZ';
Vue.use(Mz)//调用模块里的 install 方法并且将Vue实例进行传递

//引入axios
//引入axios
import Axios from 'axios';
import Vuex from 'vuex';


Vue.prototype.$axios=Axios //挂载axios 便于组件使用

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
<<<<<<< HEAD
// router,
=======
  router,
  Vuex,
  store,
>>>>>>> bb2de7e102e8de652408f74648faad82378d6210
  components: { App },
  template: '<App/>'
})
