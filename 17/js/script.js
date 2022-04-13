'use strict'

function padString(str, num, sym, bool = true) {
    if(typeof str !== 'string' || str === ''){
        return console.log('string error');
    }
    if(typeof num !== 'number' || num === ''){
        return console.log('number error');
    }
    if(typeof sym !== 'string' || sym === '' || sym.length !== 1){
        return 'symbol error';
    }
    if (num < str.length){
        return str.substr(0, num);
    }
    if (bool) {
        return str.padEnd(num, sym)
    }
    if (bool === false) {
        return str.padStart(num, sym)
    }
}

console.log(padString('hello', 20, '*'))
