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
    
   

    def mergesort(self,head):
        
        if head is None or head.next is None :
            return head
        slow = head
        fast = head.next

        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next 

        mid = slow.next
        slow.next = None

        left = self.mergesort(head)
        right = self.mergesort(mid)
    
        return self.merge(left,right)
    
    def merge(self,l1,l2):
        dummy = Node(0)
        current = dummy

        while l1 and l2:
            if l1.data > l2.data :
                current.next = l1
                l1 = l1.next
            else:
                current.next = l2
                l2= l2.next 
            current = current.next
        
        current.next = l1 or l2 
        return dummy.next

l = Linkdinlist()

l.insert(10)
l.insert(5)
l.insert(15)
l.insert(12)
l.insert(3)
l.PrintLinkdinlist()
l.head = l.mergesort(l.head)
print()
l.PrintLinkdinlist()