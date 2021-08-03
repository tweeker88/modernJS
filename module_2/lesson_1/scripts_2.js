// 1. Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:
//
//     isParent(parent, child);
// isParent(document.body.children[0], document.querySelector('mark'));
// // true так как первый див является родительским элементом для mark
//
// isParent(document.querySelector('ul'), document.querySelector('mark'));
// // false так ul НЕ является родительским элементом для mark
// Функция принимает только DOM объекты.
//
// 2. Получить список всех ссылок, которые не находятся внутри списка ul
// 3. Найти элемент, который находится перед и после списка ul
function isParent(parent, child)
{
    if(!(parent instanceof HTMLElement)){
        return new Error('Ой, попал не DOM элемент');
    }

    if(child.parentNode !== document.body){
        return isParent(parent, child.parentNode);
    }

    return child === parent;
}
console.log(isParent(document.body.children[0], document.querySelector('mark')));

const allA = document.querySelectorAll('a');
console.log(Array.from(allA).filter(child => child.parentElement.localName !== 'li'))

const ul = document.querySelector('ul');
console.log(ul.nextElementSibling, ul.previousElementSibling);