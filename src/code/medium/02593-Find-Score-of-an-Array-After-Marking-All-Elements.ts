export function findScore(nums: number[]): number {
  let ans = 0

  const sorted = nums.map((num, i) => [num, i])
  const marked = new Set<number>()

  sorted.sort((a, b) => a[0] - b[0])

  for (let i = 0; i < nums.length; i++) {
    const number = sorted[i][0]
    const index = sorted[i][1]
    if (!marked.has(index)) {
      ans += number
      marked.add(index)
      if (index - 1 >= 0) {
        marked.add(index - 1)
      }
      if (index + 1 < nums.length) {
        marked.add(index + 1)
      }
    }
  }

  return ans
}
