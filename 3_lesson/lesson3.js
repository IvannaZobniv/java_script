// // - Є змінна х, якій ви надаєте довільне числове значення. Якщо змінна x не дорівнює нулю, виведіть'Вірно',
// інакше виведіть 'Невірно'. Перевірте  скрипт при a,що дорівнює 1, 0, -3

let x = 0;
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години
// попадає число (в першу, другу, третю или четверту частину години).

let time = 10;
if (time >= 0 && time <= 15) {
    console.log('the first part of an hour');
} else if (time >= 16 && time <= 30) {
    console.log('the second part of the hour');
} else if (time >= 31 && time <= 45) {
    console.log('third part of an hour');
} else if (time >= 46 && time <= 60) {
    console.log('a quarter of an hour');
} else {
    console.log('you live in another dimension');
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це
// число (у першу, другу чи третю).

let day = 1;
if (day >=1 && day <= 10) {
    console.log('the first decade of the month');
} else if (day > 10 && day <= 20) {
    console.log('the second decade of the month');
} else if (day > 20 && day <= 31) {
    console.log('third decade of the month');
} else {
    console.log('you are not earthling! we do not have access to your month');
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let days = +prompt('enter the day of the week');
switch (days){
    case 1:
        console.log('Sunday');
        break;
    case 2:
        console.log('Monday');
        break;
    case 3:
        console.log('Tuesday');
        break;
    case 4:
        console.log('Wednesday');
        break;
    case 5:
        console.log('Thursday');
        break;
    case 6:
        console.log('Friday');
        break;
    case 7:
        console.log('Saturday');
        break;
    default:
        console.log('excuse me is this new chronology? we will definitely check it out and it is listed.');
}

// - Користувач вводить або має два числа.Потрібно знайти та вивести максимальне число з тих двох .Також потрібно
// врахувати коли введені рівні числа.

let a = +prompt('enter a number:a');
let b = +prompt( 'enter a number:b');
if (a>b){
    console.log(a);
}else if (b>a){
    console.log(b);
}else if (a===b) {
    console.log('equal');
}else{
    console.log('error');
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).Напишіть код який,
//за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної хявляється falsy
// (хибноподыбне, тобто кастується до false)
// let f='';
// if (f){
//     console.log('Hello!');
// }else {
//     console.log('default');
// }

let f = prompt("specify f");
if (!!f === false){
    console.log('default');
}else {
    console.log('Hello!');
}
