def reverse(x: int) -> int:
    if x == 0:
        return 0
    else:
        return x%10 + reverse(x/10)

print(reverse(123))
