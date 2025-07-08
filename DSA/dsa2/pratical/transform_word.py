
s= 'sayyed'

def transform_word(s):
    result = []

    for i,char in enumerate(s):
        a= char.lower() * (i+1)
        
        result.append(a)
    return ' '.join(result)

print(transform_word(s))