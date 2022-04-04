'use strict'

let now = new Date();
let yearOfBirth = prompt('Привет, у меня есть к тебе несколько вопросов. Какой год твоего рождения?',)
if (yearOfBirth === null || yearOfBirth.length < 4 || isNaN(+yearOfBirth) || yearOfBirth.trim() === ''){
    alert('Жаль, что ты не захотел ввести свой год рождения');
    yearOfBirth = 'Ты не ввел свой год рождения';
}else{
    yearOfBirth = `Тебе ${now.getFullYear() - yearOfBirth}`;
}

let city = prompt('Отлично, подскажи, в каком городе ты живешь?', );
switch (city){
    case 'Киев':
    case 'киев':
        city = 'Ты живешь в столице Украины';
        break
    case 'Лондон':
    case 'лондон':
        city = 'Ты живешь в столице Англии';
        break
    case 'Париж':
    case 'париж':
        city = 'Ты живешь в столице Франции';
        break
    case null:
    case '':
    case ' ':
        city = 'Жаль, что ты не захотел ввести свой город';
        alert('Ты ввел не верную информацию');
        break
    default:
        city = `Ты живешь в городе  ${city}`
}

let favoriteSport = prompt('И последний вопрос, какой твой любимый вид спорта?');
switch (favoriteSport) {
    case 'футбол':
    case 'Футбол':
        favoriteSport = 'ты хочешь быть как Шевченко';
        break
    case 'бокс':
    case 'Бокс':
        favoriteSport = 'ты хочешь быть как Кличко';
        break
    case 'прыжки':
    case 'Прыжки':
        favoriteSport = 'ты хочешь быть как Бубка';
        break
    case null:
    case '':
    case ' ':
        favoriteSport = 'Жаль, что ты не захотел ввести свой любимый вид спорта';
        alert('Ты ввел не верную информацию');
        break
    default:
        favoriteSport = `твое хобби ${favoriteSport}`
}

alert(`${yearOfBirth}\n ${city}\n ${favoriteSport}`);
