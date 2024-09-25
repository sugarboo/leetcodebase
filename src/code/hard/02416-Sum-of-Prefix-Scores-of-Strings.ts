export function sumPrefixScores(words: string[]): number[] {
  return words.map((word) => {
    let score = 0
    for (let i = 0; i < word.length; i++) {
      const prefix = word.slice(0, i + 1)
      score += words.filter(word => word.startsWith(prefix)).length
    }
    return score
  })
}
