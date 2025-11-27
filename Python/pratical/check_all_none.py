a=[None,None,None]
b=[0,None,0]

def check_all_none(a):
    if all(x is None for x in b):
        print('all are None ')
    else:
        print('not all are none ')
    
check_all_none(a)