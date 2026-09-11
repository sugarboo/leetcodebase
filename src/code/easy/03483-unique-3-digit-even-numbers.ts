export function totalNumbers(digits: number[]): number {
  const available = Array(10).fill(0)
  for (const digit of digits) {
    available[digit]++
  }

  let count = 0
  for (let num = 100; num <= 999; num += 2) {
    const required = Array(10).fill(0)
    for (const char of `${num}`) {
      const digit = Number(char)
      required[digit]++
    }

    let valid = true
    for (let digit = 0; digit < 10; digit++) {
      if (required[digit] > available[digit]) {
        valid = false
        break
      }
    }
    if (valid) {
      count++
    }
  }

  return count
}
