<template>
	<div class="home">
		<Banner></Banner>
		<Header></Header>
		<CarNav></CarNav>
   </div>
</template>
<script>
	
//引入Banner组件
import Banner from '../../commons/Banner';
//引入Header组件
import Header from '../../commons/Header';
import CarNav from '../../commons/CarNav' ;

export default{
	name:'Home',
	components:{Banner,Header,CarNav},//注册组件
	data(){
		return {
			test:'我是home页面'
		}

	}
}
</script>
<style lang="less" scoped>
 @import '../../../styles/main.less';	
.home{
	/*background:@bg-color;*/
}
</style>