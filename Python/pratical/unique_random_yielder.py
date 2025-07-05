import random

numbers = [10, 20, 30, 40, 50]

def unique_random_yielder(data):
    pool = data.copy()
    random.shuffle(pool)
    for i in pool:
        yield i
    
gen = unique_random_yielder(numbers)
for i in gen:
    print(i)
