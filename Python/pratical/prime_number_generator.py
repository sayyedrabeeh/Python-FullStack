


def generator_yield_prime_number(n):
    for i in range(2,n+1):
        for j in range(2,int(i**0.5)+1):
             if i%j == 0:
                 break
        else:
       
            yield i

gen = generator_yield_prime_number(20)

for i in gen:
    print(i)