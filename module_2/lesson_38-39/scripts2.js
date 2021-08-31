// Реализовать примитивный дропдаун.
// Изначально все dropdown-menu скрыты через класс .d-none.
// При клике на dropdown-item должен отображаться блок dropdown-menu который вложен именно
// в тот dropdown-item на котором произошел клик. При повторном клике на этот же dropdown-item
// блок dropdown-menu должен закрыться. При клике на любой другой dropdown-item уже открытый
// dropdown-menu должен закрываться а на тот который кликнули открываться.
let dropDownItems = document.body.querySelectorAll('.dropdown-item');
dropDownItems.forEach(dropDownItem => {
    dropDownItem.addEventListener('click', event => {
        dropDownItems.forEach(
            dropDownItem => dropDownItem.querySelectorAll('.dropdown-menu')
                .forEach((menu) => {
                    if (dropDownItem !== event.currentTarget) menu.classList.add('d-none');
                }))
        event.currentTarget.querySelector('.dropdown-menu').classList.toggle('d-none');
    })
});
