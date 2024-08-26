def getMaxOccurringChar(str):
    charFrequencyMap = {}
    maxOccurrences = 0
    maxOccurringChar = None

    for char in str:
        if char in charFrequencyMap:
            charFrequencyMap[char] += 1
        else:
            charFrequencyMap[char] = 1

        if charFrequencyMap[char] > maxOccurrences:
            maxOccurrences = charFrequencyMap[char]
            maxOccurringChar = char

    return maxOccurringChar