export function findThePrefixCommonArray(nums1: number[], nums2: number[]): number[] {
  const len = nums1.length

  const prefixCommonArray = Array.from({ length: len }, () => 0) as number[]
  const frequency = Array.from({ length: len + 1 }, () => 0) as number[]
  let commonCount = 0

  // Iterate through the elements of both arrays
  for (let i = 0; i < len; i++) {
    // Increment frequency of current elements in nums1 and nums2
    frequency[nums1[i]]++
    // Check if the element in nums1 has appeared before (common in prefix)
    if (frequency[nums1[i]] === 2) {
      commonCount++
    }
    frequency[nums2[i]]++
    // Check if the element in nums2 has appeared before (common in prefix)
    if (frequency[nums2[i]] === 2) {
      commonCount++
    }
    // Store the count of common elements for the current prefix
    prefixCommonArray[i] = commonCount
  }

  // Return the final array with counts of common elements in each prefix
  return prefixCommonArray
}
