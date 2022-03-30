'use strict'

let numOrStr = prompt('input number or string');
console.log(numOrStr)

// if(numOrStr === null || numOrStr.trim() === '' || isNaN( +numOrStr )) {
//     console.log('вы сделали ошибку')
// } else {
//     console.log('OK!')
// }

switch (true) {
    case numOrStr === null:
        console.log('вы отменили');
        break;
    case numOrStr.trim() === '':
        console.log('Empty String');
        break;
    case isNaN( +numOrStr ):
        console.log('number is Ba_NaN');
        break;
    default:
        console.log('OK!')
}