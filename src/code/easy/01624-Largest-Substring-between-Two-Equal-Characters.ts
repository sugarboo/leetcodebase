export function maxLengthBetweenEqualCharacters(s: string): number {
  let maxLength = -1
  const positionMap = new Map<string, number>()

  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (positionMap.has(char)) {
      maxLength = Math.max(i - positionMap.get(char)! - 1, maxLength)
    } else {
      positionMap.set(char, i)
    }
  }

  return maxLength
}
