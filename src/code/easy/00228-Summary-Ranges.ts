export function summaryRanges(nums: number[]): string[] {
  const groups: number[][] = []

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      groups.push([nums[i]])
    } else if (i > 0) {
      if (nums[i] - nums[i - 1] === 1) {
        groups[groups.length - 1] = [...groups[groups.length - 1], nums[i]]
      } else {
        groups.push([nums[i]])
      }
    }
  }

  return groups.map((group) => {
    return group.length > 1 ? `${group[0]}->${group[group.length - 1]}` : `${group[0]}`
  })
}
