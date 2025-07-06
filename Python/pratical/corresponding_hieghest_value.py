

data = {'a': 10, 'b': 25, 'c': 17, 'd': 25}

highest_value = float('-inf')
keys = []

for k,v in data.items():
    if v > highest_value:
        highest_value = v
        keys = [k]
    elif v == highest_value:
        keys.append(k) 


print(keys)
print(highest_value)