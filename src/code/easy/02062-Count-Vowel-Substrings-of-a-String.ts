export function countVowelSubstrings(word: string): number {
  const n = word.length

  if (n < 5) {
    return 0
  }

  let ans = 0

  for (let i = 0; i < n; i++) {
    for (let j = i + 4; j < n; j++) {
      const arr = new Set(word.slice(i, j + 1))
      if ([...arr].sort().join('') === 'aeiou') {
        ans++
      }
    }
  }

  return ans
}
