graph = {
    'A': ['B', 'C','G'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E'],
    'G': []
}

def bfs(graph,start):
    visited = set([start])
    queue  = [start]
    while queue:
        node = queue.pop(0)
        print(node,end = ' ')
        for i in graph[node]:
            if i not in visited:
                visited.add(i)
                queue.append(i)

bfs(graph,"A")