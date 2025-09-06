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



### ***Classes vs Instances***

A class is a blueprint for how to define something. It doesn’t actually contain any data. The Dog class specifies 
that a name and an age are necessary for defining a dog, but it doesn’t contain the name or age of any specific dog.

While the class is the blueprint, an instance is an object that’s built from a class and contains real data. An 
instance of the Dog class is not a blueprint anymore. It’s an actual dog with a name, like Miles, who’s four years 
old.


You start all class definitions with the class keyword, then add the name of the class and a colon. Python will 
consider any code that you indent below the class definition as part of the class’s body.



On the other hand, class attributes are attributes that have the same value for all class instances. You can define 
a class attribute by assigning a value to a variable name outside of .__init__().

```python

class Dog:
    species = "Canis familiaris"

    def __init__(self, name, age):
        self.name = name
        self.age = age



```

You define class attributes directly beneath the first line of the class name and indent them by four spaces. You 
always need to assign them an initial value. When you create an instance of the class, then Python automatically 
creates and assigns class attributes to their initial values.



One of the biggest advantages of using classes to organize data is that instances are guaranteed to have the 
attributes you expect. All Dog instances have .species, .name, and .age attributes, so you can use those attributes 
with confidence, knowing that they’ll always return a value.

Although the attributes are guaranteed to exist, their values can change dynamically:


```python
>>> buddy.age = 10
>>> buddy.age
10

>>> miles.species = "Felis silvestris"
>>> miles.species
'Felis silvestris'

```
***Instance methods*** are functions that you define inside a class and can only call on an instance of that class. 
Just like .__init__(), an instance method always takes self as its first parameter.

### ***Inheritance***

Inheritance is the process by which one class takes on the attributes and methods of another. Newly formed classes 
are called child classes, and the classes that you derive child classes from are called parent classes.

Child classes can override or extend the attributes and methods of parent classes. In other words, child classes 
inherit all of the parent’s attributes and methods but can also specify attributes and methods that are unique to 
themselves.

### ***Encapsulation***

Encapsulation refers to the bundling of data and methods within a class. It allows us to control access to class 
members, making them private or public. This principle enhances data security, maintains code integrity, and 
reduces dependencies.

In Python, encapsulation is achieved by using the _ prefix for member variables and methods. For example, if we 
have a Person class.

```python
class Person:
    def __init__(self, name, age):
        self._name = name
        self._age = age

    def _get_age(self):
        return self._age


```

Here, the _name and _age attributes are considered private and the _get_age() method is private as well. These are 
intended to be used only within the class, and not directly accessed or modified by code outside of the class.


Encapsulation has several benefits in Python:
 1. It allows for code modularity, which makes it easier to change and maintain the codebase.
 2. It ensures that the internal state of an object is only modified in a controlled way, which helps to prevent bugs and maintain consistency.
 3. It makes the code more robust and secure since it is more difficult for other parts of the program to accidentally or maliciously change the internal state of an object
 4. It makes the code more flexible since the internal implementation can be changed without affecting the code that uses the class.

it’s important to note that, in python, encapsulation is not enforced by the interpreter and relies on the 
programmer to not access private variables or methods directly. It’s more of a convention and a way to signal to 
others that these methods or attributes are intended to be used only by the class.

### ***Polymorphism***

Polymorphism is the ability of objects to take on many forms. It allows us to define methods in different classes 
with the same name but different implementations. Polymorphism promotes code flexibility, as objects can be used 
interchangeably even if they belong to different classes.


 polymorphism is achieved through polymorphic functions, which are functions that can work with multiple types of 
 input. For example, the len() function can be used to find the length of a string, a list, or other types of data.

 Python also supports polymorphism through method overriding and method overloading. Method overriding occurs when a subclass provides a different implementation of a method that is already defined in the parent class. This allows for objects of the subclass to have a different behavior than objects of the parent class.

For example:
```python
class Shape:
    def area(self):
        pass

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height
    def area(self):
        return self.width * self.height

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    def area(self):
        return 3.14 * (self.radius ** 2)

```
both Rectangle and Circle class inherits from the Shape class and have different implementations for area method. 
When area is called on an instance of Rectangle and Circle class, it will call the overridden method.

### ***Abstraction***

Abstraction focuses on providing simplified interfaces while hiding complex underlying implementations. By defining 
abstract classes and methods, we can enforce consistent behavior across subclasses while allowing specific 
implementations to be developed separately.

refers to the practice of hiding the implementation details of an object from other parts of the program and 
providing only a simplified public interface to interact with the object.

In Python OOPs concepts, data abstraction is achieved through the use of abstract classes and interfaces.
An abstract class is a class that defines one or more abstract methods, which are methods that have no 
implementation. A subclass is required to implement these methods before an instance of the class can be created.

For example:

