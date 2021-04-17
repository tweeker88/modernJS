// while
let i = 0;
while (i < 3) {
    i++;
}

// do...while
let doWhile = 0;
do {
    doWhile++;
} while (doWhile < 3)

// for
for (let i = 0; i < 3; i++) {
    console.log(`step ${i}`);
}

// break
for (let i = 0; i < 3; i++) {
    if (i === 2) {
        break;
    }
    console.log(`step ${i}`);
}
console.log('Выйдет из цикла, когда будет i=2')

// continue
for (let i = 0; i < 3; i++) {
    if (i === 2) {
        continue;
    }
    console.log(`step ${i}`);
}
console.log('Пропустит итерацию, когда будет i=2')

// метки циклов
one: for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 20; j++) {
        if (j === 2) {
            break one;
        }
        console.log(`Внутренний шаг ${j}`);
    }
    console.log(`step ${i}`);
}
