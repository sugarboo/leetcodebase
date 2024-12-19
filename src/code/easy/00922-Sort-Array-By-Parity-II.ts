export function sortArrayByParityII(nums: number[]): number[] {
  const ans: number[] = Array.from<number>({ length: nums.length })
  let evenPointer = 0
  let oddPointer = 1

  nums.forEach((num) => {
    if (num % 2 === 0) {
      ans[evenPointer] = num
      evenPointer += 2
    } else {
      ans[oddPointer] = num
      oddPointer += 2
    }
  })

  return ans
}
