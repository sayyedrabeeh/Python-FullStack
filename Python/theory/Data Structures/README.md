# Data Structures

## Topics 

* String (methods, immutability)
* List (mutable, slicing, methods)
* List Comprehension
* Tuples, Nested Tuples
* Set (union, intersection, uniqueness)
* Dictionary (key-value pairs)
* Unpacking, Destructuring
* Collections module (namedtuple, defaultdict, Counter)

#  String (methods, immutability)


---

##  What is a String?

> A **string** is a **sequence of characters**, surrounded by quotes.

###  Examples:

```python
name = "Rabeeh"
greeting = 'Hello'
multiline = """This
is
multi-line"""
```

---

##  Strings Are **Immutable**

> ❗ In Python, **you cannot change a string after it’s created**.

###  Example:

```python
s = "hello"
s[0] = "H"  # ❌ Error! Strings are immutable
```

 Instead, you create a new string:

```python
s = "hello"
s = "H" + s[1:]  # ➡️ 'Hello'
```

###  Why immutability matters:

* Safer: Avoids accidental changes
* Efficient: Used as keys in dictionaries
* Faster for string comparisons

---

##  Common String Methods

Here’s a table of **commonly used string methods** you’ll use daily:

| Method           | Purpose                            | Example                       | Output            |
| ---------------- | ---------------------------------- | ----------------------------- | ----------------- |
| `.lower()`       | Convert to lowercase               | `"HeLLo".lower()`             | `"hello"`         |
| `.upper()`       | Convert to uppercase               | `"abc".upper()`               | `"ABC"`           |
| `.capitalize()`  | First letter uppercase             | `"python".capitalize()`       | `"Python"`        |
| `.title()`       | Title case                         | `"hello world".title()`       | `"Hello World"`   |
| `.strip()`       | Remove leading/trailing spaces     | `"  hi  ".strip()`            | `"hi"`            |
| `.replace(a, b)` | Replace a with b                   | `"hi!".replace("!", "?")`     | `"hi?"`           |
| `.find()`        | Find index of substring            | `"hello".find("l")`           | `2`               |
| `.count()`       | Count substring                    | `"banana".count("a")`         | `3`               |
| `.startswith()`  | Check start                        | `"file.txt".startswith("f")`  | `True`            |
| `.endswith()`    | Check end                          | `"file.txt".endswith(".txt")` | `True`            |
| `.split()`       | Split into list (by space default) | `"a b c".split()`             | `['a', 'b', 'c']` |
| `.join()`        | Join list into string              | `" ".join(['a','b'])`         | `"a b"`           |

---

##  Indexing & Slicing

You can access characters like this:

```python
text = "Python"
print(text[0])    # 'P'
print(text[-1])   # 'n'
print(text[1:4])  # 'yth'
```

---

##  Useful String Operations

```python
# Concatenation
name = "Sayyed"
msg = "Hello, " + name

# Repetition
echo = "Hi! " * 3  # ➡️ "Hi! Hi! Hi! "

# f-strings (Python 3.6+)
age = 25
print(f"I am {age} years old")  # ➡️ "I am 25 years old"
```

---

## 📌 Real Use Cases

| Use Case               | Example                                 |
| ---------------------- | --------------------------------------- |
| Clean user input       | `.strip()`, `.lower()`, `.capitalize()` |
| Validate file types    | `.endswith(".png")`                     |
| Build dynamic messages | `f-strings`, `.join()`                  |
| Process CSVs or text   | `.split(",")`, `.replace()`             |

---

## ❗ Common Mistakes

| Mistake                              | Fix                                 |
| ------------------------------------ | ----------------------------------- |
| Trying to change characters          | Strings are immutable → use slicing |
| Forgetting `()` on methods           | Use `s.lower()` not `s.lower`       |
| Using `split()` and expecting string | `.split()` returns a **list**       |

---

## ✅ Summary

