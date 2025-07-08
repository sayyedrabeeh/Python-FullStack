
arr = [5, 10, 15, 20, 25, 30]

def binaryserch(target):
    left = 0 
    right = len(arr)-1
    while left <= right:
        mid = (left+right)//2
        if arr[mid] == target:
            return mid
        elif arr[mid]< target:
            left= mid +1
        else:
            right = mid-1
    return -1

print(binaryserch(10))