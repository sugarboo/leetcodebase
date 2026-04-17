export function isPrimeNumber(num: number): boolean {
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
