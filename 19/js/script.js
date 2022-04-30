'use strict'

let result = null;
let num = null;
let num2 = null;

function mainFunction(callback) {
    do {
        num = +prompt('Enter number');
        num2 = +prompt('Enter num2');
    }
    while (isNaN(num) || isNaN(num2) || num === null || num2 === null);
    callback(num, num2);
}

function exponentiation(num, num2) {
    return result = Math.pow(num, num2);
}

function multiplay(num, num2) {
    return result = num * num2;
}

function division(num, num2) {
    return result = num / num2;
}

function modulo(num, num2) {
    return result = num % num2;
}

// mainFunction(exponentiation);
mainFunction(multiplay);
// mainFunction(division);
// mainFunction(modulo);
console.log(result);


// let result = null;
// let num;
// let num2;
// let znak;
//
// function mainFunction(callback) {
//     num = +prompt('Enter number');
//     num2 = +prompt('Enter num2');
//     znak = prompt('Wha do You want to do: ^, *, / or %');
//     callback(num, num2, znak);
// }
//
// function exponentiation(num, num2) {
//     result = Math.pow(num, num2);
//     return
// }
//
// function multiplay(num, num2) {
//     result = num * num2;
//     return
// }
//
// function division(num, num2) {
//     result = num / num2;
//     return
// }
//
// function modulo(num, num2) {
//     result = num % num2;
//     return
// }
//
// mainFunction(exponentiation);
// // mainFunction(multiplay);
// // mainFunction(division);
// // mainFunction(modulo);
// console.log(result);
//
// if (znak === '^'){
//     exponentiation();
// }else if(znak === '*'){
//     multiplay();
// }else if(znak === '/'){
//     division();
// }else if(znak === '%'){
//     modulo();
// }