


dict1 = {'a': 10, 'b': 20, 'c': 30}
dict2 = {'b': 5, 'c': 15, 'd': 40}

result = dict1.copy()

for i,j in dict2.items():
    if i in result:
        result[i]+=j
    else:
        result[i] = j

print(result)