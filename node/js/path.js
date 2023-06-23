const fs = require('fs');
const path = require ('path');
// __dirname  代表当前文件所在目录
// path.join()方法，将多个路径片段片拼接成一个完整的路径字符串
// path.basename()方法，从路径字符串中将文件名解析出来
// path.extname()方法，解析路径中的文件扩展名（Extension）
fs.readFile(path.join(__dirname,'..','readMe.txt'), 'utf8', (err,dataStr) => {  //join方法中的'..'表示返回上一级
  if(err){return console.log(`读取文件失败。\n${err}`);}
  console.log(dataStr);
});