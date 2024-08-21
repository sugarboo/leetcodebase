export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const nums = [...nums1, ...nums2].sort((a, b) => a - b)
  const len = nums.length
  if (len % 2 === 0) {
    return (nums[len / 2 - 1] + nums[len / 2]) / 2
  } else {
    return nums[Math.floor(len / 2)]
  }
}
