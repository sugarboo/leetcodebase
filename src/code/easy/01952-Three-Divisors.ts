export function isThree(n: number): boolean {
  let count = 0
  for (let i = 1; i ** 2 <= n; i++) {
    // If i is a divisor of n, then n/i is also a divisor of n
    if (n % i === 0) {
      count++
      // If i * i is not equal to n, then n/i is a different divisor
      if (i ** 2 < n) {
        count++
      }
    }
  }
  return count === 3
}
