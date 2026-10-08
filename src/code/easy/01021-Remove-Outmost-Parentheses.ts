function removeOuterParentheses(s: string): string {
  let ans = ''
  let depth = 0
  for (const c of s) {
    if (c === ')') {
      depth--
    }
    if (depth > 0) {
      ans += c
    }
    if (c === '(') {
      depth++
    }
  }

  return ans
}