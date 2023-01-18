// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

const box = document.createElement('div');
document.body.append(box);

fetch(`http://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(response => {
        for (const item of response){
            const userDiv = document.createElement('div');
            userDiv.style.color = 'navy';
            userDiv.innerText =`${item.id}_____${item.name}`;
            box.append(userDiv);

            const link = document.createElement('a');
            link.style.color = 'Maroon';
            link.innerText = 'Click me!';
            userDiv.append(link);
            link.href = `details.html?data=${item.id}`;

        }
    });