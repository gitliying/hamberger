<template>
	<div class="home">
		<Banner></Banner>
		<Header></Header>
<<<<<<< HEAD
=======
		<Foodlist></Foodlist>
>>>>>>> bb2de7e102e8de652408f74648faad82378d6210
		<CarNav></CarNav>
   </div>
</template>
<script>
	
//引入Banner组件
import Banner from '../../commons/Banner';
//引入Header组件
import Header from '../../commons/Header';
<<<<<<< HEAD
//引入Header组件
import CarNav from '../../commons/CarNav';

export default{
	name:'Home',
	components:{Banner,Header,CarNav},//注册组件
=======
import CarNav from '../../commons/CarNav' ;
import Foodlist from './FoodList';

export default{
	name:'Home',
	components:{Banner,Header,CarNav,Foodlist},//注册组件
>>>>>>> bb2de7e102e8de652408f74648faad82378d6210
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