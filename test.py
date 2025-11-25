import random

a = lambda : random.randint(1,100)

print([a() for _ in range(5)])