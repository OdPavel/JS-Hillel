'use strict'

// let year = +prompt('Привет, у меня есть к тебе несколько вопросов. Какой год твоего рождения?', 1985);
// if (year > 1945 || year < 2020){
//     let city = prompt('Отлично, подскажи, в каком городе ты живешь?', 'Odessa');
    // if (" "){
    //     let sport = prompt('И последний вопрос, какой твой любимый вид спорта?', 'boxing');
    //     if (" "){}else{
    //         alert('Жаль, что ты не захотел ввести свой любимый вид спорта')
    //     }
    // }else{
    //     alert('Жаль, что ты не захотел ввести свой город')
    // }
// }else{
//     alert('Жаль, что ты не захотел ввести свой год рождения')
// }


// let year = +prompt('Привет, у меня есть к тебе несколько вопросов. Какой год твоего рождения?', 1985);
// if (year > 1945 && year < 2020){
//     let city = prompt('Отлично, подскажи, в каком городе ты живешь?', 'Odessa');
// }else{
//     alert('Жаль, что ты не захотел ввести свой год рождения')
// }

let now = new Date();
let yearOfBirth = +prompt('Привет, у меня есть к тебе несколько вопросов. Какой год твоего рождения?', 1985);
(yearOfBirth) ? true : alert('Жаль, что ты не захотел ввести свой год рождения');
let city = prompt('Отлично, подскажи, в каком городе ты живешь?', 'Odessa');
(city) ? true : alert('Жаль, что ты не захотел ввести свой город');
let sport = prompt('И последний вопрос, какой твой любимый вид спорта?', 'boxing');
(sport) ? true : alert('Жаль, что ты не захотел ввести свой любимый вид спорта');

let userYears = now.getFullYear() - yearOfBirth;

if(city === 'Киев' && sport === 'бокс') {
    alert(`Тебе ${userYears} лет, ты живешь в столице Украины, ты хочешь стать боксером как Кличко`);
}else if (city === 'Лондон'){
    let capitalEngland = 'Англии';
}else if (city === 'Париж'){
    let capitalFrance = 'Франции';
    console.log(capitalFrance)
}
if (sport === 'бокс') {
    let championBox = 'Кличко'
}else if (sport === 'футбол'){
    let championFootball = 'Шевченко'
}else if (sport === 'прыжки'){
    let championJump = 'Бубка'
}
console.log(city)
// // alert(`Тебе ${}`)
