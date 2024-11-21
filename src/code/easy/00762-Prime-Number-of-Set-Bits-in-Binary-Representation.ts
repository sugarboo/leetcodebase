export function countPrimeSetBits(left: number, right: number): number {
  const getSetBitsCount = (num: number): number => num.toString(2).replace(/[^1]/g, '').length

  const isPrimeNumber = (num: number): boolean => {
    // Edge cases: numbers less than 2 are not prime
    if (num < 2)
      return false

    // Check divisors from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        // Found a divisor, so not a prime numbers
        return false
      }
    }
    // No divisors found, so it's a prime number
    return true
  }

  let ans = 0
  for (let i = left; i <= right; i++) {
    const count = getSetBitsCount(i)
    if (isPrimeNumber(count)) {
      ans++
    }
  }

  return ans
}
