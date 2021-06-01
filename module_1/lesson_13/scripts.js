let array = [1, 5, 10, 4, 8];

// forEach()
array.forEach((value, index) => console.log(`Значение ${value} на позиции ${index}`))

// filter()
let resultFilter = array.filter(value => (value % 2) === 0);
console.log(resultFilter);

// map()
let resultMap = array.map(value => value * 10);
console.log(resultMap);

// reduce()
let resultReduce = array.reduce((sum, value) => sum + value);
console.log(resultReduce);

// sort()
let resultSort = array.sort((a, b) => a - b);
console.log(resultSort)