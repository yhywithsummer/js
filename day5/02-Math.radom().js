//Math.random() 返回一个随机的小数 0<=x<1
//这个方法里面不跟参数
console.log(Math.random());

//得到在两个数之间的随机整数，包括两个数在内
function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(getRandom(1, 10));