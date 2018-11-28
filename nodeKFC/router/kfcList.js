const express = require('express'); //请求第三方模块
const Router = express.Router(); //引用Router对象
// const dataNav = require('./dataNav');
const ultis = require('./ultis.js');
const fs =require('fs');
const path =require('path');
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
    // console.log("dataNav")
    res.send(ultis.sendData('1',"ok",dataNavs))
})

Router.get('/dataList',(req,res)=>{
    // console.log('dataList');
    res.send(ultis.sendData('1',"ok",dataLists))
})

//coffee 
Router.post('/coffeeList',(req,res)=>{
//	let {qty} = req.body;
//	console.log(qty);
//	console.log(coffeeLists)
//	console.log(coffeeLists.splice(0,4))
//	res.send(ultis.sendData('1','ok',coffeeLists.splice(0,qty)))
	res.send(ultis.sendData('1','ok',coffeeLists))
})

Router.post('/coffeeList_pm',(req,res)=>{
	res.send(ultis.sendData('1','ok',coffeeLists_pm))
})

//列表页
Router.post("/foodList",(req,res)=>{
    fs.readFile(path.join(__dirname,"../static/foodList.json"),"utf8",(err,data)=>{
        if(err){
            console.log(err);
        }else{
            data = JSON.parse(data).foodList;
            // console.log(data)
            res.send(ultis.sendData("1","foodlist列表",data))
        }
    })
})
//查看详情
Router.post("/findDeatail",(req,res)=>{
    var  {id} = req.body;
    // console.log(id);
    // console.log(req.body)
    fs.readFile(path.join(__dirname,"../static/foodList.json"),"utf8",(err,data)=>{
        if(err){
            console.log(err);
        }else{
            data = JSON.parse(data).foodList;
            for(item in data){
                for(li in data[item]['list']){
                    if( data[item]['list'][li]['id']==id){
                        return res.send(ultis.sendData("1","ok",data[item]['list'][li]))
                    }
                }
            }
        }
    })
})
//修改
Router.post("/updata",(req,res)=>{
    var  {id,num} = req.body;
    console.log(req.body)
    // console.log(id);
    // console.log(num);
    if(id==""&&num==""){return console.log("更新失败！")}
    var list;
    fs.readFile(path.join(__dirname,"../static/foodList.json"),"utf8",(err,data)=>{ //读取
        if(err){
            console.log("读取错误！:"+err);
        }else{
            // data=data.toString() //将二进制的数据转换成字符串
            data = JSON.parse(data);//将字符串转换成对象
            str = data;
            data=data.foodList;
            for(var item in data){
                for(var li in data[item]['list']){
                    if( data[item]['list'][li]['id']==id){
                        data[item]['list'][li]['num']=num;
                        list = data[item]['list'][li]['num'];
                        break;
                    }
                }
            }
            str.foodList=data;
            str = JSON.stringify(str);
            fs.writeFile(path.join(__dirname,'../static/foodList.json') ,str,function(err){ //写入
                if(err){
                    console.log("写入错误！"+err);
                }
                res.send('ok')
            })
        }
    })
})
//购物车

Router.post("/carList",(req,res)=>{
    var  {carList} = req.body;
    str = JSON.stringify(carList)
    if(carList==""){return console.log("更新失败！")}
        fs.writeFile(path.join(__dirname,'../static/carList.json') ,str,function(err){ //写入
            if(err){
                console.log("写入错误！"+err);
            }
            res.send('ok')
        })
});

//读取购物车
Router.post("/readCarlist",(req,res)=>{
        fs.readFile(path.join(__dirname,'../static/carList.json') ,"utf-8",(err,data)=>{ //写入
            if(err){
                console.log("读取错误！"+err);
            }
            data = JSON.parse(data);
            res.send(data)
        })
})



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