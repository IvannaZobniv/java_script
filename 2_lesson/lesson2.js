// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [];
arr[0] = true;
arr[2] = "awjehkj";
arr[1] = 349;
arr[3] = "oq3h3i423";
arr[4] = true;
arr[9] = "wwwa332";
console.log(arr);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title:"Harry Potter and the Philosopher's Stone",
    pageCount:350,
    genre:"fantasy"
};
let book2 = {
    title:"Harry Potter and the Chamber of Secrets",
    pageCount:250,
    genre:"fantasy"
};
let book3 = {
    title:"Harry Potter and the Prisoner of Azkaban",
    pageCount:450,
    genre:"fantasy"
};
console.log(book1,book2,book3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.Поле "автори" - масив.
// Кожен автор має поля name,age
let book_1 = {
    title:"Harry Potter and the Sorcerer's Stone",
    pageCount:350,
    genre:"fantasy",
    authors:[
        {
            name:"J. K. Rowling",
            age:1997

        }
    ]
};
let book_2 = {
    title:"Harry Potter and the Chamber of Secrets",
    pageCount:250,
    genre:"fantasy",
    authors:[
        {
            name:"J. K. Rowling",
            age:1998

        }
    ]
};
let book_3 = {
    title:"Harry Potter and the Prisoner of Azkaban",
    pageCount:450,
    genre:"fantasy",
    authors:[
        {
            name:"J. K. Rowling",
            age:1999

        }
    ]
};
console.log(book_1,book_2,book_3);


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль
// пароль кожного користувача
let users =[
    {
        name:"Destiny",
        username:"Destiny Velasquez" ,
        password:7779,
    },
    {
        name:"Odette",
        username:"Odette Merritt",
        password:1565,
    },
    {
        name:"Emmanuel",
        username:"Emmanuel Ayala",
        password:1372,
    },
    {
        name:"Jana",
        username:"Jana Martin",
        password:4616,
    },
    {
        name:"Beatrice",
        username:"Beatrice Montoya",
        password:7272,
    },
    {
        name:"Chantale",
        username:"Chantale Flowers",
        password:2675,
    },
    {
        name:"Chester",
        username:"Chester Hughes",
        password:2753,
    },
    {
        name:"Autumn",
        username:"Autumn Raymond",
        password:85731,
    },
    {
        name:"Christopher",
        username:"Christopher Stein",
        password:65265,
    },
    {
        name:"Tucker",
        username:"Tucker Horton",
        password:4525,
    }
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);