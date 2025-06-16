| Clause / Concept   | What Happens Here                                                                                        |
| ------------------ | -------------------------------------------------------------------------------------------------------- |
| `WITH` / `CTE`     | Common Table Expressions are evaluated first (temporary named result sets)                               |
| `FROM` / `JOIN`    | Tables are loaded, joins are performed, aliases are defined                                              |
| `ON`               | Join conditions are applied                                                                              |
| `WHERE`            | Filters rows **before aggregation** (no window or aggregates yet)                                        |
| `GROUP BY`         | Groups rows into buckets based on specified columns                                                      |
| `HAVING`           | Filters the groups created above                                                                         |
| `WINDOW FUNCTIONS` | Like `ROW_NUMBER()`, `RANK()`, `LEAD()` — evaluated **after GROUP BY and HAVING**, but **before SELECT** |
| `SELECT`           | Expressions are evaluated, columns projected, aliases assigned                                           |
| `DISTINCT`         | Removes duplicates from SELECT output (if used)                                                          |
| `ORDER BY`         | Sorts the final result set; can use SELECT aliases                                                       |
| `LIMIT` / `OFFSET` | Restricts how many rows to return, skips rows if OFFSET used                                             |


## ON vs Where

`on` is used to join the 

```sql
WITH sales_cte AS (
  SELECT employee_id, SUM(sale_amount) AS total_sales
  FROM sales
  WHERE sale_date >= '2024-01-01'
  GROUP BY employee_id
)
SELECT
  e.name,
  s.total_sales,
  RANK() OVER (ORDER BY s.total_sales DESC) as sales_rank,
  CASE
    WHEN s.total_sales > 100000 THEN 'Elite'
    WHEN s.total_sales > 50000 THEN 'Performer'
    ELSE 'Needs Improvement'
  END AS category
FROM employees e
JOIN sales_cte s ON e.id = s.employee_id
WHERE e.department = 'Sales'
ORDER BY sales_rank
LIMIT 5 OFFSET 5;
```
