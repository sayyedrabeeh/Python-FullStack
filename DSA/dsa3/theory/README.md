# Graph 
##  What is a Graph?

A **graph** is a data structure used to represent relationships (connections) between objects.

* A graph is made up of:

  * **Vertices (nodes):** The entities (e.g., people, cities, computers).
  * **Edges (links):** The connections/relationships between nodes.

 Example:
In a social network graph:

* Nodes = users
* Edges = friendships/follows

---

##  Why Graphs Are Important

Graphs are used whenever **relationships** or **connections** matter. They let us:

1. **Model real-world systems** (people, computers, cities, molecules).
2. **Search efficiently** (shortest paths, recommendations).
3. **Discover patterns** (communities, influence, fraud).

---

##  Uses of Graphs in Different Fields

### 1. **Artificial Intelligence (AI & Machine Learning)**

Graphs model **knowledge and reasoning**.

* **Knowledge Graphs (Google, ChatGPT, etc.):**
  Store facts in a graph form:

  * Node: “Einstein”
  * Node: “Theory of Relativity”
  * Edge: “developed”

   Used in AI for answering questions, reasoning, and recommendations.
  Example: “Who developed the theory of relativity?” → Follow edges.

* **Graph Neural Networks (GNNs):**
  A type of deep learning where input is a graph.
   Used in **drug discovery**, **fraud detection**, **recommendations**, etc.

---

### 2. **Network Routing (Internet, Telecom, GPS)**

The internet and GPS maps are basically graphs.

* Nodes = routers/computers/cities
* Edges = cables/links/roads

Algorithms like:

* **Dijkstra’s Algorithm:** Finds shortest path (used in Google Maps).
* **Bellman-Ford / A* search:*\* Handles weights, costs, or heuristics.

 Example:

* When you type a destination in Google Maps → graph search finds the fastest route.
* Internet routing (TCP/IP, OSPF, BGP protocols) → routers exchange graph information and pick the shortest path to send data packets.

---

### 3. **Social Networks (Facebook, Instagram, Twitter/X, LinkedIn)**

Social networks are **huge graphs**.

* Node = person
* Edge = friendship/follow/connection

Uses:

* **Friend recommendations (“People you may know”)** → Graph traversal + common neighbors.
* **Influence detection** → Finding highly connected nodes (influencers).
* **Community detection** → Clustering algorithms (find groups with strong internal connections).
* **Content ranking** → Graph-based PageRank (Google originally ranked pages this way).

---

### 4. **Other Important Fields**

* **Biology & Medicine:** Protein interaction networks, brain neural networks.
* **Transportation:** Airports and flights (Airline route optimization).
* **Recommendation Systems:** Amazon/Netflix use graph-based algorithms to recommend items.
* **Cybersecurity:** Fraud detection, intrusion detection, anomaly spotting via graph patterns.

---

##  How Graphs Are Used in Practice

* **Representation in code:**

  * **Adjacency Matrix** (2D array) → Fast lookup, but memory heavy.
  * **Adjacency List** (dictionary/list of neighbors) → Memory efficient, common in real apps.

* **Algorithms commonly applied:**

  * BFS & DFS → traversing/searching.
  * Dijkstra & A\* → shortest path.
  * Kruskal & Prim → minimum spanning tree (network design).
  * PageRank → ranking nodes.
  * Graph Neural Networks (GNNs) → AI learning on graph-structured data.

---

**Summary:**
Graphs are everywhere — they model **connections**.

* In **AI**, they store knowledge & power GNNs.
* In **networking**, they help find shortest/optimal routes.
* In **social networks**, they represent people & relationships for recommendations, ranking, and influence.

---

```python
class Graph:
    def __init__(self):
        self.graph = {}

    def add_node(self,node):
        if node not in self.graph:
            self.graph[node] = []

    def add_edge(self,u,v,undirected=True):
        self.add_node(u)        
        self.add_node(v)
        self.graph[u].append(v)
        if undirected:
            self.graph[v].append(u)

    def remove_edge(self,u,v,undeirected=True):
        if u in self.graph and v in self.graph[u]:
            self.graph[u].remove(v)
        if undeirected and v in self.graph and u in self.graph[v]:
            self.graph[v].remove(u)


    def remove_node(self,node):
        if node in self.graph:
            del self.graph[node]
        for i in self.graph:
            if node in self.graph[i]:
                self.graph[i].remove(node)

g = Graph()
g.add_edge(1, 2)
g.add_edge(1, 3)
g.add_edge(2, 4)
g.add_edge(3, 5)
g.add_edge(5, 6)

print("Graph:")
g.print_graph()
g.remove_edge(1, 2)
print("\nGraph after removing edge 1-2:")
g.print_graph()

g.remove_node(5)
print("\nGraph after removing node 5:")
g.print_graph()
```
 
Graphs are mainly divided into **two types based on direction of edges**:

---

##  1. **Undirected Graph**

* Edges **do not have direction**.
* If there is an edge between `A` and `B`, you can move both ways (`A ↔ B`).
* Example: **Facebook friendships** (if you’re my friend, I’m also your friend).

**Representation:**

```
A ----- B
 \     /
   \  /
     C
```

Adjacency List:

```
A -> [B, C]
B -> [A, C]
C -> [A, B]
```

---

##  2. **Directed Graph (Digraph)**

