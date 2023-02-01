/* 
    自定义对象
    内置对象  前两种是ECMAScript
    浏览器对象


    MDN文档
*/
console.log(Math.PI);
console.log(Math.max(1, 2, 3));
console.log(Math.max(1, 2, 'q'));//NaN
console.log(Math.max());//-Infinity
console.log(Math.abs(-1));//1
console.log(Math.abs('-1'));//1隐式转换
//Math.floor()  向下取整
console.log(Math.floor(2.91));//2
console.log(Math.floor(-2.91));//-3
//Math.ceil()  向上取整
console.log(Math.ceil(1.1));//2
console.log(Math.ceil(-1.1));//-1
//Math.round() 四舍五入
console.log(Math.round(3.4));//3
console.log(Math.round(3.5));//4

//.5会往大了取 所以是-1
console.log(Math.round(-1.5));//-1
console.log(Math.round(-1.6));//-2


var myMath = {
    PI: 3.1415952653,
    max: function () {
        var max = arguments[0];
        for (var i = 1; i < arguments.length; i++) {
            max = max < arguments[i] ? arguments[i] : max;
        }
        return max;
    },
    min: function () {
        var min = arguments[0];
        for (var i = 1; i < arguments.length; i++) {
            min = min > arguments[i] ? arguments[i] : min;
        }
        return min;
    }
}
console.log('\n');
console.log(myMath.PI);
console.log(myMath.max(1, 2, 3));
console.log(myMath.min(1, 2, 3));