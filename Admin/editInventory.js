var ProductName=document.getElementById("productName");
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


}