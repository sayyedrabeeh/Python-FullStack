 

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
 


#  **Bubble Sort **

---


We want to **sort an array** into ascending (or descending) order.
👉 First principle: If the array is not sorted, some numbers are **out of order**.

Example: `[5, 3, 8, 4, 2]`

Notice `5 > 3` → they’re **out of order**.

---

##  The Core Idea (Inspiration)

* If we repeatedly **compare adjacent elements** and **swap them when out of order**, the **largest element “bubbles” to the end** in each pass.
* Do this for all elements → array becomes sorted.

That’s why it’s called **Bubble Sort**.

---

##  Step-by-Step Example

### Pass 1:

Array: `[5, 3, 8, 4, 2]`

* Compare 5 & 3 → swap → `[3, 5, 8, 4, 2]`
* Compare 5 & 8 → no swap → `[3, 5, 8, 4, 2]`
* Compare 8 & 4 → swap → `[3, 5, 4, 8, 2]`
* Compare 8 & 2 → swap → `[3, 5, 4, 2, 8]`

👉 Largest (`8`) is now at the **end**.

---

### Pass 2:

Array: `[3, 5, 4, 2, 8]`

* Compare 3 & 5 → no swap → `[3, 5, 4, 2, 8]`
* Compare 5 & 4 → swap → `[3, 4, 5, 2, 8]`
* Compare 5 & 2 → swap → `[3, 4, 2, 5, 8]`

👉 `5` is now in the **second last place**.

---

### Pass 3:

Array: `[3, 4, 2, 5, 8]`

* Compare 3 & 4 → no swap
* Compare 4 & 2 → swap → `[3, 2, 4, 5, 8]`

👉 `4` is in place.

---

### Pass 4:

Array: `[3, 2, 4, 5, 8]`

* Compare 3 & 2 → swap → `[2, 3, 4, 5, 8]`

👉 Sorted ✅

---

##  Algorithm (Pseudocode)

```
bubble_sort(A, n):
    for i = 0 to n-1:
        for j = 0 to n-i-2:
            if A[j] > A[j+1]:
                swap(A[j], A[j+1])
```

---

##  Python Code

```python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(n - i - 1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr
```

---

##  Optimization (Early Stopping)

👉 If no swaps happen in a pass, the array is already sorted.

```python
def bubble_sort_optimized(arr):
    n = len(arr)
    for i in range(n):
        swapped = False
        for j in range(n - i - 1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
                swapped = True
        if not swapped:   # no swaps = sorted
            break
    return arr
```

---

##  Complexity Analysis

* **Best Case (Ω(n))**: Array already sorted → only 1 pass (with optimized version).
* **Worst Case (O(n²))**: Array sorted in reverse → maximum swaps.
* **Average Case (Θ(n²))**: Roughly half elements swapped each pass.
* **Space Complexity**: O(1) → sorting is in-place.

---

##  Real-World Analogy

Imagine students standing in a line by height:

* Compare neighbors → if taller before shorter → swap.
* Repeat passes until tallest is at the end, then next tallest, etc.

---
 

 

#  Insertion Sort 

---

## 1. **Core Intuition (Real-Life Analogy)**

Imagine you are **arranging playing cards in your hand** one by one:

* You start with the first card (already sorted).
* Take the next card and **insert** it into its correct position among the already sorted cards.
* Repeat for all cards until the hand is sorted.

This is exactly what **insertion sort** does.

---

## 2. **Algorithm Idea**

* Divide the array into two parts:

  * **Sorted part** (initially just the first element).
  * **Unsorted part** (the rest).
* Take elements from the unsorted part one by one.
* Insert each into the correct position in the sorted part (by shifting elements if needed).

---

## 3. **Steps from Scratch**

Suppose array = `[5, 3, 4, 1, 2]`

1. Start with the first element `[5]` (already sorted).
2. Take `3` → compare with `5` → `3 < 5` → insert before `5`.
   New array: `[3, 5, 4, 1, 2]`
