class Node:
    def __init__(self,data):
        self.data = data
        self.next = None
    
class Linkidin:
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
             
    def print_list(self):
        current =  self.head
        while current:
            print(current.data,'-->',end='')
            current  =  current.next 
        print('none')
    
    def count(self):
        c=0
        current =  self.head
        while current:
            current =  current.next
            c+=1
        return c 
    
    def removemiddle(self):
        count =  self.count()
        mid = count//2
        prev = None
        c = 0
        current =  self.head
        while current:
            if c == mid:
                if prev:
                    prev.next = current.next
                else:
                    self.head = current.next 
                    break
            prev = current
            current = current.next 
            c+=1

li = Linkidin()
li.insert(10)
li.insert(20)
li.insert(30)
li.insert(10)
li.insert(10)
li.removemiddle()
li.print_list()