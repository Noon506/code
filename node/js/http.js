const http = require('http');
//
const server = http.createServer();
//只要http请求就会触发server.on方法，并为该方法绑定一个request事件
//req  客户端相关的数据或属性
//res  服务端相关的数据或属性
server.on('request',(req,res) => {
  console.log('服务器被请求一次！');
  const str = `你请求的地址是${req.url}，请求的方法是${req.method}`;

  // 设置响应头，防止中文乱码
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  // 调用res.end()方法向客户端发送指定内容，并结束这次的请求处理过程
  res.end(str);
});
//调用server.listen()方法即可启动服务器。如果服务器运行在80端口，则日志可以省略端口号输出
server.listen(8080, () => {
  console.log('服务器运行在http://127.0.0.1:8080');
})
