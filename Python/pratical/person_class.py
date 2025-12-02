

class person :
    def __init__(self,name,age):
        self.name=name
        self.age=age
    def get(self):
        print(f'name : {self.name}, age : {self.age}')


a = person('rabeeh',21)
a.get() 