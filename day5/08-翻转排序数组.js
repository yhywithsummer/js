var arr = ['pink', 'red', 'blue'];
arr.reverse();
console.log(arr);

var arr1 = [1, 5, 3, 2, 4];
arr1.sort();
console.log(arr1);

var arr2 = [1, 55, 33, 2, 4];
arr2.sort();//只会比较第一个数字！
console.log(arr2);//[ 1, 2, 33, 4, 55 ]
arr2.sort(function (a, b) {
    return a - b;//原理就是数字转换为字符串之后再进行比较大小,所以不能用a<b
})
/* 
    如果 compareFn(a, b) 大于 0，b 会被排列到 a 之前。
    如果 compareFn(a, b) 小于 0，那么 a 会被排列到 b 之前；
    如果 compareFn(a, b) 等于 0，a 和 b 的相对位置不变。
*/
console.log(arr2);