3. Take `4` → compare with `5` → `4 < 5`, shift `5`. Compare with `3` → `4 > 3`. Insert after `3`.
   New array: `[3, 4, 5, 1, 2]`
4. Take `1` → compare with `5` → shift. Compare with `4` → shift. Compare with `3` → shift. Insert at start.
   New array: `[1, 3, 4, 5, 2]`
5. Take `2` → compare with `5` → shift. Compare with `4` → shift. Compare with `3` → shift. Compare with `1` → stop. Insert after `1`.
   Final array: `[1, 2, 3, 4, 5]`

---

## 4. **Pseudocode (First Principles)**

```
InsertionSort(arr, n):
    for i from 1 to n-1:
        key = arr[i]              # Pick current element
        j = i - 1                 # Index of last sorted element

        while j >= 0 and arr[j] > key:
            arr[j+1] = arr[j]     # Shift element right
            j = j - 1

        arr[j+1] = key            # Insert key at correct position
```

---

## 5. **Dry Run**

Array = `[7, 4, 5, 2]`

* **i=1**: key=4 → compare with 7 → shift 7 → insert 4 → `[4, 7, 5, 2]`
* **i=2**: key=5 → compare with 7 → shift 7 → insert 5 → `[4, 5, 7, 2]`
* **i=3**: key=2 → shift 7, 5, 4 → insert 2 → `[2, 4, 5, 7]`

 Sorted.

---

## 6. **Complexity Analysis**

* **Best case (already sorted):**
  Only 1 comparison per element → **O(n)**
* **Worst case (reverse sorted):**
  Each element compared with all previous → **O(n²)**
* **Average case:** \~ **O(n²)**
* **Space Complexity:** **O(1)** (in-place sorting, no extra memory).

---

## 7. **Recursive Version (from First Principles)**

We can also define Insertion Sort recursively:

* Sort the first `n-1` elements recursively.
* Insert the last element into the correct position in the sorted array.

### Recursive Pseudocode:

```
RecursiveInsertionSort(arr, n):
    if n <= 1:
        return

    RecursiveInsertionSort(arr, n-1)

    last = arr[n-1]
    j = n-2

    while j >= 0 and arr[j] > last:
        arr[j+1] = arr[j]
        j = j - 1

    arr[j+1] = last
```

 
---

#  Selection Sort

---

## 1. What is Selection Sort?

Selection Sort is a **comparison-based sorting algorithm**.
It works by **dividing the array into two parts**:

1. A sorted portion (at the beginning).
2. An unsorted portion (the rest of the array).

At each step:

* You **find the minimum element** from the unsorted portion.
* You **swap it with the first element of the unsorted portion**.
* This expands the sorted portion by one element.

---

## 2. Step-by-Step 

Imagine you have an **unsorted array**:

```
[29, 10, 14, 37, 13]
```

* Step 1: Look at the whole array. The **minimum** is `10`.
  Swap `10` with the first element `29`.
  → `[10, 29, 14, 37, 13]` (now `10` is in the right place).

* Step 2: Now ignore the first element (sorted). Find the min in `[29, 14, 37, 13]`.
  Min = `13`. Swap `13` with `29`.
  → `[10, 13, 14, 37, 29]`.

* Step 3: Ignore first 2 elements. Min in `[14, 37, 29]` = `14`.
  Already in place, so no swap.
  → `[10, 13, 14, 37, 29]`.

* Step 4: Ignore first 3. Min in `[37, 29]` = `29`. Swap `29` with `37`.
  → `[10, 13, 14, 29, 37]`.

* Step 5: Only one element left, already sorted.

 Final sorted array: `[10, 13, 14, 29, 37]`.

---

## 3. Algorithm (in words)

1. Start with the first element of the array.
2. Search through the rest of the array to find the smallest element.
3. Swap the smallest element with the first element.
4. Move the boundary of the sorted portion by one step forward.
5. Repeat steps 2–4 until the array is sorted.

---

## 4. Pseudocode

