class minHeap:
    def __init__(self):
        self.heap = []
    def insert(self,key):
        self.heap.append(key)
        index = len(self.heap)-1
        while index > 0 :
            parent = (index -1) //2
            if self.heap[index] > self.heap[parent]:
                self.heap[index] ,self.heap[parent] = self.heap[parent] ,self.heap[index]
                index = parent
            else:
                break
    def extractmin(self):
        if not self.heap:
            return None
        if len(self.heap) == 1:
            self.heap.pop()
        a = self.heap[0]
        self.heap[0] = self.heap.pop()
        index = 0 
        while True:
            right = 2 * index + 2
            left = 2 * index + 1
            smallest = index
            
            if left < len(self.heap) and self.heap[left] < self.heap[smallest]:
                smallest = left
            if right < len(self.heap) and self.heap[right] < self.heap[smallest]:
                smallest = right
            
            if index != smallest:
                self.heap[index],self.heap[smallest] =self.heap[smallest],self.heap[index]
                index = smallest
            else:
                break
        return a
            
    def printheap(self):
            print(self.heap)

h = minHeap()
h.insert(10)
h.insert(5)
h.insert(20)
h.insert(10)
h.insert(7)

h.printheap()

 
print("Extracted Min:", h.extractmin())
h.printheap()
