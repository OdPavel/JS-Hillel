'use strict'

function createSum() {
    let s = 0;

    return function sum(n) {
        s += n
        console.log(s)
    }
}

let begg = createSum();
begg(5);
begg(10);