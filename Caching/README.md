# ⚡ Caching Strategies & Implementation

When speed becomes the need, **caching** becomes the creed.

Caching allows you to **serve data faster**, reduce load on DBs, and improve system **resilience**. But caching carelessly? That’s how bugs and staleness sneak in. Let's learn to cache **intelligently**.

---

`Read Before going below [Redis as a Instance](./Redis/Connections.md)

## ✅ Learning Goals

| Topic | Description | Link |
|-------|-------------|--------|
| [ ] What is Caching? | Temporary storage for fast data access |
| [ ] Caching Layers | Browser, CDN, app layer, DB layer |
| [ ] Redis vs Memcached | In-memory storage for blazing speed |
| [ ] TTL (Time to Live) | Set cache expiry |
| [ ] Eviction Policies | LRU, LFU, FIFO, custom scoring |
| [ ] *Cache Invalidation | The hardest problem in CS 😉 |
| [ ] *Write-through vs Write-behind | Sync cache with DB or delay |
| [ ] Cache-aside Pattern | Lazy loading, manual population |
| [ ] *CDN Caching | Static asset offloading |
| [ ] *Query Caching | Caching DB queries (with Redis or inside DB) |
| [ ] *Rate Limiting via Cache | Redis counter pattern |
| [ ] Session Management | Storing sessions in Redis |
| [ ] *Redis Pub/Sub | Event broadcasting across instances |
| [ ] *Distributed Caching | Horizontal scale-out caching |
| [ ] *Caching in Microservices | Shared cache vs local cache dilemmas |

FOLLOW : https://chatgpt.com/share/67ff5dfb-3a3c-8005-97d2-64e6afe51a4b

---

## 📎 Resources to Learn

- [Redis Docs – Caching Patterns](https://redis.io/docs/)
- [Caching Strategies Illustrated](https://dev.to/pradumnasaraf/caching-strategies-explained-visually-2i0d)
- [Cloudflare Blog on CDN Caching](https://blog.cloudflare.com/tag/caching/)
- [Redis vs Memcached Comparison](https://www.geeksforgeeks.org/difference-between-redis-and-memcached/)
- [Awesome Caching GitHub List](https://github.com/addyosmani/awesome-caching)

---

## 💻 Practice Exercises (In Node.js)

| Task | Core Concepts |
|------|---------------|
| Cache API responses using Redis | Redis, TTL, async Redis client |
| Implement Cache-aside Pattern | Manual fetch + store |
| Use Redis to rate-limit login | Key expiration, counter increment |
| Create LRU Cache in JS (class) | Eviction policy logic |
| Redis Pub/Sub demo | Real-time message handling |
| Session management with Redis store | Express-session + Redis store adapter |
| Product List Pagination Cache | Cache per-page results with expiry |

---

## 🔧 Mini Project: Redis-Cached Product API

- Build `/api/products?page=2`
- Data fetched from DB if not in Redis
- Store each page's response with TTL
- On product update → invalidate page caches

---

## 🧪 Mega Project: ZingCache Layer (Plug-in Cache for ZingTickets)

### Problem:
Your ticketing system experiences peak load during flash sales. The DB is overwhelmed.

### Solution:
Design and implement:
- Page-level caching of event listings (TTL: 5 mins)
- Seat availability cache (TTL: 10 sec)
- Lock seat selection for 1 min (auto-expiry Redis key)
- Event popularity ranking using sorted sets (ZSET)

Tech:
- Redis
- Node.js
- Middleware cache for REST API
- Async invalidation (manual or event-driven)

---

## 🗂️ Folder Layout

