



class Stack:
    def __init__(self):
        self.stack = []

    def push(self,item):
        self.stack.append(item)


    def pop(self):
        if not self.isempty():
            return self.stack.pop()
        return ' stack is empty'
    

    def isempty(self):
        return len(self.stack) == 0
   
   
    def peek(self):
        if not self.isempty():
            return self.stack[-1]
        
    def size(self):
        return len(self.stack)
# =================================| delete middle |======================================
    
    def delete_middle(self,current=0,n=None):
        if n == None:
            n=self.size()

        
        if current == n //2:
            self.stack.pop()
            return
        temp = self.stack.pop()
        self.delete_middle(current +1,n)
        self.stack.append(temp)


        
# ===========================================================================================
    
    def display(self):
        print(f'print stack: {self.stack}')

a = Stack()
a.push(10)
a.push(20)
a.push(30)
a.push(40)
a.push(50)
a.push(450)
print('poped : ',a.pop())
print('peek : ',a.peek())
print('size : ',a.size())
a.display()
a.delete_middle()
a.display()