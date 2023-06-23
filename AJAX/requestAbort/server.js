const express = require("express");
const app = express();

app.get("/requestAbort", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  setTimeout(function () {
    response.send("服务器延时响应");
  }, 3000);
});

app.listen("8080", function () {
  console.log("服务器在8080端口上启动，监听中。。。");
});