```python
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass
    @abstractmethod
    def perimeter(self):
        pass

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height
    def area(self):
        return self.width * self.height
    def perimeter(self):
        return 2 * (self.width + self.height)

```

the Shape class is an abstract class, which has two abstract methods, area and perimeter. The subclass Rectangle 
implements these methods before an instance of the class can be created.

An interface in python is just an abstract class with no implementations for any of its methods. Python has no 
inbuilt support for interface but we can use ABC(Abstract base class) from python’s abc module as an interface.



### ***scope *** && LEGB rule

The scope of a variable in Python determines where in your code that variable is visible and accessible.
Python has four general scope levels:
  1. local
  2. enclosing
  3. global
  4. built-in

Python goes through these scopes in order. It follows the LEGB rule, which stands for Local, Enclosing, Global, and 
Built-in.


early programming languages like BASIC only had global names. With this type of name, any part of the program could 
modify any variable at any time, making large programs difficult to maintain and debug.

For example, if you define a name inside a function, then that name will have a local scope. You can only access 
the name locally within the function implementation. In contrast, if you define a name at the top level of a 
module, then that name will have a global scope. You’ll be able to access it from anywhere in your code

#### Scope vs Namespace

The concept of scope is closely related to the concept of namespace. A scope determines the visibility and lifetime 
of names, while a namespace provides the place where those names are stored.

A namespace is a mapping of names to objects.
It’s like a dictionary that keeps track of all the names (variables, functions, classes, etc.) in a particular area 
of the program.

| Feature        | Namespace                               | Scope                                       |
| -------------- | --------------------------------------- | ------------------------------------------- |
| What is it?    | A **mapping of names to objects**       | A **region** where a name is **accessible** |
| Type           | Built-in, Global, Local, Enclosing      | Local, Enclosing, Global, Built-in          |
| Think of it as | A **container of names** (like a dict)  | **Rules to find those names**               |
| Example        | `globals()`, `locals()` show namespaces | `x` inside function vs outside function     |



| Concept   | Analogy                                    |
| --------- | ------------------------------------------ |
| Namespace | A **dictionary** storing all the names     |
| Scope     | The **room** where those names can be used |

---


**Local scope** is the body of any Python function or lambda expression. This scope contains the names that you 
define inside the function. These names are only visible from within the function. Python creates a local scope 
when you call a function, so you’ll have as many different local scopes as function calls. This is true even if you 
call the same function multiple times, or recursively. Each call creates a new local scope.

**Enclosing scope** is a scope that exists only for nested functions and is defined by the outer or enclosing 
function. This scope contains the names that you define within the enclosing function. The names in the enclosing 
scope are visible from the code of the inner and outer functions.

Python creates a local scope. The local scope of outer_func() is also the enclosing scope of inner_func(). From inside inner_func(), this 
scope is neither the global scope nor the local scope. Instead, it’s a special scope that lies in between those two scopes and is known 
as the enclosing scope.

All the names you create in the enclosing scope are visible from inside inner_func(), except for those created after you call inner_func
(). 

Names that you define in the enclosing scope are known as **nonlocal names** because they’re neither local nor global. They’re visible 
from both the outer and inner functions.

🔹 What is an Enclosing Function?
An enclosing function is a function that contains another function inside it.

The outer function is called the enclosing function.

The inner function is called a nested function or inner function.

The enclosing function creates an enclosing scope for the inner one.

**Global scope** is the topmost scope in a Python program or interactive session. This scope contains all of the 
names that you define at the top level of a script or module. Names in this scope are visible from everywhere in 
your code.

**Built-in scope** is a special scope that Python creates or loads whenever you run a script or open an interactive 
session. This scope contains names such as built-in functions, exceptions, and other attributes that are built into 
Python. Names in this scope are also available from everywhere in your code.

Built-in scope is the widest and final level of scope in Python, containing all the predefined names

Examples include:

Functions: print(), len(), type(), input(), range(), sum()

Constants: True, False, None

Types: int, str, list, dict, float

Exceptions: ValueError, TypeError, ZeroDivisionError

These are always available anywhere in your code, unless you override them locally.

        From the built-in module:
        import builtins
---

a given name exists in both the local and the global scope, then you’ll get the value associated with the name in 
the local scope.

You’ll always have at least two active scopes: the global and built-in ones. These two scopes will always be 
available for you.


The built-in scope is a special scope that’s implemented as a standard library module named builtins. All of Python’s built-in objects 
live in this module. Python automatically loads these objects when you run the Python interpreter. 


#### Modifying the Behavior of a Python Scope.


Python provides two keywords that allow you to modify the content of global and nonlocal names.

   1. global
   2. nonlocal

when you try to assign a value to a global variable inside a function, you create a new local variable in the function’s local scope. You 
can modify this behavior by using the global statement.

