export function minNumber(nums1: number[], nums2: number[]): number {
  // 1. If two digits array have common digits, return the smallest common digit
  const set = new Set(nums1)
  let same = 10
  for (const num of nums2) {
    if (set.has(num)) {
      same = Math.min(same, num)
    }
  }
  if (same < 10) {
    return same
  }

  // 2. If no common digits, form the smallest two-digit number
  const x = Math.min(...nums1)
  const y = Math.min(...nums2)
  return Math.min(x * 10 + y, y * 10 + x)
}
