a = [1,2,3,2,4,3,4,5,5]
b=set()
for i in a:
    if i not in b:
        b.add(i)
    else:
        a.remove(i)
print(a)