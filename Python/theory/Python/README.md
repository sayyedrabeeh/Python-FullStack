# Python (programming language)

Python is a high-level, general-purpose programming language.Python is dynamically type-checked (Dynamic typing : Types are checked at runtime ,will check the type only when it needs to use it) and garbage-collected (Python automatically manages memory) .

It supports multiple programming paradigms, including structured.object-oriented and functional programming.


## Datatypes

[!Datatypes](datatype.jpg)

### Primitive Datatypes

simple values of data.are typically immutable, meaning their value cannot change after they are created.for storing single values and performing basic operations. In Python, all data values are objects. That means Python has no primitive data types and all the types are reference types. However, Python has built-in data types.
python has four primitive variable types:
---
 1.Integers
 2.Float
 3.Strings
 4.Boolean
---

### Collection Datatpe

Python has 4 built-in data structures that can be used to hold a collection of objects, they are list, tuple, set, and dictionary. They can be distinguished into mutable, immutable, set type, and mappings respectively.
collection types are a subset of non-primitive types.so, all collections are non-primitive, but not all non-primitive types are collections.

#### Lists

Lists are ordered mutable sequences that can be changed after they have been created by adding, removing, or changing objects. Lists can be declared by using square brackets “[]”
        eg: a = [1,2,3,4,5]

#### Tuples

Tuples are ordered immutable sequence that stores multiple items in a single variable, meaning it cannot be changed after it has been created. A tuple can be created by a pair of parenthesis and comma-separated objects,
        eg: a = (1,2,3,4,5)

Single object tuples are referred to as a singleton. It can be created by using a trailing comma after the object, or else python identifies it as a string or integer.
        eg : a = (10,)
Commas are what makes a tuple, as parentheses are optional.
        eg : a = 1,2,3,4

#### Sets

 that do not support duplicated objects and as such, they cannot be indexed. ets can be created by using curly brackets using the set() constructor.

        eg : a = {a,b,c,d}
         a = set((1,2,3,4,5))

#### Dictionary

A dictionary is an unordered set of key/value pairs. Each unique key has a value.duplicates are not allowed, as a dictionary cannot have multiple items with the same key, because the values will overwrite and the most recent value will be returned.
        eg : a = {
            1:2,
            3:4
        }        

### Non-Primitive Data Types

Non-primitive data types, also known as complex or composite data types, are data types that are derived from primitive data types. They can store multiple values or more complex structures of data.
Unlike primitive types, non-primitive data types are mutable, meaning their contents can be changed.


##  Type Casting


Type casting, or type conversion, refers to converting a variable from one data type to another in Python. For 
example, if you have a variable containing a string number, such as "27", you may need to convert it to an integer 
before performing arithmetic operations. Otherwise, Python will interpret "27" as a string and add it to other 
strings instead of performing arithmetic.

Python provides two types of type casting:
---
  1 : Explicit Type Casting: Where the programmer manually converts one data type into another.
  2 : Implicit Type Casting (Automatic Type Conversion): Where Python automatically converts one data type to 
      another to prevent data loss or errors.
---


## F-String

 efficient way to interpolate variables, objects, and expressions directly into strings. By prefixing a string with 
 f or F, you can embed expressions within curly braces ({}), which are evaluated at runtime.
 This makes f-strings faster and more readable compared to older approaches like the modulo (%) operator or the 
 string .format() method.
---
Before f-strings (introduced in Python 3.6), there were three main ways to do string interpolation (i.e., inserting 
variables into strings):
<pre>
  1 : % Operator (Old-style formatting)
        name = "Alice"
        age = 30
        message = "My name is %s and I am %d years old." % (name, age)
        print(message)
        
  2 : str.format() Method (New-style formatting)
        name = "Alice"
        age = 30
        message = "My name is {} and I am {} years old.".format(name, age)
        print(message)

  3 : String Concatenation (Not recommended)
        name = "Alice"
        age = 30
        message = "My name is " + name + " and I am " + str(age) + " years old."
        print(message)
</pre>
F-strings joined the party in Python 3.6 with PEP 498. Also called formatted string literals,You can embed almost 
any Python expression in an f-string. This allows you to do some nifty things.
---
> f"{2 * 21}"
When Python runs this f-string, it multiplies 2 by 21 and immediately interpolates the resulting value into the 
final string


You can use a variable name followed by an equal sign (=) in an f-string to create a self-documented expression. 
When Python runs the f-string, it builds an expression-like string containing the variable’s name, the equal sign, 
and the variable’s current value.

