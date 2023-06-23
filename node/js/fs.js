const fs = require('fs');
// 读文件
fs.readFile('../index.html', 'utf8', (err, dataStr) => {
  if(err){ return console.log(`文件读取失败。\n${err}`)};
  console.log(`文件读取成功。\n${dataStr}`);
  // 写文件
  const content = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>关于</title>
  </head>
  <body>
    <h1>关于</h1>
  </body>
  </html>`
  fs.writeFile('../readMe.txt', content, (err) => {
    if(err){return console.log(`文件写入失败。${err}`)};
    console.log('文件写入成功');
  });
});