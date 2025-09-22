graph = {
    'A': ['B', 'C', 'G'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E'],
    'G': []
}
def  dfs(graph,start):
    if not start:
        return 
    visited = set()
    stack = [start]
    while stack:
        node = stack.pop()
        if node not in visited:
            print(node,end = ' ')
            visited.add(node)
            
            for neigbhour in reversed(graph[node]):
                if neigbhour not in visited:
                    stack.append(neigbhour)
                    
dfs(graph,"A")
print('')
def dfs_r(graph,start,visited = None):
    if visited is None:
        visited = set()
    if not start:
        return
    visited.add(start)
    print(start,end = ' ')
    for neighbour in graph[start]:
        if neighbour not in visited:
            dfs_r(graph,neighbour,visited)
    
dfs_r(graph,'A')





