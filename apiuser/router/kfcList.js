const express = require('express'); //请求第三方模块
const Router = express.Router(); //引用Router对象
// const dataNav = require('./dataNav');
const ultis = require('./ultis.js');
dataNavs=[
    {href:'#0',imgurl:"../../../../static/kfcList/nva1.png",title:"K COFFEE"},
    {href:'#1',imgurl:"../../../../static/kfcList/nva2.png",title:"欢乐下午茶"},
    {href:'#2',imgurl:"../../../../static/kfcList/nva3.png",title:"当前主打"},
    {href:'#3',imgurl:"../../../../static/kfcList/nva4.png",title:"桶"},
    {href:'#4',imgurl:"../../../../static/kfcList/nva5.png",title:"帕尼尼"},
    {href:'#5',imgurl:"../../../../static/kfcList/nva6.png",title:"Chizza"},
    {href:'#6',imgurl:"../../../../static/kfcList/nva7.png",title:"美味汉堡/卷"},
    {href:'#7',imgurl:"../../../../static/kfcList/nva8.png",title:"人气明星餐"},
    {href:'#8',imgurl:"../../../../static/kfcList/nva9.png",title:"鸡翅/鸡排"},
    {href:'#9',imgurl:"../../../../static/kfcList/nva10.png",title:"缤纷饮料"},

];
var dataLists=[
    {title:'今日主打',list:[{id:"1-1",imgurl:"../../../../static/kfcList/nav1-1.jpg",title:"10元咖啡",price:'10.0'},{id:"1-2",imgurl:"../../../../static/kfcList/nav1-1.jpg",title:"10元咖啡",price:'10.0'},{id:"1-1",imgurl:"../../../../static/kfcList/nav1-1.jpg",title:"10元咖啡",price:'10.0'}]},
    {title:'迷你冰淇淋',list:[{id:"2-1",imgurl:"../../../../static/kfcList/nav2-2.jpg",title:"比利时黑巧双炫圣",price:'12.0'},{id:"2-2",imgurl:"../../../../static/kfcList/nav2-2.jpg",title:"比利时黑巧双炫圣",price:'12.0'},{id:"2-3",imgurl:"../../../../static/kfcList/nav2-2.jpg",title:"比利时黑巧双炫圣",price:'12.0'}]},
    {title:'炸鸡桶/桶',list:[{id:"3-1",imgurl:"../../../../static/kfcList/nav3-3.jpg",title:"WOW桶随心配",price:'19.9'},{id:"3-2",imgurl:"../../../../static/kfcList/nav3-3.jpg",title:"WOW桶随心配",price:'19.9'},{id:"3-3",imgurl:"../../../../static/kfcList/nav3-3.jpg",title:"WOW桶随心配",price:'19.9'}]},
    {title:'全家欢乐桶',list:[{id:"4-1",imgurl:"../../../../static/kfcList/nav4-4.jpg",title:"超级外送全家桶",price:'119.9'},{id:"4-2",imgurl:"../../../../static/kfcList/nav4-4.jpg",title:"超级外送全家桶",price:'119.9'},{id:"4-3",imgurl:"../../../../static/kfcList/nav4-4.jpg",title:"超级外送全家桶",price:'119.9'}]},
    {title:'帕尼尼',list:[{id:"5-1",imgurl:"../../../../static/kfcList/nav5-5.jpg",title:"碳烤鸡腿帕尼尼",price:'17.5'},{id:"5-2",imgurl:"../../../../static/kfcList/nav5-5.jpg",title:"碳烤鸡腿帕尼尼",price:'17.5'},{id:"5-3",imgurl:"../../../../static/kfcList/nav5-5.jpg",title:"碳烤鸡腿帕尼尼",price:'17.5'}]},
    {title:'烤翅/套餐',list:[{id:"6-1",imgurl:"../../../../static/kfcList/nav6-6.jpg",title:"Chizza烤翅餐",price:'43'},{id:"6-2",imgurl:"../../../../static/kfcList/nav6-6.jpg",title:"Chizza烤翅餐",price:'43'},{id:"6-3",imgurl:"../../../../static/kfcList/nav6-6.jpg",title:"Chizza烤翅餐",price:'43'}]},
    {title:'双人餐',list:[{id:"7-1",imgurl:"../../../../static/kfcList/nav7-7.jpg",title:"藤椒卷堡双人餐",price:'69'},{id:"7-2",imgurl:"../../../../static/kfcList/nav7-7.jpg",title:"藤椒卷堡双人餐",price:'69'},{id:"7-3",imgurl:"../../../../static/kfcList/nav7-7.jpg",title:"藤椒卷堡双人餐",price:'69'}]},
    {title:'人气王',list:[{id:"8-1",imgurl:"../../../../static/kfcList/nav8-8.jpg",title:"藤椒嫩笋卷人气餐盒",price:'39'},{id:"8-2",imgurl:"../../../../static/kfcList/nav8-8.jpg",title:"藤椒嫩笋卷人气餐盒",price:'39'},{id:"8-3",imgurl:"../../../../static/kfcList/nav8-8.jpg",title:"藤椒嫩笋卷人气餐盒",price:'39'}]},
    {title:'家有儿女',list:[{id:"9-1",imgurl:"../../../../static/kfcList/nav9-9.jpg",title:"缤纷全家桶",price:'92.5'},{id:"9-2",imgurl:"../../../../static/kfcList/nav9-9.jpg",title:"缤纷全家桶",price:'92.5'},{id:"9-3",imgurl:"../../../../static/kfcList/nav9-9.jpg",title:"缤纷全家桶",price:'92.5'}]},
    {title:'缤纷奶茶',list:[{id:"10-1",imgurl:"../../../../static/kfcList/nav10-10.jpg",title:"恋橙乌龙茶(热)",price:'12.5'},{id:"10-2",imgurl:"../../../../static/kfcList/nav10-10.jpg",title:"恋橙乌龙茶(热)",price:'12.5'},{id:"10-3",imgurl:"../../../../static/kfcList/nav10-10.jpg",title:"恋橙乌龙茶(热)",price:'12.5'}]},
];

