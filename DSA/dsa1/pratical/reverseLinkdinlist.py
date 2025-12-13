class Node:
    def __init__(self,data):
        self.data = data
        self.next = None

class Linkdinlist:
    def __init__(self):
        self.head = None
    def insert(self,data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            return
        current =self.head
        while current.next:
            current = current.next
        current.next = new_node
    
    def PrintLinkdinlist(self):
        current =  self.head
        while current:
            print(current.data,end='-->')
            current = current.next
    
    def reverse_list(self):
        prev = None
        current = self.head
        while current:
            next_node = current.next
            current.next = prev
            prev = current
            current = next_node
        self.head = prev
    
    def reverse_linkdin_list_recursive(self,head = None):
        if head is None:
            head = self.head
             
        if head.next is None:
            self.head = head
            return head
        next_node = self.reverse_linkdin_list_recursive(head.next)
        head.next.next = head
        head.next = None
        return next_node

l = Linkdinlist()
l.insert(10)
l.insert(20)
l.insert(30)
l.insert(40)
l.PrintLinkdinlist()
print()
l.reverse_linkdin_list_recursive()
l.PrintLinkdinlist()