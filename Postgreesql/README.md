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


#  PART 1: BASIC SQL OPERATIONS (VERY DEEP EXPLANATION)

Think of a database table like an **Excel sheet stored on a server**, but:

* Multiple users can use it at once
* Data is protected
* Rules are enforced
* Queries are fast even with millions of rows

---

##  INSERT

### What is INSERT?

`INSERT` is used to **add new data (rows)** into a table.

A table without INSERT is like:

> A notebook that you are never allowed to write in.

---

### Why do we need INSERT?

Because databases exist to **store information permanently**:

* Users registering on a website
* Orders being placed
* Payments being recorded
* Logs being saved

Without `INSERT`, your database would be **read-only**, which is useless for most applications.

---

### Where is INSERT used?

Everywhere:

* User signup
* New product creation
* Recording transactions
* Logging events

---

### Example

```sql
INSERT INTO users (name, email, age)
VALUES ('John', 'john@gmail.com', 25);
```

### What actually happens internally?

1. PostgreSQL checks:

   * Data types
   * Constraints (NOT NULL, CHECK, FK, etc.)
2. Writes the row into memory (shared buffers)
3. Writes a WAL record (for crash recovery)
4. Eventually saves it to disk

So `INSERT` is **safe, transactional, and durable**.

---

### Real-world note ⚠️

* INSERT is **slow compared to SELECT**
* Bulk INSERTs are optimized using `COPY`

---

##  UPDATE

### What is UPDATE?

`UPDATE` **modifies existing rows** in a table.

---

### Why does UPDATE exist?

Because real-world data **changes**:

* User updates profile
* Order status changes
* Price updates
* Mistakes need correction

---

### Where is UPDATE used?

* Profile edit pages
* Status workflows (pending → approved)
* Admin panels
* Automated jobs

---

### Example

```sql
UPDATE users
SET age = 26
WHERE id = 1;
```

---

### Why WHERE is critical here ⚠️

Without `WHERE`:

```sql
UPDATE users SET age = 26;
```

👉 **Every user becomes 26 years old**

This is one of the **most common production disasters**.

---

### How UPDATE works internally (important)

PostgreSQL **does NOT overwrite rows**.

Instead:

1. Old row becomes invisible
2. New row version is created
3. MVCC keeps consistency
4. VACUUM later cleans old rows

👉 This is why UPDATE creates **table bloat** if abused.

---

##  DELETE

### What is DELETE?

Removes rows from a table.

---

### Why DELETE exists?

Because:

* Data becomes invalid
* Accounts are closed
* Old logs expire
* GDPR / legal compliance

---

### Example

```sql
DELETE FROM users WHERE inactive = true;
```

---

### DELETE vs TRUNCATE (VERY IMPORTANT)

| DELETE        | TRUNCATE                   |
| ------------- | -------------------------- |
| Row-by-row    | Removes all rows instantly |
| Transactional | Not transactional          |
| Slower        | Very fast                  |
| Can use WHERE | Cannot use WHERE           |

---

### Internal behavior

Like UPDATE:

* Rows are marked invisible
* Space is reclaimed by VACUUM

---

##  SELECT with WHERE

### What is SELECT?

`SELECT` **reads data** from tables.

---

### Why SELECT exists?

Because data is useless unless you can:

* View it
* Analyze it
* Filter it
* Join it

---

### WHERE clause (CRITICAL)

`WHERE` filters rows **before** returning them.

```sql
SELECT * FROM users WHERE age >= 18;
```

---

### Real-world usage

* Login checks
* Reports
* Dashboards
* APIs

---

### How WHERE works internally

* Uses indexes (if available)
* Otherwise scans entire table
* Filters rows based on condition

👉 This is why **indexes matter**

---

##  ORDER BY

### What is ORDER BY?

Sorts the result set.

---

### Why ORDER BY exists?

Databases **do not store rows in order**.

Without ORDER BY:

* Result order is unpredictable
* Can change anytime

---

### Example

```sql
ORDER BY created_at DESC;
```

---

### Performance note 

* ORDER BY without index = expensive
* Large sorts use disk memory

---

