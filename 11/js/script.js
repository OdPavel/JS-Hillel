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
let newYearOfBirth = (yearOfBirth) ? yearOfBirth : alert('Жаль, что ты не захотел ввести свой год рождения');
let city = prompt('Отлично, подскажи, в каком городе ты живешь?', 'Odessa');
let newCity = (city) ? city : alert('Жаль, что ты не захотел ввести свой город');
let sport = prompt('И последний вопрос, какой твой любимый вид спорта?', 'boxing');
let newSport = (sport) ? sport : alert('Жаль, что ты не захотел ввести свой любимый вид спорта');

if(newCity == 'Киев' || newCity == 'Лондон' || newCity == 'Париж' && newSport == 'бокс' || newSport == 'футбол' || newSport == 'бокс') {
    alert(now.getFullYear() - yearOfBirth)
}