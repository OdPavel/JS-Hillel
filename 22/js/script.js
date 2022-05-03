'use strict'


//----method indexOf-------------
// const arr = [1, 2, 3, 4, 5, 6];

// function indexOf(array, searchElement, fromIndex = 0) {
//     if (array.length <= fromIndex) {
//         return -1
//     }
//     for (let i = fromIndex; i < array.length; i++) {
//         if (array[i] === searchElement) {
//             return i
//         }
//     }
//     return -1
// }
// console.log(indexOf(arr, 3, ));


//-------method lastIndexOf------------
const string = 'Hello world'

function lastIndexOf(array, searchValue, fromIndex = array.length) {
    let array2 = array.split('');
    if (array2.length < fromIndex) {
        return -1
    }
    for (let i = fromIndex; i > 0; i--) {
        if (array2[i] === searchValue) {
            return i
        }
    }
    return -1
}
console.log(lastIndexOf(string, 'l', 1));

