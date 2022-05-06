'use strict'

function noName(){
    function randomInteger(min, max) {
        let rand = min - 1 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }

    return function createGen() {
        let add = [];
        for (let i = 0; i < 100; i++) {
            add.push(randomInteger(1, 100))
        }
        console.log(add)


    }
}
let hello = noName();
hello();



