export function maxScore(s: string): number {
  let score = 0
  const n = s.length

  let ones = 0
  for (let i = 0; i < n; i++) {
    if (s[i] === '1') {
      ones++
    }
  }

  let zeroes = 0
  for (let i = 0; i < n - 1; i++) {
    if (s[i] === '0') {
      zeroes++
    } else {
      ones--
    }

    score = Math.max(score, ones + zeroes)
  }

  return score
}