//var coffeeLists=[
//  {id:"1",imgurl:"../../../../static/coffeeList/coffee01.jpg",title:"喵咪咖啡",price:'23.0'},
//  {id:"2",imgurl:"../../../../static/coffeeList/coffee02.jpg",title:"巧克力味华夫+美式（中）",price:'39.0'},
//	{id:"3",imgurl:"../../../../static/coffeeList/coffee03.jpg",title:"拿铁(中)+红豆派",price:'17.5'},
// 	{id:"4",imgurl:"../../../../static/coffeeList/coffee04.jpg",title:"摩卡",price:'17.0'},
//  {id:"5",imgurl:"../../../../static/coffeeList/coffee05.jpg",title:"香草风味拿铁",price:'20.0'},
// 	{id:"6",imgurl:"../../../../static/coffeeList/coffee06.jpg",title:"葡式蛋挞(经典)",price:'8.0'},
//	{id:"7",imgurl:"../../../../static/coffeeList/coffee07.jpg",title:"美式拿铁小食双人餐咖啡",price:'50.0'},
//	{id:"8",imgurl:"../../../../static/coffeeList/coffee08.jpg",title:"榛果风味拿铁",price:'44.0'},
//	{id:"9",imgurl:"../../../../static/coffeeList/coffee09.jpg",title:"D中杯咖啡小食下午茶",price:'20.0'},
//	{id:"10",imgurl:"../../../../static/coffeeList/coffee10.jpg",title:"喵咪拿铁(大)2杯",price:'14.0'},
//    
//];
//
//var coffeeLists_pm=[
//  {id:"1",imgurl:"../../../../static/coffeeList_pm/coffee_pm01.jpg",title:"D比利时黑巧双旋巧圣-",price:'11.0'},
//  {id:"2",imgurl:"../../../../static/coffeeList_pm/coffee_pm02.jpg",title:"华夫圣代甜蜜二人组",price:'14.0'},
//	{id:"3",imgurl:"../../../../static/coffeeList_pm/coffee_pm03.jpg",title:"华夫礼盒(3巧克力)",price:'17.5'},
// 	{id:"4",imgurl:"../../../../static/coffeeList_pm/coffee_pm04.jpg",title:"D巧克力味华夫饮品餐",price:'12.0'},
//  {id:"5",imgurl:"../../../../static/coffeeList_pm/coffee_pm05.jpg",title:"D原味圣代(巧克力酱)-",price:'25.0'},
// 	{id:"6",imgurl:"../../../../static/coffeeList_pm/coffee_pm06.jpg",title:"D热柠檬红茶-",price:'8.0'},
//	{id:"7",imgurl:"../../../../static/coffeeList_pm/coffee_pm07.jpg",title:"D九珍果汁饮料-",price:'22.0'},
//	{id:"8",imgurl:"../../../../static/coffeeList_pm/coffee_pm08.jpg",title:"D比利时黑巧双旋莓圣-",price:'11.0'},
//	{id:"9",imgurl:"../../../../static/coffeeList_pm/coffee_pm09.jpg",title:"冰美式",price:'14.0'},
//	{id:"10",imgurl:"../../../../static/coffeeList_pm/coffee_pm10.jpg",title:"美式",price:'24.0'},
//    
//];



