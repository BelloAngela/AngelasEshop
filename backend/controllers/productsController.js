const Product = require('../models/Product');

// Controller functions
exports.getAllProducts = async (req, res) => {
  try {
    let query = Product.find();

    // Filtering
    if (req.query.category) {
      query = query.where('category').equals(req.query.category);
    }

    // Sorting
    if (req.query.sortBy) {
      query = query.sort(req.query.sortBy);
    }

    const products = await query.exec();
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};
