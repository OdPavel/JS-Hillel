'use strict'

function palindrome (num)  {
    if (num < 0) return false;
    // if (num % 10 === 0) return false;
    // if (num < 10) return true



    let result = 0;
    while (num > result) {
        result *= 10;
        result += num % 10;
        num = Math.trunc(num / 10);
    }
    if (num === result || num === Math.trunc(result/10)) {
        return 'Palindrome'
    } else {
        return palindrome(num)
    }

}




console.log(palindrome(96))

// const isPalindromeNumber = function (x) {
//     if (x < 0) return false;
//     if (x % 10 === 0) return false;
//     if (x < 10) return true
//
//     let rev = 0;
//     while (x > rev) {
//         console.log(x, rev);
//         rev *= 10;
//         rev += x % 10;
//         x = Math.trunc(x / 10);
//     }
//     console.log(x, rev);
//     return x === rev || x === Math.trunc(rev / 10);
// }

