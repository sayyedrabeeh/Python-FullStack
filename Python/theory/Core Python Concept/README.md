## Core Python Concept

### topics
 
* Variables and Constants
* Data Types (int, float, str, bool, None)
* Type Casting (int(), str(), etc.)
* Truthy vs Falsy values
* Call by Sharing vs Call by Reference
* id(), type()
* Python Virtual Machine (PVM)
* Python Memory Management
* Garbage Collection (including Cyclic GC)
* Global Interpreter Lock (GIL)
* CPython, Pyc file, eval()
* PEP8 (Style guide)
* Python Environments (Virtual Environment, Conda, etc.)
* Environmental Variables
* Python Execution Flow


#  Variables and Constants
  
---

##  What is a Variable?

> A **variable** is like a label or container that stores some value in memory so you can use or change it later.

### Think of it like:

Imagine a **jar** labeled `sugar`. You can put sugar in it, replace it with salt, or add more sugar. The **label** (variable name) remains, but the **content (value)** can change.

---

###  Syntax

```python
name = "Rabeeh"
age = 22
height = 5.9
is_student = True
```

* `name`, `age`, `height`, `is_student` are variables.
* You assign values using the `=` sign.
* Python is **dynamically typed**, so you don’t need to declare the data type.

---

###  You can reassign values:

```python
x = 10
x = x + 5   # Now x becomes 15
```

---

## 🧊 What is a Constant?

> A **constant** is a value that **should not change** during the program. Python doesn't enforce this rule, but we use **naming conventions** to show that a variable is meant to be constant.

### ✅ Think of it like:

Imagine a **signboard** that says “Speed Limit: 60”. You **shouldn’t** change this — even though physically you could. In Python, constants are like that — **not enforced**, but respected by convention.

---

### 📌 Example (by convention):

```python
PI = 3.14159
MAX_USERS = 100
API_KEY = "123XYZABC"
```

* All uppercase letters = This value is **meant to be constant**.
* Developers won’t change `PI` unless they have a very good reason.

---

### 🚨 Important:

Python doesn’t **technically prevent** you from changing a constant:

```python
PI = 3.14   # No error! But not recommended!
```

---

## 🧪 Quick Example

```python
# Variable
username = "sayyed"
username = "rabeeh"  # Changed

# Constant (by naming convention)
MAX_LOGIN_ATTEMPTS = 3
# MAX_LOGIN_ATTEMPTS = 5  <-- You can, but shouldn't.
```

---

## 🔍 Summary

| Feature        | Variable            | Constant                        |
| -------------- | ------------------- | ------------------------------- |
| Value changes? | ✅ Yes               | 🚫 Should not (convention only) |
| Naming style   | `my_name`, `age`    | `MAX_VALUE`, `PI`               |
| Enforced?      | ✅ Yes by nature     | ❌ No (only by convention)       |
| Use case       | Store changing info | Store fixed values              |

---
 
# Data Types (int, float, str, bool, None)
 

---

##  What are Data Types?

> In Python, **data types** tell the interpreter what kind of value a variable is holding (like a number, text, true/false, or nothing).

---

##  Built-in Basic Data Types

### 1. **`int`** → Integer (Whole numbers)

> Used for counting things without decimal points.

```python
age = 25
followers = 1000
temperature = -10
```

 **Examples in real life:**

* Age, number of apples, page count

---

### 2. **`float`** → Floating-point (Decimal numbers)

> Used when precision matters, like in measurements or calculations with fractions.

```python
height = 5.9
pi = 3.14159
price = -99.99
```

 **Examples in real life:**

* Height in meters, prices, percentages

---

### 3. **`str`** → String (Text)

> A string is a sequence of characters (letters, numbers, symbols) surrounded by quotes.

```python
name = "Rabeeh"
greeting = 'Hello!'
password = "abc123"
```

 **Examples in real life:**

* Names, sentences, addresses

> 🔹 You can use single `' '`, double `" "`, or triple quotes `''' '''` for multi-line strings.

---

### 4. **`bool`** → Boolean (True or False)

> Used to represent logical values: something is either **True** or **False**.

```python
is_logged_in = True
has_passed = False
```

 **Examples in real life:**

* Is light on? ✅ True/False
* Has user completed task? ✅ True/False

---

### 5. **`None`** → Null / Empty value

> `None` means “nothing” or “no value assigned yet.”

```python
score = None
profile_picture = None
```

 **Examples in real life:**

* A form field left blank
* An image not uploaded yet

---

## 🔍 Check Data Type Using `type()`

```python
print(type(10))         # <class 'int'>
print(type(3.14))       # <class 'float'>
print(type("hello"))    # <class 'str'>
print(type(True))       # <class 'bool'>
print(type(None))       # <class 'NoneType'>
```

---

## ✅ Quick Summary

| Type    | Example         | Meaning                      |
| ------- | --------------- | ---------------------------- |
| `int`   | `5`, `-2`       | Whole numbers                |
| `float` | `3.14`, `-0.1`  | Decimal numbers              |
| `str`   | `"hello"`       | Text (strings of characters) |
| `bool`  | `True`, `False` | Logical true/false           |
| `None`  | `None`          | Absence of value / null      |

---

## 🧪 Bonus Tip

You can convert between types using:

```python
int("5")     # 5
float("3.14")  # 3.14
str(100)     # "100"
bool("")     # False
```

---

 
# Type Casting (int(), str(), etc.)

