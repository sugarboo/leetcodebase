export function findLHS(nums: number[]): number {
  let ans = 0
  const freq = new Map<number, number>()

  nums.forEach((num) => {
    if (!freq.has(num)) {
      freq.set(num, 1)
    } else {
      freq.set(num, freq.get(num)! + 1)
    }
  })

  for (const num of freq.keys()) {
    if (!freq.has(num + 1)) {
      continue
    }

    ans = Math.max(ans, freq.get(num)! + freq.get(num + 1)!)
  }

  return ans
}
