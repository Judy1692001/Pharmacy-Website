document.addEventListener('DOMContentLoaded', () => {
    
    let users = JSON.parse(localStorage.getItem('users'));
        
    let currentUser = users[users.length - 1]; //?

    const maleEmoji = '/Assets/male.png';

    const femaleEmoji = '/Assets/female.png';

    let genderIcon = document.getElementById('gender-icon');

    if (currentUser.gender === 'Male') {

        genderIcon.innerHTML = `<img src="${maleEmoji}" alt="male-icon">`;

    }
    
    else if (currentUser.gender === 'Female') {

        genderIcon.innerHTML = `<img src="${femaleEmoji}" alt="female-icon">`;

    }

    let usernameElement = document.getElementById('username');

    usernameElement.textContent = currentUser.username;

    const signOutButton = document.getElementById('sign-out');

    signOutButton.addEventListener('click', () => {

        window.location.href = '/index.html';

    });

});