
let arrProductos = ["Fideos Matarazzo", "Azúcar Chango", "Yerba Mate", "Vino", "Pure De Tomate",
    "Oreo", "Leche", "Aceite", "Arroz", "Café", "Lavandina", "Cacao"];
let arrPrecios = [1400, 1390, 4865, 4950, 700, 3850, 1230, 1850, 1150, 6650, 1150, 1390];
let arrStock = [100, 50, 75, 60, 90, 100, 80, 70, 50, 40, 100, 120];
let arrImage = ["./img/FIDEOS.webp", "./img/AZUCAR.webp", "./img/yerba.webp", "img/VINO.webp", "img/PURE DE TOMATES.webp", "img/OREO.webp", "img/LECHE.webp", "img/ACEITE.webp", "img/ARROZ-GALLO.webp", "img/CAFE.webp", "img/LAVANDINA.webp", "img/CACAO.webp"];
let totalCompra = 0;

function cargarProductos(arrProductos, arrPrecios, arrStock, arrImage) {
    let div = document.getElementById("contenedor-general");
    for (let i = 0; i < arrProductos.length; i++) {
        div.innerHTML += `
        <div class="cajas">
            <figure><img class="imagenes" src="${arrImage[i]}" alt="${arrProductos[i]}"></img></figure>
            <div class="info-producto">
                <h2>${arrProductos[i]}</h2>
                <p class="precio"> $${arrPrecios[i]}</p>
                <p> Stock disponible:</p><p type="number" id="stock${i}"> ${arrStock[i]}</p>
            </div>
            <div class="button">
                <input type="number" id="cant${i}" placeholder="0" min="0">
                <button class="button" id="btn${i}">Comprar</button>
            </div>
        </div>
    `;
    }
}

function mostrarTotalCompra() {
    document.getElementById("total-compra").innerHTML = `Total de la compra: $${totalCompra}`;
}

function comprar(index) {
    let stockHTML = document.getElementById(`stock${index}`);
    let cantidadHTML = document.getElementById(`cant${index}`);
    let stock = parseInt(stockHTML.innerText);
    let cantProd = parseInt(cantidadHTML.value);

    if (cantProd > 0 && cantProd <= stock) {
        let totalDelProducto = cantProd * arrPrecios[index];
        totalCompra += totalDelProducto;
        stockHTML.innerText = stock - cantProd;
        cantidadHTML.value = "";
        alert("Compra realizada exitosamente");
        mostrarTotalCompra(); // Llama a mostrarTotalCompra para actualizar el total en la interfaz
    } else {
        alert("Cantidad no válida, debe ser mayor a 0 o menor/igual que el stock");
    }
}

cargarProductos(arrProductos, arrPrecios, arrStock, arrImage);

for (let i = 0; i < arrProductos.length; i++) {
    document.getElementById(`btn${i}`).addEventListener("click", () => {
        comprar(i);
    });
}

// Inicializar el total en la página
mostrarTotalCompra(); // Asegúrate de tener un elemento con id="total-compra" en tu HTML