The global statement consists of the global keyword followed by one or more names separated by commas. You can also use multiple global 
statements with a name or a list of names. All the names that you list in a global statement will be mapped to the global scope.

```python 
>>> counter = 0  # A global variable

>>> def update_counter():
...     counter = counter + 1  # Fails trying to update 'counter'
...

>>> update_counter()
Traceback (most recent call last):
    ...
UnboundLocalError: cannot access local variable 'counter' where
⮑ it is not associated with a value

```
Inside update_counter(), you try to update the global counter by using its previous value, 0. However, Python assumes that the counter 
name is local to update_counter() and raises an UnboundLocalError exception because the name isn’t defined yet, but the code is trying to 
reuse a previous value.

use global key word 

```python 
>>> counter = 0  # A global variable

>>> def update_counter():
...     global counter  # Declares 'counter' as a global variable
...     counter = counter + 1  # Successfully updates 'counter'
...

>>> update_counter()
>>> counter
1
>>> update_counter()
>>> counter
2
>>> update_counter()
>>> counter
3
```

In this new version of update_counter(), you add the statement global counter to the body of the function right before you try to change 
counter. With this tiny change, you map the name counter in the function’s local scope to the same name in the global scope. From this 
point on, you can freely modify counter inside update_counter(), and all changes will affect the global variable instead of creating a 
new local one.

#### The nonlocal Statement

Like global names, nonlocal names can be accessed from inner functions, but not assigned or updated. If you want to modify them, then you 
need to use the nonlocal statement. With this statement, you can define a series of names that are going to be treated as nonlocal.

```python
 >>> def function():
...     number = 42  # A nonlocal variable
...     def nested():
...         nonlocal number  # Declare 'number' as nonlocal
...         number += 42
...     nested()
...     print(number)
...

>>> function()
84
```

Unlike global, you can’t use nonlocal outside of a nested or inner function. To be more precise, you can’t use a nonlocal statement in 
either the global scope or in a local scope.

####  closure.

a closure is a callable that carries information about its enclosing scope, even though that scope has completed its execution.

```python 
>>> def power_factory(exponent):
...     def power(base):
...         return base**exponent
...     return power
...

>>> square = power_factory(2)
>>> square(10)
100
>>> cube = power_factory(3)
>>> cube(10)
1000
>>> cube(5)
125
>>> square(15)
225
```

Variables like exponent that are referenced within a code block but not defined there are known as ***free variables***. These variables 
derive their values from the surrounding scope. Free variables are essential to how closures function, as they allow a function to 
“remember” and retain access to external variables, even after the enclosing scope has finished executing. This mechanism enables 
closures to preserve state between successive calls.

#### The globals() Function

The built-in globals() function returns a namespace dictionary with all the names—and associated objects—that are currently in your 
global scope.


```python
>>> globals()
{
    '__name__': '__main__',
    '__doc__': None,
    '__package__': None,
    ...
}

>>> number = 42

>>> globals()
{
    '__name__': '__main__',
    '__doc__': None,
    '__package__': None,
    ...
    'number': 42
}

```
The first call to globals() returns a dictionary containing the names in your __main__ program. Note that when you assign a new name at 
the top level of __main__, then the name is added to the dictionary that globals() returns.


#### The locals() Function

The built-in locals() function returns a dictionary that holds a copy of the current state of the local namespace. When you call locals
() in a function block, you get all the names assigned in the local scope down to the point where you call locals().

```python
>>> def function(arg):
...     var = 100
...     print(locals())
...     another = 200
...

>>> function(300)
{'var': 100, 'arg': 300}

```

If you call locals() in the global scope, then you’ll get the same dictionary that you would get if you were to call globals()

#### Packing and Unpacking

By using packing and unpacking you can create assignments with a single statement and catch several values with a single identifier, 
making your code much easier to read.

Packing is a handy Python tool that provides a dynamic way to pack and unpack values into a single data structure or take them out and 
assign them to multiple variables. This process greatly improves the reliability and adaptability of your code.

In Python, “packing” refers to the process of putting values into a new tuple or list by separating them with commas. This can be done 
with an assignment statement where the left-hand side is a tuple or list of variables and the right-hand side is another tuple or list 
of values.

```python


number1 = 1
number2 = 2
number3 = 3

	
myTup = (number1, number2, number3)

myList = [number1, number2, number3]

```

You can also use the * operator (which is used as both power and multiplication operators). Before we see how that works with packing, 
let me show you how the * operator works. We’ll define a function called sumOf and use the * operator like so:

```python

 
def sumOf(*nums):
    print('Our numbers are:', nums)
    return sum(nums)
print('Adding them up, we get:', sumOf(10, 20, 30))


```

Remember, a tuple is an immutable list, so it cannot be changed once created. Tuples are great options for storing data that you don’t 
want to be modified.


# Unpacking

