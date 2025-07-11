




def heapify(arr,n,i):
    smallest = i
    left = 2 * i + 1
    right = 2 * i + 2

    if  left  < n and arr[left] < arr[smallest]:
        smallest = left
    
    if right < n and arr[right] < arr[smallest]:
        smallest =  right

    if i != smallest:
        arr[i],arr[smallest]=arr[smallest],arr[i]
        heapify(arr,n,smallest)


def heap_sort(arr):
    n= len(arr)

    for i in range(n//2-1,-1,-1):
        heapify(arr,n,i)

    for i in range(n-1,0,-1):
        arr[i],arr[0] = arr[0],arr[i]
        heapify(arr,i,0)

    return arr


data = [10, 7, 20, 3, 4, 1]
print("Original array:", data)
sorted_data = heap_sort(data)
print("Sorted array:", sorted_data)