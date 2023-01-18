// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function num(a,b,c){
    if (a>b && b<c){
        console.log(b);
    }else if (b>a && a<c){
        console.log(a);
    }else if( b>c && c<a){
        console.log(c);
    }else {
        console.log('Error');
    }
}
num(1,-1,3)
// -------------------------------------------------------------------------------------------------------------------
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function num2(a,b,c){
    if (a>b && a>c){
        console.log(a);
    }else if (b>a && b>c){
        console.log(b);
    }else if( c>a && c>b){
        console.log(c);
    }else {
        console.log('Error');
    }
}
num2(1,-1,3)
// -------------------------------------------------------------------------------------------------------------------
// - створити функцію яка повертає найбільше число з масиву
const arr = [1,2,33,12,4];
const max = (array)=>{
    let max = array[0];
    for (const item of array){
        if (item>max){
            max = item;
        }
    }
    return max;
}
console.log(max(arr));
// -------------------------------------------------------------------------------------------------------------------
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
const arr2 = [1,2,3];
function mas(arr){
    let sum=0;
    for (const item of arr){
        sum +=item;
    }
    return sum/arr.length;
}
console.log(mas(arr2));
// -------------------------------------------------------------------------------------------------------------------
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// (Math використовувати заборонено);
function anyway(...arguments){
    let min = arguments[0];
    let max = arguments[0];
    for (const item of arguments){
        if (item>max){
            max = item;
        }if (item<min){
            min = item;
        }
    }
    console.log(max);
    return min;
}
anyway (58,-25351,3,-6,584,694,7);
// -------------------------------------------------------------------------------------------------------------------
// - створити функцію яка заповнює масив рандомними числами (цей код генерує рандомні числа в діапазоні від 0 до 100
// - Math.round(Math.random()*100)) та виводить його.
let arr3=[];
function random () {
    for (let i=0; i<10;i++){
        arr3[i]= Math.floor(Math.random()*100);
    }
    console.log(arr3);
}
// -------------------------------------------------------------------------------------------------------------------
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
// який характеризує кінцеве значення діапазону.
let arr4=[];
function lim (limit){
    for (let i=0; i<limit;i++){
        arr4[i]= Math.floor(Math.random()*limit);
    }
    console.log(arr4);
}
lim(5)
// -------------------------------------------------------------------------------------------------------------------
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
const seconsArr =[1,2,3];
 function foo (array) {
    let newArr = [];
    for (let i= array.length-1,j=0; i>=0; i--){
        newArr[j++] = array[i];
    }
    return newArr;
}
console.log(foo(seconsArr));
// -------------------------------------------------------------------------------------------------------------------
// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або
// конкатенує їх між собою.
const oneArgum= (...argum)=> argum.length===2 ? argum[0] + argum[1] : argum[0];
let oneArgum1 = oneArgum('k')
console.log(oneArgum1)
// -------------------------------------------------------------------------------------------------------------------
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає
// новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
const foo1 = [1,2,3,4];
const foo2 = [1,2,3];
function foons(foo1,foo2){
    let res = [];
    let len = foo1.length >= foo2.length ? foo1 : foo2;
    for (let i=0;i<len.length;i++){
        res[i]= (foo1[i] || 0) + (foo2[i] || 0)
    }
    return res;
}
console.log(foons(foo1, foo2));
// -------------------------------------------------------------------------------------------------------------------
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
const masive = [
    {name: 'Dima', age: 13},
    {model: 'Camry'}
]
function cheng(arr){
    let newArray = [];
    for (let i = 0, j=0; i < arr.length; i++) {
        for (const arrElement in arr[i]){
            newArray[j++] = arrElement;
        }
    }
    return newArray;
}
console.log(cheng(masive));
// -------------------------------------------------------------------------------------------------------------------
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
const masive2 = [
    {name: 'Dima', age: 13},
    {model: 'Camry'}
]
function cheng1(arr){
    let newArray = [];
    for (let i = 0, j=0; i < arr.length; i++) {
        for (const arrElement in arr[i]){
            newArray[j++] = arr[i] [arrElement];
        }
    }
    return newArray;
}
console.log(cheng1(masive2));
// -------------------------------------------------------------------------------------------------------------------
// - Дано натуральное число n. Выведите все числа от 1 до n.
const numeric = (n) => {
    for(let i =1;i<=n;i++){
        console.log(i);
    }
}
numeric(6)
// -------------------------------------------------------------------------------------------------------------------
// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B,
// или в порядке убывания в противном случае.
function oneTozero (a,b){
    if (a<b){
        for(let i=a; i <= b;i++){
            console.log(i);
        }
    }else if (a>b){
        for(let i=a; i >= b;i--) {
            console.log(i);
        }
    }
}
oneTozero(15,10);
// -------------------------------------------------------------------------------------------------------------------
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
const foo3 = [9,8,0,4];
function thre(array,num){
    for (let i=0;i<array.length;i++){
        if (array[i+1]){
            let temp = array[num];
            array[num] =array[num+1];
            array[num+1]=temp;
        }
    }
    return array;
}
console.log(thre (foo3, 2));
// -------------------------------------------------------------------------------------------------------------------
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
const foo4 = [0,0,1,0];
function five(array){
    const newArray = [];
    let counter = 0;
    let index = 0;
    for (let i = 0;i<array.length;i++){
        array[i] ? newArray[index++] = array[i]:counter++;
    }
    const num = newArray.length;
    for (let i=num; i<num+counter;i++){
        newArray[i]=0;
    }
    return newArray;
}
console.log(five(foo4));
