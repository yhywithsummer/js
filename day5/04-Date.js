//Date对象是一个构造函数，必须使用new来调用创建日期对象
var dt = Date();
console.log(dt);
//如果没有提供参数，那么新创建的 Date 对象表示实例化时刻的日期和时间。
// 参数常用写法 数字型 2019,10,01 或是字符串型 '2019-10-01 8:8:8'

var date1 = new Date(2023, 2, 15);//返回的是3月
console.log(date1);

var date2 = new Date('2023-2-15 8:8:8');
console.log(date2);

//Date.getFullYear() 返回当前日期的年
//Date.getMonth() 返回当前日期的月
//Date.getDate() 返回当前是哪一日
//Date.getDay() 返回星期几
//Date.getHours() 返回当前小时
//Date.getMinutes() 返回当前分钟
//Date.getSeconds() 返回当前秒
var date3 = new Date();
console.log(date3.getFullYear());
console.log(date3.getMonth() + 1);//从0开始记
console.log(date3.getDate());
console.log(date3.getDay());//返回0-6 周日到周六
console.log(date3.getHours());
console.log(date3.getMinutes());
console.log(date3.getSeconds());

console.log(date3.valueOf());//总毫秒数 从1970.1.1开始
console.log(date3.getTime());//同上
var date4 = +new Date();//最常见写法
console.log(date4);
//h5 新增
console.log(Date.now());

function showDate(date) {
    var dt, weekday, t;
    t = date.getDay();
    var arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    weekday = arr[t];
    var h = date3.getHours();
    h = h < 10 ? '0' + h : h;
    var m = date3.getMinutes();
    m = m < 10 ? '0' + m : m;
    var s = date3.getSeconds();
    s = s < 10 ? '0' + s : s;
    dt = date3.getFullYear() + '年 ' + (date3.getMonth() + 1) + '月 ' + date3.getDate() + '日 ' + weekday + ' ' + h + ':' + m + ':' + s;
    return dt;
}

console.log(showDate(date3));
