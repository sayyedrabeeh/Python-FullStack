class Graph:
    def __init__(self):
        self.graph = {}
        
    def add_node(self,node):
        if node not in self.graph:
            self.graph[node] = []
        
    def add_edge(self,u,v,weight=1,undirected = True):
        self.add_node(u)
        self.add_node(v)
        self.graph[u].append((v,weight))
        if  undirected:
            self.graph[v].append((u,weight))
           
    def remove_edge(self,u,v,undericted = True):
        if u in self.graph :
            self.graph[u] = [(node,w) for (node,w) in self.graph[u] if node != v]
        if undericted and  v in self.graph :
            self.graph[v]= [(node,w) for (node,w) in self.graph[v] if node != u]
            
    def remove_node(self,node):
        if node in self.graph:
            del self.graph[node]
        for i in self.graph:
            self.graph[i] = [(n,w) for (n,w) in self.graph[i] if n != node]
                
    def show_graph(self):
        for node in self.graph:
            print(node,'----->',self.graph[node])
            
    
g = Graph()
g.add_edge('A','B',7,False)
g.add_edge('A','c')
g.add_edge('c','B',4)
g.remove_node('D')
g.remove_edge('B',"c")
g.show_graph()
