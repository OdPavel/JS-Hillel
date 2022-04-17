'use strict'

// task #1
// const arr = [1,2,3];
// const arr2 = [4,5,6];
// arr = arr.concat(arr2);
// console.log(arr);

// task #2
// const arr = [1,2,3];
// arr.reverse();
// console.log(arr);

// task#3
// const arr = [1,2,3];
// arr.push(4,5,6);
// console.log(arr);

// task#4
// const arr = [1,2,3];
// arr.unshift(4,5,6);
// console.log(arr);

// task#5
// const arr = ['js', 'css', 'jq'];
// const arr2 = arr.shift();
// console.log(arr2);

// task#6
// const arr = ['js', 'css', 'jq'];
// const arr2 = arr.pop();
// console.log(arr2);

// task#7
// const arr = [1,2,3,4,5];
// const arr2 = arr.slice(0,3);
// console.log(arr2);

// task#8
// const arr =[1,2,3,4,5];
// const arr2 = arr.slice(3);
// console.log(arr2);

// task#9
// const arr = [1,2,3,4,5];
// arr.splice(1,2);
// console.log(arr)

// task#10
// const arr = [1,2,3,4,5];
// const arr2 = arr.slice(1,4);
// console.log(arr2);

// task#11
// let arr = [1,2,3,4,5];
// arr.splice(3,0,'a','b','c');
// console.log(arr);

// task#12
// let arr = [1,2,3,4,5];
// arr.splice(1,0,'a','b');
// arr.splice(6,0,'c');
// arr.splice(8,0,'e');
// console.log(arr)

// task#13
// let arr = [3,4,1,2,7];
// arr.sort();
// console.log(arr);

// task#14
// let arr =[5,6,7,8,9];
// let sum = null;
// for (let i = 0; i < arr.length; i++){
//     sum+=arr[i];
// }
// console.log(sum);

// task#15
// let arr = [5,6,7,8,9];
// let sum = [];
// for (let i = 0; i < arr.length; i++){
//     sum.push(Math.pow(arr[i],2));
// }
// console.log(sum);

// task#16
// let arr = [1,-3, 5, 6,-7, 8, 9,-11];
// let sum = [];
// for (let i = 0; i < arr.length; i++){
//     if(arr[i] > 0){
//         sum.push(arr[i])
//     }
// }
// arr = sum;
// console.log(arr);

// task#17
// let arr = [1,-3, 5, 6,-7, 8, 9,-11];
// let sum = [];
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] % 2 === 0){
//         sum.push(arr[i]);
//     }
// }
// arr = sum;
// console.log(arr);

// task#18
// let arr = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
// let sum = [];
// for (let i = 0; i < arr.length; i++){
//     if (arr[i].length >= 5){
//         sum.push(arr[i])//
//     }
// }
// arr = sum;
// console.log(arr);

// task#19
let arr = [1, 2, [3, 4], 5, [6, 7]];
let result = [];
for (let i = 0; i < arr.length; i++){
    if (Array.isArray(arr[i])){
        result.push(arr[i]);
    }
}
console.log(result)

// task#20
// let arr =[5,-3, 6,-5, 0,-7, 8, 9,-2];
// let negativeNumber = null;
// for (let i = 0; i < arr.length; i++){
//     if(arr[i] < 0){
//         negativeNumber+=1;
//     }
// }
// console.log(negativeNumber)
// ------------------------
