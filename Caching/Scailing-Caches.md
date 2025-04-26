When our app goes larger and larger and there are many micro-service, local in-memorry caching won't work. For this to handle we have to bring central cache that caches to another machine which has only one role to cache the data. Our differenet services will cache there data at that specific point so that other services can use them as well.

This approach also suits when your other micro-services are scailing horizontally

## Advantages
    - Centralized cache for all app instances
    - Avoid cache duplication
    - Easier cache invalidation
    - Scalability via Redis cluster or sharding

## Disadvantages
    - Single point of failure

### How to tackle single point of failure,
    - Master-Slave
    - Horizontal Scailing
    - Local + Distributed Cache (Tiered Caching)
        * L1 → Local In-Memory (fast, isolated)
        * L2 → Shared Redis Cluster (fallback)