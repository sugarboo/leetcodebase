export function sortString(s: string): string {
  let ans = ''

  const frequency = Array(26).fill(0)
  for (const char of s) {
    frequency[char.charCodeAt(0) - 'a'.charCodeAt(0)]++
  }

  while (ans.length < s.length) {
    for (let i = 0; i < 26; i++) {
      if (frequency[i] > 0) {
        ans += String.fromCharCode(i + 'a'.charCodeAt(0))
        frequency[i]--
      }
    }

    for (let i = 25; i >= 0; i--) {
      if (frequency[i] > 0) {
        ans += String.fromCharCode(i + 'a'.charCodeAt(0))
        frequency[i]--
      }
    }
  }

  return ans
}
