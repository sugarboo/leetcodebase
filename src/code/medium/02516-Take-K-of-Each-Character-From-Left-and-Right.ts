export function takeCharacters(s: string, k: number): number {
  // Initialize the frequency of characters 'a', 'b', 'c'
  const frequency = Array.from<number>({ length: 3 }).fill(0)
  for (const char of s) {
    frequency[char.charCodeAt(0) - 'a'.charCodeAt(0)]++
  }
  // If any character in the string occurs fewer than k times
  if (frequency.some(count => count < k)) {
    return -1
  }

  const window: number[] = Array.from<number>({ length: 3 }).fill(0)
  let left = 0
  let maxWindow = 0

  // Find the longest window that leaves k of each character outside
  for (let right = 0; right < s.length; right++) {
    window[s.charCodeAt(right) - 'a'.charCodeAt(0)]++

    // Shrink window if we take too many characters
    while (
      left <= right
      && (
        frequency[0] - window[0] < k
        || frequency[1] - window[1] < k
        || frequency[2] - window[2] < k
      )
    ) {
      window[s.charCodeAt(left) - 'a'.charCodeAt(0)]--
      left++
    }

    maxWindow = Math.max(maxWindow, right - left + 1)
  }

  return s.length - maxWindow
}
