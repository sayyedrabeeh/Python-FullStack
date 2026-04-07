
class Node:
    def __init__(self,data):
        self.data = data
        self.next = None
        

class Linkdinlist:
    def __init__(self):
        self.head = None
        
    def insert(self,data):
        
        newnode = Node(data)
        if self.head is None:
            self.head = newnode
            return
        current =  self.head
        while current.next:
            current = current.next
            
        current.next = newnode
        return newnode
    def printList(self):
        current =  self.head
        while current:
            print(current.data,'-->' ,end='')
            current = current.next
    def conunt(self):
        current = self.head
        c = 0
        while current:
            c += 1
            current = current.next
        return c
        
    def delete(self):
        slow = self.head
        fast = self.head
        prev = None
        c = self.conunt()
        while slow.next and fast.next.next:
            prev = slow
            slow = slow.next
            fast = fast.next.next
        if c % 2==1:
            prev.next = slow.next
        else:
            if slow.data > slow.next.data:
              prev.next = slow.next 
            else:
                 slow.next = slow.next.next
l = Linkdinlist()
l.insert(10)
l.insert(30)
l.insert(60)
l.insert(50)
l.insert(70)
l.insert(80)
print('count : ',l.conunt())

l.delete()

l.printList()
print('count : ',l.conunt())



















