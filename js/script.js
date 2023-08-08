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
*/

// !06 Типы данных
//! ReferenceError - ошибка ссылочного типа (мы не можем сослаться на несуществующий объект). Это и есть null

//* null - это когда чего-то не существует
//* undefined - это когда чего-то существует но ему не присвоено значение
//* Symbol - символы
//* BigInt - большие числа (больше чем 2 в 53 степени)

// let number = 4.5; //* Number

// console.log(-4 / 0); //* -Infinity - получаем при делении на 0
// console.log("string" * 7); //* NaN (not a number) не число - не подлежит математической логики

// const string = "Vasya"; //* String

// const booLean = false; //* Boolean

// console.log(undef); //* null - это когда чего-то не существует

// let jija;
// console.log(jija); //* undefined - существует но внутри пусто

// const obj = {
// 	name: "Vasya",
// 	age: 24,
// 	isMarrid: false,
// };
// console.log(obj.isMarrid);
// console.log(obj.name);
// console.log(obj["age"]);

// let arr = [23, "lol", {}, [23, "lol", {}, [], "dick"], "dick"];
// console.log(arr[2]);

// "" + 1 + 0 = "10" //
// "" - 1 + 0 = -1 //
// true + false = 1
// 6 / "3" = 2
// "2" * "3" = 6
// 4 + 5 + "px" = "9px"
// "$" + 4 + 5 = "$45"
// "4" - 2 = 2
// "4px" - 2 = NaN
// 7 / 0 = Infinity
// "  -9  " + 5 = "  -9  5" //
// "  -9  " - 5 = -14 //
// null + 1 = 1 //
// undefined + 1 = NaN //
// " \t \n" - 2 = -2 //


// !Взаимодействие с пользователем
/*
alert("Hi Nigga!");
const rezQues = confirm("Ты чмо?");
console.log(rezQues);
const answer = +prompt("Длинна указательного пальца?(см)", "2");
console.log(answer);

const answers = [];

answers[0] = prompt("Ваше имя?", "");
answers[1] = prompt("Ваша фамилия?", "");
answers[2] = prompt("Сколько вам лет?", "");

console.log(typeof(answers));
*/

// ! 008 Интерполяция (вставлять внутри строки значения переменных)
/*
const category = "toys";
const url = "https://someurl.com/";
console.log(`${url}${category}/5`); // !используем кавычки там, где буква ё

// ! 009 Операторы в JS
//* Конкатинация - при помощи оператора сложения (унарный плюс) преобразование строк в числа, и чисел в строки
console.log("someString" + " - object"); // *выйдет строка
console.log(typeof (4 + "5")); // *выйдет строка
console.log(typeof (4 + +"5")); // *выйдет число

// *Инкремент и декримент (2 формы префиксная и постфиксная)
let incr = 10,
	decr = 10;
// ++incr;
// decr--;
console.log(incr++); // *выводит значение потом увеличивает
console.log(--decr); // *уменьшает потом выводит измененное значение
console.log(2 * 5 == "10"); // *true сравнение не строгое (не сравниваются типы данных)
console.log(2 * 5 === "10"); // *false сравнение строгое
console.log(5%2); // *возвращает остаток от деления
//* + - унарный плюс (преобразование в число, если это возможно)
//* % - возвращает остаток от деления
//* = - присваивание
//* == - сравнение только знчений без учета типа данных
//* === - строгое сравнение знчений с учетом типа данных

//* Приоритет оператора && выше, чем ||, поэтому он выполнится первым.
//* && - И - если все правда возвращает правду (возвращает первое ложное значение)
//* || - ИЛИ - хотябы 1 правда возвращает правду (возвращает первую правду)
//* ! - Отрицание - меняет на противоположное
//* != - Не равно

//* Оператор нулевого слияния представляет собой два вопросительных знака ??.

//* Так как он обрабатывает null и undefined одинаковым образом, то для этой статьи мы введём специальный термин. Для краткости будем говорить, что значение «определено», если оно не равняется ни null, ни undefined.

//* Результат выражения a ?? b будет следующим:

//* если a определено, то a,
//* если a не определено, то b.
//* Иначе говоря, оператор ?? возвращает первый аргумент, если он не null/undefined, иначе второй.

//* Оператор нулевого слияния не является чем-то принципиально новым. Это всего лишь удобный синтаксис, как из двух значений получить одно, которое «определено».

//* Вот как можно переписать выражение result = a ?? b, используя уже знакомые нам операторы:

//* result = (a !== null && a !== undefined) ? a : b;

//* Например, здесь мы отобразим user, если её значение не null/undefined, в противном случае Аноним:

//* let user;
//* alert(user ?? "Аноним"); // Аноним (user не существует)

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
//* Тернарный оператор, который работает с 3мя аргументами
numB == 23 ? console.log("numB=23") : console.log("fuck you!");

//* Switch работает только с строгим соответствием
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
} 
*/
// ! 014 Циклы
// let num = 50;

