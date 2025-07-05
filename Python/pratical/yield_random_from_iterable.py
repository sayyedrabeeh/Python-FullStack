import random


def yield_random_from_iterable(iterable):
    pool = list(iterable)
    while pool:
        item = random.choice(pool)
        pool.remove(item)
        yield item
    
data = ['apple', 'banana', 'cherry', 'date']
gen = yield_random_from_iterable(data)

for i in gen:
    print(i)