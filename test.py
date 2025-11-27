


sentence = "Python is a powerful and expressive programming language"
longest = ''
s = sentence.split(' ')
for i in s:
    if len(i) > len(longest):
        longest = i 

print(longest)



