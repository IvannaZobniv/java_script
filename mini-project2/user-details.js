// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
//     котра має детальну інфу про поточний пост.

const url = new URL(location.href);
const id = url.searchParams.get('id');
fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(value => value.json())
    .then((users) => {
        let div = document.getElementsByClassName('team-content')[0];
        let userheaderName =document.createElement('h2');
        userheaderName.classList.add('userheaderName');
        userheaderName.classList.add('text');
        userheaderName.classList.add('line1');
        userheaderName.innerHTML = `${users.name.toUpperCase()} >>><span class="cursor1">_</span>`

        let userNameId = document.createElement('div');
        userNameId.classList.add('userNameId');

        let userId = document.createElement('div');
        userId.classList.add('id');
        userId.classList.add('text');
        userId.classList.add('line2');
        userId.innerText = `id: ${users.id}`;

        let username = document.createElement('div');
        username.classList.add('username');
        username.classList.add('text');
        username.classList.add('line2');
        username.innerHTML = `username: ${users.username} <br>--------<br><br>`;
            userNameId.append(userId,username)

        let email = document.createElement('div');
        email.classList.add('email');
        email.classList.add('text');
        email.classList.add('line2')
        email.innerText = `E-mail: ${users.email}`;

        let phone = document.createElement('div');
        phone.classList.add('phone');
        phone.classList.add('text');
        phone.classList.add('line2')
        phone.innerText = `Phone: ${users.phone}`;

        let website = document.createElement('div');
        website.classList.add('website');
        website.classList.add('text');
        website.classList.add('line2')
        website.innerHTML = `Website: https://www.${users.website}/ <br>--------<br><br>`;

        let address = document.createElement('div');
        address.classList.add('address');
        address.classList.add('text');
        address.classList.add('line2')

        let cityZipcode = document.createElement('div');
        cityZipcode.classList.add('cityZipcode');
        cityZipcode.innerText = `${users.address.city}, ${users.address.zipcode}`;

        let streetSuite = document.createElement('div');
        streetSuite.classList.add('streetSuite');
        streetSuite.innerText = `${users.address.street}, ${users.address.suite}`;

        let geo = document.createElement('div');
        geo.classList.add('geo');


        let latLng = document.createElement('div');
        latLng.classList.add('latLng');
        latLng.innerHTML = `lat: ${users.address.geo.lat} / lng: ${users.address.geo.lng}<br>--------<br><br>`;

        geo.append(latLng);
        address.append(cityZipcode, streetSuite, geo);

        let companyName = document.createElement('div');
        companyName.classList.add('company');
        companyName.classList.add('text');
        companyName.classList.add('line3');
        companyName.innerText = `« ${users.company.name} » `;

        let catchPhrase = document.createElement('div');
        catchPhrase.classList.add('catchPhrase');
        catchPhrase.classList.add('text');
        catchPhrase.classList.add('line3');
        catchPhrase.innerText = `-${users.company.catchPhrase}`;

        let bs = document.createElement('div');
        bs.classList.add('bs');
        bs.classList.add('text');
        bs.classList.add('line3');
        bs.innerHTML = `-${users.company.bs}<br>--------<br><br>`;

        let posts = document.createElement('div');
        posts.classList.add('target');

        let button = document.createElement('button');
        button.classList.add('button');
        button.innerHTML = `--------------<br> -POSTS- <br>--------------`;
        button.onclick = function () {
                fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                    .then(value => value.json())
                    .then(posts =>{
                            for (const post of posts) {
                                    let postDiv = document.createElement('div');
                                    postDiv.classList.add('postDiv');
                                    postDiv.classList.add('userCard');
                                    postDiv.classList.add('text');
                                    postDiv.classList.add('line1');
                                    postDiv.innerText = `${post.id} - ${post.title}`;

                                    const postAfter = document.createElement('a');
                                    postAfter.href = `post-details.html?id=${id}&userPostId=${post.id}`
                                    postAfter.appendChild(postDiv);
                                    div.appendChild(postAfter);
                            }
                    })}

        div.append(userheaderName, userNameId, phone, email, website, address, companyName, catchPhrase,bs,button,posts)
    })
