var arr = [1, 2, 3];

//创建一个空的数组
//var arr1 = new Array();


var arr1 = new Array(2);//创建一个长度为2的空数组
console.log(arr1);//[ <2 empty items> ]

var arr2 = new Array(2, 3);// 等价于 var arr2 = [2,3];
console.log(arr2);//[ 2, 3 ]

//检测是否为数组
//instanceof 运算符 检测是否为数组
var arr3 = [];
var obj = {};
console.log(arr3 instanceof Array);
console.log(obj instanceof Array);

//Array.isArray()  H5 新增
console.log(Array.isArray(arr3));
console.log(Array.isArray(obj));