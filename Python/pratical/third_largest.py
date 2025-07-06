

data = [10, 40, 20, 50, 30]

fl = sl = tl = float('-inf')

for i in data:
    if i > fl :
        tl=sl
        sl=fl
        fl=i
    elif fl > i > sl:
        tl=sl
        sl=i
    elif sl > i > tl :
        tl = i 
print(tl)