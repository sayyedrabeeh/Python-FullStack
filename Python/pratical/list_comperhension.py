

data = ["mango", "melon", "madness", "apple",1,32,34,True,5444, "mystery", "banana", "map"]

a= [i for i in data if  isinstance(i,str) and  len(i)<=5]

print(a)