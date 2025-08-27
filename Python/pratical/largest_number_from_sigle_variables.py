a=0
b=3
c = 2
d =43
e=34

l = float('-inf')
sl = float('-inf')
tl  =float('-inf')

# groupping  

for i in (a,b,c,d,e):
    if i > l:
        tl = sl
        sl = l
        l=i
    elif i > sl and i!= l :
        tl = sl
        sl = i
    elif i > tl and i != sl and i != l:
        tl = i 

print('largest :',l)
print('third :',tl)
        