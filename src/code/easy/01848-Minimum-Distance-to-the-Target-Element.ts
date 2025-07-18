export function getMinDistance(nums: number[], target: number, start: number): number {
  let ans = Number.MAX_SAFE_INTEGER

  nums.forEach((num, i) => {
    if (num === target) {
      ans = Math.min(ans, Math.abs(i - start))
    }
  })

  return ans
}
