// Пример функции высшего порядка
let numbers = [1, 2, 3, 4, 5, 6];

function isEven(x)
{
    return x % 2 === 0;
}

console.log(numbers.filter(isEven)) // 2, 4, 6

// Реализации функций высшего порядка
function doWitchLoading(fn)
{
    console.log('Начало загрузки');
    let returnValue = fn();
    console.log('Конец загрузки');

    return returnValue;
}

function process()
{
    console.log('идет загрузка...')
}

doWitchLoading(process);

// Функция, которая возвращает функцию
function createGenerator(prefix)
{
    let index = 0;

    return function generateNewId(){
        index++;

        return prefix + index.toString();
    };
}

let newId = createGenerator('новый ид: ');
console.log(newId());
console.log(newId());
console.log(newId());

// Синглтон

function singlton(fn)
{
    let returnValue;
    let canRun = true;

    return function runOnce()
    {
        if(canRun){
            returnValue = fn.apply(this, arguments);
            canRun = false;
        }

        return returnValue;
    }
}

function checker(a, b)
{
    return a < b;
}

let singltonFunc = singlton(checker);
console.log(singltonFunc(4,1)); // false
console.log(singltonFunc(5,6)); // false