unpacking is the process of extracting values from a sequence and assigning them to multiple variables. We achieve unpacking with the 
assignment operator on the left side and an iterable object on the left side.

eg:
```python

myTuple = (1, 2, 3)
a, b, c = myTuple
print(myTuple)

```

We can also unpack dictionaries (an unordered collection of data in the format of a key-value pair) like so:

```python


myDict = {'fname': 'Jack', 'lname': 'Wallen', 'country':'USA'}
fname, name, country = myDict.values()
print(myDict.values())

# output : dict_values(['Jack', 'Wallen', 'USA'])

```


 
---

## 🔹 1. Python 2.x — `print` as a **statement**

In Python 2, `print` is a **language construct (statement)**, not a function.
That means the Python interpreter directly translates it into bytecode instructions without calling a function.

Example:

```python
print "Hello"
print "Value:", 10
```

Internally:

* The CPython **parser** treats `print` like `if`, `for`, or `return`.
* It has **special bytecode instructions** (`PRINT_ITEM`, `PRINT_NEWLINE`).
* So `print "Hello"` compiles into:

  ```
  LOAD_CONST "Hello"
  PRINT_ITEM
  PRINT_NEWLINE
  ```
* Since it’s not a function, you can’t do things like:

  ```python
  print("Hello")   # works only if you import `print_function` from __future__
  ```

⚠️ Problem: Because it’s a statement, it’s less flexible (can’t be passed as an argument, can’t use `sep`, `end`, etc.).

---

## 🔹 2. Python 3.x — `print()` as a **function**

In Python 3, `print` was turned into a **built-in function** defined in `builtins.py`.

Signature:

```python
print(*objects, sep=' ', end='\n', file=sys.stdout, flush=False)
```

How it works internally:

1. **`*objects`** → takes any number of arguments (`print(1, "hi", [1,2])`).
2. For each object, it calls `str()` (actually `PyObject_Str` at C level).
3. Joins them with `sep` (default `" "`).
4. Appends `end` (default `"\n"`).
5. Writes the final string to `file` (default `sys.stdout`).
6. If `flush=True`, flushes the buffer immediately.

So internally `print("Hello", 123)` does:

* Call `PyObject_Str("Hello")` → `"Hello"`
* Call `PyObject_Str(123)` → `"123"`
* Join with `" "` → `"Hello 123"`
* Add `"\n"` → `"Hello 123\n"`
* Call `sys.stdout.write("Hello 123\n")`

That’s why it can handle **any datatype** — because every object in Python implements `__str__()` or `__repr__()`.

---

## 🔹 3. Why this change?

* **Consistency**: Everything else (like `len`, `type`, `max`) was already a function. `print` was an oddball.
* **Flexibility**: Now you can do:

  ```python
  x = print  # pass around like any function
  x("Hello")
  ```
* **Extensibility**: Keyword arguments like `sep`, `end`, `file` make printing more powerful.
* **Cleaner Grammar**: Removing special-case print statement made Python grammar simpler.

---

## 🔹 4. Side-by-side Example

Python 2.x:

```python
print "Hello", 123   # automatically space-separated
```

Python 3.x:

```python
print("Hello", 123, sep=" ", end="\n")
```

Internally:

* Python 2 → custom **bytecode instructions**
* Python 3 → normal **function call** to `builtins.print`

---

✅ So in short:

* **Python 2.x**: `print` is a *statement*, handled by the compiler with its own bytecode.
* **Python 3.x**: `print` is a *built-in function*, implemented in C (`bltinmodule.c`), which internally calls `sys.stdout.write()` after converting all datatypes to string.

---
 


 

### 1. `print(*objects, sep=' ', end='\n', file=sys.stdout, flush=False)`

* It can take **any number of positional arguments** (`*objects`).
* All extra formatting is handled with keyword arguments.

---

### 2. For each object → convert to string

* Internally, it calls **`str(obj)`**, which at the C level is `PyObject_Str()`.
* That means:

  * If the object defines `__str__()`, that method is used.
  * If not, it falls back to `__repr__()`.

Example:

```python
class Demo:
    def __str__(self):
        return "str version"
    def __repr__(self):
        return "repr version"

print(Demo())   # prints: str version
```

---

### 3. Join with `sep`

* All converted strings are concatenated using `sep`.
* Default is a **space (`" "`)**.

```python
print(1, "hi", [1, 2])
# internally → "1" + " " + "hi" + " " + "[1, 2]"
```

---

### 4. Append `end`

* The final string is appended with `end`.
* Default is **newline (`"\n"`)**.

```python
print("hello", end="!!")
# prints: hello!!
```

---

### 5. Write to `file`

* By default, the stream is `sys.stdout` (the terminal).
* But you can redirect:

```python
with open("out.txt", "w") as f:
    print("hello file", file=f)
```

---

### 6. Flush if needed