##  LIMIT and OFFSET

### What are they?

They control **how many rows** you get.

---

### Why do we need them?

For:

* Pagination
* Performance
* APIs

---

### Example

```sql
LIMIT 10 OFFSET 20;
```

This means:

> Skip first 20 rows, return next 10

---

### Problem with OFFSET 

Large OFFSET = slow
Better approach = **keyset pagination**

---

##  DISTINCT

### What is DISTINCT?

Removes duplicate rows.

---

### Why DISTINCT exists?

Real data often contains duplicates:

* Cities
* Categories
* Tags

---

### Example

```sql
SELECT DISTINCT city FROM users;
```

---

### Performance warning

DISTINCT requires:

* Sorting
* Or hashing

Which is **expensive on large data**

---

##  ALIASES (AS)

### What is an alias?

A temporary name for:

* Columns
* Tables
* Expressions

---

### Why aliases exist?

For:

* Readability
* Shorter queries
* Complex expressions

---

### Example

```sql
SELECT COUNT(*) AS total_users FROM users;
```


---

#   DATA TYPES

Think of **data types** as **rules about what kind of data is allowed and how PostgreSQL stores it internally**.
Choosing the **wrong data type** leads to:

* Wasted storage
* Slow queries
* Bugs
* Data corruption
* Pain later 😄

---

##  NUMERIC TYPES

###  INTEGER

### What it is

A **32-bit signed whole number**.

Range:

```
-2,147,483,648 to 2,147,483,647
```

---

### Why INTEGER exists

Most real-world numbers are:

* IDs
* Counts
* Quantities
* Status codes

INTEGER is:

* Fast
* Compact (4 bytes)
* Indexed efficiently

---

### When to use

* User IDs
* Product quantities
* Age
* Status flags

---

### When NOT to use

* Money
* Very large values
* Precise decimals

---

##  BIGINT

### What it is

A **64-bit integer**.

Range:

```
-9 quintillion to +9 quintillion
```

---

### Why BIGINT exists

For **huge numbers**:

* Financial ledgers
* Event counters
* Distributed systems
* Snowflake IDs

---

### Tradeoff

* Takes 8 bytes (double INTEGER)
* Slightly slower

---

##  SMALLINT

### What it is

A **16-bit integer**.

Range:

```
-32,768 to 32,767
```

---

### Why it exists

Memory optimization when values are tiny.

---

### Real-world usage

* Status codes
* Ratings
* Small enums (if ENUM not used)

---

###  Reality check

Most teams **overuse INTEGER** because savings are small.

---

##  DECIMAL / NUMERIC (VERY IMPORTANT)

### What they are

Exact precision numbers.

---

### Why they exist

Because **floating-point numbers lie**.

Example:

```sql
0.1 + 0.2 ≠ 0.3
```

This is unacceptable for:

* Money
* Accounting
* Taxes
* Banking

---

### Example

```sql
price NUMERIC(10,2)
```

---

### Cost

* Slower than INTEGER
* More storage

---

### Rule of thumb

> **Money → NUMERIC**
> **Math/science → FLOAT**

---

##  REAL / DOUBLE PRECISION

### What they are

Floating-point numbers.

* REAL → 32-bit
* DOUBLE → 64-bit

---

### Why they exist

Speed and scientific calculations.

---

### When to use

* Statistics
* Physics
* Machine learning
* Approximate values

---

### Never use for

❌ Money
❌ Accounting

---

##  STRING TYPES

---

###  CHAR(n)

Fixed-length string.

```sql
CHAR(5)
```

---

### Why it exists

Legacy systems.

---

### Why it’s mostly avoided

* Wastes space
* Pads with spaces

---

##  VARCHAR(n)

Variable-length string with limit.

---

### Why it exists

To enforce maximum length.

---

### Example

```sql
email VARCHAR(255)
```

---

###  TEXT (Most used)

Unlimited length.

---

### Why TEXT is preferred

* No real performance penalty
* Simpler
* PostgreSQL handles it efficiently

---

### PostgreSQL truth 

`TEXT` ≈ `VARCHAR` internally

---

##  DATE / TIME TYPES

