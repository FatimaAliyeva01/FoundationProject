def find(a,b,c):

dif1 = abs(a+b)
dif2 = abs(a-b)
dif3 = abs(a*b)
return min(dif1,dif2,dif3)
print(find(2,4,6))