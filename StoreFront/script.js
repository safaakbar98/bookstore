function navigateToCart() {
    window.location.href = 'cart.html'; // Redirect to the cart page
}

const products = [
    { id: 1, name: 'Harry Potter and the Sorcerer\'s Stone', price: 10, image: 'https://m.media-amazon.com/images/I/51Ppi-8kISL.jpg' },
    { id: 2, name: 'It Ends With Us', price: 20, image: 'images/itends.jpg' },
    { id: 3, name: 'Atomic Habits', price: 30, image: 'images/atomichabits.jpeg' },
    { id: 4, name: 'Harry Potter and the Sorcerer\'s Stone', price: 10, image: 'https://m.media-amazon.com/images/I/71FxgtFKcQL._AC_UF1000,1000_QL80_.jpg' },
    { id: 5, name: 'The Alchemist', price: 20, image: 'images/thealchemist.jpg' },
    { id: 6, name: 'Forty Rules of Love', price: 30, image: 'images/40rules.jpg' },
    { id: 5, name: 'The power of Discipline', price: 20, image: 'images/discipline.jpg' },
    { id: 6, name: 'The universe always has a plan', price: 30, image: 'images/universe.jpg' }
];

// Function to display products on the webpage
function displayProducts() {
    const productsContainer = document.getElementById('products');

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <img class="product-img" src="${product.image}" alt="${product.name}">
            <div class="product-details">
                <h2 class="product-title">${product.name}</h2>
                <p class="product-price">$${product.price}</p>
                <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;

        productsContainer.appendChild(productCard);
    });
}

// Function to add product to cart
function addToCart(productId) {
    // Retrieve cart items from localStorage
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the product to cart
    // Your logic to add product to cart goes here
    // For demonstration, let's just alert and increment the count
    alert(`Product with ID ${productId} added to cart`);
    
    // Increment the count
    const cartCountElement = document.getElementById('cart-count');
    let count = parseInt(cartCountElement.textContent);
    count++;
    cartCountElement.textContent = count;

    // Update localStorage with the updated cart items
    localStorage.setItem('cart', JSON.stringify(cartItems));
}




// Call the displayProducts function when the page loads
window.onload = displayProducts;
