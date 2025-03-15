export function minCapability(nums: number[], k: number): number {
  let minReward = 1
  let maxReward = Math.max(...nums)
  const totalHouse = nums.length

  // Use binary search to find the minimum reward possible that allows k possible thefts
  while (minReward < maxReward) {
    const midReward = Math.floor((minReward + maxReward) / 2)
    let possibleThefts = 0

    for (let i = 0; i < totalHouse; i++) {
      if (nums[i] <= midReward) {
        possibleThefts++
        // Skip the next house to maintain the non-adjacent condition
        i++
      }
    }

    if (possibleThefts >= k) {
      maxReward = midReward
    } else {
      minReward = midReward + 1
    }
  }

  return minReward
}
