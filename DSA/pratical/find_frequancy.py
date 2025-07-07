
arr = [2, 32, 2, 4, 3, 5, 2]

def find_fruancy_of_number_in_array(arr):
    frequancy = {}
    for i in arr:
        if i in frequancy:
            frequancy[i]+=1
        else:
            frequancy[i] = 1
    return frequancy

print(find_fruancy_of_number_in_array(arr))