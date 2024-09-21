document.addEventListener('DOMContentLoaded', () => {

    let currentUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (!currentUser) {

        console.error('No current user found');

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

var productName = document.getElementById("productName");

var productPrice = document.getElementById("productPrice");

var productCategory = document.getElementById("productCategory");

var productDesc = document.getElementById("productDesc");

var productContainer = JSON.parse(localStorage.getItem("products")) || [];

var indexToUpdate = null;

function addProducts() {

    var product = {

        name: productName.value,

        price: productPrice.value,

        category: productCategory.value,

        desc: productDesc.value

    };

    if (indexToUpdate !== null) {

        productContainer[indexToUpdate] = product;

        indexToUpdate = null;

    } else {

        productContainer.push(product);

    }

    localStorage.setItem("products", JSON.stringify(productContainer));

    deleteAllItems();

    displayProducts();

}

function displayProducts() {

    var content = ``;

    for (var i = 0; i < productContainer.length; i++) {

        content += `

        <tr>

            <td>${i + 1}</td>

            <td>${productContainer[i].name}</td>

            <td>${productContainer[i].price}</td>

            <td>${productContainer[i].category}</td>

            <td>${productContainer[i].desc}</td>

            <td><button onclick="updateItem(${i})" class="btn btn-warning">Update</button></td>

            <td><button onclick="deleteItem(${i})" class="btn btn-danger">Delete</button></td>

        </tr>`;

    }

    document.getElementById("content").innerHTML = content;

}

function deleteItem(index) {

    productContainer.splice(index, 1);

    localStorage.setItem("products", JSON.stringify(productContainer));

    displayProducts();

}

function deleteAllItems() {

    productName.value = "";

    productPrice.value = "";

    productCategory.value = "";

    productDesc.value = "";

}

function updateItem(index) {

    productName.value = productContainer[index].name;

    productPrice.value = productContainer[index].price;

    productCategory.value = productContainer[index].category;

    productDesc.value = productContainer[index].desc;

    indexToUpdate = index;

}

window.onload = function () {

    displayProducts();
    
};
