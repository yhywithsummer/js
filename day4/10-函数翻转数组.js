function reverse(arr) {
    var i = 0;
    var j = arr.length - 1;
    var t = '';
    while (i < j) {
        t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
        i++;
        j--;
    }
    return arr;
}
var arr1 = [0, 1, 2, 3, 4, 5];
console.log(reverse(arr1));