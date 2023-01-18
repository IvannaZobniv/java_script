// як з масиву вивести булеве значення?
// let arr = [1,2,true,false,"str"];
// for (const arrElement of arr){
//     if(typeof arrElement==="boolean"){
//         console.log(arrElement);
//     }
// }
// ---------------------------------------------------------------------------------------------
// структура while
// let arr = [1,2,true,false,"str"];
// let i=0;
// while (i<arr.length){
//     console.log(arr[i]);
//     i++;
// }
// ---------------------------------------------------------------------------------------------
// вевести масив навпаки( саме цілий масив ) не використовуючи методи масивів такі як push чи reverse,
    // а тільки за допомогою циклу.
// let arr = [1,2,true,false,"str"];
// let newArr = [];
// for (let i = arr.length-1, j = 0; i>=0; i--,j++) {
//     newArr[j]=arr[i]
// }
// console.log(newArr);
// ---------------------------------------------------------------------------------------------
// як перебрати циклом while та вивести числа тільки парні або не парні значеня в зворотньому циклі
// (з заду на перед)?
// let arr = [1,2,3,4,5,6,7,8,9,10];
// let i = arr.length-1;
// while (i>=0){
//     if (arr[i]%2===0){
//         console.log(arr[i]);
//     }
//     i--;
// }
// ---------------------------------------------------------------------------------------------
let products = [
    {title: 'milk', price: 22, image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'},
    {title: 'juice', price: 27, image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'},
    {title: 'tomato', price: 47, image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'},
    {title: 'tea', price: 15, image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'},
];
for (const product of products) {
    document.write(`
    <div class="product-card">
    <h3 class="product-title">
    <li> <span style="color: red"> TITLE - </span>  ${product.title.toUpperCase()} </li>
    <li><span style="color: red">PRICE - </span> ${product.price} </li></h3>
    <img  width="200px" src="${product.image}" alt ="${product.title}" class="product-image">
    </div>
`)
}
// ---------------------------------------------------------------------------------------------
// перебрати циклом while та вивести  числа тільки з непарним індексом
// let arr = [1,2,3,4,5,6,7,8,9,10];
// let i=0;
// while (i<arr.length){
//     if(i%2){
//         console.log(arr[i]);
//     }
//     i++;
// }
// ---------------------------------------------------------------------------------------------
// Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i=0; i<100; i+=2){
//     console.log(i);
// }
// ---------------------------------------------------------------------------------------------
// let books = [
//     {title:"bookname1........", pageCount:250, genres:["art","fiction"], authors:["author1"]},
//     {title:"bookname2", pageCount:300, genres:["scientific"], authors:["author2","author3"]},
//     {title:"bookname3", pageCount:350, genres:["fiction","scientific","art"], authors:["author4"]},
//     {title:"bookname4..", pageCount:400, genres:["technical"], authors:["author5","author6"]},
//     {title:"bookname5....", pageCount:450, genres:["scientific"], authors:["author7","author8","author9"]},
// ]
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.---------------------------------
// let count = books[0];
// for (const book of books){
//     if (book.pageCount > count.pageCount){
//         count = book;
//     }
// }
// console.log(count);
// - знайти книжку/ки з найбільшою кількістю жанрів-----------
// let count = books[0];
// for (const book of books){
//     if (book.genres.length > count.genres.length){
//         count = book;
//     }
// }
// console.log(count);
// - знайти книжку/ки з найдовшою назвою-----------------------
// let count = books[0];
// for (const book of books){
//     if (book.title.length > count.title.length){
//         count = book;
//     }
// }
// console.log(count);
// - знайти книжку/ки які писали 2 автори-----------------------
// let count = books[0];
// for (const book of books){
//     if (book.authors.length ===2){
//         count = book;
//     }
// }
// console.log(count);
// - знайти книжку/ки які писав 1 автор---------------------------
// let count = books[0];
// for (const book of books){
//     if (book.authors.length === 1){
//         count = book;
//     }
// }
// console.log(count);
// ----------------------------------------------------------------------------------------------------------------
// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.------------------------
// let arr = [];
// for (let i =0,j = 0; i < 100; i++){
//     if(i % 2===0){
//         arr[j]=i;
//         j++;
//     }
// }
// console.log(arr);
//     b. заповнити його 50 непарними числами за допомоги циклу.---------------------
// let arr = [];
// for (let i =0,j = 0; i < 100; i++){
//     if(i % 2){
//         arr[j]=i;
//         j++;
//     }
// }
// console.log(arr);
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)--------------
// let arr = [];
// for (let i=0; i<20; i++){
//     arr[i] = Math.floor(Math.random()*100)
// }
// console.log(arr);
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)--------
// let arr = [];
// for (let i=0; i<20; i++){
//     arr[i] = Math.floor(Math.random()*(732-8)+8)
// }
// console.log(arr);
// ----------------------------------------------------------------------------------------------------------------
// 2. Вивести за допомогою console.log кожен третій елемен------------------------------
// let arr = [];
// for (let i=0; i<20; i++){
//     arr[i] = Math.floor(Math.random()*(732-8)+8)
// }
// console.log(arr);
//
// for (let i = 0; i< arr.length; i+=3) {
//     console.log(arr[i])
// }
// ----------------------------------------------------------------------------------------------------------------
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// let arr = [];
// for (let i=0; i<20; i++){
//     arr[i] = Math.floor(Math.random()*(732-8)+8)
// }
// console.log(arr);
//
// for (let i = 0; i< arr.length; i+=3) {
//     if(arr[i] % 2 === 0 ){
//         console.log(arr[i])
//     }
// }
// ----------------------------------------------------------------------------------------------------------------
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в
// новий масив
// let arr = [];
// for (let i=0; i<20; i++){
//     arr[i] = Math.floor(Math.random()*(732-8)+8)
// }
// console.log(arr);
//
// let newArr =[];
// for (let i = 0, j = 0; i< arr.length; i+=3) {
//     if(arr[i] % 2 === 0 ){
//         newArr[j]= arr[i];
//         j++;
//     }
// }
// console.log(newArr);
// ----------------------------------------------------------------------------------------------------------------
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// let arr = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
// for (let i=0; i < arr.length; i++){
//     if(arr [i+1] % 2 === 0){
//         console.log(arr[i]);
//     }
// }
// ----------------------------------------------------------------------------------------------------------------
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки.Обрахувати
// середній чек.
// let arr = [100,250,50,168,120,345,188];
// let count = 0;
// for (const number of arr){
//     count+=number;
// }
// let res= count/arr.length;
// console.log(res);
// ----------------------------------------------------------------------------------------------------------------
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let arr = [100,250,50];
// let newArr =[];
// for (let i=0; i < arr.length; i++){
//     newArr[i]=arr[i]*5;
// }
// console.log(newArr);
// ----------------------------------------------------------------------------------------------------------------
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом -
// додати його в інший масив.
// let arr = [1,2,true,false,"str"];
// let newArr =[];
// for (let i=0, j=0; i < arr.length; i++){
//     if(typeof arr[i]==='number'){
//         newArr[j]=arr[i];
//         j++;
//     }
// }
// console.log(newArr);
// ----------------------------------------------------------------------------------------------------------------
// Дано 2 масиви з рівною кількістю об'єктів.З'єднати в один об'єкт користувача та місто з відповідними "id" та
// "user_id" . Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
// Масиви:
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// for (const user of usersWithId){
//     for (const city of citiesWithId){
//         if (user.id===city.user_id){
//             user.address = city
//         }
//     }
// }
// console.log(usersWithId);
// ----------------------------------------------------------------------------------------------------------------
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let arr = ['a','b','c'];
// let str = '';
// for( let i = 0; i<arr.length;i++){
//     str+=arr[i];
// }
// console.log(str);
// ----------------------------------------------------------------------------------------------------------------
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let arr = ['a','b','c'];
// let i=0;
// let str = '';
// while (i<arr.length){
//     str+=arr[i];
//     i++;
// }
// console.log(str);
// ----------------------------------------------------------------------------------------------------------------
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let arr = ['a','b','c'];
// let str = '';
// for(const string of arr){
//     str+= string;
// }
// console.log(str);
// ----------------------------------------------------------------------------------------------------------------
// робота do while
// let i =0;
// do{
//     i++;
// }
// while (i<5){
//     console.log(i);
// }