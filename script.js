document.addEventListener("DOMContentLoaded", () => {
    const products = [
        {id: 1, name: "Tomato", price: 35.20},
        {id: 2, name: "Carrot", price: 40.00},
        {id: 3, name: "Pumpkin", price: 32.12},
        {id: 4, name: "Eggs", price: 10.00},
        {id: 5, name: "Beetroot", price: 48.04},
    ];

    let cart = [];

    const productList = document.getElementById("product-list");
    const cartItems = document.getElementById("cart-items");
    const emptyCartMessage = document.getElementById("empty-cart");
    const cartTotalMessage = document.getElementById("cart-total");
    const totalPriceDisplay = document.getElementById("total-price");
    const checkoutBtn = document.getElementById("checkout-btn");

    products.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
        <span> ${product.name} - Rs.${product.price.toFixed(2)}/kg </span>
        <button data-id="${product.id}"> Add to Cart </button>
        `;
        productList.appendChild(productDiv);
    });

    productList.addEventListener("click", (e) => {
        if(e.target.tagName === "BUTTON") {
            const productId = parseInt(e.target.getAttribute("data-id"));
            const product = products.find((p) => p.id === productId);
            addToCart(product);
        }
    });

    function addToCart(product) {
        cart.push(product);
        renderCart();
    }

    function renderCart() {
        cartItems.innerText = "";
        let totalPrice = 0;
        if(cart.length > 0) {
            emptyCartMessage.classList.add("hidden");
            cartTotalMessage.classList.remove("hidden");
            cart.forEach((item, index) => {
                totalPrice += item.price;
                const cartItem = document.createElement("div");
                cartItem.classList.add("removebtn");
                cartItem.innerHTML = `
                ${item.name} - Rs.${item.price.toFixed(2)}
                <button pbtn-id="${item.id}"> Remove </button>
                `
                cartItems.appendChild(cartItem);
            });
            
            totalPriceDisplay.textContent = `Rs.${totalPrice.toFixed(2)}`;
        }
        else {
            emptyCartMessage.classList.remove("hidden");
            cartTotalMessage.classList.add("hidden");
        }
    }

    cartItems.addEventListener("click", (e) => {
        if(e.target.tagName === "BUTTON") {
            const productId = parseInt(e.target.getAttribute("pbtn-id"));
            const confirmDelete = confirm("Are you sure want to remove this item from the cart?");
            if(confirmDelete) {
                cart = cart.filter((item) => item.id !== productId);
            }
            renderCart();
        }
    });

    checkoutBtn.addEventListener("click", () => {
        cart.length = 0;
        alert("You have Checkout Successfully!");
        renderCart();
    });

});