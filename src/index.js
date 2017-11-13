import {getUsers} from './api/users';

// Populate table of users via API call
getUsers().then(result => {
    let usersBody = "";

    result.forEach(user => {
        usersBody +=
        `<tr>
            <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
            <td>${user.id}</td>
            <td>${user.firstName}</td>
            <td>${user.firstName}</td>
            <td>${user.email}</td>
        </tr>`

    });

    global.document.getElementById('users').innerHTML = usersBody;
});