export function hasAlternatingBits(n: number): boolean {
  const binary = n.toString(2)
  let prev: string = ''

  for (const char of binary) {
    if (char === prev) {
      return false
    }
    prev = char
  }

  return true
}
