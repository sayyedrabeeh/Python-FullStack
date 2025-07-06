

s = "swiss"
a= {}
def  frist_non_repeating_char(s):
    for i in s:
        a[i] = a.get(i,0)+1

    for k,v in a.items():
        if v == 1:
            return k
        
print(frist_non_repeating_char(s))