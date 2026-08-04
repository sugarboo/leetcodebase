export function findMissingElements(nums: number[]): number[] {
  const ans: number[] = []
  const set = new Set(nums)

  const min = Math.min(...nums)
  const max = Math.max(...nums)
  for (let x = min; x <= max; x++) {
    if (!set.has(x)) {
      ans.push(x)
    }
  }

  return ans
}
