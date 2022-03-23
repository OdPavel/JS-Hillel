'use strict'

const num1 = +prompt('Введите первое число');
const znak = prompt('Ведите знак');
const num2 = +prompt('Введите второе число');
let result;
if (znak === '+') {
  result = num1 + num2;
}
else if (znak === '-') {
  result = num1 - num2;
}
else if (znak === '*') {
  result = num1 * num2;
}
else if (znak === '/') {
  result = num1 / num2;
}
alert(`Результат: ${num1} ${znak} ${num2} = ${result}`);