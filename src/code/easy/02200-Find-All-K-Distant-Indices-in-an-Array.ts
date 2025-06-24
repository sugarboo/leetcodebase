export function findKDistantIndices(nums: number[], key: number, k: number): number[] {
  const n = nums.length
  const ans: number[] = []
  const indices: number[] = []

  nums.forEach((num, i) => {
    if (num === key) {
      indices.push(i)
    }
  })

  for (let i = 0; i < n; i++) {
    if (indices.some(index => Math.abs(i - index) <= k)) {
      ans.push(i)
    }
  }

  return ans
}
