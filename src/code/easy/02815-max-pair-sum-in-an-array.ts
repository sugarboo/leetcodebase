export function maxSum(nums: number[]): number {
  let ans = -1
  const map = new Map<number, number>()
  for (const num of nums) {
    let max = Number.MIN_SAFE_INTEGER
    let temp = num
    while (temp > 0) {
      max = Math.max(max, temp % 10)
      temp = Math.floor(temp / 10)
    }
    if (map.has(max)) {
      const oldMax = map.get(max)!
      ans = Math.max(ans, num + oldMax)
      if (num > oldMax) {
        map.set(max, num)
      }
    } else {
      map.set(max, num)
    }
  }
  return ans
}
