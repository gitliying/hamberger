<template>
	<div class="foodlist">
        <div class="aside WeLiveIn">
            <ul class="WeLiveIn">
                <!-- <li v-for="(item,index)in Nvalist" :key="index">
                    <img src="../../../../static/kfcList/nva1.png" alt="">
                    <p>{{item.title}}</p>
                </li> -->
                <li v-for="(item,index) in Nvalist" :key="index" @click='change(index)' :class="act==index?'active':''">
                    <a  :href="item.href" >
                        <img :src="item.imgurl" alt="">
                        <p>{{item.title}}</p>
                    </a>
                </li>
            </ul>

        </div>
        <div class="nava">
            <Nvalist v-for="(item,index) in Foodlist" :key="index" :foodlist="item" :id="index"></Nvalist>
        </div>
	</div>
</template>

<script>
import Vue from 'vue';
import Nvalist from './Nvalist';
import Swiper from 'swiper';
import { Toast } from 'mint-ui';
	export default{
		// name:'Foodlist',
		components:{Nvalist},
		data(){
			return{
                act:0,
                Nvalist:[],
                Foodlist:[],
			}
        },
        methods:{
            change(index) {
                this.act=index;
            },
            getFoodlist(){
                this.$axios.post('/api/kfcList/foodList')
                .then((res)=>{
                    this.Foodlist=res.data.data;
                    Toast({
                    message: '加载',
                    position: 'center',
                    duration: 500,
                    iconClass:"fa fa-spinner fa-spin"
                    });
                })
                .catch((err)=>{
                    console.log(err);
                })
            },
            getNavlist(){
                    this.$axios.get('/api/kfcList/dataNav',{params:{
                }})
                .then((res)=>{
                    this.Nvalist=res.data.data;
                    // this.toast.close(); 	//关闭土司
                })
                .catch((err)=>{
                    console.log(err);
                    // this.toast.close();
                })
            },
            getData(){
                this.$axios.post('/api/kfcList/readCarlist')
                .then((res)=>{
                    // this.lists=res.data.list;
                    console.log(res.data.list)
                    this.$store.commit('readCart',res.data.list)
                })
                .catch((err)=>{
                    console.log("读取错误"+err);
                })
            },  
        },
        created(){
            this.getFoodlist();
            this.getNavlist()
            this.getData()
        }
    
        
    }



</script>

<style lang="less" scoped>
    @import '../../../styles/main.less';
    .WeLiveIn::-webkit-scrollbar {display:none}
    .foodlist{
        .h(594);
        .active{background: white;border-right: none}
		// border-top :1px #666 solid; 
        margin-top: 1px;
        position: relative;
        .aside{
            float: left;
            .w(86);
            .h(594);
            background:#eee;
            overflow-y: auto;
            ul{
                overflow: auto;
                width: 100%;
                li{
                    width: 100%;
                    .h(100);
                    .fs(14);
                    text-align: center;
                    border-bottom: white solid 1px;
                    border-right: 1px solid #f2f2f2;
                    img{
                        .w(66);
                        .h(60);
                    }
                    p{
                        color: gray;
                    }
                }
            }
        }
        .nava::-webkit-scrollbar {display:none}
        .nava{
            overflow: auto;
            .h(594)
        }
    }
</style>