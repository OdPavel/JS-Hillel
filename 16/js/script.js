'use script'

function myFn(num, degree = 1) {
    if (num === null || isNaN(num) || isNaN(degree)) {
        return 'some error';
    } else {
        return Math.pow(num, degree);
    }
}

let result = myFn(+prompt('enter num'), +prompt('enter degree'));
console.log(result);
