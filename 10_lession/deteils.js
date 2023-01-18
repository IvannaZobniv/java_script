const url = new URL(location.href);
const id = url.searchParams.get('data');


fetch(`http://jsonplaceholder.typicode.com/users/${id}`)
    .then(value => value.json())
    .then(value => {
        for (const item in value) {

            const userDiv = document.createElement('div');
            userDiv.style.color = 'green'
            if (typeof value[item] !== 'object') {
                userDiv.innerText = `${item} --- ${value[item]}`;
            } else {
                userDiv.innerText = `${item} :`;

                for (const anotherInformationUser in value[item]) {
                    const userInnerDiv = document.createElement('div');
                    userInnerDiv.style.color = 'blue';
                    if (typeof value[item][anotherInformationUser] !== 'object') {
                        userInnerDiv.innerText = `${anotherInformationUser} --- ${value[item][anotherInformationUser]}`;
                    } else {
                        userInnerDiv.innerText = `${anotherInformationUser} :`;

                        for (const element in value[item][anotherInformationUser]) {
                            const htmlDivElement = document.createElement('div');
                            htmlDivElement.style.color = 'red';
                            if (typeof value[item][anotherInformationUser][element] !== 'object') {
                                htmlDivElement.innerText = `${element} = ${value[item][anotherInformationUser][element]}`;
                            }
                            userInnerDiv.append(htmlDivElement);
                        }
                    }
                    userDiv.append(userInnerDiv);
                }
            }
            document.body.append(userDiv);
        }
    });