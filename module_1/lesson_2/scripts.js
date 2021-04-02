// number
var number = Number(12);
console.log(`Number: ${number}`);

// bigInt
var bigInt = BigInt(1234567890123456789012345678901234567890n);
console.log(`bigInt: ${bigInt}`);

// string
var stringOne = String('First string');
var stringTwo = String("Second string");
var stringThree = String(`Third string`);
console.log(stringOne, stringTwo, stringThree);

// boolean
var checked = Boolean(true);
console.log(checked);

// symbol
var s1 = Symbol('id');
var s2 = Symbol('id');
console.log(s1, s2);

// object
var newObject = Object({});
console.log(newObject);

// function
var newFunc = Function(function funcName () {})
console.log(newFunc);

// array
var newArray = Array([]);
console.log(newArray)
// date
var newDate = Date();
console.log(newDate);