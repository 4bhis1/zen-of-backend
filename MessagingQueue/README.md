# 📨 Messaging Queues & Event-Driven Backend Systems

Welcome to the world where components **talk without waiting**, systems are **resilient**, and workloads are **balanced over time**.

This module dives into:
- Kafka (king of streaming)
- RabbitMQ (reliable broker)
- Event-driven design patterns

---

## ✅ Learning Goals

| Topic | Description | Status |
|-------|-------------|--------|
| [ ] What is a Message Queue? | A buffer that holds data between services |
| [ ] Event-Driven Architecture | React to events asynchronously |
| [ ] Pub/Sub Model | Publishers emit, subscribers consume |
| [ ] Kafka Basics | Brokers, partitions, offsets, topics |
| [ ] Kafka Producer/Consumer APIs | Push-pull with reliability |
| [ ] Kafka Consumer Groups | Horizontal scaling of listeners |
| [ ] RabbitMQ Basics | Exchanges, queues, bindings, routing keys |
| [ ] Kafka vs RabbitMQ | Streaming vs Queuing |
| [ ] Dead Letter Queues (DLQ) | Capture failed or rejected events |
| [ ] At-least-once vs Exactly-once | Delivery guarantees |
| [ ] Message Ordering & Partitioning | Topic design and keys |
| [ ] Backpressure Handling | Slow consumers, queue overflow |
| [ ] Retry Policies | Auto-retries, exponential backoff |
| [ ] Idempotency | Preventing double-processing |
| [ ] Saga Pattern | Long-lived distributed transactions |

---

## 📎 Resources to Learn

- [Kafka Official Docs](https://kafka.apache.org/documentation/)
- [RabbitMQ Tutorials (with JS)](https://www.rabbitmq.com/getstarted.html)
- [Confluent Kafka Learn Hub](https://developer.confluent.io/learn-kafka/)
- [Gaurav Sen Kafka Deep Dive](https://www.youtube.com/watch?v=Y6Ev8GIlbxc)
- [Event-Driven Systems](https://martinfowler.com/articles/201701-event-driven.html)
- [Microservices with Kafka](https://www.youtube.com/watch?v=5vVh-THodB4)

---

## 💻 Practice Exercises (Node.js Based)

| Task | Core Concepts |
|------|----------------|
| Create a Kafka producer/consumer in Node.js | KafkaJS, event-driven push/pull |
| Send email jobs to RabbitMQ | Producer + consumer + retry queue |
| Implement a retry policy | Exponential delay after failure |
| Write a log aggregator with Kafka | Streaming logs into Kafka |
| Design DLQ logic | Failed messages sent to another topic |
| Broadcast a message (pub-sub) | One-to-many push with Kafka |

---

## 🔧 Mini Project: Async Email Notification System

🛠️ Build:
- REST API `/api/send-email`
- Pushes job into RabbitMQ
- Worker listens, sends email via nodemailer
- Adds retry on failure (max 3 tries)
- On failure → push to Dead Letter Queue

---

## 🧪 Mega Project: ZingQueue – Event-Driven Booking System

### Scenario:
The booking system gets overloaded during flash sales. So let’s queue:

- User submits booking → message sent to `booking-topic`
- Kafka consumers:
  - `seat-lock-service`
  - `payment-service`
  - `email-notify-service`

### Features:
- Partition by event ID (to maintain order)
- Retries on payment failure
- DLQ for expired seats
- Acknowledgements after successful booking

### Tech:
- Kafka (via KafkaJS or node-rdkafka)
- Redis for seat-lock expiry
- MongoDB or Postgres for DB

Bonus:
- Add monitoring for lag, failure rate

---

## 🗂️ Folder Layout

