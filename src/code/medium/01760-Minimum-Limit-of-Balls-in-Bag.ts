export function minimumSize(nums: number[], maxOperations: number): number {
  let result = 0
  // Binary search bounds
  let start = 1
  let end = Math.max(...nums)

  // Perform binary search to find the optimal maxBallsInBag
  while (start <= end) {
    const mid = Math.floor((start + end) / 2)

    let operationsToResult = 0
    // Iterate through each bag in the array
    for (const num of nums) {
      // Calculate the number of operations needed to split this bag
      operationsToResult += Math.ceil(num / mid) - 1
    }

    // Check if a valid distribution is possible with the current middle value
    if (operationsToResult <= maxOperations) {
      result = mid
      // If possible, try a smaller value
      end = mid - 1
    } else {
      // If possible, try a larger value
      start = mid + 1
    }
  }

  return result
}
