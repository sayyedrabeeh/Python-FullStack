import random 

def get_rando_number():
    num = random.randint(1,10)
    if num != 5:
        return num

print(get_rando_number())