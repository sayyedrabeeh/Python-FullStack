
data = [10, 20, 30, 40, 50]
n= 3
a = [ j for i,j in enumerate(data) if i != n]
print(a)

del data[n]

print(data)