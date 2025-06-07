# CAP
CAP Theorem applies to any distributed data system, and that includes distributed databases.

* `Consistency` every read should get latest write.
* `Availability` the database responds with stale data, but don't give error or make system Wait.
* `Partition Tolerance` continues to operate even if network fails or some part of system crashes.

Network are not reliable so there is a tradeoff between `Consistency` and `Availability`

### Consistncy 

Multiple copies of same data, the issue comes to have a consistent data. 

1. Weak Consistnecy
    * After a write, reads may or may not see it. A best effort approach is taken.
    * eg. multiplayer games, or video chats

2. Eventual Consistency
    * After a write, reads will eventually see it (typically within milliseconds). Data is replicated asynchronously.
    * eg. DNS, email

3. Strong Consistency
    * After a write, reads will see it. Data is replicated synchronously.
    * This approach is seen in file systems and RDBMSes. Strong consistency works well in systems that need transactions.


### Availability
To support availability there are two ways: `fail-over` and `replications`
* Fail-Over
    - active-passive
        
        here the hearbest are sent between the active server and passive is kept on standby. once the active server crashes passive server takes over that IP.
    - Active-Active

* Replications
    - Master-slave
    - master-master


## Relation of Databases with CAP

###  SQL (PostgreSQL / MySQL):
* Often run in a single-node setup or tightly coupled clusters.
* You always get the latest write (ACID).
* Consistency wins, availability can suffer (e.g., lock contention, replication lag = delay).

    ### SQL databases can't be scaled horizontally ?
    Traditionally — NO. But modern SQL databases — YES, with caveats.

        - WHY?
            * ACID Guarantees
            * JOINs and Foreign Keys
        - So how you can scale
            * Add mulitple replicas
            * Shards the by range/hash
            * Veritcal scale
            * Cache
    

### NoSQL (MongoDB / Cassandra / DynamoDB):
Designed for massive horizontal scale.

* You may get a stale read because:
    * Writes are asynchronously replicated
    * Reads can be from any node
* You trade strong consistency for high availability and performance.

