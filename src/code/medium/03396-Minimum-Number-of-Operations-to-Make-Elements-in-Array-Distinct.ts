export function minimumOperations(nums: number[]): number {
  let count = 0
  let uniques = Array.from(new Set(nums))

  while (uniques.length !== nums.length) {
    nums = nums.slice(3)
    uniques = Array.from(new Set(nums))
    count++
  }

  return count
}
