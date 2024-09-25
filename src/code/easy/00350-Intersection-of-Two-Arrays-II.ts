export function intersect(nums1: number[], nums2: number[]): number[] {
  const counts: Record<number, number> = {}
  const result: number[] = []

  nums1.forEach(num => counts[num] = ++counts[num] || 1)

  nums2.forEach((num) => {
    if (counts[num]) {
      result.push(num)
      counts[num]--
    }
  })

  return result
}
