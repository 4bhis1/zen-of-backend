# 🏛️ System Design Mastery

System Design is the art of constructing **scalable**, **reliable**, and **maintainable** systems that can serve millions.  
This module teaches you how to think like an architect — from abstract ideas to concrete, distributed realities.

---

## ✅ Learning Goals

| Concept | Description | Status |
|--------|-------------|--------|
| [ ] High-Level Design (HLD) | Component-based design, protocols, APIs |
| [ ] Client-Server Architecture | How frontend, backend, and DB interact |
| [ ] Load Balancers | Types, reverse proxies, DNS vs app-level |
| [ ] Horizontal vs Vertical Scaling | Scale-out vs scale-up strategy |
| [ ] Caching | Where to cache, cache invalidation, Redis |
| [ ] Databases at Scale | Replication, sharding, eventual consistency |
| [ ] Rate Limiting & Throttling | Prevent abuse, fair usage |
| [ ] Queues & Messaging | Kafka, RabbitMQ, async processing |
| [ ] CDN & Static Content | How CDNs reduce latency |
| [ ] Microservices vs Monolith | Tradeoffs and best use cases |
| [ ] Service Discovery | Dynamic registry like Consul, etcd |
| [ ] API Gateway | Authentication, routing, throttling |
| [ ] System Design Diagrams | Sequence, component, and interaction |
| [ ] Fault Tolerance & Retry Logic | Graceful failure, idempotency |
| [ ] Consistency & Availability | CAP theorem, quorum, conflict resolution |
| [ ] Designing for Read vs Write | CQRS, read replicas, fan-out |

---

## 📎 Resources to Learn

- [System Design Primer (GitHub Gold)](https://github.com/donnemartin/system-design-primer)
- [Grokking the System Design Interview (Free GitHub Mirror)](https://github.com/checkcheckzz/system-design-interview)
- [ByteByteGo YouTube Channel](https://www.youtube.com/c/ByteByteGo)
- [Design Patterns for Scalable Systems](https://github.com/binhnguyennus/awesome-scalability)
- [CS75 (Harvard) - Scalable Systems Lecture](https://cs75.tv/2010/fall/lectures/scalability/)

---

## 💭 Practice Questions

| Problem | What to Think About |
|--------|----------------------|
| Design a URL Shortener | Hashing, DB schema, cache, redirection |
| Design Twitter | Fan-out, timeline DB, pub/sub, rate limits |
| Design WhatsApp | Message queue, delivery ACK, encryption |
| Design Netflix | CDN, storage, encoding, scaling video streams |
| Design Instagram | Photo uploads, feed gen, likes/comments |
| Design Uber | GPS, pub/sub, location queues, driver-rider sync |
| Design a Notification System | Kafka, push services, retries |
| Design BookMyShow | Seat locking, events, concurrency, payments |

> Pick any 3. Create components + API specs + system diagrams.

---

## 🔧 Mini Projects

### 1. Design Docs Collection
Write markdown docs for:
- URL Shortener
- News Feed
- Real-time Chat

Include:
- Use Cases
- Tech Stack
- Component Breakdown
- Data Flow Diagram
- APIs

---

## 🧪 Mega Project: Design BookMyShow Clone

**Goal:** Design a scalable seat-booking system with:
- Kafka-based event pipeline
- Redis for caching seat states
- MongoDB for fast lookups
- PostgreSQL for core transactional data

**Required Design Outputs:**
- Component Diagram (draw.io / Excalidraw)
- High-Level Flow + Data Stores
- API contracts (`/api/book`, `/api/lock`, etc.)
- Queue architecture + retry logic
- Rate limiting and auth middleware

Optional Bonus: Create a prototype backend in Node.js

---

## 🗂️ Folder Layout

