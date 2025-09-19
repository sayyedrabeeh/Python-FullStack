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

D 