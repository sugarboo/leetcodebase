export function removeOuterParentheses(s: string): string {
  let ans = ''
  let count = 0
  let start = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      count++
    }
    if (s[i] === ')') {
      count--
    }
    if (count === 0) {
      ans += s.slice(start + 1, i)
      start = i + 1
    }
  }
  return ans
}
