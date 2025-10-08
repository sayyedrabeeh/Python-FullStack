class Hashtapble:
    def __init__(self,size):
        self.size = size
        self.keys = [None] * size
        self.values = [None] * size
    
    def _hash(self,key):
        return hash(key) % self.size
    
    def insert(self,key,value):
        index = self._hash(key)
        i =0 
        while i < self.size:
            n_index = (index + i **2 ) % self.size
            if self.keys[n_index] is  None or self.keys[n_index] == key:
            
                self.keys[n_index] = key
                self.values[n_index] = value
                return
            i+=1
        print('full')    
    
  
    
    def display(self):
        for i in range(self.size):
            print(self.keys[i],'--->',self.values[i])
            
ht = Hashtapble(10)

ht.insert("apple", 3)
ht.insert("banana", 2)
ht.insert("orange", 5)
ht.insert("banan", 10)  
ht.insert("banan", 9)  
ht.insert("ban", 8)  
ht.insert("bana", 7)  
ht.insert("ba", 6)  
ht.insert("b", 1)  
ht.insert("br", 11)  
ht.insert("b2r", 113)  
ht.insert("br1", 121)  
 
 

 

ht.display()
        
        
        
        
        
        
        
        
        
        
        