// while (num <= 55) { //* пока условие выполняется мы делаем действия
// 	console.log(num);
// 	num++;
// }

// do { //* сначала делаем действие, затем проверяем условие
// 	console.log(num);
// 	num++;
// }
// while (num <= 55);

// for (let i = 1; i < 10; i++){
// 	if (i%2) { //* пропускает не четные значения
// 		//break; //* останавливает цикл при выполнении условия
// 		continue; //* пропускает при выполнении условия этот шаг, но не прирывает выполнение цикла
// 	}
// 	console.log(i);
// }

// //* Перепишите код, заменив цикл for на while, без изменения поведения цикла.
// for (let i = 0; i < 3; i++) {
// 	console.log(`number ${i}!`);
// }

// let i = 0;
// while (i < 3) { //* пока условие выполняется мы делаем действия
// 	console.log(`number ${i}!`);
// 	i++;
// }
/*
Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).

Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.
*/
// for (let i = 0; i < 100;){
// 	i = +prompt("Введите число больше 100", "0");
// 	if (i > 100) { //* пропускает не четные значения
// 		break; //* останавливает цикл zпри выполнении условия
// 	}
// 	console.log(i);
// }

//todo Обмозговать
/*
Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.

Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.

Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.

Напишите код, который выводит все простые числа из интервала от 2 до n.

Для n = 10 результат должен быть 2,3,5,7.

P.S. Код также должен легко модифицироваться для любых других интервалов.

Для всех i от 1 до 10 {
  проверить, делится ли число i на какое-либо из чисел до него
  если делится, то это i не подходит, берём следующее
  если не делится, то i - простое число
}
*/
// let n = 10;

// nextPrime: for (let i = 2; i <= n; i++) {
// 	// Для всех i...
	
// 	for (let j = 2; j < i; j++) {
// 		// проверить, делится ли число..
// 		console.log(`i = ${i}, j = ${j}`);

// 		if (i % j == 0) continue nextPrime; // не подходит, берём следующее
// 	}

// 	console.log(`Простое число: ${i}`); // простое число
// }

//!Практика 015
/* 
Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами
*/
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

//* через while
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

//* Ивана решение
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
 */
// ! 016 Функции, стрелочные функции
// //* Function declaretion (существует до того, как вызвана, как и var интерпритатор загружает сначала функшн декларейшены и вары, а потом остальной код)
// function showMessage(text) {
// 	console.log(text);
// }
// showMessage("lil");

// let num = 20;
// function showMessage() {
// 	num = 55;
// }
// showMessage();
// console.log(num);

// function calc(a, b) {
// 	return a + b; //* после return функция не выполняется
// }
// console.log(calc(5, 6));
// console.log(calc(35, 44));


// function somFunc() { 
// 	let someNum = 30;
// 	// some code
// 	return someNum;//* вытаскиваем из функции результат ее работы
// }

// const anotherNum = somFunc();
// console.log(anotherNum);

// //* Function expression (создается только тогда, когда до нее доходит поток кода, и может быть вызвана только после ее объявления)
// let bz = function (a, b, c) {
// 	return a + b + c;
// };
// console.log(bz(3, 4, 2));

// function showMessage(from, text = "текст не добавлен") { //* text = "текст не добавлен" - это значение по умолчанию для параметра
//   console.log( from + ": " + text );
// }

// showMessage("Аня"); // Аня: текст не добавлен

// function showCount(count) { //* значение для параметра по умолчанию, используя оператор нулевого слияния ??
//   // если count равен undefined или null, показать "неизвестно"
//   console.log(count ?? "неизвестно");
// }
// showCount(0); // 0
// showCount(null); // неизвестно
// showCount(); // неизвестно

// //* Стрелочная функция (не имеет своего контекста this)
// const calk = (a, b, c) => {
// 	return a + b + c;
// };
// console.log(calk(3, 4, 2));

// //*Решение задаачек
// function checkAge(age) {
// 	return age > 18 ? true : confirm("Родители разрешили?");
// }
// let ageNigger = +prompt("Сколько вам лет?","");
// console.log(ageNigger);
// if(ageNigger != null && ageNigger != "" && !isNaN(ageNigger)){
// 	console.log(checkAge(ageNigger));
// } else{
// 	console.log("Ввведите число!");
// }

// function checkAge(age) {
// 	return age > 18 || confirm("Родители разрешили?");
// }
// console.log(checkAge(19));

// //* Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
// function min(a,b){
// 	if(a < b){
// 		return a;
// 	}
// 	return b;
// }
// //* Вариант решения с оператором ?:
// function min(a, b) {
//   return a < b ? a : b;
// }

// console.log(min(2,5));
// console.log(min(7,1));
// console.log(min(-4,3));

