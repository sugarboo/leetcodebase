export function rotateString(s: string, goal: string): boolean {
  const len = s.length
  if (len !== goal.length) {
    return false
  }

  for (let i = 0; i < s.length; i++) {
    const shifted = `${s.substring(i + 1, len)}${s.substring(0, i + 1)}`
    if (shifted === goal) {
      return true
    }
  }
  return false
}
