<template>
	<div class="banner">
		
		<mt-swipe :auto="4000" @change="handleChange">
		  <mt-swipe-item v-for="(item,index) in list" :key="index">
		  	<img :src="item.src" />
		  	<!--<img src="../../assets/lunbotu/lunbotu1.jpg" />-->
		  </mt-swipe-item>
		</mt-swipe>
		
	</div>
</template>

<script>
	//引入
	import Vue from 'vue';
	import Swiper from 'swiper';
	
	//mint ui
	import { Swipe, SwipeItem } from 'mint-ui';
	Vue.component(Swipe.name, Swipe);
	Vue.component(SwipeItem.name, SwipeItem);
	
	export default{
		name:'Banner',
		components:{},
		data(){
			return{
				bannerimg:'../../assets/lunbotu/lunbotu1.jpg',
				list:[
				    
					{src:'../../../static/lunbotu/lunbotu1.jpg'},
					{src:'../../../static/lunbotu/lunbotu2.jpg'},
					{src:'../../../static/lunbotu/lunbotu3.jpg'},
					{src:'../../../static/lunbotu/lunbotu4.jpg'},
					{src:'../../../static/lunbotu/lunbotu5.jpg'}
				]
			}
		},
		methods:{
		 	handleChange(index){
		 		auto:3000
		 	}
		},
		created(){
//			this.getBanner();
			this.handleChange();
		}
	}
			

</script>

<style lang="less" scoped>
	@import '../../styles/main.less';
	@import '../../../node_modules/swiper/dist/css/swiper.css';
	
.banner{
	.w(375);
	.h(158);
	/*.swiper-container{*/
		/*.swiper-wrapper{*/
			/*.swiper-slide{*/
				img{
					.w(375);
					.h(158);
				}
			/*}*/
			
		/*}*/
	/*}*/
}
</style>
<style>
/*img{
	width: 375px;
	height: 158px;
}*/
		
</style>