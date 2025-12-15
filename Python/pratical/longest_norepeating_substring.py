s = "abcabcbb"
 
def long_nonrepeating(s):
     chars = set()
     left = 0
     max_len = 0
     start = 0
     for right in range(len(s)):
        while s[right] in chars:
             chars.remove(s[left])
             left+=1
        chars.add(s[right])
        if right -left +1 > max_len:
            max_len = right -left +1
            start = left
            
     return max_len,s[start:start+max_len]
     
a,b = long_nonrepeating(s)
print(a)
print(b)