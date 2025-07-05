data = [1, 2, 2, 3, 4, 4, 5]

def remove_duplicates(data):
    result = []
    for item in  data:
        if item not in result:
            result.append(item)
    return result


print(remove_duplicates(data))