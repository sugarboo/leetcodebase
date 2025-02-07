export function balancedStringSplit(inputString: string): number {
  let balancedSubstrings = 0

  // Initialize the first character and the balance of characters
  let firstChar = ''
  let charBalance = 0

  // Iterate through the input string
  for (let i = 0; i < inputString.length; i++) {
    const currentChar = inputString[i]
    // If the first character is not set, set it
    if (firstChar === '') {
      firstChar = currentChar
    }

    if (currentChar === firstChar) {
      // If the current character is the same as the first character, increment the balance
      charBalance++
    } else {
      // If the current character is not the same as the first character, decrement the balance
      charBalance--
    }

    // If the balance is 0, we have a balanced substring
    if (charBalance === 0) {
      balancedSubstrings++
      firstChar = ''
    }
  }

  // Return the number of balanced substrings
  return balancedSubstrings
}
