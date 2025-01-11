export function canConstructKPalindromeStrings(s: string, k: number): boolean {
  if (s.length < k) {
    return false
  }
  const freq = Array.from<number>({ length: 26 }).fill(0)
  for (const char of s) {
    freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++
  }
  let oddCount = 0
  for (const count of freq) {
    if (count % 2 !== 0) {
      oddCount++
    }
  }
  return oddCount <= k
}