// //* Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.

// function pow(x,n){
// 	return n < 1 ? alert('Степень не поддерживается') : x ** n;
// }
// console.log(pow(3,2))
// console.log(pow(3,3))
// console.log(pow(1,100))

// function pow(x, n) {
// 	x = +prompt("Введите x");
// 	n = +prompt("Введите n");
// 	if (x != null && x != "" && !isNaN(x) && n != null && n != "" && !isNaN(n)) { //? Проверка введенного значения преобразованного в число: если не нажали отмену, если не ввели ничего, и если не ввели не число то выполняется действие
// 		console.log(x ** n);
// 	} else {
// 		console.log("Степень не поддерживается");
// 	}
// }
// pow();

// ! 017 Методы и свойства строк и чисел
//? Методы для строк
// let str = "tEstLul",
// 	arr = [1, 2, 3];

// console.log(str.toUpperCase()); //* Все заглавные
// console.log(str.toLowerCase()); //* Все заглавные
// console.log(arr.length); //* Длинна строки
// console.dir(Number); //* все свойства и методы у числа

// const someText =
// 		"Далеко-далеко за словесными, горами в стране гласных и согласных живут рыбные тексты. Языкового грустный ipsum дорогу необходимыми одна. Великий не семантика, предложения журчит ты проектах выйти свою возвращайся злых заголовок подзаголовок что?",
// 	slicedText = someText.indexOf("далеко"); //? с какого символа в строке по порядку начинается соответствие

// console.log(slicedText); //* соответствие с 8 символа, но выдает индекс предыдущего символа
// console.log(someText.slice(slicedText)); //* вырезаем весь текст первый аргумент откуда и второй аргумент до куда (-1 до конца) !Важно не включая последний по номеру, тоесть нужно указывать следующий индекс после последнего нужного
// console.log(someText.substring(slicedText, slicedText + 7)); //* тоже самое но не поддерживает отрицательные значения
// console.log(someText.substr(slicedText, 6)); //* первый аргумент с какого символа вырезаем, второй аргумент сколько символов после этого вырезаем

//? Методы для чисел
// const num = 15.5;
// console.log(Math.round(num)); //* Округление к ближайшему целому

// const numQ = "15.9px";
// console.log(parseInt(numQ)); //* Переводит число в другую систему исчесления и приводит к целому значения после точки отбрасываются без округления (на выходе получается числовой тип данных)
// console.log(parseFloat(numQ)); //*Переводит число в другую систему исчесления и приводит к значению с плавающей точкой (на выходе получается числовой тип данных)
// console.log(Math.round(parseFloat(numQ))); 

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
	return numberOfFilms;
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

