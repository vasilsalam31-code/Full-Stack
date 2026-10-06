let cartCount = 0;


// ============================
// ADD TO CART
// ============================

function addToCart(productName) {

    cartCount++;

    document.getElementById("cartCount").innerText =
        cartCount;

    showToast(productName + " added to cart");

}


// ============================
// TOAST MESSAGE
// ============================

function showToast(message) {

    const toast =
        document.getElementById("toast");

    toast.innerText = message;

    toast.classList.add("show");

    setTimeout(function () {

        toast.classList.remove("show");

    }, 2500);

}


// ============================
// SEARCH PRODUCTS
// ============================

function searchProducts() {

    const input =
        document.getElementById("searchInput");

    const searchText =
        input.value.toLowerCase().trim();

    const products =
        document.querySelectorAll(".product-card");


    products.forEach(function (product) {

        const productName =
            product
                .getAttribute("data-name")
                .toLowerCase();

        if (
            productName.includes(searchText)
            ||
            searchText === ""
        ) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });


    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// ============================
// ENTER KEY SEARCH
// ============================

const searchInput =
    document.getElementById("searchInput");


if (searchInput) {

    searchInput.addEventListener(
        "keypress",
        function (event) {

            if (event.key === "Enter") {

                searchProducts();

            }

        }
    );

}


// ============================
// SHOW ALL PRODUCTS
// ============================

function showAllProducts() {

    const products =
        document.querySelectorAll(".product-card");

    products.forEach(function (product) {

        product.style.display = "block";

    });


    document.getElementById("searchInput").value = "";

}


// ============================
// NEWSLETTER
// ============================

function subscribe() {

    const email =
        document.getElementById("email").value.trim();


    if (email === "") {

        showToast(
            "Please enter your email address"
        );

        return;

    }


    if (!email.includes("@")) {

        showToast(
            "Please enter a valid email address"
        );

        return;

    }


    showToast(
        "Thank you for subscribing!"
    );


    document.getElementById("email").value = "";

}