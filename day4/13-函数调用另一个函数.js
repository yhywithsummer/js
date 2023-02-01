function fn1() {
    console.log(11);
    fn2();
}
fn1();
function fn2() {
    console.log(22);
}
function isLeap(a) {
    return a % 4 == 0 && a % 100 != 0 || a % 400 == 0 ? true : false;
}
function febDay(year) {
    var flag = isLeap(year);
    return flag == true ? 29 : 28;
}
console.log(febDay(2016));