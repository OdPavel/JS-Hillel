'use strict'

const znak = prompt('That do you want to do: add, sub, mult, div');
const num1 = +prompt('Enter the first number');
const num2 = +prompt('Enter the second number');
if (znak === 'add') {
  alert(`${num1} + ${num2}=${num1 + num2}`);
}
else if (znak === 'sub') {
  alert(`${num1} - ${num2}=${num1 - num2}`);
}
else if (znak === 'mult') {
  alert(`${num1} * ${num2}=${num1 * num2}`);
}
else if (znak === 'div') {
  alert(`${num1} / ${num2}=${num1 / num2}`);
}
else {
  alert('Presse f5');
}