* Edges **have direction**.
* If there is an edge from `A → B`, it doesn’t mean `B → A`.
* Example: **Twitter follows** (if I follow you, you may not follow me).

**Representation:**

```
A → B
↑   ↓
C ← D
```

Adjacency List:

```
A -> [B]
B -> [D]
C -> [A]
D -> [C]
```

---

 So, based on direction, we have:

1. **Undirected Graph** → edges are two-way.
2. **Directed Graph** → edges are one-way.

---
 
---

##  Mixed Graph

A **mixed graph** is a graph where:

* Some edges are **directed** (one-way).
* Some edges are **undirected** (two-way).

 Example:

* Suppose you have 4 nodes: `A, B, C, D`
* `A → B` (directed edge)
* `B ↔ C` (undirected edge)
* `C → D` (directed edge)

**Visual:**

```
A → B ↔ C → D
```

---

##  Where do we see mixed graphs?

* **Road networks**:

  * Some roads are **one-way** (directed).
  * Some roads are **two-way** (undirected).
* **Workflow systems**:

  * Some tasks must be done in strict order (directed).
  * Others can be interchangeable (undirected).

---

##  Representation

You usually handle it like this:

* Store **directed edges** separately.
* Store **undirected edges** separately.

Example adjacency list:

```
A -> [B]         (directed: A → B)
B -> [A, C]      (undirected: B ↔ C)
C -> [B, D]
D -> []
```

---

 So answer: If a graph has both **directed** and **undirected** edges, it’s called a **Mixed Graph**.

---

##  1. **Undirected Graph**

* All edges are **two-way**.
* If there is an edge between `A` and `B`, you can go both ways (`A ↔ B`).
* Example: **Facebook friendships**.

---

##  2. **Directed Graph (Digraph)**

* All edges are **one-way**.
* If there is an edge from `A` to `B` (`A → B`), it doesn’t mean `B → A`.
* Example: **Twitter follows**.

---

##  3. **Mixed Graph**

* Some edges are **directed**, some are **undirected**.
* Example: **Road networks** (some roads are one-way, others are two-way).

---

 So, **based on direction**, the types of graphs are:

1. **Undirected Graph**
2. **Directed Graph (Digraph)**
3. **Mixed Graph**

---
 
 
---

##  Types of Graphs Based on Weights

### 1. **Weighted Graph**

* Each edge has a **weight (cost/value)**.
* Weight could mean: distance, time, cost, capacity, etc.
* Example: **Google Maps** → Cities are nodes, roads are edges, distance/time is weight.

**Example Representation:**

```
A --5-- B
B --2-- C
A --8-- C
```

Adjacency list with weights:

```
A -> [(B, 5), (C, 8)]
B -> [(A, 5), (C, 2)]
C -> [(A, 8), (B, 2)]
```

---

### 2. **Unweighted Graph**

* All edges are treated as equal (no weights).
* Used when we only care about **connections**, not cost.
* Example: **Facebook friendships** → all connections are equal.

**Example Representation:**

```
A -- B -- C
```

Adjacency list:

```
A -> [B]
B -> [A, C]
C -> [B]
```

---

 So, based on weights, graphs are:

1. **Weighted Graph** → edges have values.
2. **Unweighted Graph** → edges have no values.

---
 
 # **types of graphs based on connectivity**  

---

#  1. **Connected Graph**

 A graph is **connected** if there is a path between **any two nodes**.

* You can travel from one node to any other node.
* Applies to **undirected graphs**.

 Example:

```
A — B — C
|       |
D — — — E
```

* From `A`, you can reach `E` (through B → C → E or A → D → E).
* No isolated parts → so it’s **connected**.

---

#  2. **Disconnected Graph**

 A graph is **disconnected** if it has **two or more components** (separate parts).

* Some nodes cannot be reached from others.

 Example:

```
A — B     C — D
```

* Here `(A, B)` is one component, `(C, D)` is another.
* There is no edge connecting the two groups → **disconnected graph**.

---

#  3. **Complete Graph (Kₙ)**

 A graph is **complete** if **every node is connected to every other node**.

* Denoted as `Kₙ` where `n = number of vertices`.
* Maximum number of edges.
* Always **connected**.

 Example: Complete graph with 4 nodes (K₄):

```
   A —— B
   |\  /|
   | \/ |
   | /\ |
   |/  \|
   C —— D
```

* Each node (`A, B, C, D`) is directly connected to all others.

---

 **Quick Difference Recap**:

* **Connected Graph** → All nodes reachable, but not necessarily directly.
* **Disconnected Graph** → At least one pair of nodes cannot reach each other.
* **Complete Graph** → Strongest form of connected → every node directly linked to every other node.

---
**practical Python implementation** for the 3 connectivity-based graph types:

We’ll make a simple `Graph` class and then create **Connected, Disconnected, and Complete graphs**.

