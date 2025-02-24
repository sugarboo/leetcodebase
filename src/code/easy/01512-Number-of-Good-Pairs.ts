function numIdenticalPairs1(nums: number[]): number {
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++
      }
    }
  }
  return count
}

function numIdenticalPairs2(nums: number[]): number {
  const map = new Map<number, number>()

  // Count the number of occurrences of each number
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1)
  }

  // If a number appears n times, then n * (n – 1) // 2 good pairs can be made with this number.
  return Array.from(map.values()).reduce((acc, curr) => acc + curr * (curr - 1) / 2, 0)
}

export function numIdenticalPairs(nums: number[]): number {
  return numIdenticalPairs2(nums)
}
