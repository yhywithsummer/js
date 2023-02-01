var str = 'andy';//开辟一块空间 str指向它
console.log(str);
str = 'red'
console.log(str);//新开辟一块空间 str指向它
var str = '';
for (var i = 0; i < 1000000; i++) {
    str += i;
}
console.log(str);