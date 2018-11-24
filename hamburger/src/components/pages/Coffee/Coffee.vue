<template>
	<div class="coffee">
        <div class="c_header">
        	<div class="send">
        		<h2>
        			<i @click="backToHome()" class="fa fa-angle-left" aria-hidden="true"></i>
        			外送咖啡
        			<p>
        			<span></span>
		        	<span></span>
		        	<span></span>
        		</p>
        		</h2>
        		
        	</div>
        </div>
        <div class="nav">
        	<ul>
        		<li 
        			@click="checkItem(index)" 
        			v-for="(item,index) in nav" 
        			:class="active==index?'sel':''"
        			:key="index"
        			>
        			{{item}}
        		</li>
        	</ul>
        </div>
		<!-- <router-view></router-view> -->
        <div class="contain" v-if="active==0"
        	v-infinite-scroll="loadMore"
  				infinite-scroll-disabled="loading"
  				infinite-scroll-distance="10"
        	>
        	<ul 
        		>
        		<li 
        			v-for="(item,index) in coffeeList" 
        			:key="index" 
        			>
        			<img :src="item.imgurl"  />
        			<div>
        				<p>{{item.title}}</p>
	        			<p>￥{{item.price}}起</p>
	        			<span>+</span>
        			</div>
        		</li>
        	</ul>
        </div>
        <!---->
        <div class="contain" v-if="active==1">
        	<ul>
        		<li v-for="(item,index) in coffeeListPm" :key="index">
        			<img :src="item.imgurl" />
        			<div>
        				<p>{{item.title}}</p>
	        			<p>￥{{item.price}}起</p>
	        			<span>+</span>
        			</div>
        		</li>
        	</ul>
        </div>
	</div>
	<!--<router-view></router-view>-->
</template>

<script>
	//
	import Vue from 'vue';

	//post请求
	import qs from 'qs';
	
	import { Toast, InfiniteScroll} from 'mint-ui';
    Vue.use(InfiniteScroll);
	
	export default{
		name:'Coffee',
		components:{},
		data(){
			return{
				nav:['早餐咖啡','下午茶咖啡'],
				active:0,
				coffeeList:[],
				coffeeListPm:[],
//				listData:qs.stringify({
//					   start:0,
//					   end: 5
//					}),
				listData:{start:0,end:2},
			}
		},
		methods:{
			loadMore() {
				console.log("scroll==========")
				// this.getData();		
		},
			checkItem(index){
				console.log(index)
				this.active=index;
			},
			backToHome(){
				this.$router.push('/');
			},
			getData(){
				Vue.nextTick(()=>{
					this.toast = Toast({
						 message: '正在加载',
						  duration: 500
					})
					this.$axios.post('/api/kfcList/coffeeList',this.listData)
					.then((data)=>{
//						console.log('lazy========')
//						console.log(data)
						this.coffeeList=this.coffeeList.concat(data.data.data);
//						console.log('this.coffeeList======');
						this.listData.end++
						console.log(this.coffeeList);
//						this.listData.start=end;
//						this.listData.end=end+4;
					})
					.catch((err)=>{
						console.log(err)
					})
				})
				
			},
			getData2(){
				Vue.nextTick(()=>{
					this.$axios.post('/api/kfcList/coffeeList_pm')
					.then((data)=>{
//						console.log(data)
						this.coffeeListPm=data.data.data;
						console.log("=================")
						console.log(this.coffeeListPm)
						
					})
					.catch((err)=>{
						console.log(err)
					})
				})
			}
		},
		
		created(){
			
			this.getData();
			this.getData2();

		}
	}
</script>

<style lang="less" scoped>
    @import '../../../styles/main.less';
    
    .coffee{
    	height:100%;
    	.w(375);
    	.c_header{
    		.w(375);
    		.h(45);
    		.send{
    			color:#e32d39;
    			text-align:center;
    			.w(375);
    			.h(45);
    			.padding(5,5,5,5);
    			h2{
    				position:relative;
    				.h(45);
    				.fs(18);
    				p{
    				span{
			    			display:inline-block;
			    			.w(10);
			    			.h(10);
			    			background:#e32d39;
		    			}
	    			}
	    			i{
	    				position:absolute;
	    				left:5px;
	    				top:0;
	    				.fs(30);
	    				text-align: left;
	    			}
    			}
    			
    		}
    		
    	}
    	.nav{
    		.padding(20,10,10,10);
    		.h(45);
    		ul{
    			.h(45);
    			display:flex;
    			justify-content: space-between;
    			box-sizing:border-box;
    			.fs(14);
    			border-bottom:1px solid #e32d39;
    			li{
    				.h(45);
    				width:50%;
    				text-align: center;
    				.lh(45);
    			}
    			.sel{
    				color:#e32d39;
    				border-bottom:2px solid #e32d39;
    			}
    		}
    	}
    	.contain{
    		ul{
    			display:flex;
    			justify-content: space-between;
    			flex-wrap:wrap;
    			.margin-top(20);
    			li{
    				.padding(20,0,0,0);
    				box-sizing:border-box;
    				border: 1px solid #ccc;
    				width: 50%;
    				text-align: center;
    				.w(187);
    				.h(230);
    				img{
    					.w(94);
    					.h(94);
    					.margin-bottom(20);
    				}
    				div{
    					p{
    						.fs(14);
    					}
    					span{
    						display:inline-block;
    						.w(40);
    						.h(40);
    						.lh(40);
    						border-radius: 50%;
    						color:#e32d39;
    						border: 1px solid #ccc;
    						/*.margin-bottom(20);*/
    					}
    				}
    			}
    		}
    	}
    	
    }
</style>