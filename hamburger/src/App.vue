<template>
  <div id="app">
<<<<<<< HEAD
  	<Home></Home>
  	<My></My>
=======
  	<!-- <Home></Home> -->
    <router-view></router-view>
>>>>>>> bb2de7e102e8de652408f74648faad82378d6210
  </div>
</template>

<script>
	//引入组件
<<<<<<< HEAD
	import Home from "./components/pages/Home/Home";
	import My from "./components/pages/My/My";
=======
  import Home from "./components/pages/Home/Home";
  // import My from './components/pages/My/My.vue';
  // import Coffee from './components/pages/Coffee/Coffee';
>>>>>>> bb2de7e102e8de652408f74648faad82378d6210
	
export default {
  name: 'App',
  components:{Home,My}
}
</script>

<style>
#app {
	
}
</style>
