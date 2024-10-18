export function countMaxOrSubsets(nums: number[]): number {
  let arr: number[] = []
  let count = 0
  const max = nums.reduce((accu, curr) => accu | curr, 0)

  for (let i = 0; i < nums.length; i++) {
    const temp = [...arr]

    if (nums[i] === max) {
      count++
    }

    temp.push(nums[i])

    for (let j = 0; j < arr.length; j++) {
      const newEle = temp[j] | nums[i]

      if (newEle === max) {
        count++
      }

      temp.push(newEle)
    }

    arr = [...temp]
  }

  return count
}
