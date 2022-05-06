'use strict'

const makeCounter = () => {
    let privateCounter = 0;
    let statistic = {
        increment: 0,
        decrement: 0,
        value: 0
    };

    function chargeBy(val) {
        privateCounter += val;
    }

    return {
        increment: function () {
            chargeBy(1);
            statistic.increment += 1;
        },
        decrement: function () {
            chargeBy(-1);
            statistic.decrement += 1;
        },
        value: function () {
            statistic.value += 1;
            return privateCounter;
        },
        getStatistic: function () {
            return statistic
        },
        resetStatistic: function () {
            statistic = {
                increment: 0,
                decrement: 0,
                value: 0
            };
        }
    }
};
let Counter1 = makeCounter();
let Counter2 = makeCounter();
// console.log(Counter1)
Counter1.increment();
Counter1.increment();
Counter1.increment();
Counter1.decrement();
console.log(Counter1.value());
console.log(Counter1.getStatistic());
Counter1.resetStatistic();
Counter1.increment();
Counter1.increment();
Counter1.decrement();
console.log(Counter1.getStatistic());

// Counter2.increment();
// console.log(Counter2.value());



