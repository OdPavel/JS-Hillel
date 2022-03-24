'use strict'

// task #1
Boolean(Number('10')) + 1;  //2
'sub' + Number(false); //'sub0'
16 * '   91   ';  //1456
true - 70;  //-69
Number(1 + String(1)) + 1; //12

//task #2
const numberSecontsOfHour = 60 * 60;
let hours = +prompt('Введите количество часов', 5);
let sumSecontsOfHours = numberSecontsOfHour * hours;
alert(sumSecontsOfHours);

//task #3
let num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num += 1;
num -= 1;

alert(num);