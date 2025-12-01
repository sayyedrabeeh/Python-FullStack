

arr = [5, 3, 8, 4, 2]

def selection(arr):
    for i in range(len(arr)):
        min_index = i
        for j in range(len(arr)):
            if arr[j]> arr[min_index]:
                min_index = j 
            arr[i],arr[min_index] = arr[min_index],arr[i]

print(arr)
selection(arr)
print(arr)
