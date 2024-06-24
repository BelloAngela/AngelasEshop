// controllers/cartController.js

const fetch = require('node-fetch');

// Function to fetch cart items from FakeStore API
exports.getCartItems = async (req, res) => {
    try {
        const response = await fetch('https://fakestoreapi.com/carts/1'); // Replace with your cart endpoint
        if (!response.ok) {
            throw new Error('Failed to fetch cart items');
        }
        const cartData = await response.json();
        res.json(cartData);
    } catch (error) {
        console.error('Error fetching cart items:', error);
        res.status(500).json({ error: 'Failed to fetch cart items' });
    }
};

// Function to simulate checkout with FakeStore API
exports.checkout = async (req, res) => {
    try {
        const response = await fetch('https://fakestoreapi.com/carts/1/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({}),
        });

        if (!response.ok) {
            throw new Error('Failed to checkout');
        }

        const checkoutData = await response.json();
        console.log('Checkout successful:', checkoutData);
        res.json(checkoutData);
    } catch (error) {
        console.error('Error checking out:', error);
        res.status(500).json({ error: 'Failed to checkout' });
    }
};
