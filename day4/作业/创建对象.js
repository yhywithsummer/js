var computer = {
    color: 'red',
    weight: 20,
    brand: 'lenovo',
    type: 'xiaoxin',
    watchMovie: function () {
        console.log('I can watch movie!');
    },
    listen: function () {
        console.log('I can listen to music');
    },
    codeing: function () {
        console.log('I can code!');
    }
}
for (var k in computer) {
    console.log(k + ' : ' + computer[k]);
}
computer.watchMovie();
computer.listen();
computer.codeing();

var button = new Object();
button.width = '200px';
button.height = '300px';
button.bgc = 'pink';
button.click = function () {
    console.log('click a button');
}

function Car(weight, color, id) {
    this.weight = weight;
    this.color = color;
    this.id = id;
    this.manned = function () {
        console.log('come on!');
    }
    this.carry = function () {
        console.log('I can do it');
    }
    this.plough = function () {
        console.log('I like it');
    }
}
var tractors = new Car(10000, 'red', 6666);
for (var k in tractors) {
    console.log(k + ' : ' + tractors[k]);
}
tractors.manned();
tractors.carry();
tractors.plough();
