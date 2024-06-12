
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}



class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    getTotalItems() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    addItem(product, quantity) {
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            const newItem = new ShoppingCartItem(product, quantity);
            this.items.push(newItem);
        }
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    displayCart() {
        if (this.items.length === 0) {
            console.log("The cart is empty.");
        } else {
            console.log("Cart items:");
            this.items.forEach(item => {
                console.log(`- ${item.product.name}: ${item.quantity} x $${item.product.price} = $${item.getTotalPrice()}`);
            });
            console.log(`Total items: ${this.getTotalItems()}`);
            console.log(`Total price: $${this.getTotalPrice()}`);
        }
    }

    getTotalPrice() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }
}


// Create products
const product1 = new Product(1, 'Apple', 0.5);
const product2 = new Product(2, 'Banana', 0.3);
const product3 = new Product(3, 'Cherry', 1.2);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(product1, 4); // Adding 4 Apples
cart.addItem(product2, 6); // Adding 6 Bananas
cart.addItem(product3, 10); // Adding 10 Cherries

// Display the cart
cart.displayCart();

// Remove an item from the cart
cart.removeItem(2); // Removing Bananas

// Display the cart again
cart.displayCart();

// Total price
console.log(`Total price: $${cart.getTotalPrice()}`);

// Total items
console.log(`Total items: ${cart.getTotalItems()}`);



