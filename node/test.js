const mp = require('./minepackage');

//格式化时间
const dtStr = mp.dateFormate(new Date());
console.log(dtStr);
console.log('--------------');

const htmlStr = '<h1>你好&nbsp;"Hello!"</h1>';
console.log(mp.htmlEscape(htmlStr));
console.log('--------------');

const espStr = '&lt;h1&gt;你好&amp;nbsp;&quot;Hello!&quot;&lt;/h1&gt;';
console.log(mp.htmlUnescape(espStr));