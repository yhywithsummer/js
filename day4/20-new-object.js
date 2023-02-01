var obj = new Object();
obj.uname = 'yhy';
obj.age = 18;
obj.sex = 'man';
obj.sayHi = function () {
    console.log('hi');
}
console.log(obj.uname);
console.log(obj['age']);
obj.sayHi();

var naruto = new Object();
naruto.uname = 'mingren';
naruto.sex = 'man';
naruto.age = 18;
naruto.skill = function () {
    console.log('影分身之术');
}