| Feature          | Notes                                  |
| ---------------- | -------------------------------------- |
| Immutable        | You can’t modify in place              |
| Powerful methods | Clean, modify, inspect, format         |
| f-strings        | Best way to inject variables into text |
| Slicing          | Grab parts of the string               |

---

# List (mutable, slicing, methods)

 
---

##  What is a List?

> A **list** is an **ordered collection** that can store **any number of items**, of any type — including duplicates.

###  Syntax:

```python
my_list = [1, 2, 3, "hello", True]
```

---

##  Lists Are **Mutable**

> You can **change**, **add**, or **remove** items **after** creating the list.

```python
my_list = [1, 2, 3]
my_list[0] = 100
print(my_list)  # ➡️ [100, 2, 3]
```

Unlike **strings or tuples**, lists are **mutable**.

---

##  Slicing a List

> You can access **parts of a list** using **indexing and slicing**.

```python
nums = [10, 20, 30, 40, 50]

print(nums[0])     # 10
print(nums[-1])    # 50
print(nums[1:4])   # [20, 30, 40]
print(nums[:3])    # [10, 20, 30]
print(nums[::2])   # [10, 30, 50] (step = 2)
```

---

## 🛠 Common List Methods

Here's a list of **most commonly used list methods** with examples:

| Method           | Description                            | Example             | Result              |
| ---------------- | -------------------------------------- | ------------------- | ------------------- |
| `.append(x)`     | Add item to end                        | `lst.append(6)`     | `[1, 2, ..., 6]`    |
| `.insert(i, x)`  | Insert at index                        | `lst.insert(2, 99)` | Adds 99 at index 2  |
| `.extend([...])` | Add all elements from another iterable | `lst.extend([7,8])` | `[1, 2, ..., 7, 8]` |
| `.remove(x)`     | Remove first match of item             | `lst.remove(3)`     | Removes first 3     |
| `.pop()`         | Remove & return last item              | `item = lst.pop()`  |                     |
| `.pop(i)`        | Remove & return item at index i        | `lst.pop(2)`        |                     |
| `.clear()`       | Remove all items                       | `lst.clear()`       | `[]`                |
| `.index(x)`      | First index of x                       | `lst.index(5)`      |                     |
| `.count(x)`      | Count occurrences of x                 | `lst.count(2)`      |                     |
| `.sort()`        | Sort in place (ascending)              | `lst.sort()`        | `[1, 2, 3, ...]`    |
| `.reverse()`     | Reverse the list **in place**          | `lst.reverse()`     |                     |
| `sorted(lst)`    | Return new sorted list                 | `sorted(lst)`       |                     |

---

## ✅ Example

```python
fruits = ["apple", "banana", "cherry"]

fruits.append("mango")        # ['apple', 'banana', 'cherry', 'mango']
fruits.insert(1, "grape")     # ['apple', 'grape', 'banana', 'cherry', 'mango']
fruits.remove("banana")       # ['apple', 'grape', 'cherry', 'mango']
print(fruits[1:3])            # ['grape', 'cherry']
```

---

##  Real-Life Analogy

> Think of a list like a **shopping list** 🛒:

* You can add, remove, check items
* Items are ordered
* You can have duplicates (e.g., 2 milk bottles)

---

## ❗ Common Mistakes

| Mistake                                | Fix                                 |
| -------------------------------------- | ----------------------------------- |
| `list1 = list2` (linked)               | Use `list1 = list2.copy()` or `[:]` |
| Using `.remove()` on non-existing item | Check if item is in list first      |
| Sorting list with mixed types          | Avoid mixing strings and ints       |

---

## ✅ Summary Table

| Feature    | Description                             |
| ---------- | --------------------------------------- |
| Ordered    | Yes (keeps order of elements)           |
| Mutable    | ✅ Yes                                   |
| Duplicates | ✅ Allowed                               |
| Indexing   | ✅ Yes (`list[0]`, `list[-1]`)           |
| Slicing    | ✅ Yes (`list[1:4]`, `list[::-1]`)       |
| Methods    | `append`, `pop`, `sort`, `insert`, etc. |

