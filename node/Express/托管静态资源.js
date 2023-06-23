const express = require('express');
const app = express();

//在这里调用express.static()方法，快速对外提供静态资源
app.use(express.static('../../node'));

//创建静态资源服务器。
app.listen(80, () => {
  console.log('Express server runing at http://127.0.0.1');
});

//注意：Express在指定静态目录中查找文件，并对外提供资源的访问路径。因此，存放静态文件的目录名不会出现在URL中。因此只要在express.static()方法中写了一个文件夹，那这个文件夹名肯定不会出现在路径中。

//如果需要托管多个静态资源目录，只需要多次调用express.static()就行了。并且静态资源的查找顺序是根据该方法的调用顺序来的，同名资源找到之后就不会找第二个了。

//路径前缀挂载
//如果想在静态资源路径之前挂载前缀，只需要把第五行代码的use函数加一个参数，该参数为前缀字符串
app.use('/node',express.static('../../node'));

//前缀挂载后想要访问某静态资源则必须在路径上加上该前缀才能访问到，并且这个前缀不一定必须是路径。这可以解决同名资源的问题。