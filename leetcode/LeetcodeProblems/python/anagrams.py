
# https://neetcode.io/problems/anagram-groups

def groupAnagrams(strs: list[str]) -> list[list[str]]:

    anagramsDict: dict = {}
    for s in strs:
        temp = ''.join(sorted(s))
        if temp in anagramsDict:
            anagramsDict[temp].append(s)
        else: 
            anagramsDict[temp]=[s]

    return list(anagramsDict.values())

strs = ["ate", "eat", "ant", "tan", "cat"]

print(groupAnagrams(strs))
