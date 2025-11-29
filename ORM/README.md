 
---

## **1. What is Django ORM?**

The **Django ORM** allows you to interact with your database using **Python classes and objects** instead of writing raw SQL. It’s built into Django, so you don’t need extra libraries.

* **Models** represent database tables.
* **QuerySets** represent the results of database queries.

---

## **2. Creating a Model**

A model is a Python class that inherits from `django.db.models.Model`.

Example:

```python
from django.db import models

class User(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    email = models.EmailField(unique=True)

    def __str__(self):
        return self.name
```

Here:

* `CharField`, `IntegerField`, `EmailField` → columns in the database.
* `__str__` → makes the object human-readable in admin or shell.

---

## **3. Creating the Database Table**

After defining the model, run:

```bash
python manage.py makemigrations
python manage.py migrate
```

* `makemigrations` → creates migration files (instructions for the database)
* `migrate` → applies those changes to your database

---

## **4. Basic CRUD Operations**

### **Create**

```python
# Create a new user
user = User(name="Alice", age=25, email="alice@example.com")
user.save()

# Or use create() shortcut
User.objects.create(name="Bob", age=30, email="bob@example.com")
```

### **Read**

```python
# Get all users
users = User.objects.all()

# Filter users
adults = User.objects.filter(age__gte=18)

# Get a single user
alice = User.objects.get(name="Alice")
```

> Django uses **double underscore syntax** for filtering, e.g., `age__gte` means `age >=`.

### **Update**

```python
alice.age = 26
alice.save()

# Or use update() on QuerySet
User.objects.filter(name="Bob").update(age=31)
```

### **Delete**

```python
alice.delete()
```

---

## **5. Advanced Queries**

* **Ordering:**

```python
users = User.objects.order_by('age')  # Ascending
users = User.objects.order_by('-age') # Descending
```

* **Chaining filters:**

```python
users = User.objects.filter(age__gte=18, name__startswith='A')
```

* **Related models (ForeignKey, ManyToMany):**

```python
class Post(models.Model):
    title = models.CharField(max_length=100)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
```

You can access posts from a user with:

```python
user = User.objects.get(name="Alice")
posts = user.post_set.all()
```

---

## **6. Benefits of Django ORM**

* No raw SQL needed.
* Automatically prevents SQL injection.
* Handles relationships, migrations, and querying in a clean Pythonic way.
* Integrates seamlessly with Django admin and forms.

---

 
  This is a powerful feature that lets you **reuse fields and behavior across multiple models**. Django provides three main types of model inheritance. Let’s go through them carefully.
 
---

## **1. Abstract Base Classes**

* Use when you want to **share common fields and methods**, but **don’t want a separate database table** for the base class.
* Base class is declared `abstract = True`.

**Example:**

```python
from django.db import models

class TimestampedModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True

class User(TimestampedModel):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)

class Post(TimestampedModel):
    title = models.CharField(max_length=200)
    content = models.TextField()
```

* `TimestampedModel` is **abstract**, so no table is created for it.
* `User` and `Post` **inherit fields** `created_at` and `updated_at`.

---

## **2. Multi-Table Inheritance**

* Use when you want **each model to have its own database table**.
* Django automatically creates a **OneToOneField** between the child and parent tables.

**Example:**

```python
class Person(models.Model):
    name = models.CharField(max_length=100)

class Student(Person):
    school = models.CharField(max_length=100)
```

* `Person` table has `id` and `name`.
* `Student` table has `id`, `school`, and a **link to Person** via a OneToOneField.
* Querying `Student.objects.all()` gives you Student instances, but you can also access `student.person.name`.

---

## **3. Proxy Models**

* Use when you want **to change Python behavior** (methods, ordering, etc.) **without changing the database schema**.
* No new table is created; it uses the parent table.

**Example:**

```python
class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()

class ActiveUser(User):
    class Meta:
        proxy = True
        ordering = ['name']

    def say_hello(self):
        return f"Hello, {self.name}!"
```

* `ActiveUser` uses the **same table as `User`**.
* You can define **custom methods or default ordering**.

---

### **Summary Table**

| Inheritance Type        | Table Created? | Use Case                                               |
| ----------------------- | -------------- | ------------------------------------------------------ |
| Abstract Base Class     | No             | Share common fields/methods without extra table        |
| Multi-Table Inheritance | Yes            | Each model gets its own table; useful for polymorphism |
| Proxy Model             | No             | Change Python behavior, ordering, or add methods       |

