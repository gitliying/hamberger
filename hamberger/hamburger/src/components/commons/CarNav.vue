<template>
<div>
	<div class="carnav" v-if="show">
		<div class="carnav_left">
		   <i class="fa fa-cart-arrow-down car_left" aria-hidden="true"></i>
		   <div>
		   	<p class="cartDeti">￥<span class="price">{{price}}</span>  数量：<span class="num">{{num}}</span></p>
		   	<p>另需送餐费：￥9.0</p>
			   <!-- {{show}} -->
		   </div>
		</div>
			<div class="carnav_right" @click="goCart">
				<span>去购物车</span>
				<i class="fa fa-chevron-right car_right" aria-hidden="true"></i>
			</div>
	</div>
	<div class="templa"></div>
</div>
</template>

<script>
	//引入
import Vue from 'vue';
import { Toast } from 'mint-ui';

	export default{
		name:'CarNav',
		components:{},
		data(){
			return{
				test:'carnav'
			}
		},
		methods:{
			goCart(){
				var user = localStorage.getItem('u_email');
				if(user==null){
					Toast({
                    message: '请先登陆！',
                    position: 'center',
                    duration: 500,
                    iconClass:""
                    });
					return this.$router.push("/my")};
				var data = {
					"num":this.num,
					"price":this.price,
					"list":this.carLists,
				}
                    this.$axios.post('/api/kfcList/carList',{"carList":data})
                .then((res)=>{
					this.$router.push('/car');
                })
                .catch((err)=>{
                    console.log(err);
                })
			},
			carList(){
				
            }, 
		},
		computed:{
			show(){
				return this.$store.state.cartList.length;
			},
			num(){
				return this.$store.state.num;
			},
			price(){
				return this.$store.state.price;
			},
			carLists(){
				return this.$store.state.cartList
			}
		}
	}

</script>

<style lang="less" scoped>
	@import '../../styles/main.less';
	.templa{.h(60)}
	.carnav{
		position:fixed;
		left:0;
		bottom:0;
		min-width: 375px;
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
					 .fs(18);
					 .price{color: #e02d3f;.margin-right(10);.margin-left(5);}
					 .num{color: #e02d3f}
					 
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