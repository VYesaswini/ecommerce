const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Simple in-memory products list (instead of MySQL)
const products = [
  {
    id: 1,
    name: 'Smartphone',
    price: 14999.0,
    image_url: 'images/phone.png',
    description: 'Budget Android smartphone'
  },
  {
    id: 2,
    name: 'Laptop',
    price: 55999.0,
    image_url: 'images/laptop.png',
    description: '14 inch slim laptop'
  },
  {
    id: 3,
    name: 'Headphones',
    price: 1999.0,
    image_url: 'images/headphones.png',
    description: 'Wireless over-ear headphones'
  },
  {
    id: 4,
    name: 'Smart Watch',
    price: 2999.0,
    image_url: 'images/watch.png',
    description: 'Fitness tracking smartwatch'
  }
];

// Serve static frontend files
app.use(express.static(path.join(__dirname, 'public')));

// API to get products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
