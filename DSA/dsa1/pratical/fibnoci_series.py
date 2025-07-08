

def fibnocci(n):
    if n == 0 :
        return 0
    elif n == 1:
        return 1
    return fibnocci(n-1)+ fibnocci(n-2)


print(fibnocci(6))

def fibbnocci_sierias(n):
    for i in range(n+1):
        print(fibnocci(i),end=' ')

fibbnocci_sierias(6)