**Type Casting** (also called **Type Conversion**) 

---

##  What is Type Casting?

> **Type casting** means converting one data type into another — like turning a string into an integer, or an integer into a float.

---

##  Why Use It?

Sometimes, the data you’re working with is in the **wrong format**, like:

* Getting `"25"` as a string from user input, but you need it as an integer to do math.
* Formatting a number into text to show it in a message.

---

##  Built-in Type Casting Functions

| Function  | Converts to    |
| --------- | -------------- |
| `int()`   | Integer        |
| `float()` | Floating point |
| `str()`   | String         |
| `bool()`  | Boolean        |

---

##  1. **int()** — Convert to Integer

```python
int("10")       # 👉 10 (from string)
int(3.99)       # 👉 3 (decimal becomes whole number)
int(True)       # 👉 1
int(False)      # 👉 0
```

Not allowed:

```python
int("abc")      # ❌ Error! Can't convert non-number string
```

---

##  2. **float()** — Convert to Decimal

```python
float("3.14")    # 👉 3.14
float(5)         # 👉 5.0
float(True)      # 👉 1.0
```

---

##  3. **str()** — Convert to String

```python
str(100)         # 👉 "100"
str(3.14)        # 👉 "3.14"
str(True)        # 👉 "True"
```

Useful for displaying messages:

```python
name = "Rabeeh"
age = 22
print("My name is " + name + " and I am " + str(age) + " years old.")
```

---

##  4. **bool()** — Convert to Boolean

```python
bool(0)          # 👉 False
bool(1)          # 👉 True
bool("")         # 👉 False (empty string)
bool("hello")    # 👉 True
bool([])         # 👉 False (empty list)
bool([1, 2])     # 👉 True (non-empty)
```

---

##  Real-Life Example:

### 👇 Example 1: Add number from string input

```python
num1 = "5"
num2 = "10"
result = int(num1) + int(num2)
print(result)  # 👉 15
```

### 👇 Example 2: Convert user age to string for message

```python
age = 22
message = "You are " + str(age) + " years old"
print(message)
```

---

## ⚠️ Type Casting Mistakes to Avoid

```python
int("3.14")     # ❌ Error: cannot convert float string directly to int
int("abc")      # ❌ Error: invalid literal
```

✅ Fix:

```python
int(float("3.14"))   # 👉 3
```

---

## 🧪 Quick Summary

| To Type | Function  | Example                | Result  |
| ------- | --------- | ---------------------- | ------- |
| int     | `int()`   | `int("5")`             | `5`     |
| float   | `float()` | `float("3.14")`        | `3.14`  |
| string  | `str()`   | `str(100)`             | `"100"` |
| boolean | `bool()`  | `bool(0)` / `bool("")` | `False` |

---

 
# Truthy vs Falsy values

 

---

##  What are "Truthy" and "Falsy" values?

> In Python, **every value** has a built-in **Boolean value** — it’s either considered `True` or `False` when used in a conditional (like inside `if` or `while`).

* ✅ **Truthy**: Treated as `True`
* ❌ **Falsy**: Treated as `False`

You don’t need to write `== True` or `== False`. Python evaluates the value itself.

---

##  Truthy Examples

These values behave like `True`:

```python
if 1:           # True
if -42:         # True
if "hello":     # True
if [1, 2, 3]:   # True
if {"a": 1}:    # True
```

**Non-empty strings, lists, tuples, dictionaries, numbers (except 0)** are **truthy**.

---

##  Falsy Examples

These values behave like `False`:

```python
if 0:           # False
if 0.0:         # False
if "":          # False
if []:          # False
if {}:          # False
if None:        # False
if False:       # False
```

###  Rule of Thumb:

> "Empty things and zero-like values are usually falsy."

---

##  Real-World Example

###  Login Check

```python
username = input("Enter username: ")
if username:
    print("Welcome,", username)
else:
    print("You didn’t enter anything!")
```

* If user enters nothing (`""`), it’s falsy → shows error
* If user enters a name like `"rabeeh"`, it’s truthy → works

---

##  Why Does This Matter?

It lets you write **clean, readable code**:

```python
# Instead of:
if len(my_list) > 0:
    print("List is not empty")

# You can write:
if my_list:
    print("List is not empty")
```

---

##  Complete List of Falsy Values in Python

| Type       | Falsy Value      |
| ---------- | ---------------- |
| Number     | `0`, `0.0`, `0j` |
| String     | `""`             |
| List       | `[]`             |
| Tuple      | `()`             |
| Dictionary | `{}`             |
| Set        | `set()`          |
| NoneType   | `None`           |
| Boolean    | `False`          |

---

##  Check yourself:

```python
print(bool("hi"))      # True
print(bool(""))        # False
print(bool(123))       # True
print(bool(0))         # False
```

---

# Call by Sharing vs Call by Reference

  **Python**  uses **Call by Sharing** (not Call by Reference ).

---

##   First, What's "Call by ..."?

Whenever you pass a variable to a function, the way it's **passed and modified** depends on the "call mechanism."

---

##   Quick Definitions

| Concept               | Meaning                                                                               |
| --------------------- | ------------------------------------------------------------------------------------- |
| **Call by Reference** | Passes the **reference directly**, so changes affect the original                     |
| **Call by Sharing**   | Passes the **object’s reference**, but reassigning inside doesn’t affect the original |

---

##   Python uses: **Call by Sharing**

