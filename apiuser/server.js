const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

app.use(cors());
//解析post的请求参数
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//开启静态文件
app.use(express.static(path.join(__dirname,'./public')));

//引入路由
const kfcList = require("./router/kfcList.js");
const coffee = require("./router/coffee.js");

app.use('/api/kfcList',kfcList); //路由
app.use('/api/coffee',coffee); //路由

var port = 6000;
app.listen(port,()=>{
    console.log('server start in port:'+port);
})