"use strict";
/* // ! Задание переменных и констант
let number = 5;
const leftBorderWidth = 1;

number = 10;
console.log(number);
const obj = {
	a: 50,
};
console.log(obj);
obj.a = 10;

console.log(obj);
(function () {})();
// ! Типы данных
let number = 4.5; // Number

console.log(-4 / 0); // -Infinity
console.log("string" * 7); // NaN

const string = "Vasya"; // String

const booLean = false; // Boolean

console.log(undef); // null

let jija;
console.log(jija); // undefined

const obj = {
	name: "Vasya",
	age: 24,
	isMarrid: false,
};
console.log(obj.isMarrid);
console.log(obj.name);
console.log(obj["age"]);

let arr = [23, "lol", {}, [23, "lol", {}, [], "dick"], "dick"];
console.log(arr[2]);
// !Взаимодействие с пользователем
alert("Hi Nigga!");
const rezQues = confirm("Ты чмо?");
console.log(rezQues);
const answer = +prompt("Длинна указательного пальца?(см)", "2");
console.log(answer);

const answers = [];

answers[0] = prompt("Ваше имя?", "");
answers[1] = prompt("Ваша фамилия?", "");
answers[2] = prompt("Сколько вам лет?", "");

console.log(typeof answers);

// !Интерполяция (вставлять внутри строки значения переменных)
const category = "toys";
const url = "https://someurl.com/";
console.log(`${url}${category}/5`); // !используем кавычки там, где буква ё

// !Операторы в JS
// *Конкатинация - при помощи оператора сложения (унарный плюс) преобразование строк в числа, и чисел в строки
console.log("someString" + " - object"); // *выйдет строка
console.log(typeof (4 + "5")); // *выйдет строка
console.log(typeof (4 + +"5")); // *выйдет число

// *Инкремент и декримент (2 формы префиксная и постфиксная)
let incr = 10,
	decr = 10;
// ++incr;
// decr--;
console.log(incr++); //выводит значение потом увеличивает
console.log(--decr); //уменьшает потом выводит измененное значение
console.log(2 * 5 == "10"); // true сравнение не строгое (не сравниваются типы данных)
console.log(2 * 5 === "10"); // false сравнение строгое
// * = - присваивание
// * == - сравнение только знчений без учета типа данных
// * === - строгое сравнение знчений с учетом типа данных
// * && - И - если все правда возвращает правду
// * || - ИЛИ - хотябы 1 правда возвращает правду
// * ! - Отрицание - меняет на противоположное
// * != - Отрицание - меняет на противоположное
const isCheked = false,
	isClose = true;
console.log(isCheked || !isClose);
 */
//!Практика 012
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
//!Практика 015
/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/
/* 
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};
if (personalMovieDB.count < 10) {
	console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count <= 30) {
	console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
	console.log("Вы киноман");
} else {
	console.log("Произошла ошибка");
}

for (let i = 0; i < 2; i++) {
	let filmName = prompt("Один из последних просмотренных фильмов?", ""),
		filmRating = +prompt("На сколько оцените его?", "");
	if (!filmName || !filmRating || filmName.length > 50) {
		console.log(
			"пользователь не мог оставить ответ в виде пустой строки, отменить ответ или ввести название фильма длинее, чем 50 символов"
		);
		i--;
		continue;
	}
	personalMovieDB.movies[filmName] = filmRating;
}

let filmName,
	filmRating,
	i = 0;

while (i < 2) {
	filmName = prompt("Один из последних просмотренных фильмов?", "");
	filmRating = +prompt("На сколько оцените его?", "");
	if (!filmName || !filmRating || filmName.length > 50) {
		console.log(
			"пользователь не мог оставить ответ в виде пустой строки, отменить ответ или ввести название фильма длинее, чем 50 символов"
		);
		i--;
		continue;
	}
	personalMovieDB.movies[filmName] = filmRating;
	i++;
}
console.log(personalMovieDB);

// ?Ивана решение
for (let i = 0; i < 2; i++) {
	const a = prompt("Один из последних просмотренных фильмов?", ""),
		b = +prompt("На сколько оцените его?", "");
	if (a != null && b != null && a != "" && b != "" && a.length < 50) {
		personalMovieDB.movies[a] = b;
	} else {
		i--;
	}
}
console.log(personalMovieDB);
// ?конец
 */
// ! Функции
// ? Function declaretion
function showMessage(text) {
	console.log(text);
}
showMessage("lil");

let num = 20;
function showMessage() {
	num = 55;
	return num;
}
showMessage();
console.log(num);

function calc(a, b) {
	return a + b;
}
console.log(calc(5, 6));
console.log(calc(35, 44));

// ? Function expression
let bz = function (a, b, c) {
	return a + b + c;
};
console.log(bz(3, 4, 2));
