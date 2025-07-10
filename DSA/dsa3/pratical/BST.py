


class Node:
    def __init__(self,data):
        self.data = data
        self.left = None
        self.right = None

class BST:
    def __init__(self):
        self.root = None
    
    def insert(self,data):
        new_node = Node(data)
        if self.root is None:
            self.root = new_node
            return
        
        current  =  self.root

        while True:
            if current.data  < data :
                if not current.left:
                    current.left = new_node
                    return
                else:
                    current = current.left
            else:
                if not current.right:
                    current.right = new_node
                    return
                else:
                    current = current.right
    
    def search(self,data):
        
        current =  self.root
        while current :
            if current.data == data :
                return True
            elif current.data < data:
                current = current.left
            else:
                current = current.right
        return False
    
    def inorder(self,node):
        if node:
            self.inorder(node.left)
            print(node.data,end=' ')
            self.inorder(node.right)

    def preorder(self,node):
        if node:
            print(node.data,end=' ')
            self.preorder(node.left)
            self.preorder(node.right)

    def postorder(self,node):
        if node:
            self.postorder(node.left)
            self.postorder(node.right)
            print(node.data,end=' ')

    def min_value(self,node):
        if not node:
            return None
        while node.left:
            node = node.left
        return node

    def max_value(self):
        node = self.root
        while node.right:
            node= node.right
        return node
    
    def counts_node(self,node):
        if not node:
            return 0
        return 1 + self.counts_node(node.left) + self.counts_node(node.right)
    
    def height(self,node):
        if not node:
            return 0
        return 1 + max(self.height(node.left),self.height(node.right))
    
    def count_of_lnode(self,node):
        if not node:
            return 0
        return 1 + self.count_of_lnode(node.left)
    
    def get_lf_node(self,node):
        result=[]
        if not node:
            return
        while node.left:
            result.append(node.left)
        return node 
    
    def delete(self,node,key):
        if not node:
            return None
        if key < node.data:
            node.left = self.delete( node.left,key)
        elif key > node.data:
            node.right  = self.delete(node.right,key)
        else:

            if not node.left:
                return node.right
            elif not node.right:
                return node.left
            min_node = self.min_value(node.right)
            node.data = min_node.data
            node.right = self.delete(node.right,min_node.data)
        return node 

    
        
bst = BST()

# Insert values
for val in [50, 30, 70, 20, 40, 60, 80]:
    bst.insert(val)

# Traversals
print("Inorder Traversal:")
bst.inorder(bst.root)

print("\nPreorder Traversal:")
bst.preorder(bst.root)

print("\nPostorder Traversal:")
bst.postorder(bst.root)

# Search
print("\n\nSearch 60:", bst.search(60))  # True
print("Search 100:", bst.search(100))    # False

# Min and Max
print("Minimum value in tree:", bst.min_value(bst.root).data)
print("Maximum value in tree:", bst.max_value().data)

# Node Count
print("Total nodes:", bst.counts_node(bst.root))

# Height of Tree
print("Height of tree:", bst.height(bst.root))

# Delete a node
print("\nDeleting node 30...")
bst.root = bst.delete(bst.root, 30)

print("Inorder after deletion:")
bst.inorder(bst.root)