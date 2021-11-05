let a = 111;
console.log(a);
console.log(typeof a);

const b = 111;
console.log(b);
console.log(typeof b);

var c = 111;
console.log(c);
console.log(typeof c);

let d = '112';
console.log(d);
console.log(typeof d);

let i = Boolean;
console.log(i);
console.log(typeof i);

let f = null;
console.log(f);
console.log(typeof f);

let g = undefined;
console.log(g);
console.log(typeof g);

let h = '111';
let h1 = Number(h);
console.log(h1);
console.log(typeof h1);

let e = '2px';
let e1 = Number(e);
console.log(e1);
console.log(typeof e1);

let j = 222;
let j1 = j.toString();
console.log(j1);
console.log(typeof j1);

let k = 333;
let k1 = k.toString();
console.log(k1);
console.log(typeof k1);

// По два приклада, бо реально вже маю йти з роботи додому )


// console.log(1 + '2'); Вивело 12, бо намбер конвертувало в стрінг і зліпило два стрінга.
// console.log('' + 1 + 0); Вивело 10, бо те саме, що в першому випадку.
// console.log('' - 1 + 0); Вивело -1, бо стрінг тільки додається, тому його сприйняло як намбер і виконало дії після нього.
// console.log('2' * '3'); Вивело 6, бо стрінги не множаться і їх конвертувало в намбери і перемножило.
// console.log(2 + 2 + 'px'); Вивело 4px, спочатку додало намбери, а потім їх конвертнуло в стрінг і доліпило до рх.
// console.log('px' + 2 + 1); Вивело px21, бо побачило стрінг і все після нього конвертнуло в стрінг і доліпило.
// console.log('2' - 1); Вивело 1, бо стрінг конвертнуло в намбер і провело дію.
// console.log('2px' - 1); Вивело NaN, перше значення не є намбером. Програма точно визначила це, а від стрінга не можна віднімати.
// console.log(null + 1); Вивело 1, бо сприйняло null, як нуль.
// console.log(undefined + 1) NaN, бо undefined може бути будь-що, тому JS так легше.