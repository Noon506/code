const express = require('express');
const app = express();
app.listen(80, () => {
  console.log('Server runing at https://127.0.0.1');
})

// 监听客户端get请求，并像客户端响应具体内容
app.get('/user', (req, res) => {
  res.send({name: 'zs', age: '18', gender: '男'});
})

// 监听客户端post请求，并像客户端响应具体内容
app.post('/user', (req, res)=> {
  res.send('请求成功');
});

// send()方法既能发送json也能发送字符串