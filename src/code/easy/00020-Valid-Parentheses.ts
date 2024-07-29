/**
 * Solution 1: Switch and Expected Brackets Stack
 * 
 * @param s 
 * @returns 
 */
function isValid1(s: string):boolean {
  // Initialize an array to store the closing brackets expected
  const expectedBrackets: string[] = []

  // Iterate the string
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    // Push the closing equivalent of any open brackets found
    switch(char) {
      case '(': {
        expectedBrackets.push(')')
        break
      }
      case '[': {
        expectedBrackets.push(']')
        break
      }
      case '{': {
        expectedBrackets.push('}')
        break
      }
      default: {
        // If a close bracket found, check that it matches the last stored open bracket
        if (expectedBrackets.pop() !== char) {
          return false
        }
        break
      }
    }
  }

  // If expected brackets is empty, that means all the open brackets have their valid close brackets
  return !expectedBrackets.length
}

/**
 * Solution 2: While loop with replace
 * 
 * @param s 
 * @returns 
 */
function isValid2(s: string): boolean {
  let str = s

  while(
    str.includes('()') ||
    str.includes('[]') ||
    str.includes('{}')
  ) {
    str = str
      .replace('()', '')
      .replace('[]', '')
      .replace('{}', '')
  }

  return !str.length
}

export function isValid(s: string): boolean {
  return isValid2(s)
}