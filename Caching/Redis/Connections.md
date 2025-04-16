# Connect Redis with NodeJs, and read-write from cache

## Install
```Javascript
npm i redis
```

## Connect and Test
```Javascript
import {createClient} from Redis

// if the redis is on another instance
const redisClient = createClient({
  url: 'redis://alice:foobared@awesome.redis.server:6380'
});
// else
const redisClient = createClient();

redisClient.on('error', err => console.log('Redis redis Error', err));

await redisClient.connect();

```

### Storing and retrieving single string

```javascript
await redisClient.set('key', 'value');
const value = await client.get('key');

```

### Store and retrieve map

```javascript
await client.hSet('user-session:123', {
    name: 'John',
    surname: 'Smith',
    company: 'Redis',
    age: 29
})

let userSession = await client.hGetAll('user-session:123');
console.log(JSON.stringify(userSession, null, 2));
/*
{
  "surname": "Smith",
  "name": "John",
  "company": "Redis",
  "age": "29"
}
 */
```

<hr>

For creating cache a single Source of truth we deploy redis on a single instance so every micro service can use it. So the main question arises `there will network latency involved when making calls to fetch or store data, will it make it caching slow?`

##  Why Redis is Still Fast Even Across Network:

### 1. In-Memory Data Store
Accessing memory is orders of magnitude faster than disk I/O, even when accounting for network latency.

### 2. Optimized Protocol (RESP)
Redis uses a custom lightweight protocol (RESP – Redis Serialization Protocol), which is extremely fast to parse and transmit.

* It's more efficient than, say, full-blown HTTP.
* Minimal overhead, low payload sizes.

### 3. High Throughput and Low Latency
Redis can handle hundreds of thousands of requests per second with sub-millisecond latency — even over the network.

* A typical Redis call takes ~0.5–1ms over LAN (and <0.1ms on the same host).
* Compared to a DB query (10–100ms), it's still super fast.

### 4. Persistent TCP Connections
Clients don’t open a new connection for every call. Redis connections are persistent.

* This avoids the overhead of repeated handshakes and TLS (if enabled).


### 5. Use of Local Caching (Optional)
In some setups, applications use local in-process caches (like LRU caches) for extremely hot keys, and fallback to Redis only when needed.

## Real Optimization Tactics
* Use Redis for what it’s good at: caching frequently-read, rarely-updated data.

* Batch calls: Instead of making 10 separate GETs, use a MGET to fetch multiple keys in one go.

* Reduce serialization overhead: Store compact data (strings, hashes), and avoid bloated JSON blobs.

* Deploy Redis close to your app: Same data center, availability zone, or VPC — this reduces round-trip time.
