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

"" + 1 + 0 = "10" //
"" - 1 + 0 = -1 //
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
7 / 0 = Infinity
"  -9  " + 5 = "  -9  5" //
"  -9  " - 5 = -14 //
null + 1 = 1 //
undefined + 1 = NaN //
" \t \n" - 2 = -2 //

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

// ! 008 Интерполяция (вставлять внутри строки значения переменных)
const category = "toys";
const url = "https://someurl.com/";
console.log(`${url}${category}/5`); // !используем кавычки там, где буква ё

// ! 009 Операторы в JS
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
// ! 013 Условия
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
// ! 014 Циклы
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
// ! 016 Функции, стрелочные функции
/* // ? Function declaretion
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

const calk = (a, b, c) => {
	return a + b + c;
};
console.log(calk(3, 4, 2));

function checkAge(age) {
	return age > 18 ? true : confirm("Родители разрешили?");
}
console.log(checkAge(19));
function checkAge(age) {
	return age > 18 || confirm("Родители разрешили?");
}
console.log(checkAge(19));
 */

// ! 017 Методы и свойства строк и чисел
/* const str = "testLul",
	arr = [1, 2, 3];

console.log(arr.length);
const someText =
		"Далеко-далеко за словесными, горами в стране гласных и согласных живут рыбные тексты. Языкового грустный ipsum дорогу необходимыми одна. Великий не семантика, предложения журчит ты проектах выйти свою возвращайся злых заголовок подзаголовок что?",
	slicedText = someText.indexOf("рыбные");

console.log(someText.slice(slicedText, -1));
console.log(someText.substring(slicedText, slicedText + 6));
console.log(someText.substr(slicedText, slicedText + 6));

const num = 15.5;
console.log(Math.round(num));

const numQ = "15.9px";
console.log(parseInt(numQ));
console.log(parseFloat(numQ));
console.log(Math.round(parseFloat(numQ))); */
//!Практика 018
/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/
// ? Начало
/*
let numberOfFilms;

function start() {
	numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");

	while (!numberOfFilms) {
		numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");
	}
}
start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

function writeYourGenres() {
	for (let i = 0; i < 3; i++) {
		let personalGenres = prompt(`Ваш любимый жанр под номером ${i + 1}`, "");
		if (!personalGenres) {
			console.log(`Ваш любимый жанр под номером ${i + 1} ${personalGenres}`);
			i--;
		} else {
			personalMovieDB.genres[i] = personalGenres;
		}
	}
}
writeYourGenres();

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		let filmName = prompt("Один из последних просмотренных фильмов?", ""),
			filmRating = +prompt("На сколько оцените его?", "");
		if (!filmName || !filmRating || filmName.length > 50) {
			console.log("Введите данные");
			i--;
			continue;
		}
		personalMovieDB.movies[filmName] = filmRating;
	}
}
rememberMyFilms();

function detectPersonalLevel(){
	if (personalMovieDB.count < 10) {
		console.log("Просмотрено довольно мало фильмов");
	} else if (personalMovieDB.count <= 30) {
		console.log("Вы классический зритель");
	} else if (personalMovieDB.count > 30) {
		console.log("Вы киноман");
	} else {
		console.log("Произошла ошибка");
	}
}
function showMyDB() {
	if (!personalMovieDB.privat) {
		console.log(personalMovieDB);
	}
}
showMyDB();
// ? Конец
*/
// function detectPersonalLevel() {
// 	personalMovieDB.count < 10
// 		? console.log("Просмотрено довольно мало фильмов")
// 		: personalMovieDB.count <= 30
// 		? console.log("Вы классический зритель")
// 		: personalMovieDB.count > 30
// 		? console.log("Вы киноман")
// 		: console.log("Произошла ошибка");
// }
// detectPersonalLevel();

/* 
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
console.log(personalMovieDB); */

// ! 019 Callback функции
/* function iLern(lang, callback) {
	console.log(`Я учу: ${lang}`);
	callback();
}
function afterTimeout() {
	console.log("After timeOut!");
}
iLern("JS", afterTimeout); */
// ! 020 Объекты, деструктуризация объектов (ES6)
/* const options = {
	name: "test",
	width: 1024,
	height: 1024,
	colors: {
		border: "black",
		bg: "red",
	},
	makeTest: function () {
		// TODO Это метод, тоесть функция внутри обьекта
		console.log("Test");
	},
};
options.makeTest();
// TODO Деструктуризация объектов (вытащить данные обьекта в переменные)
const { border, bg } = options.colors; // TODO создали 2 переменные из объекта colors
console.log(border);
console.log(bg);

console.log(Object.keys(options).length);
// TODO Object.keys(название объекта) --выдает массив со всеми свойствами объекта.
// TODO .length --колличество ключей

console.log(options.colors.bg);
console.log(options["colors"]["bg"]);
delete options.name; // TODO Удалить свойство объекта
console.log(options);

for (let key in options) {
	// TODO перебор свойств обьекта
	if (typeof options[key] === "object") {
		// TODO свойство которое тоже обьект
		for (let i in options[key]) {
			// TODO перебор его значений
			console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
		}
	} else {
		// TODO перебор обычных свойств
		console.log(`Свойство ${key} имеет значение ${options[key]}`);
	}
}
 */
