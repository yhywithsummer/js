//基本包装类型
var str = 'andy';
console.log(str.length);
//基本包装类型就是把简单数据类型包装成复杂数据类型
//1.把简单数据类型包装为复杂数据类型
var tmp = new String('andy');
//2.把临时变量的值给str
str = tmp;
//3.销毁这个临时变量
tmp = null;
//共有三种特殊引用类型 String Number Boolean