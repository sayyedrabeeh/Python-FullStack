

data = {'a': 10, 'b': 25, 'c': 17, 'd': 250}

highest = float('-inf')

for k,v in data.items():
    if v > highest:
        highest = v

print(highest)