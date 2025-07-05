

from collections import Counter

s = "hello world"
def char_frequancy(s):
    return Counter(s)

print(char_frequancy(s))

# =========|  METHOD : 2 |=========================

def char_frequency_loop(s):
    result ={}
    for i in s.lower():
        if i == ' ':
            continue
        if i in result:
            result[i]+= 1
        else:
            result[i]=1
    return result

print(char_frequency_loop(s))