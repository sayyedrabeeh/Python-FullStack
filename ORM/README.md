 
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
 