// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone створити пустий
// масив, наповнити його 10 об'єктами new User(....)
function User (id,name,surname,email,phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email ;
    this.phone = phone;
}
let mass = [];
let id = 1
while(mass.length< 10){
    mass.push(new User (id,"Olaf","Zyzy",'olafzyzy7@gmaol.com',380864563931))
    id = id+1;
}
console.log(mass);
// -------------------------------------------------------------------------------------------------------------------
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filt = mass.filter((index)=>index.id%2===0)
console.log(filt);
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sort = mass.sort(function (a,b){ return a.id - b.id })
console.log(sort);
// -------------------------------------------------------------------------------------------------------------------
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client  {
    constructor (id,name,surname,email,phone,order){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email ;
        this.phone = phone;
        this.order = order;
    }
}
let clientOne  = [];
// id = 11
let order = ['mouse','keyboard','notebook','elephant','beg-pack','paint','laptop', 'book', 'pencil','phone'];
let rand = function(from, to) {
    let n = Math.floor((to - from + 1) * (Math.random() %100));
    return (from + n);
}
function getOrder (array){
    let amount = rand(1, 10)
    let order = []
    while (amount > 0){
        let product = array[rand(0, 9)]
        order.push(product)
        amount -= 1
    }
    return order
}
while(clientOne.length< 10){
    clientOne.push(new Client (id,"Olaf","Zyzy",'olafzyzy7@gmaol.com',380864563931, getOrder(order)))
    id = id+1;
}
console.log(clientOne);
// -------------------------------------------------------------------------------------------------------------------
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sort1 = clientOne.sort(function (a,b){ return a.order.length - b.order.length })
console.log(sort1);
// -------------------------------------------------------------------------------------------------------------------
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function Car (model,producer,year,maxspeed,volume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxspeed = maxspeed ;
    this.volume = volume;

    // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    this.info = function (){
        for (const carAll in this){
            if(typeof this[carAll] !== 'function'){
                console.log(`${carAll} --- ${this[carAll]}`);
            }
        }
    }
// -- changeYear (newValue) - змінює рік випуску на значення newValue
    this.changeYear = function (newValue){
        this.year = newValue;
    }
    // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    this.addDriver = function (driver){
        this.driver = driver;
    }
}
let newCar = new Car('Ford','American','2015',200,'2.4');
console.log(newCar);
newCar.info();
newCar.changeYear(2022);
newCar.addDriver('Max');

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
Car.prototype.drive = function(){
    return `їдемо зі швидкістю ${this.maxspeed} на годину`;
};
console.log(newCar.drive());

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
Car.prototype.increaseMaxSpeed = function (newSpeed) { return this.maxspeed = this.maxspeed + newSpeed};
newCar.increaseMaxSpeed(200);
console.log(newCar);
// -------------------------------------------------------------------------------------------------------------------
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна
// швидкість, об'єм двигуна. додати в об'єкт функції:
class Car1 {
    constructor (model,producer,year,maxspeed,volume){
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxspeed = maxspeed ;
        this.volume = volume;
    }
    // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    drive1(){
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
    }
    // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    info1(){
        for (const carAll in this){
            if(typeof this[carAll] !== 'function'){
                console.log(`${carAll} --- ${this[carAll]}`);
            }
        }
    }
    // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    increaseMaxSpeed1(newSpeed){
        this.maxspeed += newSpeed;
    }
    // -- changeYear (newValue) - змінює рік випуску на значення newValue
    changeYear1 (newValue){
        this.year = newValue;
    }
    // -- addDriver (driver) - приймає об'єкт який "водій" з дов
    addDriver1 (driver){
        this.driver = driver;
    }
}
const сarrr= new Car1('Tesla','Ilon Mask','2020',300, 'Null')
сarrr.drive1();
сarrr.info1();
сarrr.increaseMaxSpeed1(200);
сarrr.changeYear1(2024);
сarrr.addDriver1('Bob');
console.log(сarrr);
// -------------------------------------------------------------------------------------------------------------------
// створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
function Cinderella(name,age,footSize){
    this.name = name;
    this.age = age;
    this.footSize = footSize ;
}
let massCinderella = [];
let name = ['Оля','Анна','Белла','Вероніка','Дарина','Еріка','Єва','Ліза','Настя','Марина'];
let randname = function(from, to) {
    let n = Math.floor((to - from + 1) * (Math.random() %100));
    return (from + n);
}
function getName (array){
    let name  = array[randname(0,9)]
    return name
}
let footSize = 35
while(massCinderella.length < 10){
    massCinderella.push(new Cinderella (getName(name),24,footSize))
    footSize = footSize +1;
}
console.log(massCinderella);
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince{
    constructor(name,age,findFootSize) {
        this.name = name;
        this.age = age;
        this.findFootSize = findFootSize;
    }
}
const littlePrince = new Prince('Dima',30,36);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
const findCinderella = (array,man)=> {
    for (const item of array){
        if( item.footSize === man.findFootSize){
            console.log(`Мoя попелюшка це ${item.name}`);
        }
    }
}
findCinderella(massCinderella,littlePrince);
// -------------------------------------------------------------------------------------------------------------------
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log(massCinderella.find(index => index.footSize === littlePrince.findFootSize));