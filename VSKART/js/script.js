const products = [
    ['Smartphone 5G', '📱', 18999, 24999, 24],
    ['Wireless Headphones', '🎧', 1499, 2999, 50],
    ['Smart Watch Pro', '⌚', 2299, 4999, 54],
    ['Laptop Backpack', '🎒', 799, 1599, 50],
    ['Running Shoes', '👟', 1299, 2499, 48],
    ['Men’s Casual Shirt', '👕', 699, 1399, 50],
    ['Bluetooth Speaker', '🔊', 999, 1999, 50],
    ['Gaming Laptop', '💻', 57999, 69999, 17]
];

let cart = 0;

const grid = document.getElementById('grid');


// ================================
// DISPLAY PRODUCTS
// ================================

function render(items) {

    grid.innerHTML = items.map(product => `

        <article class="card">

            <div class="pic">

                <span class="discount">
                    ${product[4]}% OFF
                </span>

                ${product[1]}

            </div>

            <h3>
                ${product[0]}
            </h3>

            <div class="rating">
                ⭐ 4.${Math.floor(Math.random() * 8) + 1}
                • VSKART Assured
            </div>

            <div class="price">

                ₹${product[2].toLocaleString('en-IN')}

                <del>
                    ₹${product[3].toLocaleString('en-IN')}
                </del>

            </div>

            <button onclick="addCart()">
                Add to Cart
            </button>

        </article>

    `).join('');
}


// ================================
// ADD TO CART
// ================================

function addCart() {

    cart++;

    document.getElementById('count').textContent = cart;

    const toast = document.getElementById('toast');

    toast.classList.add('show');

    setTimeout(() => {

        toast.classList.remove('show');

    }, 1400);
}


// ================================
// SEARCH PRODUCTS
// ================================

function searchProducts() {

    const searchInput =
        document.getElementById('search');

    const query =
        searchInput.value.toLowerCase();

    const filteredProducts =
        products.filter(product =>
            product[0]
                .toLowerCase()
                .includes(query)
        );

    render(filteredProducts);

    document
        .getElementById('products')
        .scrollIntoView({
            behavior: 'smooth'
        });
}


// ================================
// SHOW ALL PRODUCTS
// ================================

function showAll() {

    document.getElementById('search').value = '';

    render(products);
}


// ================================
// ENTER KEY SEARCH
// ================================

document
    .getElementById('search')
    .addEventListener('keydown', function (event) {

        if (event.key === 'Enter') {

            searchProducts();

        }

    });


// ================================
// LOAD PRODUCTS
// ================================

render(products);