> Python passes a **reference to the object**, not the actual object, and not a copy. But... if you **reassign** the variable inside the function, it doesn’t affect the original outside.

---

###   Example 1: Modifying a **mutable** object (like a list)

```python
def modify(lst):
    lst.append(100)

my_list = [1, 2, 3]
modify(my_list)
print(my_list)   # 👉 [1, 2, 3, 100] — modified!
```

 You modified the **contents** of the list. Python passed the reference to the **same list** → so the change is reflected.

---

###   Example 2: Reassigning the variable inside the function

```python
def change_name(name):
    name = "Alice"

username = "Rabeeh"
change_name(username)
print(username)   # 👉 "Rabeeh" — not changed
```

❌ Reassignment creates a **new object** inside the function. The original variable is **unchanged** outside.

---

##  Real Explanation:

> Python's model is **Call by Object Sharing**:

* The **reference to the object** is shared with the function.
* If the object is **mutable** (like lists, dicts), you can change its contents.
* But if you **rebind** the variable (i.e., assign a new object), it doesn’t affect the caller’s version.

---

##  Quick Rule

| Action            | Mutable Object (list, dict) | Immutable Object (int, str, tuple) |
| ----------------- | --------------------------- | ---------------------------------- |
| Modify content    | Changes reflect             | Not possible                       |
| Reassign variable | Doesn’t affect outside      | Doesn’t affect outside             |

---

### 🧪 Example 3: Immutable + Reassignment

```python
def increase(n):
    n += 1

num = 10
increase(num)
print(num)  # 👉 10 (not changed)
```

✔️ `int` is immutable. `n += 1` creates a new number, doesn’t change the original.

---

##  Call by Reference (used in other languages like C++)

> If Python were **Call by Reference**, then reassigning a variable inside a function **would change the original outside** — which it doesn’t.

---

## ✅ Summary

| Feature                  | Python (`Call by Sharing`) | Call by Reference (C++-like) |
| ------------------------ | -------------------------- | ---------------------------- |
| Passes variable?         | Passes object reference    | Passes reference to variable |
| Can modify original?     | Yes, if object is mutable  | Yes                          |
| Can reassign and change? | No                         | Yes                          |

---
 

# id(), type()

 

---

##  1. `id()`: Identity of an Object

### What is it?

> The `id()` function returns the **unique identity** (memory address) of a Python object. It helps you find **whether two variables refer to the same object** in memory.

###  Syntax:

```python
id(object)
```

###  Example:

```python
x = 10
y = x
z = 10

print(id(x))
print(id(y))
print(id(z))
```

✅ All 3 have the same `id()` because Python **interns small integers** — meaning it reuses the same memory for efficiency.

---

###  Example with mutable types:

```python
list1 = [1, 2, 3]
list2 = list1      # same object
list3 = [1, 2, 3]   # new object with same content

print(id(list1))   # Same as list2
print(id(list2))   # Same as list1
print(id(list3))   # Different!
```

✅ `list1` and `list2` share the same memory reference. `list3` is a separate object (even though it looks the same).

---

### 💡 Use case:

Check if two variables **actually point to the same object** in memory:

```python
if id(a) == id(b):
    print("Same object")
```

---

##  2. `type()`: Type of an Object

###  What is it?

> The `type()` function returns the **data type** (class) of a Python object.

### 📌 Syntax:

```python
type(object)
```

---

###  Examples:

```python
print(type(10))        # <class 'int'>
print(type(3.14))      # <class 'float'>
print(type("hello"))   # <class 'str'>
print(type([1, 2]))    # <class 'list'>
print(type(None))      # <class 'NoneType'>
```

---

###  Use case:

* Debugging unexpected values
* Dynamically checking types in functions
* Teaching or learning types

```python
def describe(value):
    print("The type is:", type(value))
```

---

##  `id()` vs `type()` — Summary Table

| Function | Purpose                              | Returns                 | Example   |
| -------- | ------------------------------------ | ----------------------- | --------- |
| `id()`   | Returns memory address (identity)    | Integer (unique ID)     | `id(x)`   |
| `type()` | Returns the type/class of the object | Type object (`<class>`) | `type(x)` |

---

##  Practical Real-Life Example:

```python
name = "Rabeeh"
age = 22

print("name is of type:", type(name))   # str
print("age is stored at memory:", id(age))
```

---
 
# Python Virtual Machine (PVM)


 

---

##  What is the **Python Virtual Machine (PVM)**?

> The **Python Virtual Machine (PVM)** is the part of Python that **actually runs your code**. It's like the **engine** that executes Python instructions.

---

###  Think of It Like:

* You write a script in Python (`.py` file).
* Python first **translates** it into **bytecode** (`.pyc` file).
* The **PVM reads and executes** this bytecode line by line.

So, the PVM is the **runtime engine** that makes your code actually run on your machine.

---

##  What Happens Behind the Scenes?

### Step-by-step:

1.  You write Python code:

```python
print("Hello")
```

2.  Python **compiles** it to **bytecode**:

```bash
# Internally generates:
print("Hello")  --> Bytecode like: LOAD_NAME, CALL_FUNCTION...
```

3.  The **PVM executes** the bytecode:

* Reads bytecode
* Talks to OS & hardware (memory, screen, files)
* Manages execution, function calls, exceptions, etc.

---

##  Bytecode Example:

You don’t see it normally, but it looks like:

```python
LOAD_NAME 'print'
LOAD_CONST 'Hello'
CALL_FUNCTION 1
```

Python saves this as `.pyc` files in `__pycache__/` so it can run faster next time.

---

##  Where Is the PVM?

It’s **inside the Python interpreter** — e.g., CPython includes the PVM.

```text
Your Code (Python) → Compiler → Bytecode (.pyc) → PVM → Execution
```

---

##  Summary

| Feature        | Description                                                   |
| -------------- | ------------------------------------------------------------- |
| What is it?    | Python's internal engine that runs bytecode                   |
| When it runs?  | After your code is compiled to bytecode                       |
| Role           | Reads bytecode, interacts with memory, manages execution      |
| Related files  | `.pyc` (compiled Python files) in `__pycache__`               |
| Is it visible? | No — it works behind the scenes inside the Python interpreter |

---

##  Real Example:

```python
# script.py
print("Hi")

# Run:
$ python script.py

# Internally:
- Python compiles to bytecode
- PVM executes bytecode
- You see: Hi
```

---

##  Key Takeaways for Developers

* You don’t interact with the PVM directly.
* But understanding it helps you reason about:

  * Performance
  * What `.pyc` files are
  * Why Python is cross-platform
  * The role of interpreters like CPython, PyPy

---



# Python Memory Management

  Understanding **Python Memory Management** helps you write efficient, bug-free code — especially when working with large data or objects.
 

---

##  What is Python Memory Management?

> **Python Memory Management** is the process by which Python **allocates**, **uses**, and **frees up memory** for variables, objects, functions, etc., during your program’s execution.

Think of it like: Python is a smart housekeeper that:

* Allocates rooms (memory) when needed
* Reuses them efficiently
* Cleans them (garbage collection) when no one’s using them

---

##  Key Concepts in Python Memory Management

###  1. **Memory Allocation**

When you create a variable or object:

```python
name = "Rabeeh"
```

Python **allocates memory** to store the string `"Rabeeh"` and assigns the reference to the variable `name`.

---

###  2. **Reference Counting**

> Every object in Python has a **reference count** — how many variables (or places) are using it.

```python
a = [1, 2, 3]
b = a
```

Both `a` and `b` point to the **same object**, so reference count is `2`.

When reference count reaches **0**, Python knows nothing is using that object → it’s ready for garbage collection.

---

###  3. **Garbage Collection (GC)**

> Python automatically deletes (cleans) objects from memory that are **no longer needed**.

* Done by Python’s **garbage collector**
* Uses **reference counting** and handles **cyclic references** using the `gc` module

###  Example:

```python
import gc

print(gc.isenabled())  # True, GC is on
gc.collect()           # Forces collection
```

---

###  4. **Cyclic Garbage Collection**

> Python can handle circular references — two or more objects referring to each other but unused globally.

```python
class Node:
    def __init__(self):
        self.next = None

a = Node()
b = Node()
a.next = b
b.next = a

del a
del b
# They're unreachable now, GC will clean them up
```

---

##  Python Memory Model Overview

###  Memory is divided into:

| Area      | Used For                               |
| --------- | -------------------------------------- |
| **Stack** | Function calls, local variables        |
| **Heap**  | Objects, lists, dicts (dynamic memory) |

Python uses **private heap space** managed by the interpreter to store all objects.

---

## 🛠 Python Internals: Memory Efficiency

* **Small integers (−5 to 256)** and **short strings** are **interned** (reused to save memory).
* Use `is` to check memory identity:

```python
x = 100
y = 100
print(x is y)  # True (same memory)
```

---

##  Tools to Monitor Memory

* `sys.getsizeof(obj)` – memory size of object
* `gc` module – manual control of garbage collection
* `tracemalloc` – track memory allocations

---

## ✅ Summary

| Concept            | Description                                             |
| ------------------ | ------------------------------------------------------- |
| Reference Counting | Tracks how many things are using an object              |
| Garbage Collection | Auto deletes unused objects                             |
| Cyclic GC          | Removes objects that reference each other in cycles     |
| Interning          | Reuses common immutable objects to save space           |
| Stack vs Heap      | Stack = function calls, Heap = objects & dynamic memory |

---

## 🧪 Mini Real-World Example

```python
import sys

x = [1, 2, 3]
y = x
print(sys.getrefcount(x))  # Usually returns 3 (x, y, getrefcount())
```

---

# Garbage Collection (including Cyclic GC)

---

##  What is Garbage Collection in Python?

> **Garbage Collection (GC)** is Python's automatic memory management system that **cleans up unused objects** to free memory.

###  Why?

Because memory is limited. If you keep creating objects and forget to delete them, your program will **leak memory** and eventually crash or slow down.

---

##  Real-Life Analogy:

Imagine a hotel (your program). Each guest (object) is assigned a room (memory). When a guest leaves (is no longer needed), the room needs to be cleaned (freed) for the next guest.

Python has a **cleaning crew** (GC) that keeps checking and cleaning rooms when they’re no longer in use.

---

##  How Python GC Works (2 main parts):

###  1. **Reference Counting** (Primary mechanism)

Each object in Python keeps track of **how many references** (variables or containers) point to it.

* If an object’s **reference count drops to 0**, Python deletes it immediately.

####  Example:

```python
a = [1, 2, 3]
b = a          # reference count = 2
del a          # reference count = 1
del b          # reference count = 0 → garbage collected
```

---

###  2. **Cyclic Garbage Collector** (Handles reference cycles)

