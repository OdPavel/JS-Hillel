'use strict'

let now = new Date();
let yearOfBirth = +prompt('Привет, у меня есть к тебе несколько вопросов. Какой год твоего рождения?', 1985);
(yearOfBirth) ? true : alert('Жаль, что ты не захотел ввести свой год рождения');
let city = prompt('Отлично, подскажи, в каком городе ты живешь?', 'Одессе');
(city) ? true : alert('Жаль, что ты не захотел ввести свой город');
let sport = prompt('И последний вопрос, какой твой любимый вид спорта?', 'бокс');
(sport) ? true : alert('Жаль, что ты не захотел ввести свой любимый вид спорта');

let userYears = now.getFullYear() - yearOfBirth;
let capitalUkraine = null;
let capitalEngland = null;
let capitalFrance = null;
if(city === 'Киев' || city === 'киев') {
    capitalUkraine = 'Украине'
}else if (city === 'Лондон' || city === 'лондон'){
    capitalEngland = 'Англии';
}else if (city === 'Париж' || city === 'париж'){
    capitalFrance = 'Франции';
}
let championBox = null;
let championFootball = null;
let championJump = null;
if (sport === 'бокс' || sport === 'Бокс') {
    championBox = 'Кличко'
}else if (sport === 'футбол' || sport === 'Футбол'){
    championFootball = 'Шевченко'
}else if (sport === 'прыжки' || sport === 'Прыжки'){
    championJump = 'Бубка'
}

if (city === 'Киев' || city === 'киев' && sport === 'бокс' || sport === 'Бокс') {
    alert(`Тебе ${userYears} лет, ты живешь в ${capitalUkraine}, и ты хочешь быть как ${championBox}`);
} else if (city === 'Лондон' || city === 'лондон' && sport === 'бокс' || sport === 'Бокс'){
    alert(`Тебе ${userYears} лет, ты живешь в ${capitalEngland}, и ты хочешь быть как ${championBox}`);
}else if (city === 'Париж' || city === 'париж' && sport === 'бокс' || sport === 'Бокс'){
    alert(`Тебе ${userYears} лет, ты живешь в ${capitalFrance}, и ты хочешь быть как ${championBox}`);
}else if (city === 'Киев' || city === 'киев' && sport === 'футбол' || sport === 'Футбол'){
    alert(`Тебе ${userYears} лет, ты живешь в ${capitalUkraine}, и ты хочешь быть как ${championFootball}`);
}else if (city === 'Лондон' || city === 'лондон' && sport === 'футбол' || sport === 'Футбол'){
    alert(`Тебе ${userYears} лет, ты живешь в ${capitalEngland}, и ты хочешь быть как ${championFootball}`);
}else if (city === 'Париж' || city === 'париж' && sport === 'футбол' || sport === 'Футбол'){
    alert(`Тебе ${userYears} лет, ты живешь в ${capitalFrance}, и ты хочешь быть как ${championFootball}`);
}else if (city === 'Киев' || city === 'киев' && sport === 'прыжки' || sport === 'Прыжки'){
    alert(`Тебе ${userYears} лет, ты живешь в ${capitalUkraine}, и ты хочешь быть как ${championJump}`);
}else if (city === 'Лондон' || city === 'лондон' && sport === 'прыжки' || sport === 'Прыжки'){
    alert(`Тебе ${userYears} лет, ты живешь в ${capitalEngland}, и ты хочешь быть как ${championJump}`);
}else if (city === 'Париж' || city === 'париж' && sport === 'прыжки' || sport === 'Прыжки') {
    alert(`Тебе ${userYears} лет, ты живешь в ${capitalFrance}, и ты хочешь быть как ${championJump}`);
}else if(city === null || city === '' ){
    alert('Вы ввели не верную информацию, попробуйте еще раз');
}else if(sport === null || sport === '' ){
    alert('Вы ввели не верную информацию, попробуйте еще раз');
}else if(userYears === null || userYears === '' || yearOfBirth === isNaN(yearOfBirth)){
    alert('Вы ввели не верную информацию, попробуйте еще раз');
}else{
    alert(`Тебе ${userYears} лет, ты живешь в ${city}, и твое хобби ${sport}`);
}
