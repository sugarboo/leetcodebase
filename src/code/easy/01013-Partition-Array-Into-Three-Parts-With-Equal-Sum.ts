export function canThreePartsEqualSum(arr: number[]): boolean {
  const totalSum = arr.reduce((acc, curr) => acc + curr, 0)
  const targetSum = totalSum / 3

  let currentSum = 0
  let count = 0

  for (const num of arr) {
    currentSum += num
    if (currentSum === targetSum) {
      count++
      currentSum = 0
    }
  }

  return count >= 3
}
