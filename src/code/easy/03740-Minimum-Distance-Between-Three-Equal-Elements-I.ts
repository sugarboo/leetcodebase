export function minimumDistance(nums: number[]): number {
  const map = new Map<number, number[]>()
  nums.forEach((num, index) => {
    map.set(num, map.has(num) ? [...map.get(num)!, index] : [index])
  })
  let ans = Number.MAX_SAFE_INTEGER
  for (const indices of map.values()) {
    const len = indices.length
    if (len < 3) {
      continue
    }
    for (let x = 0; x < len - 2; x++) {
      const i = indices[x]
      const j = indices[x + 1]
      const k = indices[x + 2]
      ans = Math.min(ans, Math.abs(i - j) + Math.abs(j - k) + Math.abs(k - i))
    }
  }
  return ans === Number.MAX_SAFE_INTEGER ? -1 : ans
}
