## GroupBy vs Window Function

`group by` function like `sum`,`avg` are applied in the collapsed row. where as `window functions` are somehow applied to the rows related to each other

## Window Function

basic template
```sql
<window function> over (
    partion by <column>
    order by <column>
)
```

#### partitionby vs group by
* `partition by` doesn't collapes the realted rows
* `group by` collapeses the related rows

### 1. `ROW_NUMBER()`

`ROW_NUMBER` function are used to rank the related rows.

```sql
SELECT *,
ROW_NUMBER() over (partition by department) as rank
FROM employees
```

No tie-breaker protection: Even if values are equal, it forces a unique order.

### 2. `RANK()` and `DENSE_RANK()`
they are heavily depended on `order by`. 
* `Rank()` ties are honored but ranks are skipped
* `dense_rank()` ties are honores but ranke are not sipped

```sql
SELECT *,
DENSE_RANK() OVER (PARTITION BY department order by salary) AS dense_rnk,
ROW_NUMBER() over (partition by department ORDER by salary)  

```

### 5. `NTILE(n)`
groups out the data in chunks and rank them accordingly
```sql
SELECT *,
      NTILE(2) OVER (PARTITION BY department order by salary) AS rnk
FROM employees
```
### 6. `LAG()` and `LEAD()`
### 8. `FIRST_VALUE()` and `LAST_VALUE()`
### 10. `SUM()`, `AVG()`, `COUNT()`
