'use strict'

function noName() {
    let arr = [];

    function randomInteger(min, max) {
        let rand = min - 1 + Math.random() * (max - min + 1);
        return Math.ceil(rand);
    }

    return function createGen() {
        let num;
        for (let i = 1; arr.length < 100; i++) {
            num = randomInteger(1, 100)
            if (!arr.includes(num)) {
                arr.push(num)
            }

        }
        return arr;
    }
}

let hello = noName();
console.log(hello());




