'use strict'

// #1
// const x = 10;
// const y = 7;
// let message = (x > y) ? console.log('x больше, чем y') : console.log('x не больше, чем y');

// #2
// let num = +prompt('Введите число');
// if (num % 2 == 0) {
//     console.log(`Число ${num} четное`);
// }else {
//     console.log(`Число ${num} нечетное`)
// }

// or#2
// let num = +prompt('Введите число');
// (num % 2 == 0) ? console.log(`Число ${num} четное`) : console.log(`Число ${num} нечетное`);


// #3
// let a = prompt('Введите целое число');
// let b = a.length;
// if(a > 0 && b == 1) {
//     console.log(`Число ${a} однозначное положительное`);
// }else if (a > 0 && b == 2) {
//     console.log(`Число ${a} двузначное положительное`);
// }else if (a > 0 && b == 3) {
//     console.log(`Число ${a} трехзначное положительное`);
// }else if(a < 0 && b == 2) {
//     console.log(`Число ${a} однозначное отрицательное`);
// }else if (a < 0 && b == 3) {
//     console.log(`Число ${a} двузначное отрицательное`);
// }else if (a < 0 && b == 4) {
//     console.log(`Число ${a} трехзначное отрицательное`);
// }else {
//     console.log(`Вы ввели не верное число`);
// }

// #4
// const firstNum = prompt('Введите первое число');
// const secondNum = prompt('Введите второе число');
// const thirdNum = prompt('Ведите третье число');
// if(firstNum > secondNum){
//     if(firstNum > thirdNum){
//         alert(`Число ${firstNum} самое большое`);
//     }else {
//         alert(`Число ${thirdNum} самое большое`);
//     }
// }else if (secondNum > thirdNum){
//     alert(`Число ${secondNum} самое большое`);
// }else {
//     alert(`Число ${thirdNum} самое большое`);
// }

// #5
const firstSide = prompt('Введите длину первой стороны');
const secondSide = prompt('Введите длину второй стороны');
const thirdSide = prompt('Ведите длину третьей стороны');
if (firstSide + secondSide > thirdSide && firstSide + thirdSide > secondSide && secondSide + thirdSide > firstSide){
    alert('Отлично, треугольник получится!')
}else{
    alert('Попробуй еще раз, треугольник не получится')
}
