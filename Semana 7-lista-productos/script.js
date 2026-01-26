// Arreglo de productos inicial
let products = [
    {
        name: "Laptop Lenovo thinkpad E14",
        price: 800,
        description: "Laptop con procesador eficiente, RAM para multitarea y SSD rápido, ideal para estudio y trabajo."
    },
    {
        name: "Mouse",
        price: 15,
        description: "Mouse inalámbrico"
    },
    {
        name: "Teclado",
        price: 25,
        description: "Teclado mecánico"
    }
];

// Referencia a la lista HTML
const productList = document.getElementById("productList");

// Función para renderizar productos en la lista
function renderProducts() {
    productList.innerHTML = ""; // Limpiar lista antes de mostrar

    products.forEach(product => {
        const li = document.createElement("li");

        li.innerHTML = `
            <strong>${product.name}</strong><br>
            Precio: $${product.price}<br>
            Descripción: ${product.description}
        `;

        productList.appendChild(li);
    });
}

// Renderizar productos al cargar la página
window.onload = renderProducts;

// Botón para agregar un nuevo producto al final
document.getElementById("addProductBtn").addEventListener("click", () => {
    const newProduct = {
        name: "Nuevo Producto",
        price: 50,
        description: "Producto agregado dinámicamente"
    };

    products.push(newProduct);
    renderProducts();
});