Sometimes two or more objects reference each other in a **cycle**. Even when nothing outside is referencing them, the **reference count never becomes 0**.

Python’s **cyclic garbage collector** handles this.

---

###  Example of a Cyclic Reference (Memory leak without GC):

```python
class Node:
    def __init__(self):
        self.ref = None

a = Node()
b = Node()

a.ref = b
b.ref = a   # cycle: a → b → a

del a
del b       # Memory leak? No! Python detects and collects this cycle.
```

Python detects unreachable objects that form a **cycle** and frees them.

---

## 🛠 Python GC in Action

You can interact with the garbage collector using the built-in `gc` module:

```python
import gc

gc.isenabled()         # Check if GC is enabled (True by default)
gc.collect()           # Manually trigger garbage collection
gc.get_count()         # Shows (gen0, gen1, gen2) collection stats
```

---

##  Python's Generational GC

Python's GC has 3 **generations** to manage objects:

| Generation | Description                           |
| ---------- | ------------------------------------- |
| 0          | New objects (most likely to die fast) |
| 1          | Survived generation 0 once            |
| 2          | Long-lived objects                    |

* Gen 0 collected often
* Gen 2 collected least often

This improves **performance**, since most garbage is short-lived.

---

##  Summary Table

| Concept                  | What it does                                               |
| ------------------------ | ---------------------------------------------------------- |
| Reference Counting       | Deletes objects when reference count = 0                   |
| Cyclic Garbage Collector | Detects and collects object cycles                         |
| `gc` module              | Lets you manually trigger GC and inspect memory            |
| Generational GC          | Optimizes collection for short-lived vs long-lived objects |

---

##  Mini Practical Example

```python
import gc

class A:
    def __del__(self):
        print("Deleted!")

a = A()
b = a
del a
del b    # "Deleted!" is printed → GC has cleaned it
```

---
 

# Global Interpreter Lock (GIL)

 

---

##  What is the Global Interpreter Lock (GIL)?

> The **GIL (Global Interpreter Lock)** is a **mutex (lock)** used in **CPython** (the default Python interpreter) to ensure that **only one thread runs Python bytecode at a time**, even if your machine has multiple CPU cores.

###  In short:

**Only one thread can execute Python code at a time**, even on a multi-core CPU.

---

##  Why is this important?

* It **prevents race conditions** when multiple threads try to modify Python objects at the same time.
* But it also **limits multi-threaded performance**, especially for CPU-bound tasks.

---

##  Real-Life Analogy

Imagine a kitchen with multiple chefs (threads) , but only **one stove (GIL)**. Even if 4 chefs are ready to cook (multi-threading), only **one can use the stove** at a time. Others must wait, even if the stove is free for something else (like warming soup vs frying eggs).

---

##  GIL in Action: Example

```python
import threading

def count():
    i = 0
    while i < 10**7:
        i += 1

thread1 = threading.Thread(target=count)
thread2 = threading.Thread(target=count)

thread1.start()
thread2.start()

thread1.join()
thread2.join()
```

### ❗ Problem:

Even with two threads, the execution won’t be truly parallel. Only one thread runs Python bytecode at a time — because of the GIL.

---

##  CPU-bound vs IO-bound

| Task Type | GIL Impact              | Best Option                |
| --------- | ----------------------- | -------------------------- |
| CPU-bound | ❌ Slows multi-threading | ✅ Use multiprocessing      |
| IO-bound  | ✅ Threads help          | ✅ Use threading or asyncio |

---

##  How to Work Around the GIL

###  1. Use `multiprocessing` (separate processes = separate GILs)

```python
from multiprocessing import Process

def task():
    # heavy CPU work
    ...

p1 = Process(target=task)
p2 = Process(target=task)
p1.start()
p2.start()
```

Each process has **its own Python interpreter and GIL**, so they can run truly in **parallel**.

---

###  2. Use `threading` for IO-bound tasks (e.g., downloading files, reading disk)

```python
# Good use of threading
import threading
import time

def download():
    time.sleep(2)
    print("Download done")

t1 = threading.Thread(target=download)
t2 = threading.Thread(target=download)
t1.start()
t2.start()
```

 Threading helps when you're **waiting** (e.g., network delay, user input) because the GIL is **released during IO operations**.

---

##  Summary

| Feature              | Explanation                                                 |
| -------------------- | ----------------------------------------------------------- |
| What is GIL?         | Lock that allows only one thread to run Python code at once |
| Where does it exist? | In **CPython only** (not in Jython, IronPython)             |
| Good for?            | ✅ Memory safety, ✅ IO-bound tasks                        |
| Bad for?             | ❌ True multi-threaded CPU-bound tasks                      |
| Workaround           | Use `multiprocessing` for CPU-heavy parallelism             |

---

## Does Every Python Have a GIL?

* ✅ **CPython**: Has a GIL
* ❌ **Jython (Java)**: No GIL
* ❌ **IronPython (.NET)**: No GIL
* ✅ **PyPy**: Has a GIL, but with performance tweaks

---


# CPython, Pyc file, eval()

 three very different but essential Python concepts — e 

---

##  1. What is **CPython**?

> **CPython** is the **default and most widely used** implementation of the Python programming language — written in the C programming language.

###  Key Points:

