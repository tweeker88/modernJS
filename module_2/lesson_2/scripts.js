// 1. Найти параграф и получить его текстовое содержимое (только текст!)
console.log(document.body.querySelector('p').textContent);

// 2. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию
// (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0).
function getInfo(domObject) {
    return {
        "type": domObject.nodeType,
        "name": domObject.nodeName,
        "countChild": domObject.children.length
    };
}

console.log(getInfo(document.body.querySelector('span')))

// 3. Получить массив, который состоит из текстового содержимого ссылок внутри списка: getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]
function getTextFromUl(ul) {
    return Array.from(ul.querySelectorAll('a')).map((a) => a.getAttribute('href'));
}

console.log(getTextFromUl(document.body.querySelector('ul')))

// 4. В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться). Конечный результат:
//     -text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-
const p = document.body.querySelector('p');
p.childNodes.forEach((child) => {
    if (child.hasChildNodes() === false) {
        child.textContent = '-text-'
    }
});

// 1. Найти в коде список ul и добавить класс “list”
document.body.querySelector('ul').classList.add('list');

// 2. Найти в коде ссылку, находящуюся после списка ul, и добавить id=link
document.body.querySelector('ul').nextElementSibling.nextElementSibling.setAttribute('id', 'link');

// 3. На li через один (начиная с самого первого) установить класс “item”
document.body.querySelectorAll('li').forEach((node,index) => {
    if(index % 2 === 0){
        node.classList.add('item');
    }
})
// 4. На все ссылки в примере установить класс “custom-link”
document.body.querySelectorAll('a').forEach((a) => a.classList.add('custom-link'))

// Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li:
const count = 8;
for (let i = 0; i < count; i++){
    let newLi = document.createElement('li');
    newLi.classList.add('new-item')
    newLi.textContent = `item ${i}`;
    document.body.querySelector('ul').appendChild(newLi);
}

// 2. В каждую ссылку, которая находятся внутри списка ul  добавить по тегу strong (в каждую ссылку один - strong).
document.body.querySelectorAll('li').forEach((li) => {
    let newStrong = document.createElement('strong');
    if(li.querySelector('a') !== null)
    {
        li.querySelector('a').appendChild(newStrong);
    }
});

// 3. В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте сами).
// В src добавьте реальный url к картинке. Для создания элемента используйте метод createElement.
const newImg = document.createElement('img');
newImg.setAttribute('alt', 'какая-то картинка')
newImg.setAttribute('src', 'https://cs8.pikabu.ru/post_img/big/2016/02/04/7/145458292112119207.jpg')
document.body.insertBefore(newImg, document.body.children[0]);

// 4. Найти на странице элемент mark, добавить в конец содержимого текст “green” и на элемент установить класс green
document.body.querySelector('mark').innerText += ' green';
document.body.querySelector('mark').classList.add('green');
