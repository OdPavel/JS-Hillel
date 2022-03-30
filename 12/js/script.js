'use strict'

// #1
// const x = 10;
// const y = 7;
// let message = (x > y) ? console.log('x больше, чем y') : console.log('x небольше, чем y');

// #2
// let num = +prompt('Введите число');
// if (num % 2 == 0) {
//     console.log(`Число ${num} четное`);
// }else {
//     console.log(`Число ${num} нечетное`)
// }

// #3
let a = prompt('Введите целое число');
// console.log(a.length);
if(a > 0 && a.length){
    console.log(`Число ${a} положительное`)
}else {
    console.log(`Число ${a} отрицательное`)
}