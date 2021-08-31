// По нажатию на кнопку "btn-msg" должен появиться алерт с тем текстом который находится в атрибуте data-text у кнопки.
let btn = document.body.querySelector('#btn-msg');
btn.addEventListener('click', (e) => alert(e.target.getAttribute('data-text')));

// При наведении указателя мыши на "btn-msg", кнопка становится красной; когда указатель мыши покидает кнопку,
// она становится прежнего цвета. Цвет менять можно через добавление класса.
btn.addEventListener('mouseover', (event) => event.target.classList.toggle('red-btn'))
btn.addEventListener('mouseout', (event) => event.target.classList.toggle('red-btn'))

// При нажатии на любой узел документа показать в элементе с id=tag имя тега нажатого элемента.
document.body.addEventListener('click', (event) => console.log(event.target.getAttribute('id')))

// При нажатии на кнопку btn-generate добавлять в список ul элемент списка Li с текстом Item +
// порядковый номер Li по списку, т.е Item 3, Item 4 и т.д
let genBtn = document.body.querySelector('#btn-generate');
let ul = document.body.querySelector('ul');
let countLi = document.body.querySelectorAll('li').length;
genBtn.addEventListener('click', (event) => {
    let newLi = document.createElement('li');
    newLi.textContent = `Item ${++countLi}`;
    ul.appendChild(newLi)
});