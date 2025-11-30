arr = [13,14,15,16,15,26]

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
        
        current = self.head
        while current.next:
            current = current.next
        current.next = new_node
    def arr_link(self,arr):
        for i in arr:
            self.insert(i)
    def print_link(self):
        current = self.head
        while current:
            print(current.data)
            current = current.next
        print('None')
li = Linkdinlist()
li.arr_link(arr)
li.print_link()