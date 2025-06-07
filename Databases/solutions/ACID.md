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