<template>
	<div class="order">
        <div class="c_header">
        	<div class="send">
        		<h2>
        			<i @click="backToHome()" class="fa fa-angle-left" aria-hidden="true"></i>
        			预约送餐类型
        			<p>
        			<span></span>
		        	<span></span>
		        	<span></span>
        		</p>
        		</h2>
        		
        	</div>
        </div> 
    	<div class="orderList">
    		<ul>
    			<li v-for="(item,index) in orderList" :key="index">
    				<img :src="item.imgurl"/>
    				<span>{{item.type}}</span>
    				<i class="fa fa-hand-o-right" aria-hidden="true"></i>
    			</li>
    		</ul>
    	</div>
	</div>
</template>

<script>
	export default{
		name:'Order',
		components:{},
		data(){
			return {
				orderList:[
					{imgurl:'../../../../static/coffeeList/coffee01.jpg',type:'早餐预约'},
					{imgurl:'../../../../static/coffeeList/coffee05.jpg',type:'正餐预约'},	
					{imgurl:'../../../../static/coffeeList/coffee07.jpg',type:'下午茶预约'},
					{imgurl:'../../../../static/coffeeList/coffee09.jpg',type:'夜宵预约'}
				]
			}
		},
		methods:{
			backToHome(){
				this.$router.push('/');
			}
		}
	}	
</script>

<style lang="less" scoped>
@import '../../../styles/main.less';
.order{
	.c_header{
    		.w(375);
    		.h(50);
    		border-bottom:1px solid #ccc;
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
    	.orderList{
    		ul{
    			li{	
    				position:relative;
    				.padding(0,20,0,20);
    				border-bottom:1px solid #ccc;
    				.w(428);
    				.h(100);
    				.fs(16);
    				.lh(100);
    				color: #3a3a3a;
    				i{
    					position:absolute;
    					top: 38%;
    					right: 150px;
    					.fs(24);
    					color:#e32d39;
    				}
    				img{
    					.w(80);
    					.h(80);
    				}
    			}
    		}
    	}
}
</style>