export function differenceOfSums(n: number, m: number): number {
// arithmetic progression: the sum of integers in the range [1, n] is n * (n + 1) / 2 
  const sum = (n * (n + 1)) / 2
  let divisibleSum = 0

  for (let i = 1; i <= n; i++) {
    if (i % m === 0) {
      divisibleSum += i
    }
  }

  return sum - divisibleSum - divisibleSum
}