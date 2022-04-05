'use strict';
// ! Задание переменных и констант
/* 	let number = 5;
	const leftBorderWidth = 1;

	number = 10;
	console.log(number);
	const obj = {
		a: 50 
	};
	console.log(obj);
	obj.a = 10;
	
	console.log(obj); 
(function () {
}());*/
// ! Типы данных
/* let number = 4.5; // Number

console.log(-4 / 0); // -Infinity
console.log('string' * 7); // NaN

const string = "Vasya"; // String

const booLean = false; // Boolean

console.log(undef); // null

let jija;
console.log(jija); // undefined

const obj = {
	name: "Vasya",
	age: 24,
	isMarrid: false
};
console.log(obj.isMarrid);
console.log(obj.name);
console.log(obj["age"]);

let arr = [23, 'lol', {}, [23, 'lol', {}, [], 'dick'], 'dick'];
console.log(arr[2]); */
// !Взаимодействие с пользователем
// alert("Hi Nigga!");
// const rezQues = confirm("Ты чмо?");
// console.log(rezQues);
// const answer = +prompt("Длинна указательного пальца?(см)", "2");
// console.log(answer);

// const answers = [];

// answers[0] = prompt('Ваше имя?', '');
// answers[1] = prompt('Ваша фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// console.log(typeof(answers));

// !Интерполяция (вставлять внутри строки значения переменных)
/* const category = 'toys';
const url = 'https://someurl.com/';
console.log(`${url}${category}/5`); // !используем кавычки там, где буква ё */

// !Операторы в JS
/* // *Конкатинация - при помощи оператора сложения (унарный плюс) преобразование строк в числа, и чисел в строки
console.log('someString' + " - object"); // *выйдет строка
console.log(typeof(4 + "5")); // *выйдет строка
console.log(typeof(4 + +"5")); // *выйдет число

// *Инкремент и декримент (2 формы префиксная и постфиксная)
let incr = 10,
	decr = 10;
// ++incr;
// decr--;
console.log(incr++); //выводит значение потом увеличивает
console.log(--decr); //уменьшает потом выводит измененное значение
console.log(2*5 == '10'); // true сравнение не строгое (не сравниваются типы данных)
console.log(2 * 5 === '10'); // false сравнение строгое
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

