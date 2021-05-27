let arrOne = [1, 2, 3];

// Добавление элемента в конец
console.log(arrOne.push(4, 5)) // 5
console.log(arrOne); // [1,2,3,4,5]

// Извлекает элемент из конца
console.log(arrOne.pop()) // 5
console.log(arrOne) // [1,2,3,4]

// Извлекает элемент из начала
console.log(arrOne.shift()) // 1
console.log(arrOne) // [2,3,4]

// Добавляет элементы в начало
arrOne.unshift(1, 6);
console.log(arrOne) // [1,6,2,3,4]

// splice()
let arr = ['я', 'изучаю', 'js'];
arr.splice(1, 1) // начиная с позици 1, удалить 1 элемент
console.log(arr) // ['я', 'js']
arr.splice(1, 0, 'хочу', 'выучить');
console.log(arr)

// slice()
let test = ['t', 'e', 's', 't'];
console.log(test.slice(1, 3)) // ['e','s']

//concat()
let arrTwo = [1, 2];
let arrayLike = {
    0: "что-то",
    1: "ещё",
    [Symbol.isConcatSpreadable]: true,
    length: 2
};
let concat = arrTwo.concat(arrayLike)
console.log(concat); // 1,2,что-то,ещё

// forEach()
concat.forEach(function (item, index, array){
   console.log(item);
});