* Normally, output is **buffered** (not written immediately).
* If `flush=True`, it calls `sys.stdout.flush()`, forcing data to be written.

```python
import time
print("Loading...", end="", flush=True)
time.sleep(2)
print("done")
```

---

### 🔍 At C level in CPython

The actual function is implemented in **`bltinmodule.c`** as `builtin_print`. Roughly, the steps are:

1. Collect arguments.
2. Call `PyObject_Str()` on each.
3. Build a single Unicode string using `sep` and `end`.
4. Call the stream’s `.write()` method.
5. If `flush=True`, call `.flush()`.

---

Good question 👍 Let’s break it down:

---

### 🔹 In **Python**

```python
1num = 10   # ❌ INVALID
```

This will raise a **SyntaxError** because in Python, **variable names cannot start with a digit**.
Rules for identifiers (variable names) in Python:

1. Must start with a **letter (a–z, A–Z)** or **underscore `_`**.
2. Can contain **letters, digits, and underscores** after the first character.
3. Cannot use reserved keywords (`if`, `class`, `for`, etc.).

✅ Valid Python examples:

```python
num1 = 10
_num = 10
num_1 = 10
```

---

### 🔹 In **JavaScript**

```javascript
let 1num = 10;   // ❌ INVALID
```

Same rule: variable names **cannot start with digits** in JavaScript either.

✅ Valid JavaScript examples:

```javascript
let num1 = 10;
let _num = 10;
let num_1 = 10;
```

---

### ⚡ Difference

So both Python and JavaScript **do not allow variable names to start with a number**.

👉 The only difference:

* In **JS**, you can also use `$` in variable names:

```javascript
let $price = 100;  //  valid in JS
```

* In **Python**, `$` is **not allowed** in identifiers.

---
 

### 1. Variables are identifiers

A variable name is just an **identifier** — a label that the compiler/interpreter uses to recognize something (like a memory location).

Identifiers must follow **rules** so that the compiler/lexer (the part of the language that reads raw code) can tell them apart from numbers, keywords, and operators.

---

### 2. Why can’t they start with a digit?

Imagine you write this:

```python
123abc = 5
```

When Python (or any language) reads it, the **lexer** first scans from left to right.

* It sees `123` → and immediately decides: “This is a **number literal**.”
* Then it sees `abc` right after the number. To the lexer, this looks like **two tokens**:

  * A number (`123`)
  * An identifier (`abc`)

So it **can’t combine** them into one identifier — otherwise, it would be impossible to distinguish between:

* A number followed by a variable:

  ```python
  123 abc   # error, but could mean "number 123, then variable abc"
  ```

* A variable that starts with digits:

  ```python
  123abc    # ambiguous – is it a number or variable name?
  ```

This ambiguity is why digits **can appear later** in a variable (like `var1`, `x123`), but not at the start.

---

### 3. Why letters/underscore are allowed first?

Because they **cannot be confused with numeric literals**.

* `_myVar` → clearly an identifier
* `myVar1` → clearly an identifier
* `123` → clearly a number

---

  **In short:**
A variable name can’t start with a number because the **lexer/tokenizer would confuse it with a numeric literal**. Allowing digits only after the first character avoids this conflict.

---

 

---

### 1. What is a **Lexer**?

A **lexer** (short for *lexical analyzer*) is the first stage of a programming language interpreter or compiler.
Its job:

* Take raw source code (plain text)
* Break it into **tokens** → the smallest meaningful pieces, like keywords, identifiers, numbers, operators, etc.

This process is called **lexical analysis**.

---

### 2. Example

Suppose you write this code:

```python
x = 10 + 20
```

The **lexer** scans it left to right and produces tokens:

```
IDENTIFIER(x)
OPERATOR(=)
NUMBER(10)
OPERATOR(+)
NUMBER(20)
```

Notice: the lexer **doesn’t care about meaning or correctness yet** — it just groups characters into categories.

---

### 3. Why needed?

Without a lexer, the compiler/interpreter would just see this as a long string of characters:

```
x=10+20
```

It would be impossible to parse or understand without first chopping it into **tokens**.

---

 

When the lexer sees `123abc`:

1. It first matches `123` → **NUMBER token**.
2. Then sees `abc` → **IDENTIFIER token**.
3. So it becomes:

   ```
   NUMBER(123) IDENTIFIER(abc)
   ```

   instead of a single identifier.

That’s why `123abc` is invalid as a variable.

---

### 5. Difference between **lexer** and **parser**

* **Lexer** → breaks code into tokens (`x`, `=`, `123`)
* **Parser** → takes those tokens and checks grammar/structure (`assignment statement`, `expression`)

---

  So, the **lexer** is like the person who first splits a sentence into words before someone else checks grammar.

---
 

## 1. What is a **Parser**?

A **parser** is the stage that comes **after the lexer** in a compiler or interpreter.

