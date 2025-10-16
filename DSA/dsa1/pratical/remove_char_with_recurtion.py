s = 'rabeeh'

def remove(s,tag):
    if s =='':
        return s 
    if s[0] == tag:
        return remove(s[1:],tag)
    return s[0] + remove(s[1:],tag)

print(remove(s,'h'))