function intersection1(nums1: number[], nums2: number[]): number[] {
  const result: number[] = []
  nums1.forEach((num) => {
    if (nums2.includes(num) && !result.includes(num)) {
      result.push(num)
    }
  })
  return result
}

function intersection2(nums1: number[], nums2: number[]): number[] {
  return Array.from(new Set(nums1.filter(num => nums2.includes(num))))
}

export function intersection(nums1: number[], nums2: number[]): number[] {
  return intersection2(nums1, nums2)
}
