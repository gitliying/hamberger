<template>
	<div class="coffee"
		>
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
        <div class="contain" v-if="active==0"
		v-infinite-scroll="loadMore"
  		infinite-scroll-disabled="loading"
  		infinite-scroll-distance="20">
        	<ul 
        		>
        		<li 
        			v-for="(item,index) in coffeeList" 
        			:key="index" 
        			>
        			<img :src="item.imgurl" @click="details(item)" />
        			<div>
        				<p>{{item.title}}</p>
	        			<p>￥{{item.price}}起</p>
	        			<span v-if="item.num==0" @click="show(item)">+</span>
						<div v-if="item.num" class="box">
							<span class="ac" @click="cut(item)">-</span>
							<span class="num ac">{{item.num}}</span>
							<span class="ac" @click="add(item)">+</span>
						</div>
	        			
        			</div>
        		</li>
        	</ul>
        </div>
        <!---->
        <div class="contain" v-if="active==1"
		v-infinite-scroll="loadMore"
  		infinite-scroll-disabled="loading"
  		infinite-scroll-distance="20">
        	<ul>
        		<li 
        			v-for="(item,index) in coffeeListPm" 
        			:key="index"
        			>
        			<img :src="item.imgurl"  @click="details(item)"/>
        			<div>
        				<p>{{item.title}}</p>
	        			<p>￥{{item.price}}起</p>
	        			<span v-if="item.num==0" @click="show(item)">+</span>
						<div v-if="item.num" class="box">
							<span class="ac" @click="cut(item)">-</span>
							<span class="num ac">{{item.num}}</span>
							<span class="ac" @click="add(item)">+</span>
						</div>
        			</div>
        		</li>
        	</ul>
        </div>
	 <CarNav></CarNav>
	 <back-top size=''></back-top>
	</div>
	<!--<router-view></router-view>-->
</template>

<script>
	//
	import Vue from 'vue';
	import CarNav from '../../commons/CarNav';
	//post请求
	import qs from 'qs';
	import { Toast, InfiniteScroll} from 'mint-ui';
    Vue.use(InfiniteScroll);
	
	export default{
		name:'Coffee',
		components:{CarNav},
		data(){
			return{
				nav:['早餐咖啡','下午茶咖啡'],
				active:0,
				coffeeList:[],
				coffeeListPm:[],
				listData:{page:0,qty:5},
			}
		},	
		methods:{
			show(item){
				item.num++
				item.status=true
				this.$store.commit("addCart",item)
				},
			add(item){
				item.num++
				item.status=true
				this.$store.commit("addCart",item);
				console.log(this.$store.state.cartList)
				},
			cut(item){
				item.num--;
				if(item.num<-1){return}
                this.$store.commit("cutCart",item);
				},
			loadMore(){
				console.log(this.active);
			 	if(this.active==0){
			 		return this.getData()
			 	}else if(this.active==1){
				 	this.getData2();
				 }
			},
			checkItem(index){
				console.log(this.listData);
				this.listData={page:0,qty:5};
				this.active=index;
				this.getData2();
			},
			backToHome(){
				this.$router.push('/');
			},
			getData(){
				console.log(this.listData)
					this.toast = Toast({
						 message: '正在加载',
						  duration: 500
					})
					this.$axios.post('/api/coffee/coffeeList',this.listData)
					.then((data)=>{
						if(data.data.data.length==0){
							this.toast.close();
							return this.toast = Toast({
								 message: '没有更多了',
								  duration: 1000
							})
						}
						this.coffeeList=this.coffeeList.concat(data.data.data);
						// console.log('======this.coffeeList======');
						// console.log(this.coffeeList);
						this.listData.page++;
					})
					.catch((err)=>{
						console.log(err)
					})
//				})
				
			},
			getData2(){
				this.toast = Toast({
						 message: '正在加载',
						  duration: 500
					})
					this.$axios.post('/api/coffee/coffeeListPm',this.listData)
					.then((data)=>{
						if(data.data.data.length==0){
							this.toast.close();
							return this.toast = Toast({
								 message: '没有更多了',
								  duration: 1000
							})
						}
						this.coffeeListPm=this.coffeeListPm.concat(data.data.data);
						console.log(this.coffeeListcoffeeListPm);
						this.listData.page++;
						
					})
					.catch((err)=>{
						console.log(err)
					})
			
		},
		//metailsCoffee
		details(item){
			this.$router.push({name: 'DetailsCoffee', params: {item:item}})
		}
		
   },
   created(){
//			this.getData();
			// this.getData2();
		}
}   
</script>

<style lang="less" scoped>
    @import '../../../styles/main.less';
    .coffee{
    	height:100%;
		.w(375);
		min-width: 375px;
		
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
							.lh(37.5);
    						border-radius: 50%;
    						color:#e32d39;
    						border: 1px solid #ccc;
    						/*.margin-bottom(20);*/
						}
						.ac{.w(20);.h(20);font-size: 25px;.lh(15)}
						.num{.w(30);.h(30);font-size:20px; .lh(15);border: none;color: grey;}
    				}
    			}
    		}
    	}
    	
    }
</style>