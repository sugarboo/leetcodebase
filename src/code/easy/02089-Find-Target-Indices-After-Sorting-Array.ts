export function targetIndices(nums: number[], target: number): number[] {
  nums.sort((a, b) => a - b)

  return nums.map((num, i) => num === target ? i : -1).filter(i => i !== -1)
}
