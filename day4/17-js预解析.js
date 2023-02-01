/* 
    js代码是由浏览器中的js解析器来执行的，js解析器在运行js代码的时候分为两步：预解析和代码执行
 */
//预解析：js引擎会把js里面所有的var 还有function提升到当前作用域的最前面
//代码执行 按照代码书写的顺序从上往下执行

//预解析分为变量预解析（变量提升）和函数预解析（函数提升）
//变量提升 就是把所有变量申明提升到当前作用域的最前面 不提升赋值操作
//函数提升 就是把所有函数声明提升到前面 不调用函数

// console.log(num);//报错
console.log(num);//undefined
var num = 1;//预解析变量提升但是不赋值 所以是undefined

fn();//可以调用
function fn() {
    console.log(11);
}//预解析函数提升 可以调用

//var是变量 fun是变量名 预解析先变量提升 此时fun是变量，载执行fun()就会报错
fun();//报错
var fun = function () {
    console.log(22);
}



