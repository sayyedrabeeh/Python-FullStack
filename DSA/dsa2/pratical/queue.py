

class Queue:

    def __init__(self):
        self.queue = []

    def enqueue(self,item):
        self.queue.append(item)

    def dequeue(self):
        if not self.isempty():
            return self.queue.pop(0)
        return 'queue is  empty '
    
    def isempty(self):
        return len(self.queue) == 0
    
    def peek(self):
        if not self.isempty():
            return self.queue[0]
        return 'queue is empty '
    
    def size(self):
        return len(self.queue)
    
    def display(self):
        print('queue : ',self.queue)

a = Queue()
 
a.enqueue(10)
a.enqueue(20)
a.enqueue(30)
a.enqueue(40)
a.dequeue()
print('peek : ',a.peek())
print('size : ',a.size())
a.display()