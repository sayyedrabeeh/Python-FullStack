


s = "he12l5lo90"
num = ''
result = []
for i in s:
    if i.isdigit():
        num += i
    else:
        if num:
            result.append(num)
            num = ''
if num:
    result.append(num)

print(' '.join(result))