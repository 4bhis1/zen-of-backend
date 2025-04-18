// metrics.js
const client = require('prom-client');

// Collect default Node.js metrics (memory, CPU, etc.)
client.collectDefaultMetrics();

// Custom metric: HTTP request duration histogram
const httpRequestDurationSeconds = new client.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status_code'],
  buckets: [0.1, 0.3, 0.5, 1, 1.5, 2, 5] // Customize these as needed
});

// Custom metric: total HTTP requests
const httpRequestsTotal = new client.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status_code']
});

module.exports = {
  httpRequestDurationSeconds,
  httpRequestsTotal,
  register: client.register
};