```python
class Graph:
    def __init__(self):
        self.graph = {}

    def add_edge(self, u, v, undirected=True):
        if u not in self.graph:
            self.graph[u] = []
        if v not in self.graph:
            self.graph[v] = []
        self.graph[u].append(v)
        if undirected:
            self.graph[v].append(u)

    def show_graph(self):
        for node in self.graph:
            print(node, "->", self.graph[node])


# -------- Connected Graph --------
print("✅ Connected Graph")
connected = Graph()
connected.add_edge("A", "B")
connected.add_edge("B", "C")
connected.add_edge("C", "D")
connected.add_edge("A", "D")
connected.show_graph()

print("\n")

# -------- Disconnected Graph --------
print("❌ Disconnected Graph")
disconnected = Graph()
# First component
disconnected.add_edge("A", "B")
# Second component
disconnected.add_edge("C", "D")
disconnected.show_graph()

print("\n")

# -------- Complete Graph (K4) --------
print("🌐 Complete Graph (K4)")
n = 4
nodes = ["A", "B", "C", "D"]
complete = Graph()
for i in range(n):
    for j in range(i + 1, n):
        complete.add_edge(nodes[i], nodes[j])
complete.show_graph()
```

---

### 🖥 Output:

```
 Connected Graph
A -> ['B', 'D']
B -> ['A', 'C']
C -> ['B', 'D']
D -> ['C', 'A']

 Disconnected Graph
A -> ['B']
B -> ['A']
C -> ['D']
D -> ['C']

 Complete Graph (K4)
A -> ['B', 'C', 'D']
B -> ['A', 'C', 'D']
C -> ['B', 'A', 'D']
D -> ['C', 'A', 'B']
```

---

 This way:

* First one is **Connected** (all nodes reachable).
* Second is **Disconnected** (two separate components).
* Third is **Complete** (every node connected to every other).

# **graph types based on cycle presence**.

---

#  1. **Cyclic Graph**

* A graph that contains **at least one cycle** (a closed loop).
* You can start at a node, follow edges, and come back to the same node without repeating an edge.
* Applies to both **directed** and **undirected** graphs.

 Example (Cycle exists A–B–C–A):

```
A —— B
 \    |
   \  |
     C
```

 Real-world analogy:

* Road network where you can drive in a loop and return to the start.

---

#  2. **Acyclic Graph**

* A graph with **no cycles**.
* You cannot start at a node and come back to it by following edges.

 Example:

```
A —— B —— C —— D
```

 Real-world analogy:

* Family tree (no way to loop back to ancestors).

---

#  3. **Special Case: DAG (Directed Acyclic Graph)**

* A **Directed Graph** with **no cycles**.
* Very important in **Computer Science**.

 Examples:

* Task scheduling (you cannot do task B before task A if A → B).
* Git commit history.

```
A → B → C → D
```

---

#  Summary:

Based on cycle presence, we mainly classify graphs into:

1. **Cyclic Graph** → Has at least one cycle.
2. **Acyclic Graph** → No cycles.

   * If it’s **directed** → called a **DAG (Directed Acyclic Graph)**.

---

### cycle dectetion in undericted Graph

```python

gr = {
    'A':['B'],
    'B':['A','C'],
    'C':['B'],
}

def  is_cyclic_until(node,visited,parent,gr):
    visited[node] = True
    for neghbour in gr[node]:
        if not visited.get(neghbour,False):
            if is_cyclic_until(neghbour,visited,node,gr):
                return True
        elif parent != neghbour:
            return True
    return False
    
    
    
def is_cyclic(gr):
    visited = {}
    for node in gr:
        if not visited.get(node,False):
            if is_cyclic_until(node,visited,-1,gr):
                return True
    return False
    
print('Cycle Exists? -> ',is_cyclic(gr))

```
### cycle dectetion in dericted Graph

```python

gr = {
    'A':['B'],
    'B':['C'],
    'C':['A'],
}

def is_cyclic_until(gr,node,visited,recstack):
    visited[node] = True
    recstack[node] = True
    for i in gr.get(node,[]):
        if not visited.get(i,False):
            if is_cyclic_until(gr,i,visited,recstack):
                return True
        elif recstack.get(i,False):
            return True
    recstack[node] = False
    return False
    
    
def is_cyclic(gr):
    visited = {}
    recstack = {}
    for i in gr:
        if not visited.get(i,False):
            if is_cyclic_until(gr,i,visited,recstack):
                return True
    return False
print('cycle exist ? ---> ',is_cyclic(gr))
            
 ```

  **types of graphs based on representation**graph *is***how we store it in memory**. The two most common representations are:

---

#  1. **Adjacency Matrix**

* It’s a **2D array (N×N)** where `N` = number of nodes.
* If there is an edge from node `u` to node `v`, then `matrix[u][v] = 1` (or weight, if weighted).
* If no edge, then `matrix[u][v] = 0`.

 **Pros**

* Easy to implement.
* Checking if an edge exists between `u` and `v` is **O(1)**.
* Works well for **dense graphs** (lots of edges).

 **Cons**

* Uses **O(N²) space**, even if graph has few edges.
* Traversing neighbors takes **O(N)** per node.

### Example

Graph:

```
A — B
|   |
C — D
```

Adjacency matrix (assuming A=0, B=1, C=2, D=3):

```
    A B C D
A [ 0 1 1 0 ]
B [ 1 0 0 1 ]
C [ 1 0 0 1 ]
D [ 0 1 1 0 ]
```

---

#  2. **Adjacency List**

* Each node has a list of its neighbors.
* Stored as a **dictionary of lists** (or array of linked lists).

 **Pros**

* Space efficient: uses **O(N + E)** where `E` = number of edges.
* Fast to traverse all neighbors.
* Better for **sparse graphs** (few edges).

 **Cons**

