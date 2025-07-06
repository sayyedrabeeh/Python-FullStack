

data = [10, 40, 20, 50, 30]

fl=sl= float('-inf')

for i in data:
    if i > fl:
        sl = fl
        fl= i
    elif fl > i > sl:
        sl = i 
print(sl)
