# 🌐 High-Level Design (HLD)

High-Level Design is about thinking big — defining **how components interact**, **what technologies to use**, **how data flows**, and **how to scale**.

It’s like being an architect before the bricks are laid.

---

## ✅ Learning Goals

| Concept | Description | Status |
|--------|-------------|--------|
| [ ] Requirements Gathering | Functional & non-functional requirements |
| [ ] Traffic & Load Estimation | QPS, storage, bandwidth, latency budgets |
| [ ] Component Identification | Frontend, backend, services, DBs, caches |
| [ ] APIs & Protocols | REST, GraphQL, gRPC, WebSocket |
| [ ] Load Balancers | HAProxy, NGINX, application LB, round-robin |
| [ ] CDN Design | Cloudflare, Akamai, static asset caching |
| [ ] Caching Layers | Redis, Memcached, CDN vs App-level cache |
| [ ] Queueing Systems | Kafka, RabbitMQ, sidekiq, cron jobs |
| [ ] Sharding & Partitioning | UserID-based splits, consistent hashing |
| [ ] Databases for Scale | Write-optimized vs read-optimized DBs |
| [ ] Storage Systems | Blob stores, AWS S3, backups, data lake |
| [ ] Data Flow Design | Ingestion → Processing → Storage → API |
| [ ] API Gateway & Auth | Kong, Apigee, JWT, OAuth2 |
| [ ] Monitoring & Logging | ELK stack, Prometheus, Grafana |
| [ ] Health Checks & Failovers | Heartbeats, retries, circuit breakers |
| [ ] Service Registry & Discovery | Consul, Eureka, Zookeeper |
| [ ] CI/CD Design | GitHub Actions, Jenkins, blue-green deploys |

---

## 📎 Resources to Learn

- [ByteByteGo YouTube Channel](https://www.youtube.com/c/ByteByteGo)
- [System Design Primer GitHub](https://github.com/donnemartin/system-design-primer)
- [Gaurav Sen’s System Design Playlist](https://www.youtube.com/playlist?list=PLMCXHnjXnTnvo6alSjVkgxV-VH6EPyvoX)
- [Martin Kleppmann on Data Systems](https://martin.kleppmann.com/)
- [Cloud Architecture Patterns (Azure Docs)](https://learn.microsoft.com/en-us/azure/architecture/patterns/)
- [Designing Data-Intensive Applications (Book)](https://dataintensive.net/)

---

## 💭 Practice Exercises

Design the architecture of the following systems. For each:

- Define APIs
- Estimate scale (QPS, storage, users)
- Draw HLD diagram (draw.io or Excalidraw)
- List all components
- Identify bottlenecks and cache points

| System | Focus Area |
|--------|------------|
| Design a YouTube clone | Video storage, CDN, transcoding |
| Design a scalable file upload service | S3, chunking, retries |
| Design Instagram stories | Read-heavy, media serving, TTL |
| Design a realtime feed | Kafka, Redis, WebSockets |
| Design Google Docs | CRDTs, realtime collab, sync |
| Design a logging service | ELK, partitioned storage |
| Design a voice chat app | Pub/Sub, WebRTC |

---

## 🔧 Mini Projects

### 1. Tech Stack Spec Sheets

Pick 3 different architectures (e.g., real-time chat, ecommerce, ride-sharing) and:

- Write detailed **tech stack decisions** for each
- List tradeoffs (SQL vs NoSQL, monolith vs microservice)
- Add simplified system diagrams

---

## 🧪 Mega Project: Design “ZingTickets” – A Scalable Ticketing System

### Key Features:
- 5M daily users
- 500K events, 1B tickets
- Real-time seat locking
- Payment integration
- Spam/bot protection
- Admin analytics dashboard

### Design Outputs:
- Component Diagram
- Flow Diagram (user journey, data movement)
- Queuing architecture for event booking
- Rate-limiting plan
- Tech stack with reasons

Bonus: Add **Cloud cost estimate** and **future scaling ideas**

---

## 🗂️ Folder Layout

