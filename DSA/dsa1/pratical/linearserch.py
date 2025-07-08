

arr = [10, 20, 10, 30, 10]

def linearserch(arr,target):
    indecies = []
    for index,value in enumerate(arr):
        if  value == target:
            indecies.append(index)
    return indecies

print(linearserch(arr,10))