// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку
// user-details.html, котра має детальну інфорацію про об'єкт на який клікнули

// const screenOne = document.getElementsByClassName('screenOne')[0];
// document.body.append(screenOne);

fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response=>response.json())
    .then(response => {
        let i = 0
        for (const item of response){
            const userDiv = document.getElementsByClassName('name')
            userDiv[i].textContent = `${item.id}_____${item.name}-`;
            const link = document.getElementsByClassName('link__title');
            link[i].href = `user-details.html?id=${item.id}`;
            i++
        }
    });