```
for i = 0 to n-2:
    min_index = i
    for j = i+1 to n-1:
        if arr[j] < arr[min_index]:
            min_index = j
    swap(arr[i], arr[min_index])
```

---

## 5. Example in Python

```python
def selection_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        min_index = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_index]:
                min_index = j
        arr[i], arr[min_index] = arr[min_index], arr[i]
    return arr

print(selection_sort([29, 10, 14, 37, 13]))
```

Output:

```
[10, 13, 14, 29, 37]
```

---

## 6. Complexity Analysis

* **Best Case:** O(n²) (still compares all elements, no shortcuts).
* **Worst Case:** O(n²).
* **Average Case:** O(n²).
* **Space Complexity:** O(1) (in-place).
* **Stability:** ❌ Not stable (swapping can disturb order of equal elements).

---

## 7. First-Principles Understanding

Why does this work?

* Every time we find the **smallest element in the unsorted part**, we are ensuring that at least **one element is guaranteed to be in its final correct position** after each iteration.
* Repeating this n times guarantees the whole array becomes sorted.

---
 
---

# 🔹 Quick Sort

## 1. **What is Quick Sort?**

Quick Sort is a **divide-and-conquer sorting algorithm**.
Instead of sorting the whole array directly, it:

1. **Divides**: Picks a "pivot" element and rearranges the array so that:

   * All elements smaller than the pivot go to its left.
   * All elements greater than the pivot go to its right.
     (This step is called **partitioning**.)
2. **Conquers**: Recursively applies the same process on left and right sub-arrays.
3. **Combines**: Since partitioning places pivot in correct position, we just merge the results (no extra merging needed like Merge Sort).

---

## 2. **First Principle Idea**

Imagine sorting a stack of exam papers:

* You pick **one paper as reference** (pivot).
* You move all papers with **lower marks** to the left pile, and **higher marks** to the right pile.
* Now the pivot paper is in its final sorted position.
* You **repeat recursively** for left and right piles until every pile has 1 or 0 papers.

This is exactly Quick Sort.

---

## 3. **Step-by-Step Process**

Example: Sort `[10, 7, 8, 9, 1, 5]`

1. Choose **pivot** (say last element `5`).
2. Partition:

   * Compare each element with pivot `5`.
   * Move smaller ones before pivot → `[1, 5, 10, 7, 8, 9]`.
   * Pivot (`5`) is now in its correct place.
3. Recurse:

   * Left: `[1]` (already sorted).
   * Right: `[10, 7, 8, 9]` → repeat partitioning.

Eventually: `[1, 5, 7, 8, 9, 10]`.

---

## 4. **Algorithm (First Principle Pseudocode)**

### Partition Function:

```
partition(A, low, high):
    pivot = A[high]           # pick last element
    i = low - 1               # place for smaller elements
    for j from low to high-1:
        if A[j] <= pivot:     # element should go to left side
            i = i + 1
            swap A[i] and A[j]
    swap A[i+1] and A[high]   # place pivot at correct pos
    return i+1                # pivot index
```

### Quick Sort Function:

```
quickSort(A, low, high):
    if low < high:
        pi = partition(A, low, high)   # pivot index
        quickSort(A, low, pi-1)        # sort left subarray
        quickSort(A, pi+1, high)       # sort right subarray
```

---

## 5. **Complexity Analysis**

* **Best Case (balanced splits):**
  Every partition divides array \~half → **O(n log n)**.
* **Worst Case (already sorted, bad pivot):**
  Partition divides array into (n-1 and 0) each time → **O(n²)**.
* **Average Case:**
  Random pivot makes splits balanced on average → **O(n log n)**.
* **Space Complexity:**

  * In-place sorting → **O(1)** extra memory.
  * Recursion stack → **O(log n)** (best), **O(n)** (worst).

---

## 6. **Python Implementation  **

