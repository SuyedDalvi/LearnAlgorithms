# https://leetcode.com/problems/top-k-frequent-elements/description/

# input={1:4, 2: 3, 3: 5}

# print(sorted(input.items(), key=lambda x:x[1]))

# print(sorted(input, key=input.get, reverse=True))

def topFrequentElements(elements, k):
    print(elements)
    freqMap = {}
    for el in elements:
        if el in freqMap.keys():
            freqMap[el] += 1
        else:
            freqMap[el] = 1
    print(freqMap)
    sortedElements = sorted(freqMap, key=freqMap.get, reverse=True)
    print(sortedElements[:k])
    return sortedElements[:k]


nums = [1,2,2,2,3,3,3,2]
k = 2

print("Result is " + str(topFrequentElements(nums,k)))