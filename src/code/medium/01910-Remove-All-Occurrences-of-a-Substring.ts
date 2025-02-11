function removeOccurrences1(s: string, part: string): string {
  const stack: string[] = []

  for (const char of s) {
    stack.push(char)

    if (stack.length >= part.length && stack.slice(-part.length).join('') === part) {
      for (let i = 0; i < part.length; i++) {
        stack.pop()
      }
    }
  }

  return stack.join('')
}

function removeOccurrences2(s: string, part: string): string {
  while (s.includes(part)) {
    s = s.replace(part, '')
  }

  return s
}

export function removeOccurrences(s: string, part: string): string {
  return removeOccurrences2(s, part)
}
