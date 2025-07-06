# Functions
 ## Topics


* Defining and Calling Functions
* Parameters, Return values
* Default Args, Keyword Args
* *args, **kwargs (Variadic functions)
* First-class functions
* Anonymous Functions (lambda)
* Higher-order functions
* Closures
* Pure vs Impure Functions
* Currying
* Type Annotations (def add(a: int, b: int) -> int)
* Decorators

# Defining and Calling Functions

 

---

## 🧠 What is a Function?

> A **function** is a reusable block of code that performs a specific task.

It helps you:

* Organize your code
* Avoid repetition (DRY principle: Don’t Repeat Yourself)
* Improve readability and testing

---

 

### 🔧 Syntax:

```python
def function_name(parameters):
    # function body
    return result  # optional
```

---

### 🧪 Example 1: Basic Function

```python
def greet():
    print("Hello, world!")

greet()  # Call the function
```

---

### 🧪 Example 2: Function with Parameters

```python
def greet(name):
    print(f"Hello, {name}!")

greet("Rabeeh")  # ➡️ Hello, Rabeeh!
```

---

### 🧪 Example 3: Function with Return Value

```python
def add(a, b):
    return a + b

result = add(3, 5)
print(result)  # 8
```

---

## ✅ Function Parameters vs Arguments

| Term          | Meaning                                             |
| ------------- | --------------------------------------------------- |
| **Parameter** | Variable inside function definition (`def func(x)`) |
| **Argument**  | Actual value you pass when calling (`func(10)`)     |

---

## 🧠 Types of Function Arguments

```python
def demo(a, b=10, *args, **kwargs):
    pass
```

| Type       | Example            | Description                        |
| ---------- | ------------------ | ---------------------------------- |
| Positional | `func(2, 3)`       | Values matched by position         |
| Default    | `b=10`             | If not passed, uses default        |
| `*args`    | `func(1, 2, 3, 4)` | Collects extra **positional** args |
| `**kwargs` | `func(x=1, y=2)`   | Collects extra **named** args      |

---

### 🧪 Example of `*args` and `**kwargs`

```python
def show(*args, **kwargs):
    print("Args:", args)
    print("Kwargs:", kwargs)

show(1, 2, name="Rabeeh", age=22)
```

---

## 🔁 Returning Multiple Values

```python
def divide(a, b):
    return a // b, a % b

q, r = divide(10, 3)
print(q, r)  # ➡️ 3 1
```

✔️ Python returns multiple values as a **tuple**, and you can **unpack** them.

---

## ❗ Common Mistakes

| Mistake                             | Fix                                           |
| ----------------------------------- | --------------------------------------------- |
| Forgetting to call function         | Use `()` → `greet()`                          |
| Using `print()` instead of `return` | Use `return` if you need the value            |
| Not passing all required args       | Match number and order of required parameters |
| Confusing `*args` and `**kwargs`    | Remember: `*args` = list, `**kwargs` = dict   |

---

## ✅ Summary Table

| Feature            | Explanation                         |
| ------------------ | ----------------------------------- |
| `def` keyword      | Used to define a function           |
| `()`               | Used to call the function           |
| `return` keyword   | Used to send back result (optional) |
| Parameters         | Inside function definition          |
| Arguments          | When calling the function           |
| `*args`/`**kwargs` | Variable-length arguments           |

---

 
