

arr = [5, 3, 8, 4, 2]

def buble_sort(arr):
    n= len(arr)
    for i in range(n):
        for j in range(0,n-i-1):
            if arr[j] < arr[j+1]:
                arr[j],arr[j+1] = arr[j+1],arr[j]

buble_sort(arr)
print(arr)

arr1 = [15, 23, 38, 14, 22]

def buble_sort_efficient(arr):
    n= len(arr)
    for i in range(n):
        swapped =False
        for j in range(0,n-i-1):
            if arr[j] < arr[j+1]:
                arr[j],arr[j+1] = arr[j+1],arr[j]
                swapped = True
        if not swapped:
            break

buble_sort_efficient(arr1)
print(arr1)
