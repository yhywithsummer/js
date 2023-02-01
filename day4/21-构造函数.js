//前两种方式一次只能创建一个对象
//利用函数的方法，重复这些相同的代码，我们就把这个函数称为构造函数
//构造函数就是把对象里面相同的属性和方法抽象出来封装到函数里面
/* function 构造函数名() {
    this.属性名 = 值;
    this.方法 = function () {

    }
    new 构造函数名();
} */
//构造函数名首字母大写
function Star(uname, age, sex) {
    this.uname = uname;
    this.aeg = age;
    this.sex = sex;
    this.sing = function (song) {
        console.log(song);
    }
}
var ldh = new Star('刘德华', 18, 'man');
ldh.sing('冰雨'); 
console.log(ldh);
//通过构造函数创建对象的过程也称为对象的实例化
var ud = new Star();
ud.aeg = 18;
console.log(ud.uname);