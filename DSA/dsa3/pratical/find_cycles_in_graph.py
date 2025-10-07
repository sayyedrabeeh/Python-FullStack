gr = {
    'A': ['B','D'],
    'B': ['A','C','E'],
    'C': ['B','F'],
    'D': ['A','E','G'],
    'E': ['B','D','F','H'],
    'F': ['C','E','I'],
    'G': ['D','H'],
    'H': ['G','E','I'],
    'I': ['F','H']
}



def cycle_until(node,visited,gr,parent,path,cycle):
    visited[node] = True
    path.append(node)
    for i in gr[node]:
        if i not in visited:
            cycle_until(i,visited,gr,node,path,cycle)
        elif i != parent and i in path:
            
            j = path.index(i)
            c = path[j:].copy()
            
            if c not in cycle:
                cycle.append(c)
    path.pop()
  


def cycle(gr):
    visited = {}
    cycles = []
    for i in gr:
        if i not in visited:
            cycle_until(i,visited,gr,None,[],cycles)
    return cycles

a = cycle(gr)
print(a)
print(len(a))
