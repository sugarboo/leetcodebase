function containsNearbyDuplicate1(nums: number[], k: number): boolean {
  let result = false

  for (let index = 0; index < nums.length; index++) {
    const num = nums[index]
    const anotherIndex = nums.indexOf(num, index + 1)
    if (anotherIndex === -1) {
      continue
    } else if (index !== anotherIndex) {
      result = Math.abs(index - anotherIndex) <= k
      if (result) {
        break
      }
    }
  }

  return result
}

function containsNearbyDuplicate2(nums: number[], k: number): boolean {
  // Create a map to store the last index of each element
  const map = new Map<number, number>()

  // Iterate through the array
  for (let index = 0; index < nums.length; index++) {
    const num = nums[index]

    // Check if the element was seen before if the index difference is less than k
    if (map.has(num) && Math.abs(index - map.get(num)!) <= k) {
      return true
    }

    // Update the last seen index of the current element
    map.set(num, index)
  }

  // If no such pair is found, return false
  return false
}

export function containsNearbyDuplicate(nums: number[], k: number): boolean {
  return containsNearbyDuplicate2(nums, k)
}
