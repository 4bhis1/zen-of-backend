# Caching
Caching is a technique which reduces the latency and load on the server and databases if used perfectly. It stores your data on memory(RAM) which makes the data retrieval very fast.

- Uses
    * Reduce Latency
    * Reduce DB load
    * Improve Scalability

# Caching layers (Where you can apply caching)

- Browser cache
    * Stores static files like (HTML, CSS, JS, images and static) files in the browser.
    * Stores APIs payload (so instead of making a call to server browser so it from itself).
- CDN cache
    * It stores the response geographically near to the user.
    * Can cache entire HTML pages (e.g., Varnish, Cloudflare, Fastly).
- Application Layer
    * In memory
    * Network level

    * (Use)
        - Auth tokens
        - Expensive API results
        - Rate-limiting data
        - Template-rendered pages
- DB layer
    * Built-in DB cache

### Flow
```
Browser → CDN → App (Redis) → DB
```

# TTL(Time to live)
The most annoying thing in caching is stale data. And to handle Stale Data, the first line of defense comes with time to live, here after a certain time we delete the data form cache.

```
# Redis
SET user:123 "John" EX 60  # expires in 60 seconds
```

### Different TTLS

- Sliding TTL
    * Reset TTL on every access
    * Good for session active users.
- Expiring with Randomization
    * In a high-concurrency environment, if many keys share the same time-to-live (TTL), they might all expire simultaneously. When this happens, the cache can experience a stampede, overwhelming your backend systems with a sudden influx of requests — like a flood of ants rushing toward a single crumb. To gracefully dodge this peril, we add a jitter — a small random offset to each key’s expiry time. This subtle desynchronization ensures cache expiries are scattered over time, rather than clustering like moths to a flame.

- Lazy and Active expiration
    * Lazy - Expires key, only when they are accessed.
    * Active - Searches for expired keys and delete them

# Eviction Policies

It dictate which cache to remove on memory limit.

* noeviction (default)
    - No new writes.
* LRU (Least Recently Used)
    - Only holds Least Recent used keys
* LFU (Least frequent Used)
    - Removes key with lowest access frequency

# Cache Invalidation
It's the problem of having stale data in your cache. Purging old content when updates are made


## Invalidation strategies
1. Write through Cache 
    - Here every write operations is written in both `database` and `cache` making it a strong consistency.
    - Advantages
        * `Strong Consistency`
        * No Stale Data
        * Simple Reads
    - Disadvantages
        * High Latency
        * Rollback issue, data won't be cleared from cache

2. Write behind cache
    - Writes are first caches and then written to the database
    - How it works
        * Client writes the data -> stored in the cache
        * Cache queues the write
        * Cache triggers the sync to the database
    - Advantages
        - Low latency
        - Efficient for bulk data
        - Fewer writes on DB
    - DisAdvantage
        - Risk of ta loss (if cache crashes no way to hold the data).
        - `Eventual Consistency`
        - Complexity (queueing, retry)
3. Cache aside (Lazy Loading)
    - Here the data is only gets cached only when needed
    - How it works
        * App tries to read from cache
        * If cache misses, it reads from database and updates the caches
        * Returns the data to the client.
    - Advantages
        - Efficient
    - Disadvantages
        - Slower on first access
        - Chances of stale data

4. Time Based Expiry (TTL)
    - Cache is removed after a given period of time


### Best Practices
    1. Always add TTLs
    2. Add versions or timestamps.
    3. short TTL + soft expiration + background refresh
