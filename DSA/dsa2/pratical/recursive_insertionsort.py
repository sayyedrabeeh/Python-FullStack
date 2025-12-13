

def recursive(arr,n):
    if n <=1:
        return
    

    recursive(arr,(n-1))
    last = arr[n-1]
    j = n -2 
    while j >= 0 and arr[j] > last:
        arr[j+1] = arr[j]
        j-=1

    arr[j+1] = last
    

arr = [21,12,32,43,23,123,43]
recursive(arr,7)
print(arr)
