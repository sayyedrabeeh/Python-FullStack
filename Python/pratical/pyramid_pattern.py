



def pyramid_pattern(rows):
    for i in range(1,rows+1):
        spaces = ' ' *(rows - i)
        stars = '*' * (i*2 -1)
        print(spaces+stars)

pyramid_pattern(5)