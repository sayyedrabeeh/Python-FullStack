a=0
b=3
c = 2
d =43
e=34

l = float('-inf')
sl = float('-inf')
tl  =float('-inf')

# groupping  

for i in a,b,c,d,e:
    if i > l:
        tl = sl
        sl = l
        l=i
    elif i > sl and i!= l :
        tl = sl
        sl = i
    elif i > tl and i != sl and i != l:
        tl = i 

print('largest :',l)
print('third :',tl)



"""

let a=0
let b=3
let c = 2
let d=31
let f =39
let lar = a
let sec = -Infinity
let thd = -Infinity
function find(num){
    if(num>lar){
        thd = sec
        sec = lar
        lar = num
    }else if(num>sec){
        thd = sec
        sec = num
    }else if(num>thd){
        thd = num
    }
}
find(b)
find(c)
find(d)
find(f)
console.log(lar)
console.log(thd)

"""        