

class heap:
    def __init__(self):
        self.heap  = []

    def parent(self,index):
        return (index +1) // 2
    
    def left(self,index):
        return 2 * index + 1
    
    def right(self,index):
        return 2 * index + 2
    
    def swap(self,i,j):
        self.heap[i],self.heap[j]=self.heap[j],self.heap[i]

    def insert(self,value):
        self.heap.append(value)
        self.heapifyUP(len(self.heap)-1)

    def heapifyUP(self,index):
        while index != 0 and self.heap[self.parent] > self.heap[index]:
            self.swap(self.heap[index],index)
            index= self.parent(index)