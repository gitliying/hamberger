const express = require("express");
const Router = express.Router();

Router.post('/login',(req,res)=>{
	let {username,userpass} = req.body;
	userModel.find({username,userpass})
	.then((data)=>{
		console.log(data);
		if(data.length>=1){
			return res.send(utils.sendData(0,'登录成功',null))
		}
		res.send(utils.sendData(-1,'登录失败，请重试',null))
	})
})

Router.post('/reg',(req,res)=>{
	res.send('注册失败，请重试')
})

//抛出路由
module.exports = Router;