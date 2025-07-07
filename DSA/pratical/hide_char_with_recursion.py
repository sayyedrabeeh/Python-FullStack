

s = 'hello'
def hide(s):
    if  not s:
        return ' ' 
    if s[0] == 'l':
        return hide(s[1:])
    return s[0] + hide(s[1:])

print(hide(s))