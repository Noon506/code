//引入express
const express = require("express");
//创建操作对象
const app = express();

//设置路由
app.get("/getRequest", (request, response) => {
  //设置响应头：允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  //设置响应体
  response.send("get请求已响应。");
})

//get请求传参
app.get("/getRequestTP", (request, response) => {
  //设置响应头：允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  //设置响应体
  response.send("get请求已响应,并已收到传递的参数。");
})

//监听端口，并启动服务器
app.listen("8080", function(){
  console.log("服务器已在8080端口启动，持续监听中。。。");
});

//终端服务器启动命令： nodemon server.js