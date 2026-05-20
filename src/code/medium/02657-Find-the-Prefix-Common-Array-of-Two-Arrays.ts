export function findThePrefixCommonArray(nums1: number[], nums2: number[]): number[] {
  return findThePrefixCommonArray2(nums1, nums2)
}

function findThePrefixCommonArray1(nums1: number[], nums2: number[]): number[] {
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

function findThePrefixCommonArray2(A: number[], B: number[]): number[] {
  const n = A.length
  const freqA = new Set<number>()
  const freqB = new Set<number>()
  const freq = new Set<number>()
  const ans: number[] = []

  for (let i = 0; i < n; i++) {
    freqA.add(A[i])
    freqB.add(B[i])

    if (freqB.has(A[i])) {
      freq.add(A[i])
    }
    if (freqA.has(B[i])) {
      freq.add(B[i])
    }
    ans.push(freq.size)
  }

  return ans
}
