const express = require('express'); //请求第三方模块
const Router = express.Router(); //引用Router对象

const ultis = require('./ultis.js');

const fs = require('fs');
const path = require('path');


//var params = {
//  "id":11,
//  "imgurl":"../../../../static/coffeeList/coffee10.jpg",
//  "title":"喵咪拿铁(大)2杯",
//  "price":14.0
//}

//查询data.json文件的数据
var data = '';

function search(page,qty){
	var url = '../../hamburger/static/data.json';
	return new Promise(function(resolve,reject){
		fs.readFile(path.join(__dirname,"../static/data.json"),"utf8",function(err,data){
			if(err){
				reject(err)
			}else{
				var data = data.toString();
				data = JSON.parse(data);
				var searchData = data.data.slice(page*qty,(page+1)*qty)
				resolve(searchData);
			}
		});
	})
	
}


function search2(page,qty){
var url2 = '../../hamburger/static/dataPm.json';
	return new Promise(function(resolve,reject){
		fs.readFile(path.join(__dirname,"../static/dataPm.json"),"utf8",function(err,data){
			if(err){
				reject(err)
			}else{
				var data = data.toString();
				data = JSON.parse(data);
				var searchData = data.data.slice(page*qty,(page+1)*qty)
				resolve(searchData);
			}
		});
	})
	
}



//coffee 
Router.post('/coffeeList',(req,res)=>{
	let page = req.body.page;
	let qty = req.body.qty;
	console.log(page)
	search(page,qty)
	.then((data)=>{
		console.log(data)
		res.send(ultis.sendData('1','ok',data))
	})
	.catch((err)=>{
		console.log(err)
	})
	
})


//coffeeListPm
Router.post('/coffeeListPm',(req,res)=>{
	let page = req.body.page;
	let qty = req.body.qty;
//	console.log(page)
	search2(page,qty)
	.then((data)=>{
		console.log(data)
//		res.send(ultis.sendData('1','ok',data))
		res.send(ultis.sendData('1','ok',data))
	})
	.catch((err)=>{
		console.log(err)
	})
	
})




module.exports = Router;


