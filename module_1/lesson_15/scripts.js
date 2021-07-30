// создание объекта
let obj = {};
obj.name = 'messi';
obj.year = 2021;
obj.speak = function () {
    return `My name is ${this.name} and this is year ${this.year}`
}

// неполное копирование
let copyObj = Object.assign({}, obj);
copyObj.name = 'ronaldo';

// глубокое копирование
let deepObj = {
    name: 'deepOne',
    country: {
        name: "Russia"
    }
};
let newDeepObj = JSON.parse(JSON.stringify(deepObj));
newDeepObj.country.name = 'Kazakhstan';
console.log(deepObj, newDeepObj);

// создание объекта, где прототип obj
let childPrototype = Object.create(obj);
childPrototype.name = 'Maxim';
console.log(childPrototype.speak());

// преобразование объекта в массив
let arrayObj = Object.entries(obj);
console.log(arrayObj);
