def reverse(x: int) -> int:
    if x == 0:
        return 0
    else:
        return x%10 + reverse(x/10)

# print(reverse(123))


#  Reversing String using Recursion
def helper(index, str):    
    if( str == None or index == len(str)):
        print(index)
        return ''
    return helper(index + 1, str) + str[index]
    
def recReverse(str):
    reverse = helper(0, str)
    print(reverse)

recReverse('str')