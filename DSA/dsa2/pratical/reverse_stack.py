





class Stack:
    def __init__(self):
        self.stack = []

    def push(self,item):
        self.stack.append(item)


    def pop(self):
        if not self.isempty():
            return self.stack.pop()
        return None
    

    def isempty(self):
        return len(self.stack) == 0
   
   
    def peek(self):
        if not self.isempty():
            return self.stack[-1]
        
    def size(self):
        return len(self.stack)
# =================================| Reverse stack  |======================================
    
    def reverse_stack(self):
        left = 0 
        right = self.size()-1

        while left < right :
             
             self.stack[left],self.stack[right] = self.stack[right],self.stack[left]

             left+=1
             right-=1

         

        
# ===========================================================================================
    
    def display(self):
        print('print stack:  ', (self.stack))

a = Stack()
a.push(10)
a.push(70)
a.push(30)
a.push(20)
a.push(50)
a.push(450)
 
print('peek : ',a.peek())
print('size : ',a.size())
a.display()
a.reverse_stack()
print('after reversing')
a.display()
 