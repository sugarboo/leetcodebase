export function mergeArrays(nums1: number[][], nums2: number[][]): number[][] {
  const map = new Map<number, number>()
  for (const [id, value] of nums1) {
    map.set(id, value)
  }
  for (const [id, value] of nums2) {
    map.set(id, (map.get(id) || 0) + value)
  }
  return Array.from(map.entries()).sort((a, b) => a[0] - b[0])
}
