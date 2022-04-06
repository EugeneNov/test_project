/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
	 - count - сюда передается ответ на первый вопрос
	 - movies - в это свойство поместить пустой объект
	 - actors - тоже поместить пустой объект
	 - genres - сюда поместить пустой массив
	 - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
	 - 'Один из последних просмотренных фильмов?'
	 - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
	 movies: {
		  'logan': '8.1'
	 }

Проверить, чтобы все работало без ошибок в консоли */

"use strict";

/* const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");
console.log(numberOfFilms);

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

const filmName1 = prompt("Один из последних просмотренных фильмов?", ""),
	filmRating1 = prompt("На сколько оцените его?", ""),
	filmName2 = prompt("Один из последних просмотренных фильмов?", ""),
	filmRating2 = prompt("На сколько оцените его?", "");

personalMovieDB.movies[filmName1] = filmRating1;
personalMovieDB.movies[filmName2] = filmRating2;
console.log(personalMovieDB);
 */
// ! Условия
/* if (4 == 9) {
	console.log("OK!");
} else {
	console.log("error");
}

const numB = 23;
if (numB > 70) {
	console.log(">3");
} else if (numB < 50) {
	console.log("<50");
} else {
	console.log("fuck you!");
}
// * Тернарный оператор, который работает с 3мя аргументами
numB == 23 ? console.log("numB=23") : console.log("fuck you!");

// * Switch
const num = 20;
switch (num) {
	case 22:
		console.log("num=22");
		break;
	case 21:
		console.log("num=21");
		break;
	case 24:
		console.log("num=24");
		break;
	default:
		console.log("fuck you!");
		break;
} */
// ! Циклы
/* let num = 50;

while (num <= 55) {
	console.log(num);
	num++;
}

do {
	console.log(num);
	num++;
}
while (num <= 55);

for (let i = 1; i < 8; i++){
	if (i === 6) {
		//break;
		continue;
	}
	console.log(i);
} */
