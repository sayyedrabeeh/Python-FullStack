

class heap:
    def __init__(self):
        self.heap  = []

    def parent(self,index):
        return (index - 1) // 2
    
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
        while index != 0 and self.heap[self.parent(index)] > self.heap[index]:
            self.swap(self.parent(index),index)
            index= self.parent(index)
    
    def _hepify_dwon(self,index):
        smallest = index
        left = self.left(index)
        right = self.right(index)

        if left < len(self.heap) and self.heap[left] <self.heap[smallest]:
            smallest = left

        if right <len(self.heap) and self.heap[right] < self.heap[smallest] :
            smallest = right

        if index != smallest:
            self.swap(index,smallest)
            self._hepify_dwon(smallest)

    def get_min(self):
        return self.heap[0] if self.heap else None
    
    def exctract_min(self):
        if self.heap is None:
            return
        if len(self.heap) == 1:
            return self.heap.pop()
        
        min_value = self.heap[0]
        self.heap[0] = self.heap.pop()
        self._hepify_dwon(0)
        return min_value
    
    def delete(self,value):
        
        try:
            index = self.heap.index(value)
        except ValueError:
            print('value not fond in heap')
            return
        
        self.heap[index] = self.heap[-1]
        self.heap.pop()

        if index < len(self.heap):
            self.heapifyUP(index)
            self._hepify_dwon(index)

    def display(self):
        print(self.heap)



h = heap()
h.insert(10)
h.insert(5)
h.insert(20)
h.insert(10)
h.insert(7)

h.display()

print("Min:", h.get_min())
print("Extracted Min:", h.exctract_min())
h.display()

h.delete(20)
print("After deleting 20:")
h.display()
