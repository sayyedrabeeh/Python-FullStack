

def multiples_of(n,limit):
   
    for i in range(1,limit+1):
        yield i*n

gen = multiples_of(5,10)

for i in gen:
    print(i)
