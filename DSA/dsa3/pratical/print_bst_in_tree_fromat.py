

class Node:
    def __init__(self,data):
        self.data = data
        self.right = None
        self.left = None

class BST:
    def __init__(self):
       self.root = None
      
    def insert(self,data):
      if self.root is None:
           self.root = Node(data)
           return 
      current = self.root
      while current:
        if current.data < data:
              if not current.left:
                  current.left = Node(data)
                  return
              else:
                  current = current.left
        else:
            if not current.right:
                current.right = Node(data)
                return 
            else:
                current = current.right
    
    def Treeformat(self):
        current = self.root
        queue = [current]
        while queue:
            for i in range(len(queue)-1):
                node = queue.pop(0)
                print(node.data,end=' ')
                if  node.left:
                    queue.append(node.left)
                if  node.right:
                    queue.append(node.right)
            print(' ')
            
              

b = BST()
b.insert(10)
b.insert(20)
b.insert(30)
b.insert(40)
b.insert(50)
b.Treeformat()








