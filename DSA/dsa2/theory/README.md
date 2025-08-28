 
---

# 🔹 What is a Stack?

At the most basic level, a **stack** is a **linear data structure** that follows the principle:
  **LIFO (Last In, First Out)**

* The **last** element inserted is the **first** one removed.
* Think of a **stack of plates** in a cafeteria.

  * You add (push) a new plate on top.
  * You remove (pop) the top plate first.
  * You can only see or access the **top plate**, not the ones below directly.

---

#  Operations on Stack

Every stack is defined by a **fixed set of operations**:

1. **Push(x)** → Insert element `x` at the top.
2. **Pop()** → Remove and return the top element.
3. **Peek() / Top()** → Return the top element without removing it.
4. **isEmpty()** → Check if the stack is empty.
5. **isFull()** (for array implementation) → Check if stack is full.

---

#  Implementation of Stack

Stacks can be implemented in two fundamental ways:

### 1. **Stack using Array**

* Continuous memory allocation.
* Fast access with index.
* But size must be fixed (static).

**Example (array stack push/pop):**

```python
class StackArray:
    def __init__(self, capacity):
        self.stack = [None] * capacity
        self.top = -1
        self.capacity = capacity

    def push(self, value):
        if self.top == self.capacity - 1:
            print("Stack Overflow")
            return
        self.top += 1
        self.stack[self.top] = value

    def pop(self):
        if self.top == -1:
            print("Stack Underflow")
            return None
        val = self.stack[self.top]
        self.top -= 1
        return val

    def peek(self):
        if self.top == -1:
            return None
        return self.stack[self.top]
```

---

### 2. **Stack using Linked List**

* Dynamic memory allocation.
* No fixed size.
* Each node contains:

  * `data`
  * `next` pointer (link to next element).

**Example (linked list stack push/pop):**

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class StackLinkedList:
    def __init__(self):
        self.top = None

    def push(self, value):
        new_node = Node(value)
        new_node.next = self.top
        self.top = new_node

    def pop(self):
        if not self.top:
            print("Stack Underflow")
            return None
        val = self.top.data
        self.top = self.top.next
        return val

    def peek(self):
        if not self.top:
            return None
        return self.top.data
```

---

#  Types of Stacks

Stacks themselves are always **LIFO**, but variations exist depending on context:

1. **Simple Stack** → The normal LIFO stack.
2. **Dynamic Stack** → Stack that grows dynamically (linked list).
3. **Two Stacks in One Array** → Two stacks share one array (saves memory).
4. **Call Stack (Runtime Stack)** → Special stack maintained by compilers/interpreters to track function calls (important in recursion).
5. **Expression Stack** → Used in evaluating postfix/prefix expressions.

---

# 🔹 Applications of Stack

* **Recursion** (function call stack).
* **Undo/Redo operations** (text editors).
* **Back/Forward in browsers**.
* **Expression evaluation** (postfix/prefix).
* **Syntax parsing** (compilers).
* **Balanced Parentheses check**.

---

# 🔹 Complexity

* Push → **O(1)**
* Pop → **O(1)**
* Peek → **O(1)**
* Search (not typical in stack) → **O(n)**

---

 Now you understand **Stack **:

* Defined by **LIFO principle**
* Can be implemented using **array** or **linked list**
* Operations are **O(1)**
* Foundation for **recursion, undo, compiler parsing**

---

 