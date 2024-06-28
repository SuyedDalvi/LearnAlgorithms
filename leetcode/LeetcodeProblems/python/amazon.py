def calculateMinimumCost(parcels, k): 
    minCost = 0
    # remCapacity = k - len(parcels)

    pSet = set(parcels)
    parcelId = 1
    while(len(pSet) < k): 
        if(parcelId not in pSet):
            print(parcelId)
            pSet.add(parcelId)
            minCost += parcelId
        parcelId += 1

    print(pSet, minCost)
    return minCost


calculateMinimumCost([2, 3, 6, 10, 11], 9)


def lengthOfLongestSubstring(s):
    charMap = {}
    j=0
    maxLength = 0
    for x in range(len(s)):
        if(s[x] in charMap and charMap[s[x]] >= j):
            # print(s[x] , ' exists at ', x , '. Previous position is ', j  )

            j = charMap[s[x]] + 1
            
        charMap[s[x]] = x
        maxLength = max(x-j+1, maxLength)
        # print(charMap)
    return maxLength


def getEncryptedNumber(numbers):
    encryptedNumber = ""

    tempList = []
    for i in range(len(numbers) - 1):
        tempList.append((numbers[i] + numbers[i+1]) % 10)
    
    

    return encryptedNumber


# 
#
#