export function removePalindromeSub(s: string): number {
  // Helper function to check if a string is a palindrome
  const isPalindrome = (s: string): boolean => {
    return s === s.split('').reverse().join('')
  }

  // If the string is empty, return 0
  if (s.length === 0) {
    return 0
  }

  // If the string is a palindrome, return 1
  if (isPalindrome(s)) {
    return 1
  }

  // If the string is not a palindrome, return 2
  return 2
}