// ! 021 Массивы и псевдомассивы
/* 
const arr = [20, 10, 44, 32];
arr.sort(compareNum);
function compareNum(a, b) {
	// TODO функция для сортировки цифр в массиве по порядку
	return a - b;
}
console.log(arr);

arr.forEach(function (item, i, arr) {
	// TODO --вывод всех элементов массива (перебор) используем всегда (кроме когда нужно остановить в определенном месте (break) или пропустить итерацию (continiue) тогда используем FOR)
	console.log(
		`${i}-порядковый номер (реальный индекс),${item}-значение соответствующее этому порядковому номеру, ${arr}-собственно весь массив`
	);
});

for (let value of arr) {
	// TODO --вывод всех элементов массива (перебор) через for_of
	console.log(value);
}
for (let i = 0; i < arr.length; i++) {
	// TODO --вывод всех элементов массива (перебор) через обычный цикл
	console.log(arr[i]);
	console.log(`${i + 1}-й элемент массива равен: ${arr[i]}`);
}
arr.pop();
// TODO --удаление последнего элемента массива
arr.push(10);
// TODO --добавление элемента в конец массива

const str = "sahjkdkj, asdasdj, asdjaslkd, askdoaskd";
const someShit = str.split(", ");
someShit.sort();
// TODO --сортерует по алфовиту
console.log(someShit);
// TODO --распиливает строку по ключу на отдельные элементы массива
console.log(someShit);
console.log(someShit.join("# "));
// TODO --слепить элементы массива в строку через разделитель
 */
// ! 022 Передача по ссылке или по значению, Spread оператор (ES6-ES9)

// ! передача по значению работает только для примитивных типов данных (числа, строки, булевые данные), при работе с объектами передача по ссылке
/* 
let a = 10,
	b = 20;
b = a;
b += 4;
console.log(a);
console.log(b);
// TODO примитивы выше передают данные
const obj = {
	a: 5,
	b: 10,
	c: 20,
};
const copyObj = obj; //TODO передается не сам обьект(данные обьекта, а просто ссылка на него
copyObj.a = 20;
console.log(obj);
console.log(copyObj);
// TODO обект obj изменился по ссылке

// ? Создание поверхносной копии обекта (первый уровень вложенности (тоесть сложные объекты внутри будут также пеедаваться по ссылке)) при помощи цикла.
const obj = {
	a: 5,
	b: 10,
	c: 20,
};

function copy(mainObj) {
	// TODO функция которая копирует и возвращает объект
	let objCopy = {};

	let key;
	for (key in mainObj) {
		objCopy[key] = mainObj[key];
	}
	return objCopy;
}
const newObj = copy(obj);
newObj.a = 100;
console.log(obj);
console.log(newObj);

const addToObj = {
	d: 32,
	e: 0,
};
console.log(Object.assign(obj, addToObj));
// ? Добавление елементов к обьекту. Также создает независимую копию объекта
console.log(Object.assign({}, obj));
// ? Независимая поверхносная копия объекта obj

// ? Создание поверхносной копии массива
const arr = ['a', 'b', 'c'],
		copyArr = arr.slice();
copyArr[1] = 2;
console.log(arr);
console.log(copyArr);

// ! Создание поверхносных копий (современных) при помощи Spread оператора ES6-ES9
const nums = [1, 2, 3, 4],
	words = ["vova", "pipka", "tr9s"],
	numsWords = [...nums, ...words, "da", 2]; // ? разбивает массивы на значения и вставляет копию
numsWords[2] = "asnhdjashd";
console.log(numsWords);
console.log(nums);
// ? Копирование массива
const copyMassive = [...numsWords];

// ? копирование объекта
const objN = {
	d: 32,
	e: 0,
};
const objNcopy = { ...objN };
 */
// ! 023 Основы ООП, прототипно-ориентированное наследование

// ! Любые методы примененные даже к простым данным преобразовуют их в обект, выполняются методы и возвращается такой же простой тип данных

let str = "some str",
	strObj = new String(str); //? приминение метода стринг к строке сделало ее объектом
console.log(typeof str);
console.log(typeof strObj);

const protoObj = {
	width: 500,
	height: 300,
	backgroundColor: "#fff",
	color: "black",
	seyHello: function () {
		console.log("Hello!");
	},
};
const obj = {
	height: 100,
};
//obj.__proto__ = protoObj; // ? старый способ установки прототипа объекта
Object.setPrototypeOf(obj, protoObj); //? новый способ
console.log(obj.color);
obj.seyHello();
