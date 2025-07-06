

data = [10, 40, 20, 50, 30]

for i in range(len(data)//2):
    data[i],data[-i-1] = data[-i-1],data[i]

 
print(data)