---

### **Tip**

* **Abstract base classes** are most common for shared fields like timestamps or common metadata.
* **Multi-table inheritance** is heavier (extra JOINs in queries), so use it only when you need the parent table.
* **Proxy models** are lightweight, perfect for custom querysets or methods without schema changes.

---
---

##  Setup

Assume we have a simple model in `models.py`:

```python
from django.db import models

class Author(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()

class Book(models.Model):
    title = models.CharField(max_length=200)
    published_date = models.DateField()
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
```

Now open your Django shell:

```bash
python manage.py shell
```

Then import your models:

```python
from myapp.models import Author, Book
```

---

##  ORM Questions and Answers

### 1. **Create new records**

**Question:** How do you create a new author in Django ORM?

**Answer:**

```python
author = Author.objects.create(name="J.K. Rowling", age=58)
```

 *This saves the author directly to the database.*

---

### 2. **Retrieve all records**

**Question:** How do you get all authors?

**Answer:**

```python
authors = Author.objects.all()
print(authors)
```

---

### 3. **Filter records**

**Question:** How do you get all authors older than 40?

**Answer:**

```python
authors = Author.objects.filter(age__gt=40)
```

 `__gt` means “greater than”.
Other options include:

* `__lt` → less than
* `__gte` → greater than or equal
* `__icontains` → case-insensitive substring search

---

### 4. **Get a single object**

**Question:** How do you get one author named “J.K. Rowling”?

**Answer:**

```python
author = Author.objects.get(name="J.K. Rowling")
```

 If no match or multiple matches are found, Django raises an error.

---

### 5. **Update a record**

**Question:** How do you update an author’s age?

**Answer:**

```python
author = Author.objects.get(name="J.K. Rowling")
author.age = 59
author.save()
```

 Always call `.save()` to commit changes.

---

### 6. **Delete a record**

**Question:** How do you delete an author?

**Answer:**

```python
author = Author.objects.get(name="J.K. Rowling")
author.delete()
```

---

### 7. **Query related objects**

**Question:** How do you get all books written by “J.K. Rowling”?

**Answer:**

```python
author = Author.objects.get(name="J.K. Rowling")
books = Book.objects.filter(author=author)
```

Or shorter:

```python
books = author.book_set.all()
```

 Django automatically creates a reverse relation `book_set`.

---

### 8. **Ordering results**

**Question:** How do you get all authors ordered by name (A–Z)?

**Answer:**

```python
authors = Author.objects.order_by('name')
```

Descending order:

```python
authors = Author.objects.order_by('-name')
```

---

### 9. **Count records**

**Question:** How many authors are there?

**Answer:**

```python
Author.objects.count()
```

---

### 10. **Get distinct values**

**Question:** How do you get all unique author ages?

**Answer:**

```python
Author.objects.values_list('age', flat=True).distinct()
```

---

### 11. **Filter using related model fields**

**Question:** How do you get all books where the author is older than 50?

**Answer:**

```python
books = Book.objects.filter(author__age__gt=50)
```

 Use double underscores (`__`) to query across relationships.

---

### 12. **Aggregation (Sum, Avg, etc.)**

**Question:** How do you get the average age of authors?

**Answer:**

```python
from django.db.models import Avg
Author.objects.aggregate(Avg('age'))
```

Output example:

```python
{'age__avg': 47.3}
```

---

### 13. **Check if an object exists**

**Question:** How do you check if an author named “George Orwell” exists?

**Answer:**

```python
Author.objects.filter(name="George Orwell").exists()
```

Returns `True` or `False`.

---

### 14. **Limit results**

**Question:** How do you get only the first 3 authors?

**Answer:**

```python
Author.objects.all()[:3]
```

---

### 15. **Exclude certain records**

**Question:** How do you get all authors except those younger than 30?

**Answer:**

```python
Author.objects.exclude(age__lt=30)
```

---
 

 

To **open the Django shell using CMD (Command Prompt)**, follow these simple steps 

---

##  1. **Open your Command Prompt**

* Press **Windows + R**, type `cmd`, and hit **Enter**
  or
* Open your project folder in **VS Code / Terminal** and use the terminal window.

---

##  2. **Navigate to your Django project folder**

Use the `cd` command to go to the folder where your **`manage.py`** file is located.

Example:

```bash
cd path\to\your\project
```

For example:

```bash
cd C:\Users\YourName\Desktop\myproject
```

 You should now see `manage.py` if you list files using:

