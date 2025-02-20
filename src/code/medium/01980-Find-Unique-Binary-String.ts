export function findDifferentBinaryString(nums: string[]): string {
  let ans = ''

  for (let i = 0; i < nums.length; i++) {
    // If the i-th character of current string is '0', add '1', otherwise add '0'
    ans += nums[i].charAt(i) === '0' ? '1' : '0'
  }

  return ans
}
