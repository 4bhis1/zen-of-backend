// server.js
const express = require('express');
const {
  httpRequestDurationSeconds,
  httpRequestsTotal,
  register
} = require('./metrics');

const app = express();

// Middleware to measure request duration and count
app.use((req, res, next) => {
  const end = httpRequestDurationSeconds.startTimer();
  res.on('finish', () => {
    end({
      method: req.method,
      route: req.route?.path || req.originalUrl,
      status_code: res.statusCode
    });

    httpRequestsTotal.inc({
      method: req.method,
      route: req.route?.path || req.originalUrl,
      status_code: res.statusCode
    });
  });
  next();
});

// Sample route
app.get('/', (req, res) => {
  res.send('Hello, Metrics 👋');
});

// Another sample route
app.get('/api/data', (req, res) => {
  setTimeout(() => res.json({ data: 'sample' }), Math.random() * 1000);
});

// Expose metrics at /metrics for Prometheus
app.get('/metrics', async (req, res) => {
  res.setHeader('Content-Type', register.contentType);
  res.send(await register.metrics());
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`📊 Metrics exposed at http://localhost:${PORT}/metrics`);
});
