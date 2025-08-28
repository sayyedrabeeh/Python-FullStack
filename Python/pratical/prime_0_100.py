 
n =7

# def prime(n):
#     if n < 2:
#         return False
#     else:
#         for i in range(2,int(n**0.5)+1):
#             if n % i == 0 :
#                 return False 
#         return True
    
# a=[]
# for i in range(2,100):
#     pr = prime(i)
#     if pr :
#         a.append(i)
# print(a)

def prime(n):
    for i in range(2,n+1):
        for j in range(2,int(i**0.5)+1):
            if i % j == 0 :
                break
        else:
            print(i)

prime(100)