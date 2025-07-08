

arr = [5, 3, 8, 4, 2]

def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr)//2
    left =merge_sort(arr[:mid])
    right =merge_sort(arr[mid:])

    return merge(left,right)

def merge(left,right):
    sorrted = []
    i=j=0

    while i < len(left) and  j < len(right):
        if left[i] < right[j]:
            sorrted.append(left[i])
            i+=1
        else:
            sorrted.append(right[j])
            j+=1
    
    sorrted.extend(left[i:])
    sorrted.extend(right[j:])

    return sorrted

arr1=merge_sort(arr)
print(arr1)