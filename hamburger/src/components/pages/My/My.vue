<template>
	<div class="my">
        <router-view></router-view>
	</div>
</template>

<script>
	
	import Reg from './Reg';
	export default{
		name:'My',
		components:{Reg},
		data(){
			return{
				email:'',
			}
		},
		created(){
			//判断是否已经是登录状态
			this.email = localStorage.getItem('u_email');
			if(this.email){
				this.$router.push('/my/info');
			}else{
				this.$router.push('/my/login');
			}
		}
	}
</script>

<style lang="less" scoped>
@import '../../../styles/main.less';

</style>