<template>
	<div class="carnav">
		<div class="carnav_left">
		   <i class="fa fa-cart-arrow-down car_left" aria-hidden="true"></i>
		   <div>
		   	<p>￥99.0</p>
		   	<p>另需送餐费：￥9.0</p>
		   </div>
		</div>
		<div class="carnav_right">
			<span>去购物车</span>
			<i class="fa fa-chevron-right car_right" aria-hidden="true"></i>
		</div>
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
				test:'carnav'
			}
		}
	}

</script>

<style lang="less" scoped>
	@import '../../styles/main.less';
	
	.carnav{
		position:fixed;
		left:0;
		bottom:0;
		.w(375);
		.h(60);
		background:#5688cf;
		display:flex;
		.carnav_left{
			display:flex;
			.w(240);
			.h(60);
			border-right:1px solid #fff;
			.fs(42);
			color:#fff;
			 align-items:center;
			 .margin-left(10);
			 div{
			 	.margin-left(10);
			 	p:nth-child(1){
			 		.fs(20);
			 	}
			 	p:nth-child(2){
			 		.fs(14);
			 		color:#bbc9e7;
			 	}
			 }
		}
		.carnav_right{
			display:flex;
			justify-content: center;
			align-items:center;
			.w(130);
			.h(60);
			color:#fff;
			span{
				.fs(18);
				.margin-right(10);
			}
			.car_right{
				.fs(15);
				color:#bbc9e7;
			}
		}
	}
</style>