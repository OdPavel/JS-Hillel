'use strict'

const simpleNum = +prompt('Введите число');

for (let i = 2; i <= simpleNum; i++){
    if( simpleNum % i === 0 ){
        console.log(i);
        break;
    }
}
if(simpleNum < 1){
    console.log('NaN');
}