export function xorAllNums(nums1: number[], nums2: number[]): number {
  // Initialize XOR results for both arrays
  let xor1 = 0
  let xor2 = 0

  // Get the length of both arrays
  const len1 = nums1.length
  const len2 = nums2.length

  // If nums2 length is odd, each element in nums1 appears odd times in final result
  if (len2 % 2 !== 0) {
    for (const num of nums1) {
      xor1 ^= num
    }
  }

  // If nums1 length is odd, each element in nums2 appears odd times in final result
  if (len1 % 2 !== 0) {
    for (const num of nums2) {
      xor2 ^= num
    }
  }

  // Return the final XOR result
  return xor1 ^ xor2
}
