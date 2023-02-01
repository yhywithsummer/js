//js作用域（es6之前）：全局作用域 局部作用域
var num = 10;//全局变量
function fn() {
    console.log(num);//undefined
    var num = 20;//局部变量
    console.log(num);
}
fn();
console.log(num);

function f() {
    num2 = 20;//未声明的变量属于全局变量
}
f();
console.log(num2);
/* 全局变量只有在浏览器关闭时才会销毁 占用资源
局部变量函数执行完毕就会销毁 节约资源 */

/* js中没有块级作用域 js在es6中才有块级作用域
块级作用域{} if{} for{}*/
if (3 < 5) {
    var num3 = 100;
}
console.log(num3);