* The **lexer** gives tokens (like "words").
* The **parser** takes those tokens and checks whether they form a **valid sentence** according to the programming language’s grammar.

So the parser is all about **syntax**.

---

## 2. Example

Take this Python line:

```python
x = 10 + 20
```

* **Lexer output (tokens):**

  ```
  IDENTIFIER(x), OPERATOR(=), NUMBER(10), OPERATOR(+), NUMBER(20)
  ```

* **Parser checks grammar:**

  * Is `IDENTIFIER` valid on the left of `=`? ✅
  * Is `NUMBER(10) + NUMBER(20)` a valid expression? ✅
  * Full sentence = "assignment statement" ✅

So it passes parsing.

---

## 3. When it fails

Example:

```python
x = + * 10
```

* **Lexer** says:

  ```
  IDENTIFIER(x), OPERATOR(=), OPERATOR(+), OPERATOR(*), NUMBER(10)
  ```

* **Parser** checks grammar and says ❌:

  * `+ * 10` is not a valid expression in Python’s grammar.

So you get a **SyntaxError** (parser error).

---

## 4. Analogy (real-world)

* **Lexer** = Splits a sentence into words.
  `"The cat runs"` → `[The] [cat] [runs]`.

* **Parser** = Checks if the sentence is grammatically correct.

  * ✅ "The cat runs." → correct grammar
  * ❌ "Cat the runs." → wrong grammar

---

## 5. Together

1. **Lexer** → tokenizes (breaks text into tokens).
2. **Parser** → organizes tokens by grammar rules into a structure (often a **parse tree** or **abstract syntax tree (AST)**).

---

👉 Example AST for `x = 10 + 20` would look like:

```
Assignment
 ├── Variable: x
 └── Expression
      ├── Number: 10
      ├── Operator: +
      └── Number: 20
```

---

 
**AST (Abstract Syntax Tree)**

---

## 1. What is an AST?

An **Abstract Syntax Tree (AST)** is a tree-like data structure that the parser builds after checking grammar.
It represents the **hierarchical structure** of your program — not just the words, but their meaning in context.

👉 Why “abstract”?
Because it ignores unnecessary details (like parentheses, commas, or keywords) and only keeps the **logical structure** of the code.

---

## 2. Example

Take this code:

```python
x = 10 + 20
```

### Step 1: Lexer

```
IDENTIFIER(x), OPERATOR(=), NUMBER(10), OPERATOR(+), NUMBER(20)
```

### Step 2: Parser checks grammar

✅ Assignment is valid.

### Step 3: AST (tree structure)

```
Assignment
 ├── Variable: x
 └── BinaryOperation (+)
       ├── Number: 10
       └── Number: 20
```

---

## 3. Why AST is important?

* **Compiler/interpreter** uses AST to understand *what to do*.
* Tools like **linters, formatters, IDEs, and analyzers** use AST to reason about code.
* AST is **easier to process** than raw tokens.

---

## 4. Real Python Example

Python has a built-in `ast` module to see the AST:

```python
import ast
import astpretty

code = "x = 10 + 20"
tree = ast.parse(code)
astpretty.pprint(tree)
```

Output (simplified):

```
Module(
  body=[
    Assign(
      targets=[Name(id='x')],
      value=BinOp(
        left=Constant(value=10),
        op=Add(),
        right=Constant(value=20)
      )
    )
  ]
)
```

  This is the AST — a tree structure the interpreter works with.

---

## 5. Analogy

Think of:

* **Lexer** = splitting into words
* **Parser** = grammar check
* **AST** = meaning diagram

Sentence: *“The cat eats fish”*

AST version:

```
Sentence
 ├── Subject: cat
 ├── Verb: eats
 └── Object: fish
```

---

⚡ So in short:

* AST = **structured tree of code meaning**
* Used internally by compilers/interpreters to generate machine code or bytecode

---
  
---

## 1. Lexer vs Tokenization

* **Tokenization** → the *process* of splitting source code into tokens.
* **Lexer (lexical analyzer)** → the *component/tool* that performs tokenization.

 In simple words:

* **Lexer = the machine**
* **Tokenization = the job it does**

---

## 2. Example

Source code:

```python
y = x + 42
```

### Step 1: Lexer runs

The **lexer** scans the string character by character.

### Step 2: Tokenization happens

It produces tokens:

```
IDENTIFIER(y)
OPERATOR(=)
IDENTIFIER(x)
OPERATOR(+)
NUMBER(42)
```

---

## 3. What comes next?

* After tokenization, the **parser** takes those tokens.
* Parser checks grammar → builds AST.

---

## 4. Analogy (real world)

Think of a newspaper:

* **Lexer** = the person with scissors ✂️ who cuts the article into words.
* **Tokenization** = the act of cutting it into words.
* **Parser** = English teacher who checks if the sentence makes sense.
* **AST** = sentence diagram (subject → verb → object).