<pre>
variable = "Some mysterious value"

print(f"{variable = }")

</pre>

### Magic Methods

> customizing  classes using special methods, also known as magic methods or dunder methods. 


A special method is a method whose name starts and ends with a double underscore. These methods have special 
meanings for Python.Python automatically calls magic methods as a response to certain operations, such as 
instantiation, sequence indexing, attribute managing, and much more, All these methods support specific feature.

---
>A method that is called implicitly by Python to execute a certain operation on a type, such as addition. Such 
methods have names starting and ending with double underscores.

###  <u> **.__init__()** </u>


When creating custom classes in Python, probably the first and most common method that you implement is .__init__
(). This method works as an initializer because it allows you to provide initial values to any instance attributes 
that you define in your classes.


<pre>
>>> class Point:
...     def __init__(self, x, y):
...         self.x = x
...         self.y = y
...

>>> point = Point(21, 42)
>>> point.x
21
>>> point.y
42
</pre>

### <u> **__new__()** </u>

When you call a class constructor to create a new instance of a class, Python implicitly calls the .__new__() 
method as the first step in the instantiation process. This method is responsible for creating and returning a new 
empty object of the underlying class. Python then passes the just-created object to .__init__() for initialization.

The default implementation of .__new__() is enough for most practical use cases. So, you probably won’t need to 
write a custom implementation of .__new__() in most cases.



you can use .__new__() to create subclasses of immutable types, such as int, float, tuple, and str.


<pre>

>>> class Storage(float):
...     def __new__(cls, value, unit):
...         instance = super().__new__(cls, value)
...         instance.unit = unit
...         return instance
...


</pre>

In this example, you’ll note that .__new__() is a class method because it gets the current class (cls) rather than 
the current instance (self) as an argument.

Then, you run three steps. First, you create a new instance of the current class, cls, by calling .__new__() on the 
float class through the built-in super() function. This call creates a new instance of float and initializes it 
using value as an argument.

Then, you customize the new instance by dynamically attaching a .unit attribute to it. Finally, you return the new 
instance to meet the default behavior of .__new__().


how this class works in practice:

<pre>
>>> disk = Storage(1024, "GB")

>>> disk
1024.0
>>> disk.unit
'GB'

>>> isinstance(disk, float)
True
</pre>

### <u>**.__str__() v/s .__repr__()**   </u>


If you want to provide user-friendly output, then you can use the .__str__() method. On the other hand, when you 
need to provide developer-friendly output, then you can use the .__repr__() method. These methods support two 
different string representations for Python objects.

---

The .__str__() special method returns a human-readable string representation of the object.Python calls this method 
when you call the built-in str() function, passing an instance of the class as an argument.

Python also calls this method when you use the instance as an argument to the print() and format() functions. The 
method is meant to provide a string that’s understandable.

<pre>

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __str__(self):
        return f"I'm {self.name}, and I'm {self.age} years old."

</pre>

 example of how your class works.

<pre>

>>> from person import Person

>>> jane = Person("Jane Doe", 25)

>>> str(jane)
"I'm Jane Doe, and I'm 25 years old."

>>> print(jane)
I'm Jane Doe, and I'm 25 years old.

</pre>


When you use an instance of Person as an argument to str() or print(), you get a string representation of the 
object on your screen.

---



The .__repr__() method returns a string representation of an object that’s targeted at the developer.


<pre>
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __str__(self):
        return f"I'm {self.name}, and I'm {self.age} years old."

   def __repr__(self):
        return f"{type(self).__name__}(name='{self.name}', age={self.age})"   

</pre>

<pre>
>>> from person import Person

>>> john = Person("John Doe", 35)

>>> john   // working  only in shell 
Person(name='John Doe', age=35)

>>> print(repr(john))
"Person(name='John Doe', age=35)"
</pre>

### <u> **operator overloading.** </u>

Operator overloading means providing additional functionality to the operators. You can do this with most built-in 
types and their specific supported operators. However, that’s not all you can do with the special methods that 
support Python operators. You can also use these methods to support some operators in your custom classes.

Operator overloading means giving extended meaning to standard operators (like +, -, *, etc.) when used with custom objects (your own classes).

#### 🧮 Operator Overloading Methods in Python

