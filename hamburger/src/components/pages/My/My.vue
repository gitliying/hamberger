<template>
	<div class="coffee">
        <!-- there's My -->
		<!-- <router-link to="info">info</router-link>
		<router-link to="login">login</router-link> -->
		<router-view></router-view>
	</div>
</template>

<script>
	export default{
		name:'My',
		components:{},
		data(){
			return{

			}
		}
	}
</script>

<style lang="less" scoped>
@import '../../../styles/main.less';

</style>