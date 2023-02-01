/* 
    1.new构造函数在内存中创建了一个空的对象
    2.this就会指向刚才的空对象
    3.执行构造函数里面的代码，给这个空对象添加属性和方法
    4.返回这个对象
*/
function Star(uname, age, sex) {
    this.uname = uname;
    this.aeg = age;
    this.sex = sex;
    this.sing = function (song) {
        console.log(song);
    }
}
var ldh = new Star('刘德华', 18, 'man');