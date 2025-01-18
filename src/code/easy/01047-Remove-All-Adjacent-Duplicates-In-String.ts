export function removeDuplicates(s: string): string {
  const stack: string[] = []

  for (let i = 0; i < s.length; i++) {
    const len = stack.length
    if (s[i] === stack[len - 1]) {
      stack.pop()
      continue
    } else {
      stack.push(s[i])
    }
  }

  return stack.join('')
}
