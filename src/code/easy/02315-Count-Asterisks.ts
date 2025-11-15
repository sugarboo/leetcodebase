export function countAsterisks(s: string): number {
  let valid = true
  let ans = 0
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (c === '|') {
      valid = !valid
    } else if (c === '*' && valid) {
      ans++
    }
  }

  return ans
}
