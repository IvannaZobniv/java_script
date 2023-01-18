// - Знайти та вивести довижину настипних стрінгових значень 'hello world', 'lorem ipsum', 'javascript is cool'
let str1='hello world';
let str2='lorem ipsum';
let str3='javascript is cool';
console.log(str1.length,str2.length,str3.length);
// - Перевести до великого регістру наступні стрінгові значення 'hello world', 'lorem ipsum', 'javascript is cool'
let foo1= str1.toUpperCase();
let foo2= str2.toUpperCase();
let foo3= str3.toUpperCase();
console.log(foo1,foo2,foo3);
// - Перевести до нижнього регістру настипні стрінгові значення 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log(foo1.toLowerCase(),foo2.toLowerCase(),foo3.toLowerCase());
// --------------------------------------------------------------------------------------------------------------------
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   '
console.log(str.trim());
// --------------------------------------------------------------------------------------------------------------------
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів. let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str4 = 'Ревуть воли як ясла повні';
let arr = str4.split(` `);
console.log(arr);
// --------------------------------------------------------------------------------------------------------------------
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0].за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let mesive = [10,8,-7,55,987,-1011,0,1050,0];
let newMasive = mesive.map(argument=>argument.toString());
console.log(newMasive);
// --------------------------------------------------------------------------------------------------------------------
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або
// навпаки в залежності від значення аргументу direction. let nums = [11,21,3]; sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11,21,3];
const sortNums = (direction,num) => {
    if (direction === 'ascending'){
        num.sort((a,b)=> a - b);
    }
    else if (direction === 'descending' ){
        num.sort((a,b)=> b - a);
    }
    return num;
}
console.log(sortNums('descending', nums));
// --------------------------------------------------------------------------------------------------------------------
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
coursesAndDurationArray.sort((a,b) =>
    b.monthDuration-a.monthDuration);
console.log(coursesAndDurationArray);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filtration = coursesAndDurationArray.filter(argument=>argument.monthDuration >=5);
console.log(filtration);
// --------------------------------------------------------------------------------------------------------------------
// // {
// //     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
// //         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
// //     color:'', // 'red','black'
// // }
let playinCard = [
    { cardSuit:'spade',color:'black'},
    { cardSuit:'diamond',color:'red'},
    { cardSuit:'heart',color:'red'},
    { cardSuit:'clubs',color:'black'},
]
let cardValue = [6,7,8,9,10,'ace','jack','queen','king','joker'];
// описати колоду карт
let deck = [];
for (const play of playinCard ){
    for (const value of cardValue){
        const card={
            cardSuit: play.cardSuit,
            values: value,
            color: play.color
        }
        deck.push(card);
    }
}
console.log(deck);
// - знайти піковий туз
let spadeAce = deck.filter(argument =>argument.cardSuit === 'spade'&& argument.values === 'ace' );
console.log(spadeAce);
// - всі шістки
let allSix = deck.filter(argument => argument.values === 6);
console.log(allSix);
// - всі червоні карти
let allRed = deck.filter(argument => argument.color === 'red');
console.log(allRed);
// - всі буби
let allDiamond = deck.filter(argument =>argument.cardSuit === 'diamond');
console.log(allDiamond);
// - всі трефи від 9 та більше
let allСlubs = deck.filter(argument =>(argument.cardSuit === 'clubs' && argument.values >= 9) ||
    (argument.cardSuit === 'clubs' &&  typeof argument.values === 'string'));
console.log(allСlubs);
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let reduce = deck.reduce((count,argument)=>{
    if (argument.cardSuit ==='spade'){
        count.spades.push(argument);
    }else if (argument.cardSuit ==='clubs'){
        count.clubs.push(argument);
    }else if (argument.cardSuit ==='diamond'){
        count.diamonds.push(argument);
    }else if (argument.cardSuit ==='heart'){
        count.hearts.push(argument);
    }
    return count;
}, {
    spades:[],
        diamonds:[],
        hearts:[],
        clubs:[]
});
console.log(reduce);
