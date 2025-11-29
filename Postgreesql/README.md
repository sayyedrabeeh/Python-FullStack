PostgreSQL (often called **Postgres**) is an **open-source, object-relational database management system (ORDBMS)**.
It’s one of the most powerful and widely used databases in the world.  :

###  Key Points about PostgreSQL:

1. **Relational Database** → It stores data in **tables** (rows and columns) and supports relationships between those tables using **primary keys** and **foreign keys**.
2. **Open Source & Free** → Completely free to use, developed and maintained by a large community.
3. **Standards Compliant** → Follows the **SQL standard**, so you use normal SQL queries (`SELECT`, `INSERT`, `UPDATE`, `DELETE`).
4. **Object-Relational** → Unlike plain relational databases, it supports **advanced data types** like arrays, JSON, hstore, XML, ranges, and even custom data types.
5. **ACID Compliant** → Ensures data integrity with **Atomicity, Consistency, Isolation, Durability** (important for banking, transactions, etc.).
6. **Extensible** → You can add your own functions, operators, and even programming languages.

---

###  Why PostgreSQL is Popular

* Handles **complex queries** and **large datasets** very efficiently.
* Has **powerful indexing techniques** (B-Tree, Hash, GIN, GiST, BRIN).
* Great support for **concurrent users** (thanks to MVCC – Multi-Version Concurrency Control).
* Strong support for **JSON** → making it a competitor to NoSQL databases like MongoDB.
* Works on almost every OS (Linux, Windows, macOS).

---

###  Example:

A simple PostgreSQL query:

```sql
-- Create a table
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    department VARCHAR(50),
    salary NUMERIC
);

-- Insert data
INSERT INTO employees (name, department, salary)
VALUES ('Alice', 'IT', 50000),
       ('Bob', 'HR', 45000);

-- Fetch data
SELECT * FROM employees WHERE department = 'IT';
```

---

 In short: **PostgreSQL = A free, enterprise-level, super-powerful SQL database that supports modern apps and big data.**


---

##  Types of Joins in PostgreSQL

Let’s say we have two tables:

### `employees`

| id | name    | dept\_id |
| -- | ------- | -------- |
| 1  | Alice   | 10       |
| 2  | Bob     | 20       |
| 3  | Charlie | 10       |
| 4  | David   | 30       |

### `departments`

| dept\_id | dept\_name |
| -------- | ---------- |
| 10       | IT         |
| 20       | HR         |
| 30       | Finance    |
| 40       | Marketing  |

---

###  **INNER JOIN**

Returns rows where there is a **match in both tables**.

```sql
SELECT e.id, e.name, d.dept_name
FROM employees e
INNER JOIN departments d
ON e.dept_id = d.dept_id;
```

 Result:

| id | name    | dept\_name |
| -- | ------- | ---------- |
| 1  | Alice   | IT         |
| 2  | Bob     | HR         |
| 3  | Charlie | IT         |
| 4  | David   | Finance    |

*(Only employees with matching departments are shown)*

---

###  **LEFT JOIN** (or LEFT OUTER JOIN)

Returns all rows from the **left table** (`employees`), and matching rows from the right table. If no match → `NULL`.

```sql
SELECT e.id, e.name, d.dept_name
FROM employees e
LEFT JOIN departments d
ON e.dept_id = d.dept_id;
```

 Same as INNER JOIN here, but if an employee had `dept_id` not in `departments`, it would show `NULL`.

---

###  **RIGHT JOIN** (or RIGHT OUTER JOIN)

Returns all rows from the **right table** (`departments`), and matching rows from employees.

```sql
SELECT e.id, e.name, d.dept_name
FROM employees e
RIGHT JOIN departments d
ON e.dept_id = d.dept_id;
```

 Result:

| id   | name    | dept\_name |
| ---- | ------- | ---------- |
| 1    | Alice   | IT         |
| 2    | Bob     | HR         |
| 3    | Charlie | IT         |
| 4    | David   | Finance    |
| NULL | NULL    | Marketing  |

---

###  **FULL JOIN** (FULL OUTER JOIN)

Returns all rows from both tables. If there’s no match, `NULL` fills in.

```sql
SELECT e.id, e.name, d.dept_name
FROM employees e
FULL JOIN departments d
ON e.dept_id = d.dept_id;
```

 Result will include all employees and all departments, with `NULL` where no match exists.

---

###  **CROSS JOIN**

Returns **all possible combinations** (Cartesian product).

```sql
SELECT e.name, d.dept_name
FROM employees e
CROSS JOIN departments d;
```

 If 4 employees × 4 departments → 16 rows.

---

 In real projects, **INNER JOIN** and **LEFT JOIN** are the most used.

