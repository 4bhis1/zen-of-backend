const { Client } = require('@elastic/elasticsearch');

const client = new Client({
    node: process.env.ELASTIC_NODE
});

const initializeElastic = async () => {
    try {
        await client.ping();
        console.log('Elasticsearch Connected...');
    } catch (err) {
        console.error('Elasticsearch connection error:', err);
        process.exit(1);
    }
};

module.exports = { client, initializeElastic };
