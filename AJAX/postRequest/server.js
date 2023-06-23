//引入express
const express = require("express");
//创建操作对象
const app = express();

//创建路由
app.post("/postRequest", (req, res) => {
  //设置请求头，允许跨域
  res.setHeader("Access-Control-Allow-Origin", "*");
  //发送响应体
  res.send("你的post请求成功被服务器响应");
});

//post请求传参
app.post("/postRequestTP", (req, res) => {
  //设置请求头，允许跨域
  res.setHeader("Access-Control-Allow-Origin", "*");
  //发送响应体
  res.send("你的post请求成功被服务器响应并已收到传递的参数");
});

//启动服务器并监听端口
app.listen(8080, function () {
  console.log("服务器已在8080端口启动，持续监听中。。。");
});
