export function findShortestSubArray(nums: number[]): number {
  // Map to store the first occurrence of each element
  const left = {}
  // Map to store the last occurrence of each element
  const right = {}
  // Map to count frequency of each element
  const count = {}

  // Fill the left, right and count maps
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    // Record first occurrence
    if (left[num] === undefined) {
      left[num] = i
    }
    // always update last occurrence
    right[num] = i
    // Count occurrence
    count[num] = (count[num] || 0) + 1
  }

  // Find the degree of the array
  const degree = Math.max(...Object.values<number>(count))

  // Find the smallest subarray length with the same degree
  let minLength = nums.length

  for (const num in count) {
    if (count[num] === degree) {
      minLength = Math.min(minLength, right[num] - left[num] + 1)
    }
  }

  return minLength
}
