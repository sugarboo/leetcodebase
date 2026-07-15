export function gcdOfOddEvenSums(n: number): number {
  // The sum of the first n odd numbers: n^2
  // const sumOdd = n * n
  // The sum of the first n even numbers: n(n + 1)
  // const sumEven = n * (n + 1)

  // gcd(n^2, n(n + 1))
  // = gcd(n * n, n * (n + 1))
  // = n * gcd(n, n + 1)
  // Since n and n + 1 are consecutive integers, their gcd is always 1
  // So, the result is n * 1 = n
  return n
}
