// Объявление функции
function funcName()
{
    console.log('Это тело функции');
}

// Объявление функции с параметрами с дефолтным значением
function funcNameWithArguments(name = 'Maxim')
{
    console.log(`Привет ${name}`)
}

// Объявление функции с возвращаемым значением
function calc(a, b)
{
    return a + b;
}
console.log(calc(1,2)); // 3

// Arguments в функции
function arguments()
{
    for (let i = 0; i < arguments.length; i++){
        console.log(arguments[i]);
    }
}
