 

# 📘 **DSA (Data Structures & Algorithms) **



## 1️⃣ What is DSA?

* **Data Structures** = How we store & organize data (so it can be used efficiently).
* **Algorithms** = Step-by-step methods (logic) to process or manipulate that data.

      👉 Together, DSA helps us write **efficient code** that saves time & memory.

---

##  Types of Data Structures

We can classify them as **linear vs non-linear**.

###  **Linear Data Structures** (arranged sequentially)

1. **Array** – Collection of elements in contiguous memory.
2. **String** – Sequence of characters (like arrays of chars).
3. **Linked List** – Nodes connected with pointers.

   * Singly Linked List
   * Doubly Linked List
   * Circular Linked List
4. **Stack** – LIFO (Last In, First Out).
5. **Queue** – FIFO (First In, First Out).

   * Simple Queue
   * Circular Queue
   * Deque (Double-ended queue)
   * Priority Queue

###  **Non-Linear Data Structures** (hierarchical/graph-based)

1. **Tree**

   * Binary Tree
   * Binary Search Tree (BST)
   * AVL Tree (self-balancing)
   * Heap (Min-Heap, Max-Heap)
   * B-Tree, B+ Tree (used in DBMS)
   * Trie (prefix tree)
2. **Graph**

   * Represented by adjacency list/matrix
   * Types: Directed, Undirected, Weighted, Unweighted, Cyclic, Acyclic (DAG)

###  **Hashing**

* **Hash Table / Hash Map** – Store key-value pairs with fast lookup.

---

## 3️ Operations on Data Structures

Every data structure supports these **basic operations**:

* **Traversal** → Visit each element
* **Insertion** → Add new element
* **Deletion** → Remove element
* **Searching** → Find element
* **Sorting** → Arrange elements (Ascending/Descending)
* **Merging** → Combine two structures
* **Access** → Get element at index/key

---

##  Time & Space Complexity

This is the **mathematics of DSA** → How fast & memory efficient an algorithm is.

###  Time Complexity Notations

* **O(1)** → Constant time
* **O(log n)** → Logarithmic time
* **O(n)** → Linear time
* **O(n log n)** → Log-linear time
* **O(n²), O(n³)...** → Polynomial time
* **O(2ⁿ)** → Exponential
* **O(n!)** → Factorial

###  Space Complexity

* Measures how much memory an algorithm uses:

  * Input space
  * Auxiliary space (extra variables, recursion stack)

---

## 5️ Example – Operations with Complexities

| Data Structure | Access   | Search   | Insert   | Delete   |
| -------------- | -------- | -------- | -------- | -------- |
| **Array**      | O(1)     | O(n)     | O(n)     | O(n)     |
| **Stack**      | O(n)     | O(n)     | O(1)     | O(1)     |
| **Queue**      | O(n)     | O(n)     | O(1)     | O(1)     |
| **Singly LL**  | O(n)     | O(n)     | O(1)     | O(1)     |
| **Doubly LL**  | O(n)     | O(n)     | O(1)     | O(1)     |
| **Hash Table** | -        | O(1)\*   | O(1)\*   | O(1)\*   |
| **BST**        | O(log n) | O(log n) | O(log n) | O(log n) |
| **Heap**       | O(n)     | O(n)     | O(log n) | O(log n) |
| **Graph**      | -        | O(V+E)   | O(1)     | O(1)     |

(*average case, worst case may be O(n)*)

---

##  Common Algorithms in DSA

###  Searching

* Linear Search – O(n)
* Binary Search – O(log n)

###  Sorting

* Bubble Sort – O(n²)
* Selection Sort – O(n²)
* Insertion Sort – O(n²)
* Merge Sort – O(n log n)
* Quick Sort – O(n log n) average, O(n²) worst
* Heap Sort – O(n log n)

###  Graph Algorithms

* BFS (Breadth First Search) – O(V+E)
* DFS (Depth First Search) – O(V+E)
* Dijkstra (Shortest Path) – O(V²) or O(E log V) with heap
* Bellman-Ford – O(VE)
* Floyd Warshall – O(V³)
* Kruskal / Prim (MST) – O(E log V)

###  Dynamic Programming

* Fibonacci, Knapsack, LCS, Matrix Chain Multiplication, etc.

---

## 7️ Real-World Applications of DS

* **Array** → Store fixed-size list, e.g., leaderboard.
* **Stack** → Undo in text editors, browser history.
* **Queue** → Print jobs, CPU scheduling.
* **Linked List** → Music playlist, dynamic memory.
* **Hash Table** → Caches, dictionaries, DB indexes.
* **Tree** → File system, XML/HTML parsing, DB indexes.
* **Heap** → Priority queues, scheduling.
* **Graph** → Social networks, maps, recommendation systems.
* **Trie** → Autocomplete in search engines.

