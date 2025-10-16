a = [1,2,6,3,2,1.3,6,5]
sm = float('inf')
lg = float('-inf')
for i in a :
    if i < sm:
        sm = i
    elif i > lg:
        lg = i 

print(sm)
print(lg)
    