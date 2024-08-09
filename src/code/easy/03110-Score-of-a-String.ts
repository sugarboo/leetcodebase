export function scoreOfString(s: string): number {
  const len = s.length
  let score = 0

  for (let i = 1; i < len; i++) {
    score += Math.abs(s.charCodeAt(i - 1) - s.charCodeAt(i))
  }

  return score
}
