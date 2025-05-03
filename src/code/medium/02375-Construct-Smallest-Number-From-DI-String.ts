export function smallestNumber(pattern: string): string {
  let ans = ''
  const stack: number[] = []

  for (let i = 0; i <= pattern.length; i++) {
    // Push the next number onto the stack
    stack.push(i + 1)

    // If 'I' is encountered or we reach the end, pop all stack elements
    if (i === pattern.length || pattern[i] === 'I') {
      while (stack.length !== 0) {
        ans += stack.pop()
      }
    }
  }

  return ans
}
