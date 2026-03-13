export function getCommon(nums1: number[], nums2: number[]): number {
  const set1 = new Set(nums1)
  const set2 = new Set(nums2)
  for (const num of set1) {
    if (set2.has(num)) {
      return num
    }
  }

  return -1
}
