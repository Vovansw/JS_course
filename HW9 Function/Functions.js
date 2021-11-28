// function log() {
//     console.log('123');
// }

// log();

// confirm('tell yes');
// let returnSt = confirm('tell yes');
// console.log(returnSt);

// function calcTwoNumbers(firstNumber, secondNumber) {
//     console.log(firstNumber * secondNumber);
// }

// calcTwoNumbers(100, 20);

// Сума трьох чисел.

// function calcThreeNumbers(firstNumber, secondNumber, thirdNumber) {
//     return (firstNumber + secondNumber + thirdNumber);
// }
// console.log(calcThreeNumbers(2, 3, 4));
// let sum = calcThreeNumbers(2, 3, 4);
// console.log(sum);
// alert(sum);

// Сума трьох чисел Expression

// let calcThreeNumbersExpression = function (firstNumber, secondNumber, thirdNumber) {
//     return (firstNumber + secondNumber + thirdNumber);
// }
// console.log(calcThreeNumbersExpression(2, 3, 4));
// let sum = calcThreeNumbersExpression(2, 3, 4);
// console.log(sum);
// alert(sum);

// Множення двох чисел.

// function calcTwoNumbers(firstNumber, secondNumber) {
//     return firstNumber * secondNumber;
// }
// console.log(calcTwoNumbers(2, 3));
// let multiplication = calcTwoNumbers(2, 3);
// console.log(multiplication);
// alert(multiplication);

// Множення двох чисел Expression

// let calcTwoNumbersExpresion = function (firstNumber, secondNumber) {
//     return firstNumber * secondNumber;
// }
// console.log(calcTwoNumbersExpresion(2, 3));
// let multiplication = calcTwoNumbersExpresion(2, 3);
// console.log(multiplication);
// alert(multiplication);

// Множення трьох чисел.

// function calcThreeNumbers(firstNumber, secondNumber, thirdNumber) {
//     return (firstNumber * secondNumber * thirdNumber);
// }
// console.log(calcThreeNumbers(2, 3, 4));
// alert(calcThreeNumbers(2, 3, 4));
// let multiplication = calcThreeNumbers(2, 3, 4);
// console.log(multiplication);
// alert(multiplication);

// Множення трьох чисел Expresion

// let calcThreeNumbersExpresion = function (firstNumber, secondNumber, thirdNumber) {
//     return (firstNumber * secondNumber * thirdNumber);
// }
// console.log(calcThreeNumbersExpresion(2, 3, 4));
// alert(calcThreeNumbersExpresion(2, 3, 4));
// let multiplication = calcThreeNumbersExpresion(2, 3, 4);
// console.log(multiplication);
// alert(multiplication);

// Степінь

// function calсpow(number, n) {
//     let result = number;
//     for (let i = 1; i < n; i++) {
//         result = result *= number;
//     }

//     return result;
// }

// let pow = (calсpow(2, 4));
// console.log(pow);
// alert(pow);

// Степінь Expresion

// let calсpowExpresion = function (number, n) {
//     let result = number;
//     for (let i = 1; i < n; i++) {
//         result = result *= number;
//     }

//     return result;
// }

// let pow = (calсpowExpresion(2, 4));
// console.log(pow);
// alert(pow);

// Функція question

// function question(sayYes, sayNo) {
//     let answer = confirm('Тобі подобається програмування?');

//     if (answer) {
//         sayYes();
//     } else {
//         sayNo();
//     }
// }

// function goodAnswer() {
//     alert('Ти будеш супер програмістом!');
// }

// function badAnswer() {
//     alert('Подобається, не подобається, а програмувати треба!');
// }

// question(goodAnswer, badAnswer);

// Функція question Expresion

// let questionExpresion = function (sayYes, sayNo) {
//     let answer = confirm('Тобі подобається програмування?');

//     if (answer) {
//         sayYes();
//     } else {
//         sayNo();
//     }
// }

// function goodAnswer() {
//     alert('Ти будеш супер програмістом!');
// }

// function badAnswer() {
//     alert('Подобається, не подобається, а програмувати треба!');
// }

// questionExpresion(goodAnswer, badAnswer);

// Перевірка віку при вході на сайт.

// function checAge() {
//     let age = prompt('Скільки вам років?');

//     if (age <= 0 || age >= 120) {
//         alert('Не видурнюйтесь! Ви або ще не народились, або вже померли! Введіть ваш справжній вік!')
//     }

//     else if (age > 0 && age <= 18) {
//         alert('Доброго дня, дитинопідліток!');
//     }

//     else if (age > 18 && age <= 99) {
//         alert('Доброго дня, людино!');
//     }

//     else if (age > 99 && age < 120) {
//         alert('Доброго дня, старожиле!');
//     }
// }

// checAge();

// Перевірка віку при вході на сайт Expresion

// let checAgeExpresion = function () {
//     let age = prompt('Скільки вам років?');

//     if (age <= 0 || age >= 120) {
//         alert('Не видурнюйтесь! Ви або ще не народились, або вже померли! Введіть ваш справжній вік!')
//     }

//     else if (age > 0 && age <= 18) {
//         alert('Доброго дня, дитинопідліток!');
//     }

//     else if (age > 18 && age <= 99) {
//         alert('Доброго дня, людино!');
//     }

//     else if (age > 99 && age < 120) {
//         alert('Доброго дня, старожиле!');
//     }
// }

// checAgeExpresion();

// Функція вітання.

// function sayHy() {
//     let name = prompt('Введіть ваше ім"я');

//     alert('Доброго дня, ' + name + '!');
// }

// sayHy();

// Функція вітання Expresion

// let sayHyExpresion = function () {
//     let name = prompt('Введіть ваше ім"я');

//     alert('Доброго дня, ' + name + '!');
// }

// sayHyExpresion();

// Ще функція вітання.

// function sayHy(name) {

//     alert('Доброго дня, ' + name + '!');
// }

// let name = prompt('Введіть ваше ім"я');

// sayHy(name);

// Ще функція вітання Expresion

// let sayHyExpresion = function (name) {

//     alert('Доброго дня, ' + name + '!');
// }

// let name = prompt('Введіть ваше ім"я');

// sayHyExpresion(name);