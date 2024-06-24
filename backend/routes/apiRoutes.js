const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

// Routes
router.get('/', productsController.getAllProducts);

module.exports = router;
