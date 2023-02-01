//只有函数有arguments对象 而且每个函数都内置好了这个arguments
//当不知道传几个参数时使用
function fn() {
    console.log(arguments);//arguments里面存储了所有传递过来的实参
    console.log(arguments.length);
    console.log(arguments[2]);
}
fn(1, 2, 3);
//arguments 是一个伪数组 可以进行遍历 具有length属性 按索引方式存储数据 不具有数组的 push pop 等方法
function max() {
    var m = 0;
    for (var i = 0; i < arguments.length; i++) {
        m = m > arguments[i] ? m : arguments[i];
    }
    return m;
}
console.log(max(1, 2, 3, 4, 5));