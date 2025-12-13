
def patitioning(arr,low,high):
    pivot = arr[high]
    i = low-1
    for j in range(low,high):
        if arr[j]<pivot:
            i+=1
            arr[j],arr[i] = arr[i],arr[j]
    arr[i+1],arr[high] = arr[high],arr[i+1]
    return i + 1





def quick_sort(arr,low,high):
    if low < high:
        pi = patitioning(arr,low,high)
        quick_sort(arr,low,pi-1)
        quick_sort(arr,pi+1,high)


arr = [10,21,123,231,23,12,21,22]

print(arr)
quick_sort(arr,0,len(arr)-1)
print(arr)



