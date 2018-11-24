<template>
	<div class="navlist">
        <div class="title">
            <span class="one">/</span><span class="tow">/</span><span class="tree">/</span>
            &nbsp;{{foodlist.title}}&nbsp;
            <span class="tree">/</span><span class="tow">/</span><span class="one">/</span>
        </div>
        <dl>
            
            <div class="navBox" v-for="(item,index) in foodlist.list" :key='index'>
                <img :src="'../../../../static'+item.imgurl" alt="" @click="detail(item)">
                <div class="navRight">
                    <p class="content">{{item.title}}</p>
                    <p><span>￥</span><span class="price">{{item.price}}</span></p>
                    <p class="cart">
                        <!-- <div v-show="item.num"> -->
                            <i v-show="item.num" class="cut" @click="cutCart(item)">-</i>
                            <i v-show="item.num" class="cut num" >{{item.num}}</i>
                        <!-- </div>     -->
                        <i class="add"  @click="addCart(item)">+</i>
                    </p>
                </div>
            </div>
            <!-- <div class="navBox" v-for="(item,index) in foodlist" :key='index'>
                <img src="../../../../static/kfcList/nav1-1.jpg" alt="">
                <div class="navRight">
                    <p class="content">内容内容</p>
                    <p><span>￥</span><span class="price">17.0</span></p>
                    <p class="cart"><i class="add">+</i></p>
                </div>
            </div> -->
        </dl>
	</div>
</template>

<script>
	export default{
		name:'Nvalist',
        components:{},
        props:['foodlist'],
        list:[],
		data(){
			return{
			}
        },
        methods:{
            //动态路由传递数据
            detail(item){
                this.$router.push({name:'Deatails',params:{id:item.id,num:item.num}})
            },
            updataNum(id,num){
                    this.$axios.post('/api/kfcList/updata',{id:id,num:num})
                .then((res)=>{
                    this.Nvalist=res.data.data;
                    // this.toast.close(); 	//关闭土司
                })
                .catch((err)=>{
                    console.log(err);
                    // this.toast.close();
                })
            },  
            addCart(item){
                // console.log(item)
                if(item.num>6){return}
                item.num++;
                this.updataNum(item.id,item.num)
                this.$store.commit("addCart",item)
                // this.$store.commit("changeCart",true)

            },
            cutCart(item){
                item.num--;
                this.updataNum(item.id,item.num)
                this.$store.commit("cutCart",item);
            },
           
            
        },
        
	}
</script>

<style lang="less" scoped>
    @import '../../../styles/main.less';
    .navlist{
        // .h(594);
        .title{
            .fs(16);
            text-align: center;
            color: #ca3034;
            border-top: 2px #f2f2f2 solid;
            .one{color:#efadb0!important}
            .tow{color:#e26d71!important}
            .tree{color:#d62f35!important}
        }
        .navBox{
                .h(159);
                border-top:1px solid #e8e7e7;
                .paddingRight(20);
            img{
                .w(150);
                .h(150);
            }
          .navRight{
                color: #444;
                float: right;
                font-size: 16px;                
                .h(150);
                .w(100);
                position: relative;
                text-align: right;
                .content{
                    .fs(20);
                    .margin-bottom(20)
                }
                .price{
                    .fs(18);
                    color: #e02d3f;
                }
                .cart{
                    position: absolute;
                    bottom: 20px;
                    right: -10px;
                    .cut{
                        display: inline-block;
                        .w(16);
                        .h(16);
                        text-align: center;
                        .lh(13);
                        .fs(16);
                        color: red;
                        border-radius:50%;
                        border: 1px solid #d6d3d3;
                        }
                    .add{
                        display: inline-block;
                        .w(16);
                        .h(16);
                        text-align: center;
                        .lh(13);
                        .fs(16);
                        color: red;
                        border-radius:50%;
                        border: 1px solid #d6d3d3;

                    }
                        
                    .num{border: none;.margin(0,5,0,5);color: #403e3e}
                }
                

            }  
        }
        
    }
    
</style>
