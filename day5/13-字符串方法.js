//每次对字符串操作都会返回一个新的字符串
//根据字符返回位置 str.indexOf('object',[起始的位置])
var str = '改革春风吹满地,春天来了';
console.log(str.indexOf('春', 3));
var exp = 'obcoefoxyozzopp';
function find(a, A) {
    var num = 0;
    var res = [];
    var t = A.indexOf(a);
    while (t != -1) {
        res.push(t);
        t = A.indexOf(a, t + 1);
        num++;
    }
    console.log(res + ' ' + num);
}
find('o', exp);

//charAt根据位置返回字符
var str1 = 'andy';
console.log(str1.charAt(3));
console.log(str1[3]);//H5新增
//charCodeAt(index) 返回相应索引号字符的ASCII码 目的：用来判断用户按下了哪个键
console.log(str1.charCodeAt(0));

//concat('字符串1','字符串2'...)
str2 = 'andy';
str3 = 'red';
console.log(str2.concat(str3));

//substring
/* 
substring 提取从 indexStart 到 indexEnd（不包括）之间的字符。特别地：

如果 indexStart 等于 indexEnd，substring 返回一个空字符串。
如果省略 indexEnd，substring 提取字符一直到字符串末尾。
如果任一参数小于 0 或为 NaN，则被当作 0。
如果任一参数大于 stringName.length，则被当作 stringName.length。
如果 indexStart 大于 indexEnd，则 substring 的执行效果就像两个参数调换了一样。 */
var str4 = '改革春风吹满地风风风风';
console.log(str4.substring(2, 4));


//replace('被替换的字符','替换为的字符') 每次智慧替换第一个
console.log(str4.replace('风', '雨'));

while (exp.indexOf('o') != -1) {
    exp = exp.replace('o', 'a');
}
console.log(exp);