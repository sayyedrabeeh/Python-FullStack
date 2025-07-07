


s = "data structures and algorithms"
char_to_remove = 'a'

def  remove_specefic_char(s,ch):
    if not s:
        return  ''
    if  s[0] == ch:
        return remove_specefic_char(s[1:],ch)
    else:
        return s[0] + remove_specefic_char(s[1:],ch)
    
print(remove_specefic_char(s,char_to_remove))