export function mapWordWeights(words: string[], weights: number[]): string {
  let ans = ''
  const start = 'a'.charCodeAt(0)
  const end = 'z'.charCodeAt(0)
  for (const word of words) {
    const sum = [...word].reduce((accu, curr) => accu + weights[curr.charCodeAt(0) - start], 0)
    ans += String.fromCharCode(end - sum % 26)
  }
  return ans
}
