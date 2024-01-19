// Array to store cart items
let cartItems = [];

// Function to add an item to the cart
function addToCart(itemName, itemPrice) {
    // Create a new item object
    const newItem = {
        name: itemName,
        price: itemPrice
    };

    // Add the item to the cart array
    cartItems.push(newItem);

    // Update the cart display
    displayCart();
}

// Function to display the cart items
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
// Function to place the order
function placeOrder() {
    // Perform order processing logic here
    // ...

    // Clear the cart
    cartItems = [];

    // Update the cart display
    displayCart();

    // Show the order confirmation message
    const cartDiv = document.getElementById('cart');
    const orderConfirmationDiv = document.getElementById('order-confirmation');
    cartDiv.style.display = 'none';
    orderConfirmationDiv.style.display = 'block';
    
}
function submitPayment(event) {
    event.preventDefault();

    // Perform payment processing logic here
    // ...

    // Clear the cart
    cartItems = [];

    // Update the cart display
    displayCart();

    // Hide the payment form
    const paymentFormDiv = document.getElementById('payment-form');
    const orderConfirmationDiv = document.getElementById('order-confirmation');
    paymentFormDiv.style.display = 'none';
    orderConfirmationDiv.style.display = 'block';
}
