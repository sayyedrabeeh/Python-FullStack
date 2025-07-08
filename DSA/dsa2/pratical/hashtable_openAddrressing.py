

class HashtableOpenAdressing:
    def __init__(self,size):
        self.size = size
        self.keys = [None] * size
        self.values = [None] * size 
    
    def _hash(self,key):
        return hash(key) % self.size

    def insert(self,key,value):

        index = self._hash(key)
        original_index =index

        while self.keys[index] is not None  and self.keys[index] != key:
            index = (index + 1) % self.size

            if index  == original_index:
                print(' table is full ')
                return
        self.keys[index] = key
        self.values[index] = value

    def get(self,key):
        index = self._hash(key)
        original_index = index

        while self.keys[index] is not None:
            if self.keys[index] == key:
                return self.values[index]
            index = (index +1 ) % self.size
            if index == original_index:
                break
        return None
    
    def remove(self,key):
        index = self._hash(key)
        original_index = index

        while self.keys[index] is not None:
            if self.keys[index] == key:
                self.keys[index] = None
                self.values[index] = None
                return
            index = (index + 1) % self.size
            if index == original_index:
                break
    
    def display(self):
        for i in range(self.size):
            print(f' {self.keys[i]} -->  {self.values[i]}')


ht = HashtableOpenAdressing(10)

ht.insert("apple", 3)
ht.insert("banana", 2)
ht.insert("orange", 5)
ht.insert("banana", 4)  

print(ht.get("banana"))

ht.remove("apple")

ht.display()