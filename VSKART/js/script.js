const products = [
    {
        name: "Smartphone 5G",
        image: "images/smartphone.jpg",
        price: 18999,
        oldPrice: 24999,
        discount: 24
    },
    {
        name: "Wireless Headphones",
        image: "images/headphones.jpg",
        price: 1499,
        oldPrice: 2999,
        discount: 50
    },
    {
        name: "Smart Watch Pro",
        image: "images/smartwatch.jpg",
        price: 2299,
        oldPrice: 4999,
        discount: 54
    },
    {
        name: "Laptop Backpack",
        image: "images/backpack.jpg",
        price: 799,
        oldPrice: 1599,
        discount: 50
    },
    {
        name: "Running Shoes",
        image: "images/shoes.jpg",
        price: 1299,
        oldPrice: 2499,
        discount: 48
    },
    {
        name: "Men's Casual Shirt",
        image: "images/shirt.jpg",
        price: 699,
        oldPrice: 1399,
        discount: 50
    },
    {
        name: "Bluetooth Speaker",
        image: "images/speaker.jpg",
        price: 999,
        oldPrice: 1999,
        discount: 50
    },
    {
        name: "Gaming Laptop",
        image: "images/laptop.jpg",
        price: 57999,
        oldPrice: 69999,
        discount: 17
    }
];

let cart = 0;

const grid = document.getElementById("grid");

// DISPLAY PRODUCTS
function render(items) {

    grid.innerHTML = items.map(product => `

        <article class="card">

            <div class="product-image">

                <span class="discount">
                    ${product.discount}% OFF
                </span>

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

            </div>

            <h3>${product.name}</h3>

            <div class="rating">
                ⭐ 4.5 • VSKART Assured
            </div>

            <div class="price">

                ₹${product.price.toLocaleString("en-IN")}

                <del>
                    ₹${product.oldPrice.toLocaleString("en-IN")}
                </del>

            </div>

            <button onclick="addCart('${product.name}')">
                Add to Cart
            </button>

        </article>

    `).join("");
}


// ADD TO CART
function addCart(productName) {

    cart++;

    document.getElementById("count").textContent = cart;

    const toast = document.getElementById("toast");

    if (toast) {

        toast.textContent =
            productName + " added to cart!";

        toast.classList.add("show");

        setTimeout(() => {
            toast.classList.remove("show");
        }, 1400);
    }
}


// SEARCH PRODUCTS
function searchProducts() {

    const query =
        document
            .getElementById("search")
            .value
            .toLowerCase();

    const filteredProducts =
        products.filter(product =>
            product.name
                .toLowerCase()
                .includes(query)
        );

    render(filteredProducts);

    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });
}


// SHOW ALL PRODUCTS
function showAll() {

    document.getElementById("search").value = "";

    render(products);
}


// ENTER KEY SEARCH
document
    .getElementById("search")
    .addEventListener("keydown", function(event) {

        if (event.key === "Enter") {
            searchProducts();
        }

    });


// LOAD ALL PRODUCTS
render(products);