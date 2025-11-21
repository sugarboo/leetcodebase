export function maxArea(height: number[]): number {
  const n = height.length
  let l = 0
  let r = n - 1
  let ans = 0

  while (l < r) {
    const h = Math.min(height[l], height[r])
    ans = Math.max(ans, h * (r - l))
    if (h === height[l]) {
      l++
    } else {
      r--
    }
  }

  return ans
}
