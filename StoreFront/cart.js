// Function to retrieve cart items from localStorage
function getCartItems() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

// Function to display cart items on the cart page
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartItems = getCartItems();

    cartItems.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');

        cartItemElement.innerHTML = `
            <img class="product-img" src="${item.image}" alt="${item.name}">
            <div class="product-details">
                <h2 class="product-title">${item.name}</h2>
                <p class="product-price">$${item.price}</p>
            </div>
        `;

        cartItemsContainer.appendChild(cartItemElement);
    });

    
}

displayCartItems();
