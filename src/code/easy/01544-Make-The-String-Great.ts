export function makeGood(s: string): string {
  const stack: string[] = []

  for (const curr of s) {
    const prev = stack[stack.length - 1]
    if (prev && curr !== prev && curr.toLowerCase() === prev.toLowerCase()) {
      stack.pop()
    } else {
      stack.push(curr)
    }
  }

  return stack.join('')
}
