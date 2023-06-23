//客户端通过URL发送的查询参数可以通过req.query获取
const express = require('express');
const app = express();

let post = 80;
app.listen(post, (req, res) => {
  console.log('Server runing at https://127.0.0.1');
});

app.get('/', (req, res) => {
  console.log(req.query); //默认情况下req.query是空对象
  res.send(req.query);
})