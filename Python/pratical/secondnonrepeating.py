a = 'swoiss'
def lastrepeat(a):
    b = {}
    for i in a:
        b[i] = b.get(i,0) + 1
    unique = [i for i in reversed(b) if b[i]==1]
    if len(unique) >= 2:
        return unique[1]
    else:
        return 'None'
print(lastrepeat(a))