```bash
dir
```

---

##  3. **Activate your virtual environment (if you’re using one)**

If you created a virtual environment (recommended), activate it:

### On Windows:

```bash
venv\Scripts\activate
```

You should see something like:

```
(venv) C:\Users\YourName\Desktop\myproject>
```

---

##  4. **Run the Django shell**

Now run:

```bash
python manage.py shell
```

You should see something like this:

```
Python 3.12.0 (tags/v3.12.0)
Type "help", "copyright", "credits" or "license" for more information.
(InteractiveConsole)
>>>
```

---

##  5. **Use your models inside the shell**

Once inside, you can import and use your models:

```python
from myapp.models import Author, Book
Author.objects.all()
```

---

##  6. **Exit the shell**

To exit the shell, type:

```python
exit()
```

or press **Ctrl + Z**, then **Enter**.

---

###  Summary

| Step | Command                  | Description                  |
| ---- | ------------------------ | ---------------------------- |
| 1    | `cd path\to\project`     | Go to project directory      |
| 2    | `venv\Scripts\activate`  | Activate virtual environment |
| 3    | `python manage.py shell` | Open Django shell            |
| 4    | `exit()`                 | Close shell                  |

---
 
 

---

## **Django ORM: Bulk Operations**

Bulk operations allow you to perform database actions on **multiple records efficiently** in a single query, which is much faster than looping through records individually.

---

### **1. `bulk_create()` - Insert Multiple Records at Once**

Use `bulk_create()` when you need to create many objects in one database query instead of calling `save()` multiple times.

**Example:**

```python
from myapp.models import Author

# Creating multiple authors
authors = [
    Author(name="George Orwell", age=46),
    Author(name="Jane Austen", age=41),
    Author(name="Mark Twain", age=74),
    Author(name="Leo Tolstoy", age=82),
]

Author.objects.bulk_create(authors)
```

 **Benefits:**
- Much faster than creating objects one by one
- Reduces database round trips

 **Limitations:**
- Does **not** call the `save()` method
- Does **not** trigger signals like `pre_save` or `post_save`
- Primary keys (IDs) are not set on the objects by default (unless you pass `ignore_conflicts=False`)

**Getting IDs after bulk_create (Django 4.0+):**

```python
authors = Author.objects.bulk_create([
    Author(name="Emily Dickinson", age=55),
    Author(name="Walt Whitman", age=72)
])

for author in authors:
    print(author.id)  # IDs are now available
```

---

### **2. `bulk_update()` - Update Multiple Records Efficiently**

Use `bulk_update()` to update specific fields on multiple objects in one query.

**Example:**

```python
authors = Author.objects.filter(age__lt=50)

# Modify objects in memory
for author in authors:
    author.age += 1

# Update all at once
Author.objects.bulk_update(authors, ['age'])
```

 **Benefits:**
- Updates multiple records in a single query
- Faster than calling `save()` on each object

**Update multiple fields:**

```python
authors = Author.objects.all()[:3]

for author in authors:
    author.age += 5
    author.name = author.name.upper()

Author.objects.bulk_update(authors, ['age', 'name'])
```

 **Limitations:**
- Does **not** trigger `save()` or signals
- You must specify which fields to update

---

### **3. `get_or_create()` - Get if Exists, Create if Not**

Use `get_or_create()` when you want to retrieve an object if it exists, or create it if it doesn't.

**Example:**

```python
author, created = Author.objects.get_or_create(
    name="J.K. Rowling",
    defaults={'age': 58}
)

if created:
    print("New author created!")
else:
    print("Author already exists!")
```

**How it works:**
- Django searches for an author with `name="J.K. Rowling"`
- If found, it returns the existing author
- If not found, it creates a new author with `age=58`

**Returns:**
- A tuple: `(object, created)`
  - `object` → The author instance
  - `created` → `True` if new, `False` if existing

**Another example:**

```python
book, created = Book.objects.get_or_create(
    title="Harry Potter",
    defaults={
        'published_date': '1997-06-26',
        'author': author
    }
)
```

---

### **4. `update_or_create()` - Update if Exists, Create if Not**

Use `update_or_create()` when you want to update an existing record or create it if it doesn't exist.

**Example:**

```python
author, created = Author.objects.update_or_create(
    name="J.K. Rowling",
    defaults={'age': 59}
)

if created:
    print("New author created with age 59")
else:
    print("Author updated to age 59")
```

