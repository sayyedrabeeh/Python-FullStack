





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
# =================================| Sort Stack With Temp Stack |======================================
    

    def sort_stack(self):
         temp = Stack()
         while not self.isempty():
             
            current = self.pop()
             
            while not  temp.isempty() and temp.peek() < current :

                self.push(temp.pop())

            temp.push(current)

         while not  temp.isempty():
             self.push(temp.pop())

        
# ===========================================================================================
    
    def display(self):
        print(f'print stack: {self.stack}')

a = Stack()
a.push(10)
a.push(70)
a.push(30)
a.push(20)
a.push(50)
a.push(450)
print('poped : ',a.pop())
print('peek : ',a.peek())
print('size : ',a.size())
a.display()
a.sort_stack()
print('after sorting')
a.display()
 