* When you install Python from [python.org](https://python.org), you’re using **CPython**.
* CPython compiles `.py` files into **bytecode** (`.pyc`) and runs them using the **PVM (Python Virtual Machine)**.

---

###  Analogy:

Think of Python as a language like English.

* **CPython** is a particular **interpreter** that can "speak" English.
* Other interpreters also "speak" Python, like:

  * 🟢 **Jython** (Python written in Java)
  * 🟣 **PyPy** (Python written in Python with JIT compiler for speed)
  * 🔵 **IronPython** (Python on .NET)

---

###  Simple Proof:

```python
import platform
print(platform.python_implementation())  # Output: CPython
```

---

##  2. What is a `.pyc` File?

> A **`.pyc` file** is a **compiled Python file** — bytecode generated by the interpreter from your `.py` script. It’s stored in the `__pycache__` folder for faster execution next time.

###  Flow:

```text
script.py → [compiled] → script.cpython-311.pyc → [executed by PVM]
```

### Key Details:

* Created **automatically** by CPython when you run a `.py` file
* You don’t need to write `.pyc` files manually
* They **speed up program loading**, especially in large projects

---

###  Example:

```bash
# Run this
python my_script.py

# CPython compiles it to:
__pycache__/my_script.cpython-311.pyc
```

You can manually trigger compilation:

```python
import py_compile
py_compile.compile('my_script.py')
```

---

###  Fun Fact:

* You can delete `.pyc` files; Python will regenerate them on next run.
* `.pyc` files are **not encrypted** — they are just bytecode, not source-protected.

---

##  3. What is `eval()` in Python?

> `eval()` is a **built-in Python function** that takes a **string** and **evaluates it as a Python expression**.

---

###  Example:

```python
expr = "2 + 3 * 5"
result = eval(expr)
print(result)   # 👉 17
```

 It’s like a mini interpreter inside your code that understands Python expressions.

---

###  More Examples:

```python
x = 10
print(eval("x + 5"))        # 15

name = "Rabeeh"
print(eval("name.upper()")) # "RABEEH"
```

---

###  Warning: `eval()` is dangerous!

> **Never use `eval()` on user input** — it can run **arbitrary code** and be a **huge security risk**.

```python
user_input = "os.system('rm -rf /')"   # 🧨 Dangerous
eval(user_input)   # ❌ DO NOT DO THIS
```

---

###  Safer Alternatives:

Use these when possible:

| Task                 | Use Instead of `eval()`         |
| -------------------- | ------------------------------- |
| Evaluate math safely | `ast.literal_eval()`            |
| Parse user input     | `json.loads()` or `int()`, etc. |

---

##  Summary

| Concept  | Description                                                           |
| -------- | --------------------------------------------------------------------- |
| CPython  | Default Python interpreter (written in C)                             |
| `.pyc`   | Compiled bytecode file used by the Python VM (faster execution)       |
| `eval()` | Runs a string as a Python expression (⚠️ unsafe with untrusted input) |

---
 

# PEP8 (Style guide)
 

---

##  What is **PEP 8**?

> **PEP 8** stands for **Python Enhancement Proposal 8**.
> It’s the official **style guide for writing Python code** — like a set of rules for making your code easy to read and understand.

   Think of it like **grammar rules for Python**.
It doesn’t change how the code runs — it just makes it easier to read and maintain.

---

##  Why Should You Follow PEP 8?

 Your code becomes:

* Easier to read
* Easier to debug
* Easier to collaborate with other developers
* More professional and Pythonic

---

##  Key PEP 8 Rules (with Examples)

### 1.  **Indentation**

Use **4 spaces per level** of indentation (no tabs).

```python
# Good:
def greet():
    print("Hello")

# Bad:
def greet():
  print("Hello")  # ❌ Only 2 spaces
```

---

### 2.  **Line Length**

Limit all lines to **79 characters** (72 for docstrings).

```python
# Break long lines using parentheses
message = (
    "This is a long message that is split "
    "into two lines for better readability."
)
```

---

### 3.  **Blank Lines**

Use blank lines to separate:

* **Functions**
* **Classes**
* **Logical sections of code**

```python
def func1():
    pass


def func2():
    pass
```

---

### 4.  **Imports**

* All imports should be at the **top of the file**
* Use **one import per line**
* Order: **Standard → Third-party → Local**

```python
# Good:
import os
import sys

import requests

import my_module
```

---

### 5. **Variable & Function Names**

Use **snake\_case** for variable and function names.

```python
# Good:
user_name = "Rabeeh"

def get_user_age():
    return 25

# Bad:
UserName = "Rabeeh"
GetUserAge = lambda: 25
```

---

### 6.  **Class Names**

Use **CamelCase** for class names.

```python
class UserProfile:
    pass
```

---

### 7.  **Constants**

Use **ALL\_CAPS** for constants.

```python
MAX_RETRIES = 3
PI = 3.14159
```

---

### 8.  **Spaces in Expressions**

* Use spaces around operators (`=`, `+`, `-`, `==`)
* But **not inside function arguments or brackets**

```python
# Good:
x = a + b
my_func(x, y)

# Bad:
x=a+b
my_func( x , y )
```

---

### 9.  **Docstrings**

Use triple double quotes (`"""`) for documentation of:

* Functions
* Classes
* Modules

```python
def greet(name):
    """Return a greeting message."""
    return f"Hello, {name}"
```

---

### 10.  **Avoid Trailing Whitespace**

No spaces after a line ends.

```python
# Bad:
print("Hi")    
```

---

## 🔧 Tools That Help Enforce PEP 8

| Tool     | What it does                      |
| -------- | --------------------------------- |
| `flake8` | Shows style errors in code        |
| `black`  | Auto-formats code to follow PEP 8 |
| `pylint` | Code quality + style checks       |
| `isort`  | Automatically sorts imports       |

---

## 🧾 Mini PEP 8 Cheatsheet

| Rule                  | Style                    |
| --------------------- | ------------------------ |
| Indentation           | 4 spaces                 |
| Line length           | Max 79 characters        |
| Variables/functions   | `snake_case`             |
| Classes               | `CamelCase`              |
| Constants             | `ALL_CAPS`               |
| Imports               | 1 per line, at top       |
| Spaces in expressions | `x = a + b`, not `x=a+b` |
| Docstrings            | `"""Doc text here"""`    |

---

## ✅ Summary

> **PEP 8 is not mandatory**, but it's strongly recommended — especially in teams, open-source, interviews, and large projects.

By following PEP 8:

* Your code becomes **more Pythonic**
* Reviewers will love you
* You build **good habits** from day one

---
 

 # Python Environments (Virtual Environment, Conda, etc.)

 
---

##  What is a Python Environment?

> A **Python environment** is an **isolated workspace** that has:

* Its own Python interpreter
* Its own installed packages
* Its own dependencies and versions

This means **different projects** can have different versions of libraries like Django, NumPy, etc., without **conflicting** with each other.

---

##  Why Do We Need It?

Without environments:

* All packages install **globally**
* Version conflicts happen easily
* You can break other projects (or even system Python)

### 🛠 Real-World Analogy:

Imagine a toolbox 🧰:

* Global Python = 1 big shared toolbox (everyone throws tools in randomly)
* Virtual environment = separate toolboxes for each project 🔒

---

## 🔹 1. **Virtual Environment (`venv`)** — Built-in tool (Standard)

###  What it is:

* A lightweight, built-in tool to create isolated environments.
* Available in Python 3.3+



#### ▶ Create environment:

```bash
python -m venv env
```

#### Activate environment:

* **Windows**:

```bash
env\Scripts\activate
```

* **macOS/Linux**:

```bash
source env/bin/activate
```

#### ▶ Install packages:

```bash
pip install flask
```

####  Deactivate:

```bash
deactivate
```

---

### 📁 What happens:

* Creates a folder `env/`
* Copies Python and `pip` into it
* Keeps all packages inside `env/`

---

## 🔹 2. **Conda** — Powerful package + environment manager

> Created by Anaconda. Great for **data science**, supports **non-Python** packages too.

###  Use Conda when:

* You work with **data science**, **machine learning**
* You need precompiled packages like NumPy, SciPy, TensorFlow, etc.
* You want to manage both Python and **system-level packages**

---

###  Conda Commands:

#### ▶ Create environment:

```bash
conda create -n myenv python=3.10
```

####  Activate:

```bash
conda activate myenv
```

####  Install packages:

```bash
conda install pandas
```

#### ▶ Deactivate:

```bash
conda deactivate
```

---

### `venv` vs `conda`

| Feature                 | `venv`                  | `conda`                                |
| ----------------------- | ----------------------- | -------------------------------------- |
| Comes with Python       | ✅ Yes                   | ❌ Needs installation                   |
| Manages non-Python libs | ❌ No                    | ✅ Yes (e.g., MKL, OpenCV, BLAS)        |
| Lightweight             | ✅ Yes                   | ❌ Heavier                              |
| Package manager         | `pip`                   | `conda` + can use `pip`                |
| Best for                | General Python projects | Data science, ML, scientific computing |

---

## 🔹 3. **Other Tools (Advanced)**

| Tool           | Description                                     |
| -------------- | ----------------------------------------------- |
| **pipenv**     | Combines `pip` + `venv` + `Pipfile`             |
| **poetry**     | Dependency management + packaging               |
| **virtualenv** | Older version of `venv`, but with more features |

---

##  Practical Workflow Example

```bash
# 1. Create environment
python -m venv env

# 2. Activate
source env/bin/activate  # or env\Scripts\activate on Windows

# 3. Install packages
pip install requests flask

# 4. Save dependencies
pip freeze > requirements.txt

# 5. Share project
# Send code + requirements.txt to others

# 6. Others can run
pip install -r requirements.txt
```

---

## ✅ Summary

| Tool     | Use Case                         |
| -------- | -------------------------------- |
| `venv`   | Default for basic isolation      |
| `conda`  | Great for data science and ML    |
| `pipenv` | Easy-to-use package/env manager  |
| `poetry` | Modern tool for apps + libraries |

---

##  Best Practices

* Always use a **virtual environment** per project.
* Use `requirements.txt` or `Pipfile` to track dependencies.
* Don’t install packages globally unless necessary.

---
 

 # Environmental Variables

 

---

## What Are Environmental Variables?

> **Environmental Variables** are key–value pairs stored outside your Python code that define important settings for your application or system.

###  Why Use Them?

* To **hide sensitive info** like API keys, database passwords, etc.
* To **configure your app** differently in development vs production
* To avoid hardcoding values in your code

---

## 🛠 Real-World Analogy:

Think of your app as a game character 🎮.
Environmental variables are like **external power-ups or settings** you give the character **before** starting the game — like enabling “God Mode” or setting “Map Level = 3”.

---

##  Common Use Cases

| Variable Name    | Purpose                           |
| ---------------- | --------------------------------- |
| `SECRET_KEY`     | Secret keys for Flask/Django apps |
| `DATABASE_URL`   | Database connection string        |
| `DEBUG`          | Enable/disable debugging mode     |
| `EMAIL_PASSWORD` | Email service credentials         |
| `API_KEY`        | Keys for 3rd-party services       |

---

## 🔹 Setting Environment Variables

###  On Linux/macOS:

```bash
export SECRET_KEY="mysecret123"
```

###  On Windows CMD:

```cmd
set SECRET_KEY=mysecret123
```

###  On PowerShell:

```powershell
$env:SECRET_KEY = "mysecret123"
```

---

##  Accessing Environment Variables in Python

Use the built-in `os` module:

```python
import os

secret = os.environ.get("SECRET_KEY")
print(secret)
```

* ✅ `os.environ.get("KEY")` returns the value or `None` if not found.
* ❌ Don’t use `os.environ["KEY"]` unless you're sure it exists (or it will raise a KeyError).

---

##  Best Practice: Use `.env` file (with `python-dotenv`)

Instead of setting environment variables manually every time, store them in a **`.env` file**:

### 📄 `.env`

```env
DEBUG=True
SECRET_KEY=supersecret
API_KEY=123abc
```

###  Load them in Python:

```bash
pip install python-dotenv
```

```python
from dotenv import load_dotenv
import os

load_dotenv()  # Load from .env file

api_key = os.getenv("API_KEY")
print(api_key)
```

---

## ✅ Summary

| Feature                 | Description                                     |
| ----------------------- | ----------------------------------------------- |
| What is it?             | Key-value pair stored outside your code         |
| Why use it?             | Hide sensitive info, separate config from logic |
| How to access in Python | `os.environ.get("VAR_NAME")`                    |
| Bonus tool              | `python-dotenv` to load from `.env` file        |

---

##  Example Project Setup

```
project/
├── app.py
├── .env
└── requirements.txt
```

### `.env`

```env
DEBUG=True
EMAIL_PASSWORD=somepassword
```

### `app.py`

```python
from dotenv import load_dotenv
import os

load_dotenv()

if os.getenv("DEBUG") == "True":
    print("Debugging is ON")

print("Email password:", os.getenv("EMAIL_PASSWORD"))
```

---
 

# Python Execution Flow

 Understanding **Python Execution Flow** helps you see what happens *behind the scenes* when you run a `.py` file.

 

---

##  What is Python Execution Flow?

> **Python Execution Flow** is the sequence of steps Python follows to **run your program**, from source code to actual output.

---

##  Step-by-Step Python Execution Flow

###  Step 1: **You write Python code**

```python
print("Hello, world!")
```

This is your **source code** (`.py` file).

---

### ▶ Step 2: **Python parses the code**

Python **checks your syntax** and turns your code into an internal structure (like a tree).

 If there’s a **syntax error**, the execution stops here.

---

### ▶ Step 3: **Code is compiled to Bytecode**

The `.py` file is **compiled** into **bytecode** — a low-level set of instructions that the computer can’t directly understand, but the Python **Virtual Machine (PVM)** can.

```text
script.py → script.cpython-311.pyc
```

This bytecode is stored as a `.pyc` file in the `__pycache__/` folder.

---

### ▶ Step 4: **Bytecode is executed by PVM**

Now the **Python Virtual Machine (PVM)** reads and **executes the bytecode line-by-line**.

* The PVM manages memory
* Handles variables, loops, function calls
* Runs the program and gives output

---

### ▶ Step 5: **Output is shown**

```python
print("Hello, world!")  # Output: Hello, world!
```

The code is executed, and the output is printed.

---

## 💡 Real-Life Analogy

> Imagine Python is like making coffee with a machine ☕:

| Step | Coffee Analogy            | Python Execution            |
| ---- | ------------------------- | --------------------------- |
| 1    | You add beans and water   | Write Python code           |
| 2    | Machine checks everything | Python parses syntax        |
| 3    | Machine grinds the beans  | Python compiles to bytecode |
| 4    | Machine brews coffee      | PVM executes bytecode       |
| 5    | You drink coffee ☕        | Output is shown             |

---

## 🧪 Example

```python
def greet(name):
    return "Hello, " + name

print(greet("Rabeeh"))
```

### Execution Flow:

1. Define function `greet`
2. Call `greet("Rabeeh")`
3. Return `"Hello, Rabeeh"`
4. Print it → Output: `Hello, Rabeeh`

---

##  What Happens Under the Hood?

```text
Your Python Code (.py)
     ↓
Python Compiler
     ↓
Bytecode (.pyc file)
     ↓
Python Virtual Machine (PVM)
     ↓
Execution + Output
```

---

## 📁  Python Execution File Types

| File           | Purpose                      |
| -------------- | ---------------------------- |
| `.py`          | Your source code             |
| `.pyc`         | Compiled bytecode (cached)   |
| `__pycache__/` | Folder to store `.pyc` files |

---

## ✅ Summary

| Step          | What Happens                          |
| ------------- | ------------------------------------- |
| 1. Write code | Python script (`.py`) is written      |
| 2. Parse      | Python checks for syntax errors       |
| 3. Compile    | Code is compiled to bytecode (`.pyc`) |
| 4. Execute    | PVM reads and runs bytecode           |
| 5. Output     | Results are printed or returned       |

---

 











 