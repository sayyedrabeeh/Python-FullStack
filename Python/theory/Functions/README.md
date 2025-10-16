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
* Django CORS 
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

# Django CORS 

Django is  a Python web framework that allows rapid web application development. Apps developed in Django may need
to interact with other applications hosted on different domains (or even just different ports). For these requests 
to succeed, you’ll need to use cross-origin resource sharing (CORS) in your server.


Luckly in Django there’s already a module that’s easy to install and configure to allow CORS requests and avoid  
errors.

# What Is CORS?

CORS is a mechanism to allow interaction with resources hosted on different domains.

let’s assume you have a web application that lives in domain.com . But, to save user information, the app calls an 
API hosted in another URL—for example, api.domain.com . So, when a request to save data is sent to api.domain.com , 
the server evaluates the requests based on its headers and the request’s source.

If you allow the URL domain.com in the server, it will provide the proper response. If the domain is not allowed, 
the server provides an error. This information exchange occurs using HTTP headers.



#### Errors Involving CORS

CORS is a security feature that web clients (browsers) implement that can make requests to a specific server to fail. Some possible server responses may include
    An unauthorized status (403)
    An error in a preflight request indicating which URLs can send CORS requests

#### preflight request 

As a clarification, a preflight request is a petition that browsers send to the server to discover what HTTP 
methods it accepts in requests. Then, the server can return an error status and a list of CORS-enabled URLs. If the 
server doesn’t include the domain making the request, the browser won’t even perform the actual data request.


### Enabling CORS in Django

Since Django is a web framework, it’s very simple to enable CORS.
Install the CORS module :

        python -m pip install django-cors-headers

then add  This in the installed apps section.

        INSTALLED_APPS = [
        ...
        'corsheaders',
        ...
        ]
Next, add the middleware classes to listen in on server responses. Middleware classes hook on Django’s request/
response processing. You can think of it as a plugin system to modify Django’s input or output.

        MIDDLEWARE = [
        ...,
        'corsheaders.middleware.CorsMiddleware',
        'django.middleware.common.CommonMiddleware',
        ...,
        ]
place the class CorsMiddleware before any other middleware


### Required Settings


Required settings tell the module how to evaluate a request’s origin. From there, the module decides, based on the 
settings you defined, if the origin is valid in order to continue processing the request and to provide a response.

You can set the module to allow requests from specific domains, regular expressions, or all requests. What options 
you should configure will depend on your back end’s purpose. Sometimes all origins are valid, but in other cases, 
you’ll need to narrow them to only a few.

CORS_ALLOWED_ORIGINS
 is the list of origins authorized to make requests. For example, below have specified four origins:

        CORS_ALLOWED_ORIGINS = [
        "https://domain.com",
        "https://api.domain.com",
        "http://localhost:8080",
        "http://127.0.0.1:9000"
        ]
    


