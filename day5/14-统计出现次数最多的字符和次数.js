var o = {
    age: 18
}
if (o['age']) {
    console.log('yes');
}
else {
    console.log('no');
}
//用上述方法判断一个对象是否有该属性
var exp = 'obcoefoxyozzopp';
var res = {};
var c, max;
for (var i = 0; i < exp.length; i++) {
    if (!res[exp[i]]) res[exp[i]] = 1;
    else res[exp[i]]++;
}
console.log(res);
for (var k in res) {
    max = max > res[k] ? max : res[k];
    c = max > res[k] ? c : k;
}
console.log(c + ' ' + max);

