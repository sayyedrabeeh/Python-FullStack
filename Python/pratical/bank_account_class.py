

class Bankaccount:
    def __init__(self,accountholder,balance=0):
        self.balance = balance
        self.acoountholder =accountholder
    def deposite(self,amount):
        if amount <= 0:
            print(' amount must be positive ')
        self.balance+=amount
    def withdraw(self,amount):
        if self.balance < amount:
            print('iniefficient balance')
        elif amount <= 0:
            print('amount must be positive ')
        else:
            self.balance-=amount

    def inqury(self):
        print(f'the balance of {self.acoountholder} is {self.balance}')

ac= Bankaccount('rabeeh')
ac.deposite(100)
ac.withdraw(25)
ac.inqury()
        