export function decodeMessage(key: string, message: string): string {
  const map = new Map<string, string>()
  const base = 'a'.charCodeAt(0)
  let idx = 0
  for (const char of key) {
    if (char !== ' ' && !map.has(char) && idx < 26) {
      map.set(char, String.fromCharCode(base + idx++))
    }
  }
  return message.split('').map(char => map.get(char) ?? char).join('')
}