| Operator | Method Name             | Description                     |
|----------|-------------------------|---------------------------------|
| `+`      | `__add__(self, other)`  | Addition                        |
| `-`      | `__sub__(self, other)`  | Subtraction                     |
| `*`      | `__mul__(self, other)`  | Multiplication                  |
| `/`      | `__truediv__(self, other)` | True Division               |
| `//`     | `__floordiv__(self, other)`| Floor Division              |
| `%`      | `__mod__(self, other)`  | Modulo (Remainder)             |
| `**`     | `__pow__(self, other[, modulo])` | Exponentiation       |

<pre>
class Number:
    def __init__(self, value):
        self.value = value

    def __add__(self, other):
        return Number(self.value + other.value)

</pre>

----
>>> Just like the + operator:

2 + 3 → adds numbers

'Hello' + 'World' → joins strings

You can define what + does for your own class, like combining two Point or Vector objects.
----

<pre>
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    # Overload + operator
    def __add__(self, other):
        return Point(self.x + other.x, self.y + other.y)

    def __str__(self):
        return f"({self.x}, {self.y})"

p1 = Point(2, 3)
p2 = Point(4, 5)
p3 = p1 + p2  # Uses __add__
print(p3)     # Output: (6, 8)

</pre>

| Without Overloading  | With Overloading             |
| -------------------- | ---------------------------- |
| `p1.add(p2)`         | `p1 + p2`                    |
| `v1.multiply(v2)`    | `v1 * v2`                    |
| Manual function call | Cleaner, more natural syntax |



#### 🔁 Right-Hand Operator Overloading Methods in Python

When the **left-hand operand** doesn’t support the operation (or returns `NotImplemented`), Python tries the corresponding **right-hand method**.

| Operator | Right-Hand Method         | Used When                                   |
|----------|---------------------------|---------------------------------------------|
| `+`      | `__radd__(self, other)`   | `other + self` when `other.__add__` fails   |
| `-`      | `__rsub__(self, other)`   | `other - self` when `other.__sub__` fails   |
| `*`      | `__rmul__(self, other)`   | `other * self` when `other.__mul__` fails   |
| `/`      | `__rtruediv__(self, other)`| `other / self` when `other.__truediv__` fails |
| `//`     | `__rfloordiv__(self, other)`| `other // self` when `other.__floordiv__` fails |
| `%`      | `__rmod__(self, other)`   | `other % self` when `other.__mod__` fails   |
| `**`     | `__rpow__(self, other[, modulo])` | `other ** self` when `other.__pow__` fails |


<pre>

class CustomNumber:
    def __init__(self, value):
        self.value = value

    def __add__(self, other):
        if isinstance(other, CustomNumber):
            print("Called __add__")
            return CustomNumber(self.value + other.value)
        return NotImplemented  # Triggers __radd__ if available on other

    def __radd__(self, other):
        print("Called __radd__")
        return CustomNumber(self.value + other)  # assume `other` is int or float

    def __str__(self):
        return f"CustomNumber({self.value})"


a = CustomNumber(10)
b = CustomNumber(20)

# ✅ Left-hand __add__
result1 = a + b
print(result1)  # Output: CustomNumber(30)

# ✅ Right-hand __radd__
result2 = 5 + a   # int + CustomNumber —> triggers __radd__
print(result2)   # Output: CustomNumber(15)

# ✅ What happens here?
result3 = a + 5   # CustomNumber + int —> __add__ returns NotImplemented —> __radd__ not used because int doesn't have it
print(result3)    # TypeError


</pre>


### <u>**Introspection** </u>

### 🔍 What is **Introspection** in Python?

**Introspection** is the ability of a Python program to **examine the type or properties of an object at runtime**.

In simple words, Python lets you ask questions like:

* “What type is this object?”
* “What attributes and methods does it have?”
* “Where is this object defined?”
* “Is this a class, a function, or a module?”

---

## ✅ Why is Introspection useful?

* Debugging
* Writing dynamic or generic code
* Understanding third-party libraries
* Auto-documentation and tools like `dir()`, `help()`

---

## 📦 Common Introspection Tools in Python

