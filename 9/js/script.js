'use strict'

let numOrStr = prompt('input number or string');
console.log(numOrStr)

// if(numOrStr === null ) {
//     console.log('вы отменили')
//  } else if( numOrStr.trim() === '' ) {
//     console.log('Empty String');
//  } else if( isNaN( +numOrStr ) ) {
//     console.log(' number is Ba_NaN')
// } else {
//     console.log('OK!')
// }

// if(numOrStr === null || numOrStr.trim() === '' || isNaN( +numOrStr )) {
//     console.log('вы сделали ошибку')
// } else {
//     console.log('OK!')
// }

switch (numOrStr) {
    case numOrStr == null:
        console.log('вы отменили');
        break;
    case numOrStr.trim() == '':
        console.log('Empty String');
        break;
    case numOrStr == isNaN( +numOrStr ):
        console.log('number is Ba_NaN');
        break;
    default:
        console.log('OK!')
}