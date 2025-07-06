data = {
    "a": 1,
    "b": 2,
    "c": 3,
    "d": 4,
    "e": 5,
    "f": 6
}

def split_dict_half(data):
    a= list(data.items())
    mid = len(a)//2
    dict1 = a[mid:]
    dict2 = a[:mid]
    return dict1,dict2


d1,d2 = split_dict_half(data)
print('dict1:',dict(d1))
print('dict2:',dict(d2))
 