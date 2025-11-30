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
    def count_link(self):
        c=1
        current = self.head
        while current.next:
            c+=1
            current = current.next
        return c
    def printlastthree(self):
        count = self.count_link()-3
        c=1
        current = self.head
        print('printing last three element ....')
        while current:
            if c > count:
                print(current.data)
            c+=1
            current = current.next

    def delete(self,t):
        current = self.head
        prev = None
        while current.next and current.data != t:
            prev =  current
            current = current.next
        prev.next = current.next



li = Linkdinlist()
li.arr_link(arr)
li.print_link()
li.printlastthree()