---

 
Think of it like:

* `CREATE` → make something new
* `ALTER` → modify something that already exists
* `DROP` → delete it completely

---

##  Common Uses of `ALTER TABLE`

Here are the most important cases:

---

###  Add a New Column

```sql
ALTER TABLE employees 
ADD COLUMN age INT;
```

 Adds a new column `age` to the `employees` table.

---

###  Rename a Column

```sql
ALTER TABLE employees 
RENAME COLUMN name TO full_name;
```

 Renames column `name` → `full_name`.

---

###  Change Data Type of a Column

```sql
ALTER TABLE employees 
ALTER COLUMN salary TYPE DECIMAL(10,2);
```

 Changes the `salary` column to `DECIMAL(10,2)`.

---

###  Set or Drop a Default Value

```sql
ALTER TABLE employees 
ALTER COLUMN age SET DEFAULT 25;

ALTER TABLE employees 
ALTER COLUMN age DROP DEFAULT;
```

 Sets default value of `age` to 25, then removes it.

---

###  Add a Constraint

```sql
ALTER TABLE employees 
ADD CONSTRAINT salary_positive CHECK (salary > 0);
```

 Ensures salary is always positive.

---

###  Drop a Column

```sql
ALTER TABLE employees 
DROP COLUMN age;
```

 Removes the `age` column completely.

---

###  Rename a Table

```sql
ALTER TABLE employees 
RENAME TO staff;
```

 Renames table `employees` → `staff`.

---

###  Add/Remove Foreign Key

```sql
ALTER TABLE employees
ADD CONSTRAINT fk_dept FOREIGN KEY (dept_id)
REFERENCES departments (dept_id);

ALTER TABLE employees
DROP CONSTRAINT fk_dept;
```

 Adds or removes foreign key linking `employees` to `departments`.

---

 **Note:** Some `ALTER` operations can be expensive on large tables because PostgreSQL might need to rewrite the whole table.

--- 
 
This is a **temporary result set** that you can define within a query and reuse in that same query.
It makes **complex queries easier to read** and helps break problems into smaller steps.

---

##  Syntax

```sql
WITH cte_name AS (
    SELECT ...
)
SELECT * 
FROM cte_name;
```

* `WITH` → keyword to define a CTE
* `cte_name` → the temporary table name you give
* Inside → you write a query that produces rows
* After → you use that result in your main query

---

##  Example 1: Simple CTE

Suppose we have this table:

**employees**

| id | name    | dept\_id | salary |
| -- | ------- | -------- | ------ |
| 1  | Alice   | 10       | 50000  |
| 2  | Bob     | 20       | 45000  |
| 3  | Charlie | 10       | 60000  |
| 4  | David   | 30       | 40000  |

**departments**

| dept\_id | dept\_name |
| -------- | ---------- |
| 10       | IT         |
| 20       | HR         |
| 30       | Finance    |

---

### Find average salary per department using CTE:

```sql
WITH avg_salary AS (
    SELECT dept_id, AVG(salary) AS avg_sal
    FROM employees
    GROUP BY dept_id
)
SELECT d.dept_name, a.avg_sal
FROM avg_salary a
JOIN departments d
ON a.dept_id = d.dept_id;
```

 Result:

| dept\_name | avg\_sal |
| ---------- | -------- |
| IT         | 55000    |
| HR         | 45000    |
| Finance    | 40000    |

---

##  Example 2: Recursive CTE

CTEs can also be **recursive**, useful for hierarchical data (like org charts, categories, trees).

Say we have a table:

**employees\_hierarchy**

| id | name    | manager\_id |
| -- | ------- | ----------- |
| 1  | Alice   | NULL        |
| 2  | Bob     | 1           |
| 3  | Charlie | 2           |
| 4  | David   | 2           |

---

### Find all employees under Alice using recursive CTE:

```sql
WITH RECURSIVE emp_tree AS (
    -- Anchor member (start with Alice)
    SELECT id, name, manager_id
    FROM employees_hierarchy
    WHERE name = 'Alice'

    UNION ALL

    -- Recursive member (find direct reports of each employee)
    SELECT e.id, e.name, e.manager_id
    FROM employees_hierarchy e
    INNER JOIN emp_tree t ON e.manager_id = t.id
)
SELECT * FROM emp_tree;
```

 Result:

| id | name    | manager\_id |
| -- | ------- | ----------- |
| 1  | Alice   | NULL        |
| 2  | Bob     | 1           |
| 3  | Charlie | 2           |
| 4  | David   | 2           |

---

 In short:

* **CTE = temporary query result** you can reuse.
* **Recursive CTE = lets you handle hierarchical data like trees.**

---
 