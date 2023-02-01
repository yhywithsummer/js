//push() 在数组末尾添加一个或多个数组元素
var arr = [1, 2, 3];
arr.push(4);
console.log(arr.push(4));//push返回的是新数组的长度 同时执行
console.log(arr);

//unshift() 在数组开头添加一个或多个数组元素
arr.unshift(0, 5);//返回数组长度 同时执行
console.log(arr);

//pop() 删除数组的最后一个元素
arr.pop();
console.log(arr.pop());//返回删除的元素值 同时执行
console.log(arr);

//shift() 删除数组第一个元素
arr.shift();
console.log(arr.shift());//返回删除的元素
console.log(arr);