

data = [5, 3, 8, 1, 2]

i=0
while i < len(data)-1:
    if data[i] < data[i+1]:
        data[i],data[i+1]= data[i+1],data[i]
        i=0
    else:
        i+=1
print(data)