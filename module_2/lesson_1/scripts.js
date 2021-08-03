// Зная структуру html, с помощью изученных
// методов получить (в консоль):
// 1. head
// 2. body
// 3. все дочерние элементы body и вывести их в
// консоль.
// 4. первый div и все его дочерние узлы
// а) вывести все дочерние узлы в консоль
// б) вывести в консоль все дочерние узлы,
// кроме первого и последнего
// Для навигации по DOM использовать методы,
// которые возвращают только элементы
console.log(document.head);
console.log(document.body);
console.log(document.body.children);
console.log(document.body.firstElementChild, document.body.firstElementChild.children);
const allChild = Array.from(document.body.firstElementChild.children);
console.log(allChild.slice(1, allChild.length - 1));
