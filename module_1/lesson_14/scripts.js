// Замыкание
function makeCounter() {
    let counter = 0;

    return function () {
        return ++counter;
    }
}

let makeCounterInstance1 = makeCounter();
let makeCounterInstance2 = makeCounter();
makeCounterInstance1(); // 1
makeCounterInstance1(); // 2
makeCounterInstance2(); // 1
makeCounterInstance2(); // 2

const getHello = function (text) {
    text = text || 'Hello';
    return function (name) {
        return text + name;
    }
}

// Пример примитивного модуля
const closedCounter = (function () {
    let i = 0;
    return function () {
        return i++;
    }
});

// Пример контекста вызова
var x = 10;

function foo(a)
{
    var b = 20;

    function bar(c)
    {
        var d = 30;

        return boop(x+a+b+c+d);
    }

    function boop(e){
        return e * -1;
    }

    return bar;
}

var moar = foo(5);
moar(15);