 
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
