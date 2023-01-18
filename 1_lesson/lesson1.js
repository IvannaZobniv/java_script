// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16,
// true, false.
//     Вивести кожну змінну за допомогою: console.log

let aa = 'hello';
console.log (aa);
let bb = 'owu';
console.log (bb);
let cc = 'com';
console.log (cc);
let d = 'ua';
console.log (d);
let i = 1;
console.log (i);
let f = 10;
console.log (f);
let g = -999;
console.log (g);
let h = 123;
console.log (h);
const PI = 3.14;
console.log (PI);
const E = 2.7;
console.log (E);
let k = 16;
console.log (k);
let bool1 = true;
console.log (bool1);
let bool2 = false;
console.log (bool2);
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person
// (Не об'єкт, просто за допомоги конкатенації)
let firstName = 'Ivanna';
let middleName = 'Stepanivna';
let lastName = 'Zobniv';
let result = `${firstName} ${middleName} ${lastName} `;
console.log (result);
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
let a = 100;
console.log (typeof a);
let b = '100';
console.log (typeof b);
let c = true;
console.log (typeof c);
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести
// в консоль
let name = prompt('firstName');
let middle = prompt('middleName');
let age = +prompt('age');
console.log (name);
console.log (middle);
console.log (age);