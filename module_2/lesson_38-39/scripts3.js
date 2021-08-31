// При наведении на любой из блоков с классом .box
// все его дочерние элементы должны поменять свой фон на один из списка.
// ВАЖНО, только дочерние относительно блока на который навели мышь.
const colors = ['red', 'blue', 'olive', 'orange', 'pink', 'yellow', 'green', 'gray', 'aqua', 'brown'];

let boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
    box.addEventListener('mouseover', (event) => {
        let child = event.target.children;
        let timeOut = 200;
        while (child.length === 1) {
            let color = Math.floor(Math.random() * 9);
            setTimeout(colorSwitch, timeOut, child, colors[color]);
            timeOut += 200;
            child = child[0].children;
        }
    })

    box.addEventListener('mouseout', (event) => {
        let child = event.target.children;
        let timeOut = 200;
        while (child.length === 1) {
            setTimeout(colorSwitch, timeOut, child, 'white');
            timeOut += 200;
            child = child[0].children;
        }
    })
});

function colorSwitch(child, color)
{
    child[0].style.backgroundColor = `${color}`
}