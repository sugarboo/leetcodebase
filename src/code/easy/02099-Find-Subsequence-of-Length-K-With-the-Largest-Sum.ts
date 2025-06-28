export function maxSubsequence(nums: number[], k: number): number[] {
  const vals: {
    index: number
    value: number
  }[] = []
  nums.forEach((num, index) => {
    vals.push({
      index,
      value: num,
    })
  })

  // Sort by value in descending order
  vals.sort((a, b) => b.value - a.value)

  // Get the first k elements
  const targets = vals.slice(0, k)

  // Sort by index in ascending order
  targets.sort((a, b) => a.index - b.index)

  // Return the values of the targets
  return targets.map(({ value }) => value)
}
