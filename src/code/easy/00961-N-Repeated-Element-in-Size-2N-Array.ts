export function repeatedNTimes(nums: number[]): number | void {
  const n = nums.length / 2
  const set = new Set(nums)
  for (const num of set) {
    if (nums.filter(n => n === num).length === n) {
      return num
    }
  }
}
