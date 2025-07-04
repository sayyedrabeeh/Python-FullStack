# Control Flow & Logi
 
 ## Topics

* If, Elif, Else
* For, While loops
* break, continue, pass
* assert, with context manager
* Ternary operator, match-case (Python 3.10+)
* Operators:
  * Arithmetic, Comparison, Logical
  * Identity (is), Membership (in)
  * Bitwise, Assignment


# If, Elif, Else

 **`if`, `elif`, and `else`** statements in Python — the foundation of **decision-making** in programming.

---

##  What Are `if`, `elif`, and `else`?

> They let your program **make choices** based on conditions.

###  Syntax Overview:

```python
if condition1:
    # do this
elif condition2:
    # do that
else:
    # do something else
```

---

##  1. `if` Statement

> Runs a block of code **only if** a condition is `True`.

```python
age = 18

if age >= 18:
    print("You can vote.")
```

✅ Output: `You can vote.`

---

## ✅ 2. `elif` Statement

> Stands for "**else if**" — checks another condition **if the previous one is False**.

```python
age = 16

if age >= 18:
    print("You can vote.")
elif age >= 13:
    print("You're a teenager.")
```

✅ Output: `You're a teenager.`

---

## ✅ 3. `else` Statement

> Catches **everything else** when no `if` or `elif` condition is `True`.

```python
age = 10

if age >= 18:
    print("Adult")
elif age >= 13:
    print("Teenager")
else:
    print("Child")
```

✅ Output: `Child`

---

##  Real-World Example

```python
temperature = 30

if temperature > 35:
    print("It's too hot!")
elif temperature > 20:
    print("Nice weather.")
else:
    print("It's cold.")
```

✅ Output: `Nice weather.`

---

##  Nested `if`

> You can put `if` statements **inside** others for deeper logic:

```python
age = 20
has_id = True

if age >= 18:
    if has_id:
        print("Entry allowed.")
    else:
        print("ID required.")
```

---

##  Indentation Matters!

```python
if True:
print("This will cause an error")  # ❌ Wrong! No indentation
```

✅ Use **4 spaces** or **1 tab** consistently.

---

## ✅ Summary

| Keyword | Purpose                                   |
| ------- | ----------------------------------------- |
| `if`    | Checks a condition                        |
| `elif`  | Checks another condition if `if` is False |
| `else`  | Runs when all above conditions are False  |

---


# For, While loops

  two main types of loops in Python — **`for`** and **`while`** . These are the tools Python uses for **repeating tasks**.

---

##  Why Do We Use Loops?

> Loops let you **run a block of code multiple times** without rewriting it.

---

##  1. `for` Loop

> Best when you **know how many times** you want to loop or you're looping through a **sequence** (like a list, string, range, etc.).

###  Syntax:

```python
for item in iterable:
    # do something with item
```

---

###  Example 1: Loop over a list

```python
fruits = ["apple", "banana", "cherry"]

for fruit in fruits:
    print(fruit)
```

✅ Output:

```
apple
banana
cherry
```

---

###  Example 2: Loop using `range()`

```python
for i in range(1, 6):
    print(i)
```

✅ Output:

```
1
2
3
4
5
```

---

###  Real-Life Analogy:

Think of `for` loop like a **playlist**: You go through each song one by one in order.

---

##  2. `while` Loop

> Best when you **don't know exactly how many times** you want to loop — loop until a **condition becomes False**.

###  Syntax:

```python
while condition:
    # do something
```

---

### 🧪 Example 1:

```python
count = 1

while count <= 5:
    print(count)
    count += 1
```

✅ Output:

```
1
2
3
4
5
```

---

###  Real-Life Analogy:

`while` loop is like **watching YouTube until your battery dies** — you keep going until a condition is no longer true.

---

##  Control Keywords (Common to both loops)

| Keyword    | Purpose                                    |
| ---------- | ------------------------------------------ |
| `break`    | Exit the loop immediately                  |
| `continue` | Skip the current iteration and go to next  |
| `else`     | Runs after the loop **only if not broken** |

---

###  `break` example:

```python
for i in range(10):
    if i == 5:
        break
    print(i)
```

✅ Output: `0 1 2 3 4`

---

###  `continue` example:

```python
for i in range(5):
    if i == 2:
        continue
    print(i)
```

✅ Output: `0 1 3 4`

---

###  `else` with loop:

```python
for i in range(3):
    print(i)
else:
    print("Done looping!")
```

✅ Output:

```
0
1
2
Done looping!
```

---

## 🧼 Loop Best Practices

| Good Practice                      | Why?                        |
| ---------------------------------- | --------------------------- |
| Use `for` with sequences           | Clear and readable          |
| Avoid infinite `while` loops       | Unless you really need them |
| Use `break` & `continue` sparingly | To avoid confusion          |

---

## ✅ Summary

| Loop Type | Use When                             | Example                   |
| --------- | ------------------------------------ | ------------------------- |
| `for`     | You know what you're looping through | List, range, string, etc. |
| `while`   | You loop based on a condition        | `while battery > 0:`      |

---

 # break, continue, pass

  the three control statements in Python: **`break`**, **`continue`**, and **`pass`** .

