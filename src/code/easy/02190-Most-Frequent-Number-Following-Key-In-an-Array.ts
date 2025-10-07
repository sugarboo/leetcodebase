export function mostFrequent(nums: number[], key: number): number {
  const freq = new Map<number, number>()
  let maxFreq = 0
  let maxNum = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] === key) {
      freq.set(nums[i], (freq.get(nums[i]) ?? 0) + 1)
    }
    if (freq.get(nums[i])! > maxFreq) {
      maxFreq = freq.get(nums[i])!
      maxNum = nums[i]
    }
  }

  return maxNum
}