---

### DATE

Calendar date only.

Used for:

* Birthdays
* Holidays
* Expiry dates

---

### TIME

Time without date.

Used for:

* Store opening hours

---

### TIMESTAMP

Date + time.

```sql
TIMESTAMP WITH TIME ZONE
```

---

### Why timestamps matter

* Logs
* Audits
* Analytics
* Ordering events

---

### INTERVAL

Duration of time.

```sql
INTERVAL '2 days'
```

---

### Real-world usage

* Subscriptions
* Delays
* Expirations

---

##  BOOLEAN

### What it is

TRUE / FALSE / NULL

---

### Why it exists

Flags:

* is_active
* is_verified
* is_deleted

---

### Best practice

Use BOOLEAN instead of:

* 0/1
* Y/N

---

##  BYTEA (Binary Data)

### What it is

Stores raw binary.

---

### Use cases

* Hashes
* Encrypted blobs
* Small files

---

###  Warning

Large files → use object storage, not BYTEA.

---

##  UUID

### What it is

128-bit unique identifier.

---

### Why UUID exists

* Distributed systems
* No central ID generator
* Security (hard to guess)

---

### Tradeoff

* Larger than INTEGER
* Slower indexing

---

##  JSON / JSONB (DETAILED)

### JSON

Stored as text.

---

### JSONB

Stored in binary, indexed.

---

### Why JSONB exists

Because modern apps need:

* Flexible schema
* Semi-structured data
* API payloads

---

### When to use JSONB

* User preferences
* Metadata
* Event payloads

---

### When NOT to use JSONB

* Core relational data
* Frequently joined fields

---

### Indexing JSONB

GIN indexes make JSON fast.

---

##  ARRAYS

### What they are

Multiple values in one column.

---

### Example

```sql
tags TEXT[]
```

---

### Why arrays exist

* Simple lists
* No need for join table

---

### Tradeoff

Harder to index and query.

---

##  ENUM

### What it is

Fixed list of values.

---

### Why ENUM exists

* Data safety
* Readability
* Performance

---

### Example

```sql
status ENUM('pending','paid','cancelled')
```

---

### Downside

Changing ENUM requires migration.

---

##  GEOMETRIC TYPES

Used for:

* Points
* Lines
* Boxes

Mostly used in GIS-related systems.

---

##  NETWORK TYPES

* INET → IP address
* CIDR → Network block
* MACADDR → MAC address

Used in:

* Logs
* Firewalls
* Networking apps

---

##  XML

Stores XML documents.

Used in:

* Legacy enterprise systems
* SOAP APIs

---

##  RANGE TYPES

Stores value ranges.

Example:

```sql
tsrange(start, end)
```

Used for:

* Booking systems
* Scheduling
* Validity periods


---

#   CONSTRAINTS

> **Constraints are the database’s way of enforcing business rules — even if your application has bugs.**

Think of constraints as **guardrails**.
Your app may fail, your API may be bypassed, but **constraints never sleep**.

---

##  PRIMARY KEY

### What it is

A **PRIMARY KEY (PK)** uniquely identifies **each row** in a table.

```sql
id INTEGER PRIMARY KEY
```

---

### Why PRIMARY KEY exists

Because databases must:

* Identify rows uniquely
* Reference rows from other tables
* Index rows efficiently

Without a PK:

* Duplicate rows exist
* Updates become dangerous
* Relationships break

---

### What PostgreSQL enforces

* UNIQUE
* NOT NULL
* Automatically creates an index

---

### Real-world usage

* users.id
* orders.id
* transactions.id

---

### Design rule 💡

> Every table **must** have a primary key
> Even log tables.

---

##  FOREIGN KEY (VERY DETAILED)

### What it is

A **FOREIGN KEY (FK)** enforces a relationship between two tables.

```sql
orders.user_id REFERENCES users(id)
```

---

### Why FOREIGN KEY exists

To prevent **orphan data**.

Without FK:

* Orders can reference non-existent users
* Data becomes inconsistent
* Reports become wrong

---

### Real-world example

```sql
users(id)
orders(user_id)
```

If a user doesn’t exist → order should not exist.

