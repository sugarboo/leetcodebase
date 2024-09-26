export function isSubsequence(s: string, t: string): boolean {
  const count = t.split('').reduce((i, letter) => s[i] === letter ? ++i : i, 0)

  return count === s.length
}
