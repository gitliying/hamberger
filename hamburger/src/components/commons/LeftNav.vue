<template>
	<div class="header">
		<div class="nav_h">
			<ul>
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
	

</style>