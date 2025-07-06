


sentence = "Python is a powerful and expressive programming language"
s = sentence.split()
loggest = ''

for i in s:
    if len(i) > len(loggest):
        loggest = i 

print(loggest)