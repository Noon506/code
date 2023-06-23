window.addEventListener("load", function() {
    //自动播放轮播图
    let div = document.querySelector(".box");
    let ul = div.children[0];
    let ol = div.children[1];
    let w = div.offsetWidth;
    let index = 0;

    // 动态生成小圆点
    for (let i = 0; i < div.children[0].children.length; i++) {
        let lis = document.createElement('li');
        ol.appendChild(lis);
        ol.children[0].className = 'selected';
    }

    // 克隆第一张图放到最后
    let firstImg = ul.children[0].cloneNode(true);
    ul.appendChild(firstImg);

    // 克隆最后一张图放到最前面
    let lastImg = ul.children[ul.children.length - 2].cloneNode(true);
    ul.insertBefore(lastImg, ul.children[0]);

    //自动轮播
    let timer = setInterval(function() {
        index++;
        let translatex = -index * w;
        ul.style.transition = 'all .3s cubic-bezier(0, 0, 0.06, 0.98)';
        ul.style.transform = 'translateX(' + translatex + 'px)';
    }, 3000);

    //无缝滚动
    ul.addEventListener('transitionend', function() {
        if (index >= ul.children.length - 2) {
            index = 0;
            ul.style.transition = 'none';
            let translatex = -index * w;
            ul.style.transform = 'translateX(' + translatex + 'px)';
        } else if (index < 0) {
            index = ul.children.length - 2;
            let translatex = -index * w;
            ul.style.transform = 'translateX(' + translatex + 'px)';
        }

        //当前小圆点样式
        ol.querySelector('.selected').classList.remove('selected');
        ol.children[index].classList.add('selected');
    });

    //拖动轮播
    //获取触点坐标
    let initialCooX;
    ul.addEventListener("touchstart", function(e) {
        clearInterval(timer);
        let tempX = e.targetTouches[0].pageX;
        initialCooX = tempX;
        e.preventDefault;
    });
    //获取拖动距离
    ul.addEventListener("touchmove", function(e) {
        let moveX = e.targetTouches[0].pageX - initialCooX;
        if (moveX > 50) {
            index++;
            ul.style.left = index * w + 'px';
        } else if (moveX < 0 && Math.abs(moveX) > 50) {
            index--;
            ul.style.left = -index * w + 'px';
        }
    });

    //拖动回弹

    //触摸结束重新开启定时器
    ul.addEventListener("touchend", function(e) {
        clearInterval(timer);
        setInterval(function() {
            index++;
            let translatex = -index * w;
            ul.style.transition = 'all .3s cubic-bezier(0, 0, 0.06, 0.98)';
            ul.style.transform = 'translateX(' + translatex + 'px)';
        }, 3000);
    });
});