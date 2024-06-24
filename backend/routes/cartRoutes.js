// routes/cartRoutes.js

const express = require('express');
const router = express.Router();
const CartController = require('../controllers/cartController');

// Route to fetch cart items
router.get('/cart', CartController.getCartItems);

// Route to checkout (POST request)
router.post('/checkout', CartController.checkout);

module.exports = router;
