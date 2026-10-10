export function countPairs(nums: number[], target: number): number {
  return countPairs2(nums, target)
}

function countPairs1(nums: number[], target: number): number {
  let ans = 0
  const n = nums.length

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] + nums[j] < target) {
        ans++
      }
    }
  }

  return ans
}

function countPairs2(nums: number[], target: number): number {
  let ans = 0
  const n = nums.length
  nums.sort((a, b) => a - b)

  for (let i = 0, j = n - 1; i < j; i++) {
    while (i < j && nums[i] + nums[j] >= target) {
      j--
    }
    ans += j - i
  }

  return ans
}
