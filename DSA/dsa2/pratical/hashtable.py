

class HashTable:
    def __init__(self,size):
        self.size = size
        self.table = [[] for _ in range(size)]

    def _hash(self,key):
        return hash(key) % self.size
    
    def insert(self,key,value ):
        index = self._hash(key)

        for i,(k,v) in enumerate(self.table[index]):
            if k == key:
                self.table[index][i] = (key,value)
                return
        self.table[index].append((key,value))

    def get(self,key):
        index = self._hash(key)

        for k ,v in self.table[index]:
            if k == key:
                return v
        return None
        
    def remove(self,key):
        index = self._hash(key)
        self.table[index] = [(k,v) for k,v in self.table[index] if k != key]

    def display(self):
        for i,bucket in enumerate(self.table):
            print(f' {i}  -> {bucket}')


ht =HashTable(5)

ht.insert('apple',1)
ht.insert('mango',2)
ht.insert('orange',3)
ht.insert('grape',4)

print(ht.get('apple'))
ht.remove('apple')
ht.display()    