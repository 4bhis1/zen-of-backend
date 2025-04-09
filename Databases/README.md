# 🧠 Databases Mastery

Databases are the soul of any backend system — where the data lives, breathes, and tells stories.  
This module will guide you through core concepts, deep dives, and hands-on practice — from simple SELECTs to designing your own sharded NoSQL solution.

---

## ✅ Learning Goals

| Topic | Description | Status |
|-------|-------------|--------|
| [ ] Relational Databases (RDBMS) | Tables, keys, constraints, normalization |
| [ ] SQL CRUD Operations | SELECT, INSERT, UPDATE, DELETE |
| [ ] Joins & Aggregations | INNER, LEFT, GROUP BY, HAVING, etc. |
| [ ] Indexing & Performance | B-trees, covering index, explain plans |
| [ ] Transactions & ACID | Isolation levels, locks, deadlocks |
| [ ] Stored Procedures, Views, Triggers | When and why to use |
| [ ] Normalization vs Denormalization | Design tradeoffs |
| [ ] ER Models & Schema Design | Logical + physical modeling |
| [ ] NoSQL Databases | Key-Value, Document, Wide-Column, Graph |
| [ ] MongoDB & Redis Basics | CRUD, TTL, indexing, modeling |
| [ ] Sharding & Replication | Horizontal scaling & availability |
| [ ] CAP Theorem & Consistency Models | Strong, eventual, quorum |
| [ ] Query Optimization | Explain plans, slow logs, cache hits |
| [ ] Cloud Databases | AWS RDS, DynamoDB, Mongo Atlas, etc. |
| [ ] Time Series & Search Databases | InfluxDB, ElasticSearch (overview) |

---

## 📎 Resources to Learn

### 🗃️ SQL & RDBMS
- [SQLBolt (Interactive)](https://sqlbolt.com/)
- [Use the Index, Luke (Indexing)](https://use-the-index-luke.com/)
- [Mode Analytics SQL Tutorial](https://mode.com/sql-tutorial/)
- [PostgreSQL Official Docs](https://www.postgresql.org/docs/)
- [SQL Zoo](https://sqlzoo.net/)

### 📦 NoSQL
- [MongoDB University (Free)](https://university.mongodb.com/)
- [Redis Crash Course](https://www.youtube.com/watch?v=Hbt56gFj998)
- [Cassandra Intro](https://www.datastax.com/resources/what-is-apache-cassandra)
- [NoSQL vs SQL](https://www.mongodb.com/nosql-explained)

### 📚 General DB Design & Performance
- [Database Design Patterns](https://www.databasestar.com/database-design-patterns/)
- [How to Design a Database](https://www.guru99.com/database-design.html)
- [Indexing in Databases](https://www.geeksforgeeks.org/indexing-in-databases-set-1/)

---

## 💻 Practice Questions

### 🔹 SQL Queries
- Write a query to fetch top 5 customers by revenue
- Find users who signed up in the last 7 days
- Get count of orders per region using GROUP BY
- Find duplicate records using `HAVING COUNT(*) > 1`
- Implement a leaderboard with `RANK()`

### 🔹 Schema Design
- Design a schema for:
  - E-commerce (Products, Users, Orders, Payments)
  - Library System
  - Social Media Feed
- Normalize a given denormalized table (1NF → 3NF)
- Model a many-to-many relationship using junction tables

### 🔹 NoSQL Practice
- Model a product catalog in MongoDB
- Use Redis to cache user profiles with TTL
- Implement rate limiter logic using Redis counters
- Shard a collection based on user location in MongoDB

---

## 🔧 Mini Projects

### 📁 1. SQL Queries Lab
Build a Node.js CLI app that:
- Connects to Postgres
- Runs 10 queries from a `queries.sql` file
- Logs and explains results

### 📁 2. Mongo Playground
Create a small Node.js app using:
- Express + MongoDB
- A schema to manage `users`, `posts`, `likes`
- Add APIs to query using aggregations and indexing

---

## 🧪 Mega Project: Book Catalog API

**Goal:** Build a fully functional backend API using:
- PostgreSQL as the primary data source
- Redis for caching
- MongoDB for search indexing

**Features:**
- Book CRUD
- Search via Mongo
- Recently viewed cache using Redis
- Admin dashboard with complex SQL reports

Bonus: Add Swagger docs, rate limiting, health checks

---

## 🗂️ Folder Layout

