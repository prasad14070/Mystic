// Array to store available items
let availableItems = [
    { id: 1, name: 'Item 1', price: 10 },
    { id: 2, name: 'Item 2', price: 15 },
    { id: 3, name: 'Item 3', price: 20 }
];

// Array to store cart items
let cartItems = [];

// Function to display available items
function displayAvailableItems() {
    const availableItemsContainer = document.getElementById('available-items');
    availableItemsContainer.innerHTML = '';

    for (let i = 0; i < availableItems.length; i++) {
        const item = availableItems[i];
        const listItem = document.createElement('li');
        listItem.textContent = item.name + ' - $' + item.price;
        const addButton = document.createElement('button');
        addButton.textContent = 'Add to Cart';
        addButton.addEventListener('click', function () {
            addToCart(item.id);
        });
        listItem.appendChild(addButton);
        availableItemsContainer.appendChild(listItem);
    }
}

// Function to add an item to the cart
function addToCart(itemId) {
    // Find the selected item
    const selectedItem = availableItems.find(item => item.id === itemId);

    // Add the item to the cart array
    cartItems.push(selectedItem);

    // Update the cart display
    displayCart();
}

// Function to remove an item from the cart
function removeFromCart(index) {
    // Remove the item from the cart array
    cartItems.splice(index, 1);

    // Update the cart display
    displayCart();
}

// Function to display the cart items
function displayCart() {
    const cartContainer = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    cartContainer.innerHTML = '';

    // Display each item in the cart
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        const listItem = document.createElement('li');
        listItem.textContent = item.name + ' - $' + item.price;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', function () {
            removeFromCart(i);
        });
        listItem.appendChild(removeButton);
        cartContainer.appendChild(listItem);

        total += item.price;
    }

    totalElement.textContent = total;
}

// Function to initiate the checkout process
function checkout() {
    const cartDiv = document.getElementById('cart');
    const checkoutFormDiv = document.getElementById('checkout-form');
    cartDiv.style.display = 'none';
    checkoutFormDiv.style.display = 'block';
}

// Function to process the payment
function processPayment(event) {
    event.preventDefault();

    // Gather customer information from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;

    // Perform payment processing logic here
    // ...

    // Clear the cart
    cartItems = [];

    // Update the cart display
    displayCart();

    // Display order confirmation or redirect to a success page
    alert('Payment successful! Your order has been placed.');

    // Hide the checkout form
    const checkoutFormDiv = document.getElementById('checkout-form');
    checkoutFormDiv.style.display = 'none';

    // Reset the form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('address').value = '';
}

// Display available items on page load
displayAvailableItems();
function displayCart() {
    const cartContainer = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    // Clear the cart display
    cartContainer.innerHTML = '';

    // Display each item in the cart
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        const listItem = document.createElement('li');
        listItem.textContent = item.name + ' - $' + item.price;
        cartContainer.appendChild(listItem);
        total += item.price;
    }

    // Update the total price
    totalElement.textContent = total;
}