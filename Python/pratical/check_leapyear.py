
def leap_year(year):
    if year % 400 == 0 or (year % 4 == 0 and year %100 !=0):
        return True
    return False
    
print(leap_year(2005))