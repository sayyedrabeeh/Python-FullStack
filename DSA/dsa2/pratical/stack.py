

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
    
    def display(self):
        print(f'print stack: {self.stack}')

a = Stack()
a.push(10)
a.push(20)
a.push(30)
a.push(40)
a.push(450)
print('poped : ',a.pop())
print('peek : ',a.peek())
print('size : ',a.size())
a.display()