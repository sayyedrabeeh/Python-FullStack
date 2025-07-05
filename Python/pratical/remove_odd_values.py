data = [1, 2, 3, 4, 5, 6, 7]

def remove_odd_values(data):
    result = []
    for i in data:
        if i%2 == 0 :
            result.append(i)
    return result

print(remove_odd_values(data))