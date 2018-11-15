<template>
	<div class="login">
		{{test}}
	</div>
</template>

<script>
	//引入
	import Vue from 'vue';
	export default{
		name:'CarNav',
		components:{},
		data(){
			return{
				test:'login'
			}
		}
	}

</script>

<style lang="less" scoped>
	@import '../../styles/main.less';
	

</style>