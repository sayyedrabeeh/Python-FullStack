
class Node:
    def __init__(self,data):
        self.data = data
        self.left = None
        self.right =None

class BinaryTree:

    def __init__(self,root):
        self.root = root

    def insert(self,data):

        queue = [self.root]
        while queue:
            current = queue.pop(0)
            if not current.left:
                current.left = Node(data)
                return
            else:
                queue.append(current.left)

            if not current.right:
                current.right =Node(data)
                return
            else:
                queue.append(current.right)

    def search(self,node,data):
        if not node :
            return None
        if node.data == data:
            return True
        return self.search(node.left,data) or self.search(node.right,data)
    

    def inorder(self,node):
        if node:
            self.inorder(node.left)
            print(node.data,end=' ')
            self.inorder(node.right)

    def preorder(self,node):
        if node:
            print(node.data,end='')
            self.preorder(node.left)
            self.preorder(node.right)

    def postorder(self,node):
        if node:
            self.postorder(node.left)
            self.postorder(node.right)
            print(node.data,end=" ")

    def height(self,node):
        if not node:
            return 0 
        return 1 + max(self.height(node.left),self.height(node.right))

    def counts(self,node):
        if not node:
            return 0
        return 1 + self.counts(node.left) + self.counts(node.right)


    
    def find_deepest_and_perant(self):

        queue = [self.root]
        parent = None
        current = None
        while queue:
            current = queue.pop(0)
            if current.left:
                parent = current
                queue.append(current.left)
            if current.right:
                parent = current
                queue.append(current.right)
        return  current,parent
    
    def delete(self,value):
        if not self.root:
            return None
        if self.root.data == value and  not self.root.left and not self.root.right:
            self.root = None
            return
        queue = [self.root]
        node_to_delete = None

        while queue:
            current = queue.pop(0)
            if current.data== value:
                node_to_delete = current
            if current.left:
                queue.append(current.left)
            if current.right:
                queue.append(current.right)

        if node_to_delete:
            deepest,parent = self.find_deepest_and_perant()
            node_to_delete.data = deepest.data
            if parent.right == deepest:
                parent.right = None
            elif parent.left == deepest:
                parent.left =  None

    def level_order(self):
        if not self.root:
            return
        queue = [self.root]
        while queue:
            current = queue.pop(0)
            print(current.data)

            if current.left:
                queue.append(current.left)
            if current.right:
               queue.append(current.right)



bt = BinaryTree(Node(1))
bt.insert(2)
bt.insert(3)
bt.insert(4)
bt.insert(5)
bt.insert(6)
bt.insert(7)

print("Inorder:")
bt.inorder(bt.root)
print("\nPreorder:")
bt.preorder(bt.root)
print("\nPostorder:")
bt.postorder(bt.root)

print("\nSearch for 5:", bt.search(bt.root, 5))
print("Height:", bt.height(bt.root))
print("Node Count:", bt.counts(bt.root))

print("Deepest and Parent:")
deepest, parent = bt.find_deepest_and_perant()
print("Deepest =", deepest.data, ", Parent =", parent.data if parent else None)

print("\nLevel Order Before Deletion:")
bt.level_order()

bt.delete(2)
print("\nLevel Order After Deletion of 2:")
bt.level_order()