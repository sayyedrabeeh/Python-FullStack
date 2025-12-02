

class Node:
    def __init__(self,data):
        self.data = data
        self.next = None

class Linkdilist:
    def __init__(self):
        self.head = None

    def insert_at_begnning(self,data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

    def insert_at_ending(self,data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        current = self.head
        while current.next:
            current = current.next
        current.next = new_node

    def serch(self,key):
        if not self.head:
            print('list is empty')
            return 
        current = self.head
        while current : 
            if current.data == key:
               return True
            current = current.next
        return False
    
    def reverseList(self):
        current = self.head
        prev = None
        while current:
            next_node = current.next
            current.next = prev
            prev = current
            current = next_node
        self.head=  prev


    def delete(self,key):
        current = self.head
        prev = None
        while current and current.data != key :
            prev = current
            current = current.next
        prev.next = current.next
    def print_list(self):
        current = self.head
        while current:
            print(current.data,end=' -> ')
            current = current.next
        print('none')
li= Linkdilist()
li.insert_at_begnning(10)    
li.insert_at_begnning(20)    
li.insert_at_begnning(30)    
li.insert_at_ending(40)
li.insert_at_ending(50)
li.insert_at_ending(60)
print(li.serch(60))
li.delete(60)
print(li.serch(60))
li.print_list()   
li.reverseList()
print('reversed')
li.print_list()                  