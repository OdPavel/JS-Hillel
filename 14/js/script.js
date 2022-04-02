'use strict'

const simpleNum = +prompt('Введите любое число',);

for (let i = 2; i < simpleNum; i++){
    if(simpleNum % i === 0){
        console.log(false)
        break
    }else{
        console.log(true)
    }
}