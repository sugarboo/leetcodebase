export function minimumMoves(s: string): number {
  let covered = -1
  let ans = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'X' && i > covered) {
      ans++
      covered = i + 2
    }
  }

  return ans
}
