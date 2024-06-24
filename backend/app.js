// app.js

const express = require('express');
const app = express();
const cartRoutes = require('./routes/cartRoutes');

// Middleware to parse JSON bodies
app.use(express.json());

// Route middleware
app.use('/api', cartRoutes); // Prefix routes with /api, e.g., /api/cart, /api/checkout

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