* Checking if an edge exists between `u` and `v` can take **O(degree(u))**.

### Example (same graph)

Adjacency list:

```python
{
  'A': ['B','C'],
  'B': ['A','D'],
  'C': ['A','D'],
  'D': ['B','C']
}
```

---

#  3. (Less Common) **Edge List**

* Just store all edges as pairs `(u,v)` (or `(u,v,w)` for weighted).
* Example:

  ```python
  edges = [
    ('A','B'),
    ('A','C'),
    ('B','D'),
    ('C','D')
  ]
  ```
* Simple, but not efficient for most algorithms. Mostly used for input/output.

---

#  Summary

| Representation       | Space  | Edge Check | Traverse Neighbors | Best for                     |
| -------------------- | ------ | ---------- | ------------------ | ---------------------------- |
| **Adjacency Matrix** | O(N²)  | O(1)       | O(N)               | Dense graphs                 |
| **Adjacency List**   | O(N+E) | O(degree)  | O(degree)          | Sparse graphs                |
| **Edge List**        | O(E)   | O(E)       | O(E)               | Input/output, Kruskal’s algo |

---
 
    ```python

    class Graph:
    def __init__(self):
        self.nodes = []
        self.matrix = []
    def add_node(self,node):
        if node not in self.nodes:
            self.nodes.append(node)
            size = len(self.nodes)
            for row in self.matrix:
                row.append(0)
            self.matrix.append([0] * size )
    def add_edge(self,u,v,undirected =  True):
        if u not in self.nodes:
            self.add_node(u)
        if v not in self.nodes:
            self.add_node(v)
        i,j = self.nodes.index(u),self.nodes.index(v)
        self.matrix[i][j]=1
        if undirected:
            self.matrix[i][j]=1
            
    def remove_node(u,v,undirected=True):
        if u in self.nodes and v in self.nodes: 
            i,j = self.nodes.index(u),self.nodes.index(v)
            self.matrix[i][j] = 0
            if undirected:
                self.matrix[i][j]=0
            
    def remove_node(self,node):
        if node in self.nodes:
            id = self.node.index(node)
            self.nodes.pop(id)
            self.matrix.pop(id)
            for row in self.matrix:
                row.pop(id)
    def show(self):
        print('  ', '  '.join(self.nodes))
        for i,row in enumerate(self.matrix):
            print(self.nodes[i],row)
g = Graph()
g.add_edge('A','B')
g.add_edge('A','C')
g.add_edge('B','C')
g.add_edge('D','A')
g.show()
            
            
            
            
            
 ```
 

* When checking for cycles, you still need to **traverse neighbors**.

  * For node `i`, you scan row `i` in the matrix to find all `j` where `matrix[i][j] == 1`.
  * Then DFS/BFS works the same way as with adjacency list.

Cycle detection is possible, but scanning neighbors is **O(V)** (you must look at the whole row), even if the node has only a few edges.

---

Adjacency Matrix for a Weighted Graph.

In an unweighted graph, edges are represented as 1 (connected) or 0 (not connected).
In a weighted graph, we store the actual weight (distance, cost, etc.) instead of just 1.

```python

class Graph:
    def __init__(self):
        self.nodes = []
        self.matrix = []
    def add_node(self,node):
        self.nodes.append(node)
        size = len(self.nodes)
        for row in self.matrix:
            row.append(0)
        self.matrix.append([0] * size)
    def add_edge(self,u,v,weight = 1,undirected = True):
        if u not in self.nodes:
            self.add_node(u)
        if v not in self.nodes:
            self.add_node(v)
        i,j = self.nodes.index(u),self.nodes.index(v)
        self.matrix[i][j] = weight
        if undirected:
            self.matrix[j][i] = weight
            
    def remove_edge(self,u,v,undirected = True):
        if u in self.nodes and v in self.nodes:
            i,j = self.nodes.index(u),self.nodes.index(v)
            self.matrix[i][j] = 0
            if undirected:
                self.matrix[j][i] = 0
    def remove_node(self,node):
        if node in self.nodes:
            id = self.nodes.index(node)
            self.nodes.pop(id)
            self.matrix.pop(id)
            for row in self.matrix:
                row.pop(id)
    def show_graph(self):
        print('  ','  '.join(self.nodes))
        for i,row in enumerate(self.matrix):
            print(self.nodes[i],row)
g = Graph()
g.add_edge('A','B',2)
g.add_edge('A','C',23)
g.add_edge('B','C',34)
g.add_edge('D','A',22)
g.show_graph()
        
```

### cycle in adjecency matrix undirected

