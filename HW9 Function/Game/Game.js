function getRndInteger() {
    return Math.floor(Math.random() * 10) + 1;
}

number = getRndInteger();

yourNumber = +prompt('Спробуйте вгадати, яке число (1 - 10) загадав комп, ввівши своє число від 1 до 10');

if (yourNumber === number) {
    alert('Поздоровляємо, ви вгадали!');
} else {
    alert('Не вірно! Спробуйте ще раз!')
}