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

});

function displayInventory() {
    
    var productContainer = JSON.parse(localStorage.getItem("products")) || [];

    var content = ``;

    for (var i = 0; i < productContainer.length; i++) {

        content += `

        <tr>

            <td>${i}</td>

            <td>${productContainer[i].name}</td>

            <td>${productContainer[i].price}</td>

            <td>${productContainer[i].category}</td>

            <td>${productContainer[i].desc}</td>

        </tr>`;

    }

    document.getElementById("inventoryContent").innerHTML = content;

}

window.onload = function () {

    displayInventory();

};