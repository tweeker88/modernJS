#Работа с аттрибутами и манипуляция с DOM элементами
У тегов есть аттрибуты. Каждый аттрибут = свойству объекта тега.
* node.classList - возвращает коллекцию классов
* node.classList.contains() - проверяет, есть ли у элемента класс
* node.classList.add() - добавление класса
* node.classList.remove() - удаление класса
* node.classList.toggle() - добавление/удаление класса
* node.attributes - возвращает ноду с аттрибутами элемента
* node.setAttribute() - добавление аттрибута
* node.removeAttribute() - удаление аттрибута
* node.getAttribute() - получение значения аттрибута
* node.hasAttribute() - проверка аттрибута
* node.dataset.myattr - создание кастомного аттрибута

### Свойства элементов
* Node.nodeType - тип узла (числовое значение) 1-element 2-text 3-comment
* Node.tagName - содержит имя тега
* Node.nodeName - содержит имя узла
Эти свойства только для чтения  
* innerHTML - содержит html текст внутри данного элемента-узла
* outerHTML - содержит html текст внутри данного узла
* data - содержит содержимое узлов для НЕ-элементов (комментарии, текст)
* textContent - содержит текстовое содержимое узлов без тегов.

# Создание и добавление узлов или элементов
* document.createElement() - создает элемент заданному тегу
* document.createTextNode() - создает текст. узел с заданным текстом
* element.cloneNode() - создает копию ноду, если передан true, делает глубокое копирование
* parentNode.appendChild() - добавит ноду в самый конец внутрь заданной 
* parentNode.insertBefore(newEl, nextEl) - добавит ноду в указанную перед nextEl
* parentNode.removeChild() - удалит внутри элемента нужный элемент
* parentNode.replaceChild() - заменяет указанный элемент на новый
* elem.remove() - удаляет элемент
* elem.insertAdjacentHTML(position, elem) - вставляет элемент в указ.позицию (beforebegin, afterbegin, beforeend, afterend)
* document.createDocumentFragment() - создает контейнер, для подготовки к вставке элементов