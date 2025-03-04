export function checkPowersOfThree(n: number): boolean {
  while (n > 0) {
    // Check if this power should be used twice
    if (n % 3 === 2) {
      return false
    }
    // Divide n by 3 to move to the next greater power
    n = Math.floor(n / 3)
  }
  // The ternary representation of n consists only of 0s and 1s
  return true
}
