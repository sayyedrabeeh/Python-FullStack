

class Node:
    def __init__(self,data):
        self.data = data
        self.next = None

class stack :
    def __init__(self):
        self.top = None
    
    def insert(self,data):
        new = Node(data)
        new.next = self.top
        self.top = new

    def pop(self):
        if self.top is None:
            return 
        val = self.top.data
        self.top = self.top.next

    def peek(self):
        return self.top.data if self.top else None
    
    def printstack(self):
        cur = self.top
        while cur:
            print(cur.data)
            cur = cur.next

s=stack()
s.insert(1) 
s.insert(11) 
s.insert(12) 
s.insert(13) 
s.insert(14) 
s.insert(15) 
s.insert(16) 
s.insert(17) 
s.insert(18) 
s.insert(19) 
s.insert(10) 

s.pop()
s.peek()
s.printstack()