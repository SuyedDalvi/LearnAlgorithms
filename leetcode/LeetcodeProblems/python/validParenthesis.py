# Valid Parenthesis: (){}[]
def isValidParenthesis(s) -> int:
    isValid = True
    stack = []
    for c in s:
        if(c == "(" or c =="{" or c == "["):
            stack.append(c)
        elif(c == ")" and (len(stack) == 0 or stack.pop() != "(")):
            isValid = False
            break
        elif(c == "]" and (len(stack) == 0 or stack.pop() != "[")):
            isValid = False
            break
        elif(c == "}" and (len(stack) == 0 or stack.pop() != "{")):
            isValid = False
            break
    if(isValid and len(stack) != 0):
        isValid = False
    return isValid

print(isValidParenthesis("([])"))
print(isValidParenthesis("([)]"))
print(isValidParenthesis("()"))
print(isValidParenthesis("(("))
print(isValidParenthesis("("))
print(isValidParenthesis("]"))