/**
 * @api {post} /user/testUser 用户名验证是否唯一
 * @apiName Login
 * @apiGroup User
 *
 * @apiParam {String}  username 用户名.
 * @apiParam {String} userpass 用户密码.
 *
 * @apiSuccess {String} err 错误码.
 * @apiSuccess {String} msg 错误信息.
 */
Router.get('/dataNav',(req,res)=>{
    console.log("dataNav")
    res.send(ultis.sendData('1',"ok",dataNavs))
})

Router.get('/dataList',(req,res)=>{
    console.log('dataList');
    res.send(ultis.sendData('1',"ok",dataLists))
})

//coffee 
//Router.post('/coffeeList',(req,res)=>{
//	let {start,end} = req.body;
//	console.log( {start,end})
//	console.log( coffeeLists.splice(start,end) )
//	res.send(ultis.sendData('1','ok',coffeeLists.splice(start,end)))
////	res.send(ultis.sendData('1','ok',coffeeLists))
//})
//
//Router.post('/coffeeList_pm',(req,res)=>{
//	res.send(ultis.sendData('1','ok',coffeeLists_pm))
//})




// Router.get('/dataList',(req,res)=>{

//     res.send(dataList());
//     console.log('yes');
// })



module.exports = Router;




// {id:1,data:[{id:"1-1",imgurl:"nav1-1.jpg",title:"10元咖啡",price:
// {id:2,imgurl:"nav2-2.jpg",title:"比利时黑巧双炫圣",price:'12.0'},
// {id:3,imgurl:"nav3-3.jpg",title:"WOW桶随心配",price:'19.9'},
// {id:4,imgurl:"nav3-4.jpg",title:"超级外送全家桶",price:'119.9'},
// {id:5,imgurl:"nav3-5.jpg",title:"碳烤鸡腿帕尼尼",price:'17.5'},
// {id:6,imgurl:"nav3-6.jpg",title:"Chizza烤翅餐",price:'43'},
// {id:7,imgurl:"nav3-7.jpg",title:"藤椒卷堡双人餐",price:'69'},
// {id:8,imgurl:"nav3-8.jpg",title:"藤椒嫩笋卷人气餐盒",price:'39'},
// {id:9,imgurl:"nav3-9.jpg",title:"缤纷全家桶",price:'92.5'},
// {id:10,imgurl:"nva10-10.jpg",title:"恋橙乌龙茶(热)",price:'12.5'}