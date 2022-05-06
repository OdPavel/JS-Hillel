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
// console.log(indexOf(arr, 2, 3));


//-------method lastIndexOf------------
// const string = 'Hello world';
//
// function lastIndexOf(str, searchValue, fromIndex = str.length) {
//     let array = str.split('');
//     if (array.length < fromIndex) {
//         return -1
//     }
//     for (let i = fromIndex; i > 0; i--) {
//         if (array[i] === searchValue) {
//             return i
//         }
//     }
//     return -1
// }
//
// console.log(lastIndexOf(string, 'l', 5));

// -------------method every------------
// const arrFind = [3, 45, 67, 23, 4];
//
// function every(arr, callback) {
//
//     for (let i = 0; i < arr.length; i++) {
//         if (!callback(arr[i])) {
//             return false
//         }
//     }
//     return true
// }
//
// console.log(
//     every(arrFind, function (i) {
//         return Number.isInteger(i)
//     }))


// --------------method find--------------
// const arrFind = [3, 45, 67, 23, 4];
//
// function find(arr, callback) {
//
//     for (let i = 0; i < arr.length; i++) {
//
//         if (callback(arr[i])) {
//             return arr[i]
//         }
//     }
//     return undefined
// }
//
// console.log(
//     find(arrFind, function (i) {
//         return Number.isInteger(i)
//     }))

// --------------method findIndex--------------
// const arrFind = ['3', '45', 67, 23, 4];
//
// function findIndex(arr, callback) {
//
//     for (let i = 0; i < arr.length; i++) {
//
//         if (callback(arr[i])) {
//             return i;
//         }
//     }
//     return -1
// }
//
// console.log(
//     findIndex(arrFind, function (i) {
//         return Number.isInteger(i)
//     }))

// -------------------method includes---------
// const arrFind = [3, 45, 67, 23, 4];
//
// function includes(arr, elem, fromIndex = 0) {
//     if (fromIndex > arr.length) {
//         return new Error(alert('Балбес, не правильно ввел индекс'))
//     }
//     for (let i = fromIndex; i < arr.length; i++) {
//         if (arr[i] === elem) {
//             return true
//         }
//     }
//     return false
// }
//
// console.log(includes(arrFind, 45,55))


// --------------------------method some----------------

// const arrSome = [3, 45, 67, 23, '4'];
//
// function some(arr, callback) {
//
//     for (let i = 0; i < arr.length; i++) {
//
//         if (callback(arr[i])) {
//             return true
//         }
//     }
//     return false
// }
//
// console.log(
//     some(arrSome, function (i) {
//         return Number.isInteger(i)
//     }))