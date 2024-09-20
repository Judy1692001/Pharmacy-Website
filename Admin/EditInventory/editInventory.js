/* var ProductName=document.getElementById("productName");

var productPrice=document.getElementById("productPrice");

var productCategory=document.getElementById("productCategory");

var productDesc=document.getElementById("productDesc");

var productContaineer=[];

var namep,cat,des,price;

var inde;


function addProducts()
{
    var product={

        name:ProductName.value,

        price:productPrice.value,

        category:productCategory.value,

        desc:productDesc.value

    }

    productContaineer.push(product);

    deleteAllitems();

    displayProduct();

}

function displayProduct()
{

    var cont=``;

    for(var i=0;i<productContaineer.length;i++)

    {

        cont+=`

        <tr>

        <th>${i}</th>

                        <th>${productContaineer[i].name}</th>

                        <th>${productContaineer[i].price}</th>

                        <th>${productContaineer[i].category}</th>

                        <th>${productContaineer[i].desc}</th>

                        <th><button id="update"  onclick=" updateitem(${i})" class="btn btn-warning">update</button></th>

                        <th><button id="delete" onclick="deleteitem(${i})" class="btn btn-danger">delete</button></th>

        </tr>
        `

    }

    document.getElementById("content").innerHTML=cont;

}


function deleteitem(index)
{

    productContaineer.splice(index,1);

    displayProduct();

}


function deleteAllitems()
{

    productCategory.value="";

    productDesc.value="";

    productPrice.value="";

    ProductName.value="";

}


function updateitem(index)
{

    productCategory.value=productContaineer[index].category;

    productDesc.value=productContaineer[index].desc;

    productPrice.value=productContaineer[index].price;

    ProductName.value=productContaineer[index].name;
    
    inde=index;

}






function editValues(value,type)
    {

    if(type=="name"){namep=value; 

        productContaineer[inde].name=namep;

    }

    else if(type=="price")

        {price=value;

            productContaineer[inde].price= price;

        }

    else if(type=="cat")

        {
            cat=value;

            productContaineer[inde].category= cat;

        }

    else 

    {des=value;
        
        productContaineer[inde].desc=des;

    }

    displayProduct();


} */

var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCategory = document.getElementById("productCategory");
var productDesc = document.getElementById("productDesc");
var productContainer = JSON.parse(localStorage.getItem("products")) || [];
var indexToUpdate = null;

// Add Product
function addProducts() {
    var product = {
        name: productName.value,
        price: productPrice.value,
        category: productCategory.value,
        desc: productDesc.value
    };

    if (indexToUpdate !== null) {
        productContainer[indexToUpdate] = product; // Update product
        indexToUpdate = null;
    } else {
        productContainer.push(product); // Add new product
    }

    localStorage.setItem("products", JSON.stringify(productContainer));
    deleteAllItems();
    displayProducts();
}

// Display Products
function displayProducts() {
    var content = ``;
    for (var i = 0; i < productContainer.length; i++) {
        content += `
        <tr>
            <td>${i}</td>
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

// Delete specific product
function deleteItem(index) {
    productContainer.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(productContainer));
    displayProducts();
}

// Clear form fields
function deleteAllItems() {
    productName.value = "";
    productPrice.value = "";
    productCategory.value = "";
    productDesc.value = "";
}

// Update product fields for editing
function updateItem(index) {
    productName.value = productContainer[index].name;
    productPrice.value = productContainer[index].price;
    productCategory.value = productContainer[index].category;
    productDesc.value = productContainer[index].desc;
    indexToUpdate = index;
}

// On page load
window.onload = function () {
    displayProducts();
};
