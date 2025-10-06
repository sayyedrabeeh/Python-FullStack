 
 
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
    
    def delete(self,value):
        
        current = self.head
        prev =  None
        while current and current.data != value:
            current =  current.next
            prev = current
        prev.next = current.next
        
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
    def lastThree(self):
        count = self.count() - 3
        c = 0 
        current = self.head
        while current:
            if c >= count:
                print(current.data)
            current = current.next
            c+=1
    
        
        
        
li = Linkidin()
li.insert(10)
li.insert(20)
li.insert(30)
li.insert(40)



li.lastThree()
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    