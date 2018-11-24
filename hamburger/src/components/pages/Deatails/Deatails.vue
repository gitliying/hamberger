<template>
    <div class="deatails">
        <div class="header">
            <div class="back">
                <i class="fa fa-close back" @click="backHome"></i>
            </div>
            <div class="right">
                <div class="com">商品详情信息</div>
                <div class="box"><span></span><span></span><span></span></div>
            </div>
        </div> 
        <div class="tem"></div>
        <div class="boxx">
            <img :src="'../../../../static/'+item.imgurl" alt="">
            <p class="title">{{item.title}}</p>
            <div class="wenzi">
                WOW桶内产品单品总价满59元（不含外送费）可享WOW桶8折优惠，可在肯德基超级APP“我的卡包”内100%得价值90元《海盗来了》游戏内权益兑换券1张以及劲爆鸡米花（小）1份兑换券1张。用户可凭游戏权益兑换券内的兑换码，游戏内权益详情及兑换规则请见《海盗来了》游戏内“公告”公示。
            </div>
            <div class="content clearfix">
                <div class="lef"><span>￥</span><span class="price">{{item.price}}</span>起</div> 
                <div class="add" @click="add">+</div>
                <div v-show="item.num">
                    <div class="add num" >{{item.num}}</div>
                    <div class="add" @click="cut(item)">-</div>
                </div>    
            </div>
        </div>
        <div class="temm"></div>
		<CarNav></CarNav>       
    </div>
    
</template>

<script>

import CarNav from '../../commons/CarNav'
    export default{
        name:'Deatails',
        components:{CarNav},
        data(){
            return{
                item:321,
            }
        },
        methods:{
            //购物车 +
            add(item){
                var item=this.item;
                if(item.num>5){return alert("超出购量！")}
                item.num++;
                this.updataNum(item)
                this.$store.commit("addCart",item)
            },
            //购物车 -
            cut(item){
                if(item.num<1)return
                item.num--;
                this.updataNum(item)
                this.$store.commit("cutCart",item);
                
            },
            //回到主页
            backHome(){
                this.$router.push('/');
            },
            //获取详情页数据
            getData(){
                this.$axios.post('/api/kfcList/findDeatail',{"id":this.id})
                .then((res)=>{
                    this.item=res.data.data;
                })
                .catch((err)=>{
                    console.log(err);
                })
            },
            //修改数据
            updataNum(item){
                    this.$axios.post('/api/kfcList/updata',{id:item.id,num:item.num})
                .then((res)=>{
                    this.Nvalist=res.data.data;
                    // this.toast.close(); 	//关闭土司
                })
                .catch((err)=>{
                    console.log(err);
                    // this.toast.close();
                })
            }, 
        },
        created(){
            this.id = (this.$route.params.id)
            this.getData();
            this.num =(this.$route.params.num);

        }
    }
</script>

<style lang="less" scoped>
    @import '../../../styles/main.less';
    .temm{.h(70);}
    .tem{height: 43px;width: 100%}
    .header{
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        height: 43px;
        background: #bdbfbf;
        padding-bottom: 5px;
        .back{float: left;color: #e94f4f;line-height: 50px;padding-left: 5%;font-size: 25px;}
        .right{
            text-align: center;
            float: left;
            font-size: 18px;
            font-weight: 600;
            line-height: 20px;
            padding-top: 5px;
            min-width: 290px;
            .w(290);
            .com{color: #e32d39}
            .box{
                height: 10px;
                span{display: inline-block;width: 10px;height: 10px;background: #d90305;margin-left: 7px;line-height: 10px;}
            }
        }
        // border-bottom: 1px solid #e1e1e1;
    }
    .boxx{
        // border-top: 1px solid #e1e1e1;
        color: #e02d3f;
        text-align: center;
        img{margin: 0 auto;}
        .title{
            font-size: 16px;
            // width: 20%;
            margin: 10px auto;
            }
        .wenzi{font-size: 16px;color: #948c8c;padding: 10px;line-height: 30px;}
        .content{
            height: auto; 
            border-top: 2px solid #e1e1e1;
            border-bottom: 2px solid #e1e1e1;
            font-size: 20px;
            padding: 0 20px;
            span{margin-right: 5px;}
            .price{font-size: 37px;}
            .lef{float: left;}
            .add{
                width: 30px;
                height: 30px;
                line-height: 25px;
                float: right;
                font-size: 30px;
                color: #d90305;
                border-radius: 50px;
                border:1px solid #bdbfbf;
                margin-top: 7px;
                }
            .num{
                line-height: 30px;
                border: none;
                margin: 7px 10px;
                font-size: 25px;
                color: #403e3e;
            }
        }
    }

</style>