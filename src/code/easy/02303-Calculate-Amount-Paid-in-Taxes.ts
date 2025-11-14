export function calculateTax(brackets: number[][], income: number): number {
  let tax = 0
  let prevUpper = 0
  let i = 0
  while (income > 0) {
    const [currUpper, percent] = brackets[i]
    const base = currUpper - prevUpper
    tax += Math.min(base, income) * (percent / 100)
    prevUpper = currUpper
    income -= base
    i++
  }
  return tax
}
