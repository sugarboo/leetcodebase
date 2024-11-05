export function findLHS(nums: number[]): number {
  let res = 0
  const map: Record<string, number> = {}

  // Populate the hashmap with counts of each number
  nums.forEach((num) => {
    map[`${num}`] = (map[`${num}`] || 0) + 1
  })

  // Iterate over the keys in hashmap
  for (const key of Object.keys(map)) {
    // Convert key back to number
    const num = Number.parseInt(key)
    if (map[`${num + 1}`]) {
      res = Math.max(map[key] + map[`${num + 1}`], res)
    }
  }

  return res
}
