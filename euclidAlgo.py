
def gcd(firstNum, secNum):
    while(secNum != 0):
        temp = firstNum
        firstNum = secNum
        secNum = temp % firstNum
    return firstNum

print("The GCD of 20 and 8 is", gcd(20,8))
print("The GCD of 24 and 30 is", gcd(24,30))

