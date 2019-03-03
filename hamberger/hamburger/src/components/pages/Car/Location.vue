    <template>  
      <div id="location">  
        <b-map-component></b-map-component>
        <!-- <div id="allmap" ref="allmap" style="height:600px;"></div>  -->
         <!-- 切记模板中一定要有渲染 -->
        <!-- <router-view></router-view>  -->
        
      </div>  
    </template> 
      
    <script>  
    import BMapComponent from './BMapComponent';
    export default {  
      name: 'Location', 
      components:{BMapComponent}, 
      data(){
          return{
          }
      },
//       methods:{  
//         map(){  
//           let map =new BMap.Map(this.$refs.allmap); // 创建Map实例  
//           map.centerAndZoom(new BMap.Point(114.30, 30.60), 11);// 初始化地图,设置中心点坐标（经纬度/城市的名称）和地图级别  
//           map.addControl(new BMap.MapTypeControl({//添加地图类型控件  
//             mapTypes:[  
//               BMAP_NORMAL_MAP,  
//               BMAP_HYBRID_MAP  
//             ]}));  
//           map.setCurrentCity("深圳");// 设置地图显示的城市 此项是必须设置的  
//           map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放  
//           //map.setMapStyle({style:'midnight'});//地图风格
//         }  
//       },  
//       mounted(){  
//         //调用上面个的函数
//         this.map()  
//       } 
        methods:{
             
        }
    }  
    </script>  
      
<style scoped>  
#location {  
    -webkit-font-smoothing: antialiased;  
    -moz-osx-font-smoothing: grayscale;  
    text-align: center;  
    color: #2c3e50;  
    /* margin-top: 60px;   */
}      
/*    设置地图的宽高 */ 
#allmap{  
      height: 500px !important;  
      overflow: hidden;  
    }  
</style>