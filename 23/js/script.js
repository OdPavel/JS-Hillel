'use strict'

// task #1
// const factorial = (n) => {
//     if (n <= 0) {
//         return 1
//     } else {
//         return (n * factorial(n - 1))
//     }
// }
// console.log(factorial(3))

// task#2
// const pow = (num, degree) => {
//   if(degree === 1){
//       return num
//   }else{
//       return num * pow(num, degree-1)
//   }
// }
// console.log(pow(2,3))


// or task#2
// const pow = (num, degree) => {
//     return (degree === 1) ? num : (num * (pow(num, degree - 1)));
// }
// console.log(pow(4,4))

// task#3
const summing = (num, inc) => {
    if (inc === 0) {
        return num
    } else {
        return summing (num + 1, inc - 1)
    }
}
console.log(summing(2, 5))