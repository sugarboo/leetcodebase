export function countDigits(num: number): number {
  let ans = 0

  const digits = Array.from(`${num}`).map(Number)
  for (const digit of digits) {
    if (num % digit === 0) {
      ans++
    }
  }

  return ans
}
