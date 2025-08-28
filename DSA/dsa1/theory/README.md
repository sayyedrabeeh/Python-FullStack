 

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

