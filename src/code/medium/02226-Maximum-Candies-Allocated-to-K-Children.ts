export function maximumCandies(candies: number[], k: number): number {
  // Find the maximum number of candies in any pile
  const maxCandiesInPile = Math.max(...candies)

  // Set the initial range for binary search
  let left = 0
  let right = maxCandiesInPile

  // Binary search to find the maximum number of candies each child can get
  while (left < right) {
    // Calculate the middle value of the current range
    const mid = Math.floor((left + right + 1) / 2)
    // Check if it's possible to allocate candies so that each child gets 'middle' candies
    if (canAllocateCandies(candies, k, mid)) {
      // If possible, move to upper half to search for a larger value
      left = mid
    } else {
      // If not possible, move to lower half to search for a smaller value
      right = mid - 1
    }
  }

  // Return the maximum number of candies each child can get
  return left
}

function canAllocateCandies(candies: number[], k: number, maxCandies: number): boolean {
  // Initialize the total number of children that can be allocated candies
  let maxNumOfChildren = 0
  // Iterate over all piles to calculate how many children each pile can allocate
  for (const candy of candies) {
    maxNumOfChildren += Math.floor(candy / maxCandies)
  }
  // Return true if the total number of children that can be allocated candies is greater than or equal to k
  return maxNumOfChildren >= k
}
