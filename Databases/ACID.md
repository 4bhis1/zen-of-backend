# ACID
All the SQL databses to achieve transactions must follow ACID properties.
* A - `Atomicity`  all the tranactions should be atomic.
* C - `Consistency` after the completion of transactions the database should be left in an ideal condition.
* I - `Isolation` every transction shoul run independantly, no one should depened on another transaction
* D - `Durability` even after a network failure or disaster management the data should persist into the system.

## How we can achieve ACID properties in RDBMS

### Atomicity
By using another replica which will temporay make the changes into the database and once the tranaction suceed it will reflect the changes into the primart databse, else it will rollback.

### Consistency
we can achieve this by implementing contraints and triggers over the table which will trigger the change on other database accordingly

### Isolation
We can achieve isolation by implementing a lock on the indivisual row or the table according to the requirement. There are many kind of locking system.

| **Lock Type**          | **Purpose**                                         | **Example Use Case**                                             |
| ---------------------- | --------------------------------------------------- | ---------------------------------------------------------------- |
| **Shared Lock (S)**    | Allows concurrent reads but no writes               | Multiple users viewing the same product                          |
| **Exclusive Lock (X)** | Allows only one write, no reads or writes by others | Updating product stock after a purchase                          |
| **Intent Locks**       | Supports lock hierarchy (e.g., table vs row)        | Helps the DB plan which specific rows will be locked             |
| **Optimistic Lock**    | Assume no conflict, verify before commit            | Suitable for low-contention, high-read systems like dashboards   |
| **Pessimistic Lock**   | Assume conflict, acquire locks early                | Used in critical sections like banking or financial transactions |

### Durability
we can achieve durability by storing the data into the hard-disk, as storing it into the memory can wash-out the data when system crashes. 
