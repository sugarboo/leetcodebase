export function partitionLabels(s: string): number[] {
  // Track the last index of each character
  const last = new Map<string, number>()
  for (let i = 0; i < s.length; i++) {
    last.set(s[i], i)
  }
  // Result array to store the length of each partition
  const result: number[] = []
  // Track the maximum index of characters in the current partition
  let max = 0
  // Track the length of the current partition
  let count = 0
  // Iterate through the string
  for (let i = 0; i < s.length; i++) {
    // Update the maximum index of characters in the current partition
    max = Math.max(max, last.get(s[i])!)
    // Increment the length of the current partition
    count++
    // If the current index is the maximum index, push the length of the current partition to the result array
    if (i === max) {
      result.push(count)
      // Reset the length of the current partition
      count = 0
    }
  }
  // Return the result array
  return result
}
