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
