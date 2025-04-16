require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const { initializeElastic, client } = require('./config/elastic');
const { setupMongoStream } = require('./services/syncService');
const Product = require('./models/product');

const app = express();
app.use(express.json());

// Connect to databases
connectDB();
initializeElastic();
setupMongoStream();

// POST endpoint to create product
app.post('/api/products', async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// GET endpoint to search products from Elasticsearch
app.get('/api/products/search', async (req, res) => {
    try {
        const { q } = req.query;
        const result = await client.search({
            index: 'products',
            query: {
                multi_match: {
                    query: q,
                    fields: ['name', 'description', 'category']
                }
            }
        });

        const products = result.hits.hits.map(hit => ({
            id: hit._id,
            ...hit._source
        }));

        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
