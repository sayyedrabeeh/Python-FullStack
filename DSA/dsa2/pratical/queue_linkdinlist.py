

class Node:
    def __init__(self,data):
        self.data = data
        self.next = None
    
class Queue:
    def __init__(self):
        self.front = None
        self.rear = None

    def enqueue(self,data):
        new = Node(data)
        if self.rear is None:
            self.front = self.rear = new
            return 
        self.rear.next = new
        self.rear = new

    def dequeue(self):
        if self.front is None:
            return None
        val= self.front.data
        self.front = self.front.next

        if self.front is None:
            self.rear = None
        return val

    def peek(self):
      return self.front.data if self.front else  None 
        
    def printqueue(self):
        cur = self.front
        while cur:
            print(cur.data)
            cur = cur.next
        
q =  Queue()

q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.enqueue(40)
q.enqueue(50)
q.enqueue(60)
q.enqueue(70)

q.dequeue()
print('peek :',q.peek())
q.printqueue()







