const fs = require('fs');
const path = require('path');
const http = require('http');
const { log } = require('console');
const server = http.createServer();

server.on('request',(req, res) => {
  
  const url = req.url;
  let fpath = '';
  url === '/'?fpath = path.join(__dirname, '..', '/index.html'):fpath = path.join(__dirname, '..', url);
  console.log(fpath);
  fs.readFile(fpath, 'utf8', (err, dataStr) => {
    if(err){
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      return res.end(`<h1>404 Not found</h1> <br/>文件读取失败。<br/>${err.message}`);console.log();
    };
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(dataStr);
    })
  });

port = 80;
server.listen(port, () => {
  console.log(`服务器运行在http://127.0.0.1:${port}`);
});