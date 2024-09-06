
// Declaración de variables
let divData = document.getElementById("divData");


// función para obteer los datos de la api con una promesa
function getData(){
    const promesa = fetch ("https://freetestapi.com/api/v1/products", {method: "GET"});
    promesa.then((response) => {
        response.json().then(
            (data) => {
                createCards(data);
            }).catch((error) => console.log("Problema con el json", error));
    }).catch((err) => 
        console.log("Existió un problema con la solicitud", err))
} // FIN => getData


// Función para creación de cards para cada producto
function createCards(products){
    // Crear una Card por cada producto con sus datos esenciales (name, desc, image, price)
    products.forEach((product) => {let card =
        `<div class="col mb-4">
            <div class="card" style="border: 1px solid; width: 18rem;">
                <img src="${product.image}" class="card-img-top" alt="product image">
                <div class="card-body">
                    <h6 class="card-title">${product.brand}</h6>
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text"><strong>$${product.price}</strong></p>
                </div>
            </div>
        </div>
        </br>`
    // Insertar las cards en el div
    divData.insertAdjacentHTML("beforeend", card);
    }); // FIN => forEach  

} // FIN => createCards


getData();