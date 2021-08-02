// извлечение элементов массива
const firstArray = ['Kostya', 'Pavel', 'Stanislav', 'Maxim'];
const [nameOne, nameTwo] = firstArray;
const [, , nameThree] = firstArray; // Пропуст первых 2-ух элементов
const [, , , ...other] = firstArray; // Rest оператора
console.log(nameOne, nameTwo);
console.log(nameThree);
console.log(other);

// извлечение свойств из объекта
const object = {
    firstName: "Maxim",
    lastName: "Teplov",
    age: 24
};
const {firstName:f, lastName:l, age:a} = object;
console.log(f,l,a);

// Извлечение вложенных объектов
const element = {
    name: 'div',
    attr: { className: 'box', title: 'info'}
};
const {name, attr: {className, title}} = element
console.log(name, className, title)

// Использование Destructuring  функцией
function test({firstName, age} = {})
{
    console.log(`Меня зовут ${firstName} и мне ${age} лет`);
}

test(object);