```python

class Graph:
    def __init__(self):
        self.nodes = []
        self.matrix = []
    def add_node(self,node):
        self.nodes.append(node)
        size = len(self.nodes)
        for row in self.matrix:
            row.append(0)
        self.matrix.append([0] * size)
    def add_edge(self,u,v,weight = 1,undirected = True):
        if u not in self.nodes:
            self.add_node(u)
        if v not in self.nodes:
            self.add_node(v)
        i,j = self.nodes.index(u),self.nodes.index(v)
        self.matrix[i][j] = weight
        if undirected:
            self.matrix[j][i] = weight
            
    def remove_edge(self,u,v,undirected = True):
        if u in self.nodes and v in self.nodes:
            i,j = self.nodes.index(u),self.nodes.index(v)
            self.matrix[i][j] = 0
            if undirected:
                self.matrix[j][i] = 0
    def remove_node(self,node):
        if node in self.nodes:
            id = self.nodes.index(node)
            self.nodes.pop(id)
            self.matrix.pop(id)
            for row in self.matrix:
                row.pop(id)
    def is_cyclic_until(self,node,visited,parent):
        visited[node] = True
        for i,w in enumerate(self.matrix[node]):
            if w != 0:
                if not visited[i]:
                    if self.is_cyclic_until(i,visited,node):
                        return True
                elif i != parent:
                        return True
    
    def is_cyclic(self):
        n = len(self.nodes)
        visited = [False] * n
        for i in range(n):
            if not visited[i]:
                if self.is_cyclic_until(i,visited,-1):
                    return True
        return False
        
        
        
        
        
    def show_graph(self):
        print('  ','  '.join(self.nodes))
        for i,row in enumerate(self.matrix):
            print(self.nodes[i],row)
g = Graph()
g.add_edge('A','B',2)
g.add_edge('A','C',23)
g.add_edge('B','D',34)
g.add_edge('D','B',22)
g.show_graph()
        
print(g.is_cyclic())
                 
            
```
### cycle in adjecency matrix directed

```python
class Graph:
    def __init__(self):
        self.nodes = []
        self.matrix = []
    def add_node(self,node):
        self.nodes.append(node)
        size = len(self.nodes)
        for row in self.matrix:
            row.append(0)
        self.matrix.append([0] * size)
    def add_edge(self,u,v ,undirected = True):
        if u not in self.nodes:
            self.add_node(u)
        if v not in self.nodes:
            self.add_node(v)
        i,j = self.nodes.index(u),self.nodes.index(v)
        self.matrix[i][j] = 1
        if undirected:
            self.matrix[j][i] =1
            
    def remove_edge(self,u,v,undirected = True):
        if u in self.nodes and v in self.nodes:
            i,j = self.nodes.index(u),self.nodes.index(v)
            self.matrix[i][j] = 0
            if undirected:
                self.matrix[j][i] = 0
    def remove_node(self,node):
        if node in self.nodes:
            id = self.nodes.index(node)
            self.nodes.pop(id)
            self.matrix.pop(id)
            for row in self.matrix:
                row.pop(id)
    def is_cyclic_until(self,node,visited,recstack,parent):
        visited[node] = True
        recstack[node] = True
        for i,w in enumerate(self.matrix[node]):
            if w != 0:
                if not visited[i]:
                    if self.is_cyclic_until(i,visited,recstack,node):
                        return True
                elif recstack[i] :
                        return True
        recstack[node] = False
        return False
        
    def is_cyclic(self):
        n = len(self.nodes)
        visited = [False] * n
        recstack = [False] * n
        for i in range(n):
            if not visited[i]:
                if self.is_cyclic_until(i,visited,recstack,-1):
                    return True
        return False
        
        
        
    def show_graph(self):
        print('  ','  '.join(self.nodes))
        for i,row in enumerate(self.matrix):
            print(self.nodes[i],row)
g = Graph()
g.add_edge('A','B',2)
g.add_edge('A','C',23)
g.add_edge('B','D',34)
g.add_edge('D','B',22)
g.show_graph()
        
print(g.is_cyclic())
```
        
 

---

## ** What is BFS?**

BFS stands for **Breadth-First Search**.

* It is a **graph traversal algorithm**.
* It visits nodes **level by level**, starting from a source node.
* First, it visits all neighbors of the source node, then all neighbors of those neighbors, and so on.

Imagine BFS like **ripples in a pond**:

* You drop a stone (start node),
* The water spreads out in layers — nodes closest to the start get visited first, then the next layer, and so on.

---

## ** How BFS Works**

### Steps:

1. **Start at a node** → mark it as visited.
2. **Add it to a queue** (FIFO).
3. **Repeat until queue is empty**:

   * Remove the node from the front of the queue.
   * Visit all **unvisited neighbors** → mark them visited → add them to the queue.

**Key Data Structure:** Queue (FIFO)

* FIFO ensures **closest nodes are visited first** (level by level).

---

## ** BFS Algorithm (Pseudocode)**

```
BFS(graph, start):
    visited = set()
    queue = empty queue
    enqueue start
    visited.add(start)
    
    while queue is not empty:
        node = dequeue()
        visit(node)
        
        for neighbor in neighbors(node):
            if neighbor not in visited:
                visited.add(neighbor)
                enqueue(neighbor)
```

---

## ** BFS Example (Undirected Graph)**

Graph:

```
    A
   / \
  B   C
 / \   \
D   E   F
```

```python
from collections import deque

graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}

def bfs(graph, start):
    visited = set()
    queue = deque([start])
    visited.add(start)
    
    while queue:
        node = queue.popleft()
        print(node, end=' ')
        
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)

print("BFS Traversal starting from A:")
bfs(graph, 'A')
```

**Output:**

```
A B C D E F
```

 BFS visits **all nodes level by level**.

---

## ** Why BFS is Useful**

1. **Find Shortest Path in Unweighted Graphs**

   * BFS guarantees that the **first time you reach a node**, it’s via the shortest path from the source.
   * Example: shortest route in a map or network.

2. **Find Connected Components**

   * Helps in exploring all nodes reachable from a starting node.

