##安装
```
npm i minepackage
```

##导入
```js
const mp = require('minepackage');
```

##格式化时间
```js
const dtStr = mp.dateFormate(new Date());
console.log(dtStr); //1998-02-13 7:18:37
```

##转义html字符
```js
const htmlStr = '<h1>你好&nbsp;"Hello!"</h1>';
console.log(mp.htmlEscape(htmlStr));  //&lt;h1&gt;你好&amp;nbsp;&quot;Hello!&quot;&lt;/h1&gt;
```

##还原被转义的html字符
```js
const espStr = '&lt;h1&gt;你好&amp;nbsp;&quot;Hello!&quot;&lt;/h1&gt;';
console.log(mp.htmlUnescape(espStr)); //<h1>你好&nbsp;"Hello!"</h1>
```

##协议
```
ISC
```