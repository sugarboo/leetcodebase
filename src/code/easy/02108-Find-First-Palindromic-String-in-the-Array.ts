export function isPalindrome(word: string): boolean {
  const n = word.length
  let l = 0
  let r = n - 1
  while (l < r) {
    if (word[l] !== word[r]) {
      return false
    }
    l++
    r--
  }
  return true
}

export function firstPalindrome(words: string[]): string {
  for (const word of words) {
    if (isPalindrome(word)) {
      return word
    }
  }

  return ''
}
