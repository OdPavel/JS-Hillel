'use strict'

// #1
// let a = +prompt('Ведите поизвольное число', 1);
// let message = (a === 0) ? 'Верно' : 'Неверно';
// console.log(message);

// #2
// let a = +prompt('Ведите поизвольное число', 1);
// let message = (a > 0) ? 'Верно' : 'Неверно';
// console.log(message);

// #3
// let a = +prompt('Ведите поизвольное число', 1);
// let message = (a < 0) ? 'Верно' : 'Неверно';
// console.log(message);

// #4
// let a = +prompt('Ведите поизвольное число', 1);
// let message = (a >= 0) ? 'Верно' : 'Неверно';
// console.log(message);

// #5
// let a = +prompt('Ведите поизвольное число', 1);
// let message = (a <= 0) ? 'Верно' : 'Неверно';
// console.log(message);

// #6
// let a = +prompt('Ведите поизвольное число', 1);
// let message = (a !== 0) ? 'Верно' : 'Неверно';
// console.log(message);

// #7
// let a = prompt('Ведите поизвольное число', 1);
// let message = (a == 'test') ? 'Верно' : 'Неверно';
// console.log(message);

// #8
// let a = prompt('Ведите поизвольное число', 1);
// let message = (a === '1') ? 'Верно' : 'Неверно';
// console.log(message);

// #9
// let a = +prompt('Ведите поизвольное число', 1);
// let message = (a > 0 && a < 5) ? 'Верно' : 'Неверно';
// console.log(message);

// #10
// let message;
// let a = +prompt('Ведите поизвольное число', 1);
// if(a == 0 || a == 2){
//     message = a + 7;
// }else{
//     message = a / 10;
// }
// console.log(message);

// #10
// let a = +prompt('Введите произвольное число');
// let message = (a == 0 || a == 2) ? a + 7 : a / 10;
// console.log(message);

// #11
// let a = +prompt('Ведите первое поизвольное число', 1);
// let b = +prompt('Ведите второе поизвольное число', 5);
// if(a <= 1 && b >= 3){
//     console.log(a + b)
// }else{
//     console.log(a - b)
// }

// #12
// let a = +prompt('Ведите первое поизвольное число', 12);
// let b = +prompt('Ведите второе поизвольное число', 10);
// let message = (a > 2 && a < 11 || b >= 6 && b < 14) ? 'Верно' : 'Неверно';
// console.log(message);

// #13
let result;
let a = +prompt('Ведите число от 1 до 4', 1);
switch (a) {
    case 1:
    result = 'Зима';
    break
    case 2:
    result = 'Весна';
    break
    case 3:
    result = 'Лето';
    break
    case 4:
    result = 'Осень';
    break
}
console.log(result);