'use strict'

const arr = [1, 2, 3, -1, -2, -3];

function myArr(a) {
    const exampleArr = [];
    if (arr.length === 0) {
        console.log('Arr is example');
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            exampleArr.push(arr[i]);
        }
    }
    if (exampleArr.length > 0) {
        // console.log(true)
        return;
    } else {
        // console.log(false)
        return null;
    }
}

myArr(arr);


