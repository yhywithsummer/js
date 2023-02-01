var arr = ['red', 'blue', 'green', 'blue'];
//indexOf(数组元素) 返回第一次出现该数组元素的索引号
//如果找不到，返回-1
console.log(arr.indexOf('blue'));
//lastIndexOf() 返回最后一次出现该数组元素的索引号
//如果找不到 返回-1
console.log(arr.lastIndexOf('blue'));

var arr1 = ['c', 'a', 'z', 'a', 'x', 'a', 'x', 'c', 'b'];
var arr2 = [];
for (var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) == -1) {
        arr2.push(arr1[i]);
    }
}
console.log(arr2);