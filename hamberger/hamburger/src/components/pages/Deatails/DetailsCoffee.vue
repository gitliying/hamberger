<template>
	<div class="coffeeDetails">
        <div class="c_header">
        	<div class="send">
        		<h2>
        			<i @click="backToCoffee()" class="fa fa-angle-left" aria-hidden="true"></i>
        			Coffee详情信息
        			<p>
        			<span></span>
		        	<span></span>
		        	<span></span>
        		</p>
        		</h2>
        		
        	</div>
        </div> 
    	<div class="details">
    		<div>
    			<img :src="item.imgurl" />
    		    <p>{{item.title}}</p>
    		</div>
    		<ul>
    			<li>￥{{item.price}}</li>
    		</ul>
    	</div>
	</div>
</template>

<script>
	export default{
		name:'DetailsCoffee',
		components:{},
		data(){
			return {
				item:''
			}
		},
		methods:{
			backToCoffee(){
				this.$router.push('/coffee');
			}
		},
		created(){
			this.item = this.$route.params.item;
		}
	}	
</script>

<style lang="less" scoped>
@import '../../../styles/main.less';
.coffeeDetails{
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
    	.details{
    		div{
    			text-align:center;
    			p{
    				.margin-top(20);
    				.fs(12);
    				color:#948c8c;
    			}
    		}
    		ul{
    			.w(375);
    			.h(60);
    			.padding(10,10,10,10);
    			
    			li{
    				border:1px solid #ccc;
    				.fs(37);
    				color: #e02d3f;
    			}
    		}
    	}
    	
}
</style>