---
 
# List Comprehension

  **List Comprehension** — a super powerful feature in Python that makes your code **shorter**, **cleaner**, and **faster**.

---

##   What is List Comprehension?

> List comprehension is a **compact way** to create a new list by performing an operation or filtering on an existing iterable (like a list, string, or range).

---

###   Basic Syntax:

```python
new_list = [expression for item in iterable]
```

* `expression`: What you want to do with each item
* `item`: The variable that takes values from the iterable
* `iterable`: The source (e.g., list, range, string)

---

###   Example 1: Square of numbers

```python
squares = [x**2 for x in range(5)]
print(squares)  #   [0, 1, 4, 9, 16]
```

This is the same as:

```python
squares = []
for x in range(5):
    squares.append(x**2)
```

---

### ✅ With `if` condition

```python
even = [x for x in range(10) if x % 2 == 0]
print(even)  # ➡️ [0, 2, 4, 6, 8]
```

---

### ✅ With `if...else` (inline condition)

```python
labels = ["even" if x % 2 == 0 else "odd" for x in range(5)]
print(labels)  # ➡️ ['even', 'odd', 'even', 'odd', 'even']
```

---

##   Real-World Examples

### 🔹 Remove vowels from a string:

```python
text = "hello world"
no_vowels = [char for char in text if char not in "aeiou"]
print("".join(no_vowels))  # ➡️ hll wrld
```

---

### 🔹 Flatten a 2D list:

```python
matrix = [[1, 2], [3, 4], [5, 6]]
flat = [num for row in matrix for num in row]
print(flat)  # ➡️ [1, 2, 3, 4, 5, 6]
```

---

## ⚠️ When **not** to use it

Avoid when:

* The logic is too complex (deep nesting, too many conditions)
* Readability becomes worse

> ✅ Rule: Use list comprehension when you can read it **out loud in one line**.

---

##   Summary Table

| Syntax Type               | Example                                |
| ------------------------- | -------------------------------------- |
| Basic                     | `[x for x in iterable]`                |
| With condition            | `[x for x in iterable if condition]`   |
| With `if-else` expression | `[x if cond else y for x in iterable]` |
| Nested loops              | `[x for row in matrix for x in row]`   |

---
 
# Tuples, Nested Tuples

  **tuples** and **nested tuples** in Python. These are powerful and lightweight alternatives to lists when you need **fixed, ordered data**.

---

##   What is a Tuple?

> A **tuple** is an **ordered**, **immutable** collection of elements.

###   Syntax:

```python
my_tuple = (1, 2, 3)
```

* Ordered → elements keep their position
* Immutable → can't change after creation
* Can contain **mixed data types** (`int`, `str`, `list`, etc.)

---

## 🔹 Creating Tuples

```python
t1 = (1, 2, 3)
t2 = ("a", True, 5.6)
```

### ⚠️ Single-element tuple:

```python
t = (5)       # ❌ Not a tuple (just an int)
t = (5,)      # ✅ This is a tuple
```

---

## ✅ Why Use Tuples?

