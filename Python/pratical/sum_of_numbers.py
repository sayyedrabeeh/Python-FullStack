

data = ["apple", "20", 10, "cat", 3.5, "5", None]

a=0
for i in data:
   if type(i) == int or type(i) == float:
       a+=i

print(a)