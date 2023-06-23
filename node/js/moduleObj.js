module.exports.username = '张三';

module.exports.sayHello = function(){
  console.log('hello!');
};

// 在使用requore()导入包的时候总是以module.exports指向的对象'{}'为准,exports也不行，因为当用module.exports定义新对象时引用地址就会被改变。所以为了防止混乱，在同一个模块中不要同时使用exports和module.exports
module.exports = {
  username: '张三',
  sayHi: function(){
    console.log('Hi!');
  }
};

// module.exports === exports 代码书写更简单