// Пример функции, вызванной, в глоб. области видимости
function global() {
    console.log(this)
}

global() // Object Window

// Пример функции, вызванной, в объекте User
let user = {
    name: "Maxim",
    global: global,
    getName: function () {
        return this.name
    }
}
user.global(); // Object User
console.log(user.getName()); // Maxim

// call
let dog = {
    name: "Lina",
    age: 6
}

function hello()
{
    return `My name is ${this.name} and i am ${this.age}`;
}

console.log(hello()); // undefined
console.log(hello.call(dog)); // My name is Lina and i am 6