export function scoreOfParentheses(s: string): number {
  const stack = [0]
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(0)
    } else {
      const curr = stack.pop()!
      stack.push(stack.pop()! + Math.max(2 * curr, 1))
    }
  }
  return stack.pop()!
}