3. **Solve Puzzles & Games**

   * Example: sliding puzzle, chess knight moves, word ladder (each move = neighbor).

4. **Web Crawlers / Social Networks**

   * BFS explores pages level by level (distance from starting page).

---

## ** When to Use BFS**

| Situation                             | Reason to Use BFS                                                    |
| ------------------------------------- | -------------------------------------------------------------------- |
| Shortest path in **unweighted graph** | BFS guarantees the shortest number of edges from start to target     |
| Find nodes within **k steps**         | BFS naturally explores nodes by distance from source                 |
| Level-wise processing                 | BFS visits nodes **layer by layer**, useful in trees and hierarchies |
| Solving **puzzles/games**             | BFS explores all possibilities systematically                        |
| Detecting **connected components**    | Traverses all nodes reachable from a starting node                   |

---

## ** BFS vs DFS (for clarity)**

| Feature                          | BFS                                        | DFS                                             |
| -------------------------------- | ------------------------------------------ | ----------------------------------------------- |
| Order of visit                   | Level by level                             | Depth-first                                     |
| Data structure                   | Queue (FIFO)                               | Stack / Recursion (LIFO)                        |
| Finds shortest path (unweighted) | ✅ Yes                                      | ❌ Not guaranteed                                |
| Use case                         | Shortest path, social network, level order | Topological sort, path finding, cycle detection |

---

### ** Real-life Analogy**

* BFS = **spreading news** in a town: everyone close to the source hears first.
* DFS = **exploring a maze**: go deep along a path until you hit a dead end, then backtrack.

---
 
 

#  What is DFS?

**DFS (Depth First Search)** is a graph traversal algorithm where you explore as far as possible along one branch before backtracking.

 Think of it like **exploring a maze**:

* You go down one path until you hit a dead end.
* Then you backtrack to the last decision point and try another path.

---

#  How DFS Works

DFS can be implemented in **two ways**:

1. **Recursion (stack handled automatically by function calls)**
2. **Explicit stack (manual implementation)**

### Example (recursive DFS):

```python
def dfs(graph, start, visited=None):
    if visited is None:
        visited = set()
    visited.add(start)
    print(start, end=" ")

    for neighbor in graph[start]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)
```

---

#  Step-by-step traversal idea


```python
graph = {
    'A': ['B', 'C', 'G'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E'],
    'G': []
}
```

Starting DFS at `"A"` → possible order:

```
A → B → D → E → F → C → G
```

⚠ Note: DFS order can vary depending on adjacency list order.

---

#  When to Use DFS

DFS is best for **deep exploration** problems:

 **Pathfinding / Maze Solving**

* DFS explores one path fully before trying another.
* If you just need *any* path (not shortest), DFS is efficient.

 **Topological Sorting** (ordering tasks with dependencies)

 **Detecting Cycles in Graphs**

* DFS can mark nodes as *visiting* vs *visited* to detect cycles.

 **Connected Components**

* Use DFS to explore all nodes reachable from a starting node.

 **Game Trees / Puzzle Solving**

* DFS explores all possible moves until it finds a solution.

---

#  When NOT to Use DFS

 When you need the **shortest path in an unweighted graph** → Use **BFS**, not DFS.

* DFS may find a path, but not necessarily the shortest.

 If the graph is very deep and recursive DFS is used → **Stack Overflow** (too many recursive calls).

* Iterative DFS with an explicit stack avoids this.

---

#  DFS vs BFS in Simple Terms

| Feature              | DFS                                                           | BFS                                                                                    |
| -------------------- | ------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| Strategy             | Go deep, then backtrack                                       | Explore level by level                                                                 |
| Data Structure       | Stack (or recursion)                                          | Queue                                                                                  |
| Finds shortest path? | ❌ No                                                          | ✅ Yes (in unweighted graphs)                                                           |
| Memory usage         | Low (good for sparse graphs)                                  | Higher (stores many nodes in queue)                                                    |
| Best use cases       | Pathfinding (not shortest), cycle detection, topological sort | Shortest path in unweighted graph, spreading processes (like virus, network broadcast) |

---

#  Real-life Examples

* **DFS**:

  * Solving mazes
  * Detecting cycles in dependency graphs
  * Analyzing connected social groups

* **BFS**:

  * Finding shortest route on a map
  * Level order traversal in trees (like showing "friends of friends" on Facebook)
  * Spreading information/virus simulation.
---

# ** What is a Shortest Path?**

In a graph, the **shortest path** between two nodes is the path with the **minimum cost/distance/weight**.

* In **unweighted graphs**, shortest path = **minimum number of edges**.
* In **weighted graphs**, shortest path = **minimum sum of weights along edges**.

---

# ** Types of Shortest Path Problems**

| Problem Type                                  | Description                      | Algorithm Commonly Used |
| --------------------------------------------- | -------------------------------- | ----------------------- |
| **Unweighted graph**                          | All edges are equal              | BFS                     |
| **Weighted graph (positive weights)**         | Edge weights > 0                 | Dijkstra                |
| **Weighted graph (negative weights allowed)** | Edge weights can be negative     | Bellman-Ford            |
| **All-pairs shortest path**                   | Shortest paths between all nodes | Floyd-Warshall          |

---

# ** BFS for Shortest Path (Unweighted Graph)**

**Idea:**

