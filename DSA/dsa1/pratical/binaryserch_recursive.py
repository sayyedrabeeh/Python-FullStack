

arr = [5, 10, 15, 20, 25, 30]

def bineryserch_recursive(arr,target,left=0,right=None):
    if right is None:
        right = len(arr)-1
    if left > right :
        return -1
    mid = (left +right )//2
    if arr[mid] == target:
        return mid
    elif arr[mid] <= target:
       return bineryserch_recursive(arr,target,mid+1,right)
    else:
        return bineryserch_recursive(arr,target,left,mid-1)


print(bineryserch_recursive(arr,15))