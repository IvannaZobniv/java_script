// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

const obj = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
            lat: '-37.3159',
            lng: '81.1496'
        }
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets'
    }
}

class User {
    constructor(id,name,username,email,address,phone,website,company) {
        this.id=id;
        this.name=name;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.website = website;
        this.company = company;
    }
}
class Address{
    constructor(street,suite,city,zipcode,geo) {
        this.street=street;
        this.suite=suite;
        this.city=city;
        this.zipcode=zipcode;
        this.geo=geo;
    }
}

class Geo{
    constructor(lat,lng) {
        this.lat=lat;
        this.lng=lng;
    }
}
class Company{
    constructor(name,catchPhrase,bs) {
        this.name=name;
        this.catchPhrase=catchPhrase;
        this.bs=bs;
    }
}

let user = new User(1,'Leanne Graham','Bret','Sincere@april.biz',
    new Address('Kulas Light','Apt. 556','Gwenborough','92998-3874',
        new Geo('-37.3159','81.1496')),'1-770-736-8031 x56442','hildegard.org',
    new Company('Romaguera-Crona','Multi-layered client-server neural-net','harness real-time e-markets'))
console.log(user);
// --------------------------------------------------------------------------------------------------
// 1) Створити карту користувача(User Card)-clouses.pdf
// частина 1

const userCard =(id)=>{
    let balance = 100;
    let  transactionLimit = 100;
    const historyLogs = [];
    const key = id;

    const createMassage =(operationType,credits) =>({operationType,credits,operationTime:new Date()});

    const getCardOptions = ()=> ({balance,historyLogs,transactionLimit,key});

    const putCredits = (money)=>{
        balance+=money;
        historyLogs.push(createMassage('putCredits',money));
    }
    const takeCredits = (money) => {
        if(balance-money>=0){
            balance -= money;
            historyLogs.push(createMassage('takeCredits',money))
        }else {
            historyLogs.push(createMassage('takeCreditsError'));
            console.error('not money!!!');
        }
    }
    const  setTransactionLimit = (id)=>{
        transactionLimit = id;
        historyLogs.push(createMassage('setTransactionLimit',id));
    }
    const transferCredits =(sum,card)=>{
        let startSum;
        if (balance > sum) {
            startSum = sum;
            sum = sum + (sum * 0.005)
            balance -= sum;
            card.putCredits(startSum);
            historyLogs.push(createMassage('transferCredits', sum, card))
        } else {
        }console.error(`На балансі недостатньо коштів!`)
    }
    return{
        getCardOptions,
        putCredits,
        takeCredits,
        setTransactionLimit,
        transferCredits
    }
}
// частина 2
class UserAccount{
    constructor(name) {
        this.name=name;
        this.cards =[];
    }
    addCard(){
        if(this.cards.length === 3){
            console.error('limit error!!!');
            return;
        }
        this.cards.push(userCard(this.cards.length+1));
    }
    getCardByKey(id){
        const card = this.cards[id-1]
        if(!card){
            console.error('not present id!!!');
            return;
        }
        return card;
    }
}

const user2 = new UserAccount('Vasya');
user2.addCard();
user2.addCard();
// user2.addCard();

// user2.addCard();
// user2.addCard();

const card1 = user2.getCardByKey(1);
const card2 = user2.getCardByKey(2);
// const card3 = user2.getCardByKey(3);
// console.log(card2);

// card3.transferCredits(50, card1);

card1.putCredits(500);
card1.setTransactionLimit(800);
card1.transferCredits(300,card2);
card2.takeCredits(50);
console.log(card1.getCardOptions());
console.log(card2.getCardOptions());
// console.log(card3.getCardOptions());
console.log('---------------------------------');

// card3.takeCredits(20);
// console.log(card3.getCardOptions())
// якщо більше ніж 100 money
// card3.takeCredits(50);
// console.log(card3.getCardOptions());









