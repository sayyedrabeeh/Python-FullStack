 

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
