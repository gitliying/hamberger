<template>
	<div class="my">
		{{test}}
	</div>
</template>

<script>
	//引入
	import Vue from 'vue';
	export default{
		name:'My',
		components:{},
		data(){
			return{
				test:'my'
			}
		}
	}

</script>

<style lang="less" scoped>
	@import '../../../styles/main.less';
	

</style>