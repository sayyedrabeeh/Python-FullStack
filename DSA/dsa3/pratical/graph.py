

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

    def dfs(self,start,visited=None):
        if visited is None:
            visited = set()
        if not start  or start in visited:
            return
        visited.add(start)
        print(start,end=' ')
        for niegbour in self.graph[start]:
            if niegbour not in visited:
                self.dfs(niegbour,visited)

    def bfs(self,start):
        if start not in self.graph:
            print('node not found')
            return
        visited = set([start])
        queue  = [start]

        while queue:
            node = queue.pop(0) 
            print(node,end='')
            for niebour in self.graph[node]:
                if niebour not in visited:
                    visited.add(niebour)
                    queue.append(niebour)

    def print_graph(self):
        for node in self.graph:
            print(node,'-->',self.graph[node])


g = Graph()
g.add_edge(1, 2)
g.add_edge(1, 3)
g.add_edge(2, 4)
g.add_edge(3, 5)
g.add_edge(5, 6)

print("Graph:")
g.print_graph()

print("\nDFS from node 1:")
g.dfs(1)

print("\nBFS from node 1:")
g.bfs(1)

g.remove_edge(1, 2)
print("\nGraph after removing edge 1-2:")
g.print_graph()

g.remove_node(5)
print("\nGraph after removing node 5:")
g.print_graph()