* Faster than lists
* Use less memory
* Can be used as **keys** in dictionaries (lists can't)
* Ideal for **fixed data** (e.g., coordinates, RGB colors)

---

## 🛠 Tuple Operations

| Operation         | Example        | Result                   |
| ----------------- | -------------- | ------------------------ |
| Indexing          | `t[1]`         | Access element           |
| Slicing           | `t[1:3]`       | Get sub-tuple            |
| Length            | `len(t)`       | Number of elements       |
| Count occurrences | `t.count(2)`   | How many times 2 appears |
| Find index        | `t.index("a")` | Index of first match     |
| Concatenation     | `t1 + t2`      | Combine tuples           |
| Repetition        | `t * 2`        | Repeat elements          |

---

##   Tuples Are Immutable

You **can't** change or delete elements.

```python
t = (1, 2, 3)
t[0] = 100    # ❌ Error
del t[1]      # ❌ Error
```

---

## 🧩 Nested Tuples

> A **nested tuple** is a tuple that contains **another tuple (or more)**.

### 🧪 Example:

```python
nested = (1, 2, (3, 4, (5, 6)))
```

* Accessing elements:

```python
print(nested[2])        # (3, 4, (5, 6))
print(nested[2][2])     # (5, 6)
print(nested[2][2][1])  # 6
```

---

## 🔁 Tuple Unpacking

You can extract values directly:

```python
person = ("Rabeeh", 22)
name, age = person
print(name)  # Rabeeh
print(age)   # 22
```

---

## ✅ Summary Table

| Feature          | Description          |
| ---------------- | -------------------- |
| Ordered          | ✅ Yes                |
| Mutable          | ❌ No (immutable)     |
| Indexing/Slicing | ✅ Yes                |
| Mixed Types      | ✅ Allowed            |
| Nesting          | ✅ Supported          |
| Methods          | `count()`, `index()` |

---

## 🧠 Real-Life Examples

| Use Case                             | Tuple Example           |
| ------------------------------------ | ----------------------- |
| Coordinates                          | `(latitude, longitude)` |
| RGB color                            | `(255, 100, 50)`        |
| Return multiple values from function | `return (name, age)`    |

---
 

 #  Set (union, intersection, uniqueness)

 **Sets in Python** — an extremely useful and fast data type for **handling unique items**, performing **mathematical operations** like **union**, **intersection**, and more.

---

##   What is a Set?

> A **set** is an **unordered**, **mutable**, **collection of unique elements** in Python.

###   Syntax:

```python
my_set = {1, 2, 3}
```

---

##   Key Properties

| Property      | Value                       |
| ------------- | --------------------------- |
| **Unordered** | No fixed position/index     |
| **Unique**    | No duplicates allowed       |
| **Mutable**   | You can add/remove elements |
| **Unindexed** | You cannot access via index |

---

##   Why Use Sets?

* To remove **duplicates**
* For fast **membership testing**
* For **set math** (like union, difference)
* Very **fast** for large collections

---

##   Creating Sets

```python
set1 = {1, 2, 3, 4}
set2 = set([3, 4, 5])
```

✅ Removes duplicates automatically:

```python
s = {1, 2, 2, 3}
print(s)  # ➡️ {1, 2, 3}
```

---

##   Set Operations (Math Style)

Let’s say:

```python
A = {1, 2, 3, 4}
B = {3, 4, 5, 6}
```

| Operation      | Syntax                         | Result            |                      |
| -------------- | ------------------------------ | ----------------- | -------------------- |
| Union          | \`A                            | B`or`A.union(B)\` | `{1, 2, 3, 4, 5, 6}` |
| Intersection   | `A & B` or `A.intersection(B)` | `{3, 4}`          |                      |
| Difference     | `A - B`                        | `{1, 2}`          |                      |
| Symmetric Diff | `A ^ B`                        | `{1, 2, 5, 6}`    |                      |
| Subset         | `A <= B`                       | `False`           |                      |
| Superset       | `A >= B`                       | `False`           |                      |

---

## 🛠 Useful Set Methods

| Method          | Description                           |
| --------------- | ------------------------------------- |
| `.add(x)`       | Add an element                        |
| `.remove(x)`    | Remove `x`; error if not present      |
| `.discard(x)`   | Remove `x`; **no error** if missing   |
| `.pop()`        | Removes and returns an arbitrary item |
| `.clear()`      | Empty the set                         |
| `.update(set2)` | Add all items from set2               |
| `.copy()`       | Make a copy of the set                |

---

## 🧪 Examples

```python
a = {1, 2, 3}
b = {3, 4, 5}

print(a | b)   # Union → {1, 2, 3, 4, 5}
print(a & b)   # Intersection → {3}
print(a - b)   # Difference → {1, 2}
print(a ^ b)   # Symmetric Difference → {1, 2, 4, 5}
```

---

##   Removing Duplicates from a List Using Set

```python
nums = [1, 2, 2, 3, 3, 3]
unique = list(set(nums))
print(unique)  # ➡️ [1, 2, 3]
```

---

## ⚠️ Things to Remember

| Limitation           | Explanation                     |
| -------------------- | ------------------------------- |
| No indexing          | `set[0]` ❌ — sets are unordered |
| No duplicates        | All items must be unique        |
| Unhashable types     | You can't add lists or dicts    |
| Order not guaranteed | Output order may change         |

---

##   Summary Table

| Feature         | Set                               |
| --------------- | --------------------------------- |
| Mutable         | ✅ Yes                             |
| Unique elements | ✅ Yes                             |
| Ordered         | ❌ No                              |
| Indexed         | ❌ No                              |
| Common Uses     | Uniqueness, set math, fast lookup |

---

## 🧠 Real-life Examples

| Use Case                          | Example               |
| --------------------------------- | --------------------- |
| Remove duplicate usernames        | `set(usernames)`      |
| Find common friends               | `set1 & set2`         |
| Find items exclusive to each list | `set1 ^ set2`         |
| Membership testing                | `'admin' in role_set` |

---

 #  Dictionary (key-value pairs)

 
---

##   What is a Dictionary?

> A **dictionary** is a **collection of key-value pairs**, where each **key** maps to a specific **value**.

It's similar to a **real-world dictionary**:
🗝️ **Word** → 📖 **Definition**

---

###   Syntax:

```python
my_dict = {
    "name": "Rabeeh",
    "age": 22,
    "is_admin": True
}
```

* Keys must be **unique**
* Keys must be **immutable** types (like `str`, `int`, `tuple`)
* Values can be **any** data type

---

## 🔁 Accessing Values

```python
print(my_dict["name"])     # Rabeeh
print(my_dict.get("age"))  # 22
```

### 🚨 If key is missing:

```python
print(my_dict["email"])     # ❌ KeyError
print(my_dict.get("email")) # ✅ Returns None
```

---

## 🛠 Common Dictionary Methods

| Method           | Description                             | Example                       |
| ---------------- | --------------------------------------- | ----------------------------- |
| `.get(key)`      | Safely get value                        | `d.get("age")`                |
| `.keys()`        | Get all keys                            | `d.keys()`                    |
| `.values()`      | Get all values                          | `d.values()`                  |
| `.items()`       | Get list of (key, value) pairs          | `d.items()`                   |
| `.update(dict2)` | Merge another dictionary                | `d.update({"city": "Delhi"})` |
| `.pop(key)`      | Remove key and return its value         | `d.pop("age")`                |
| `.popitem()`     | Remove last inserted item (Python 3.7+) | `d.popitem()`                 |
| `.clear()`       | Remove all items                        | `d.clear()`                   |
| `in`             | Check if key exists                     | `"name" in d` → `True`        |

---

##   Example:

```python
person = {"name": "Ali", "age": 20}

# Add or update value
person["city"] = "Kozhikode"

# Loop through keys
for key in person:
    print(key, ":", person[key])

# Using items()
for k, v in person.items():
    print(f"{k} => {v}")
```

---

## 🔁 Nested Dictionaries

```python
students = {
    "101": {"name": "Aisha", "grade": "A"},
    "102": {"name": "Ravi", "grade": "B"}
}

print(students["101"]["name"])  # Aisha
```

---

## 🔁 Dictionary Comprehension

```python
squares = {x: x**2 for x in range(5)}
print(squares)  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}
```

---

##   Real-World Examples

| Use Case                   | Dictionary Example                  |
| -------------------------- | ----------------------------------- |
| Store user data            | `{"username": "rabeeh", "age": 22}` |
| Word frequency counter     | `{"hello": 3, "world": 2}`          |
| API JSON response          | Usually comes as dictionaries       |
| Database row (key\:column) | `{"id": 1, "name": "Ali"}`          |

---

##   Summary Table

| Feature         | Dictionary (`dict`)         |
| --------------- | --------------------------- |
| Key-Value Pairs | ✅ Yes                       |
| Keys Are Unique | ✅ Must be                   |
| Mutable         | ✅ Can change, add, remove   |
| Indexed by Keys | ✅ Not by position           |
| Nested Support  | ✅ You can nest dicts inside |

---

## ❗ Common Mistakes

| Mistake                       | Correction                       |
| ----------------------------- | -------------------------------- |
| Using list as a key (mutable) | ❌ `d[[1,2]] = "x"` → ❌ TypeError |
| Using missing key with `[]`   | ✅ Use `.get()` instead           |
| Mixing up `key` vs `value`    | Use `.items()` to loop properly  |

---
 

# Unpacking, Destructuring
 
---

##   What is Unpacking / Destructuring?

> In Python, **unpacking** (a.k.a. destructuring) means breaking **iterables** (like tuples, lists, dicts) into individual variables in one line.

✅ It works with:

* Tuples
* Lists
* Strings
* Dictionaries (with special syntax)
* Function arguments
* Loops

---

## ✅ Basic Unpacking Example (Tuple/List)

```python
person = ("Rabeeh", 22)

