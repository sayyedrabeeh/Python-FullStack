# Python (programming language)

Python is a high-level, general-purpose programming language.Python is dynamically type-checked (Dynamic typing : Types are checked at runtime ,will check the type only when it needs to use it) and garbage-collected (Python automatically manages memory) .

It supports multiple programming paradigms, including structured.object-oriented and functional programming.


## Datatypes

[!Datatypes](datatype.jpg)

### Primitive Datatypes

simple values of data.are typically immutable, meaning their value cannot change after they are created.for storing single values and performing basic operations. In Python, all data values are objects. That means Python has no primitive data types and all the types are reference types. However, Python has built-in data types.
python has four primitive variable types:

 1.Integers
 2.Float
 3.Strings
 4.Boolean


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

  1 : Explicit Type Casting: Where the programmer manually converts one data type into another.
  2 : Implicit Type Casting (Automatic Type Conversion): Where Python automatically converts one data type to 
      another to prevent data loss or errors.



## F-String

 efficient way to interpolate variables, objects, and expressions directly into strings. By prefixing a string with f or F, you can embed expressions within curly braces ({}), which are evaluated at runtime.
 This makes f-strings faster and more readable compared to older approaches like the modulo (%) operator or the string .format() method.

Before f-strings (introduced in Python 3.6), there were three main ways to do string interpolation (i.e., inserting variables into strings):

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

F-strings joined the party in Python 3.6 with PEP 498. Also called formatted string literals,You can embed almost any Python expression in an f-string. This allows you to do some nifty things.
> f"{2 * 21}"
When Python runs this f-string, it multiplies 2 by 21 and immediately interpolates the resulting value into the final string