---

 
---

#  **Asymptotic Analysis in DSA**

---

##  What is Asymptotic Analysis?

* **Definition**: It is the mathematical way of analyzing the performance (time or space) of an algorithm when the input size `n` grows **very large**.
* Instead of exact execution time, we focus on **growth rate**.

    Why? Because hardware, compilers, programming languages differ, but **growth trends stay same**.

---

##  Asymptotic Notations

These notations describe **upper bound, lower bound, and tight bound** of an algorithm’s complexity.

###  **Big-O (O-notation)**

* **Upper bound** → Worst-case performance
* Example: If an algorithm takes at most `3n² + 2n + 5` steps → O(n²)
* Meaning: It **won’t take longer** than this in big picture.

---

###  **Big-Omega (Ω-notation)**

* **Lower bound** → Best-case performance
* Example: Binary Search best case = Ω(1) (element found in first try).

---

###  **Big-Theta (Θ-notation)**

* **Tight bound** → Average case or exact growth rate (both upper & lower)
* Example: Merge Sort = Θ(n log n)

---

###  Little-o (o-notation)

* Strict upper bound, but not tight.
* Example: Linear search = o(n²)

---

###  Little-omega (ω-notation)

* Strict lower bound, but not tight.

---

##  Best, Worst & Average Cases

* **Best Case** → Minimum steps an algorithm will take.

  * Example: Linear Search best case = O(1) (first element is target).

* **Worst Case** → Maximum steps it will take.

  * Example: Linear Search worst case = O(n) (target at last or not present).

* **Average Case** → Expected steps in random scenario.

  * Example: Linear Search average = O(n/2) ≈ O(n).

        👉 In interviews, we mostly discuss **worst case** because it gives guarantee.

---

## Types of Time Complexities


---

###  **Constant Time – O(1)**

* Time does not depend on input size.

```python
def get_first(arr):
    return arr[0]   # Always 1 step
```

* Examples: Accessing array element, hash lookup.

---

###  **Logarithmic Time – O(log n)**

* Input size reduces **by half each step**.

```python
def binary_search(arr, x):
    low, high = 0, len(arr)-1
    while low <= high:
        mid = (low + high)//2
        if arr[mid] == x: return mid
        elif arr[mid] < x: low = mid + 1
        else: high = mid - 1
    return -1
```

* Example: Binary Search, Tree height operations.

👉 `log₂n` means how many times can you divide `n` by 2 before reaching 1.

---

###  **Linear Time – O(n)**

* Grows proportionally with input.

```python
def sum_arr(arr):
    s = 0
    for x in arr:
        s += x
    return s
```

* Example: Traversing array, linked list.

---

###  **Linearithmic (Log-linear) – O(n log n)**

* Combination of linear + logarithmic.
* Example: Merge Sort, Quick Sort average case, Heap Sort.

👉 Common in **divide & conquer algorithms**.

---

###  **Quadratic Time – O(n²)**

* Time grows as square of input size.

```python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
```

* Example: Bubble Sort, Insertion Sort, Selection Sort, Matrix multiplication.

---

###  **Cubic Time – O(n³)**

* Three nested loops.

```python
for i in range(n):
    for j in range(n):
        for k in range(n):
            print(i, j, k)
```

* Example: 3D matrix operations, Floyd-Warshall algorithm.

---

###  **Exponential Time – O(2ⁿ)**

* Doubles with each additional element.
* Example: Recursive Fibonacci, Traveling Salesman brute force.

---

###  **Factorial Time – O(n!)**

* Grows super fast.
* Example: Generating all permutations of `n` elements.

---

##  Graph of Growth Rates

From fastest to slowest:

```
O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(n³) < O(2ⁿ) < O(n!)
```

👉 Even small `n` makes exponential/factorial algorithms impossible.

---

##  Real-World Analogy

* **O(1)**: Taking a book from a shelf (instant).
* **O(log n)**: Finding a word in a dictionary (divide and search).
* **O(n)**: Reading all pages of a book.
* **O(n log n)**: Sorting library books efficiently.
* **O(n²)**: Comparing every student with every other student.
* **O(2ⁿ)**: Trying every possible combination of clothes.

---

 
---

#  **Linear Search**

###  Idea

* Look at each element in the list one by one.
* Compare with the target.
* If found → return index.
* If not found after checking all → return `-1`.

    👉 Works on **unsorted or sorted arrays**.

---

### code

