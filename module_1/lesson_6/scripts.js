let newObject = new Object();
let object = {};

console.log(newObject, object); // {}, {}

let user = {
    name: "Maxim",
    age: 24
};
console.log(user) // {"name":"Maxim", "age":24}

// Обращение к свойству объекта
console.log(user.name) // Maxim
console.log(user["name"]) // Maxim

// Добавление нового свойства
user.isAdmin = true;
console.log(user) // {"name":"Maxim", "age":24, "isAdmin":true}

// Удаление свойства
delete user.isAdmin


// Вычисляемое свойство
let fruit = prompt('Какой фрукт купить?', "apple");
let bag = {
    [fruit] : 5
};
console.log(bag);

// можно упрощенно записывать в свойства значения переменных с такими же именами
function createHuman(name, age)
{
    return {
        name,
        age,
    };
}
console.log(createHuman("Maxim", 24)) // {"name":"Maxim", "age": 24}


// Получение несуществующего свойства
let undefinedObject = {}
console.log(undefinedObject.test) // undefined

// Оператор in
console.log("test" in undefinedObject) // false

