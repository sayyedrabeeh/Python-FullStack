

class Node:
    def __init__(self,data):
        self.data = data
        self.children = []


class GenneralTree:

    def __init__(self,rootdata):
        self.root = Node(rootdata)

    def add_child(self,parent,data):
        new_child = Node(data)
        parent.children.append(new_child)
        return new_child

    def print_tree(self,node,level=0):
        print('  ' * level ,str(node.data))
        for node in node.children:
            self.print_tree(node,level + 1)

    def find_node(self,node,value):
        if node.data == value:
            return node
        for i in node.children:
            found = self.find_node(i,value)
            if found:
                return found
        return None
    
    def count_node(self,node):
        if node is None:
            return 0
        total = 1
        for i in node.children:
            total+= self.count_node(i)
        return total
    
    def height_tree(self,node):
        if node is None :
            return 0  
        if not node.children :
            return 1
        return 1 + max(self.height_tree(i) for i in node.children)
    
    def delete_node(self,parent,value_to_delete):
        if  not parent:
            return None
        
        for i,child in enumerate(parent.children):
            if child.data == value_to_delete:
                del parent.children[i]
                return True
            
            if self.delete_node(child,value_to_delete):
                return True
        return False
    
tree = GenneralTree("CEO")
cto = tree.add_child(tree.root, "CTO")
cfo = tree.add_child(tree.root, "CFO")
coo = tree.add_child(tree.root, "COO")

dev_mgr = tree.add_child(cto, "Dev Manager")
qa_mgr = tree.add_child(cto, "QA Manager")

tree.add_child(dev_mgr, "Developer 1")
tree.add_child(dev_mgr, "Developer 2")


tree.add_child(cfo, "Accountant")
print("Tree before deletion:")
tree.print_tree(tree.root)

tree.delete_node(tree.root, "Dev Manager")
print("\nTree after deleting 'Dev Manager':")
tree.print_tree(tree.root)

print('True' if tree.find_node(tree.root,'Accountant') else 'False')

print(tree.count_node(tree.root))
print(tree.height_tree(tree.root))
