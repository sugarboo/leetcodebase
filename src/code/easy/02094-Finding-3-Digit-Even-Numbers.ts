export function findEvenNumbers(digits: number[]): number[] {
  const n = digits.length
  const nums = new Set<number>()

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        if (i !== j && j !== k && k !== i) {
          const num = digits[i] * 100 + digits[j] * 10 + digits[k]
          if (num >= 100 && num % 2 === 0) {
            nums.add(num)
          }
        }
      }
    }
  }

  const ans = Array.from(nums).sort((a, b) => a - b)

  return ans
}
