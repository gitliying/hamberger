<template>
<div>
	<div class="banner">
<<<<<<< HEAD
		
		<mt-swipe :auto="4000" @change="handleChange">
		  <mt-swipe-item v-for="(item,index) in list" :key="index">
		  	<img :src="item.src" />
		  	<!--<img src="../../assets/lunbotu/lunbotu1.jpg" />-->
		  </mt-swipe-item>
		</mt-swipe>
		
=======
	    <mt-swipe :auto="4000" :continuous="true"> 
            <mt-swipe-item v-for="(item,index) in list " :key="index">
                <!-- <img src="../../assets/lunbotu/lunbotu1.jpg" alt="">				 -->
                <img :src="item.src" alt="">				
            </mt-swipe-item>
        </mt-swipe>
		<!-- <mt-swipe :auto="1000">
			<mt-swipe-item>1</mt-swipe-item>
			<mt-swipe-item>2</mt-swipe-item>
			<mt-swipe-item>3</mt-swipe-item>
		</mt-swipe> -->
>>>>>>> bb2de7e102e8de652408f74648faad82378d6210
	</div>
	<div class="tem"></div>
</div>
	
</template>

<script>
	//引入
	import Vue from 'vue';
	
	//mint ui
	import { Swipe, SwipeItem } from 'mint-ui';
	Vue.component(Swipe.name, Swipe);
	Vue.component(SwipeItem.name, SwipeItem);
	
	export default{
		name:'Banner',
		components:{},
		data(){
			return{
<<<<<<< HEAD
				bannerimg:'../../assets/lunbotu/lunbotu1.jpg',
				list:[
				    
=======
				img:
				"../../assets/lunbotu/lunbotu3.jpg",
				list:[
>>>>>>> bb2de7e102e8de652408f74648faad82378d6210
					{src:'../../../static/lunbotu/lunbotu1.jpg'},
					{src:'../../../static/lunbotu/lunbotu2.jpg'},
					{src:'../../../static/lunbotu/lunbotu3.jpg'},
					{src:'../../../static/lunbotu/lunbotu4.jpg'},
<<<<<<< HEAD
					{src:'../../../static/lunbotu/lunbotu5.jpg'}
=======
					{src:'../../../static/lunbotu/lunbotu4.jpg'}
>>>>>>> bb2de7e102e8de652408f74648faad82378d6210
				]
			}
		},
		methods:{
<<<<<<< HEAD
		 	handleChange(index){
		 		auto:3000
		 	}
		},
		created(){
//			this.getBanner();
			this.handleChange();
=======

		},
		created(){
			// this.getBanner();
>>>>>>> bb2de7e102e8de652408f74648faad82378d6210
		}
	}
			

</script>

<style lang="less" scoped>
	@import '../../styles/main.less';
	
// .tem{height: 158px;width: 100%;}
.banner{
	min-width: 375px;
	min-height: 158px;
	.w(375);
	.h(158);
<<<<<<< HEAD
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
=======
	img{
		width: 100%;
	}
>>>>>>> bb2de7e102e8de652408f74648faad82378d6210
}
</style>
<style>
/*img{
	width: 375px;
	height: 158px;
}*/
		
</style>