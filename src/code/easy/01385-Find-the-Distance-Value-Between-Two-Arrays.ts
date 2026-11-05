export function findTheDistanceValue(arr1: number[], arr2: number[], d: number): number {
  let ans = 0
  for (const num1 of arr1) {
    if (arr2.every(num2 => Math.abs(num1 - num2) > d)) {
      ans++
    }
  }
  return ans
}
