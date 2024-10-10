function maxWidthRamp1(nums: number[]): number {
  const n = nums.length
  let maxWidth = 0
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] <= nums[j]) {
        maxWidth = Math.max(j - i, maxWidth)
      }
    }
  }

  return maxWidth
}

function maxWidthRamp2(nums: number[]): number {
  // Build a decreasing stack of indices. This stack will contain indices of potential left boundaries of ramps
  const stack: number[] = []
  for (let i = 0; i < nums.length; i++) {
    // Only push index if the stack is empty or the current number is smaller than the last number in stack.
    // This ensures the stack remains in decreasing order of values
    if (stack.length === 0 || nums[stack[stack.length - 1]] > nums[i]) {
      stack.push(i)
    }
  }

  // Initialize the answer to the smallest possible integer
  let ans = Number.MIN_SAFE_INTEGER

  // Iterate through the array from right to left. It will help us to find the widest ramp for each potential right boundary
  for (let i = nums.length - 1; i >= 0; i--) {
    // While the stack is not empty and the current number is greater than or equal to the number at the top of the stack
    while (stack.length > 0 && nums[i] >= nums[stack[stack.length - 1]]) {
      // Pop the index from the stack
      const index = stack.pop()
      // Update the answer with the maximum width found so far
      ans = Math.max(ans, i - index!)
    }
  }

  // Return the maximum width ramp found
  return ans
}

export function maxWidthRamp(nums: number[]): number {
  return maxWidthRamp2(nums)
}