---

##  What Are `break`, `continue`, and `pass`?

These are **loop control keywords** used to control the flow of loops and conditionals:

| Keyword    | What it does                                  |
| ---------- | --------------------------------------------- |
| `break`    | Exits the loop **entirely**                   |
| `continue` | Skips the **current iteration** and continues |
| `pass`     | **Does nothing** (a placeholder)              |

---

##  1. `break`

> Used to **exit a loop** when a certain condition is met.

###  Example:

```python
for i in range(10):
    if i == 5:
        break
    print(i)
```

✅ Output:

```
0
1
2
3
4
```

🔍 When `i == 5`, the loop **breaks** immediately.

---

###  Real-Life Analogy:

Imagine you're looking for a name in a list — once you find it, you stop looking.

---

##  2. `continue`

> Skips the **current iteration** and moves to the **next one**.

###  Example:

```python
for i in range(5):
    if i == 2:
        continue
    print(i)
```

✅ Output:

```
0
1
3
4
```

🔍 When `i == 2`, the `print(i)` is skipped.

---

###  Real-Life Analogy:

You're checking papers, and you skip the ones that say "Already graded."

---

##  3. `pass`

> Does **nothing**. Used as a **placeholder** when code is required **but you don’t want to write anything yet**.

###  Example:

```python
for i in range(5):
    if i == 3:
        pass  # do nothing
    print(i)
```

✅ Output:

```
0
1
2
3
4
```

🔍 When `i == 3`, Python just sees `pass` and moves on.

---

### Use Cases for `pass`:

* Empty **function**, **class**, or **if/loop** blocks during development

```python
def todo():
    pass  # You’ll implement this later
```

---

## 🔁 Summary Table

| Keyword    | Meaning                    | Use Case Example                    |
| ---------- | -------------------------- | ----------------------------------- |
| `break`    | Exit the loop completely   | Stop when a condition is met        |
| `continue` | Skip to the next iteration | Skip odd numbers, or invalid inputs |
| `pass`     | Do nothing (placeholder)   | Empty class/function during setup   |

---

##  Combined Example:

```python
for i in range(6):
    if i == 2:
        continue  # skip this iteration
    elif i == 4:
        break     # exit the loop
    else:
        print(i)
```

✅ Output:

```
0
1
3
```

---

 
# assert, with context manager


  `assert` and the `with` **context manager** — both are often misunderstood but super useful when used right. 
---

##  1. `assert` — For Debugging and Validations

> `assert` is used to **test if a condition is True**.
> If it's **False**, Python raises an **`AssertionError`** and **stops** the program.

---

###  Why use it?

* To **validate assumptions** in your code while debugging or testing.
* Makes bugs obvious early.

---

###  Syntax:

```python
assert condition, "Optional error message"
```

---

###  Example 1: Valid use

```python
x = 5
assert x > 0  # ✅ OK
```

✅ Nothing happens because the condition is True.

---

###  Example 2: Assertion fails

```python
age = -3
assert age >= 0, "Age cannot be negative"
```

❌ Output:

```
AssertionError: Age cannot be negative
```

---

###  Don't use for user input validation in production

```python
# Bad use (this should be an if/raise instead)
assert input("Enter password") == "admin"
```

Why? Because assertions can be **disabled** by running Python with `-O` (optimized mode).

---

##  2. `with` Statement — Context Manager

> `with` is used to **wrap the execution** of a block with methods that manage **resources** (like files, network, or database connections).

###  Purpose:

* Automatically handles **setup and cleanup**
* Makes your code **cleaner and safer**

---

###  File Example (Most Common)

Without `with`:

```python
file = open("data.txt", "r")
data = file.read()
file.close()
```

With `with`:

```python
with open("data.txt", "r") as file:
    data = file.read()
# file is automatically closed here
```

 This is **better** because:

* The file is **automatically closed**, even if an error occurs
* No need to remember `.close()`

---

### 🔁 What’s Happening Behind the Scenes?

A context manager:

* Has `__enter__()` and `__exit__()` methods
* `__enter__()` runs at the start of the block
* `__exit__()` runs when the block ends (even if there's an error)

---

###  Example: Custom Context Manager

```python
class MyContext:
    def __enter__(self):
        print("Entering context...")
        return "Inside"

    def __exit__(self, exc_type, exc_val, exc_tb):
        print("Exiting context...")

with MyContext() as val:
    print(val)
```

✅ Output:

```
Entering context...
Inside
Exiting context...
```

---

## 🧠 Real-Life Analogy

Imagine `with` like borrowing a car:

* `__enter__`: You get the keys
* Inside block: You drive
* `__exit__`: You return the keys safely, no matter what

---

## ✅ Summary

| Feature  | Purpose                           | Example Use Case       |
| -------- | --------------------------------- | ---------------------- |
| `assert` | Debug/check internal assumptions  | `assert age > 0`       |
| `with`   | Manage resources cleanly & safely | `with open(...) as f:` |

---

 

To see all available context managers:

```python
from contextlib import contextmanager
```

You can even write your own with `@contextmanager` decorator.

---
 
 