* BFS visits nodes **level by level**, so the first time you reach a node, it’s via the **shortest path** in terms of edges.

**Example:**

```python
from collections import deque

graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}

def bfs_shortest_path(graph, start, goal):
    visited = set([start])
    queue = deque([[start]])  # store paths
    
    while queue:
        path = queue.popleft()
        node = path[-1]
        
        if node == goal:
            return path  # shortest path
        
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                new_path = list(path)
                new_path.append(neighbor)
                queue.append(new_path)

print("Shortest path from A to F:", bfs_shortest_path(graph, 'A', 'F'))
```

**Output:**

```
Shortest path from A to F: ['A', 'C', 'F']
```

 Works only for **unweighted graphs**.

---

# ** Dijkstra’s Algorithm (Weighted Graph, Positive Weights)**

**Idea:**

* Keeps track of the **minimum distance from start** to every node.
* Always picks the node with the **current smallest distance** to explore next.

**Steps:**

1. Initialize distances → `start = 0`, others = `∞`.
2. Pick the node with **minimum distance** that’s not visited.
3. Update distances of neighbors.
4. Repeat until all nodes visited.

**Python Example:**

```python
import heapq

graph = {
    'A': [('B', 2), ('C', 5)],
    'B': [('A', 2), ('D', 4), ('E', 3)],
    'C': [('A', 5), ('F', 2)],
    'D': [('B', 4)],
    'E': [('B', 3), ('F', 1)],
    'F': [('C', 2), ('E', 1)]
}

def dijkstra(graph, start):
    pq = [(0, start)]  # (distance, node)
    distances = {node: float('inf') for node in graph}
    distances[start] = 0
    
    while pq:
        dist, node = heapq.heappop(pq)
        if dist > distances[node]:
            continue
        for neighbor, weight in graph[node]:
            if distances[node] + weight < distances[neighbor]:
                distances[neighbor] = distances[node] + weight
                heapq.heappush(pq, (distances[neighbor], neighbor))
    
    return distances

print("Shortest distances from A:", dijkstra(graph, 'A'))
```

**Output:**

```
Shortest distances from A: {'A': 0, 'B': 2, 'C': 5, 'D': 6, 'E': 5, 'F': 6}
```

---

# ** Bellman-Ford Algorithm (Handles Negative Weights)**

* Works even if **edge weights are negative**.
* Detects **negative cycles**.
* Slower than Dijkstra: **O(V \* E)**

---

# ** Floyd-Warshall Algorithm (All-Pairs Shortest Path)**

* Computes shortest paths **between all pairs of nodes**.
* Uses dynamic programming → updates distances using intermediate nodes.
* Complexity: **O(V³)**

---

# ** When to Use Each**

| Scenario                                     | Algorithm      |
| -------------------------------------------- | -------------- |
| Unweighted graph, shortest in terms of edges | BFS            |
| Weighted graph, positive weights             | Dijkstra       |
| Weighted graph, negative weights allowed     | Bellman-Ford   |
| Find shortest paths for **all pairs**        | Floyd-Warshall |



---

# ** Dijkstra’s Algorithm**

**Purpose:**

* Finds the **shortest path from a single source** to all other nodes in a graph.
* Works **only if all edge weights are non-negative**.

**Idea:**

1. Keep track of the **minimum distance** from the source to each node.
2. Always select the node with the **current smallest distance** (priority queue / min-heap).
3. Update distances of neighbors if a shorter path is found.
4. Repeat until all nodes are processed.

**Python Example:**

```python
import heapq

graph = {
    'A': [('B', 2), ('C', 5)],
    'B': [('A', 2), ('D', 4), ('E', 3)],
    'C': [('A', 5), ('F', 2)],
    'D': [('B', 4)],
    'E': [('B', 3), ('F', 1)],
    'F': [('C', 2), ('E', 1)]
}

def dijkstra(graph, start):
    distances = {node: float('inf') for node in graph}
    distances[start] = 0
    pq = [(0, start)]  # (distance, node)

    while pq:
        dist, node = heapq.heappop(pq)
        if dist > distances[node]:
            continue
        for neighbor, weight in graph[node]:
            if distances[node] + weight < distances[neighbor]:
                distances[neighbor] = distances[node] + weight
                heapq.heappush(pq, (distances[neighbor], neighbor))
    
    return distances

print(dijkstra(graph, 'A'))
```

**Output:**

```
{'A': 0, 'B': 2, 'C': 5, 'D': 6, 'E': 5, 'F': 6}
```

**When to use:**

* Positive-weighted graphs.
* Single-source shortest path.

---

# **Bellman-Ford Algorithm**

**Purpose:**

* Finds the **shortest path from a single source**.
* Can handle **negative weights**.
* Can **detect negative cycles** (where total weight becomes negative in a loop).

**Idea:**

1. Initialize distances from the source to all nodes as `∞`, distance to source = 0.
2. Relax all edges **V-1 times** (V = number of vertices).
3. Check for **negative cycles** by trying to relax edges again.

**Python Example:**