**How it works:**
- Django searches for an author with `name="J.K. Rowling"`
- If found, it **updates** the `age` to 59
- If not found, it **creates** a new author with `name="J.K. Rowling"` and `age=59`

**More complex example:**

```python
author, created = Author.objects.update_or_create(
    name="George Orwell",
    defaults={
        'age': 47,
        'bio': 'British novelist and essayist'
    }
)
```

---

### **5. Comparison Table**

| Method               | Purpose                                   | Creates? | Updates? | Returns            |
| -------------------- | ----------------------------------------- | -------- | -------- | ------------------ |
| `bulk_create()`      | Insert multiple records                   | ✅        | ❌        | List of objects    |
| `bulk_update()`      | Update multiple records                   | ❌        | ✅        | Number of rows     |
| `get_or_create()`    | Get existing or create new                | ✅        | ❌        | (object, created)  |
| `update_or_create()` | Update existing or create new             | ✅        | ✅        | (object, created)  |

---

### **6. Real-World Use Cases**

#### **Use Case 1: Importing CSV Data**

```python
import csv

authors = []
with open('authors.csv', 'r') as file:
    reader = csv.DictReader(file)
    for row in reader:
        authors.append(Author(name=row['name'], age=int(row['age'])))

Author.objects.bulk_create(authors, batch_size=1000)
```

#### **Use Case 2: Bulk Price Update**

```python
products = Product.objects.filter(category="Electronics")

for product in products:
    product.price *= 1.10  # 10% price increase

Product.objects.bulk_update(products, ['price'])
```

#### **Use Case 3: User Registration**

```python
user, created = User.objects.get_or_create(
    email="user@example.com",
    defaults={
        'username': 'johndoe',
        'first_name': 'John',
        'last_name': 'Doe'
    }
)
```

#### **Use Case 4: Sync External API Data**

```python
for api_data in external_api.get_products():
    product, created = Product.objects.update_or_create(
        sku=api_data['sku'],
        defaults={
            'name': api_data['name'],
            'price': api_data['price'],
            'stock': api_data['stock']
        }
    )
```

---

### **7. Performance Tips**

 **Use `batch_size` with `bulk_create()`:**

```python
Author.objects.bulk_create(authors, batch_size=500)
```
This splits large inserts into smaller batches.

 **Use `ignore_conflicts=True` to skip duplicates:**

```python
Author.objects.bulk_create(authors, ignore_conflicts=True)
```

 **Always specify fields in `bulk_update()`:**

```python
Author.objects.bulk_update(authors, ['age', 'name'])
```

---

### **Summary**

- Use **`bulk_create()`** for fast insertion of multiple records
- Use **`bulk_update()`** for efficient updates on multiple records
- Use **`get_or_create()`** when you need to retrieve or create a single record
- Use **`update_or_create()`** when you need to update or create a single record

These methods are essential for **performance optimization** in Django applications! 

---

 
 
## **Django ORM: Complex Queries**

Complex queries allow you to build sophisticated database queries using Django's ORM without 
writing raw SQL. These tools give you the power to handle advanced filtering, calculations, and 
nested queries.

---

### **1. Q Objects - Complex Queries with OR, AND, NOT Logic**

**Q objects** allow you to build complex queries with `OR`, `AND`, and `NOT` conditions. By default, Django's `filter()` uses `AND` logic, but Q objects give you more flexibility.

#### **Basic OR Query**

**Problem:** Get authors who are either older than 60 OR named "George Orwell"

**Without Q objects (not possible with simple filter):**
```python
# Can't do this easily with filter() alone
```

**With Q objects:**
```python
from django.db.models import Q

authors = Author.objects.filter(Q(age__gt=60) | Q(name="George Orwell"))
```

**Operators:**
- `|` → OR
- `&` → AND
- `~` → NOT

---

#### **AND Query (Explicit)**

```python
authors = Author.objects.filter(Q(age__gt=30) & Q(age__lt=50))
```

This is equivalent to:
```python
authors = Author.objects.filter(age__gt=30, age__lt=50)
```

---

#### **NOT Query**

**Get all authors who are NOT named "George Orwell":**

```python
authors = Author.objects.filter(~Q(name="George Orwell"))
```

---

#### **Complex Combined Queries**

**Get authors who are either (older than 50) OR (named "Jane Austen" AND younger than 45):**

```python
authors = Author.objects.filter(
    Q(age__gt=50) | (Q(name="Jane Austen") & Q(age__lt=45))
)
```

---