name, age = person
print(name)  # Rabeeh
print(age)   # 22
```

⚠️ You must match the number of variables with number of items.

---

##   List Unpacking Example

```python
data = [1, 2, 3]
a, b, c = data
print(a, b, c)  # 1 2 3
```

---

##   Unpacking with `*` (Starred Expression)

> Use `*` to capture **remaining values**.

```python
a, *b = [1, 2, 3, 4, 5]
print(a)  # 1
print(b)  # [2, 3, 4, 5]

*a, b = [1, 2, 3, 4, 5]
print(a)  # [1, 2, 3, 4]
print(b)  # 5
```

---

##   Swap Two Variables (No Temp Variable Needed)

```python
x, y = 10, 20
x, y = y, x
print(x, y)  # 20, 10
```

✅ This is tuple unpacking behind the scenes!

---

## 🔄 Nested Unpacking

```python
user = ("Ali", (22, "India"))

name, (age, country) = user
print(name)     # Ali
print(age)      # 22
print(country)  # India
```

---

## 🔁 Loop Unpacking

```python
pairs = [(1, 'a'), (2, 'b'), (3, 'c')]

for num, char in pairs:
    print(num, char)
```

✅ You can unpack directly inside the loop.

---

## 🔧 Dictionary Unpacking (using `**`)

```python
info = {"name": "Ali", "age": 22}