```python
def partition(arr, low, high):
    pivot = arr[high]  # last element as pivot
    i = low - 1        # pointer for smaller elements
    
    for j in range(low, high):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    
    arr[i+1], arr[high] = arr[high], arr[i+1]
    return i + 1

def quick_sort(arr, low, high):
    if low < high:
        pi = partition(arr, low, high)   # pivot index
        quick_sort(arr, low, pi-1)       # left side
        quick_sort(arr, pi+1, high)      # right side

# Example
arr = [10, 7, 8, 9, 1, 5]
quick_sort(arr, 0, len(arr)-1)
print("Sorted:", arr)
```

✅ Output: `Sorted: [1, 5, 7, 8, 9, 10]`

---

## 7. **Key Insights**

* Quick Sort is **faster in practice than Merge Sort** for small-to-medium datasets (because it sorts in-place).
* Pivot selection is crucial:

  * Bad pivot = worst case (`O(n²)`).
  * Randomized pivot selection avoids this problem.
* Recursive → naturally elegant, but tail recursion optimizations can make it more iterative.

 
---

# 🔹 Merge Sort

### 1. **The Problem**

We want to sort an array of size `n`.

* Naïve methods like **Bubble, Insertion, Selection sort** take **O(n²)** in the worst case.
* Can we do better? Yes — by using a **Divide and Conquer strategy**.

---

### 2. **The Core Idea (Divide & Conquer)**

Merge Sort is based on **three steps**:

1. **Divide** → Split the array into two halves.

   * Keep dividing until each subarray has **1 element** (a single element is always sorted).

2. **Conquer (Sort)** → Recursively sort each half.

3. **Combine (Merge)** → Merge two sorted halves into one sorted array.

👉 Key trick: Merging two **sorted arrays** can be done in **O(n)** (linear time).

---

### 3. **Step-by-Step Example**

Suppose we want to sort:
`[38, 27, 43, 3, 9, 82, 10]`

1. Divide into halves:

   * `[38, 27, 43, 3]` and `[9, 82, 10]`

2. Divide further until single elements:

   * `[38] [27] [43] [3] [9] [82] [10]`

3. Merge back step by step:

   * Merge `[38]` and `[27]` → `[27, 38]`
   * Merge `[43]` and `[3]` → `[3, 43]`
   * Merge `[9]` and `[82]` → `[9, 82]`
   * Merge `[27, 38]` and `[3, 43]` → `[3, 27, 38, 43]`
   * Merge `[9, 82]` and `[10]` → `[9, 10, 82]`
   * Merge `[3, 27, 38, 43]` and `[9, 10, 82]` → `[3, 9, 10, 27, 38, 43, 82]`

✅ Fully sorted array.

---

### 4. **Algorithm (Recursive Pseudocode)**

```text
MERGE_SORT(A):
    if size of A ≤ 1:
        return A
    
    mid = length(A) / 2
    left = MERGE_SORT(A[0:mid])
    right = MERGE_SORT(A[mid:])
    
    return MERGE(left, right)

MERGE(left, right):
    create empty result array
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] ≤ right[j]:
            append left[i] to result
            i++
        else:
            append right[j] to result
            j++
    
    append remaining elements of left (if any)
    append remaining elements of right (if any)
    
    return result
```

---

### 5. **Complexity Analysis**

#### 🔹 Time Complexity

* Dividing step → O(log n) levels (because we keep halving).
* At each level, merging takes **O(n)** (since we merge all elements once).
* Total = O(n log n).

✅ Best Case = **O(n log n)**
✅ Worst Case = **O(n log n)**
✅ Average Case = **O(n log n)**

#### 🔹 Space Complexity

* Needs **O(n)** extra space (for temporary arrays during merging).
* Recursive stack = **O(log n)**.
* Total = **O(n)**.

---

### 6. **Why Merge Sort is Important**

* One of the **first efficient sorting algorithms** you learn.
* Stable sort (preserves relative order of equal elements).
* Preferred when:

  * Large data sets.
  * Stability is required.
  * Linked lists (since merging is easy without shifting elements).

---

 
 