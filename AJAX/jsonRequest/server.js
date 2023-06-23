const express = require("express");
const app = express();

app.get("/json", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");

  const data = {
    name: "张三",
    age:18,
    gender: "男",
    creed: "越努力，越幸运"
  }

  let dataStr = JSON.stringify(data);
  response.send(dataStr);
});

app.listen("8080", function() {
  console.log("服务器在8080端口开启，持续监听中。。。");
});