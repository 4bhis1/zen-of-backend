# 📈 Observability for Modern Backend Systems

You can’t fix what you can’t see. Observability gives us **real-time insight** into what’s happening *inside* our applications.

This module helps you **log, trace, and measure** everything — in development and in production.

---

## ✅ Learning Goals

| Topic | Description | Status |
|-------|-------------|--------|
| [ ] Observability vs Monitoring | Observability is *why*, Monitoring is *what* |
| [ ] Logs | What happened in your system |
| [ ] Metrics | Numeric data over time (CPU, RAM, latency) |
| [ ] Traces | End-to-end journey of a request |
| [ ] Structured Logging | JSON logs with context (e.g., userId) |
| [ ] Log Levels | Info, Warn, Error, Debug, Fatal |
| [ ] Centralized Logging | ELK Stack (Elastic + Logstash + Kibana) |
| [ ] Prometheus | Metrics collection and scraping |
| [ ] Grafana | Metrics dashboard visualization |
| [ ] Jaeger | Distributed tracing |
| [ ] OpenTelemetry | Standard for tracing + metrics/logs |
| [ ] Alerting Systems | Trigger alerts via thresholds or anomalies |
| [ ] Dashboards | Real-time health overview |
| [ ] Rate Limiting Logs | Analyze DDoS or abuse patterns |
| [ ] Logging Sensitive Data | Avoid secrets or PII leaks |

---

## 📎 Resources to Learn

- [Prometheus + Grafana Quick Start](https://prometheus.io/docs/visualization/grafana/)
- [OpenTelemetry for Node.js](https://opentelemetry.io/docs/instrumentation/js/)
- [Winston Logger Docs](https://github.com/winstonjs/winston)
- [ELK Stack Setup Tutorial](https://www.elastic.co/what-is/elk-stack)
- [Jaeger Tracing Docs](https://www.jaegertracing.io/docs/1.36/)
- [Observability Explained – Honeycomb](https://www.honeycomb.io/what-is-observability)

---

## 💻 Practice Exercises (Node.js Based)

| Task | Core Concepts |
|------|----------------|
| Add structured logging with Winston | Metadata, timestamp, levels |
| Stream logs to file and stdout | Logger transports |
| Add tracing with OpenTelemetry | Trace a request from controller to DB |
| Set up Prometheus on local | Export app metrics via `/metrics` |
| Build a Grafana dashboard | CPU, memory, response time |
| Track API response times | Middleware timer + histogram |
| Create alert when error logs spike | Log parser + alert hook (mail/slack) |

---

## 🔧 Mini Project: ZingMonitor

Create an **observability layer** for the ZingTickets API:

- Request → Response logging (with latency)
- Error logging (with stack trace)
- Metrics: total bookings, avg response time
- Dashboard via Grafana
- Alerts for:
  - High latency (>1s avg)
  - High error rate (>5% in 5m)
  - Booking spike (>100/min)

---

## 🧪 Mega Project: Observability Layer for Microservices

Track across services:

- booking-service
- payment-service
- email-service

Add:

- Trace propagation using OpenTelemetry
- Centralized logs (ELK)
- Distributed tracing via Jaeger
- Prometheus + Grafana for:
  - API Latency
  - Memory/CPU Usage
  - Queue length in Kafka

Tech Stack:

- `OpenTelemetry + Jaeger`
- `Winston + ELK Stack`
- `Prometheus + Grafana`

---

## 🗂️ Folder Layout

