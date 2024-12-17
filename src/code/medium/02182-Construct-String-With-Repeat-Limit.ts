export function repeatLimitedString(s: string, repeatLimit: number): string {
  // Helper to get ASCII value of a character
  const getCharCode = (c: string) => c.charCodeAt(0)

  // Final result string
  let result = ''

  // Frequency array to count occurrences of each character ('a' to 'z')
  const freq = Array.from<number>({ length: 26 }).fill(0)
  for (const char of s) {
    freq[getCharCode(char) - getCharCode('a')]++
  }

  // Start from the largest character
  let currentCharIndex = 25
  while (currentCharIndex >= 0) {
    if (freq[currentCharIndex] === 0) {
      // If no occurrences of the current character, move to the next smaller character
      currentCharIndex--
      continue
    }

    // Use as many of the current character as allowed by repeatLimit
    const use = Math.min(freq[currentCharIndex], repeatLimit)
    for (let k = 0; k < use; k++) {
      result += String.fromCharCode(getCharCode('a') + currentCharIndex)
    }
    freq[currentCharIndex] -= use

    if (freq[currentCharIndex] > 0) {
      // Need to add a smaller character
      let smallerCharIndex = currentCharIndex - 1
      // Find the next available smaller character
      while (smallerCharIndex >= 0 && freq[smallerCharIndex] === 0) {
        smallerCharIndex--
      }
      if (smallerCharIndex < 0) {
        // No smaller characters available; terminate the process
        break
      }
      // Append one instance of the smaller character
      result += String.fromCharCode(getCharCode('a') + smallerCharIndex)
      freq[smallerCharIndex]--
    }
  }

  return result
}
