<template>
	<div class="banner">
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
	</div>
</template>

<script>
	//引入
	import Vue from 'vue';
	
	export default{
		name:'Banner',
		components:{},
		data(){
			return{
				img:
				"../../assets/lunbotu/lunbotu3.jpg",
				list:[
					{src:'../../../static/lunbotu/lunbotu1.jpg'},
					{src:'../../../static/lunbotu/lunbotu2.jpg'},
					{src:'../../../static/lunbotu/lunbotu3.jpg'},
					{src:'../../../static/lunbotu/lunbotu4.jpg'},
					{src:'../../../static/lunbotu/lunbotu4.jpg'}
				]
			}
		},
		methods:{

		},
		created(){
			// this.getBanner();
		}
	}
			

</script>

<style lang="less" scoped>
	@import '../../styles/main.less';
	
.banner{
	.w(375);
	.h(158);
	img{
		width: 100%;
	}
}
</style>
<style>
/*img{
	width: 375px;
	height: 158px;
}*/
		
</style>