def show(name, age):
    print(f"{name} is {age} years old.")

show(**info)  # Unpacks keys to arguments
```

✅ Useful when passing data into functions.

---

## 🔧 Merging Dicts using `**`

```python
a = {"x": 1}
b = {"y": 2}
c = {**a, **b}
print(c)  # {'x': 1, 'y': 2}
```

---

## ✅ Use Cases of Unpacking

| Use Case                  | Example                    |
| ------------------------- | -------------------------- |
| Assign multiple variables | `x, y = 10, 20`            |
| Swap values               | `x, y = y, x`              |
| Function return values    | `name, age = get_user()`   |
| Loop over pairs           | `for k, v in dict.items()` |
| Argument passing (kwargs) | `func(**dict)`             |
| Collect rest of items     | `a, *b = [1, 2, 3, 4]`     |

---

## ❗ Common Errors

| Error Type                  | Example               | Fix                  |
| --------------------------- | --------------------- | -------------------- |
| Too many values to unpack   | `x, y = [1, 2, 3]`    | Use `*` for rest     |
| Not enough values to unpack | `x, y, z = [1, 2]`    | Match variable count |
| Dict unpacking wrong order  | `func(*dict)` (wrong) | Use `func(**dict)`   |

---

## ✅ Summary

| Feature            | Description                            |
| ------------------ | -------------------------------------- |
| Unpacking          | Splits a collection into variables     |
| `*` (starred expr) | Captures multiple remaining values     |
| `**` for dicts     | Unpacks key-value pairs into arguments |
| Loop unpacking     | Common in `for k, v in dict.items()`   |

---

 # Collections module (namedtuple, defaultdict, Counter)

   **`collections` module** — a standard library that provides **specialized data structures** to make your life easier and code more readable.

---

##   Overview of `collections` module

> The `collections` module provides **container data types** that are alternatives to Python's built-in types (like `dict`, `tuple`, `list`).

We'll cover:

1. ✅ `namedtuple` – like a tuple, but with named fields
2. ✅ `defaultdict` – like a dict, but with default values
3. ✅ `Counter` – quick frequency counting

---

## ✅ 1. `namedtuple`: Tuples with named fields

> A `namedtuple` is like a normal tuple, but with named fields for better readability.

### 🔧 Syntax:

```python
from collections import namedtuple

