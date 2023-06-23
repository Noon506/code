const express = require('express');
const app = express();

let post = 80;
app.listen(post, (req, res) => {
  console.log('Server runing at http://127.0.0.1');
});

//这里的id是参数名，值是通过url动态发送过来的。只有':'是固定写法，id是自己取的名字
app.get('/user/:id/:name', (req, res) => {
  //params: 参数。req.params是动态匹配到的参数，默认也是一个空对象
  console.log(req.params);
  res.send(req.params);
});