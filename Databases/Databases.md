## Practical Scenarios & Recommendations
1. E-Commerce Platform (Amazon Flipkart Clone)
    * Product Catalog → MongoDB or PostgreSQL → Products can have varying fields (books vs shoes) → Mongo fits, but for analytics and strong relations → Postgres wins.
    * Orders, Payments → PostgreSQL
→ Transactions are sacred. You don’t want half-paid orders.
    * Search bar → Elasticsearch
    → “iPhon” → “iPhone 13 Pro” – you need fuzziness and speed.
    * Cache layer → Redis
    → For product info, user sessions, etc.

2. Real-time Chat App (WhatsApp Clone)
    * Messages → Cassandra
    → Fast writes, massive scale, time-based sorting.
    * Presence/Status → Redis
    → Fast ephemeral data.
    * Users/Accounts → PostgreSQL or MySQL

3. Analytics Dashboard / IoT Platform
    * Sensor data → InfluxDB or TimescaleDB → Time-series data, aggregates over time windows.
    * Metadata/config → PostgreSQL

4. Social Network (Instagram, Twitter Clone)
    * Posts, Comments → PostgreSQL or MongoDB
    * Follower Graph → Neo4j
→ Who follows whom? Traversing 3rd degree connections?
    * Search → Elasticsearch