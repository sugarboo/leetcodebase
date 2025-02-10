export function clearDigits(s: string) {
  const stack: string[] = []

  for (const char of s) {
    // If the current character is not a digit, push it to the stack
    if (Number.isNaN(Number(char))) {
      stack.push(char)
    } else {
      // If the current character is a digit, pop the last character from the stack
      if (stack.length > 0) {
        stack.pop()
      }
    }
  }

  return stack.join('')
}
