<template>
  <div id="app">
  	<Home></Home>
  	<My></My>
  </div>
</template>

<script>
	//引入组件
	import Home from "./components/pages/Home/Home";
	import My from "./components/pages/My/My";
	
export default {
  name: 'App',
  components:{Home,My}
}
</script>

<style>
#app {
	
}
</style>
