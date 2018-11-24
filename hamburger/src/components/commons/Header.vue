<template>
	<div class="header">
		<div class="nav_h">
			<ul>
<<<<<<< HEAD
				<li>
					<div>
						<img src="../../../static/header-icon/h-icon01.png" />
					</div>
					
					<span>预约送餐</span>
				</li>
				<li>
					<div>
						<img src="../../../static/header-icon/h-icon02.png" />
					</div>
					<span>K Coffee</span>
				</li>
				<li>
					<div>
						<img src="../../../static/header-icon/h-icon03.png" />
					</div>
					<span>我的</span>
				</li>
=======
				<router-link tag="li" :to="item.url"  v-for="(item,index) in list" :key="index">
					<div>
						<img :src="item.img" />
					</div>
					
					<span>{{item.title}}</span>
				</router-link>
>>>>>>> bb2de7e102e8de652408f74648faad82378d6210
			</ul>
		</div>

	</div>
</template>

<script>
	//引入
	import Vue from 'vue';
	
	export default{
		name:'Header',
		components:{},
		data(){
			return{
				list:[
					{name:'order',title:'预约送餐',img:"../../../static/header-icon/h-icon01.png",url:'/order'},
					{name:'coffee',title:'K Coffee',img:"../../../static/header-icon/h-icon02.png",url:'/coffee'},
					{name:'my',title:'我的',img:"../../../static/header-icon/h-icon03.png",url:'/my'}
				],
//				h_icon:[
//					'../../assets/header-icon/h-icon01.png',
//					'../../assets/header-icon/h-icon02.png',
//					'../../assets/header-icon/h-icon03.png',
//				]
			}
		}
	}
</script>

<style lang="less" scoped>
	@import '../../styles/main.less';
	
	.header{
		.w(375);
		.h(74);
		// border-bottom:1px #666 solid; 
		background: white;
		.margin-bottom(5);
		.padding(0,0,10,0);
		.nav_h{
			ul{
				/*background:pink;*/
				.w(375);
				.h(74);
				display:flex;
				justify-content: space-between;
				li{
					display:flex;
					flex-direction: column;
					justify-content: space-between;
					width: 33%;
					/*.margin-left(30);*/
					text-align:center;
					div{
						img{
							.w(42);
							.h(42);
							text-align:center;
						}
					}
					span{
						.fs(14);
					}
				}
			}
		}
	}
</style>