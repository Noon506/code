
//http.createServer(function(){});
//http.get('路径',callback);
//http.request(optioncallback);
const fs = require('fs');
const path = require('path');
const http = require('http');

fs.readFile('../index.html','utf-8',(err, datamsg) => {
  if(err){
    // return console.log('文件读取失败!' + err);
    fs.writeFile('../index.html',err,(err, datamsg) => {
      if(err){return console.log('文件读取失败！' + err);}
      console.log('文件读取成功！');
    });
  }
  console.log('文件读取成功！');
  console.log(datamsg);
});