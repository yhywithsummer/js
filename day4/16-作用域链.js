//作用域链
//内部函数访问外部函数的变量，采取的是链式查找的方式来决定哪个值，这种就够我们称为作用域链
var num = 10;
function fn() {
    // var num = 20;
    function fun() {
        console.log(num);//依次查找上一级作用域
    }
    fun();
}
fn();