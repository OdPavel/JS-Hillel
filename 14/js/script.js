'use strict'

let simpleNum = prompt('Введите любое число');
let num = true;

if (simpleNum == 1){
    console.log(false)
}else if(simpleNum > 1){
    for (let i = 2; i < simpleNum; i++) {
        if (simpleNum % i === 0) {
      num = false;
            break
        }
    }
    console.log(num)
}

