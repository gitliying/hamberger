<template>
  <div id="app">
  	<!-- <Home></Home> -->
    <router-view></router-view>
  </div>
</template>

<script>
	//引入组件
  import Home from "./components/pages/Home/Home";
  // import My from './components/pages/My/My.vue';
  // import Coffee from './components/pages/Coffee/Coffee';
	
export default {
  name: 'App',
  components:{Home}
}
</script>

<style>
#app {
	
}
</style>
