

def inverted_pyramid(n):
    for i in range(n,0,-1):
        space = ' ' * (n-i)
        stars = '*'*(2*i-1)
        print(space+stars)

inverted_pyramid(5)
    