---

### ON DELETE behavior (VERY IMPORTANT)

| Option    | Meaning                    |
| --------- | -------------------------- |
| CASCADE   | Delete child rows          |
| SET NULL  | Keep row, remove reference |
| RESTRICT  | Block deletion             |
| NO ACTION | Same as RESTRICT           |

---

### Why FKs are sometimes avoided (truth)

* Performance concerns
* Bad schema design
* Lazy developers

But in **financial / critical systems**, FKs are mandatory.

---

##  UNIQUE

### What it is

Ensures a column or group of columns has **no duplicates**.

---

### Why UNIQUE exists

Some fields must be unique:

* Email
* Username
* National ID

---

### Example

```sql
UNIQUE(email)
```

---

### Composite UNIQUE

```sql
UNIQUE(user_id, product_id)
```

Used in:

* Order items
* Many-to-many tables

---

##  NOT NULL

### What it is

Disallows NULL values.

---

### Why NOT NULL exists

NULL means:

* Unknown
* Missing
* Not provided

Some data **must exist**.

---

### Real-world usage

* Names
* IDs
* Prices

---

### Important truth 💡

NULL ≠ empty string
NULL ≠ zero

---

## CHECK (VERY DETAILED)

### What it is

A **custom validation rule**.

---

### Why CHECK exists

Because many business rules:

* Are simple
* Should live in the database
* Should not depend on application code

---

### Example

```sql
CHECK (age >= 18)
```

---

### More examples

```sql
CHECK (price > 0)
CHECK (start_date < end_date)
CHECK (status IN ('active','inactive'))
```

---

### Why CHECK is powerful

* Prevents invalid data
* Faster than application checks
* Impossible to bypass accidentally

---

##  DEFAULT (VERY DETAILED)

### What it is

Automatically assigns a value if none is provided.

---

### Why DEFAULT exists

Because many columns:

* Have common values
* Should be consistent
* Should not depend on app logic

---

### Example

```sql
created_at TIMESTAMP DEFAULT NOW()
```

---

### Real-world usage

* created_at
* status = 'active'
* is_deleted = false

---

### Why DEFAULT is better than app code

* Always applied
* Works across all clients
* No duplication of logic

---

##  EXCLUSION

### What it is

Prevents **overlapping values**.

---

### Why it exists

Some data must **not overlap**:

* Room bookings
* Time ranges
* Reservations

---

### Example

Prevent double booking:

```sql
EXCLUDE USING gist (
  room_id WITH =,
  booking_range WITH &&
)
```

---

### Where used

* Scheduling systems
* Hotel bookings
* Resource allocation

---

#  PART 4: INDEXES (VERY IMPORTANT)

> **Indexes are the reason databases are fast.**

Without indexes:

* Every query scans entire table
* Performance dies as data grows

---

##  CREATE INDEX

```sql
CREATE INDEX idx_users_email ON users(email);
```

---

### What an index really is

A **data structure** (not magic):

* Sorted references to rows
* Stored separately from table
* Optimized for search

---

### Tradeoff ⚠️

* Faster reads
* Slower writes
* More disk usage

---

##  INDEX TYPES (DETAILED)

---

###  B-Tree (Default)

Used for:

* =, <, >, BETWEEN
* ORDER BY
* Most queries

✅ 90% of indexes are B-Tree

---

###  Hash

Used only for:

* Equality (`=`)

Rarely used now.

---

###  GIN

Used for:

* JSONB
* Arrays
* Full-text search

Very powerful, heavier.

---

###  GiST

Used for:

* Geometric data
* Ranges
* Full-text

Flexible, slower than B-Tree.

---

###  SP-GiST

Used for:

* Trees
* Prefix searches

Specialized.

---

###  BRIN

Used for:

* Huge tables
* Naturally ordered data

Very small, very fast scans.

---

##  Partial Index

Indexes only **some rows**.

```sql
WHERE active = true
```

---

### Why partial indexes exist

* Smaller
* Faster
* More efficient

---

##  Multi-Column Index

```sql
(user_id, created_at)
```

Order matters!

---

##  Unique Index

