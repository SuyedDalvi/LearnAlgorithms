def isPalindrome(x:int) -> bool :
    reverseNum = 0
    quotient = x
    remainder = None
    if(x>0):
        while(quotient/10 != 0):
            remainder = quotient % 10
            reverseNum = reverseNum * 10 + remainder
            quotient = quotient // 10

    print("Input Number:", x, " Reverse Number:", reverseNum, " Is Palindrome:", reverseNum==x)
    return reverseNum == x


isPalindrome(121)
isPalindrome(123)
isPalindrome(10)
isPalindrome(-121)