#### **Real-World Example: Search Functionality**

```python
search_term = "Orwell"

results = Author.objects.filter(
    Q(name__icontains=search_term) | 
    Q(bio__icontains=search_term) |
    Q(email__icontains=search_term)
)
```

---

#### **Dynamic Q Objects**

Build queries dynamically based on user input:

```python
from django.db.models import Q

def search_authors(name=None, min_age=None, max_age=None):
    query = Q()
    
    if name:
        query &= Q(name__icontains=name)
    if min_age:
        query &= Q(age__gte=min_age)
    if max_age:
        query &= Q(age__lte=max_age)
    
    return Author.objects.filter(query)

# Usage
authors = search_authors(name="George", min_age=40)
```

---

### **2. F Expressions - Reference Model Fields in Queries**

**F expressions** allow you to reference model field values directly in the database, enabling field-to-field comparisons and atomic operations.

#### **Basic Field Comparison**

**Problem:** Find books where the price is greater than the discount price

```python
from django.db.models import F

books = Book.objects.filter(price__gt=F('discount_price'))
```

---

#### **Field Arithmetic**

**Increase all author ages by 1:**

```python
Author.objects.update(age=F('age') + 1)
```

**Benefits:**
- Atomic operation (no race conditions)
- Happens directly in the database
- Much faster than loading objects into memory

**More examples:**

```python
# Decrease all product prices by 10%
Product.objects.update(price=F('price') * 0.9)

# Double all stock quantities
Product.objects.update(stock=F('stock') * 2)
```

---

#### **Comparing Two Fields**

**Find products where stock is less than minimum stock level:**

```python
low_stock = Product.objects.filter(stock__lt=F('min_stock_level'))
```

**Find authors where age is greater than years of experience:**

```python
authors = Author.objects.filter(age__gt=F('years_of_experience'))
```

---

#### **F Expressions with Relationships**

**Find books where the author's age is greater than 50:**

```python
books = Book.objects.filter(author__age__gt=50)
```

**Using F expression to compare related fields:**

```python
books = Book.objects.filter(copies_sold__gt=F('author__total_books_written'))
```

---

#### **Annotations with F Expressions**

```python
from django.db.models import F

books = Book.objects.annotate(
    profit=F('price') - F('cost')
).filter(profit__gt=10)
```

---

### **3. Subqueries - Nested Queries**

**Subqueries** allow you to use the result of one query inside another query, enabling complex nested operations.

#### **Basic Subquery**

**Problem:** Find all authors who have written at least one book published after 2020

```python
from django.db.models import OuterRef, Subquery

# Subquery to get recent books
recent_books = Book.objects.filter(
    author=OuterRef('pk'),
    published_date__year__gt=2020
)

# Main query
authors = Author.objects.filter(
    id__in=Subquery(recent_books.values('author'))
)
```

---

#### **Subquery with Annotation**

**Get the latest book's title for each author:**

```python
from django.db.models import OuterRef, Subquery

latest_book = Book.objects.filter(
    author=OuterRef('pk')
).order_by('-published_date')

authors = Author.objects.annotate(
    latest_book_title=Subquery(latest_book.values('title')[:1])
)

for author in authors:
    print(f"{author.name}: {author.latest_book_title}")
```

---

#### **Subquery for Filtering**

**Find authors whose latest book was published after 2020:**

```python
latest_book_date = Book.objects.filter(
    author=OuterRef('pk')
).order_by('-published_date').values('published_date')[:1]

authors = Author.objects.annotate(
    latest_date=Subquery(latest_book_date)
).filter(latest_date__year__gt=2020)
```

---

#### **Exists Subquery**

**Find authors who have at least one book:**

```python
from django.db.models import Exists, OuterRef

has_books = Book.objects.filter(author=OuterRef('pk'))

authors = Author.objects.annotate(
    has_books=Exists(has_books)
).filter(has_books=True)
```

---

#### **Complex Subquery Example**

**Get authors with their highest-priced book:**

```python
from django.db.models import OuterRef, Subquery, Max

max_price_book = Book.objects.filter(
    author=OuterRef('pk')
).order_by('-price').values('title')[:1]

authors = Author.objects.annotate(
    most_expensive_book=Subquery(max_price_book)
)
```

---

### **4. Annotations - Add Calculated Fields to QuerySets**

**Annotations** allow you to add calculated or aggregated fields to each object in a queryset without modifying the database schema.

#### **Basic Annotation with Count**

**Count the number of books for each author:**

