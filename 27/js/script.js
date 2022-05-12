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

    const increment = () => {
        chargeBy(1);
        statistic.increment += 1;
    }

    const decrement = () => {
        chargeBy(-1);
        statistic.decrement += 1;
    }

    const value = () => {
        statistic.value += 1;
        return privateCounter;
    }

    const getStatistic = () => {
        return statistic
    }

    const resetStatistic = () => {
        statistic = {
            increment: 0,
            decrement: 0,
            value: 0
        };
    }

    return {
        increment,
        decrement,
        value,
        getStatistic,
        resetStatistic
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
Counter1.value();
console.log(Counter1.getStatistic());

