<template>
	<div class="header">
		<div class="nav_h">
			<ul>
				<li>
					<i class="fa fa-meetup" 
						aria-hidden="true"
						>
					</i>
					<span 
						v-for="(item,index) in list"
						 :key="index"
						 >
						 {{item.title}}
					</span>
				</li>
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
					{name:'order',title:'预约送餐'},
					{name:'coffee',title:'K Coffee'},
					{name:'my',title:'我的'}
				],
				h_icon:[
				]
			}
		}
	}
</script>

<style lang="less" scoped>
	@import '../../styles/main.less';
	
	.header{
		.w(375);
		.h(74);
		.nav_h{
			ul{
				background:pink;
				.w(375);
				.h(74);
				display:flex;
				justify-content: space-between;
				li{
					width: 33%;
					.h(74);
					.fs(14);
					text-align:center;
					i{
						display: block;
						.fs(40);
					}
				}
			}
		}
	}
</style>