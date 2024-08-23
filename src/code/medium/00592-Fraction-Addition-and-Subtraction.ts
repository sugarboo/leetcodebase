export function fractionAddition(expression: string): string {
  const gcd = (a: number, b: number): number => {
    return b === 0 ? a : gcd(b, a % b)
  }

  const exps = expression.match(/^\d+\/\d+|[+-]\d+\/\d+/gm)
  let num = 0
  let denom = 1
  for (const match of exps!) {
    const [num1, denom1] = match.split('/').map(a => Number(a))
    num = num * denom1 + num1 * denom
    denom *= denom1
  }

  const devisor = Math.abs(gcd(num, denom))

  // Divide the numerator and denominator by the greatest common factor.
  num /= devisor
  denom /= devisor

  // Return the simplified fraction.
  return `${num}/${denom}`
}
