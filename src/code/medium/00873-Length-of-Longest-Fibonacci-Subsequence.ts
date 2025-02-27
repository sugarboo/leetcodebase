export function lenLongestFibSubseq(arr: number[]): number {
  const n = arr.length

  // Store array elements in a set for O(1) lookup
  const numSet = new Set(arr)

  let maxLen = 0
  // Try all the possible first two numbers of sequence
  for (let start = 0; start < n; start++) {
    for (let next = start + 1; next < n; next++) {
      // Starts with first two numbers
      let prev = arr[next]
      let curr = arr[start] + arr[next]
      let len = 2

      // Keep finding next fibonacci number
      while (numSet.has(curr)) {
        // Update values for next iteration
        const temp = curr
        curr += prev
        prev = temp
        maxLen = Math.max(maxLen, ++len)
      }
    }
  }

  return maxLen
}
