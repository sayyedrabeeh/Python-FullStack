

class Node:
    def __init__(self,data):
        self.data = data
        self.children =  []

class Tree:
    def __init__(self,size):
        self.root = None
        self.size = size

    def insert(self,data):
        new_node = Node(data)
        if self.root is None:
            self.root = new_node
            return
        queue = [self.root]
        while queue:
            i=0
            current = queue.pop(0)
            if len(current.children) < self.size:
                current.children.append(new_node)
                return
            for child in current.children:
                queue.append(child)
            

                 
    def printtree(self):
        if not self.root:
            return
        queue = [self.root]
        while queue:
            current = queue.pop(0)
            print(f"{current.data} -> ", end="")
            if current.children:
                print(" ".join(str(child.data) for child in current.children))
            else:
                print("")  
            for child in current.children:
                queue.append(child)

t= Tree(3)
t.insert(10)
t.insert(20)
t.insert(30)
t.insert(40)
t.insert(50)

t.printtree()
