```python
def bellman_ford(graph, start):
    distances = {node: float('inf') for node in graph}
    distances[start] = 0

    for _ in range(len(graph) - 1):
        for node in graph:
            for neighbor, weight in graph[node]:
                if distances[node] + weight < distances[neighbor]:
                    distances[neighbor] = distances[node] + weight

    # Check for negative cycles
    for node in graph:
        for neighbor, weight in graph[node]:
            if distances[node] + weight < distances[neighbor]:
                print("Graph contains negative weight cycle")
                return None

    return distances

graph_neg = {
    'A': [('B', 4), ('C', 2)],
    'B': [('C', -3), ('D', 2)],
    'C': [('D', 3)],
    'D': []
}

print(bellman_ford(graph_neg, 'A'))
```

**Output:**

```
{'A': 0, 'B': 4, 'C': 1, 'D': 4}
```

**When to use:**

* Graph has **negative edge weights**.
* Need **single-source shortest path**.
* Detect negative cycles.

---

# **Floyd-Warshall Algorithm**

**Purpose:**

* Computes **shortest paths between all pairs of nodes**.
* Works for **positive and negative weights** (but no negative cycles).

**Idea:**

* Use **dynamic programming**.
* Consider each node as an **intermediate point** in the path.
* Update distances using the formula:

```
dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])
```

**Python Example:**

```python
def floyd_warshall(nodes, edges):
    dist = {u: {v: float('inf') for v in nodes} for u in nodes}
    
    for u in nodes:
        dist[u][u] = 0

    for u in edges:
        for v, w in edges[u]:
            dist[u][v] = w

    for k in nodes:
        for i in nodes:
            for j in nodes:
                if dist[i][k] + dist[k][j] < dist[i][j]:
                    dist[i][j] = dist[i][k] + dist[k][j]

    return dist

nodes = ['A', 'B', 'C', 'D']
edges = {
    'A': [('B', 4), ('C', 2)],
    'B': [('C', -3), ('D', 2)],
    'C': [('D', 3)],
    'D': []
}

distances = floyd_warshall(nodes, edges)
for u in distances:
    print(u, distances[u])
```

**Output:**

```
A {'A': 0, 'B': 4, 'C': 1, 'D': 4}
B {'A': inf, 'B': 0, 'C': -3, 'D': -1}
C {'A': inf, 'B': inf, 'C': 0, 'D': 3}
D {'A': inf, 'B': inf, 'C': inf, 'D': 0}
```

**When to use:**

* Want **all-pairs shortest paths**.
* Graph is **small or moderate in size** (O(V³) time).
* Can handle **negative weights** (but not negative cycles).

---

# **Quick Comparison**

| Algorithm      | Graph Type          | Weights         | Complexity     | Purpose                                                |
| -------------- | ------------------- | --------------- | -------------- | ------------------------------------------------------ |
| Dijkstra       | Directed/Undirected | Positive only   | O((V+E) log V) | Single-source shortest path                            |
| Bellman-Ford   | Directed/Undirected | Can be negative | O(V \* E)      | Single-source shortest path + negative cycle detection |
| Floyd-Warshall | Directed/Undirected | Can be negative | O(V³)          | All-pairs shortest path                                |

---

# **Spanning Tree (Simple Version)**

**Definition in simple words:**

* A **spanning tree** is a **subset of edges** from a connected graph that:

  1. Connects **all the nodes**.
  2. Has **no cycles**.

**Key point:**

* If the graph has `V` nodes, the spanning tree will always have exactly `V-1` edges.

**Example:**

```
Graph:
     A
    / \
   B---C
    \
     D
     
Spanning tree (one possibility):
     A
    / \
   B   C
    \
     D
```

* Notice: all nodes are connected, no loops/cycles.

---

# **Minimum Spanning Tree (MST)**

**Definition in simple words:**

* A **minimum spanning tree** is a **spanning tree with the smallest total weight**.

**Why it matters:**

* Imagine connecting cities with **roads**. Each road has a **cost**.
* MST ensures **all cities are connected** with **minimum total cost**.

**Example with weights:**

```
Graph:
       A
      / \
  2 /     \ 3
    B-------C
       1

Edges and weights: AB=2, AC=3, BC=1

MST:
- Pick BC (1) → lowest weight
- Pick AB (2)
- Total weight = 3
- AC (3) is not needed because all nodes are connected
```

---

# ** How to Find MST (Step by Step)**

## **A Kruskal’s Algorithm (Easy Steps)**

1. **Sort all edges by weight (smallest first)**
   Example edges: `BC=1, AB=2, AC=3`
2. **Pick the smallest edge that does not form a cycle**

   * Pick `BC=1` → okay, no cycle
   * Pick `AB=2` → okay, no cycle
   * Pick `AC=3` → forms cycle? Yes → skip
3. **Stop when you have V-1 edges**

   * 3 nodes → need 2 edges → done

**MST edges:** `BC, AB`

---

## **B Prim’s Algorithm (Easy Steps)**

1. **Start from any node** (say A)
2. Pick **smallest edge from visited nodes to unvisited nodes**

   * From A → AB=2, AC=3 → pick AB=2
   * Visited nodes: A, B
3. Next smallest edge from visited nodes (A or B) to unvisited nodes (C)

   * AC=3, BC=1 → pick BC=1
4. All nodes visited → MST done

**MST edges:** `AB, BC` → same as Kruskal

---

# **Key Idea to Remember**

* **Spanning tree:** any tree connecting all nodes, ignores weights.
* **Minimum spanning tree:** tree connecting all nodes with **minimum total weight**, considers edge weights.
* **Both must be connected and have no cycles.**

---

 
