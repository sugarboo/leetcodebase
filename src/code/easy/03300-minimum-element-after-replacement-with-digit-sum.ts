export function minElement(nums: number[]): number {
  let min = Number.MAX_SAFE_INTEGER

  for (let num of nums) {
    let sum = 0
    while (num > 0) {
      sum += num % 10
      num = Math.floor(num / 10)
    }
    min = Math.min(min, sum)
  }

  return min
}
