const products = [
    { title: "LapTop" },
    { title: "Mouse" },
    { title: "Keyboard" },
    { title: "Headphone" },
    { title: "monitor" },
    { title: "Flash" },
    { title: "Printer" }
];

const container = document.querySelector(".products");

function showProducts(list) {
    container.innerHTML = "";

    list.forEach(product => {
        container.innerHTML += `
            <div class="product">
                ${product.title}
            </div>
        `;
    });
}

showProducts(products);

document.getElementById("search").addEventListener("input", function () {
    const value = this.value.toLowerCase();

    const filtered = products.filter(product =>
        product.title.toLowerCase().includes(value)
    );

    showProducts(filtered);
});