```
linear_search(A, n, x):
    for i = 0 to n-1:
        if A[i] == x:
            return i
    return -1
```

---

###  Python Code

```python
def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1
```

---

###  Complexity

* **Best case (Ω(1))** → Element is at first position.
* **Worst case (O(n))** → Element is last or not present.
* **Average case (Θ(n))** → Element is somewhere in middle.

    👉 **Space Complexity** = O(1) (no extra memory).

---

#  **Binary Search**

###  Idea

* Works only on **sorted arrays**.
* Compare middle element with target.
* If target == mid → found.
* If target < mid → search in left half.
* If target > mid → search in right half.
* Repeat until found or subarray becomes empty.

    👉 Divide the search space by 2 each step.

---

###  Pseudocode

```
binary_search(A, n, x):
    low = 0
    high = n-1
    while low <= high:
        mid = (low + high) // 2
        if A[mid] == x:
            return mid
        else if A[mid] < x:
            low = mid + 1
        else:
            high = mid - 1
    return -1
```

---

###  Python Code

```python
def binary_search(arr, target):
    low, high = 0, len(arr)-1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1
```

---

###  Complexity

* **Best case (Ω(1))** → Target found at middle on first check.
* **Worst case (O(log n))** → Need to divide log₂n times.
* **Average case (Θ(log n))** → Logarithmic growth.

    👉 **Space Complexity** = O(1) (iterative) or O(log n) (recursive due to call stack).

---

#  **Comparison Table: Linear Search vs Binary Search**

| Feature           | Linear Search              | Binary Search         |
| ----------------- | -------------------------- | --------------------- |
| Input Requirement | Works on unsorted & sorted | Requires sorted array |
| Best Case         | O(1)                       | O(1)                  |
| Worst Case        | O(n)                       | O(log n)              |
| Average Case      | O(n)                       | O(log n)              |
| Space             | O(1)                       | O(1) iterative        |
| Approach          | Sequential                 | Divide & Conquer      |

---

* **Linear Search** = sequential checking.
* **Binary Search** = halving the search space each step.


---

#  **Linked List **

---

##  What is a Linked List?

* A **linear data structure** where elements (called **nodes**) are stored in **non-contiguous memory locations**.
* Each node has:

  1. **Data** → actual value
  2. **Pointer/Reference** → address of next node

👉 Unlike **arrays**, linked lists don’t require contiguous memory.

---

##  Types of Linked Lists

###  **Singly Linked List (SLL)**

* Each node points to the next node.
* Last node points to `NULL`.

```
Head → [Data|Next] → [Data|Next] → NULL
```

###  **Doubly Linked List (DLL)**

* Each node points to **next** and **previous** node.

```
NULL ← [Prev|Data|Next] ↔ [Prev|Data|Next] → NULL
```

###  **Circular Linked List**

* Last node points back to head.
* Can be singly or doubly.

```
Head → [Data|Next] → [Data|Next] → … → Head
```

---

##  Operations on Linked List

We’ll do **Insertion, Deletion, Traversal, and Recursion** from first principles.

---

###  Node Definition (Python)

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None   # for singly linked list
```

---

###  Traversal (Iterative)

```python
def traverse(head):
    current = head
    while current:
        print(current.data, end=" -> ")
        current = current.next
    print("NULL")
```

---

###  Traversal (Recursive)

```python
def traverse_recursive(node):
    if node is None:
        print("NULL")
        return
    print(node.data, end=" -> ")
    traverse_recursive(node.next)
```

---

##  Insertion

### 1. Insert at Beginning

```python
def insert_at_beginning(head, data):
    new_node = Node(data)
    new_node.next = head
    return new_node   # new head
```

---

### 2. Insert at End

```python
def insert_at_end(head, data):
    new_node = Node(data)
    if head is None:
        return new_node
    current = head
    while current.next:
        current = current.next
    current.next = new_node
    return head
```

---

### 3. Insert After a Node

```python
def insert_after(prev_node, data):
    if prev_node is None:
        print("Previous node cannot be NULL")
        return
    new_node = Node(data)
    new_node.next = prev_node.next
    prev_node.next = new_node
```

---

##  Deletion

### 1. Delete First Node

```python
def delete_first(head):
    if head is None:
        return None
    return head.next
```

---

### 2. Delete Last Node

```python
def delete_last(head):
    if head is None or head.next is None:
        return None
    current = head
    while current.next.next:
        current = current.next
    current.next = None
    return head
```

---

### 3. Delete by Value

```python
def delete_value(head, key):
    if head is None:
        return None
    if head.data == key:
        return head.next
    current = head
    while current.next and current.next.data != key:
        current = current.next
    if current.next:
        current.next = current.next.next
    return head
