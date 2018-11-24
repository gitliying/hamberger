<template>
    <div class="car">
        <div class="header">
            <div class="back">
                <i class="fa fa-angle-left" @click="backHome"></i>
            </div>
            <div class="right">
                <div class="com">确认订单</div>
                <div class="box"><span></span><span></span><span></span></div>
            </div>
        </div>
        <div class="song">
            
            <div class="addr">
                <div >配送至</div>
                <i class="fa fa-map-marker icon"></i><span class="ti">广州天河区(慧通产业B9栋)</span>
                <div style="float:right"><i class="fa fa-chevron-right car_right cr"></i></div>
            </div>
            <div class="time">
                <i class="fa fa-clock-o icon"></i>
                <span class="ti">约30分钟送达</span>
                <div style="float:right"><i class="fa fa-chevron-right car_right cr"></i></div>
            </div>
        </div>
        <div class="detil">
            <p class="hhcp">产品详情</p>
            <div class="box" v-for="(item,index) in lists" :key="index">
                <div class="recomm">10元购欢乐全家桶 </div>
                <div class="content">
                    <img :src="'../../../../static/' + item.imgurl" alt="">
                    <div class="title">{{item.title}}</div>
                    <div class="price">
                        <span>￥</span><span class="pri">{{item.price}}</span>
                        <span>数量:</span> <span class="num">{{item.num}}*1</span> <span></span>
                         <span class="cirecle"></span>

                    </div>
                </div>
                
            </div>

        </div>
        <div class="cacular">
            <span>数量：</span><span class="num">{{num}}</span>
            <span>小计：</span><span class="pri">{{price}}</span>
        </div>
		<div class="temm"></div>
    </div>
</template>

<script>
export default{
    name:'Car',
    components:{},
    data(){
        return{
            lists:null,
            num:null,
            price:null,
        }
    },
    methods:{
        backHome(){
            this.$router.push('/')
        },
        getData(){
                this.$axios.post('/api/kfcList/readCarlist')
                .then((res)=>{
                    this.lists=res.data.list;
                    this.num=res.data.num;
                    this.price=res.data.price;
                    console.log(res.data)
                    console.log(typeof(res.data));
                })
                .catch((err)=>{
                    console.log("读取错误"+rr);
                })
            },
    },
    // computed:{
    //     list(){
    //         return this.$store.state.cartList;
    //     }
    // },
    created(){
        this.getData();
    }
}
</script>

<style lang='less' scoped>
@import '../../../styles/main.less';

.car{
            min-width: 375px;

    .header{
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        height: 43px;
        background: #bdbfbf;
        .back{float: left;color: #e94f4f;line-height: 43px;padding-left: 20px;font-size: 40px;.w(75)}
        .right{
            text-align: center;
            float: left;
            font-size: 18px;
            font-weight: 600;
            line-height: 20px;
            padding-top: 5px;
            .w(225);
            .com{color: #e32d39}
            .box{
                height: 10px;
                span{display: inline-block;width: 10px;height: 10px;background: #d90305;margin-left: 7px;line-height: 10px;}
            }
        }
        border-bottom: 1px solid #e1e1e1;
    }
    .song{
        margin-top: 43px;
        font-size: 14px;
        color: #3f3f3f;
        .icon{color: red;margin-right: 10px;font-size: 18px;}
        .ti{font-size: 16px;color: #404040;font-weight: 550}
        .cr{color:#bdbfbf}
        .addr{
            border-bottom: 1px solid #e1e1e1;
            padding: 10px 20px;

        }
        .time{
        padding: 10px 20px;

            border-bottom: 5px dashed red;            
        }
    }
    .detil{
        padding: 10px 20px;
        font-size: 16px;
        // line-height: 60px;
        .hhcp{height: 50px;font-size: 20px;color:#3f3f3f }  
        .box{
            height: 91px;
            width: auto;
            .recomm{font-size: 18px;}
            .content{
                height: 60px;
                // line-height: 60px;
                border-bottom: 1px solid #e1e1e1;                
                img{width: 45px;height: 45px;float: left;}
                div{height: 60px;line-height: 60px;}
                .title{float: left;text-align: center;}
                .price{
                    float: right;
                    line-height: 60px;
                    vertical-align: middle;
                    .num , .pri{color:  #e02d3f}
                    .cirecle{
                        display: inline-block;
                        border: solid 1px #e1e1e1; 
                        width: 25px;
                        height: 25px;
                        border-radius: 50px; 
                        vertical-align: middle;
                        margin-left: 5px;
                        background: #5688cf;
                    }
                }
            }
        }
    }
    .cacular{
        text-align: right;padding-right:10px;font-size: 20px; 
    }
    .temm{height:80px;width: 100%}
}
</style>