function isLeap(a) {
    return a % 4 == 0 && a % 100 != 0 || a % 400 == 0 ? true : false;
}
console.log(isLeap(400));
console.log(isLeap(2016));
console.log(isLeap(100));