function detectPersonalLevel() {
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
detectPersonalLevel();
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
//? Если функции идут в коде одна за другой это не значит что так же они и отработают
//todo Пример неправельного порядка выполнения функций
// function firstFunc(){
// 	setTimeout(function(){
// 		console.log("Выполнена функция 1");
// 	}, 1000);
// }
// function secondFunc() {
// 	console.log("Выполнена функция 2");
// }
// firstFunc();
// secondFunc();

//todo Пример правильного порядка порядка выполнения функций при помощи калбека
// function iLern(lang, callback) { //*callback - стандарт для вызова колбек функций
// 	console.log(`Я учу: ${lang}`);
// 	callback(); //* если поставить коблек функцию перед каким либо кодом, то сначала выполниться она а уж потом код
// }
// function afterTimeout() {
// 	setTimeout(function () {
// 		console.log("Строго после выполнить!");
// 	}, 500);
// }
// iLern("JS", afterTimeout); //todo ВАЖНО! передаем код вункции но не вызываем ее, тоесть без "()"

// ! 020 Объекты, деструктуризация объектов (ES6)

// const options = { //todo если ключи числовые они будут идти в порядке от меньшего числа к большему, если буквенные, то в порядке как они заданы в объекте
	//* создаем новый объект options
// 	name: "test", //* ключ : значение, или свойство : значение
// 	width: 1024,
// 	height: 1024,
// 	colors: { //* создаем новый объект colors внутри объекта options
// 		border: "black",
// 		bg: "red",
// 		nice: {
// 			very: true,
// 			bed: false,
// 		},
// 	},
// 	makeTest: function () {//* Это метод, тоесть функция внутри обьекта
// 		console.log("Test");
// 	},
// };
// options.makeTest();//todo вызов метода объекта
// const {border: br, bg, nice, color="blue"} = options.colors; //TODO !деструктуризация объекта! создали 4 переменные из объекта colors (border переименовали в br, и добавили новую переменную color="blue")
// console.log(br);
// console.log(bg);
// console.log(nice);
// console.log(color);

// console.log(Object.keys(options)); //* Object.keys(название объекта) --выдает массив со всеми свойствами объекта.
// console.log(Object.keys(options).length);//* Object.keys(название объекта) --выдает массив со всеми свойствами объекта. (.length --колличество ключей на верхнем уровне тоесть на первом уровне вложенности)

// console.log(options.colors.bg); //* Это и нижнее одно и тоже вывод значение свойства bg для объекта colors, который внутри объекта options
// console.log(options["colors"]["bg"]);

// delete options.name; //todo Удалить свойство объекта
// console.log(options);

//let counter = 0; //todo создаем счетчик колличества элементов в объекте
// for (let key in options) { //? перевбор ключей объекта
// 	//todo перебор свойств обьекта
// 	if (typeof options[key] === "object") {
// 		//* свойство которое тоже обьект
// 		for (let i in options[key]) {
// 			//* перебор его значений
// 			console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
// 			//counter++; //todo Увеличиваем значение счетчика на 1
// 		}
// 	} else {
// 		//* перебор обычных свойств
// 		console.log(`Свойство ${key} имеет значение ${options[key]}`);
// 		//counter++; //todo Увеличиваем значение счетчика на 1
// 	}
// 	console.log(counter); //todo не подсчитает обект в объекте!
// }

//? Еще пример деструктуризации
// let optIons = {
//   size: {
//     width: 100,
//     height: 200
//   },
//   items: ["Пончик", "Пирожное"]
// }

// let { title="Меню", size: {width, height}, items: [item1, item2] } = optIons; //todo Деструктуризация

//* Меню 100 200 Пончик Пирожное
// console.log(title);  // Меню
// console.log(width);  // 100
// console.log(height); // 200
// console.log(item1);  // Пончик
// console.log(item2);  // Пирожное

// ! 021 Массивы и псевдомассивы
//! Псевдомассивы выглядят как обыкнавенные массивы, но при этом не имеют никаких методов 

// const arr = [20, 10, 44, 32];
// arr.pop(); //* --удаление последнего элемента массива
// arr.push(10); //* --добавление элемента в конец массива
// console.log(arr);

//todo !Функция для сортировки цифр в массиве по порядку
// arr.sort(compareNum);
// function compareNum(a, b) { 
// 	return a - b;
// }
// console.log(arr);

//todo 3 варианта перебора массива
//todo 1 вариант ОСНОВА (forEach())  --вывод всех элементов массива (перебор) используем всегда (кроме когда нужно остановить в определенном месте (break) или пропустить итерацию (continiue) тогда используем FOR OFF)
// arr.forEach(function (item, i, arr) { 
// 	console.log(
// 		`${i}-порядковый номер (реальный индекс),${item}-значение соответствующее этому порядковому номеру, ${arr}-собственно весь массив`
// 	);
// });

//todo 2 вариант ОСНОВА (for of)
// for (let value of arr) { //* --вывод всех элементов массива (перебор) через for_of
// 	console.log(value);
// }

//todo 3 вариант ОСНОВА (for)
// for (let i = 0; i < arr.length; i++) { //* --вывод всех элементов массива (перебор) через обычный цикл
// 	console.log(arr[i]);
// 	console.log(`${i + 1}-й элемент массива равен: ${arr[i]}`);
// }

// const str = "sahjkdkj, asdasdj, asdjaslkd, askdoaskd";
// for (let value of str) { //* --вывод всех элементов массива (перебор) посимвольно через for_of
// 	console.log(value);
// }
// const someShit = str.split(", "); //* преобразует строку в массив в ковычках указываем разделитель
// console.log(someShit);
// someShit.sort(); //* --сортерует по алфовиту (сортерует как строки, поэтому числа он приводит к строкам и сортерует (22 будет раньше чем 3))
// console.log(someShit);
// console.log(someShit.join("# ")); //* --слепить элементы массива в строку через разделитель

// ! 022 Передача по ссылке или по значению, Spread оператор (ES6-ES9)

// ! передача по значению работает только для примитивных типов данных (числа, строки, булевые данные), при работе с объектами передача по ссылке
// let a = 10,
// 	b = 20;
// b = a;
// b += 4;
// console.log(a);
// console.log(b);// TODO примитивы выше передают данные

// const obj = {
// 	a: 5,
// 	b: 10,
// 	c: 20,
// };
// const copyObj = obj; //TODO передается не сам обьект(данные) обьекта, а просто ссылка на него
// copyObj.a = 20;
// console.log(obj);
// console.log(copyObj);// TODO обект obj изменился по ссылке

// ? Создание поверхносной копии обекта (первый уровень вложенности (тоесть сложные объекты внутри будут также пеедаваться по ссылке)) при помощи цикла.
// const obj2 = {
// 	a: 5,
// 	b: 10,
// 	c: {
// 		x: "bz",
// 		t: {
// 			zz: "bb"
// 		}
// 	}
// };

// function copy(mainObj) {
// TODO функция которая копирует и возвращает объект !!создает поверхносную копию объекта, все внутренние объекты или массивы передаются по ссылке
// 	let objCopy = {};

// 	let key;
// 	for (key in mainObj) {
// 		objCopy[key] = mainObj[key];
// 	}
// 	return objCopy;
// }
// const newObj = copy(obj2);
// newObj.a = 100;
// console.log(obj2);
// console.log(newObj);

// const addToObj = {
// 	d: 32,
// 	e: 0
// };
// console.log(Object.assign(obj2, addToObj));// ? Добавление елементов к обьекту. Также создает независимую копию объекта
// console.log(Object.assign({}, obj2));// ? Независимая поверхносная копия объекта obj2

// ? Создание поверхносной копии массива
// const arr = ['a', 'b', 'c'],
// 		copyArr = arr.slice();
// copyArr[1] = 2;
// console.log(arr);
// console.log(copyArr);

// ! Создание поверхносных копий (современных) при помощи Spread оператора ES6-ES9
// const nums = [1, 2, 3, 4],
// 	words = ["vova", "pipka", "tr9s"],
// 	numsWords = [...nums, ...words, "da", 2]; // ? разбивает массивы на значения и вставляет копию
// numsWords[2] = "asnhdjashd";
// console.log(numsWords);
// console.log(nums);
// ? Копирование массива
// const copyMassive = [...numsWords];

// ? копирование объекта
// const objN = {
// 	d: 32,
// 	e: 0
// };
// const objNcopy = { ...objN };
// objNcopy.e = "lol";
// console.log(objN);
// console.log(objNcopy);

// ! 023 Основы ООП, прототипно-ориентированное наследование
// ! Любые методы примененные даже к простым данным преобразовуют их в обект, выполняются методы и возвращается такой же простой тип данных
// console.dir([1, 2, 3]); //* В браузере цепочка наследования от null__proto__Object.prototype__proto__Array.prototype__proto__[1, 2, 3] по сути является экземпляром прототипа Array.prototype, который в свою очередь является экземпляром объекта Array.prototype

// let str = "some str",
// 	strObj = new String(str); //? приминение метода стринг к строке сделало ее объектом
// console.log(typeof(str));
// console.log(typeof(strObj));

// const protoObj = {
// 	width: 500,
// 	height: 300,
// 	backgroundColor: "#fff",
// 	color: "black",
// 	seyHello: function () {
// 		console.log("Hello!");
// 	}
// };
// const obj = {
// 	height: 100,
// };
// obj.__proto__ = protoObj; // ? старый способ установки прототипа объекта
// Object.setPrototypeOf(obj, protoObj); //? новый способ
// const obj = Object.create(protoObj); // ? создание объекта и присваивание ему прототипа
// console.log(obj.color);
// obj.seyHello();


// ! 024 Практика (Объекты и методы)
/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

// const personalMovieDB = {
// 	count: 0,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false,
// 	start: function () {
// 		personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели", "");
// 		while (!personalMovieDB.count) {
// 			personalMovieDB.count = +prompt(
// 				"Сколько фильмов вы уже посмотрели",
// 				""
// 			);
// 		}
// 	},
// 	writeYourGenres: function () {
// 		for (let i = 0; i < 3; i++) {
// 			let personalGenres = prompt(`Ваш любимый жанр под номером ${i + 1}`,"");

// 			if (!personalGenres) {
// 				console.log("Вы ввели неверные данные!")
// 				i--;
// 			} else {
// 				personalMovieDB.genres[i] = personalGenres;
// 			}
// 		};
// 		personalMovieDB.genres.forEach(function (item, i) {// TODO --вывод всех элементов массива (перебор) используем всегда (кроме когда нужно остановить в определенном месте (break) или пропустить итерацию (continiue) тогда используем FOR)
// 			console.log(`Любимый жанр #${i + 1} - это ${item}`);
// 		});
// 	},
// 	rememberMyFilms: function () {
// 		for (let i = 0; i < 2; i++) {
// 			let filmName = prompt("Один из последних просмотренных фильмов?", ""),
// 				filmRating = +prompt("На сколько оцените его?", "");
// 			if (!filmName || !filmRating || filmName.length > 50) {
// 				console.log("Введите данные");
// 				i--;
// 				continue;
// 			}
// 			personalMovieDB.movies[filmName] = filmRating;
// 		}
// 	},
// 	detectPersonalLevel: function () {
// 		if (personalMovieDB.count < 10) {
// 			console.log("Просмотрено довольно мало фильмов");
// 		} else if (personalMovieDB.count <= 30) {
// 			console.log("Вы классический зритель");
// 		} else if (personalMovieDB.count > 30) {
// 			console.log("Вы киноман");
// 		} else {
// 			console.log("Произошла ошибка");
// 		}
// 	},
// 	toggleVisibleMyDB: function () {
// 		if (personalMovieDB.privat) {
// 			personalMovieDB.privat = false;
// 		} else {
// 			personalMovieDB.privat = true;
// 		}
// 	},
// 	showMyDB: function () {// ?personalMovieDB.privat = confirm("Сделать вашу базу данны приватной?");
// 		if (!personalMovieDB.privat) {
// 			console.log(personalMovieDB);
// 		}
// 	},
// };
// personalMovieDB.start();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.writeYourGenres();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB();

// ! 025 Отлавливаем ошибки в своем коде при помощи консоли разработчика. Breakpoints
// debugger; // *создание брейкпоинта в любом месте кода

// ! 026 Динамическая типизация в JS
// ! Динамическая типизация это возможность одного типа данных превращаться в другой
/*
// ? to String
//* 1)
console.log(typeof String(null));
console.log(typeof String(4));
//* 2) конкатинация
console.log(typeof (4 + ""));

const num = 5;
console.log("http://fb.com/catalog/" + num); //* устаревшее
console.log(`http://fb.com/catalog/${num}`); //* как надо

const fontSize = 26 + "px";

// ? to Number
//* 1)
console.log(typeof Number("null"));
console.log(Number("null"));

//* 3)
console.log(typeof parseInt("15px", 10));
console.log(parseInt("15px", 10));

//* 2) унарный плюс как надо
console.log(typeof +"5");

// ? To boolean
// ! что всегда превращается в false:
// !  0, '', null, undefind, NaN;
//* 1)
let switcher = null;
if (!switcher) {
	console.log("Not working....");
}
switcher = 1;
if (switcher) {
	console.log("Working....");
}

//* 2)
console.log(typeof Boolean("null"));
console.log(typeof Boolean(null));

//* 3)
console.log(typeof !!"null");
console.log(typeof !!null);

console.log(!!"null");
console.log(!!null);
*/

// ! 027 задача по пониманию типов данных
//Какое будет выведено значение: let x = 5; alert( x++ ); ?
//5

//Чему равно такое выражение: [ ] + false - null + true ?
// console.log(typeof([ ] + false)); //* пустой массив приводится в строку + фалсе к строке выходит строка "false"
// console.log(typeof('false' - null)); // математ. действие к строке выходит NaN
// console.log(typeof(NaN + true)); // NaN + boolean = NaN
// Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
// 2

// Чему равна сумма [ ] + 1 + 2?
// '12'

// Что выведет этот код: alert( "1"[0] )? //*К каждому символу элементу строки можно обратьиться по его индексу
// "1"

// Чему равно 2 && 1 && null && 0 && undefined ?
// ! оператор И (&&) запинается на лжи и выводит ее типа как через ретурн
// ! оператор ИЛИ (||) запинается на правде
// null

// Есть ли разница между выражениями? !!( a && b ) и (a && b)?
// нет

//                                         3
// Что выведет этот код: alert( null || 2 && 3 || 4 ); ?
// ! У И (&&) приоритет выполнения выше, следовательно она будет выполняться первее (оператор ИЛИ (||) запинается на правде) 
// 3

// a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
//* не верно, поскольку сравниваются не элементы массивов а сами массивы, и они разные

// Что выведет этот код: alert( +"Infinity" ); ?
// Infinity
// console.log(typeof(+"Infinity"));
// Infinity - число;

// Верно ли сравнение: "Ёжик" > "яблоко"?
// false

// Чему равно 0 || "" || 2 || undefined || true || falsе ?
// 2

// ! 028 Получение элементов со страницы

// ? Устаревшие
// const box = document.getElementById("box");
// console.log(box);

// const btns = document.getElementsByTagName("button"); //* Всегда получаем ШТМЛ коллекцию (псевдомассив) со всеми кнопками на странице, даже если кнопка 1
// console.log(btns[1]); //* выводим в консоль 2ю кнопку

// const circles = document.getElementsByClassName("circle");//* Всегда получаем ШТМЛ коллекцию (псевдомассив) со всеми элементами на странице, даже если он 1
// console.log(circles);

// ? Новые
// const hearts = document.querySelectorAll(".heart"); //* Получаем NodeList у которого есть 1 метод forEach
// hearts.forEach((item) => {
// 	console.log(item);
// });

// const oneHeart = document.querySelector(".wrapper");
// console.log(oneHeart);


// ! 029 Действия с элементами на странице

// const box = document.getElementById("box"),
// 	btns = document.getElementsByTagName("button"),
// 	circles = document.getElementsByClassName("circle"),
// 	wrapper = document.querySelector(".wrapper"),
// 	hearts = wrapper.querySelectorAll(".heart"),
// 	oneHeart = wrapper.querySelector(".heart");

// console.dir(box); //*в консоле выводим свойства блока
// box.style.backgroundColor = "#0f0"; //* добавляем инлайн стиль
// box.style.width = "200px"; //* добавляем инлайн стиль

// box.style.cssText = "background-color: red; width: 500px"; //* добавляем много стилей одной командой
// let someWidTh = 100;
// box.style.cssText = `background-color: red; width: ${someWidTh}px`; //* добавляем много стилей одной командой с добавлением переменной

// btns[4].style.borderRadius = "100%";

// for (let i = 0; i < hearts.length; i++) { //* Старый вариант //*применить стили сразу ко всем элементам
// 	hearts[i].style.backgroundColor = "blue";
// }
// hearts.forEach((item) => { //*применить стили сразу ко всем элементам
// 	item.style.backgroundColor = "#0f0";
// });

// const div = document.createElement("div"); //* создание Дива в коде JS но не на странице
// const text = document.createTextNode("Какой-то текст"); //* Создание текстовой ноды (применяется редко)
// div.classList.add("black"); //* добавление этому диву класса 

// hearts[1].before(div);
// div.innerHTML = "<h1>Hellow world!</h1>"; //*добавление ШТМЛ внутри блока
// div.textContent = "Hellow!"; //*добавление текста внутри блока
// div.insertAdjacentHTML('beforebegin','<h2>Hellow</h2>');

// wrapper.prepend(div); //* вставка дива в ДОМ (в начало враппера)
// wrapper.append(div); //* вставка дива в ДОМ (в конец враппера)

// wrapper.insertBefore(div, hearts[1]); //* устаревшая вставка что вставляем (див), и куда вставляем до 2го элемента сердца.

// hearts[1].before(div); //* вставка до элемента
// hearts[0].after(div); //* вставка после элемента

// circles[0].remove(); //* del
// wrapper.removeChild(hearts[1]); //* удаление старое

// hearts[0].replaceWith(circles[0]); //* заменить один элемент другим
// wrapper.replaceChild(circles[0], hearts[0]); //* замена старая

//! 031 События и их обработчики

// const btn1 = document.querySelector(".btn1"),
// 	btn2 = document.querySelector(".btn2"),
// 	overlay = document.querySelector(".btn_wrapper"),
// 	btn3 = overlay.querySelector(".btn3"),
// 	btns = document.querySelectorAll("button");

// btn1.onclick = () => {
// 	alert("click");
// };
// btn1.addEventListener("click", () => {
// 	console.log("click");
// });
// btn1.addEventListener("click", () => {
// 	console.log("click2");
// });

// btns[2].addEventListener("mouseenter", (event) => {
// 	event.target.innerHTML = "222";
// });
// btns[2].addEventListener("click", (event) => {
// 	event.target.innerHTML = "3";
// });

// let i = 0;
// const chengeColorElem = (e) => { //* добавление и убирание обработчика по условию
// 	console.log(e.target);
// 	e.target.style.backgroundColor = "#0f0";
// 	i++;
// 	if (i == 1) {
// 		btn2.removeEventListener("click", chengeColorElem);
// 	}
// };
// btn2.addEventListener("click", chengeColorElem);


// const nElemListeners = (e) => { //! всплытие событий - это когда событие происходит сначала на самом глубоком уровне вложенности, а птом для всех вложенностей выше, если присвоены обработчики
// 	console.log(e.target);
// 	console.log(e.currentTarget);
// 	console.log(e.type);
// };
// btns.forEach(btn => {//* обработчик на все кнопки
// 	btn.addEventListener("click", nElemListeners, { once: true }); //* 3й параметр который передаем аддЭвентЛис это опция (once - выполнить один раз для каждой кнопки)
// });
// btn3.addEventListener("click", nElemListeners);
// overlay.addEventListener("click", nElemListeners);

// function randomInt() { //? возвращает рандомное число от 0 до 255
// 	return Math.floor(Math.random() * (255 + 1));
// }
// const funcClick = (e) => { //
// 	e.target.style.backgroundColor = `rgb(${randomInt()},${randomInt()},${randomInt()})`;
// 	// e.currentTarget.textContent = randomInt();
// };
// btn3.addEventListener("click", funcClick);
// overlay.addEventListener("click", funcClick);


// const link = document.querySelector("a");
// link.addEventListener("click", (e) => {
// 	e.preventDefault();// * отмена событий по умолчанию
// 	console.log(e.target);
// });

// ! 032 Навигация по DOM - элементам, data-атрибуты, преимущество for_of
// console.log(document.head);
// console.log(document.documentElement); //* все элементы на странице (сам тег html и его внутренности)
// console.log(document.body.childNodes); //* все дети (внутренности) боди 
// console.log(document.body.firstChild); //* первый ребенок 1й блок в бади (это символ переноса строки)
// console.log(document.body.firstElementChild);//* первый ребенок 1й блок в бади который элемент
// console.log(document.body.lastChild);
// console.log(document.body.lastElementChild);//* последний ребенок 1й блок в бади который элемент

// console.log(document.querySelector('#current').parentNode); //* родитель элемента который может быть каким-то текстом или переносом строки
// console.log(document.querySelector('#current').parentElement);//* родитель элемента который не перенос строки

//* Дата атребуты синтаксис слово data-... рандомные слова
// console.log(document.querySelector('[data-current="3"]').nextElementSibling); //* получить следующего соседа который не перенос строки

// for (let node of document.body.childNodes) { //*вывести все кроме текстовых нод
// 	if (node.nodeName == "#text") {
// 		continue;
// 	}
// 	console.log(node); 
// }
// ! 034 События на мобильных устройствах
// touchstart //* касание по элементу
// touchmove //* коснулся и двигается палец по ээлементу
// touchend //* оторвался от элемента
// touchenter //*палец зашел на пределы этого элемента
// touchleave //*ушел за пределы элемента
// touchcancel //* точка касания не регистрируется на элементе

// window.addEventListener("DOMContentLoaded", () => {
// 	const box = document.querySelector("#box");

// 	box.addEventListener("touchstart", (e) => {
// 		e.preventDefault();

// 		console.log("start");
// 	});

// 	box.addEventListener("touchmove", (e) => {
// 		e.preventDefault();

// 		console.log(e.targetTouches[0].pageX); //* по каким карденатам елозит 1й палец (0 значит 1й)
// 	});

// 	box.addEventListener("touchend", (e) => {
// 		e.preventDefault();

// 		console.log("end");
// 	});
// });

// touches //* список всех пальцев на экране
// targetTouches //* список всех пальцев которые взаимадействуют с таргетом
// chengedTouches //* список пальцев которые участвуют в текущем событии

// ! 035 Async, defer, динамические скрипты

// В HTML: <script async src="/js/script.js"></script>
// ? async -- загрузка паралельно со всем остальным, и выполнится как только будет готов, не ждет ДОМ, и другие скрипты

// В HTML: <script defer src="/js/script.js"></script>
// ? defer -- загрузка паралельно с ДОМ, но выполнится только после загрузки ДОМ, следующий скрипт с таким параметром, будет ждать загрузки этого скрипта прежде чем начнет сам загружаться

// function loadScript(src) {
// 	const script = document.createElement("script");
// 	script.src = src;
// 	script.async = false; //*по умолчанию true для динамически добавляемых на страницу скриптов
// 	document.body.append(script);
// }

// loadScript(какой-то путь к скрипту)


// ! 037 ClassList и делегирование событий

// const btns = document.querySelectorAll("button"),
// 	btnsWrapper = document.querySelector(".btn_wrapper");

// console.log(btns[0].classList.length); //* кол-во классов у 1й кнопки
// console.log(btns[0].classList.item(1)); //* возвращает 2й класс по счету у элемента

// console.log(btns[1].classList.add("green","sadasd")); //* добавить класс
// console.log(btns[0].classList.remove("firstCls")); //* удалить класс
// console.log(btns[0].classList.toggle("green")); //* если есть удалить, если нет добавить

// btns[0].addEventListener("click", () => {
	// if (!btns[1].classList.contains("green")) { //* .contains - есть ли такой класс если нет добавляем, если есть убираем
	// 	btns[1].classList.add("green");
	// } else {
	// 	btns[1].classList.remove("green");
	// }

	// btns[1].classList.toggle("green"); //* тот же функционал через .toggle - есть ли такой класс если нет добавляем, если есть убираем
// });

// btnsWrapper.addEventListener('click', (e) => { //! Делегирование событий - это передача событий от родителей к потомкам по условию, что позволяет работать с динамически добавленным контентом

	// console.dir(e.target);
	// if (e.target && e.target.tagName == "BUTTON"){ //* e.target проверка для того, что не у всех элементов на странице есть событие клика и проверяем является ли клик именно по кнопке
	// 	console.log(e.target);
	// }

	// if (e.target && e.target.nodeName == "BUTTON") { //* e.target --проверка существует ли (есть обьекты у которых нет таргета), имя ноды выше в консоле дир проверили что такое свойство есть
	// 	e.target.classList.toggle("green");
	// } else {
	// 	e.target.classList.toggle("red");
	// }

	// if (e.target && e.target.classList.contains("red")) { //* e.target --проверка существует ли (есть обьекты у которых нет таргета), содержит ли класс ред, наш таргет
	// 	btns[2].classList.toggle("green");
	// }

	// if (e.target && e.target.matches("button.red")) { //! matches ('button.red') - проверка с селекторами
	// 	e.target.classList.toggle("green");
	// }
// });

// const newBtn = document.createElement("button");//* динамически добавляем еще 1 баттон
// newBtn.classList.add("red");
// btnsWrapper.append(newBtn);
