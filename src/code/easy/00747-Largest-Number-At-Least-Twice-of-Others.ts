export function dominantIndex(nums: number[]): number {
  const descendingNums = Array.from(nums).sort((a, b) => b - a)
  if (descendingNums.length >= 2 && descendingNums[0] >= 2 * descendingNums[1]) {
    return nums.indexOf(descendingNums[0])
  } else {
    return -1
  }
}
