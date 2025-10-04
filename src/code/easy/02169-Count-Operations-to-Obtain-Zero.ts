export function countOperations(num1: number, num2: number): number {
  let cnt = 0
  while (num1 !== 0 && num2 !== 0) {
    [num1, num2] = [
      num1 >= num2 ? num1 - num2 : num1,
      num1 < num2 ? num2 - num1 : num2,
    ]
    cnt++
  }
  return cnt
}
