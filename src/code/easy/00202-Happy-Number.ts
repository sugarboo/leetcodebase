function isHappy1(n: number): boolean {
  // If n only has one digit, check n is equals to 1 or 7
  if (n >= 0 && n <= 9) {
    return n === 1 || n === 7
  } else {
    // Calculate the sum of every digits's square
    const digits = `${n}`.split('')
    const sum = digits.reduce((accum, curr) => accum += Number(curr) ** 2, 0)
    return isHappy(sum)
  }
}

function isHappy2(n: number): boolean {
  const seen = new Set()
  while (true) {
    const digits = `${n}`.split('')
    const sum = digits.reduce((accum, curr) => accum += Number(curr) ** 2, 0)
    if (sum === 1) {
      return true
    }
    if (seen.has(sum)) {
      return false
    }
    seen.add(sum)
    n = sum
  }
}

export function isHappy(n: number): boolean {
  return isHappy2(n)
}
