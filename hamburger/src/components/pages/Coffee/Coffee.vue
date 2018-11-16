<template>
	<div class="coffee">
        <div class="c_header">
        	<div>
        		<h2>
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
        			@click="checkItem(item)" 
        			v-for="(item,index) in nav" 
        			:class="active===item?'sel':''"
        			:key="index"
        			>
        			{{item}}
        		</li>
        	</ul>
        </div>
        <div class="contain">
        	<ul>
        		<li>
        			<img src="../../../../static/header-icon/h-icon02.png" />
        			<div>
        				<p>榛果风味拿铁</p>
	        			<p>￥999起</p>
	        			<span>+</span>
        			</div>
        		</li>
        		<li>
        			<img src="../../../../static/header-icon/h-icon02.png" />
        			<div>
        				<p>榛果风味拿铁</p>
	        			<p>￥999起</p>
	        			<span>+</span>
        			</div>
        		</li>
        		<li>
        			<img src="../../../../static/header-icon/h-icon02.png" />
        			<div>
        				<p>榛果风味拿铁</p>
	        			<p>￥999起</p>
	        			<span>+</span>
        			</div>
        		</li>
        		<li>
        			<img src="../../../../static/header-icon/h-icon02.png" />
        			<div>
        				<p>榛果风味拿铁</p>
	        			<p>￥999起</p>
	        			<span>+</span>
        			</div>
        		</li>
        	</ul>
        </div>
	</div>
</template>

<script>
	export default{
		name:'Coffee',
		components:{},
		data(){
			return{
				nav:['早餐咖啡','下午茶咖啡'],
				active:['早餐咖啡']
			}
		},
		methods:{
			checkItem(item){
				this.active=item;
			}
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
    		div{
    			color:#e32d39;
    			text-align:center;
    			.w(375);
    			.h(45);
    			.padding(5,5,5,5);
    			h2{
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
    						.margin-bottom(20);
    					}
    				}
    			}
    		}
    	}
    	
    }
</style>