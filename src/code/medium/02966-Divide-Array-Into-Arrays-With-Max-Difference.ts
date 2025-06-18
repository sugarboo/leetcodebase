export function divideArray(nums: number[], k: number): number[][] {
  nums.sort((a, b) => a - b)

  const ans: number[][] = []

  for (let i = 0; i < nums.length; i += 3) {
    if (nums[i + 2] - nums[i] > k) {
      return []
    }
    ans.push([nums[i], nums[i + 1], nums[i + 2]])
  }

  return ans
}
