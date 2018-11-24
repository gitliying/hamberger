import Vue from 'vue' //vue实例
import Vuex from 'vuex' //vue router
import { stat } from 'fs';


Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        showCart:false,
        num:0,
        price:0,
        cartList:[],
    },
    mutations:{
        //更改state里的数据方法
        changeCart(state,val1){
            state.showCart = val1;
        },
        addCart(state,val2){
            if(state.cartList.length==0){state.cartList.push(val2)}
            var bool = state.cartList.find(function(value,index,arr){
                return value.id==val2.id
            })
            if(!bool){state.cartList.push(val2)}
            for(var i=0;i<state.cartList.length;i++){
                if(state.cartList[i]['id']==val2['id']){
                    // state.cartList.splice(i,1)
                    state.cartList.splice(i,1,val2)
                }
                
            }
            state.num++;
            state.price=(state.price*1+(val2['price']*1)).toFixed(2);
            console.log(state.cartList);
        },
        cutCart(state,val3){
            if(state.num){
                var li = state.cartList;
                for(var ind in li){
                    if(li[ind]["id"]==val3['id']){
                        state.num--;
                        state.price=(state.price*1-(val3['price']*1)).toFixed(2) ; 
                        // state.cartList.splice(i,1)
                        state.cartList.splice(ind,1,val3)
                        if(val3.num==0){
                            li.splice(ind,1);
                            console.log(state.cartList)
                        }
                    }
                }
            }
            console.log(state.cartList);
        }
    }
})