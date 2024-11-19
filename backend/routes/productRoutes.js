// import express to create a router 
const express = require('express');

// create a router object
const router = express.Router();

// import database conection
const db = require('../config/database-connection')



// Define an API endpoint that fetches product names
router.get('/products', (req, res) => {
    db.query('SELECT category_id, id, name, description, image_url,  price, stock FROM products', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results); // Send data as JSON
    });
});

module.exports = router;