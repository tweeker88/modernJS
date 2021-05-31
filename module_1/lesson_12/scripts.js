// Объявление стрелочной функции
const foo = () => {
    return 2 + 3;
};

// Объявление короткой записи
const bar = () => console.log(2 + 3);

// Пропуск круглых скобок с одним аргументом
const without = number => console.log(number);
without(20)

// Возвращение объекта
const objectFunc = text => ({name: text});
let I = objectFunc('Maxim');
console.log(I);

// Решение проблемы отсутствие arguments
const solutionProblem = (...props) => {
    let result = 0;

    for (let i = 0; i < props.length; i++) {
        result += props[i];
    }

    return result;
}

console.log(solutionProblem(1,2,3,4))