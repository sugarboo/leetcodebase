export function resultArray(nums: number[]): number[] {
  const arr1: number[] = [nums[0]]
  const arr2: number[] = [nums[1]]
  let last1 = nums[0]
  let last2 = nums[1]

  for (let i = 2; i < nums.length; i++) {
    if (last1 > last2) {
      arr1.push(nums[i])
      last1 = nums[i]
    } else {
      arr2.push(nums[i])
      last2 = nums[i]
    }
  }

  return [...arr1, ...arr2]
}