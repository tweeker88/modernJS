console.log('12' > 2) // true
console.log('12' > '2') // false
console.log(true < 2) // true
console.log(false == 0) // true

console.log(undefined == false) // false
console.log(null == false) // false

console.log([] + []); // ''
console.log({} + {}); // [object Object][object Object]
console.log([] + [1]); // '1'
console.log(1 - [1]); // 0
console.log([1] + [1]); // '11'
console.log({} - {}); // NaN