<template>
	<div class="banner">
		
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(item,index) in list" :key="index">
					<!--<img :src="item" />--> 
					<img :src="item">
					<!--{{item}}-->
					<!--<img src="../../assets/lunbotu/lunbotu1.jpg" />-->
				</div>
				<!--<div class="swiper-slide">Slide 2</div>
				<div class="swiper-slide">Slide 3</div>
				<div class="swiper-slide">Slide 4</div>-->
			</div>
			<!--<div class="swiper-scrollbar"></div>-->
			<div class="swiper-pagination"></div>
		</div>
	</div>
</template>

<script>
	//引入
	import Vue from 'vue';
	import Swiper from 'swiper';
	
	export default{
		name:'Banner',
		components:{},
		data(){
			return{
				list:[
					'../../assets/lunbotu/lunbotu1.jpg',
					'../../assets/lunbotu/lunbotu2.jpg',
					'../../assets/lunbotu/lunbotu3.jpg',
					'../../assets/lunbotu/lunbotu4.jpg',
					'../../assets/lunbotu/lunbotu5.jpg'
//					1,2,3,4,5
				]
			}
		},
		methods:{
			getBanner(){
				Vue.nextTick(()=>{
					//实例化swiper
					this.mySwiper = new Swiper ('.swiper-container', {
				       loop: true,
				       autoplay:true,
				        // 如果需要分页器
					    pagination: {
					      el: '.swiper-pagination',
					    }
				    })
				})
			}
		},
		created(){
			this.getBanner();
		}
	}
			

</script>

<style lang="less" scoped>
	@import '../../styles/main.less';
	@import '../../../node_modules/swiper/dist/css/swiper.css';
	
.banner{
	.w(375);
	.h(158);
	.swiper-container{
		.swiper-wrapper{
			.swiper-slide{
				img{
					.w(375);
					.h(158);
				}
			}
			
		}
	}
}
</style>
<style>
/*img{
	width: 375px;
	height: 158px;
}*/
		
</style>