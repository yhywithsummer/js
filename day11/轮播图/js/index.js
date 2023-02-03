window.addEventListener('load', function () {
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var focus = document.querySelector('.focus');
    var focusW = focus.offsetWidth;
    var circle = 0;
    var num = 0;
    focus.addEventListener('mouseenter', function () {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
        timer = null;
    })
    focus.addEventListener('mouseleave', function () {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        timer = setInterval(function () {
            // 手动调用点击事件
            arrow_r.click();
        }, 2000)
    })
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');
    // console.log(ul.children.length);
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        li.setAttribute('index', i);
        ol.appendChild(li);
        li.addEventListener('click', function () {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            // 点击小圆圈移动ul
            // 移动距离是小圆圈的索引号(自定义属性)乘以图片宽度

            var index = this.getAttribute('index');
            // console.log(index);
            animate(ul, -index * focusW)
            num = index;
            circle = index;
        })
    }
    ol.children[0].className = 'current';
    // 在生成li的时候就可以绑定事件
    // for(var i = 0; i < ol.children.length; i++){
    //     ol.children[i].addEventListener('click',function(){
    //         for(var i = 0; i < ol.children.length; i++){
    //             ol.children[i].className = '';
    //         }
    //         this.className = 'current';
    //     })
    // }
    // 右侧按钮
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);

    function circleChange() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
    }
    var flag = true;//节流阀
    arrow_r.addEventListener('click', function () {
        // alert('1')
        if (flag) {
            flag = false;
            if (num == ul.children.length - 1) { ul.style.left = 0; num = 0 };
            num++;
            animate(ul, -num * focusW, function () {
                flag = true;
            });
            circle++;
            if (circle == ol.children.length) circle = 0;
            circleChange();
        }
    })
    arrow_l.addEventListener('click', function () {
        // alert('1')
        if (flag) {
            flag = false;
            if (num == 0) {
                ul.style.left = -focusW * (ol.children.length) + 'px';
                num = ol.children.length;
            }
            num--;
            animate(ul, -num * focusW, function () {
                flag = true;
            });
            circle--;
            if (circle == -1) circle = ol.children.length - 1;
            circleChange();
        }
    })
    var timer = setInterval(function () {
        // 手动调用点击事件
        arrow_r.click();
    }, 2000)
})