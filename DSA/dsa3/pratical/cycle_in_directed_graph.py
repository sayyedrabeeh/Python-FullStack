class Graph:
    def __init__(self):
        self.graph = {}
        
    def add_node(self,node):
        if node not in self.graph:
            self.graph[node] = []
        
    def add_edge(self,u,v,undirected = True):
        self.add_node(u)
        self.add_node(v)
        self.graph[u].append(v)
        if  undirected:
            self.graph[v].append(u)
           
    def remove_edge(self,u,v,undericted = True):
        if u in self.graph and v in self.graph[u]:
            self.graph[u].remove(v)
        if undericted and  v in self.graph and  u in self.graph[v]:
            self.graph[v].remove(u)
            
    def remove_node(self,node):
        if node in self.graph:
            del self.graph[node]
        for i in self.graph:
            if node in self.graph[i]:
                self.graph[i].remove(node)
                
    def show_graph(self):
        for node in self.graph:
            print(node,'----->',self.graph[node])
    
     
    def is_cyclic_until(self,node,visited,recStack):
        visited[node] = True
        recStack[node] = True
        for i in self.graph.get(node,[]):
            if not visited.get(i,False):
                if self.is_cyclic_until(i,visited,recStack):
                    return True
            elif recStack.get(i,False):
                return True
        recStack[node] = False        
        return False
        
    def is_cyclic(self):
        visited = {}
        recStack = {}
        for i in self.graph:
            if not visited.get(i,False):
                if self.is_cyclic_until(i,visited,recStack):
                    return True
        return False
         
    
g = Graph()
g.add_edge('A','B',False )
g.add_edge('B','c',False)
g.add_edge('c','B',False )
 
g.show_graph()
print("Cycle Exists? ->", g.is_cyclic())



 
            
            
        
    