Person = namedtuple('Person', ['name', 'age'])
p = Person(name='Rabeeh', age=22)

print(p.name)  # Rabeeh
print(p[1])    # 22 (can still use index)
```

### ✅ Benefits:

* Immutable like a tuple
* Readable like an object
* Memory-efficient

### 🔄 Real-life Use:

```python
Point = namedtuple("Point", "x y")
pt = Point(10, 20)
print(pt.x, pt.y)  # 10 20
```

---

## ✅ 2. `defaultdict`: Dictionary with default values

> A `defaultdict` automatically creates a default value if a key is missing.

### 🔧 Syntax:

```python
from collections import defaultdict

d = defaultdict(int)
d["a"] += 1
print(d)  # {'a': 1}
```

### 🔁 Without `defaultdict`:

```python
d = {}
d["a"] += 1  # ❌ KeyError
```

### ✅ Use Cases:

* Counting
* Grouping
* Avoid `if key in dict` checks

### 💡 Example: Grouping

```python
words = ['apple', 'ape', 'bat', 'ball']

groups = defaultdict(list)
for word in words:
    groups[word[0]].append(word)

print(groups)
# {'a': ['apple', 'ape'], 'b': ['bat', 'ball']}
```

---

## ✅ 3. `Counter`: Frequency counter

> `Counter` is like a dictionary, but built for counting items.

### 🔧 Syntax:

```python
from collections import Counter

c = Counter("banana")
print(c)
# Counter({'a': 3, 'n': 2, 'b': 1})
```

### 🔁 With lists:

```python
nums = [1, 2, 2, 3, 3, 3]
count = Counter(nums)
print(count[2])  # 2
```

### 🔧 Useful Methods:

| Method            | Purpose                     |                           |
| ----------------- | --------------------------- | ------------------------- |
| `.most_common(n)` | Top `n` most frequent items |                           |
| `.elements()`     | Repeat items based on count |                           |
| `+`, `-`, `&`, \` | \`                          | Math set-style operations |

### 🧪 Example:

```python
a = Counter("hello")
b = Counter("yellow")

print(a + b)  # Sum counts
print(a & b)  # Min of each count (intersection)
```

---

## 🧠 Summary Table

| Type          | Purpose                            | Key Feature                   |
| ------------- | ---------------------------------- | ----------------------------- |
| `namedtuple`  | Tuple with names for each field    | Access by name + immutability |
| `defaultdict` | Dict with automatic default values | Avoid `KeyError`              |
| `Counter`     | Count elements in iterable         | Fast frequency count          |

---

## 🔁 Real-World Use Cases

| Scenario                   | Best Tool     |
| -------------------------- | ------------- |
| Coordinate system          | `namedtuple`  |
| Group students by grade    | `defaultdict` |
| Count most common words    | `Counter`     |
| Avoid key-checking in dict | `defaultdict` |

---

 
