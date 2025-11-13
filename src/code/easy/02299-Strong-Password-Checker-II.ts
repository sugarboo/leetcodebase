export function strongPasswordCheckerII(password: string): boolean {
  const isDigit = (char: string) => !Number.isNaN(Number.parseFloat(char))
  const isLowerCase = (char: string) => char >= 'a' && char <= 'z'
  const isUpperCase = (char: string) => char >= 'A' && char <= 'Z'
  const isSpecial = (char: string) => ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+'].includes(char)

  const n = password.length
  let hasDigit = false
  let hasLowerCase = false
  let hasUpperCase = false
  let hasSpecial = false

  if (n < 8) {
    return false
  }
  for (let i = 0; i < n; i++) {
    const char = password[i]
    if (i !== n - 1 && char === password[i + 1]) {
      return false
    }
    if (isDigit(char) && !hasDigit) {
      hasDigit = true
    } else if (isLowerCase(char) && !hasLowerCase) {
      hasLowerCase = true
    } else if (isUpperCase(char) && !hasUpperCase) {
      hasUpperCase = true
    } else if (isSpecial(char) && !hasSpecial) {
      hasSpecial = true
    }
  }

  return hasDigit && hasLowerCase && hasUpperCase && hasSpecial
}
