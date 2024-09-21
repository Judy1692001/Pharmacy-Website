document.addEventListener('DOMContentLoaded', () => {

    let currentUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (!currentUser) {

        console.error('No current admin found');

        window.location.href = '/index.html';

        return;

    }

    const maleEmoji = '/Assets/male.png';

    const femaleEmoji = '/Assets/female.png';

    let genderIcon = document.getElementById('gender-icon');

    if (currentUser.gender === 'Male') {

        genderIcon.innerHTML = `<img src="${maleEmoji}" alt="male-icon" width="30" height="30">`;

    } else if (currentUser.gender === 'Female') {

        genderIcon.innerHTML = `<img src="${femaleEmoji}" alt="female-icon" width="30" height="30">`;

    }

    let usernameElement = document.getElementById('username');

    usernameElement.textContent = currentUser.username;

    const signOutButton = document.getElementById('sign-out');

    signOutButton.addEventListener('click', () => {

        localStorage.removeItem('loggedInUser');

        window.location.href = '/index.html';
        
    });

});
