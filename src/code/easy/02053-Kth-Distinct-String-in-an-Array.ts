export function kthDistinct(arr: string[], k: number): string {
  // Count the number of occurrences of each string
  const freq = new Map<string, number>()
  for (const char of arr) {
    freq.set(char, (freq.get(char) || 0) + 1)
  }

  // Count the number of distinct strings
  let cnt = 0
  for (const [key, value] of freq.entries()) {
    // If the string occurs only once, increment the count
    if (value === 1) {
      cnt++
      // If the count is equal to the kth distinct string, return the string
      if (cnt === k) {
        return key
      }
    }
  }

  // If there are no distinct strings, return an empty string
  return ''
}