Enforces uniqueness + speed.

---

##  Expression Index

Indexes calculated values.

```sql
LOWER(email)
```

---

##  Index Usage & Performance

* Use `EXPLAIN`
* Avoid over-indexing
* Index WHERE & JOIN columns

---
#   AGGREGATE FUNCTIONS

> **Aggregates answer questions, not rows.**

A normal `SELECT` returns **rows**.
Aggregates return **summaries**.

Real life:

* “How many users?”
* “Total revenue?”
* “Average salary per department?”

That’s aggregation.

---

##  COUNT()

### What it is

Counts rows.

```sql
COUNT(*)
COUNT(column)
```

---

### Why it exists

Counting is fundamental:

* Users
* Orders
* Errors
* Logs

---

### Important difference

```sql
COUNT(*)      -- counts rows
COUNT(col)    -- ignores NULLs
```

---

### Real-world usage

* Dashboard metrics
* Pagination totals
* Audits

---

##  SUM()

### What it is

Adds numeric values.

---

### Why it exists

For totals:

* Revenue
* Quantity sold
* Hours worked

---

### Example

```sql
SUM(amount)
```

---

### Rule ⚠️

Only works on numeric types.

---

##  AVG()

### What it is

Average (mean).

---

### Why it exists

To understand trends:

* Average salary
* Average order value
* Average response time

---

### Internal behavior

`AVG = SUM / COUNT`

---

##  MIN() / MAX()

### What they are

Find smallest / largest values.

---

### Why they exist

* Oldest record
* Highest price
* Earliest login

---

### Important note

MIN/MAX can use indexes → very fast.

---

##  GROUP BY (VERY IMPORTANT)

### What it is

Groups rows into buckets.

---

### Why GROUP BY exists

Without it:

* Aggregates apply to whole table only

With it:

* Aggregates per category

---

### Example

```sql
SELECT department, AVG(salary)
FROM employees
GROUP BY department;
```

---

### Mental model

> “Collapse many rows into one row per group”

---

##  HAVING

### What it is

Filters **after aggregation**.

---

### Why HAVING exists

`WHERE` cannot filter aggregates.

---

### Example

```sql
HAVING COUNT(*) > 10
```

---

### Rule

* WHERE → before GROUP BY
* HAVING → after GROUP BY

---

##  STRING_AGG()

### What it is

Combines strings into one.

---

### Example

```sql
STRING_AGG(name, ', ')
```

---

### Real-world usage

* Tags
* Labels
* Reports

---

##  ARRAY_AGG()

### What it is

Returns array of values.

---

### Why it exists

Structured aggregation:

* Lists
* JSON building

---

#  PART 6: SUBQUERIES

> **A query inside another query.**

Used when:

* You need a value computed from data
* Logic is too complex for joins alone

---

##  Scalar Subquery

### What it is

Returns **one value**.

```sql
SELECT name,
       (SELECT AVG(salary) FROM employees)
FROM employees;
```

---

### Why it exists

To inject computed values.

---

##  Row Subquery

Returns one row, multiple columns.

Used in comparisons.

---

##  Table Subquery

Returns a result set.

Used like a virtual table.

---

##  Correlated Subquery (VERY IMPORTANT)

### What it is

Subquery that depends on outer query.

---

### Example

```sql
SELECT *
FROM employees e
WHERE salary >
      (SELECT AVG(salary)
       FROM employees
       WHERE department = e.department);
```

---

### Why it exists

Row-by-row comparison logic.

---

### Performance warning ⚠️

Can be slow if not optimized.

---

##  EXISTS / NOT EXISTS

### What it is

Checks **existence**, not values.

---

### Why EXISTS exists

* Faster
* Stops at first match
* Handles NULLs safely

---

### Example

```sql
WHERE EXISTS (
  SELECT 1 FROM orders WHERE orders.user_id = users.id
)
```

---

##  IN / NOT IN

### What it is

Checks membership.

---

### Danger ⚠️

`NOT IN` + NULL = unexpected results

---

##  ANY / ALL / SOME

### What they are

Advanced comparison operators.

* `> ANY`
* `< ALL`

