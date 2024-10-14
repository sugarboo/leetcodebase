export function longestPalindrome(s: string): number {
  const charCountMap: {
    [key: string]: number
  } = {}

  // Count the frequency of each character
  for (const c of s) {
    charCountMap[c] = (charCountMap[c] || 0) + 1
  }

  let length = 0
  let isOddFound = false

  // Iterate over the character counts
  for (const count of Object.values(charCountMap)) {
    if (count % 2 === 0) {
      // Add even counts directly
      length += count
    } else {
      // Add the largest even part of the odd count
      length += count - 1
      // Track that an odd count was found
      isOddFound = true
    }
  }

  // If there is an odd count, add 1 to the length for the center character
  return length + (isOddFound ? 1 : 0)
}