| Function / Tool             | Purpose                                                    |
| --------------------------- | ---------------------------------------------------------- |
| `type(obj)`                 | Returns the type of `obj`                                  |
| `id(obj)`                   | Returns the unique memory address of `obj`                 |
| `isinstance(obj, cls)`      | Checks if `obj` is an instance of class `cls`              |
| `issubclass(cls1, cls2)`    | Checks if `cls1` is a subclass of `cls2`                   |
| `dir(obj)`                  | Lists all attributes and methods of `obj`                  |
| `hasattr(obj, attr)`        | Checks if `obj` has an attribute named `attr`              |
| `getattr(obj, attr)`        | Gets the value of the attribute `attr` from `obj`          |
| `setattr(obj, attr, value)` | Sets the value of `attr` in `obj`                          |
| `callable(obj)`             | Checks if the object is callable (like functions, methods) |
| `globals()`                 | Returns current global symbol table                        |
| `locals()`                  | Returns current local symbol table                         |
| `help(obj)`                 | Opens the help/manual page for the object                  |

---

## 🧪 Example

```python
class Person:
    def __init__(self, name):
        self.name = name

p = Person("Rabeeh")

print(type(p))             # <class '__main__.Person'>
print(isinstance(p, Person))  # True
print(dir(p))              # ['__class__', '__delattr__', ..., 'name']
print(hasattr(p, 'name'))  # True
print(getattr(p, 'name'))  # Rabeeh
print(callable(p))         # False
print(callable(p.__init__))  # True
```

---

## 🧠 Advanced Introspection (via `inspect` module)

```python
import inspect

print(inspect.getmembers(p))  # List all members (methods + attributes)
print(inspect.isclass(Person))  # True
print(inspect.getsource(Person))  # Shows source code of the class
```

---

## 🔥 Summary

| Introspection lets you...       | With tools like...                |
| ------------------------------- | --------------------------------- |
| Know an object’s type           | `type()`                          |
| List its methods and attributes | `dir()`                           |
| Check if it's a class/function  | `inspect.isclass()`, `callable()` |
| Dynamically access attributes   | `getattr()`, `setattr()`          |

---

 
### ___Iterators__

you need two special methods. By implementing these methods, you’ll take control of the iteration process.
methods that make up an iterator. They’re known as the iterator protocol.

> .__iter__()	Called to initialize the iterator. It must return an iterator object.
> .__next__()	Called to iterate over the iterator. It must return the next value in the data stream.


. In .__iter__(), you typically return self, the current object. In .__next__(), you need to return the next value 
from the data stream in a sequence. This method must raise a StopIteration when the stream of data is exhausted.

```python

numbers = [10, 20, 30]

# Create an iterator
iterator = iter(numbers)

# Get elements one by one
print(next(iterator))  # 10
print(next(iterator))  # 20
print(next(iterator))  # 30

# If you call next again, you'll get StopIteration
# print(next(iterator))  # Uncomment to see error


class CountUpTo:
    def __init__(self, max):
        self.max = max
        self.current = 1

    def __iter__(self):
        return self  # The object itself is the iterator

    def __next__(self):
        if self.current <= self.max:
            num = self.current
            self.current += 1
            return num
        else:
            raise StopIteration

counter = CountUpTo(3)

for number in counter:
    print(number)

# Output:
# 1
# 2
# 3



```

## *__OPPS IN PYTHON__*


Object-oriented programming (OOP) in Python helps you structure your code by grouping related data and behaviors 
into objects. You start by defining classes, which act as blueprints, and then create objects from them. OOP 
simplifies modeling real-world concepts in your programs and enables you to build systems that are more reusable 
and scalable.


classes as blueprints for objects. These objects contain data and the methods needed to manipulate that data.
**The four key concepts of OOP in Python** are encapsulation, inheritance, abstraction, and polymorphism

**four tenants of OOP:**

1. ***Encapsulation*** allows you to bundle data (attributes) and behaviors (methods) within a class to create a 
cohesive unit. By defining methods to control access to attributes and its modification, encapsulation helps 
maintain data integrity and promotes modular, secure code.
2. ***Inheritance*** enables the creation of hierarchical relationships between classes, allowing a subclass to 
inherit attributes and methods from a parent class. This promotes code reuse and reduces duplication.

3. ***Abstraction*** focuses on hiding implementation details and exposing only the essential functionality of an 
object. 
By enforcing a consistent interface, abstraction simplifies interactions with objects, allowing developers to focus 
on what an object does rather than how it achieves its functionality.
4. ***Polymorphism*** allows you to treat objects of different types as instances of the same base type, as long as 
they implement a common interface or behavior. Python’s duck typing make it especially suited for polymorphism, as 
it  allows you to access attributes and methods on objects without needing to worry about their actual class


>objects are at the center of object-oriented programming in Python. In other programming paradigms, objects only represent the data. In OOP, they additionally inform the overall structure of the program.

