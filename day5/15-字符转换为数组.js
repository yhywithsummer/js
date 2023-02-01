//join 数组转为字符 arr.join('--')

var str = 'red,blue,pink';
console.log(str.split(','));
var str1 = 'a&b&c&d';
console.log(str1.split('&'));


var work = 'abaasdffggghhjjkkgfddsssss3444343';
console.log(work.length);
console.log(work.charAt(0));
console.log(work.indexOf('i') == -1 ? true : false);
console.log(work.replace('g', '22'));
console.log(work.substring(1, 6));
var o = {};
var res, max = -1;
for (var i = 0; i < work.length; i++) {
    if (!o[work[i]]) o[work[i]] = 1;
    else o[work[i]]++;
}
for (var k in o) {
    max = max > o[k] ? max : o[k];
    res = max > o[k] ? res : k;
}
console.log(res, max);
