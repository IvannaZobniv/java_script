//- Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
function cutString (str, n) {
    let arr = [];
    for(let i = 0 ; i < str.length; i += n) {
        arr.push(str.substr(i, n));
    }
    return arr;
}
document.writeln(cutString('наслаждение',3))
// ------------------------------------------------------------------------------------------------------------------
//- Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
// document.writeln(delete_characters(str, 7)); // Каждый
let str = 'Каждый охотник желает знать';
// function delete_characters1(str, length) {
//     if ((str.constructor === String) && (length>0)){
//         return str.slice(0, length);
//     }
// };
// document.writeln(delete_characters1(str, 7));
// або-----------------------------------------------------------
function delete_characters(str, length) {
        return str.slice(0, length);
}
document.writeln(delete_characters(str, 7));
// ------------------------------------------------------------------------------------------------------------------
//- Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому
// всі символи рядка необхідно перевести у верхній регістр.
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let str1 = "HTML JavaScript PHP";
function insert_dash(str) {
    return str.toUpperCase().split(' ').join('-');
}
document.writeln(insert_dash(str1));
// ------------------------------------------------------------------------------------------------------------------
//- Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let str2 = "hey little train, we are all jumping on ";
function chengLetter(str2) {
    return str2.charAt(0).toUpperCase() + str2.slice(1)
}
document.writeln(chengLetter(str2));
// ------------------------------------------------------------------------------------------------------------------
// - Дано список імен.
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
function clean(n) {
    return n.replaceAll(/[. _ -]/g, ' ');
}

console.log(clean('Harry..Potter'));
console.log(clean('Ron---Whisley'));
console.log(clean('Hermione__Granger'));
// ------------------------------------------------------------------------------------------------------------------
// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let arr = [];
while(arr.length < 100){
    let r = Math.floor(Math.random() * 101) ;
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr)
// або-----------------------------------
const numbers = Array(100).fill().map((_, index) => index + 1);
numbers.sort(() => Math.random() - 0.5);
console.log(numbers.slice(0, 100));
// ----------------------------------------------
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort
let result = numbers.sort(function (a,b) {
	return a-b;
});
console.log(result);
// ----------------------------------------------
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
let filtered = numbers.filter(function (a) {
	if (a%2 === 0){
		return a
	}else {
		return
	}
});
console.log(filtered);
// ------------------------------------------------------------------------------------------------------------------
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let floo = "hey little train, we are all jumping on";
let capitalize = (floo) => floo.split(' ').map(index => index[0].toUpperCase()+index.slice(1)).join(' ');
console.log(capitalize(floo));
// або----------------------------------------------
// let capitalize = (floo) => {
//     let res = [];
//     let floo1 = floo.split(' ')
//     let toUp =  floo1.map(index => index[0].toUpperCase()+index.slice(1,index.length))
//     res.push(toUp.join(' '))
//     return res;
// }
// console.log(capitalize(floo));
// ------------------------------------------------------------------------------------------------------------------
// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака
// равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не
// чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
function validEmail(value) {
    const atLoc = value.lastIndexOf("@");
    const dotLoc = value.lastIndexOf(".");
    return (
       atLoc > 0 &&
       (dotLoc > atLoc + 2 &&
       dotLoc < value.length-1)
    );
};
console.log(validEmail('someemail@gmail.com'));
console.log(validEmail('someeMAIL@gmail.com'));
console.log(validEmail('someeMAIL@i.ua'));
console.log(validEmail('some.email@gmail.com'));
console.log(validEmail('some@email.com'));
console.log(validEmail('SOME@EMAIL.COM'));
console.log(validEmail('some@EMAIL.com'));
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над
// протоколом, з регулярками будете потім бавитись.
// ------------------------------------------------------------------------------------------------------------------
// - є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
console.log(coursesArray.sort((a, b) => b.modules.length - a.modules.length));
// ------------------------------------------------------------------------------------------------------------------
// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
let symb = "о";
let str5 = "Астрономия это наука о небесных объектах";
function count(str5, symb) {
    let coun = 0;
    for (let char of str5) {
        if (char === symb) {
            coun++;
        }
    }
    return coun;
}
 console.log(count(str5, symb));
// ------------------------------------------------------------------------------------------------------------------
// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
let str6 = "Сила тяжести приложена к центру масс тела";
function cutString(str6, n){
    return str6.split(' ').splice(0,n).join(' ');
}
document.writeln(cutString(str6, 5)) // 'Сила тяжести приложена к центру'
// ------------------------------------------------------------------------------------------------------------------
// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let books = [
    {title:"bookname1........", pageCount:250, genres:["art","fiction"], authors:["author1"]},
    {title:"bookname2", pageCount:300, genres:["scientific"], authors:["author2","author3"]},
    {title:"bookname3", pageCount:350, genres:["fiction","scientific","art"], authors:["author4"]},
    {title:"bookname4..", pageCount:400, genres:["technical"], authors:["author5","author6"]},
    {title:"bookname5....", pageCount:450, genres:["scientific"], authors:["author7","author8","author9"]},
]
// - вісортувати книжки по кількості сторінок по зростанню
console.log(books.sort((a, b) => a.pageCount - b.pageCount));
// -знайти наібльшу книжку.---------------------------------
let coUnt = books[0];
for (const book of books){
    if (book.pageCount > coUnt.pageCount){
        coUnt = book;
    }
}
console.log(coUnt);
// - знайти книжку/ки з найбільшою кількістю жанрів-----------
let coUnt1 = books[0];
for (const book of books){
    if (book.genres.length > coUnt1.genres.length){
        coUnt1 = book;
    }
}
console.log(coUnt1);
// // - знайти книжку/ки з найдовшою назвою-----------------------
let coUnt2 = books[0];
for (const book of books){
    if (book.title.length > coUnt2.title.length){
        coUnt2 = book;
    }
}
console.log(coUnt2);
// // - знайти книжку/ки які писали 2 автори-----------------------
let coUnt3 = books[0];
for (const book of books){
    if (book.authors.length ===2){
        coUnt3 = book;
    }
}
console.log(coUnt3);
// // - знайти книжку/ки які писав 1 автор---------------------------
let coUnt4 = books[0];
for (const book of books){
    if (book.authors.length === 1){
        coUnt4 = book;
    }
}
console.log(coUnt4);


let harry= 'Ha2rry....@#$123454 potter';
let ron ='Ron---   !@#$%^&*()_+=-  Whisley';
let hermione = 'Herm^ione{}|~`";:"/<>?/.,__ Gra#nger';

let normalizes1 = str =>{
    let space = str.replace(' ','Space');
    let replaceSymbol = ['`',"'",'_','-','"',',','.','/','|','{','}','?','~','!','@','#','$','1','2','3','4','5',
        '6','7','8','9','0','%','^','&','*','(',')','=','+','<','>',';',':']
    for (const stringElement of replaceSymbol)
        for (const stringElement of replaceSymbol){
            space = space.replace(stringElement, ' ');
        }
    let newStr = space.split(' ');
    let string = '';
    for (let i=0; i<newStr.length; i++){
        if (newStr[i]){
            string +=newStr[i];
        }
    }
    return string.trim().replace('Space',' ');
}
console.log(normalizes1(harry));
console.log(normalizes1(ron));
console.log(normalizes1(hermione));