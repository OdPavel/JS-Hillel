'use strict'

function createSum() {
    let s = 0;

    return function sum(n) {
        s += n;
        return s;
    }
}

let begg = createSum();
console.log(begg(3));
console.log(begg(5));
console.log(begg(20));