document.addEventListener('DOMContentLoaded', () => {
    
    let users = JSON.parse(localStorage.getItem('users'));
        
    let currentUser = users[users.length - 1];

    const maleEmoji = '/Assets/3233483-removebg-preview.png';

    const femaleEmoji = '/Assets/3233486-removebg-preview.png';

    let genderIcon = document.getElementById('gender-icon');

    if (currentUser.gender === 'Male') {

        genderIcon.t = `<img src="${maleEmoji}" alt="male-icon">`;

    }
    
    else if (currentUser.gender === 'Female') {

        genderIcon.innerHTML = `<img src="${femaleEmoji}" alt="female-icon">`;

    }

    let usernameElement = document.getElementById('username');

    usernameElement.textContent = currentUser.username;

});