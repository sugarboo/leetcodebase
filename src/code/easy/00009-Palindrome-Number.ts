/**
 * Solution 1: Convert to String Array and Iterate
 *
 * @param x
 * @returns
 */
export function isPalindrome1(x: number): boolean {
  let result = true
  const array = x.toString().split('')
  const len = array.length

  for (let i = 0; i < len; i++) {
    const a = array[i]
    const b = array[len - i - 1]
    if (a !== b) {
      result = false
    }
  }

  return result
}

/**
 * Solution 2: Convert to String and Reverse
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param x
 * @returns
 */
export function isPalindrome2(x: number): boolean {
  const original = x.toString()
  const reversed = original.split('').reverse().join('')

  return original === reversed
}

/**
 * Solution 3: Revert Half of the Number
 *
 * Time Complexity: O(log(n))
 * Space Complexity: O(1)
 *
 * @param x
 * @returns
 */
export function isPalindrome3(x: number): boolean {
  // Return false if the number is negative or ends with 0 (but is not 0 itself)
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false
  }

  let revertedNumber = 0
  // Keep reversing the second half of the number until it's greater or equal to the first half
  while (x > revertedNumber) {
    revertedNumber = revertedNumber * 10 + x % 10
    x = Math.floor(x / 10)
  }

  // Check if the first half and the second half (or second half / 10) are equal
  return x === revertedNumber || x === Math.floor(revertedNumber / 10)
}

/**
 * Solution 4: Compare with Reverse
 *
 * Time Complexity: O(log(n))
 * Space Complexity: O(1)
 *
 * @param x
 */
export function isPalindrome4(x: number): boolean {
  // If the number is negative, it can't be palindrome
  if (x < 0) {
    return false
  }

  const original = x
  let reversed = 0
  // Reverse the number mathematically
  while (x !== 0) {
    reversed = reversed * 10 + x % 10
    x = Math.floor(x / 10)
  }

  // Compare the original and reversed numbers
  return original === reversed
}

export function isPalindrome(x: number): boolean {
  return isPalindrome4(x)
}

/**
 * Solution Reference: https://medium.com/@AlexanderObregon/solving-the-palindrome-number-on-leetcode-typescript-solutions-walkthrough-5a73c58f9974
 */
