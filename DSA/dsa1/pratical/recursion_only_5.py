


def recurdion_5_times(n=5):
    if n <=0:
        return
    print(f'recursion call # {n}')
    recurdion_5_times(n-1)

recurdion_5_times()