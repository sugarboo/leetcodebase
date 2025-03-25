export function createTargetArray(nums: number[], index: number[]) {
  const ans: number[] = []

  for (let i = 0; i < index.length; i++) {
    ans.splice(index[i], 0, nums[i])
  }

  return ans
}
