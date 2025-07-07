

s =  "hello world"

def function_to_capitalaize_begains_sentence(s):
    s = s.strip()
    if not s:
        return ''
    sentence = s[0].upper() + s[1:]
    if not sentence.endswith('.'):
        sentence+= '.'
    return sentence

print(function_to_capitalaize_begains_sentence(s))