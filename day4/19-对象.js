//对象是具体的事物
/* var obj = {

}创建空对象 */
var obj = {
    uname: 'yhy',
    age: 18,
    sex: 'man',
    sayHi: function () {
        console.log('hi');
    }
}
//键 属性名： 值 属性值
//多个属性或方法中间用逗号隔开
//方法冒号后面跟的是一个匿名函数

//调用对象属性：对象名.属性名
console.log(obj.uname);
//对象名['属性名']
console.log(obj['age']);
//方法调用：对象名.方法名
obj.sayHi();//别忘了小括号！

var dog = {
    dname: 'coco',
    type: '阿拉斯加',
    age: 5,
    color: 'brownred',
    bark: function () {
        console.log('wolf');
    },
    showFilm: function () {
        console.log('I can show film!');
    }
}
dog.showFilm();
