var num = 10;
fun();

function fun() {
    console.log(num);
    var num = 20;
}
//相当于执行以下操作
var num;
function fun() {
    var num
    console.log(num);//undefined
    num = 20;
}
num = 10;
fun();
//second
var num1 = 10;
function fn() {
    console.log(num1);
    var num1 = 20;
    console.log(num1);
}
fn();
//相当于以下代码
var num1;
function fn() {
    var num1;
    console.log(num1);//undefined
    num1 = 20;
    console.log(num1);//20
}
fn();

fn1();
console.log(b);
console.log(c);
console.log(a);
function fn1() {
    var a = b = c = 9;
    //var a = 9;b = 9;c = 9; b c是全局变量
    //正常是var a = 9, b = 9, c = 9;
    console.log(a);
    console.log(b);
    console.log(c);
}
//相当于以下代码
function fn1() {
    var a;
    a = 9;
    b = 9;
    c = 9;
    console.log(a);
    console.log(b);
    console.log(c);
}
fn1();//999
console.log(b);//9
console.log(c);//9
console.log(a);//报错