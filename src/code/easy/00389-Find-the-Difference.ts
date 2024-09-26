export function findTheDifference(s: string, t: string): string {
  for (let i = 0; i < s.length; i++) {
    const letter = s[i]
    if (t.includes(letter)) {
      t = t.replace(letter, '')
    }
  }
  return t
}
