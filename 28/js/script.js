'use strict';

let calculator = {
    num1: 0,
    num2: 0,
    read() {

        do {
            this.num1 = +prompt('Enter first number');
            this.num2 = +prompt('Enter second number');
        }
        while (isNaN(this.num1) || isNaN(this.num2) || this.num1 === null || this.num2 === null)

    },
    sum() {
        return this.num1 + this.num2
    },
    mul() {
        return this.num1 * this.num2
    },
};

calculator.read();
// console.log(calculator);
console.log(calculator.sum());
console.log(calculator.mul());