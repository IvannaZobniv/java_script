//     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  -
//     https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
const url = new URL(location.href);
const id = url.searchParams.get('id');
const userPostId = url.searchParams.get('userPostId');

fetch(`https://jsonplaceholder.typicode.com/posts/${userPostId}`)
    .then(response=>response.json())
    .then(post => {
        let postCard = document.createElement('div');
        postCard.classList.add('screenOne');
        postCard.classList.add('text');
        postCard.classList.add('line1');
        postCard.innerHTML = `POST ID: ${post.id}<br>TITLE >>> ${post.title}`;

        document.body.appendChild(postCard);

        let postBody = document.createElement('div')
        postBody.classList.add('screenOne');
        postBody.classList.add('text');
        postBody.classList.add('line3');
        postBody.innerText = `BODY >>> ${post.body}`;
        document.body.appendChild(postBody)
    })
    .then(fetch(`https://jsonplaceholder.typicode.com/posts/${userPostId}/comments`)
        .then(value => value.json())
        .then(comments =>{
            for (const comment of comments){
                let comntDiv = document.createElement('div');
                comntDiv.classList.add('screenOne');
                comntDiv.classList.add('text');
                comntDiv.classList.add('line4')
                comntDiv.innerHTML = `---COMMENT---<br>CommentName: ${comment.name}<br>Email: ${comment.email}<br>Body: ${comment.body}`
                document.body.appendChild(comntDiv);
            }
        }))
