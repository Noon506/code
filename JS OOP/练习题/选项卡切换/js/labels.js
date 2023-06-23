let that;
class Labels {
  constructor(id) {
    that = this;
    this.main = document.querySelector(id);
    this.add = this.main.querySelector("#addLabel");
    //li的父元素
    this.ul = this.main.querySelector("#label ul:first-child");
    //section的父元素
    this.sectionFa = this.main.querySelector("#content");
    this.functionBind();
  }

  //初始化
  functionBind() {
    that.elementCapture();
    this.add.onclick = this.addLabel;
    for (let i = 0; i < this.lis.length; i++) {
      this.lis[i].index = i;
      this.lis[i].onclick = this.toggleLabel; //方法名后面不能加括号，不然页面一打开就会直接调用标签切换函数
      this.remove[i].onclick = this.removeLabel;
      this.spans[i].ondblclick = this.editLabel;
      this.sections[i].ondblclick = this.editLabel;
    }
  }

  //选出元素
  elementCapture() {
    this.lis = this.main.querySelectorAll("li"); //li标签
    this.sections = this.main.querySelectorAll("section"); //section标签
    this.remove = this.main.querySelectorAll(".remove"); //关闭按钮
    this.spans = this.main.querySelectorAll("#label li span:first-child");
  }

  //1.切换功能
  toggleLabel() {
    that.clearClassName();
    this.className = "liActive";
    that.sections[this.index].className = "conActive";
  }
  //..清除类名
  clearClassName() {
    for (let i = 0; i < this.lis.length; i++) {
      this.lis[i].className = "";
      this.sections[i].className = "";
    }
  }
  //2.添加功能
  addLabel() {
    if (that.lis.length === 6) {
      alert("最多只能存在6个标签");
      return;
    }
    that.clearClassName();
    let random = Math.random();
    //1)创建li元素和section元素
    let li =
      '<li class="liActive"><span class="text">新标签</span><span class="remove">X</span></li>';
    let section = '<section class="conActive">测试内容' + random + "</section>";
    //2)插入到父元素
    that.ul.insertAdjacentHTML("beforeend", li);
    that.sectionFa.insertAdjacentHTML("beforeend", section);
    that.functionBind();
  }
  //3.关闭功能
  removeLabel(e) {
    e.stopPropagation();
    let index = this.parentNode.index; //绑定下标
    that.lis[index].remove();
    that.sections[index].remove();
    // that.elementCapture();
    if (document.querySelector(".liActive")) return;
    //元素移除后重新聚焦
    index--;
    that.lis[index] && that.lis[index].click();
    // if (index < 0 && that.lis.length > 1) {
    //   index++;
    //   that.lis[index].click();
    //   that.lis.length;
    // }
  }
  //4.修改功能
  editLabel() {
    let str = this.innerHTML;
    //禁止双击选中文字
    window.getSelection
      ? window.getSelection().removeAllRanges()
      : document.section.empty();
    this.innerHTML = '<input type="text">';
    let input = this.children[0];
    input.value = str;
    input.select(); //使文本框里的文字被选中
    input.onblur = function () {
      this.parentNode.innerHTML = this.value;
    };
    input.onkeyup = function(e) {
      if(e.keyCode === 13) this.blur();
    }
  }
}

new Labels("#labelsBox");
