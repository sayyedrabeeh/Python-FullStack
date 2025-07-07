

class Node :
    def __init__(self,data):
        self.data =data
        self.next = None

class Linkdinlis:
    def __init__(self):
        self.head =None

    def insert(self,data):
        new_node =Node(data)
        if not self.head:
            self.head = new_node
            return
        current = self.head
        while current.next:
            current= current.next
        current.next = new_node

    def arr_to_likn(self,arr):
        for i in arr:
            self.insert(i)
   
    
    def printlist(self):
        if not self.head:
            return
        current= self.head
        while current:
            print(current.data, end=' -> ')
            current = current.next
        print('None')


arr = [10, 20, 30, 40]
li = Linkdinlis()
li.arr_to_likn(arr)
li.printlist()