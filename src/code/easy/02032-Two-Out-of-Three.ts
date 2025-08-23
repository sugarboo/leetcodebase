export function twoOutOfThree(nums1: number[], nums2: number[], nums3: number[]): number[] {
  nums1 = Array.from(new Set(nums1))
  nums2 = Array.from(new Set(nums2))
  nums3 = Array.from(new Set(nums3))

  const map = new Map<number, number>()

  for (const num of nums1) {
    map.set(num, 1)
  }

  for (const num of nums2) {
    map.set(num, map.get(num) ? 2 : 1)
  }

  for (const num of nums3) {
    map.set(num, map.get(num) ? 2 : 1)
  }

  const ans: number[] = []
  for (const [k, v] of map.entries()) {
    if (v >= 2) {
      ans.push(k)
    }
  }

  return ans
}