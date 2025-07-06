a=[None,None,None]
b=[0,None,1]

def check_all_none(a):
    if all(x is None for x in a):
        print('all are None ')
    else:
        print('not all are none ')
    
check_all_none(a)