```

---

##  Recursion in Linked List

###  Count Nodes (Recursive)

```python
def count_nodes(node):
    if node is None:
        return 0
    return 1 + count_nodes(node.next)
```

---

###  Search in Linked List (Recursive)

```python
def search(node, key):
    if node is None:
        return False
    if node.data == key:
        return True
    return search(node.next, key)
```

---

###  Reverse Linked List (Recursive)

```python
def reverse_recursive(head):
    if head is None or head.next is None:
        return head
    new_head = reverse_recursive(head.next)
    head.next.next = head
    head.next = None
    return new_head
```

---

##  Complexity Analysis

| Operation           | Singly LL | Doubly LL           |
| ------------------- | --------- | ------------------- |
| Traverse            | O(n)      | O(n)                |
| Insert at beginning | O(1)      | O(1)                |
| Insert at end       | O(n)      | O(1) if tail stored |
| Insert after node   | O(1)      | O(1)                |
| Delete first        | O(1)      | O(1)                |
| Delete last         | O(n)      | O(1) if tail stored |
| Search              | O(n)      | O(n)                |

    👉 Recursion usually adds **O(n) stack space**.
---




 

---

#  Recursion 
---

##  What is Recursion?

**Definition**: A function calling itself **directly or indirectly** to solve a smaller version of the same problem.

* Every recursive solution has two parts:

  1. **Base Case** → A condition where recursion stops (otherwise it goes infinite).
  2. **Recursive Case** → The function reduces the problem into a smaller subproblem and calls itself.

---

##  How Recursion Works (Step by Step)

Think of recursion like a **stack of unfinished tasks**:

1. Each time a recursive call is made, the current function call is **paused** and pushed onto the **call stack**.
2. The recursion continues until the **base case** is reached.
3. Then, the functions start **returning results back up the stack**.

👉 Recursion is deeply connected with **stack data structure**.

---

##  Example 1: Factorial

**Definition**: `n! = n × (n-1) × (n-2) × … × 1`

###  Step-by-Step Thought Process

* `5! = 5 × 4!`
* `4! = 4 × 3!`
* `3! = 3 × 2!`
* `2! = 2 × 1!`
* `1! = 1` (**base case**)

---

###  Code

```python
def factorial(n):
    if n == 0 or n == 1:   # Base case
        return 1
    return n * factorial(n-1)  # Recursive case
```

###  Execution for factorial(4)

```
factorial(4) 
= 4 * factorial(3) 
= 4 * (3 * factorial(2)) 
= 4 * (3 * (2 * factorial(1))) 
= 4 * (3 * (2 * 1)) 
= 24
```

---

##  Example 2: Fibonacci

**Definition**: `Fib(n) = Fib(n-1) + Fib(n-2)`

* Base Cases: `Fib(0)=0, Fib(1)=1`

```python
def fibonacci(n):
    if n == 0: return 0
    if n == 1: return 1
    return fibonacci(n-1) + fibonacci(n-2)
```

👉 Note: This is elegant but inefficient (`O(2ⁿ)`). We can optimize with DP (memoization).

---

##  Types of Recursion

1. **Direct Recursion** → Function calls itself directly.

   ```python
   def f(): 
       f()
   ```

2. **Indirect Recursion** → Two or more functions call each other.

   ```python
   def A(): B()
   def B(): A()
   ```

3. **Tail Recursion** → Recursive call is the last operation.

   * Easier to optimize (like loops).

4. **Non-Tail Recursion** → Work remains after recursive call (e.g., factorial).

---

##  Recursion vs Iteration

| Feature     | Recursion           | Iteration        |
| ----------- | ------------------- | ---------------- |
| Uses        | Function call stack | Loop constructs  |
| Space       | More (stack frames) | Less (constant)  |
| Readability | Cleaner, elegant    | Sometimes messy  |
| Performance | Can be slower       | Usually faster   |
| Best for    | Divide & Conquer    | Repetitive tasks |

---

##  Complexity Analysis

* **Factorial Recursive**:

  * Time = O(n) (n calls)
  * Space = O(n) (stack depth)

* **Fibonacci Recursive**:

  * Time = O(2ⁿ) (bad brute force)
  * Space = O(n) (stack depth)

👉 Recursion is powerful, but we must analyze **time and space trade-offs**.

---

##  Real-World Examples of Recursion

* File system traversal (folders inside folders)
* Tree/Graph traversals (DFS)
* Divide and Conquer algorithms:

  * Merge Sort
  * Quick Sort
* Dynamic Programming problems (Knapsack, LCS, etc.)

--

