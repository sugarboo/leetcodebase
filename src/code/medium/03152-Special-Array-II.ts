export function isArraySpecial(nums: number[], queries: number[][]): boolean[] {
  const ans = Array.from<boolean>({ length: queries.length })
  const prefix = Array.from<number>({ length: nums.length })
  prefix[0] = 0

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] % 2 === nums[i - 1] % 2) {
      // New violative index found
      prefix[i] = prefix[i - 1] + 1
    } else {
      prefix[i] = prefix[i - 1]
    }
  }

  for (let i = 0; i < queries.length; i++) {
    const [start, end] = queries[i]
    ans[i] = prefix[end] - prefix[start] === 0
  }

  return ans
}
