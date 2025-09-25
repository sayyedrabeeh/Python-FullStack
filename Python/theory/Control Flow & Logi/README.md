# Control Flow & Log

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
 
# Ternary operator, match-case (Python 3.10+)


Excellent topics! Let’s cover both:

1. ✅ **Ternary Operator** — Python’s way of writing `if-else` in one line
2. 🔀 **match-case** — New in **Python 3.10+**, similar to `switch-case` in other languages
 

---

## ✅ 1. **Ternary Operator (Conditional Expression)**

> A **one-line if-else statement** that returns a value based on a condition.

### 📌 Syntax:

```python
value_if_true if condition else value_if_false
```

---

### 🧪 Example 1:

```python
age = 18
status = "Adult" if age >= 18 else "Minor"
print(status)
```

✅ Output:

```
Adult
```

---

### 🧪 Example 2:

```python
a = 5
b = 10
max_value = a if a > b else b
print(max_value)
```

✅ Output:

```
10
```

---

###  When to use:

* For short, **simple conditions**
* Inside assignments, return statements, or prints

---

###  Don’t overuse it:

Bad readability when nesting ternary operators:

```python
# Hard to read!
x = "A" if grade > 90 else "B" if grade > 80 else "C"
```

---

##  2. **match-case (Python 3.10+)**

> Like a `switch-case` in other languages — lets you compare **a single variable to multiple patterns**.

### 📌 Syntax:

```python
match variable:
    case value1:
        # code block
    case value2:
        # code block
    case _:
        # default case
```

---

### 🧪 Example 1:

```python
day = "Sunday"

match day:
    case "Monday":
        print("Start of the week")
    case "Friday":
        print("Weekend is near")
    case "Sunday":
        print("It's holiday!")
    case _:
        print("Normal day")
```

✅ Output:

```
It's holiday!
```

---

###  Example 2: Using multiple values

```python
command = "start"

match command:
    case "start" | "run":
        print("Program started")
    case "stop":
        print("Program stopped")
    case _:
        print("Unknown command")
```

---

###  Why use match-case?

* Cleaner than multiple `if-elif-else`
* Supports complex pattern matching (tuples, classes, guards)

---

###  Python 3.10+ only!

Check your version:

```bash
python --version
```

---

## ✅ Summary Table

| Feature        | Use Case                           | Example                            |
| -------------- | ---------------------------------- | ---------------------------------- |
| Ternary (`?:`) | One-line `if-else`                 | `x = 10 if flag else 0`            |
| match-case     | Compare 1 variable to many options | `match command: case "start": ...` |

---
# Operators:
  ### Arithmetic, Comparison, Logical
  ### Identity (is), Membership (in)
  ### Bitwise, Assignment

 

---
 

> Operators are **symbols** that perform operations on values or variables.

---

###  1. **Arithmetic Operators**

Used for basic math operations.

| Operator | Meaning        | Example   | Result  |
| -------- | -------------- | --------- | ------- |
| `+`      | Addition       | `3 + 2`   | `5`     |
| `-`      | Subtraction    | `5 - 1`   | `4`     |
| `*`      | Multiplication | `4 * 2`   | `8`     |
| `/`      | Division       | `10 / 3`  | `3.333` |
| `//`     | Floor Division | `10 // 3` | `3`     |
| `%`      | Modulus        | `10 % 3`  | `1`     |
| `**`     | Exponentiation | `2 ** 3`  | `8`     |

---

###  2. **Comparison Operators (Relational)**

Used to compare values. They always return `True` or `False`.

| Operator | Meaning          | Example  | Result  |
| -------- | ---------------- | -------- | ------- |
| `==`     | Equal            | `5 == 5` | `True`  |
| `!=`     | Not equal        | `5 != 3` | `True`  |
| `>`      | Greater than     | `5 > 2`  | `True`  |
| `<`      | Less than        | `2 < 5`  | `True`  |
| `>=`     | Greater or equal | `5 >= 5` | `True`  |
| `<=`     | Less or equal    | `4 <= 2` | `False` |

---

###  3. **Logical Operators**

Used to combine multiple conditions (Booleans).

| Operator | Meaning                      | Example            | Result  |
| -------- | ---------------------------- | ------------------ | ------- |
| `and`    | True if both are True        | `x > 5 and x < 10` | `True`  |
| `or`     | True if at least one is True | `x > 5 or x < 2`   | `True`  |
| `not`    | Reverses the condition       | `not(x > 5)`       | `False` |

---

###  4. **Identity Operators**

Used to compare **object identity** (i.e., whether they are the **same object in memory**).

| Operator | Meaning         | Example      | Result       |
| -------- | --------------- | ------------ | ------------ |
| `is`     | Same object     | `x is y`     | `True/False` |
| `is not` | Not same object | `x is not y` | `True/False` |

🧪 Example:

```python
x = [1, 2]
y = x
z = [1, 2]

print(x is y)    # True (same object)
print(x is z)    # False (same content, different objects)
```

---

###  5. **Membership Operators**

Used to test if a value is **in** a container (like list, tuple, dict, string).

| Operator | Meaning                 | Example            | Result |
| -------- | ----------------------- | ------------------ | ------ |
| `in`     | Present in sequence     | `3 in [1,2,3]`     | `True` |
| `not in` | Not present in sequence | `5 not in [1,2,3]` | `True` |

---

###  6. **Bitwise Operators**

Used to compare binary (bit-level) values.

| Operator | Meaning     | Example  | Result |     |     |
| -------- | ----------- | -------- | ------ | --- | --- |
| `&`      | AND         | `5 & 3`  | `1`    |     |     |
| \`       | \`          | OR       | \`5    | 3\` | `7` |
| `^`      | XOR         | `5 ^ 3`  | `6`    |     |     |
| `~`      | NOT         | `~5`     | `-6`   |     |     |
| `<<`     | Left shift  | `2 << 2` | `8`    |     |     |
| `>>`     | Right shift | `8 >> 2` | `2`    |     |     |

📌 Binary of `5` is `0b0101`, `3` is `0b0011`

---

###  7. **Assignment Operators**

Used to assign values to variables.

| Operator | Meaning                 | Example   | Same As      |
| -------- | ----------------------- | --------- | ------------ |
| `=`      | Assign                  | `x = 5`   | `x = 5`      |
| `+=`     | Add and assign          | `x += 3`  | `x = x + 3`  |
| `-=`     | Subtract and assign     | `x -= 2`  | `x = x - 2`  |
| `*=`     | Multiply and assign     | `x *= 4`  | `x = x * 4`  |
| `/=`     | Divide and assign       | `x /= 2`  | `x = x / 2`  |
| `//=`    | Floor divide and assign | `x //= 3` | `x = x // 3` |
| `%=`     | Modulus and assign      | `x %= 2`  | `x = x % 2`  |
| `**=`    | Power and assign        | `x **= 2` | `x = x ** 2` |

---

##  Summary Cheat Sheet

| Category   | Examples                            |                           |
| ---------- | ----------------------------------- | ------------------------- |
| Arithmetic | `+`, `-`, `*`, `/`, `**`, `%`, `//` |                           |
| Comparison | `==`, `!=`, `>`, `<`, `>=`, `<=`    |                           |
| Logical    | `and`, `or`, `not`                  |                           |
| Identity   | `is`, `is not`                      |                           |
| Membership | `in`, `not in`                      |                           |
| Bitwise    | `&`, \`                             | `, `^`, `\~`, `<<`, `>>\` |
| Assignment | `=`, `+=`, `-=`, `*=`, etc.         |                           |

---

 

