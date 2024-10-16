function findDisappearedNumbers1(nums: number[]): number[] {
  for (let i = 0; i < nums.length; i++) {
    if (nums[Math.abs(nums[i]) - 1] > 0) {
      nums[Math.abs(nums[i]) - 1] *= -1
    }
  }

  const arr: number[] = []

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0)
      arr.push(i + 1)
  }

  return arr
}

function findDisappearedNumbers2(nums: number[]): number[] {
  const set = new Set(nums)
  const res: number[] = []

  for (let i = 1; i <= nums.length; i++) {
    if (!set.has(i)) {
      res.push(i)
    }
  }

  return res
}

export function findDisappearedNumbers(nums: number[]): number[] {
  return findDisappearedNumbers1(nums)
}
