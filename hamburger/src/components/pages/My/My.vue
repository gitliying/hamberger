<template>
	<div class="my">
<<<<<<< HEAD
		{{test}}
=======
        <router-view></router-view>
>>>>>>> bb2de7e102e8de652408f74648faad82378d6210
	</div>
</template>

<script>
<<<<<<< HEAD
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
	
=======
	
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
>>>>>>> bb2de7e102e8de652408f74648faad82378d6210

</style>