Used in analytical queries.

---

#  PART 7: SET OPERATIONS

> **Comparing result sets like math sets.**

---

##  UNION

### What it is

Combines results, removes duplicates.

---

### When to use

When combining similar datasets.

---

##  UNION ALL

### What it is

Combines results **without removing duplicates**.

---

### Why it’s important

Much faster than UNION.

---

##  INTERSECT

### What it is

Common rows between queries.

---

### Use case

* Users in both systems
* Matching datasets

---

##  EXCEPT

### What it is

Rows in first query but not second.

---

### Use case

* Find missing data
* Reconciliation


---

#   WINDOW FUNCTIONS (VERY IMPORTANT)

> **Window functions let you calculate values across rows *without collapsing them*.**

This is one of the **most powerful features of PostgreSQL**.

---

## Why window functions exist

Problem:

* `GROUP BY` **collapses rows**
* Sometimes you need:

  * Rankings
  * Running totals
  * Comparisons with previous rows
  * Percentiles

Window functions solve this.

---

## Core Syntax

```sql
function() OVER (
  PARTITION BY ...
  ORDER BY ...
  ROWS / RANGE ...
)
```

---

##  ROW_NUMBER()

### What it is

Assigns a unique sequential number to each row.

---

### Why it exists

For:

* Pagination
* Deduplication
* Ranking without ties

---

### Example

```sql
ROW_NUMBER() OVER (ORDER BY salary DESC)
```

---

##  RANK() vs DENSE_RANK()

### RANK

* Skips numbers on ties

### DENSE_RANK

* No gaps

---

### Why both exist

Different business needs:

* Sports rankings
* Leaderboards
* Sales rankings

---

## NTILE()

### What it is

Divides rows into buckets.

---

### Use case

* Quartiles
* Percentiles
* Performance bands

---

##  LAG() and LEAD()

### What they do

Access previous or next row.

---

### Why they exist

Comparisons:

* Growth
* Changes
* Differences

---

### Example

```sql
salary - LAG(salary)
```

---

##  FIRST_VALUE() / LAST_VALUE()

### What they do

Return first/last value in window.

---

### Use case

* First transaction
* Latest status

---

##  PARTITION BY

### What it does

Splits data into independent windows.

---

### Example

```sql
PARTITION BY department
```

---

##  Window Frames (ROWS vs RANGE)

### ROWS

Exact row count.

### RANGE

Value-based window.

---

### Why frames matter

Controls **how much data is visible**.

---

# STRING FUNCTIONS

> **Strings are messy. SQL helps clean them.**

---

## CONCAT()

Joins strings.

---

## LENGTH()

Counts characters.

---

## UPPER() / LOWER()

Case normalization.

---

## TRIM / LTRIM / RTRIM

Removes whitespace.

---

## SUBSTRING()

Extracts part of string.

---

## REPLACE()

Replace content.

---

## SPLIT_PART()

Split strings by delimiter.

---

## LIKE / ILIKE

Pattern matching.

---

## Regular Expressions

Advanced pattern matching.

Used for:

* Validation
* Parsing
* Cleaning data

---

#   DATE & TIME FUNCTIONS

> **Time is hard. PostgreSQL makes it manageable.**

---

## NOW()

Current timestamp.

---

## CURRENT_DATE / CURRENT_TIME

Self-explanatory.

---

## EXTRACT()

Gets parts of date.

---

## DATE_TRUNC()

Rounds time.

---

## AGE()

Calculates duration.

---

## INTERVAL

Represents duration.

---

## TO_CHAR / TO_DATE

Formatting and parsing.

---

# MATHEMATICAL FUNCTIONS

Used for:

* Analytics
* Calculations
* Random sampling

Includes:

* ABS
* ROUND
* CEIL / FLOOR
* POWER
* SQRT
* RANDOM
* MOD

---

#   CONDITIONAL EXPRESSIONS

> **Decision-making inside SQL.**

---

## CASE WHEN

If-else logic.

---

## COALESCE()

Fallback value.

---

## NULLIF()

Avoid division by zero.

---

## GREATEST / LEAST

Comparisons across columns.
