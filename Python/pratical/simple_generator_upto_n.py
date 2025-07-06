
def simple_generator_upto(n):
    for i in range(1,n+1):
        yield i

gen = simple_generator_upto(15)
for i in gen:
    print(i)