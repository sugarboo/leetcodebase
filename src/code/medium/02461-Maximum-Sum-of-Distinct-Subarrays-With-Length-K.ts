export function maximumSubarraySum(nums: number[], k: number): number {
  let ans = 0
  let currentSum = 0
  let begin = 0
  let end = 0

  const frequencyMap = new Map<number, number>()

  while (end < nums.length) {
    const endNum = nums[end]
    // Increment the frequency of the current number
    frequencyMap.set(endNum, (frequencyMap.get(endNum) || 0) + 1)
    currentSum += endNum
    // If current window already has number or if window is too big, adjust window
    while (frequencyMap.get(endNum)! > 1 || end - begin + 1 > k) {
      const startNum = nums[begin]
      frequencyMap.set(startNum, frequencyMap.get(startNum)! - 1)
      if (frequencyMap.get(startNum) === 0) {
        frequencyMap.delete(startNum)
      }
      currentSum -= startNum
      begin++
    }
    if (end - begin + 1 === k) {
      ans = Math.max(ans, currentSum)
    }
    end++
  }

  return ans
}
