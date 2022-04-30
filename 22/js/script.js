'use strict'

const arr = [1,2,3,4,5,6];


//----method indexOf-------------
function indexOf(array) {

    // let strArr = arr.join()
    // let arr2 = strArr.split('');
    // console.log(arr2)
    for (let i = 0; i < arr.length; i++) {
        if(typeof(arr[i]) === "N"){
            return (true)
        }else {
            return (false)
        }

    //     if (arr2[i] === '4') {
    //         return [i];
    //     }
    }
    // return -1
}

console.log(indexOf(arr))

//-------method lastIndexOf------------

