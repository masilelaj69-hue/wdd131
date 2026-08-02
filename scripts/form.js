const products = [

{
id: 1,
name: "Apple Watch"
},

{
id: 2,
name: "Samsung Galaxy Phone"
},

{
id: 3,
name: "Sony Headphones"
},

{
id: 4,
name: "Dell Laptop"
},

{
id: 5,
name: "Nintendo Switch"
}

];

const productSelect = document.querySelector("#product");

products.forEach(product => {

const option = document.createElement("option");

option.value = product.id;

option.textContent = product.name;

productSelect.appendChild(option);

});

document.querySelector("#year").textContent =
new Date().getFullYear();

document.querySelector("#lastModified").textContent =
`Last Modified: ${document.lastModified}`;
