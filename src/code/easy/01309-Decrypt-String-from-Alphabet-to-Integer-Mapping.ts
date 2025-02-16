export function freqAlphabets(s: string): string {
  const ans: string[] = []

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === '#') {
      ans.push(String.fromCharCode(Number(s[i - 2] + s[i - 1]) + 96))
      i -= 2
    } else {
      ans.push(String.fromCharCode(Number(s[i]) + 96))
    }
  }

  return ans.reverse().join('')
}
