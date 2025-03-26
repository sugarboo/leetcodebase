export function minOperations(grid: number[][], x: number): number {
  let result = 0
  // Store all the number from the grid in non-decreasing order
  const nums = grid.flat().sort((a, b) => a - b)
  const n = nums.length
  // Store the median element as the final common value
  const median = nums[Math.floor(n / 2)]

  // Iterate through each number in nums
  for (const num of nums) {
    // If the remainder when divided by x is different, return -1
    if (num % x !== median % x) {
      return -1
    }
    // Add the number of operations required to make the current number equal to final common number
    result += Math.abs(median - num) / x
  }

  return result
}
