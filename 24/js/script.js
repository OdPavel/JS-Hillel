'use strict';

(function () {
    let steps = 1;

    function palindrome(num) {
        if (num < 0) return false;
        if (num % 10 === 0) return false;
        if (num < 10) return true
        let num2 = Number(num.toString().split('').reverse().join(''));
        let sum = num + num2;
        const result = sum;

        let rev = 0;

        while (sum > rev) {
            rev *= 10;
            rev += sum % 10;
            sum = Math.trunc(sum / 10);
        }

        if (sum === rev || sum === Math.trunc(rev / 10)) {

            return {
                result,
                steps,
            }

        } else {
            steps++;
            return palindrome(result)

        }
    }

    console.log(palindrome(100));
})();