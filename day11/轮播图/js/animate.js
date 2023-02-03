
function animate(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var t = target - obj.offsetLeft;
        // 为了保证准确 需要分贝判断正负取整 如果向右走就是正数上取整 反之是负数下取整
        var step = t > 0 ? Math.ceil(t / 10) : Math.floor(t / 10);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            // 回调函数写在定时器结束里面
            if(callback){
                callback(obj);
            }
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15)
}