```python
from django.db.models import Count

authors = Author.objects.annotate(book_count=Count('book'))

for author in authors:
    print(f"{author.name} has written {author.book_count} books")
```

---

#### **Annotation with Sum**

**Calculate total sales for each author:**

```python
from django.db.models import Sum

authors = Author.objects.annotate(
    total_sales=Sum('book__copies_sold')
)

for author in authors:
    print(f"{author.name}: {author.total_sales} total copies sold")
```

---

#### **Annotation with Avg, Min, Max**

```python
from django.db.models import Avg, Min, Max

authors = Author.objects.annotate(
    avg_price=Avg('book__price'),
    min_price=Min('book__price'),
    max_price=Max('book__price')
)
```

---

#### **Conditional Annotations with Case/When**

**Count only books published after 2020:**

```python
from django.db.models import Count, Q

authors = Author.objects.annotate(
    recent_books=Count('book', filter=Q(book__published_date__year__gt=2020))
)
```

**Using Case/When for complex logic:**

```python
from django.db.models import Case, When, Value, CharField

authors = Author.objects.annotate(
    generation=Case(
        When(age__lt=30, then=Value('Young')),
        When(age__lt=50, then=Value('Middle-aged')),
        default=Value('Senior'),
        output_field=CharField()
    )
)

for author in authors:
    print(f"{author.name} is {author.generation}")
```

---

#### **Annotations with F Expressions**

**Calculate profit margin for books:**

```python
from django.db.models import F, ExpressionWrapper, DecimalField

books = Book.objects.annotate(
    profit=ExpressionWrapper(
        F('price') - F('cost'),
        output_field=DecimalField()
    ),
    profit_margin=ExpressionWrapper(
        (F('price') - F('cost')) / F('price') * 100,
        output_field=DecimalField()
    )
)
```

---

#### **Chaining Annotations**

```python
authors = Author.objects.annotate(
    book_count=Count('book')
).annotate(
    avg_price=Avg('book__price')
).filter(book_count__gt=2)
```

---

#### **Annotation vs Aggregate**

**Key Difference:**
- **`annotate()`** → Adds a calculated field to **each object** in the queryset
- **`aggregate()`** → Returns a **single value** for the entire queryset

**Example:**

```python
# Annotate: Each author gets their own book count
authors = Author.objects.annotate(book_count=Count('book'))
# Result: [Author(name="Jane", book_count=5), Author(name="John", book_count=3)]

# Aggregate: One value for all authors
total_books = Author.objects.aggregate(total=Count('book'))
# Result: {'total': 8}
```

---

### **5. Combining Everything: Real-World Example**

**Find active authors (have books) with their total sales, but only if they've sold more than 1000 copies:**

```python
from django.db.models import Q, F, Count, Sum, OuterRef, Subquery, Exists

# Check if author has books
has_books = Book.objects.filter(author=OuterRef('pk'))

authors = Author.objects.annotate(
    # Add book count
    book_count=Count('book'),
    # Add total sales
    total_sales=Sum('book__copies_sold')
).filter(
    # Complex conditions with Q objects
    Q(total_sales__gt=1000) & Exists(has_books)
).order_by('-total_sales')

for author in authors:
    print(f"{author.name}: {author.book_count} books, {author.total_sales} sales")
```

---

### **6. Comparison Table**

| Feature       | Purpose                                    | Example                                      |
| ------------- | ------------------------------------------ | -------------------------------------------- |
| **Q objects** | Complex filtering (OR, AND, NOT)           | `Q(age__gt=50) \| Q(name="Jane")`             |
| **F expressions** | Reference field values in queries      | `F('price') - F('cost')`                     |
| **Subqueries** | Nested queries                            | `Subquery(Book.objects.filter(...))`         |
| **Annotations** | Add calculated fields to querysets       | `annotate(book_count=Count('book'))`         |

---

### **7. Performance Tips**

 **Use Q objects for complex OR conditions** instead of multiple queries  
 **Use F expressions for atomic updates** to avoid race conditions  
 **Use annotations to reduce database queries** instead of Python loops  
 **Use Exists() for checking relationships** instead of Count()  

---

### **Summary**

- **Q objects** let you build complex filters with OR, AND, NOT logic
- **F expressions** allow field-to-field comparisons and atomic operations
- **Subqueries** enable nested queries for advanced filtering
- **Annotations** add calculated fields without changing your database schema

These tools are essential for building **efficient, powerful queries** in Django! 

---