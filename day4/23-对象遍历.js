function Star(uname, age, sex) {
    this.uname = uname;
    this.aeg = age;
    this.sex = sex;
    this.sing = function (song) {
        console.log(song);
    }
}
var ldh = new Star('刘德华', 18, 'man');
//for in遍历对象
//for(变量 in 对象){

//}
for (var k in ldh) {
    console.log(k);
    console.log(ldh[k]);//必须是中括号   用点会是undefined
}