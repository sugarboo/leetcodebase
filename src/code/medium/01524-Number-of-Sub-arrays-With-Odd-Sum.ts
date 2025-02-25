export function numOfSubarrays(arr: number[]): number {
  const MOD = 10 ** 9 + 7

  let count = 0
  let prefixSum = 0
  let oddCount = 0
  // evenCount starts as 1 since the initial sum (0) is even
  let evenCount = 1
  for (const num of arr) {
    prefixSum += num
    // If currentPrefixSum is even, add the number of odd subarrays
    if (prefixSum % 2 === 0) {
      count += oddCount
      evenCount++
    } else {
      // If currentPrefixSum is odd, add the number of even subarrays
      count += evenCount
      oddCount++
    }
    // To handle large results
    count = count % MOD
  }

  return count
}
