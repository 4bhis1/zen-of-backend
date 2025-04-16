const { client } = require('../config/elastic');
const Product = require('../models/product');

const setupMongoStream = async () => {
    const changeStream = Product.watch();
    
    changeStream.on('change', async (change) => {
        if (change.operationType === 'insert') {
            await syncToElastic(change.fullDocument);
        }
    });
};

const syncToElastic = async (product) => {
    try {
        await client.index({
            index: 'products',
            document: {
                id: product._id.toString(),
                name: product.name,
                description: product.description,
                price: product.price,
                category: product.category
            }
        });
        console.log('Document indexed in Elasticsearch');
    } catch (err) {
        console.error('Elasticsearch indexing error:', err);
    }
};

module.exports = { setupMongoStream, syncToElastic };
