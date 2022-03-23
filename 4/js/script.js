'use strict'

// task #1
const user = {}
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

console.log(user);



// task #2
const user = {
  name: 'John'
}
user.name = 'Pete';
// Да, мы можем изменять значение свойства name, и все будет работать

console.log(user);


// task #3
const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
const sum = salaries.John + salaries.Ann + salaries.Pete;

console.log(sum);