---

 So, lexer and tokenization are not two different *things* —

* Lexer = the **tool**
* Tokenization = the **process** the lexer performs

---

 
## 1. Where does the lexer exist?

The **lexer** isn’t a separate program you run.
It’s **built inside every programming language’s compiler or interpreter**.

* In **Python** → The CPython interpreter has its own lexer implemented in C (`Parser/tokenizer.c` in the CPython source code).
* In **Java** → The `javac` compiler has a built-in lexer.
* In **C/C++** → GCC/Clang have built-in lexers.
* If you build your own language, you usually write or use a lexer library (like **Lex/Flex**, **ANTLR**, **PLY** in Python).

So, you don’t install it separately — it’s part of the language’s “engine”.

---

## 2. How it works (Python example)

When you run:

```bash
python myscript.py
```

Steps inside CPython:

1. **Source code (text)** → sent to **lexer**.
2. **Lexer (tokenizer)** → splits into tokens.
3. **Parser** → checks grammar and builds AST.
4. **Compiler** → converts AST into **bytecode**.
5. **Python Virtual Machine (PVM)** → executes bytecode.

---

## 3. If *you* want to use a lexer

You can use tools:

* **Built-in** → Python’s `tokenize` module lets you see tokens.
* **Libraries** →

  * `PLY` (Python Lex-Yacc)
  * `ANTLR` (general parser/lexer generator)
  * `Flex`/`Lex` (classic C lexer generators).

---

## 4. Analogy

Think of the **lexer** like the **scanner** inside a printer.

* You don’t see it, but it’s always there, breaking a page into digital pieces before further processing.

---

✅ So:

* The **tool (lexer)** is *inside the interpreter/compiler*.
* You don’t normally run it by itself.
* You can *see its output* using debugging tools (like Python’s `tokenize` or `ast` modules).

---
 


## 1. What is EBNF?

**EBNF** = **Extended Backus–Naur Form**.
It’s a notation (a formal language) used to **describe the grammar of programming languages**.

👉 Think of it as a “blueprint language” that explains how valid code must look.

---

## 2. The Basics of EBNF

Here’s the meaning of symbols used in EBNF:

| Symbol  | Meaning                      | Example                              |                                  |                           |       |
| ------- | ---------------------------- | ------------------------------------ | -------------------------------- | ------------------------- | ----- |
| `::=`   | “is defined as”              | \`digit ::= "0"                      | "1"                              | ...                       | "9"\` |
| \`      | \`                           | OR (choice)                          | \`"+"                            | "-"\` means plus OR minus |       |
| `[]`    | Optional (0 or 1 times)      | `[ "-" ] digit` → optional minus     |                                  |                           |       |
| `{}`    | Repetition (0 or more times) | `{ digit }` → many digits allowed    |                                  |                           |       |
| `()`    | Grouping                     | \`("a"                               | "b") "c"`→ either`"ac"`or`"bc"\` |                           |       |
| `"` `"` | Literal symbols              | `"if"` means the actual keyword `if` |                                  |                           |       |

---

## 3. Example in EBNF

Let’s define an **integer**:

```ebnf
integer ::= [ "-" ] digit { digit }
digit   ::= "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
```

This means:

* An integer may start with an optional `-`
* Must have at least one digit
* Can have more digits after

✅ Valid: `123`, `-99`, `0`
❌ Invalid: `--5`, `12a`

---

## 4. Python Expression in EBNF

Simplified grammar for arithmetic expressions:

```ebnf
expression ::= term { ("+" | "-") term }
term       ::= factor { ("*" | "/") factor }
factor     ::= number | identifier | "(" expression ")"
```

So:

* `2 + 3` → fits
* `2 + (3 * 4)` → fits
* `* 5` → ❌ doesn’t fit

---

## 5. Why it’s useful

* **Language designers** use EBNF to define Python, C, Java, etc.
* **Parsers** are often auto-generated from EBNF rules (ANTLR, PLY, etc).
* It makes the rules **unambiguous** — no guesswork.

---

✅ In short:
**EBNF = a formal way to write grammar rules.**
It’s like math for describing programming language syntax.

---
 
 
> **What is EBNF style? And what is the name of that grammar?**
 
---

## 1. What is EBNF style?

* **EBNF** = **Extended Backus–Naur Form**.
* It’s a **notation** (like a special mini-language) for writing grammar rules of programming languages.
* Called *“style”* because different languages use slightly different flavors (classic **BNF**, **EBNF**, or custom notations).

👉 **BNF** was the original (Backus–Naur Form), created in the 1960s for ALGOL.
👉 **EBNF** added more convenience (optional parts, repetitions, grouping).

So when you see “EBNF style,” it means the grammar is written in **formal production rules** like:

```ebnf
rule ::= option1 | option2
```

instead of English sentences.

---

## 2. What is the name of that grammar?

Every programming language has its **own grammar**, written using EBNF (or a close variant).

Examples:

* **Python** → defined in *Python Grammar* (file: `Grammar/python.gram` in CPython).
* **JavaScript** → defined in the *ECMAScript Grammar* (ECMA-262 spec).
* **Java** → defined in the *Java Language Specification Grammar*.
* **C/C++** → defined in the *ISO C/C++ Grammar*.

So the **grammar name** usually matches the language →
👉 “Python Grammar,” “ECMAScript Grammar,” “Java Grammar,” etc.

---

## 3. Example of EBNF vs English

Let’s define an **if statement**:

* In **English**:
  “An `if` statement begins with the keyword `if`, followed by a condition in parentheses, followed by a block of statements. It may optionally contain an `else` block.”

* In **EBNF style**:

  ```ebnf
  if_stmt ::= "if" "(" expression ")" statement [ "else" statement ]
  ```

Notice how compact and precise EBNF is.

---

## 4. Why languages use EBNF-style grammar?

* **Unambiguous**: computers can generate parsers automatically.
* **Formal**: no confusion compared to English descriptions.
* **Standardized**: most programming language grammars are published in BNF/EBNF.

---

✅ **Summary:**

* **EBNF style** = a formal way of writing grammar rules.
* The **name of that grammar** is usually just the language’s grammar (Python Grammar, ECMAScript Grammar, Java Grammar, etc.), written in EBNF (or a close variant).
🔑 EBNF is not a syntax for writing code.
It’s a syntax for writing grammars (rules that describe how code should look).

---
 

---

##  What is Constant Folding?

**Constant folding** is a compiler optimization technique where the compiler **pre-computes constant expressions at compile time** instead of runtime.

 In short:
If an expression involves **only constants**, the compiler evaluates it **once** and replaces it with the result.

---

##  Example in Python

```python
x = 10 * 20
```

Without optimization:

* At runtime, Python would multiply `10 * 20` every time.

With **constant folding**:

* The compiler already knows `10 * 20 = 200`.
* So it directly stores:

```python
x = 200
```

---

##  Why is this useful?

* **Faster execution** → saves CPU cycles at runtime.
* **Smaller code** → no need to keep unnecessary calculations.

---

##  More Examples

1. Arithmetic:

```python
y = (2 + 3) * 4
```

Compiler folds →

```python
y = 20
```

2. Strings:

```python
msg = "Hello, " + "World!"
```

Constant folded →

```python
msg = "Hello, World!"
```

3. Boolean logic:

```python
flag = True or False
```

Constant folded →

```python
flag = True
```

---

## 🔹 In Python Internals

* Python’s **bytecode compiler** performs constant folding.
* If you disassemble with `dis` module:

```python
import dis

def f():
    return 2 + 3

print(dis.dis(f))
```

You’ll see that Python **does not emit an `ADD` instruction** — it just loads the constant `5`.

---

---

So:
**Constant folding = pre-calculating constant expressions at compile time** so runtime is faster.

---


 **“Does Python do constant folding for *every* operation?”**

Short answer: **No.**
Python does constant folding **only for some operations**, not all. Let me explain clearly.

---

##  When Python Does Constant Folding

Python folds **simple, safe, deterministic expressions** at compile time.
Examples:

1. **Arithmetic with literals**

   ```python
   x = 2 + 3 * 4   # folded to 14
   ```
2. **Boolean logic with constants**

   ```python
   y = True and False  # folded to False
   ```
3. **String concatenation**

   ```python
   msg = "Hello, " "World!"   # folded to "Hello, World!"
   ```
4. **Tuples/lists/sets of constants**

   ```python
   t = (1, 2, 3, 4)   # stored directly as a constant tuple
   ```

---

## 🔹 When Python Does NOT Fold

1. **Operations with variables**

   ```python
   a = 10
   b = 20
   x = a + b   # not folded (depends on runtime values)
   ```
2. **Functions / Non-deterministic operations**

   ```python
   import random
   x = random.randint(1, 10) + 2  # must run at runtime
   ```
3. **Floating-point edge cases**

   ```python
   x = 1.0 / 0.0   # would raise error, so not folded
   ```
4. **Mutable objects**

   ```python
   lst = [1, 2] + [3, 4]  # not folded, list is mutable
   ```

---

## 🔹 Why Not Fold Everything?

* **Safety**: Some operations may cause errors or side effects (`1/0`, `open("file")`).
* **Mutability**: If the object can change (like lists, dicts), folding it would be wrong.
* **Runtime values**: If it depends on user input, environment, or randomness, the compiler can’t predict it.

---

 So:

* Python **does constant folding only for safe, literal constant expressions**.
* Not for every operation.

---

 