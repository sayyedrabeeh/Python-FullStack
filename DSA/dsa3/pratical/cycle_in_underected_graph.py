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
    
    def is_cyclic_until(self,node,visited,parent):
        visited[node] = True
        for neghibour in self.graph[node]:
            if not visited.get(neghibour,False):
                if self.is_cyclic_until(neghibour,visited,node):
                    return True
            elif neghibour != parent:
                   return True
        return False    
        
        
    def is_cyclic(self):
        visited = {}
        for node in self.graph:
            if not visited.get(node,False):
                if self.is_cyclic_until(node,visited,-1):
                    return True
        return False
            
    
g = Graph()
g.add_edge('A','B' )
g.add_edge('B','c')
g.add_edge('c','A' )
 
g.show_graph()
print("Cycle Exists? ->", g.is_cyclic())

 



 
            
            
        
    