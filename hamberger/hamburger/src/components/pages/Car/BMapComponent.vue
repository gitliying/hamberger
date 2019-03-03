<template>
<div id="all">
    <div class="all_header">
        <i class="fa fa-search" aria-hidden="true"></i>
        <input type="text" id="suggestId" name="address_detail" placeholder="请输入地址" v-model="address_detail" class="input_style" value="">
        <input type="button" value="确定" @click="search"/>
    </div>
    
    <div id="allmap" v-bind:style="mapStyle"></div>
</div>
</template>

<script>

    export default {
        name: "BMapComponent",
        data:function(){
            return{
                mapStyle:{
                    width:'100%',
                    height:this.mapHeight +'px'
                },
                address_detail: null, //详细地址
                userlocation: {lng: "", lat: ""},
                myValue :''
            }
        },
        props:{
            // 地图在该视图上的高度
            mapHeight:{
                type:Number,
                default:600
            },
            // 经度
            longitude:{
                type:Number,
                default:116.404
            }
        },

        ready:function(){
            var map =newBMap.Map("allmap");
            var point =newBMap.Point(this.longitude,this.latitude);
            var marker =newBMap.Marker(point);
            map.addOverlay(marker);
            map.centerAndZoom(point,15);
            // 信息窗的配置信息
            // var opts ={
            //     width :250,
            //     height:75,
            //     title :"地址：",
            // }
            // var infoWindow =newBMap.InfoWindow(this.description, opts);// 创建信息窗口对象
            // marker.addEventListener("click",function(){
            //     map.openInfoWindow(infoWindow,point);
            // });
            // map.enableScrollWheelZoom(true);
            // map.openInfoWindow(infoWindow,point);//开启信息窗口
        },
        // mounted(){
        //     var map = new BMap.Map("allmap");
        //     var geolocation = new BMap.Geolocation();
        //     geolocation.getCurrentPosition(function(r){
        //         var point = new BMap.Point(r.point.lng,r.point.lat);
        //         map.centerAndZoom(point,12);
        //         if(this.getStatus() == BMAP_STATUS_SUCCESS){
        //             var mk = new BMap.Marker(r.point);
        //             map.addOverlay(mk);
        //             map.panTo(r.point);

        //             function myFun(result){
        //                 var cityName = result.name;
        //                 map.setCenter(cityName);
        //                 alert("当前定位城市:"+cityName);
        //             }
        //         }

        //         else {
        //             alert('failed'+this.getStatus());
        //         }
        //     });
            
        // },
          mounted(){
           this.$nextTick(function () {

                   var th = this
                   // 创建Map实例
                   var map = new BMap.Map("allmap");
                   // 初始化地图,设置中心点坐标，
                   var point = new BMap.Point(121.160724,31.173277); // 创建点坐标，汉得公司的经纬度坐标
                   map.centerAndZoom(point, 15);
                   map.enableScrollWheelZoom();
                   var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
                       {
                           "input": "suggestId"
                           , "location": map
                       })
                   var myValue
                   ac.addEventListener("onconfirm", function (e) {    //鼠标点击下拉列表后的事件
                       var _value = e.item.value;
                       myValue = _value.province + _value.city + _value.district + _value.street + _value.business;
                       this.address_detail = myValue
                       setPlace();
                   });

                   function setPlace() {
                       map.clearOverlays();    //清除地图上所有覆盖物
                       function myFun() {
                           th.userlocation = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
                           map.centerAndZoom(th.userlocation, 18);
                           map.addOverlay(new BMap.Marker(th.userlocation));    //添加标注
                       }

                       var local = new BMap.LocalSearch(map, { //智能搜索
                           onSearchComplete: myFun
                       });
                       local.search(myValue);
                       if(myValue){
                           localStorage.setItem('searchValue',myValue);
                       }
                       
                       //测试输出坐标（指的是输入框最后确定地点的经纬度）
                       map.addEventListener("click",function(e){
                           //经度
                           console.log(th.userlocation.lng);
                           //维度
                           console.log(th.userlocation.lat);

                       })
                   }

           })
       },
       methods:{
           search(){
                this.$router.push('/car');
           }
       }

    }
</script>

<style scoped lang="less">
@import '../../../styles/main.less';
#all{
    .all_header{
        .h(50);
        .lh(50);
        .fs(18);
        input{
            .h(30);
            border: 1px solid #ccc;
        }
        input:nth-child(odd){
            .w(50);
            background: skyblue;
            color: #fff;
        }
    }
    
}
</style>