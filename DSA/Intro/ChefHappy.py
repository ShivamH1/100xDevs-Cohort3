t=int(input())
for i in range(t):
    
    s=input()
    s=list(s)
    s1=['a','e','i','o','u']
    count=0
    flag=False
    for i in s:
        if i in s1:
            count=count+1 
            if count==3:
                flag=True
                break
        else:
            count=0 
            
    # print(count)        
    if flag==True:
        print('HAPPY')
    else:
        print('SAD')